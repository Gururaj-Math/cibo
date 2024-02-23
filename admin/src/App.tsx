import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

function AppRoutes() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";
    const myAccountPage = location.pathname === "/my-account";

    return (
        <>
            {!isLoginPage && !isRegisterPage && <Navbar />}
            <Routes>
                    {/*<Route path="/" Component={} />*/}
            </Routes>
            {/*{!isLoginPage && !isRegisterPage && !myAccountPage && <Footer />}*/}
        </>
    );
}

export default App;
