import { useState } from "react";
import { Button, message } from "antd";
import Heading from "../../components/SectionHeading";
import axios from "axios";
import API_BASE_URL from "../../constant.ts";

const Create = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleCreateCategory = async () => {
    // Check if categoryName is empty
    if (!categoryName.trim()) {
      message.error("Category name cannot be empty");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/categories`, {
        category: {
          name: categoryName,
        },
      });

      if (response.status === 201) {
        message.success("Category created successfully");
        setCategoryName("");
      } else {
        throw new Error("Failed to create category");
      }
    } catch (error) {
      console.error("Error creating category:", error);
      message.error("Failed to create category");
    }
  };

  return (
    <div className="mx-7">
      <div className="flex justify-between items-center mt-4 pb-4 border-b">
        <Heading
          title="Categories"
          subtitle="Manage Categories for your restaurant"
        />
      </div>
      <div className="my-4 w-96">
        <input
          placeholder={"Category Name"}
          className={"border p-2 rounded w-[400px] text-sm"}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <Button className="mt-2" onClick={handleCreateCategory}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default Create;
 