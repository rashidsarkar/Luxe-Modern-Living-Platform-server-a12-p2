const express = require("express");
const { ObjectId } = require("mongodb");
const verifyToken = require("../../middlewares/variftToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const updateMemberRole = require("../../api/updateMemberRole/updateMemberRole");

const deleteMember = express.Router();

deleteMember.patch(
  "/api/admin/deleteMember/:id",
  verifyToken,
  verifyAdmin,
  updateMemberRole
);

module.exports = deleteMember;
