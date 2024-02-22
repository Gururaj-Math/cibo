import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import CustomButton from "./customButton";
import cartSvg from "../assets/cart.svg";
import { useSelector } from "react-redux";
interface RootState {
  user: {
    currentUser: {
      data: {
        data: {
          name: string;
        };
      };
    } | null;
  };
}

function Navbar() {
  const { currentUser } = useSelector((state: RootState) => state.user);
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

  const userName = currentUser?.data?.name || "";

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <p>Cibo</p>
      <div className="item-list">
        <Link to="/">Home</Link>
        <Link to="/orderNow">Order Now</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div className="user-cart">
        <Link to="/my-account">
          <CustomButton text={userName} scrolled={scrolled} />
        </Link>
        <Link to="/cart">
          <img src={cartSvg} className="cart-svg" alt="Cart" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
