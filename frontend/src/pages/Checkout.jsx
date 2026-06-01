import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

import "./css/checkout.css";

function Checkout() {

  const { cartItems, subtotal, clearCart } =
    useCart();

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const handleChange = (e) => {

    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });

  };

  const placeOrder = async (e) => {

    e.preventDefault();

    const token =
      localStorage.getItem("token");

    const res = await fetch(
      "https://mycart-mern-ecommerce.onrender.com/api/orders",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          items: cartItems.map((item) => ({
            productId: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            qty: item.qty,
          })),

          shippingAddress: address,

          paymentMethod,

          totalAmount: subtotal,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return alert(
        data.message || "Order Failed"
      );
    }

    clearCart();

    navigate(`/track/${data.order._id}`);
  };

  return (
    <section className="checkout-page">

      <form
        className="checkout-card"
        onSubmit={placeOrder}
      >

        <h2>Checkout</h2>

        <div className="checkout-form-grid">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Full Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
            required
          />

        </div>

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
        >
          <option value="COD">
            Cash On Delivery
          </option>

          <option value="UPI">
            UPI
          </option>

          <option value="CARD">
            Card
          </option>
        </select>

        <div className="checkout-total">
          <h3>Total Amount</h3>
          <h2>${subtotal}.00</h2>
        </div>

        <button
          type="submit"
          className="place-order-btn"
        >
          Place Order
        </button>

      </form>
    </section>
  );
}

export default Checkout;