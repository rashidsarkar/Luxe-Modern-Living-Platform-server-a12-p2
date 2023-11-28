const express = require("express");
const mongoose = require("mongoose");

const createUserAPI = express.Router();

const UsernameSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  blockName: {
    type: String,
    required: true,
  },
  floorNo: {
    type: Number,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  apartmentNo: {
    type: String,
    required: true,
  },
});

const username = mongoose.model("apartmentRooms", UsernameSchema);

const createUser = async (req, res) => {
  try {
    const userInfos = req.body;

    const result = await username.create(userInfos);
    res.send(result);
  } catch (error) {
    console.error("Error adding username:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

createUserAPI.post("/api/userName", createUser);

module.exports = createUserAPI;
