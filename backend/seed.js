const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./src/models/User");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

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