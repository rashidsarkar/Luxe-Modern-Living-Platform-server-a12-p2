require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const PaymentInfo = require("../api/paymentInfoSM/paymentInfoSM");
const createPaymentIntent = async (req, res) => {
  try {
    const { price } = req.body;

    if (isNaN(price) || price <= 0) {
      throw new Error("Invalid billPrice value");
    }

    const amount = price * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    // await paymentInfo.save();

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = createPaymentIntent;
