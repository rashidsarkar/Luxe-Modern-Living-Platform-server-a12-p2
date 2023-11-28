const mongoose = require("mongoose");

// Define the schema for the users collection
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  role: { type: String, required: true },
  // Add other fields as needed
});

// Create a model for the users collection
const User = mongoose.model("User", userSchema);
module.exports = User;

// Now you can use the User model to interact with the "users" collection
