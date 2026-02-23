const db = require("../config/db");

const markAttendance = (student_id, callback) => {
  const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  db.query(
    "INSERT INTO attendance (student_id, date, status) VALUES (?, ?, 'Present')",
    [student_id, date],
    callback
  );
};

const getAttendance = (student_id, callback) => {
  db.query(
    "SELECT * FROM attendance WHERE student_id = ? ORDER BY date DESC",
    [student_id],
    callback
  );
};

module.exports = { markAttendance, getAttendance };