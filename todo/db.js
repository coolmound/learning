const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Julia:banana1909@cluster0.p9vhf.mongodb.net/todoDB?retryWrites=true&w=majority"
    );

    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
