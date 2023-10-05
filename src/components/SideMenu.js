import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function SideMenu(){
    return <SideNav
        onSelect={selected=>{
            console.log(selected)
        }}
        >

            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem>
                    <NavIcon><i className='fa fa-fw fa-home'/></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem>
                    <NavIcon><i className='fa-solid fa-list-ol'/></NavIcon>
                    <NavText>To Do list</NavText>
                </NavItem>
                <NavItem>
                    <NavIcon><i className='fa-solid fa-sun'/></NavIcon>
                    <NavText>Today</NavText>
                </NavItem>
                <NavItem>
                    <NavIcon><i className='fa-solid fa-calendar-days'/></NavIcon>
                    <NavText>Calendar</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>


}

export default SideMenu;