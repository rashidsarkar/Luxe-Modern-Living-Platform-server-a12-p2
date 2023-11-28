const PaymentData = require("../../models/paymentInfoSM");

const getPaymentsByMonth = async (req, res) => {
  try {
    const data = req.body;

    const monthName = req.query?.monthname;
    const email = req.params?.email;

    const filter = {
      payForMunth: {
        $regex: new RegExp(monthName, "i"),
      },
      userEmail: email,
    };

    const payments = await PaymentData.find(filter);
    res.send(payments);
  } catch (error) {
    console.error("Error getting payments by month:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getPaymentsByMonth;
