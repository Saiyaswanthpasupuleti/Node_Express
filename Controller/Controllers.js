


const UserModel = require("../Model/Model");

exports.handleUserGet = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
    console.log(users)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};


exports.handleUserPost = async (req, res) => {
    try {
      const { name, phoneno } = req.body; // Extract data from request body
      const newUser = new UserModel({ name, phoneno }); // Create a new user document
      const savedUser = await newUser.save(); // Save the user to the database
      res.status(201).json(savedUser); // Respond with the saved user
    } catch (error) {
      res.status(500).json({ error: "Failed to save user" });
    }
  };

// Future controller functions can be added here:
// exports.handleUserPost = async (req, res) => { ... };
// exports.handleUserPut = async (req, res) => { ... };
// exports.handleUserDelete = async (req, res) => { ... };
