const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  // Add other fields as needed
});

const getUserRoleSM = mongoose.model("UsersData", userSchema);

module.exports = getUserRoleSM;
