const UserSchema = require("../../models/createUserSchema");

const getUserAdminStatus = async (req, res) => {
  try {
    const email = req.params.email;

    if (email !== req.decoded.email) {
      return res.status(403).send({ message: "Forbidden" });
    }

    const query = { email: email };
    const user = await UserSchema.findOne(query);
    let admin = false;

    if (user) {
      admin = user?.role === "admin";
    }

    res.send({ admin });
  } catch (error) {
    console.error("Error fetching user admin status:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getUserAdminStatus;
