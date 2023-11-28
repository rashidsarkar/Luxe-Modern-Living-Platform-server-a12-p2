const mongoose = require("mongoose");

const membersArgumentSchema = new mongoose.Schema({
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

const MembersArgument = mongoose.model(
  "MembersArgument",
  membersArgumentSchema
);

module.exports = MembersArgument;
