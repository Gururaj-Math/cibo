import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import "../styles/myAccount.css";
import LeftDrawer from "../components/leftDrawer";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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

const MyAccount: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="accountContainer">
      <div className="accountDetails">
        <div>
          <h1>{currentUser?.data?.name}</h1>
          <div>
            <p>{currentUser?.data?.phone}</p>
            <p>{currentUser?.data?.email}</p>
          </div>
        </div>
        <div>
          <LeftDrawer />
        </div>
      </div>
      <div className="logoutButton">
        <Button type="primary" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default MyAccount;
