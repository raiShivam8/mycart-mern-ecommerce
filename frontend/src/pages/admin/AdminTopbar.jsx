import { useNavigate } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import "./css/adminTopbar.css";

function AdminTopbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
        <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode">
          {theme === "dark" ? <IoSunny /> : <IoMoon />}
        </button>

        <span>Admin</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default AdminTopbar;