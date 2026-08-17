import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { API_BASE_URL } from "../config/apiConfig";

function CategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${API_BASE_URL}/products`);

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