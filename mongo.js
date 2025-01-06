let express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const database=require("./database")
app.use(express.json());

// Connect to the MongoDB database
// mongoose.connect("mongodb://localhost:27017/4jan")
//   .then(() => { console.log("Database connected successfully") })
//   .catch((err) => { console.log("Database connection error:", err) });
database()
// Define the schema for the "user" model
const userSchemas =new mongoose.Schema({
  name: String,
});

const userModel =new mongoose.model("new", userSchemas);

// GET route to fetch all users
app.get("/userdata", async (req, res) => {
  try {
    const data = await userModel.find();
    console.log(data);
    res.json(data);  // Send the data as a JSON response
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Error fetching data" });
  }
});


app.post("/userdata", async (req, res) => {
    try {
      const newUser = new userModel(req.body);
      const result = await newUser.save();
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: "Error adding user", error: err });
    }
  });
  

app.listen(4006, () => {
  console.log("Server running on port 4006");
});
