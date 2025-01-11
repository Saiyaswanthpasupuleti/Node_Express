// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// const app = express();
// app.use(express.json());

// console.log(__dirname,)
// // // MongoDB Connection
// // mongoose
// //   .connect(
// //     "mongodb+srv://saiyaswanths959:jw9B77iqH85zVt5e@cluster0.w5uqy.mongodb.net/fileuploads" 
// //   )
// //   .then(() => {
// //     console.log("Database Connected Successfully");
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });



// // // Create a Mongoose schema for storing user data
// // const userSchema = new mongoose.Schema({
// //   username: { type: String, required: true }, // Username
// //   fileName: { type: String, required: true }, // File name on the server
// //   filePath: { type: String, required: true }, // File path
// //   fileSize: { type: Number, required: true }, // File size in bytes
// //   uploadDate: { type: Date, default: Date.now }, // Upload date
// // });


// // // Create a Mongoose model
// // const User = mongoose.model("User", userSchema);

// // // Configure Multer storage


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
  
//     cb(null, path.join(__dirname, "uploads")); // Save to "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename
//   },
// });


// const upload = multer({ storage });

// // Route to upload file and username
// app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     const { username } = req.body; // Get the username from the request body

//     if (!username || !req.file) {
//       return res.status(400).send("Username and file are required!");
//     }

//     // Save user and file data to MongoDB
//     const newUser = new User({
//       username: username, // Username from request body
//       fileName: req.file.filename, // Saved file name
//       filePath: req.file.path, // Path to the file
//       fileSize: req.file.size, // File size
//     });

//     await newUser.save();

//     res.status(200).send("File and details saved successfully!");
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     res.status(500).send("An error occurred while uploading the file.");
//   }
// });

// // Start the server
// app.listen(3500, () => {
//   console.log("Server Connected Successfully on Port 3500");
// // });




// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const app = express();

// app.use(express.json()); // Middleware to parse JSON

// // console.log(__dirname)
// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads"); // Save to "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // Route to upload file and username
// app.post("/upload", upload.single("file"), (req, res) => {
//   try {
//     const { username } = req.body; // Get the username from the request body


//     console.log("Username:", username);
//     console.log("File Name:", req.file.filename);
//     console.log("File Path:", req.file.path);
//     console.log("File Size:", req.file.size);
//     console.log("Upload Date:", new Date());

//     // Respond with a success message
//     res.status(200).send("File and details logged successfully!");
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     res.status(500).send("An error occurred while uploading the file.");
//   }
// });

// // Start the server
// app.listen(3500, () => {
//   console.log("Server Connected Successfully on Port 3500");
// });

const express=require("express")
const app=express()
app.use(express.json())
const multer=require("multer")
const path=require("path")
const sender=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./uploads")
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)

  }
})

const upload=multer({
  storage:sender
})

app.post("/upload",upload.single("file"),(req,res)=>{
 
  const {username}=req.body
  console.log(username)
  console.log(req.file.path)
})


app.listen(3500,()=>{
  console.log("Server Connected Succesfull")
})