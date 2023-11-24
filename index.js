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
    const userCollection = client.db("apartmentDB").collection("usersData");

    //!SECTION JWT api
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    //midleware
    const verifyToken = (req, res, next) => {
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      const token = req.headers.authorization.split(" ")[1];
      // jwt.verify(token, process.env.ACCESS_TOKEN_);
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          // res error
          return res.status(401).send({ message: "Unauthorized" });
        }
        req.decoded = decoded;
        next();
      });
    };

    //user veri
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "Forbidden" });
      }
      next();
    };

    //user api
    //!SECTION creat api 1
    app.post("/api/createUser", async (req, res) => {
      try {
        let user = req.body;

        user = {
          name: user.name,
          email: user.email,
          role: "user",
        };

        const query = { email: user.email };
        const existingUser = await userCollection.findOne(query);
        if (existingUser) {
          return res.send({ mess: "user already exists", insertedId: null });
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // make member api
    //!SECTION creat api 2
    app.patch("/api/makeMember/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            role: "member",
          },
        };
        const result = await userCollection.updateOne(query, updatedDoc);
        res.send(result);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    app.get("/api/user/userRole/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "Forbidden  access" });
        }
        const query = { email: email };
        const user = await userCollection.findOne(query);
        let userRole = false;
        if (user) {
          if (user?.role === "admin") {
            userRole = "admin";
            return res.send({ userRole });
          } else if (user?.role === "member") {
            userRole = "member";
            return res.send({ userRole });
          } else if (user?.role === "user") {
            userRole = "user";
            return res.send({ userRole });
          }
        }
        res.send({ userRole });
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    app.get("/user/admin/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "Forbidden" });
        }
        const query = { email: email };
        const user = await userCollection.findOne(query);
        let admin = false;
        if (user) {
          admin = user?.role === "admin";
        }
        res.send({ admin });
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error");
      }
    });

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
    app.post("/api/user/createAgreement", async (req, res) => {
      try {
        const data = req.body;

        const result = await agreementCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error");
      }
    });

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
