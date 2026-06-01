import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./css/track.css";

const steps = [
  "Pending",
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

function TrackOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`https://mycart-mern-ecommerce.onrender.com/api/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setOrder(data);
    };

    fetchOrder();
  }, [id]);

  if (!order) {
    return (
      <section className="track-page">
        <h2>Loading order...</h2>
      </section>
    );
  }

  const currentIndex = steps.indexOf(order.orderStatus);

  return (
    <section className="track-page">
      <div className="track-card">
        <div className="track-header">
          <div>
            <h1>Track Order</h1>
            <p>Order ID: #{order._id}</p>
          </div>

          <span className="track-status">{order.orderStatus}</span>
        </div>

        <div className="track-summary">
          <div>
            <p>Total Amount</p>
            <h2>${order.totalAmount || order.total || 0}.00</h2>
          </div>

          <div>
            <p>Payment Method</p>
            <h2>{order.paymentMethod}</h2>
          </div>

          <div>
            <p>Payment Status</p>
            <h2>{order.paymentStatus}</h2>
          </div>
        </div>

        <div className="tracking-line">
          {steps.map((step, index) => (
            <div
              className={`track-step ${
                index <= currentIndex ? "active" : ""
              }`}
              key={step}
            >
              <div className="circle">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <div className="track-items">
          <h2>Order Items</h2>

          {order.items?.map((item, index) => (
            <div className="track-item" key={index}>
              <img src={item.image} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.qty}</p>
                <b>${item.price}.00</b>
              </div>
            </div>
          ))}
        </div>

        <Link className="back-orders-btn" to="/orders">
          Back To My Orders
        </Link>
      </div>
    </section>
  );
}

export default TrackOrder;