const express = require("express");
const app = express();
require("dotenv").config();
require("./Mvcdatabase"); // Initialize Database Connection
const userRoutes = require("./Routes/Allroutes");
const path=require("path");
const fs=require("fs")
app.use(express.json()); // Middleware to parse JSON
app.use("/", userRoutes); // Mount routes

const res=path.join(__dirname,"new")
// fs.mkdirSync(res)
console.log(res)

// const a=path.basename(__dirname)
// console.log(a)
// const a=path.extname("name.jpg")
// console.log(a)
const PORT = process.env.MVCPORT || 3500;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
