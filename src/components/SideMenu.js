import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideMenu.css';

function SideMenu() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidemenublock">
            <Link to="/home" className={`sidemenubutton ${isActive('/home') ? 'active' : ''}`}>
            <span className='iconClass'><i className={"fa fa-fw fa-home" }/></span>
                <span>Home</span>
            </Link>
            <Link to="/todolist" className={`sidemenubutton ${isActive('/todolist') ? 'active' : ''}`}>
            <span className='iconClass'><i className="fa-solid fa-list-ol" /></span>
                <span>To Do list</span>
            </Link>
            <Link to="/today" className={`sidemenubutton ${isActive('/today') ? 'active' : ''}`}>
            <span className='iconClass'><i className="fa-solid fa-sun" /></span>
                <span>Today</span>
            </Link>
            <Link to="/calendar" className={`sidemenubutton ${isActive('/calendar') ? 'active' : ''}`}>
            <span className='iconClass'><i className="fa-solid fa-calendar-days" /></span>
                <span>Calendar</span>
            </Link>
        </div>
        
    );
}

export default SideMenu;
