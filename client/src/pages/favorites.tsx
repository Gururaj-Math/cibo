import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "antd";
import axios from "axios";
import API_URI from "../constant";

function Favorites() {
  const { currentUser } = useSelector((state: any) => state.user);
  const [favoriteFoods, setFavoriteFoods] = useState<any[]>([]);

  useEffect(() => {
    const fetchFavoriteFoods = async () => {
      try {
        const responseArray = await Promise.all(
          currentUser.data.favorites.map(async (foodId: string) => {
            const response = await axios.get(`${API_URI}/foods/find_by_id/${foodId}`);
            return response.data;
          })
        );
        setFavoriteFoods(responseArray);
      } catch (error) {
        console.error("Error fetching favorite foods:", error);
      }
    };

    if (currentUser && currentUser.data && currentUser.data.favorites) {
      fetchFavoriteFoods();
    }
  }, [currentUser]);

  return (
    <div style={{ padding: "20px", minHeight: "60vh"}}>
      <h2>Favorite Foods</h2>
      <Row gutter={[16, 16]}>
        {favoriteFoods.map((food: any, key: any) => (
          <Col key={key} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={food.name} src={food.image} style={{ maxHeight: "200px", objectFit: "cover" }} />}
            >
              <Card.Meta
                title={food.name}
                description={`Price: $${food.price}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Favorites;
