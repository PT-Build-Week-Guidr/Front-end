
import React, {useState} from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import icon from '../images/hamburger_icon.png';
import logo from '../images/logo.png';

const NavBar = () =>  {

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const menuClick = () =>{
      console.log(collapsed);
      setCollapsed(collapsed);
    }
    return (
        <div>

            <Navbar className="guidr-green" >
                <NavbarBrand href="/" className="mr-auto"><img className="guidr-logo" src={logo} width='120' height='50' alt="guider logo" /></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2">
                  <img className="guidr-logo" src={icon} width='80' height='60' alt="profile nav button"/>
                </NavbarToggler>
                <Collapse isOpen={collapsed} onClick={menuClick} >

                    <Nav navbar>
                        <NavItem className="guidr-green2">
                            <NavLink href="/home/">Home</NavLink>
                        </NavItem>
                        <NavItem className="guidr-green2">
                            <NavLink href="/trips/">Trips</NavLink>
                        </NavItem>
                        {/*<NavItem className="guidr-green2">
                            <NavLink href="/profile/">Profile</NavLink>
                        </NavItem>*/}

                        <NavItem className="guidr-green2">
                            <NavLink href="https://guidr-project.netlify.com/">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
