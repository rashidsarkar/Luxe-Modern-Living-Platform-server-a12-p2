// argumentController.js

const Apartment = require("../../models/apartmentsSM");

const getArgumentRequests = async (req, res) => {
  try {
    const query = { Status: "pending" };
    const result = await Apartment.find(query);
    res.send(result);
  } catch (error) {
    console.error("Error getting argument requests:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getArgumentRequests;
