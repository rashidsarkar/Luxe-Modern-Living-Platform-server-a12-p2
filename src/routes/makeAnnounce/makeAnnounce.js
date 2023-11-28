const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const {
  createAnnouncement,
} = require("../../api/announceController/announceController");

const makeAnnounce = express.Router();

makeAnnounce.post(
  "/api/makeAnnounce",
  verifyToken,
  verifyAdmin,
  createAnnouncement
);

module.exports = makeAnnounce;
