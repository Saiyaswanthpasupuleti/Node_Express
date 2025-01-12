const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());


// MongoDB connection
mongoose
  .connect("mongodb+srv://saiyaswanths959:97AbVe8PipC5EHWu@cluster0.qns3r.mongodb.net/fileupload"
, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to database: ", err));

// File upload folder
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  file: String,
});

const UserModel = mongoose.model("file", userSchema);

// Multer configuration for file storage
const sender = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const recive = multer({
  storage: sender,
});

// File upload route
app.post("/upload", recive.single("file"), (req, res) => {
  try {
    const { username } = req.body;

    // Logging to check if the form data and file are received correctly
    console.log("Username:", username);
    console.log("File path:", req.file.path);

    // Create a new UserModel instance with the username and file path
    const newUser = new UserModel({
      username: username,
      file: req.file.path, // Saving file path to the database
    });

    // Save the new user document to the database
    newUser
      .save()
      .then(() => {
        res.status(200).json({ message: "File uploaded and data saved successfully" });
      })
      .catch((err) => {
        res.status(500).json({ message: "Error saving data to the database", error: err.message });
      });
  } catch (err) {
    // Catch any other errors
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

// Start the Express server
app.listen(3500, () => {
  console.log("Server connected successfully on port 3500");
});
