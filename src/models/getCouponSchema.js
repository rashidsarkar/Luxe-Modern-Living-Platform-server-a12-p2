const mongoose = require("mongoose");

const coupon = new mongoose.Schema({
  couponCode: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true },
  description: { type: String, required: true },
});

const couponSchema = mongoose.model("couponCollection", coupon);

module.exports = couponSchema;
