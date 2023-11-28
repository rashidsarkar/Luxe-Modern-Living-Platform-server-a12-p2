const express = require("express");
const getUserBasedArgumentCN = require("../../api/getUserBasedArgumentCN/getUserBasedArgumentCN");
const verifyToken = require("../../middlewares/variftToken");
const getUserBasedArgumentRW = express.Router();

getUserBasedArgumentRW.get(
  "/api/user/getUserBasedArgument/:email",
  verifyToken,
  getUserBasedArgumentCN
);

module.exports = getUserBasedArgumentRW;
