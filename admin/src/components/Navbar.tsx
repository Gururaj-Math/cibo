import {Link} from "react-router-dom"
import currentUser from "../utils/sellerName.ts";
const Navbar = () => {
    return (
        <div className={'flex justify-between border p-6'}>
             <p>Cibo Admin</p>
            <div className={'flex items-center gap-20'}>
                <Link to="/">Overview</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/foods">Foods</Link>
                <a href="https://dashboard.stripe.com/test/payments?status[0]=successful" target={"_blank"}>Orders</a>
                <Link to="/feedbacks">Feedbacks</Link>
            </div>
            <p>{currentUser}</p>
        </div>
    );
};

export default Navbar;