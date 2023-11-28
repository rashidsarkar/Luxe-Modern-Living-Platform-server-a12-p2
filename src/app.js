const express = require("express");
const applyMiddleWare = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const verifyAdmin = require("./middlewares/verifyAdmin");

const authenticationRouters = require("./routes/authentication/index");
const apartmentsDataRouters = require("./routes/ApartmentData/index");

const getCouponRouter = require("./routes/getCupon/getCupon");
const createUserAPI = require("./routes/createUser/createUser");
const createAgreementRouter = require("./routes/createAgreementRouter/createAgreementRouter");
const createToken = require("./api/authentication/controllers/createToken");
const getUserRoleRW = require("./routes/getUserRoleRW/getUserRoleRW");
const getUserBasedArgumentRW = require("./routes/getUserBasedArgumentRW/getUserBasedArgumentRW");
const announceRW = require("./routes/announceRW/announceRW");
const membersArgumentRW = require("./routes/membersArgumentRW/membersArgumentRW");
const paymentInfoRW = require("./routes/paymentInfoRW/paymentInfoRW");
const paymentsRouter = require("./routes/paymentsRW/paymentsRW");
const paymentsRouterDate = require("./routes/getPaymentsByMonth/getPaymentsByMonth");
const userAdminRouter = require("./routes/userAdminRouter/userAdminRouter");
const adminDataInfoRouter = require("./routes/adminDataInfoRouter/adminDataInfoRouter");
const memberInfo = require("./routes/memberInfo/memberInfo");
const deleteMember = require("./routes/deleteMember/deleteMember");
const makeAnnounce = require("./routes/makeAnnounce/makeAnnounce");
const argumentRequest = require("./routes/argumentRequest/argumentRequest");
const handleAcptreq = require("./routes/handleAcptreq/handleAcptreq");
const makeCopun = require("./routes/makeCopun/makeCopun");

applyMiddleWare(app);

app.use(authenticationRouters);
app.use(apartmentsDataRouters);

app.use(getCouponRouter);
app.use(createUserAPI);
app.use(createAgreementRouter);
app.use(getUserRoleRW);
app.use(getUserBasedArgumentRW);
app.use(announceRW);
app.use(membersArgumentRW);
app.use(paymentInfoRW);
app.use(paymentsRouter);
app.use(paymentsRouterDate);
app.use(userAdminRouter);
app.use(adminDataInfoRouter);
app.use(memberInfo);
app.use(deleteMember);
app.use(makeAnnounce);
app.use(argumentRequest);
app.use(handleAcptreq);
app.use(makeCopun);

app.get("/", (req, res) => {
  res.send("building is running");
});

app.all("*", (req, res, next) => {
  const error = new Error(`the requested url is invalid [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  // Handle the error and send a response to the client
  res.status(err.status || 500).json({
    message: err.message,
  });
});
// const main = async () => {
//   await connectDB();

//   app.listen(port, () => {
//     console.log(`server is running on mongos port: ${port}`);
//   });
// };
// main();
module.exports = app;
