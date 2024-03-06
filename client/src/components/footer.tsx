import "boxicons";
import "boxicons/css/boxicons.min.css";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to={'/orderNow'} style={{textDecoration: 'none', color: "black"}}>Order Now</Link></li>
          <li><Link to={'/favorites'} style={{textDecoration: 'none', color: "black"}}>Go to Favorites</Link></li>
          <li><Link to={'/contact'} style={{textDecoration: 'none', color: "black"}}>Let us know you feedback</Link></li>
        </ul>
      </div>
      <div className="footer-content">
        <h2>About Us</h2>
        <p>
          Cibo is your ultimate destination for convenient and delicious food
          delivery. We're committed to providing high-quality service and
          ensuring customer satisfaction.
        </p>
      </div>
      <div className="footer-content">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <i className="bx bxl-facebook social"></i> Facebook
          </li>
          <li>
            <i className="bx bxl-twitter social"></i> Twitter
          </li>
          <li>
            <i className="bx bxl-instagram social"></i> Instagram
          </li>
          <li>
            <i className="bx bxl-linkedin social"></i> LinkedIn
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
