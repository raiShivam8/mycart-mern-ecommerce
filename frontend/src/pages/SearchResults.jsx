import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

function SearchResults(){
 const [params] = useSearchParams();
 const q = (params.get('q') || '').toLowerCase();
 const result = products.filter(p => `${p.title} ${p.info} ${p.category}`.toLowerCase().includes(q));
 return <ProductGrid title={`Search Results for "${q}"`} products={result}/>
}
export default SearchResults;
