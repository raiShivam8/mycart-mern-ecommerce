import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./css/productCard.css";

function RatingStars({ rating = 0 }) {
  const value = Number(rating) || 0;
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) =>
        star <= value ? <FaStar key={star} /> : <FaRegStar key={star} />,
      )}
    </>
  );
}

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <NavLink
        to={`/product/${product._id || product.id}`}
        className="product-img-box"
      >
        <img src={product.image} alt={product.title} />
        <button
          className="heart"
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
        >
          <FaHeart color={liked ? "red" : "#111"} />
        </button>
      </NavLink>
      <div className="product-body">
        <div className="product-title-row">
          <h3>{product.title}</h3>
          <b>${product.price}.00</b>
        </div>
        <p>{product.info}</p>
        <div className="rating">
          <RatingStars rating={product.rating} />
          <span>(121)</span>
        </div>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;