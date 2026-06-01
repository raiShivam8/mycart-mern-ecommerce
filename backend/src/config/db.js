const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mycart_ecommerce';
  try {
    await mongoose.connect(uri);
    console.log('MongoDB Connected:', uri.includes('127.0.0.1') ? 'Local MongoDB' : 'Atlas MongoDB');
  } catch (error) {
    console.error('MongoDB Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
