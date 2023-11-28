const mongoose = require("mongoose");
require("dotenv").config();
const getConnectionString = () => {
  let connectionURI;
  if (process.env.NODE_ENV === "development") {
    connectionURI = process.env.DATABASE_LOCAL;
    connectionURI = connectionURI.replace("<username>", process.env.DB_USER);
    connectionURI = connectionURI.replace("<pass>", process.env.DB_PASS);
  } else {
    connectionURI = process.env.DATABASE_PROD;
  }
  return connectionURI;
};
// const uri = "mongodb://127.0.0.1:27017";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ydmxw3q.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  console.log("connecting to DB");
  // const uri = getConnectionString();
  await mongoose.connect(uri, { dbName: process.env.DB_NAME });
  console.log("connected to DB");
};
module.exports = connectDB;
