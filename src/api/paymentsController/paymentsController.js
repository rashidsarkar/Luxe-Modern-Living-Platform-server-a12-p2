const PaymentData = require("../../models/paymentInfoSM");

const createPayment = async (req, res) => {
  try {
    const payment = req.body;
   
    const paymentResult = await PaymentData.create(payment);
    res.send(paymentResult);
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getPaymentsData = async (req, res) => {
  try {
    const email = req.params?.email;
    const query = { userEmail: email };
    const result = await PaymentData.find(query);
    res.send(result);
  } catch (error) {
    console.error("Error fetching payments data:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { createPayment, getPaymentsData };
