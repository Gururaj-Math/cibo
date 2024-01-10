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
import Login from "./pages/login";

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

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/orderNow" Component={OrderPage} />
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={Login} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
