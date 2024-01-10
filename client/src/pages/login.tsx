import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using React Router
import "../styles/login.css";
import loginSvg from "../assets/login.svg";

function Login() {
  const [activeTab, setActiveTab] = useState("email");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Login Details:", loginDetails);
  };

  return (
    <div className="login-container">
      <div className="login-details">
        <div className="left-container">
          <h1>Cibo</h1>
          <img src={loginSvg} alt="Login" />
        </div>
        <div className="right-container">
          <div className="tab-buttons">
            <button
              className={activeTab === "email" ? "active" : ""}
              onClick={() => handleTabChange("email")}
            >
              Email
            </button>
            <button
              className={activeTab === "phone" ? "active" : ""}
              onClick={() => handleTabChange("phone")}
            >
              Phone
            </button>
          </div>
          {activeTab === "email" && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginDetails.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginDetails.password}
                onChange={handleInputChange}
              />
            </>
          )}
          {activeTab === "phone" && (
            <>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={loginDetails.phoneNumber}
                onChange={handleInputChange}
              />
            </>
          )}

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
