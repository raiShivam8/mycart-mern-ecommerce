import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

function CategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/products");

      const data = await res.json();

      setProducts(
        data.filter((p) => p.category === category)
      );
    };

    fetchProducts();
  }, [category]);

  const formattedTitle =
    category.charAt(0).toUpperCase() +
    category.slice(1);

  return (
    <ProductGrid
      title={formattedTitle}
      products={products}
    />
  );
}

export default CategoryPage;