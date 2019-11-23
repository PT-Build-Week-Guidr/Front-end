import React from 'react';
import { NavLink } from 'react-router-dom';


import logo from '../images/logo.png';
import group from '../images/group_of_people.jpg';
import people from "../images/people_doing_things.jpg";
import notebook from "../images/notebook.jpg";

function HomePage() {

    return (
        <section>

            <img className="img-align" src={logo} alt="Guidr Logo"></img>
            <br />
            <h1>Welcome to Guidr!</h1>
            <img className="img-align" src={group} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">You have the ability to add the different trips that you're going to go on, and once you add them you can also view them. If you would like to viem them click here: <NavLink to='/trips' activeClassName="homePageButton">Trips</NavLink>
            </p>
            <br />
            <img className="img-align" src={people} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">
            The profile page displays all of the information that is associated with your account. If you would like to go to the profile page click here: <NavLink to='/profile' activeClassName="homePageButton">Profile Page</NavLink>
            </p>
            <br />
            <img className="img-align" src={notebook} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">
            If you would like to login to the app, and organize and compare different trips that you can go on Guidr can help you with that. If you would like to login click here: <NavLink to='/login' activeClassName="homePageButton">Log Trip</NavLink>
            </p>
        </section>
    );
}

export default HomePage;
