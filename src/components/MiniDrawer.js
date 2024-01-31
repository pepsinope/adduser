import React, { useState } from 'react';
import InboxOutlined from '@ant-design/icons';
import { CiInboxIn } from "react-icons/ci";
import '../style.css'; // You can create a separate CSS file for styling

const MiniDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <div className={`mini-drawer ${isDrawerOpen ? 'open' : 'closed'}`}>
                {/* Drawer content goes here */}
                <div className='drawerMenu'>
                    <div>เมนู</div>
                    <button onClick={toggleDrawer} >
                        <CiInboxIn size={40} />
                    </button>
                </div>

                <p>Drawer Content</p>
            </div>
        </div>
    );
};

export default MiniDrawer;
