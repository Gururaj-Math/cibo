import "../../styles/cart.css";
import axios from "axios"
import Spinner from "../ui/Spinner";
import {useState} from "react";
import { Link } from "react-router-dom";
const CartTotal = (props: {
  subtotal: number;
  shippingFee: number;
  tax: number;
  orderTotal: number;
  cartItems: object;
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const handlePayment = async () => {
        setIsLoading(true)
        const response = await axios.post( `http://127.0.0.1:3000/payments`,
            {items: props.cartItems}
        )
        window.location.href = response.data.url;
        setIsLoading(false)
    }
  return (
    <div className="total-container">
      <div className="price-details">
        <p className="title">Starting Subtotal</p>
        <p className="amount">₹{props.subtotal}</p>
      </div>
      <div className="price-details">
        <p className="title">Shipping Fee</p>
        <p className="amount">₹{props.shippingFee}</p>
      </div>
      <div className="price-details">
        <p className="title">Estimated Tax</p>
        <p className="amount">₹{props.tax}</p>
      </div>
      <div className="Order-total">
        <p className="title">Order Total</p>
        <p className="amount">₹{props.orderTotal}</p>
      </div>
      <p className="terms">
        By placing this order you agree to <Link to={'/terms'}>Cibo's Terms</Link>
      </p>
      <button className="proceed-btn" role="button" onClick={handlePayment}>
        Proceed To Checkout {isLoading ? <Spinner /> : ""}
      </button>
    </div>
  );
};

export default CartTotal;
