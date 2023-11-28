const mongoose = require("mongoose");

const announceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Announcement = mongoose.model("Announcement", announceSchema);

module.exports = Announcement;
