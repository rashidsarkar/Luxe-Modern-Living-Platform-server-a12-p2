const express = require("express");
const getUserAdminStatus = require("../../api/userAdminController/userAdminController");
const verifyToken = require("../../middlewares/variftToken");

const userAdminRouter = express.Router();

userAdminRouter.get("/user/admin/:email", verifyToken, getUserAdminStatus);

module.exports = userAdminRouter;
