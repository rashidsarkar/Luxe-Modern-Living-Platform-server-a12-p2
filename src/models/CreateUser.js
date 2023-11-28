const { Schema, default: mongoose } = require("mongoose");

const UsernameSchema = new Schema({
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
module.exports = username;
