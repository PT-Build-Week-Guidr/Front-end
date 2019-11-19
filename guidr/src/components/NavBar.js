import React, {useState} from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler, Navbar } from 'reactstrap';

const NavBar = () =>  {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const menuClick = () =>{
      console.log(collapsed);
      setCollapsed(collapsed);
    }
    return (
        <div>
            <Navbar color="success" dark>
                <NavbarBrand href="/" className="mr-auto"><img className="img-align" src="./images/icon.png" width='50' height='50' alt="User Icon"></img></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={collapsed} onClick={menuClick} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">Trips</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
