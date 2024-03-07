import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const  currentUser  = document.cookie.includes('username')
    return currentUser ? (
        <>
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" />
    );
};
export default PrivateRoute;