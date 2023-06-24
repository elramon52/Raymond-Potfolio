const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  projectName: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

User.createIndexes(); // Add this line to create indexes for the schema fields

module.exports = User;
