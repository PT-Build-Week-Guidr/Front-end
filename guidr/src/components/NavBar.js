import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';

function NavBar () {
    return (
        <div>
            <Nav pills>
                <NavItem>
                    <NavLink href="#" active>Profile Pic</NavLink>
               </NavItem>
        <NavItem>
        <NavLink href="#" active>Trips</NavLink>
        </NavItem>
        <NavItem> 
        <NavLink href="#" active>Sign In</NavLink>
        </NavItem>
        <br></br>
        <br></br>
        <br></br>
           </Nav>
        </div>

    );
}

export default NavBar;