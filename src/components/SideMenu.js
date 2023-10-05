import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SideMenu(){
    const navigate = useNavigate();
    return (
        <SideNav onSelect={selected => {
            console.log(selected);
            navigate(selected);
        }}>
            <SideNav.Toggle />
            <SideNav.Nav>
                <NavItem eventKey="home"> 
                    <NavIcon><i className='fa fa-fw fa-home'/></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="todolist"> 
                    <NavIcon><i className='fa-solid fa-list-ol'/></NavIcon>
                    <NavText>To Do list</NavText>
                </NavItem>
                <NavItem eventKey="today">
                    <NavIcon><i className='fa-solid fa-sun'/></NavIcon>
                    <NavText>Today</NavText>
                </NavItem>
                <NavItem eventKey="calendar">
                    <NavIcon><i className='fa-solid fa-calendar-days'/></NavIcon>
                    <NavText>Calendar</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideMenu;
