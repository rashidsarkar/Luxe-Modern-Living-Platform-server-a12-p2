const getUserRoleSM = require("../../models/getUserRoleSM");

const getMembersInfo = async (req, res) => {
  try {
    const membersInfo = await getUserRoleSM.find({ role: "member" });
    res.send(membersInfo);
  } catch (error) {
    console.error("Error fetching Member Info:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getMembersInfo;
