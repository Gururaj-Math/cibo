import { useState } from "react";
import "../../styles/cart.css";
import axios from "axios";
import API_URI from "../../constant";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../../redux/user/userSlice";

const CartItem = (props: {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  currentUser:any;
  fetchCartItems: () => Promise<void>;
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItem = async () => {
    try {
      const response = await axios.delete(`${API_URI}/foods/${props.id}/remove_from_cart`, {
        data: { user_id: props.currentUser.data._id.$oid },
      });
      props.fetchCartItems();
      message.success("Item removed from cart successfully!");
      console.log("Item removed successfully", response.data);
    } catch (error) {
      message.error("Error removing item from cart");
      console.error("Error removing item from cart:", error);
    }
  };

  const handleAddToFavorites = async () => {
    try {
      const response = await axios.post(`${API_URI}/user/add_to_favorites`, {
        email: props.currentUser.data.email,
        food_id: props.id,
      });
      const updatedCurrentUser = {
        ...props.currentUser,
        data: {
          ...props.currentUser.data,
          favorites: response.data.user.favorites 
        }
      };
      dispatch(updateCurrentUser(updatedCurrentUser));

      message.success("Item added to favorites successfully!");
      console.log("Item added to favorites successfully", response.data);
    } catch (error) {
      message.error("Error adding item to favorites");
      console.error("Error adding item to favorites:", error);
    }
  };
  
  
  
  return (
    <div className="item">
      <div className="left-details">
        <img src={props.imageUrl} alt={props.name} />
        <div className="item-details">
          <p className="item-name">{props.name}</p>
          <p>{props.description}</p>
          <p className="item-price">{props.price}Rs</p>
        </div>
      </div>
      <div className="right-details">
        <div className="quantity-btn">
          <button className="quantity" onClick={handleDecreaseQuantity}>
            -
          </button>
          {quantity}
          <button className="quantity" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button className="action-btn" onClick={handleRemoveItem}>Remove</button>
        <button className="action-btn" onClick={handleAddToFavorites}>Add To Favorite</button>
      </div>
    </div>
  );
};

export default CartItem;
