// adminController.js

const Apartment = require("../../models/apartmentsSM");
const getUserRoleSM = require("../../models/getUserRoleSM");

const { ObjectId } = require("mongoose").Types;

const handleAcceptRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.body.email;
    const agreementAcceptDate = req.body.agreementAcceptDate;
    const isBooked = req.body.isBooked;

    const filterUser = { email: email };
    const updateUser = {
      $set: {
        role: "member",
      },
    };
    const userUpdate = await getUserRoleSM.updateOne(filterUser, updateUser);

    const filerAgreement = { _id: new ObjectId(id) };
    const updatedAgreement = {
      $set: {
        Status: "checked",
        agreementAcceptDate: agreementAcceptDate,
        isBooked: isBooked,
      },
    };
    const options = { upsert: true };
    const agreementUpdate = await Apartment.updateOne(
      filerAgreement,
      updatedAgreement,
      options
    );

    res.status(200).send({ userUpdate, agreementUpdate });
  } catch (error) {
    console.error("Error updating agreement and user:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = handleAcceptRequest;
