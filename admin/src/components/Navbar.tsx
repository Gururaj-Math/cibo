import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../styles/navbar.css"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
             <h3>Store Name</h3>
            <div className={"item-list"}>
                <Link to="/">Overview</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
            </div>
            <h3>Admin</h3>
        </div>
    );
};

export default Navbar;