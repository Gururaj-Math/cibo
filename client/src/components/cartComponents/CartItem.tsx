import { useState } from "react";
import "../../styles/cart.css";
const CartItem = (props: {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
        <button className="action-btn">Remove</button>
        <button className="action-btn">Add To Favorite</button>
      </div>
    </div>
  );
};

export default CartItem;
