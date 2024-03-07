import "./App.css";
import Navbar from "./components/Navbar";
import create from "./pages/categories/create.tsx";
import categories from "./pages/categories/index.tsx";
import foods from "./pages/foods/index.tsx";
import createFood from "./pages/foods/create.tsx";
import overview from "./pages/overview/index.tsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import UpdateCategory from "./pages/categories/update.tsx";
import UpdateFood from "./pages/foods/update.tsx";
import feedback from "./pages/feedback/index.tsx";
import authLayout from "./pages/auth/authLayout.tsx";
import Login from "./pages/auth/forms/login.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

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
                <Route Component={authLayout}>
                    <Route path={"/login"} Component={Login} />
                </Route>
                <Route Component={PrivateRoute}>
                    <Route index Component={overview} />
                    <Route path="/categories" Component={categories} />
                    <Route path="/categories/create" Component={create}/>
                    <Route path="/categories/update/:id" Component={UpdateCategory}/>
                    <Route path="/foods" Component={foods} />
                    <Route path="/foods/create" Component={createFood} />
                    <Route path="/foods/update/:id" Component={UpdateFood}/>
                    <Route path="/feedbacks" Component={feedback} />
                </Route>
            </Routes>
            {/*{!isLoginPage && !isRegisterPage && !myAccountPage && <Footer />}*/}
        </>
    );
}

export default App;
