// adminController.js

const couponSchema = require("../../models/getCouponSchema");

const makeCoupon = async (req, res) => {
  try {
    const couponData = req.body;
    const result = await couponSchema.create(couponData);
    res.send(result);
  } catch (error) {
    console.error("Error creating coupon:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = makeCoupon;
