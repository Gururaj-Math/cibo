import CartHeader from "../components/cartComponents/CartHeader";
import CartItem from "../components/cartComponents/CartItem";
import CartTotal from "../components/cartComponents/CartTotal";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = [
    {
      imageUrl:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Veg Salad",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quam.",
      price: 100,
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Veg Salad",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quam.",
      price: 100,
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Veg Salad",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quam.",
      price: 100,
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Veg Salad",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quam.",
      price: 100,
    },
  ];

  const itemCount = cartItems.length;
  const subtotal = 400;
  const shippingFee = 40;
  const tax = 23;
  const orderTotal = 400;

  return (
    <>
      <CartHeader itemCount={itemCount} />
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>
        <div className="cart-total">
          <CartTotal
            subtotal={subtotal}
            shippingFee={shippingFee}
            tax={tax}
            orderTotal={orderTotal}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
