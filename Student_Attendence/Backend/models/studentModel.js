const db = require("../config/db");

const getStudentById = (id, callback) => {
  db.query("SELECT * FROM students WHERE id = ?", [id], callback);
};

module.exports = { getStudentById };