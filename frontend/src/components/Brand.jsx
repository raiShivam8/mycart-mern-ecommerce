import { brands } from '../data/products';
import './css/brand.css';
function Brand(){
 return <section className="brand"><h2>Choose By Brand</h2><div className="brand-grid">{brands.map((b,i)=><div className="brand-card" key={i}><img src={b.image}/><div><b>{b.name}</b><p>{b.time}</p></div></div>)}</div></section>
}
export default Brand;
