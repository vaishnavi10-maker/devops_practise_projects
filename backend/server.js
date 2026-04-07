const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect("mongodb://mongo:27017/test")
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  name: String,
  role: String
});

const User = mongoose.model("User", UserSchema);

// Save data
app.post("/add", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("Data saved ✅");
});

// Get data
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => console.log("Server running on port 3000"));
