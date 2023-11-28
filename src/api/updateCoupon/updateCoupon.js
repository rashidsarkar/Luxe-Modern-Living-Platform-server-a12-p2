// adminController.js

const { ObjectId } = require("mongodb");
const couponSchema = require("../../models/getCouponSchema");

const updateCoupon = async (req, res) => {
  try {
    const id = req.params?.id;
    const filter = { _id: new ObjectId(id) };
    const cuponData = req.body;
    const updateDoc = {
      $set: {
        couponCode: cuponData.couponCode,
        description: cuponData.description,
        discountPercentage: cuponData.discountPercentage,
      },
    };

    const result = await couponSchema.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    console.error("Error updating coupon:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateCoupon;
