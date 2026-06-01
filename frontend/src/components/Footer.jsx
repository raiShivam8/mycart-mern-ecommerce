import { NavLink } from "react-router-dom";
import { PiHandbagBold } from "react-icons/pi";
import { TfiGift } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";

import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <NavLink to="/become-seller">
            <PiHandbagBold />
            Become Seller
          </NavLink>
        </li>

        <li>
          <NavLink to="/gift-cards">
            <TfiGift />
            Gift Cards
          </NavLink>
        </li>

        <li>
          <NavLink to="/help-center">
            <IoIosHelpCircleOutline />
            Help Center
          </NavLink>
        </li>

        <li>
          <NavLink to="/terms">Terms of Service</NavLink>
        </li>

        <li>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </li>

        <li className="footer-copyright">
          <span>All rights reserved by</span>
          <a
            href="https://github.com/raiShivam8"
            target="_blank"
            rel="noreferrer"
            className="footer-github"
          >
            raiShivam8
          </a>
          <span>2026</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
