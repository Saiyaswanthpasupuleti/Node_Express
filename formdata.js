const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); 
  },
  filename: (req, file, cb) => {
    const date = Date.now();
    const extension = path.extname(file.originalname); 
    cb(null, `file-${date}-${extension}`); 
  }
});


const filterFiles = (req, file, cb) => {
  const fileExtension = path.extname(file.originalname).toLowerCase();
  
  if (fileExtension === ".jpg" || fileExtension === ".png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG and PNG are allowed."), false);
  }
};


const upload = multer({
  storage: storage,
  fileFilter: filterFiles
});


app.post("/use", upload.single("profilepic"), (req, res) => {

  console.log(req.body); 
  console.log(req.file); 


  const { username, email, password } = req.body;
  const profilePictures = req.file;

  
  if (!username || !email || !password || !profilePictures) {
    return res.status(400).json({ message: "All fields are required (username, email, password, profilepic)" });
  }

 
  res.json({
    data: {
      username,
      email,
      password,
      profilepictures: profilePictures.path 
    }
  });
});



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
