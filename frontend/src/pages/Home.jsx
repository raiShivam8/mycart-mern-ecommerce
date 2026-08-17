import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/apiConfig";
import { sampleProducts } from "../data/sampleProducts";

import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Brand from "../components/Brand";

function Home() {
  const [products, setProducts] = useState(sampleProducts);

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
            setProducts(data);
          }
        }
      } catch (err) {
        console.warn("API fetch failed, displaying fallback products:", err);
      }
    };

    fetchProducts();
  }, []);

  const bestDeals = products.filter((p) => p.category === "deals");

  const todayDeals = products.filter((p) =>
    ["books", "laptop", "mobile", "headphone", "furniture", "handbag"].includes(
      p.category
    )
  );

  return (
    <>
      <Slider />

      <ProductGrid title="Best Deals" products={bestDeals.length > 0 ? bestDeals : sampleProducts.filter(p => p.category === "deals")} />

      <Brand />

      <div id="deals">
        <ProductGrid
          title="Today's Deals"
          products={todayDeals.length > 0 ? todayDeals : sampleProducts}
          showCategories={true}
        />
      </div>
    </>
  );
}

export default Home;