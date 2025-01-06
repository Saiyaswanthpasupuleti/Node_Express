const express = require("express");
require("dotenv").config()
const bcrypt=require("bcrypt")
const app = express();
const port = process.env.DB_PORT;
app.use(express.json())
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Database Connected Succesfull");
  })
  .catch((err) => {
    console.log(err);
  });



const UserSchema=new mongoose.Schema({
    "name":String,
    "password":String
})

const UserModel= mongoose.model("maindata",UserSchema,"maindata")

app.get("/user",async (req,res)=>{
    const data=await UserModel.find()
    res.json(data)
    

})


app.post("/user", async (req, res) => {
    
    const {name,password} =req.body; 

    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const savedUser = await UserModel({name,password:hash}).save();
    res.json(savedUser);
  
});


app.post("/login",async (req,res)=>{
    const {name,password}=req.body
     const data=await UserModel.findOne({name})
    const match=await bcrypt.compare(password,data.password)
    if(match){
        res.json("true")
    }
    else{
        res.json("false")
    }


})


app.listen(port, () => {
  console.log("Server Connected");
});
