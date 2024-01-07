import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <p>Cibo</p>
      <div className="item-list">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <button className="custom-btn">Username</button>
    </div>
  );
}

export default Navbar;
