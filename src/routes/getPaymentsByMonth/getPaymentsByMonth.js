const express = require("express");
const getPaymentsByMonth = require("../../api/PaymentByMonthCN/PaymentByMonthCN");

const paymentsRouterDate = express.Router();

paymentsRouterDate.get("/PaymentByMounth/:email", getPaymentsByMonth);

module.exports = paymentsRouterDate;
