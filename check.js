const express=require("express")
const app=express()
app.use(express.json())

const {username,email,password}=require("./middleware/middlewares.js")
app.post("/signup",username,email,password,(req,res)=>{
    const data=req.body
    res.send(data)
    

})
app.listen(4000,()=>{
    console.log("server started")
})