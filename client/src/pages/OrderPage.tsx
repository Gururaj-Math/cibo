import { useEffect, useState } from "react";
import CustomButton from "../components/customButton";
import "../styles/orderPage.css";
import starSvg from "../assets/star.svg";
import API_URI from "../constant";
import axios from "axios";
import { Carousel } from "antd";

const FoodItem = (props: {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  rating: number[];
  offer: string;
}) => {
  const calculateAverageRating = (ratings: number[]): number => {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
    return parseFloat(average.toFixed(1));
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
  const [categories, setCategories] = useState([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      await axios.get(`${API_URI}/foods`).then((res) => {
        setFoodItems(res.data);
        setFilteredFoodItems(res.data);
      });
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      await axios.get(`${API_URI}/categories`).then((res) => {
        setCategories(res.data);
      });
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredFoodItems(
      selectedCategory === "All"
        ? foodItems
        : foodItems.filter(
            (item: any) => item.category_id.$oid === selectedCategory,
          ),
    );
  }, [selectedCategory, foodItems]);

  const handleCategoryChange = (category: string) => {
    console.log("items", filteredFoodItems);
    setSelectedCategory(category);
  };

  return (
    <div className="OrderPage">
      <div className="featured">
        <h1>Featured Items</h1>
        <Carousel dots={false} slidesToShow={4} autoplay={true}>
          {foodItems
            .filter((item: any) => item.featured === true)
            .map((featuredItem: any) => (
              <div
                key={featuredItem.id.$oid}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={featuredItem.image}
                  alt={featuredItem.name}
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "25px",
                    padding: "10px",
                  }}
                />
              </div>
            ))}
        </Carousel>
      </div>
      <div className="order-items">
        <div className="category-dropdown">
          <h1>Food</h1>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category: any) => (
              <option key={category.id.$oid} value={category.id.$oid}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="items-container">
          {filteredFoodItems.map((item: any) => (
            <FoodItem
              key={item.id.$oid}
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
