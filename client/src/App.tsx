import "./App.css";
import Navbar from "./components/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import OrderPage from "./pages/OrderPage";
import Footer from "./components/footer";
import Login from "./pages/auth/forms/login.tsx";
import Register from "./pages/auth/forms/register.tsx";
import Cart from "./pages/cart";
import authLayout from "./pages/auth/authLayout.tsx";
import privateRoute from "./components/PrivateRoute.tsx";
import MyAccount from "./pages/myAccount";

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
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Route>
        <Route Component={privateRoute}>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/orderNow" Component={OrderPage} />
          <Route path="/contact" Component={Contact} />
          <Route path="/cart" Component={Cart} />
          <Route path="/my-account" Component={MyAccount} />
        </Route>
      </Routes>
      {!isLoginPage && !isRegisterPage && !myAccountPage && <Footer />}
    </>
  );
}

export default App;
