const UserSchema = require("../../../models/createUserSchema");

const createUserAP = async (req, res) => {
  try {
    let user = req.body;

    user = {
      name: user.name,
      email: user.email,
      role: "user",
    };

    const query = { email: user.email };
    const existingUser = await UserSchema.findOne(query);
    if (existingUser) {
      return res.send({ mess: "user already exists", insertedId: null });
    }
    const result = await UserSchema.create(user);
    res.send(result);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = createUserAP;
