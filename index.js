const express = require("express");
const database = require("./database.js");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// Creating the schema
const userSchemas = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

// Creating the model
const userModel =new mongoose.model("users", userSchemas);

// Connect to the database and start the server
database()


// Getting the data from MongoDB reading 
app.get("/user", async (req, res) => {
  try {
    const getone = await userModel.find();
    res.status(200).json(getone);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users", details: error.message });
  }
});

// //adding data into database  creating
// app.post("/user",async (req,res)=>{
//     const data=req.body
//     const postData=await new userModel(data).save()
    
//     res.json(postData)

// })

// //updating

// app.put("/user/:id",async (req,res)=>{
//     const updateone=await req.body
//     const updatetwo=await userModel.findByIdAndUpdate(req.params.id,updateone)
//     res.json(updatetwo)


// })

// //Deleting

// app.delete("/user/:id",async (req,res)=>{
//     const delet=await userModel.findByIdAndDelete(req.params.id)
//     res.json("ok dude")
// })


// app.listen(4000,()=>{
//     console.log("server ok!")
// })


const ip="yaswanth"

const salt=bcrypt.genSalt(10)