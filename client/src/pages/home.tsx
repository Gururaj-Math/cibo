import deliverBoySvg from "../assets/deliverBoy.svg";
import courierSvg from "../assets/courier.svg";
import "../styles/home.css";
import CustomButton from "../components/customButton";

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
          <CustomButton text="Get Started" />
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
          <CustomButton text="Get Started" />
        </div>
      </div>
      <div className="banner-content">
        <div className="banner-details">
          <h1>Your Safety Is Important</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            iusto.
          </p>
          <CustomButton text="Get Started" />
        </div>
        <img src={deliverBoySvg} alt="Deliver Boy" className="banner-image" />
      </div>
    </div>
  );
}

export default Home;
