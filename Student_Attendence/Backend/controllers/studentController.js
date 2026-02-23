const bcrypt = require("bcrypt");
const { getStudentById } = require("../models/studentModel");
const { markAttendance, getAttendance } = require("../models/attendanceModel");

const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { id, password } = req.body;

  getStudentById(id, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(404).json({ message: "Student not found" });

    const student = results[0];

    if (password !== student.password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    // Create JWT Token
    const token = jwt.sign(
      { id: student.id, name: student.name },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      student: {
        id: student.id,
        name: student.name,
      },
    });
  });
};

const markAttendanceController = (req, res) => {
  const { student_id } = req.body;

  markAttendance(student_id, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Attendance marked ✅" });
  });
};

const getAttendanceController = (req, res) => {
  const { student_id } = req.params;

  getAttendance(student_id, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

module.exports = { login, markAttendanceController, getAttendanceController };