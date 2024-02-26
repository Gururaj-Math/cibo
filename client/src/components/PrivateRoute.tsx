import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./navbar";
import Footer from "./footer";

interface RootState {
  user: {
    currentUser: string | null;
  };
}
const PrivateRoute = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
