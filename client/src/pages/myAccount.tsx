import React from 'react';
import { useSelector } from "react-redux";
import "../styles/myAccount.css";
import LeftDrawer from "../components/leftDrawer"
interface RootState {
    user: {
        currentUser: {
            data: {
                data: {
                    name: string;
                };
            };
        } | null;
    };
}
const MyAccount: React.FC = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    return (
        <div className="accountContainer">
            <div className="accountDetails">
                <div>
                    <h1>{currentUser?.data?.name}</h1>
                    <div>
                        <p>{currentUser?.data?.phone}</p>
                        <p>{currentUser?.data?.email}</p>
                    </div>
                </div>
                <div>
                    <LeftDrawer />
                </div>
            </div>
        </div>
    );
};

export default MyAccount;