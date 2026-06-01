import { useEffect, useState } from "react";

import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Brand from "../components/Brand";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/products");
      const data = await res.json();

      setProducts(Array.isArray(data) ? data : []);
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

      <ProductGrid title="Best Deals" products={bestDeals} />

      <Brand />

      <div id="deals">
        <ProductGrid
          title="Today's Deals"
          products={todayDeals}
          showCategories={true}
        />
      </div>
    </>
  );
}

export default Home;