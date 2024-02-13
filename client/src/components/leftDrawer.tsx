import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import API_URI from "../constant";
import { message } from "antd";
import "../styles/leftDrawer.css";

interface RootState {
  user: {
    currentUser: {
      data: {
        name: string;
        phone: string;
        email: string;
      };
    } | null;
  };
}

const LeftDrawer: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: currentUser?.data.name || "",
    phone: currentUser?.data.phone || "",
    email: currentUser?.data.email || "",
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URI}/user/update`, userData);
      messageApi.open({
        type: "success",
        content: "Information Updated Successfully",
      });
      setOpen(false);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Failed to Update",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showDrawer}>
        Edit Profile
      </Button>
      <Drawer title="Edit Profile" onClose={onClose} open={open}>
        <form onSubmit={handleSubmit} className="updateForm">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <button type="submit">Update</button>
        </form>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
