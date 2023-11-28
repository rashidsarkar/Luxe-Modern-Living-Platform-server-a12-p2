const username = require("../../../models/CreateUser");

const createUser = async (req, res) => {
  try {
    // const name = req.params.name;
    const userInfo = req.body;

    const result = await username.insertMany(userInfo);
    res.send(result);
  } catch (error) {
    console.error("Error adding username:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = createUser;
