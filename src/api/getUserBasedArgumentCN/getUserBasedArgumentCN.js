const Agreement = require("../../models/getUserBasedArgumentSchema");

const getUserBasedArgumentCN = async (req, res) => {
  try {
    const email = req.params?.email;
    const filter = { agreementReqEmail: email };
    const result = await Agreement.find(filter);
    res.send(result);
  } catch (error) {
    console.error("Error get argument Info:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getUserBasedArgumentCN;
