const express = require("express");
const router = express.Router();

// User Routes

router.post("/register", (req, res) => {
  res.send("Register");
});

router.post("/login", (req, res) => {
  res.send("Login");
});

//Restaurant Routes
