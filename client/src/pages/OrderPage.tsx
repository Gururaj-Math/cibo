import { useState } from "react";
import CustomButton from "../components/customButton";
import "../styles/orderPage.css";
import starSvg from "../assets/star.svg";

const FoodItem = (props: {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="food-item">
      <img src={props.imageUrl} alt={props.title} />
      <div className="food-title">
        <h2>{props.title}</h2>
        <div className="rating">
          <img src={starSvg} /> {4.3}
        </div>
      </div>
      <p>{props.description}</p>
      <div className="addToCart">
        <p>{props.price}Rs</p>
        <CustomButton text="Add To Cart" />
      </div>
    </div>
  );
};

function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
          <FoodItem
            imageUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus?"
            price={200}
          />
          <FoodItem
            imageUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus?"
            price={200}
          />
          <FoodItem
            imageUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus?"
            price={200}
          />
          <FoodItem
            imageUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus?"
            price={200}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
