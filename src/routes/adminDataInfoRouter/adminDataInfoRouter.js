const express = require("express");
const getDataInfo = require("../../api/adminDataInfoController/adminDataInfoController");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/variftToken");

const adminDataInfoRouter = express.Router();
//TODO -  Verify admin dele jay ga

adminDataInfoRouter.get(
  "/api/admin/dataInfo",
  verifyToken,
  verifyAdmin,

  getDataInfo
);

module.exports = adminDataInfoRouter;
