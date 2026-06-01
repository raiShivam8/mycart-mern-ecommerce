import { useNavigate } from "react-router-dom";
import "./css/adminTopbar.css";

function AdminTopbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="admin-topbar">
      <div>
        <h3>Dashboard Overview</h3>
        <p>Manage your ecommerce store</p>
      </div>

      <div className="admin-profile">
        <span>Admin</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default AdminTopbar;