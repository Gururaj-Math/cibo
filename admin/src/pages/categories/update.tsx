import { SetStateAction, useState } from "react";
import { Button, message } from "antd";
import Heading from "../../components/SectionHeading";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import API_BASE_URL from "../../constant";

const UpdateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate()
  const { id } = useParams(); 

  const handleCategoryNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCategoryName(event.target.value);
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(`${API_BASE_URL}/api/v1/categories/update_name/${id}`, {
        name: categoryName
      });
      message.success("Category updated successfully");
      navigate("/categories")
      console.log("Category updated successfully");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div>
      <div className="mx-7">
        <div className="flex justify-between items-center mt-4 pb-4 border-b">
          <Heading
            title="Update Category"
            subtitle="Manage Categories for your restaurant"
          />
        </div>
        <div className="my-4 w-96">
          <input
            placeholder="Category Name"
            className="border p-2 rounded w-[400px] text-sm"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
          <Button className="mt-2" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
