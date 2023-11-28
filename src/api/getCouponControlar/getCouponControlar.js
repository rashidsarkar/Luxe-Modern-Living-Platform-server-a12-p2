const couponSchema = require("../../models/getCouponSchema");

const getCouponControlar = async (req, res) => {
  try {
    // const copon = req.body;

    const result = await couponSchema.find();
    res.send(result);
  } catch (error) {
    console.error("Error get argument Info:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getCouponControlar;
