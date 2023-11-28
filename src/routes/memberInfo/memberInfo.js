const express = require("express");
const getMembersInfo = require("../../api/getMembersInfo/getMembersInfo");
const verifyToken = require("../../middlewares/variftToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");

const memberInfo = express.Router();

memberInfo.get(
  "/api/admin/memberInfo",
  verifyToken,
  verifyAdmin,
  getMembersInfo
);

module.exports = memberInfo;
