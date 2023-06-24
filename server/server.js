const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const User = require('./models/User'); // Import the User model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://elramon52:0000@crudbackend.lcbmbnv.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // Create the User schema if it does not exist
  try {
    await User.init();
    console.log('User schema created');
    // Check if the fields are created
    const userFields = User.schema.obj;
    const fieldNames = Object.keys(userFields);
    if (fieldNames.length === 0) {
      console.log('User fields are not created');
    } else {
      console.log('User fields created:', fieldNames);
    }
  } catch (error) {
    console.error('Failed to create User schema:', error);
  }
});

// API routes
app.use('http://localhost:5000/users', usersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
