import deliverBoySvg from "../assets/deliverBoy.svg";
import courierSvg from "../assets/courier.svg";
import trackDeliverySvg from "../assets/trackDelivery.svg";
import orderSvg from "../assets/order.svg";
import "../styles/home.css";
import CustomButton from "../components/customButton";

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
        <CustomButton text={props.buttonText} />
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
          title="Order Products Faster Easier"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore illum dolores a nulla unde deserunt quis nesciunt odio ducimus magni!"
          buttonText="Get Started"
          imageSrc={deliverBoySvg}
          altText="Deliver Boy"
          imageOnLeft={false}
        />

        <BannerItem
          title="Find Out A Little More About Us"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, iusto."
          buttonText="Get Started"
          imageSrc={courierSvg}
          altText="Courier"
          imageOnLeft={true}
        />

        <BannerItem
          title="Your Safety Is Important"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, iusto."
          buttonText="Get Started"
          imageSrc={orderSvg}
          altText="Deliver Boy"
          imageOnLeft={false}
        />
      </div>
      <div className="services-container">
        <h1>Some Services we offer</h1>
        <div className="card-layout">
          <ServiceCard
            title="Find your food"
            imageSrc={deliverBoySvg}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, accusantium?"
          />
          <ServiceCard
            title="Order your food"
            imageSrc={deliverBoySvg}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, accusantium?"
          />
          <ServiceCard
            title="food Received"
            imageSrc={deliverBoySvg}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, accusantium?"
          />
        </div>
        <BannerItem
          title="Watch your delivery at any time"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, iusto."
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
