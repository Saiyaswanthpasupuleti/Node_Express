

const express = require("express");
const router = express.Router();
const { handleUserGet,handleUserPost } = require("../Controller/Controllers");

router.get("/user", handleUserGet);
router.post("/user", handleUserPost);
// Future routes can be added here:
// router.post("/user", handleUserPost);
// router.put("/user/:id", handleUserPut);
// router.delete("/user/:id", handleUserDelete);

module.exports = router;
