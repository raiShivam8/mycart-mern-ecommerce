import { useState } from "react";
import "./css/productGrid.css";
import ProductCard from "./ProductCard";

const categories = [
  { name: "Books", slug: "books" },
  { name: "Laptop", slug: "laptop" },
  { name: "Mobile", slug: "mobile" },
  { name: "Headphone", slug: "headphone" },
  { name: "Furniture", slug: "furniture" },
  { name: "Handbag", slug: "handbag" },
];

function ProductGrid({ title, products = [], showCategories = false }) {
  const [activeCategory, setActiveCategory] = useState("books");

  const filteredProducts = showCategories
    ? products.filter((item) => item.category === activeCategory)
    : products;

  return (
    <section
      className={`product-section ${
        title === "Best Deals" ? "best-deals" : ""
      }`}
    >
      <div className="product-header">
        <h2>{title}</h2>
      </div>

      {showCategories && (
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className={activeCategory === cat.slug ? "active" : ""}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <h2 className="no-items">No Items Found</h2>
      ) : (
        <div className="slider-wrapper">
          <div className="product-slider">
            {filteredProducts.map((item) => (
              <ProductCard key={item._id || item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;