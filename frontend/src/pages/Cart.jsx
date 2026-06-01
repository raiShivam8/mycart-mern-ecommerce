import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./css/cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  return (
    <section className="cart-page">
      <h2>Your Cart Items</h2>

      {!cartItems.length ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                  <b>${item.price}.00</b>

                  <div className="cart-qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Cancel / Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h2>Total: ${subtotal}.00</h2>

            <button onClick={() => navigate("/checkout")}>
              Checkout / Buy Now
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;