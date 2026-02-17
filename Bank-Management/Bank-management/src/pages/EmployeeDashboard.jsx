import DashboardLayout from "../components/DashboardLayout";
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
  return (
    <DashboardLayout title="Employee Dashboard">

      <div className="cards">
        <div className="card">
          <h3>Total Customers</h3>
          <p>85</p>
        </div>

        <div className="card">
          <h3>Accounts Managed</h3>
          <p>140</p>
        </div>

        <div className="card">
          <h3>Today's Transactions</h3>
          <p>32</p>
        </div>
      </div>

      <div className="actions">
        <button>Add Customer</button>
        <button>Create Account</button>
        <button>Deposit</button>
        <button>Withdraw</button>
      </div>

    </DashboardLayout>
  );
}

export default EmployeeDashboard;
