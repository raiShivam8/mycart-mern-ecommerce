import { NavLink } from 'react-router-dom';
import books from '../assets/top-categories/Books.jpg';
import laptop from '../assets/top-categories/Laptop.jpg';
import mobile from '../assets/top-categories/Mobile.jpg';
import headphone from '../assets/top-categories/Headphone.jpg';
import furniture from '../assets/top-categories/Furniture.jpg';
import handbag from '../assets/top-categories/Handbag.jpg';
import './css/categories.css';

const cats = [
 {name:'Books', slug:'books', image:books},
 {name:'Laptop', slug:'laptop', image:laptop},
 {name:'Mobile', slug:'mobile', image:mobile},
 {name:'Headphone', slug:'headphone', image:headphone},
 {name:'Furniture', slug:'furniture', image:furniture},
 {name:'Handbag', slug:'handbag', image:handbag},
];

function Categories(){
 return <section className="categories"><h2>Top Categories</h2><div className="category-list">
  {cats.map(cat => <NavLink className="category-card" key={cat.slug} to={`/category/${cat.slug}`}><img src={cat.image}/><h3>{cat.name}</h3></NavLink>)}
 </div></section>
}
export default Categories;
