const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const {
  createPayment,
  getPaymentsData,
} = require("../../api/paymentsController/paymentsController");

const paymentsRouter = express.Router();

paymentsRouter.post("/payments", verifyToken, createPayment);
paymentsRouter.get("/getPaymentsData/:email", verifyToken, getPaymentsData);

module.exports = paymentsRouter;
