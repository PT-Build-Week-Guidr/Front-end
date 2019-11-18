import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

function HomePage() {

    return (
        <section>
            <NavBar />
            <img className="img-align" src="./images/logo.png" alt="Guidr Logo"></img>
            <br/>
            <h1>This is the home page!</h1>
            <img className="img-align" src="./images/group_of_people.jpg" width="500" height="500" alt="Guidr Logo"></img>
            <img className="img-align" src="./images/people_doing_things.jpg" width="500" height="500" alt="Guidr Logo"></img>
            <img className="img-align" src="./images/notebook.jpg" width="500" height="500"alt="Guidr Logo"></img>
            <br/>
            <br/>
            <br/>
            <NavLink to='/trips' activeClassName="homePageButton">Trips</NavLink>
            <NavLink to='/profile' activeClassName="homePageButton">Profile Page</NavLink>
            <NavLink to='/log_in' activeClassName="homePageButton">Log Trip</NavLink>
        </section>
    );
}

export default HomePage;