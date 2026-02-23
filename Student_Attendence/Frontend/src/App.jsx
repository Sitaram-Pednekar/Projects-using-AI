import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <div>
      {!student ? <Login onLogin={setStudent} /> : <Dashboard student={student} />}
    </div>
  );
}

export default App;