import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";

import Contact from "./pages/contact";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/auth/forms/login.tsx";
import Register from "./pages/auth/forms/register.tsx";
import Cart from "./pages/cart";
import authLayout from "./pages/auth/authLayout.tsx";
import privateRoute from "./components/PrivateRoute.tsx";
import MyAccount from "./pages/myAccount";
import Favorites from "./pages/favorites.tsx";
import TermsAndConditions from "./pages/Terms.tsx";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (

      <Routes>
        <Route Component={authLayout}>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Route>
        <Route Component={privateRoute}>
          <Route path="/" Component={Home} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="/terms" Component={TermsAndConditions} />
          <Route path="/orderNow" Component={OrderPage} />
          <Route path="/contact" Component={Contact} />
          <Route path="/cart" Component={Cart} />
          <Route path="/my-account" Component={MyAccount} />
        </Route>
      </Routes>
      

  );
}

export default App;
