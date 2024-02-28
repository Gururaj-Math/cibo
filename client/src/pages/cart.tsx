import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartHeader from "../components/cartComponents/CartHeader";
import CartItem from "../components/cartComponents/CartItem";
import CartTotal from "../components/cartComponents/CartTotal";
import axios from "axios";
import API_URI from "../constant";
import { Skeleton, Empty } from "antd";

interface FoodItem {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

const Cart: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [orderTotal, setOrderTotal] = useState<number>(0);

  useEffect(() => {
    if (currentUser.data.email) {
      fetchCartItems();
    }
  }, [currentUser.data.email]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const cartResponse = await axios.get(`${API_URI}/user/cart`);
      const foodIds: string[] = cartResponse.data;
      const foodDetailsPromises = foodIds.map((id: string) =>
        axios.get(`${API_URI}/foods/${id}/get_food_details`)
      );
      const foodDetailsResponses = await Promise.all(foodDetailsPromises);
      const cartItemsData: FoodItem[] = foodDetailsResponses.map(
        (response: any) => response.data
      );
      setCartItems(cartItemsData);
      calculateTotal(cartItemsData);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (items: FoodItem[]) => {
    const subTotal = items.reduce((acc, curr) => acc + curr.price, 0);
    setSubtotal(subTotal);
    const orderTotal = subTotal + (items.length > 0 ? 10 : 0) + 0.15 * subTotal;
    setOrderTotal(orderTotal);
  };

  return (
    <>
      <CartHeader itemCount={cartItems.length} />
      <div className="cart-container">
        <div className="cart-items">
          {loading ? (
            <Skeleton active paragraph={{ rows: 12 }} />
          ) : cartItems.length > 0 ? ( 
            cartItems.map((item: FoodItem, index) => (
              <CartItem
                key={index}
                id={item._id}
                name={item.name}
                imageUrl={item.image}
                description={item.description}
                price={item.price}
                currentUser={currentUser}
                fetchCartItems={fetchCartItems}
              />
            ))
          ) : (
            <Empty description="Your cart is empty" />
          )}
        </div>
        <div className="cart-total">
          <CartTotal
            subtotal={subtotal}
            shippingFee={cartItems.length > 0 ? 10 : 0} 
            tax={0.15 * subtotal}
            orderTotal={orderTotal}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
