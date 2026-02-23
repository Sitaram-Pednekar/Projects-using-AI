const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  login,
  markAttendanceController,
  getAttendanceController,
} = require("../controllers/studentController");

router.post("/login", login);

// Protected routes
router.post("/attendance", authMiddleware, markAttendanceController);
router.get("/attendance/:student_id", authMiddleware, getAttendanceController);

module.exports = router;