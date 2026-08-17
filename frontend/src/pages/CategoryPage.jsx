import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { API_BASE_URL } from "../config/apiConfig";
import { sampleProducts } from "../data/sampleProducts";

function CategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState(() =>
    sampleProducts.filter((p) => p.category === category)
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const res = await fetch(`${API_BASE_URL}/products`, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const filtered = data.filter((p) => p.category === category);
            if (filtered.length > 0) {
              setProducts(filtered);
            }
          }
        }
      } catch (err) {
        console.warn("API fetch failed for category, using fallback:", err);
      }
    };

    fetchProducts();
  }, [category]);

  const formattedTitle =
    category ? category.charAt(0).toUpperCase() + category.slice(1) : "Category";

  return (
    <ProductGrid
      title={formattedTitle}
      products={products.length > 0 ? products : sampleProducts.filter((p) => p.category === category)}
    />
  );
}

export default CategoryPage;