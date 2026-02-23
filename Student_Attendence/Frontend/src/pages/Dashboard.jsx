import React, { useState, useEffect } from "react";
import API from "../services/api";

const Dashboard = ({ student }) => {
  const [attendance, setAttendance] = useState([]);

  const markAttendance = async () => {
    try {
      const res = await API.post("/attendance", { student_id: student.id });
      alert(res.data.message);
      fetchAttendance();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const fetchAttendance = async () => {
    try {
      const res = await API.get(`/attendance/${student.id}`);
      setAttendance(res.data);
    } catch (err) {
      alert("Failed to fetch attendance");
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div>
      <h2>Welcome, {student.name}</h2>
      <button onClick={markAttendance}>Mark Attendance</button>
      <h3>Attendance History</h3>
      <ul>
        {attendance.map((a) => (
          <li key={a.id}>{a.date} - {a.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;