import { useEffect, useState } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import img1 from '../assets/home-img/img1.jpg';
import img2 from '../assets/home-img/img2.jpg';
import img3 from '../assets/home-img/img3.jpg';
import img4 from '../assets/home-img/img4.jpg';
import './css/slider.css';

const slides = [img1, img2, img3, img4];

function Slider() {
  const [index, setIndex] = useState(0);
  const move = (step) => setIndex(prev => (prev + step + slides.length) % slides.length);
  useEffect(() => { const id = setInterval(() => move(1), 3500); return () => clearInterval(id); }, []);
  return (
    <section className="hero">
      <FaRegArrowAltCircleLeft className="hero-arrow left" onClick={()=>move(-1)} />
      <img src={slides[index]} alt="shopping banner" />
      <FaRegArrowAltCircleRight className="hero-arrow right" onClick={()=>move(1)} />
      <div className="dots">{slides.map((_, i)=><button key={i} onClick={()=>setIndex(i)} className={i===index?'active':''}/>)}</div>
    </section>
  );
}
export default Slider;
