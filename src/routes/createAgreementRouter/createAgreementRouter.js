const express = require("express");
const verifyToken = require("../../middlewares/variftToken");
const createAgreementControlar = require("../../api/createAgreementControlar/createAgreementControlar");
const createAgreementRouter = express.Router();
createAgreementRouter.post(
  "/api/user/createAgreement",

  createAgreementControlar
);
module.exports = createAgreementRouter;
