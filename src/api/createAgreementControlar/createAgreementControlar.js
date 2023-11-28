const createAgreementSchema = require("../../models/createAgreementSchema");

const createAgreementControlar = async (req, res) => {
  try {
    const data = req.body;

    const agreementReqEmail = req.body.agreementReqEmail;

    const filter = { agreementReqEmail: agreementReqEmail };
    const existingAgreement = await createAgreementSchema.find(filter);

    const hasAcceptedAgreement = existingAgreement.some(
      (existing) => existing.isBooked === true
    );

    if (hasAcceptedAgreement) {
      // If an agreement with the provided email already exists and has been accepted
      return res
        .status(406)
        .send("Agreement already exists and has been accepted for this email");
    }

    const result = await createAgreementSchema.create(data);
    res.send(result);
  } catch (error) {
    console.error("Error creating agreement:", error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = createAgreementControlar;
