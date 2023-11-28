const express = require("express");
const getMembersArgument = require("../../api/announceCN/membersArgumentCN/membersArgumentCN");
const verifyToken = require("../../middlewares/variftToken");
const membersArgumentRW = express.Router();

membersArgumentRW.get(
  "/api/user/getMembersArgument/:email",
  verifyToken,
  getMembersArgument
);

module.exports = membersArgumentRW;
