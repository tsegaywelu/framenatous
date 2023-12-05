const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/framnatous',{enableUtf8Validation:true});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDatabase;