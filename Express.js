
const express=require("express")
const app=express()
app.use(express.json())
// app.get("/get",(req,res)=>{
    
//    console.log(req.body)

// })

// app.put("/put",(req,res)=>{
  
//     console.log(req.body)
//     res.send("Post Method Clicked ")
// })

app.post("/post",(req,res)=>{
    console.log(req.body)
    
})

app.listen(4002,()=>{
    console.log("Succesfull")
})