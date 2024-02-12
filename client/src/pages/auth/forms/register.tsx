import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import API_URI from "../../../constant.ts";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import loginSvg from "../../../assets/login2.svg";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password_digest: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password_digest: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(`${API_URI}/user/register`, formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <Form onFinish={handleFormSubmit}>
          <h1>Register</h1>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="password_digest"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              type="password"
              name="password_digest"
              placeholder="Password"
              value={formData.password_digest}
              onChange={handleInputChange}
            />
          </Form.Item>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="image-container">
        <img src={loginSvg} />
      </div>
    </div>
  );
};

export default Register;
