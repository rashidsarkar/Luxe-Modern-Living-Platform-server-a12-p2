const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  floorNo: { type: Number, required: true },
  blockName: { type: String, required: true },
  apartmentNo: { type: String, required: true },
  rent: { type: Number, required: true },
  agreementReqName: { type: String, required: true },
  agreementReqEmail: { type: String, required: true },
  Status: { type: String, required: true },
  agreementRequestDate: { type: String, required: true },
  image: { type: String, required: true },
  agreementAcceptDate: { type: mongoose.Schema.Types.Mixed, required: true },
  isBooked: { type: Boolean, default: false },
});

const createAgreementSchema = mongoose.model("Apartment", apartmentSchema);

module.exports = createAgreementSchema;
