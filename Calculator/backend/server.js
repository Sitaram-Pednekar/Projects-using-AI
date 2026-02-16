const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Temporary hardcoded user
  if (email === "admin@gmail.com" && password === "1234") {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
