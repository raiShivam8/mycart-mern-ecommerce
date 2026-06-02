import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./css/checkout.css";

function Checkout() {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty");
      navigate("/cart");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const orderItems = cartItems.map((item) => ({
      productId: item._id || item.id,
      title: item.title,
      image: item.image,
      price: Number(item.price),
      qty: item.qty || item.quantity || 1,
    }));

    const hasInvalidProduct = orderItems.some(
      (item) => !item.productId || !item.title || !item.price
    );

    if (hasInvalidProduct) {
      alert("Some product data is missing. Please add products again.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://mycart-mern-ecommerce.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            items: orderItems,
            shippingAddress: address,
            paymentMethod,
            totalAmount: Number(subtotal),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Order Failed");
        return;
      }

      clearCart();
      alert("Order placed successfully");

      if (data.order && data.order._id) {
        navigate(`/track/${data.order._id}`);
      } else {
        navigate("/orders");
      }
    } catch (error) {
      console.log("Place order error:", error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="checkout-page">
      <form className="checkout-card" onSubmit={placeOrder}>
        <h2>Checkout</h2>

        <div className="checkout-form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Full Address"
            value={address.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
            required
          />
        </div>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="COD">Cash On Delivery</option>
          <option value="UPI">UPI</option>
          <option value="CARD">Card</option>
        </select>

        <div className="checkout-total">
          <h3>Total Amount</h3>
          <h2>${subtotal}.00</h2>
        </div>

        <button type="submit" className="place-order-btn" disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </section>
  );
}

export default Checkout;