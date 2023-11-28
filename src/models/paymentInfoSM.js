const mongoose = require("mongoose");

const paymentInfoSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userImage: { type: String, required: true },
  agreementAcceptDate: { type: String, required: true },
  agreementRequestDate: { type: String, required: true },
  floor: { type: Number, required: true },
  blockName: { type: String, required: true },
  apartmentNo: { type: String, required: true },
  payForMunth: { type: String, required: true },
  billPrice: { type: Number, required: true },
  transactionId: { type: String, required: true },
});

const PaymentData = mongoose.model("PaymentInfo", paymentInfoSchema);

module.exports = PaymentData;
