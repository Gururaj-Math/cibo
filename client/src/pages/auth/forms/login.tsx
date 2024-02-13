import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import API_URI from "../../../constant.ts";
import { useCookies } from "react-cookie";
import {
  logInStart,
  logInSuccess,
  logInFailure,
} from "../../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import "../../../styles/login.css";
import loginSvg from "../../../assets/login2.svg";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password_digest: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [_, setCookies] = useCookies(["access_token"]);
  const [formData, setFormData] = useState<FormData>({
    email: "",
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
      dispatch(logInStart());
      const response = await axios.post(`${API_URI}/user/login`, formData);
      dispatch(logInSuccess(response.data));
      setCookies("access_token", response.data.accessToken);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      dispatch(logInFailure(error));
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <Form onFinish={handleFormSubmit}>
          <h1>Cibo</h1>
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
            name="password"
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
            New user? <Link to="/register">Register Now!</Link>
          </p>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
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

export default Login;
