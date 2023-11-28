// argumentRoutes.js

const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const getArgumentRequests = require("../../api/argumentController/argumentController");

const argumentRequest = express.Router();

argumentRequest.get("/api/argumentRequest", verifyToken, getArgumentRequests);

module.exports = argumentRequest;
