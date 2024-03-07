import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import API_URI from "../../../constant.ts";
import { Form, Input, Button } from "antd";
import loginSvg from "../../../assets/login2.svg";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface FormData {
    username: string;
    password_digest: string;
}

const Login: React.FC = () => {
    const [_, setCookies] = useCookies(["username"]);
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password_digest: "",
    });
    const navigate = useNavigate()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post(`${API_URI}/api/v1/seller/login`, formData);
            setCookies("username", response.data.data.username);
            navigate("/")
            console.log(response);
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div className="login-container flex items-center justify-evenly h-screen">
            <div className="form-container flex-none w-1/5">
                <Form onFinish={handleFormSubmit}>
                    <h1 className="pb-2 text-2xl">Cibo</h1>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="image-container flex-none">
                <img src={loginSvg} className="w-[600px]" />
            </div>
        </div>
    );
};

export default Login;
