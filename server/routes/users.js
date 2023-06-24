const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, address, email, contactNumber, projectName } = req.body;
    const user = new User({ name, address, email, contactNumber, projectName });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Retrieve a user by contact number
router.get('/:contactNumber', async (req, res) => {
  try {
    const contactNumber = req.params.contactNumber;
    const user = await User.findOne({ contactNumber });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user' });
  }
});

// Update a user by contact number
router.put('/:contactNumber', async (req, res) => {
  try {
    const contactNumber = req.params.contactNumber;
    const { name, address, email, projectName } = req.body;
    const user = await User.findOneAndUpdate(
      { contactNumber },
      { name, address, email, projectName },
      { new: true }
    );
    if (user) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' });
  }
});

// Delete a user by contact number
router.delete('/:contactNumber', async (req, res) => {
  try {
    const contactNumber = req.params.contactNumber;
    const user = await User.findOneAndDelete({ contactNumber });
    if (user) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
});

module.exports = router;
