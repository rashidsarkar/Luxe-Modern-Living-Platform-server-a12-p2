const { Schema, model } = require("mongoose");

const ApartmentRooms = new Schema({
  image: {
    type: "String",
    required: true,
  },
  floorNo: {
    type: "Number",
    required: true,
  },
  blockName: {
    type: "String",
    required: true,
  },
  apartmentNo: {
    type: "string",
    required: true,
  },
  rent: {
    type: "Number",
    required: true,
  },
});

const apartment = model("apartmentroom", ApartmentRooms);
module.exports = apartment;
