const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
//TODO - Change URI to Server URI
const uri = "mongodb://127.0.0.1:27017";
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ydmxw3q.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// get all rooms
async function run() {
  try {
    const roomsCollection = client
      .db("apartmentDB")
      .collection("apartmentRooms");
    const agreementCollection = client
      .db("apartmentDB")
      .collection("agreementData");

    //api

    app.get("/api/apartmentRooms", async (req, res) => {
      try {
        const page = Number(req.query?.page);
        const limit = Number(req.query?.limit);
        const skip = (page - 1) * limit;
        let sortObj = {};
        let filter = {};
        const result = await roomsCollection
          .find(filter)
          .skip(skip)
          .limit(limit)
          .toArray();
        const count = await roomsCollection.countDocuments(filter);
        res.send({ result, count });
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error");
      }
    });
    //agreementCollection
    //!SECTION 1111

    // Send a ping to confirm a successful connection

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("building is running");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
