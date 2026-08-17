const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./src/models/User");

const createAdmin = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mycart_ecommerce";
    await mongoose.connect(mongoUri);

    const adminEmail = "adminshivam@gmail.com";
    const adminPassword = "123456";

    const exists = await User.findOne({ email: adminEmail });

    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await User.create({
      name: "Shivam",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

createAdmin();