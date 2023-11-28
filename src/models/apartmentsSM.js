const mongoose = require("mongoose");

let Apartment;

try {
  // Check if the model already exists
  Apartment = mongoose.model("Apartment");
} catch (error) {
  // If the model doesn't exist, define it
  const apartmentSchema = new mongoose.Schema({
    floorNo: { type: Number, required: true },
    blockName: { type: String, required: true },
    apartmentNo: { type: String, required: true },
    rent: { type: Number, required: true },
    agreementReqName: { type: String, required: true },
    agreementReqEmail: { type: String, required: true },
    status: { type: String, required: true },
    agreementRequestDate: { type: String, required: true },
    image: { type: String, required: true },
    agreementAcceptDate: { type: Boolean, default: false },
    isBooked: { type: Boolean, default: false },
  });

  // Create the model
  Apartment = mongoose.model("Apartment", apartmentSchema);
}

module.exports = Apartment;
