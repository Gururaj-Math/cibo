import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

interface RootState {
  user: {
    currentUser: string | null;
  };
}

const AuthLayout: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return <div>{currentUser ? <Navigate to="/" /> : <Outlet />}</div>;
};

export default AuthLayout;
