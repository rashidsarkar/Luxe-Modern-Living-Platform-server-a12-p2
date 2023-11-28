const express = require("express");
const getUserRole = require("../../api/getUserRoleCL/getUserRoleCN");
const verifyToken = require("../../middlewares/variftToken");
const getUserRoleRW = express.Router();

getUserRoleRW.get("/api/user/userRole/:email", verifyToken, getUserRole);

module.exports = getUserRoleRW;
