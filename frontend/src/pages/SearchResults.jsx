import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

function SearchResults() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const filteredProducts = products.filter((p) =>
    `${p.title} ${p.info} ${p.category}`.toLowerCase().includes(q)
  );

  const uniqueProducts = filteredProducts.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (p) =>
          p.title.toLowerCase().replace(" deal", "") ===
          item.title.toLowerCase().replace(" deal", "")
      )
  );

  return (
    <ProductGrid
      title={`Search Results for "${q}"`}
      products={uniqueProducts}
    />
  );
}

export default SearchResults;