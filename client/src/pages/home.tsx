import deliverBoySvg from "../assets/deliverBoy.svg";
import courierSvg from "../assets/courier.svg";
import trackDeliverySvg from "../assets/trackDelivery.svg";
import orderSvg from "../assets/order.svg";
import "../styles/home.css";
import CustomButton from "../components/customButton";
import { Link } from "react-router-dom";

const BannerItem = (props: {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  altText: string;
  imageOnLeft: boolean;
}) => {
  const orderClass = props.imageOnLeft ? "left-to-right" : "right-to-left";

  return (
    <div className={`banner-content ${orderClass}`}>
      <div className="banner-details">
      <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link to={'/orderNow'}><CustomButton text={props.buttonText} /></Link>
        
      </div>
      <img src={props.imageSrc} alt={props.altText} className="banner-image" />
    </div>
  );
};

const ServiceCard = (props: {
  title: string;
  imageSrc: string;
  description: string;
}) => (
  <div className="banner-card">
    <h1>{props.title}</h1>
    <img
      src={props.imageSrc}
      className="card-image"
      alt={`${props.title} icon`}
    />
    <p>{props.description}</p>
    <button className="card-btn">Learn more</button>
  </div>
);

function Home() {
  return (
    <div className="home-container">
      <div className="banner-container">
        <BannerItem
          title="Fast and Reliable Delivery Service"
          description="With our efficient delivery team, we ensure your packages reach you in time, every time. Experience hassle-free delivery with us."
          buttonText="Get Started"
          imageSrc={deliverBoySvg}
          altText="Deliver Boy"
          imageOnLeft={false}
        />

        <BannerItem
          title="Discover Our Wide Range of Products"
          description="Explore a vast selection of products from top brands. From electronics to fashion, we've got everything you need at your fingertips."
          buttonText="Explore Now"
          imageSrc={courierSvg}
          altText="Courier"
          imageOnLeft={true}
        />

        <BannerItem
          title="Your Safety Is Our Priority"
          description="We prioritize the safety and well-being of our customers and employees. Rest assured, we adhere to strict safety protocols to ensure a secure shopping experience."
          buttonText="Learn More"
          imageSrc={orderSvg}
          altText="Deliver Boy"
          imageOnLeft={false}
        />
      </div>
      <div className="services-container">
        <h1>Services We Offer</h1>
        <div className="card-layout">
          <ServiceCard
            title="Find Your Favorite Cuisine"
            imageSrc={deliverBoySvg}
            description="Craving Italian or in the mood for some Asian fusion? Browse through a variety of cuisines and discover your next culinary delight."
          />
          <ServiceCard
            title="Order with Ease"
            imageSrc={deliverBoySvg}
            description="With our user-friendly platform, ordering your favorite meals is just a few clicks away. Say goodbye to long queues and enjoy seamless ordering."
          />
          <ServiceCard
            title="Track Your Delivery"
            imageSrc={deliverBoySvg}
            description="Keep tabs on your delivery status in real-time. Track your package from the moment it leaves our facility until it reaches your doorstep."
          />
        </div>
        <BannerItem
          title="Stay Informed with Live Updates"
          description="Track your delivery's progress every step of the way. Receive instant notifications and stay informed about your order's status."
          buttonText="Learn More"
          imageSrc={trackDeliverySvg}
          altText="Courier"
          imageOnLeft={true}
        />
      </div>
    </div>
  );
}

export default Home;
