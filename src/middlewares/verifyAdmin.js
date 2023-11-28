const getUserRoleSM = require("../models/getUserRoleSM");

const verifyAdmin = async (req, res, next) => {
  console.log("admin open");
  const email = req.decoded.email;
  const query = { email: email };
  const user = await getUserRoleSM.findOne(query);
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    console.log("you are not admin");
    return res.status(403).send({ message: "Forbidden" });
  }
  console.log("admin done ");
  next();
};
module.exports = verifyAdmin;
