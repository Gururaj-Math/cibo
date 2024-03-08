import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, message, Button, Empty } from "antd";
import axios from "axios";
import API_URI from "../constant";
import { updateCurrentUser } from "../redux/user/userSlice";

function Favorites() {
  const { currentUser } = useSelector((state: any) => state.user);
  const [favoriteFoods, setFavoriteFoods] = useState<any[]>([]);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchFavoriteFoods = async () => {
      try {
        const responseArray = await Promise.all(
          currentUser.data.favorites.map(async (foodId: string) => {
            const response = await axios.get(
              `${API_URI}/foods/find_by_id/${foodId}`,
            );
            return response.data;
          }),
        );
        setFavoriteFoods(responseArray);
      } catch (error) {
        console.error("Error fetching favorite foods:", error);
      }
    };
    fetchFavoriteFoods();
  }, [currentUser]);

  const removeFromFavorites = async (foodId: string) => {
    try {
      const response = await axios.delete(
        `${API_URI}/user/remove_from_favorites`,
        {
          data: { email: currentUser.data.email, food_id: foodId },
        },
      );
      if (response.status === 200) {
        const updatedFavorites = currentUser.data.favorites.filter(
          (id: string) => id !== foodId
        );
        const updatedCurrentUser = {
          ...currentUser,
          data: {
            ...currentUser.data,
            favorites: updatedFavorites,
          },
        };
        dispatch(updateCurrentUser(updatedCurrentUser));
        message.success("Food removed from favorites successfully");
      } else {
        message.error("Failed to remove food from favorites");
      }
    } catch (error) {
      console.error("Error removing food from favorites:", error);
      message.error("Failed to remove food from favorites");
    }
  };
  

  return (
    <div style={{ padding: "20px", minHeight: "60vh" }}>
      <h2>Favorite Foods</h2>
      {favoriteFoods.length === 0 ? ( // Check if favoriteFoods array is empty
        <Empty description="No favorite foods yet" /> // Display Empty component from Ant Design
      ) : (
      <Row gutter={[16, 16]}>
        {favoriteFoods.map((food: any, key: any) => (
          <Col key={key} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={food.name}
                  src={food.image}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              }
            >
              <Card.Meta
                title={food.name}
                description={`Price: $${food.price}`}
              />
              <Button onClick={() => removeFromFavorites(food.id.$oid)} style={{marginTop: "10px"}}>
                Remove From Favorites
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      )}
    </div>
  );
}

export default Favorites;
