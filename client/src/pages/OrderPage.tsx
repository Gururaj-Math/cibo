import { useEffect, useState } from "react";
import CustomButton from "../components/customButton";
import "../styles/orderPage.css";
import starSvg from "../assets/star.svg";
import API_URI from "../constant";
import axios from "axios";

const FoodItem = (props: {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  rating: number[];
  offer: string;
}) => {
  const calculateAverageRating = (ratings: number[]) => {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    return sum / ratings.length;
  };
  const averageRating = calculateAverageRating(props.rating);

  return (
    <div className="food-item">
      <img src={props.imageUrl} alt={props.title} />
      <div className="food-title">
        <h2>{props.title}</h2>
        <div className="rating">
          <img src={starSvg} alt="star" /> {averageRating}
        </div>
      </div>
      <p>{props.description}</p>
      <p className="offer">Offer: {props.offer}</p>
      <div className="addToCart">
        <p>{props.price}Rs</p>
        <CustomButton text="Add To Cart" />
      </div>
    </div>
  );
};

function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      await axios.get(`${API_URI}/foods`).then((res) => {
        setFoodItems(res.data);
      });
    };
    fetchItems();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="OrderPage">
      <div className="featured">
        <h1>Featured Items</h1>
        <div className="featured-items">
          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
      <div className="order-items">
        <div className="category-dropdown">
          <h1>Food</h1>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
            <option value="Category2">Category 3</option>
          </select>
        </div>
        <div className="items-container">
          {foodItems.map((item: any) => (
            <FoodItem
              key={item.id}
              imageUrl={item.image}
              title={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
              offer={item.offer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
