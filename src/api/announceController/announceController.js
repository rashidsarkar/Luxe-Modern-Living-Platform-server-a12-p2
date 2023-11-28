const Announcement = require("../../models/announceSM");

const createAnnouncement = async (req, res) => {
  try {
    const data = req.body;
    const result = await Announcement.create(data);
    res.send(result);
  } catch (error) {
    console.error("Error creating announcement:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createAnnouncement,
};
