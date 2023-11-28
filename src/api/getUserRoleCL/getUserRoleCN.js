const getUserRoleSM = require("../../models/getUserRoleSM");

const getUserRole = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req.decoded.email) {
      return res.status(403).send({ message: "Forbidden access" });
    }

    const query = { email: email };
    const user = await getUserRoleSM.findOne(query);
    let userRole = false;

    if (user) {
      if (user.role === "admin") {
        userRole = "admin";
      } else if (user.role === "member") {
        userRole = "member";
      } else if (user.role === "user") {
        userRole = "user";
      }
    }

    res.send({ userRole });
  } catch (error) {
    console.error("Error fetching user role:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getUserRole;
