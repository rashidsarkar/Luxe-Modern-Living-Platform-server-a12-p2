const { ObjectId } = require("mongodb");
const getUserRoleSM = require("../../models/getUserRoleSM");

const updateMemberRole = async (req, res) => {
  try {
    const id = req.params.id;

    const query = { _id: new ObjectId(id) };
    const updatedDoc = {
      $set: {
        role: "user",
      },
    };

    const result = await getUserRoleSM.updateOne(query, updatedDoc);

    if (result.modifiedCount > 0) {
      res.status(200).send({ message: "User role updated successfully." });
    } else {
      res.status(404).send({ message: "User not found." });
    }
  } catch (error) {
    console.error("Error updating member role:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateMemberRole;
