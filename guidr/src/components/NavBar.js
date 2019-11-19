import React, {useState} from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import icon from '../images/icon.png';
const NavBar = () =>  {

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const menuClick = () =>{
      console.log(collapsed);
      setCollapsed(collapsed);
    }
    return (
        <div>
            <Navbar color="success" bgcolor="#00A693" dark>
                <NavbarBrand href="/" className="mr-auto"><img className="img-align" src={icon} width='50' height='50' alt="User Icon"></img></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={collapsed} onClick={menuClick} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/trips/">Trips</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/profile/">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
