import { useEffect, useState } from "react";
import "./css/adminSupport.css";

function AdminSupport() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setMessages(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    await fetch(`https://mycart-mern-ecommerce.onrender.com/api/support/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    fetchMessages();
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this request?")) return;

    const token = localStorage.getItem("token");

    await fetch(`https://mycart-mern-ecommerce.onrender.com/api/support/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchMessages();
  };

  return (
    <section className="admin-support-page">
      <div className="admin-support-head">
        <h1>Support Messages</h1>
        <p>View complaints, feedback, seller requests and privacy queries.</p>
      </div>

      <div className="support-message-grid">
        {messages.map((item) => (
          <div className="support-message-card" key={item._id}>
            <div className="support-message-top">
              <span className="support-type">{item.type}</span>
              <span className={`support-status ${item.status}`}>
                {item.status}
              </span>
            </div>

            <h2>{item.subject || "Customer Request"}</h2>

            <p className="support-text">{item.message}</p>

            <div className="support-meta">
              <p><b>Name:</b> {item.name}</p>
              <p><b>Email:</b> {item.email}</p>
              {item.phone && <p><b>Phone:</b> {item.phone}</p>}
              <p><b>Date:</b> {new Date(item.createdAt).toLocaleDateString()}</p>
            </div>

            <div className="support-actions">
              <button onClick={() => updateStatus(item._id, "resolved")}>
                Mark Resolved
              </button>

              <button
                className="delete-support"
                onClick={() => deleteMessage(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="no-support">
            <h2>No support messages found</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminSupport;