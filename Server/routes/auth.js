const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/signup", async (req, res) => {
  console.log("Signing up: ", req.body);
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    const userData = {
      _id: user._id,
      username: user.username,
    };
    res.status(201).json({ user: userData, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    const userData = {
      _id: user._id,
      username: user.username,
    };
    res.status(200).json({ user: userData, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
