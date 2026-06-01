import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    const productId = product.id || product._id || product.title;

    const cartProduct = {
      ...product,
      id: productId,
      qty,
    };

    setCartItems((prev) => {
      const found = prev.find((item) => item.id === productId);

      if (found) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, cartProduct];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, qty) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => {
    return sum + Number(item.qty || 1);
  }, 0);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.qty || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);