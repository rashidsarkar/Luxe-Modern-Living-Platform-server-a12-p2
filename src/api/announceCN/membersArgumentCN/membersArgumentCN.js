const Apartment = require("../../../models/apartmentsSM");

const getMembersArgument = async (req, res) => {
  try {
    const email = req.params?.email;

    const filter = { agreementReqEmail: email, isBooked: true };
    const result = await Apartment.find(filter);
    res.send(result);
  } catch (error) {
    console.error("Error get members' argument Info:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getMembersArgument;
