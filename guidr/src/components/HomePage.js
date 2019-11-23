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
            <br />
            <img className="img-align" src={people} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">We allow our users to create an Outdoor Resume of their travels, trips, trails, and tracks. Click here to share your trip highlights: <NavLink to='/trips' activeClassName="homePageButton">Trips</NavLink>
            </p>
            <br />
            <img className="img-align" src={group} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">
            Our Outdoor Resume is a digital passport that allows users to become both travel guide and travel spectator. It allows users to sharing their travels and locations with others. Click here to join our community, and begin sharing: <NavLink to='/profile' activeClassName="homePageButton">Profile Page</NavLink>
            </p>
            <br />
            <img className="img-align" src={notebook} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">
            Browse hundreds of locations provided by our wonderful and inclusive to you from the comfort of your home or on your favorite  device to plot your next destination. Plan your next getaway: <NavLink to='/login' activeClassName="homePageButton">Log Trip</NavLink>
            </p>
        </section>
    );
}

export default HomePage;
