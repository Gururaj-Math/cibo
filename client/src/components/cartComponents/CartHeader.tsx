import "../../styles/cart.css";

const CartHeader = (props: { itemCount: number }) => {
  return <h1 className="cart-header">Cart ({props.itemCount} items)</h1>;
};

export default CartHeader;
