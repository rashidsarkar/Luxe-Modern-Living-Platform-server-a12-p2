const mongoose = require("mongoose");

// Define the schema for the users collection
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
});

// Create a model for the users collection
const UserSchema = mongoose.model("usersData", userSchema);

module.exports = UserSchema;
