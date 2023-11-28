const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const createPaymentIntent = require("../../models/paymentInfoCN");

const paymentInfoRW = express.Router();

paymentInfoRW.post("/create-payment-intent", verifyToken, createPaymentIntent);

module.exports = paymentInfoRW;
