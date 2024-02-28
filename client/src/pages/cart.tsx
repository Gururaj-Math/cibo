import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartHeader from "../components/cartComponents/CartHeader";
import CartItem from "../components/cartComponents/CartItem";
import CartTotal from "../components/cartComponents/CartTotal";
import axios from "axios";
import API_URI from "../constant";
import { Skeleton, Empty } from "antd";

interface FoodItem {
  id: string;
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
      const response = await axios.get(`${API_URI}/user/cart_details`, {
        params: {
          email: currentUser.data.email 
        }
      });
      console.log(response.data.cart)
      setCartItems(response.data.cart);
      calculateTotal(response.data.cart);
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
                id={item.id.$oid}
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
