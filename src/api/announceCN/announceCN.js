const Announcement = require("../../models/announceSM");

const getAnnouncements = async (req, res) => {
  try {
    const result = await Announcement.find();
    res.send(result);
  } catch (error) {
    console.error("Error fetching announce Info:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAnnouncements;
