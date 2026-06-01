import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { CiSearch, CiMobile3, CiHeadphones } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoBookOutline, IoMenu, IoClose } from "react-icons/io5";
import { PiLaptop, PiHandbagLight } from "react-icons/pi";
import { GiRockingChair } from "react-icons/gi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./css/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    navigate(value ? `/search?q=${encodeURIComponent(value)}` : "/");
  };

  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="navbar">
      <div className="nav-top">
        <NavLink className="nav-logo" to="/" onClick={closeMenu}>
          <BiCart className="logo-icon" />
          MyCart
        </NavLink>

        <div className="mobile-actions">
          <NavLink className="cart-btn-nav" to="/cart" onClick={closeMenu}>
            <BiCart />
            <span>{cartCount}</span>
            Cart
          </NavLink>

          <button className="menu-toggle" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      <div className={`nav-content ${openMenu ? "show" : ""}`}>
        <div className="nav-menu">
          <div className="product-menu">
            Product <MdKeyboardArrowDown />

            <div className="dropdown">
              <NavLink onClick={closeMenu} to="/category/books">
                <IoBookOutline /> Books
              </NavLink>

              <NavLink onClick={closeMenu} to="/category/laptop">
                <PiLaptop /> Laptop
              </NavLink>

              <NavLink onClick={closeMenu} to="/category/mobile">
                <CiMobile3 /> Mobile
              </NavLink>

              <NavLink onClick={closeMenu} to="/category/headphone">
                <CiHeadphones /> Headphone
              </NavLink>

              <NavLink onClick={closeMenu} to="/category/furniture">
                <GiRockingChair /> Furniture
              </NavLink>

              <NavLink onClick={closeMenu} to="/category/handbag">
                <PiHandbagLight /> Handbag
              </NavLink>
            </div>
          </div>

          <a href="/#deals" onClick={closeMenu}>
            Deals
          </a>

          <NavLink to="/orders" onClick={closeMenu}>
            Orders
          </NavLink>

          {user?.role === "admin" && (
            <NavLink to="/admin" onClick={closeMenu}>
              Admin
            </NavLink>
          )}
        </div>

        <div className="search-box">
          <input onChange={handleSearch} placeholder="Search Product" />
          <CiSearch />
        </div>

        <div className="nav-actions">
          <NavLink className="cart-btn-nav desktop-cart" to="/cart">
            <BiCart className="cart-logo" />
            <span>{cartCount}</span>
          </NavLink>

          {user ? (
            <button className="login-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink className="login-btn" to="/login" onClick={closeMenu}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;