import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartHeader from "../components/cartComponents/CartHeader";
import CartItem from "../components/cartComponents/CartItem";
import CartTotal from "../components/cartComponents/CartTotal";
import "../styles/cart.css";
import API_URI from "../constant";

interface FoodItem {
  image: string;
  name: string;
  description: string;
  price: number;
}

const Cart: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [orderTotal, setOrderTotal] = useState<number>(0);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        if (currentUser && currentUser.data && currentUser.data.cart) {
          const fetchedItems = await Promise.all(
            currentUser.data.cart.map(async (item: any) => {
              const itemId = item.$oid; // Assuming $oid is the correct property name for the ID
              const response = await fetch(
                `${API_URI}/foods/${itemId}/get_food_details`,
              );
              const data: FoodItem = await response.json();
              return data;
            }),
          );

          setCartItems(fetchedItems);
          console.log(cartItems);
          const calculatedSubtotal = fetchedItems.reduce(
            (total, item) => total + item.price,
            0,
          );
          setSubtotal(calculatedSubtotal);

          const tax = 0.15 * calculatedSubtotal;
          const shippingFee = 10;
          const calculatedOrderTotal = calculatedSubtotal + tax + shippingFee;
          setOrderTotal(calculatedOrderTotal);
        }
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };

    fetchFoodDetails();
  }, [currentUser]);

  return (
    <>
      <CartHeader itemCount={cartItems.length} />
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              imageUrl={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        <div className="cart-total">
          <CartTotal
            subtotal={subtotal}
            shippingFee={10}
            tax={0.15 * subtotal}
            orderTotal={orderTotal}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
