const jwt = require("jsonwebtoken");
require("dotenv").config();
//midleware

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log("there is no token on you");
    return res.status(401).send({ message: "Unauthorized" });
  }
  const token = req.headers.authorization.split(" ")[1];
  // jwt.verify(token, process.env.ACCESS_TOKEN_);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      // res error
      return res.status(401).send({ message: "Unauthorized" });
    }

    req.decoded = decoded;
    next();
  });
};
module.exports = verifyToken;
