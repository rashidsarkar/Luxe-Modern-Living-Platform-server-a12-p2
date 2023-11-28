// adminController.js

const { ObjectId } = require("mongodb");
const couponSchema = require("../../models/getCouponSchema");

const deleteCoupon = async (req, res) => {
  try {
    const id = req.params?.id;
    const filter = { _id: new ObjectId(id) };
    const result = await couponSchema.deleteOne(filter);
    res.send(result);
  } catch (error) {
    console.error("Error deleting coupon:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = deleteCoupon;
