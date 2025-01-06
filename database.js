const mongoose = require("mongoose");

const database = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/4jan"
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

module.exports = database;
