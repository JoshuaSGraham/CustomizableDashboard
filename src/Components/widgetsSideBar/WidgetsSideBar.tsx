import { AddToQueueOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './WidgetsSideBar.css'


export const WidgetsSideBar = () => {
    const [isSidebarVisible, setSideBarStatus] = useState(false);

    return (
        <div className='side-bar-container'>
            <Sidebar 
            collapsed = {isSidebarVisible}
            >
                <Menu>
                {/* add any new items here */}
                    <MenuItem
                        icon={<AddToQueueOutlined />}                    
                        onClick={() => {
                            setSideBarStatus(!isSidebarVisible);
                        }}
                        style={{ textAlign: "center" }}
                    >
                        <h2>Widgets</h2>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default WidgetsSideBar;
