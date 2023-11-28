// adminRoutes.js

const express = require("express");
const handleAcceptRequest = require("../../api/handleAcceptRequest/handleAcceptRequest");
const verifyToken = require("../../middlewares/variftToken");

const handleAcptreq = express.Router();

handleAcptreq.put(
  "/api/admin/handleAcptreq/:id",
  verifyToken,
  handleAcceptRequest
);

module.exports = handleAcptreq;
