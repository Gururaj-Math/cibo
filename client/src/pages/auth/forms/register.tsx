import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import API_URI from "../../../constant.ts";

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

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URI}/api/v1/user/register`,
        formData,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password_digest"
          placeholder="Password"
          value={formData.password_digest}
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
