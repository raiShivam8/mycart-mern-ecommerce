import { NavLink } from "react-router-dom";

import "./css/adminSidebar.css";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <h2>MyCart</h2>
        <span>Admin Panel</span>
      </div>

      <nav className="admin-nav">
        <NavLink to="/admin" end>
          Dashboard
        </NavLink>

        <NavLink to="/admin/products">Products</NavLink>

        <NavLink to="/admin/orders">Orders</NavLink>

        <NavLink to="/admin/users">Users</NavLink>

        <NavLink to="/admin/support">Support</NavLink>

        <NavLink to="/">Back To Store</NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
