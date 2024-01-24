import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface RootState {
    user: {
        currentUser: string | null;
    };
}
const PrivateRoute = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    return currentUser ? <Outlet /> : <Navigate to="/login" />
};
export default PrivateRoute;