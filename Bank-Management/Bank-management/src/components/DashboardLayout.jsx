import { useNavigate } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout({ title, children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="layout">
      
      <div className="sidebar">
        <h2>🏦 BankSys</h2>
        <ul>
          <li>Dashboard</li>
          <li>Customers</li>
          <li>Accounts</li>
          <li>Transactions</li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="main">
        <div className="topbar">
          <h2>{title}</h2>
        </div>

        <div className="content">
          {children}
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;
