import DashboardLayout from "../components/DashboardLayout";
import "./CustomerDashboard.css";

function CustomerDashboard() {
  return (
    <DashboardLayout title="Customer Dashboard">

      <div className="account-card">
        <h2>Account Balance</h2>
        <p className="balance">₹ 45,000</p>
        <span className="account-number">Account No: 1234567890</span>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Deposits</h3>
          <p>₹ 1,20,000</p>
        </div>

        <div className="card">
          <h3>Total Withdrawals</h3>
          <p>₹ 75,000</p>
        </div>
      </div>

      <div className="actions">
        <button>Deposit Money</button>
        <button>Withdraw Money</button>
        <button>View Transactions</button>
      </div>

    </DashboardLayout>
  );
}

export default CustomerDashboard;
