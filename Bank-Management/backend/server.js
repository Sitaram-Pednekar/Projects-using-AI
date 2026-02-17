const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 LOGIN ROUTE
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // 👑 Admin
  if (email === "admin@gmail.com" && password === "123456") {
    return res.json({
      token: "abc123",
      user: { role: "admin" }
    });
  }

  // 🧑‍💼 Employee
  if (email === "employee@gmail.com" && password === "123456") {
    return res.json({
      token: "abc123",
      user: { role: "employee" }
    });
  }

  // 👤 Customer
  if (email === "customer@gmail.com" && password === "123456") {
    return res.json({
      token: "abc123",
      user: { role: "customer" }
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
