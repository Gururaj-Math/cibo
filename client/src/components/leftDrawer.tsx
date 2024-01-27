import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {useSelector} from "react-redux";

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
const LeftDrawer: React.FC = () => {
    const {currentUser} = useSelector((state: RootState)=> state.user)
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Edit Profile
            </Button>
            <Drawer title="Edit Profile" onClose={onClose} open={open}>
                <form></form>
            </Drawer>
        </>
    );
};

export default LeftDrawer;