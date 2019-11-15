import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
 
function HomePage() {

    return (
        <section>
        <img className="img-align"src="./images/logo.png" alt="Guidr Logo"></img>
        <br></br>
        <h1>This is the home page!</h1>
        <NavBar />
        <NavLink to ='/trips' activeClassName="homePageButton">Trips</NavLink>
        <NavLink to ='/profile' activeClassName="homePageButton">Profile Page</NavLink>
        <NavLink to ='/log' activeClassName="homePageButton">Log Trip</NavLink>
        </section>

    );
}

export default HomePage;