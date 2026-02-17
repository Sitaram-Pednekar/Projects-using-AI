import DashboardLayout from "../components/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="cards">
        <div className="card">Total Customers: 120</div>
        <div className="card">Total Accounts: 200</div>
        <div className="card">Total Balance: $500,000</div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;
