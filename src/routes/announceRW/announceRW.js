const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const getAnnouncements = require("../../api/announceCN/announceCN");
const announceRW = express.Router();

announceRW.get("/api/announce", getAnnouncements);

module.exports = announceRW;
