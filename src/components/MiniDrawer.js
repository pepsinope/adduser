import React, { useState } from 'react';
import { FaInbox } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { BsTable } from "react-icons/bs";
import { CgInsertBeforeR } from "react-icons/cg";
import { TiUserAdd } from "react-icons/ti";
import { IoLogOut } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";
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
                        <FaInbox size={40} />
                    </button>
                </div>
                <div className='drawerList'>
                    <div>โปรไฟล์</div>
                    <button onClick={toggleDrawer} >
                        <FaCircleUser size={40} />
                    </button>
                </div>
                <div className='drawerList'>
                    <div>ตารางสอน</div>
                    <button onClick={toggleDrawer} >
                        <BsTable size={40} />
                    </button>
                </div>
                <div className='drawerList'>
                    <div>นำเข้าหลักสูตร</div>
                    <button onClick={toggleDrawer} >
                        <CgInsertBeforeR size={40} />
                    </button>
                </div>
                <div className='drawerList'>
                    <div>ข้อมูลผู้ใช้งาน</div>
                    <button onClick={toggleDrawer} >
                        <TiUserAdd size={40} />
                    </button>
                </div>
                <div className='drawerList'>
                <div className='bg-lime-600 p-1 rounded-md'>ออกจากระบบ</div>
                    <button onClick={toggleDrawer} >
                        <IoLockOpen size={40} />
                    </button>
                </div>
                <div className='drawerList'>
                    <div>ออกจากระบบ</div>
                    <button onClick={toggleDrawer} >
                        <IoLogOut size={40} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniDrawer;
