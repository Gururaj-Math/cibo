import "../../styles/cart.css";

const CartTotal = (props: {
  subtotal: number;
  shippingFee: number;
  tax: number;
  orderTotal: number;
}) => {
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
        By placing this order you agree to <span>Cibo's Terms</span>
      </p>
      <button className="proceed-btn" role="button">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartTotal;
