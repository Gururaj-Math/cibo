import "./App.css";
import Navbar from "./components/Navbar";
import create from "./pages/categories/create.tsx";
import categories from "./pages/categories/index.tsx";
import foods from "./pages/foods/index.tsx";
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
                    <Route path="/categories" Component={categories} />
                    <Route path="/categories/create" Component={create}/>
                    
                    <Route path="/foods" Component={foods} />
            </Routes>
            {/*{!isLoginPage && !isRegisterPage && !myAccountPage && <Footer />}*/}
        </>
    );
}

export default App;
