import "./App.css";
import Navbar from "./components/Navbar";
import create from "./pages/categories/create.tsx";
import categories from "./pages/categories/index.tsx";
import foods from "./pages/foods/index.tsx";
import createFood from "./pages/foods/create.tsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import UpdateCategory from "./pages/categories/update.tsx";

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
                    <Route path="/categories/update/:id" Component={UpdateCategory}/>
                    <Route path="/foods" Component={foods} />
                    <Route path="/foods/create" Component={createFood} />
            </Routes>
            {/*{!isLoginPage && !isRegisterPage && !myAccountPage && <Footer />}*/}
        </>
    );
}

export default App;
