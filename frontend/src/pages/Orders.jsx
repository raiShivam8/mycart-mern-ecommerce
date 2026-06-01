import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/orders.css";

const steps = [
  "Pending",
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/orders/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    };

    fetchOrders();
  }, []);

  const getCurrentStep = (status) => {
    const index = steps.indexOf(status);
    return index === -1 ? 0 : index;
  };

  return (
    <section className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>Check your order items, payment details and delivery progress.</p>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders-box">
            <h2>No Orders Found</h2>
            <p>Your placed orders will appear here.</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => {
              const currentStep = getCurrentStep(order.orderStatus);

              return (
                <div className="order-card" key={order._id}>
                  <div className="order-card-top">
                    <div>
                      <h2>Order #{order._id.slice(-8)}</h2>
                      <p>
                        Placed on{" "}
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <span className="order-status-badge">
                      {order.orderStatus}
                    </span>
                  </div>

                  <div className="order-products">
                    {order.items?.map((item, index) => (
                      <div className="order-product" key={index}>
                        <div className="order-product-img">
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div className="order-product-info">
                          <h3>{item.title}</h3>
                          <p>Quantity: {item.qty}</p>
                          <b>${item.price}.00</b>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="order-progress">
                    {steps.map((step, index) => (
                      <div
                        key={step}
                        className={`order-progress-step ${
                          index <= currentStep ? "active" : ""
                        }`}
                      >
                        <span>{index + 1}</span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="order-card-bottom">
                    <div>
                      <p>Total Amount</p>
                      <h2>${order.totalAmount || order.total || 0}.00</h2>
                    </div>

                    <div>
                      <p>Payment</p>
                      <h2>{order.paymentMethod}</h2>
                    </div>

                    <Link className="track-order-btn" to={`/track/${order._id}`}>
                      View Tracking
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Orders;