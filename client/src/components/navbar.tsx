import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import CustomButton from "./customButton";
import cartSvg from "../assets/cart.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <p>Cibo</p>
      <div className="item-list">
        <Link to="/">Home</Link>
        <Link to="/orderNow">Order Now</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div className="user-cart">
        <CustomButton text="Username" scrolled={scrolled} />
        <Link to="/cart">
          <img src={cartSvg} className="cart-svg" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
