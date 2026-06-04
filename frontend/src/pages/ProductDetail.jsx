import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./css/detail.css";

const getImageUrl = (image) => {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  if (image.startsWith("/images")) return image;
  return `/images/${image}`;
};

function RatingStars({ rating = 4 }) {
  const value = Number(rating) || 4;

  return (
    <div className="detail-rating">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= value ? <FaStar key={star} /> : <FaRegStar key={star} />
      )}
      <span>(121 Reviews)</span>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localProduct = products.find(
      (item) => item.id === id || item._id === id
    );

    if (localProduct) {
      setProduct(localProduct);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://mycart-mern-ecommerce.onrender.com/api/products/${id}`
        );

        const data = await res.json();

        if (!res.ok || data.message) {
          setProduct(null);
          return;
        }

        setProduct(data);
      } catch (err) {
        console.log(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  if (loading) {
    return <h2 className="detail-loading">Loading...</h2>;
  }

  if (!product) {
    return <h2 className="detail-loading">Item not found</h2>;
  }

  return (
    <section className="product-detail-page">
      <div className="product-detail-card">
        <div className="detail-image-box">
          <img src={getImageUrl(product.image)} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>

          <h1>{product.title}</h1>

          <RatingStars rating={product.rating} />

          <p className="detail-desc">{product.info}</p>

          <div className="detail-price-row">
            <h2>${product.price}.00</h2>

            <span className={product.stock > 0 ? "in-stock" : "out-stock"}>
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </span>
          </div>

          <div className="detail-actions">
            <button onClick={() => addToCart(product)}>Add To Cart</button>

            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          <div className="detail-services">
            <div>
              <FaTruck />
              <span>Fast Delivery</span>
            </div>

            <div>
              <FaShieldAlt />
              <span>Secure Payment</span>
            </div>

            <div>
              <FaUndo />
              <span>7 Days Return</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-extra-details">
        <h2>Product Details</h2>

        <div className="details-grid">
          <div>
            <b>Product Name</b>
            <p>{product.title}</p>
          </div>

          <div>
            <b>Category</b>
            <p>{product.category}</p>
          </div>

          <div>
            <b>Price</b>
            <p>${product.price}.00</p>
          </div>

          <div>
            <b>Available Stock</b>
            <p>{product.stock}</p>
          </div>
        </div>

        <h2>Description</h2>

        <p className="long-desc">
          {product.info} This product is carefully selected for quality,
          performance and customer satisfaction. It is suitable for daily use and
          offers excellent value for money.
        </p>
      </div>
    </section>
  );
}

export default ProductDetail;