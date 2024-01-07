import deliverBoySvg from "../assets/deliverBoy.svg";
import courierSvg from "../assets/courier.svg";
import "../styles/home.css";

function Home() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-details">
          <h1>Order Products Faster Easier</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            illum dolores a nulla unde deserunt quis nesciunt odio ducimus
            magni!
          </p>
          <button className="custom-btn">Get Started</button>
        </div>
        <img src={deliverBoySvg} alt="Deliver Boy" className="banner-image" />
      </div>
      <div className="banner-content">
        <img src={courierSvg} alt="Deliver Boy" className="banner-image" />
        <div className="banner-details">
          <h1>Find Out A Little More About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            iusto.
          </p>
          <button className="custom-btn">Get Started</button>
        </div>
      </div>
      <div className="banner-content">
        <div className="banner-details">
          <h1>Your Safety Is Important</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            iusto.
          </p>
          <button className="custom-btn">Get Started</button>
        </div>
        <img src={deliverBoySvg} alt="Deliver Boy" className="banner-image" />
      </div>
    </div>
  );
}

export default Home;
