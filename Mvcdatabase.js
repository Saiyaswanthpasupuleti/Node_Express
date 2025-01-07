
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MVCDATABASECONNECTION)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("Database Connection Failed:", err.message);
  });
