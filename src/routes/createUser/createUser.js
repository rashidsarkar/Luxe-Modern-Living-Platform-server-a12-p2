const createUserAP = require("../../api/user/controler/createUserAPI");
const UserSchema = require("../../models/createUserSchema");
const express = require("express");
const createUserAPI = express.Router();
createUserAPI.post("/api/createUser", createUserAP);
module.exports = createUserAPI;
