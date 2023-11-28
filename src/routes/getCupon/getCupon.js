// copon api
const express = require("express");
const getCouponControlar = require("../../api/getCouponControlar/getCouponControlar");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/variftToken");
const getCouponRouter = express.Router();

getCouponRouter.get("/api/coupon", getCouponControlar);
module.exports = getCouponRouter;
