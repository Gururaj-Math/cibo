import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartHeader from "../components/cartComponents/CartHeader";
import CartItem from "../components/cartComponents/CartItem";
import CartTotal from "../components/cartComponents/CartTotal";
import axios from "axios";
import API_URI from "../constant";
import { Skeleton } from "antd";

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
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${API_URI}/user/cart?email=${currentUser.data.email}`);
        const cartItemIds = response.data.cart.map((item: any) => item.$oid);
        const items = await Promise.all(cartItemIds.map(async (id: string) => {
          const res = await axios.get(`${API_URI}/foods/${id}/get_food_details`);
          return res.data;
        }));
        setCartItems(items);
        const subtotal = items.reduce((acc, curr) => acc + curr.price, 0);
        setSubtotal(subtotal);
        setOrderTotal(subtotal + 10 + 0.15 * subtotal); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    if (currentUser.data.email) {
      fetchCartItems();
    }
  }, [currentUser.data.email]);

  return (
    <>
      <CartHeader itemCount={cartItems.length} />
      <div className="cart-container">
        <div className="cart-items">
          {loading ? (
            <Skeleton active paragraph={{ rows: 12 }} /> 
          ) : (
            cartItems.map((item: any, index) => (
              <CartItem
                key={index}
                id={item._id.$oid}
                name={item.name}
                imageUrl={item.image}
                description={item.description}
                price={item.price}
              />
            ))
          )}
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
