import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
//import {Button } from 'reactstrap';
 
function HomePage() {

    return (
        <section>
        <NavBar />
        <img className="img-align"src="./images/logo.png" alt="Guidr Logo"></img>
        <br></br>
        <h1>This is the home page!</h1>
        <NavLink to ='/trips' activeClassName="homePageButton">Trips</NavLink>
        <NavLink to ='/profile' activeClassName="homePageButton">Profile Page</NavLink>
        <NavLink to ='/log_in' activeClassName="homePageButton">Log Trip</NavLink>
        </section>
    );
}

export default HomePage;