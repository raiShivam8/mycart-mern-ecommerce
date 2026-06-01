import { useEffect, useState } from "react";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaMoneyBillWave,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

import "./css/adminDashboard.css";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    supportMessages: 0,
    pendingSupport: 0,
    totalRevenue: 0,
    recentOrders: [],
    latestUsers: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <section className="admin-dashboard-page">
      <div className="dashboard-head">
        <div>
          <h1>Dashboard</h1>
          <p>Real-time overview of your ecommerce store.</p>
        </div>
      </div>

      <div className="dashboard-stats-grid">
        <div className="dashboard-card">
          <FaMoneyBillWave />
          <p>Total Revenue</p>
          <h2>${stats.totalRevenue}</h2>
        </div>

        <div className="dashboard-card">
          <FaShoppingCart />
          <p>Total Orders</p>
          <h2>{stats.totalOrders}</h2>
        </div>

        <div className="dashboard-card">
          <FaBoxOpen />
          <p>Total Products</p>
          <h2>{stats.totalProducts}</h2>
        </div>

        <div className="dashboard-card">
          <FaUsers />
          <p>Total Users</p>
          <h2>{stats.totalUsers}</h2>
        </div>

        <div className="dashboard-card">
          <FaTruck />
          <p>Pending Orders</p>
          <h2>{stats.pendingOrders}</h2>
        </div>

        <div className="dashboard-card">
          <FaHeadset />
          <p>Support Requests</p>
          <h2>{stats.supportMessages}</h2>
        </div>
      </div>

      <div className="dashboard-content-grid">
        <div className="dashboard-panel">
          <div className="panel-head">
            <h2>Recent Orders</h2>
            <span>{stats.pendingOrders} Pending</span>
          </div>

          <div className="dashboard-table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {stats.recentOrders?.map((order) => (
                  <tr key={order._id}>
                    <td>#{order._id.slice(-8)}</td>
                    <td>{order.user?.name || "User"}</td>
                    <td>${order.totalAmount || 0}</td>
                    <td>
                      <span className={`dash-status ${order.orderStatus?.replaceAll(" ", "-").toLowerCase()}`}>
                        {order.orderStatus}
                      </span>
                    </td>
                  </tr>
                ))}

                {stats.recentOrders?.length === 0 && (
                  <tr>
                    <td colSpan="4">No recent orders</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-head">
            <h2>Latest Users</h2>
            <span>{stats.totalUsers} Users</span>
          </div>

          <div className="latest-users-list">
            {stats.latestUsers?.map((user) => (
              <div className="latest-user" key={user._id}>
                <div className="latest-avatar">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>

                <span className={user.role === "admin" ? "admin-badge" : "user-badge"}>
                  {user.role}
                </span>
              </div>
            ))}

            {stats.latestUsers?.length === 0 && <p>No users found</p>}
          </div>
        </div>
      </div>

      <div className="dashboard-alerts">
        <div>
          <h2>Store Alerts</h2>
          <p>Delivered Orders: {stats.deliveredOrders}</p>
          <p>Pending Support Requests: {stats.pendingSupport}</p>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;