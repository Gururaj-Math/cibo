import "boxicons";
import "../styles/footer.css";
import "boxicons/css/boxicons.min.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>Services</h2>
        <ul>
          <li>Express Delivery</li>
          <li>24/7 Customer Support</li>
          <li>Easy Returns</li>
          <li>Track Your Order</li>
        </ul>
      </div>
      <div className="footer-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
