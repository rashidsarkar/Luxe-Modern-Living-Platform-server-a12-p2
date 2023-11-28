// adminRoutes.js

const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const makeCoupon = require("../../api/makeCouponCN/makeCouponCN");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const updateCoupon = require("../../api/updateCoupon/updateCoupon");
const deleteCoupon = require("../../api/deleteCouponCN/deleteCouponCN");

const makeCopun = express.Router();

makeCopun.post("/api/admin/makeCopun", verifyToken, makeCoupon);
makeCopun.put("/api/updateCopun/:id", verifyToken, verifyAdmin, updateCoupon);
makeCopun.delete(
  "/api/admin/deleteCopun/:id",
  verifyToken,
  verifyAdmin,
  deleteCoupon
);

module.exports = makeCopun;
