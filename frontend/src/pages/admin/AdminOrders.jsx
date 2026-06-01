import { useEffect, useState } from "react";
import "./css/adminOrders.css";

const statusOptions = [
  "Pending",
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/orders/admin/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setOrders(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`https://mycart-mern-ecommerce.onrender.com/api/orders/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderStatus: status }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Status update failed");
      return;
    }

    setMessage("Order status updated successfully");
    fetchOrders();

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <section className="admin-page">
      <div className="admin-head">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders and delivery status.</p>
        </div>
      </div>

      {message && <p className="admin-success">{message}</p>}

      <div className="orders-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Update Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => {
              const statusClass = order.orderStatus
                ?.replaceAll(" ", "-")
                .toLowerCase();

              return (
                <tr key={order._id}>
                  <td>
                    <span className="order-id">#{order._id.slice(-8)}</span>
                  </td>

                  <td>{order.user?.name || "User"}</td>

                  <td>
                    <strong>${order.totalAmount || order.total || 0}</strong>
                  </td>

                  <td>
                    <span className={`order-status-badge ${statusClass}`}>
                      {order.orderStatus}
                    </span>
                  </td>

                  <td>
                    <span className="payment-badge">{order.paymentMethod}</span>
                  </td>

                  <td>
                    <select
                      className="admin-status-select"
                      value={order.orderStatus}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}

            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="empty-table">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminOrders;