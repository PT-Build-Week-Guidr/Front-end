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
            <h1>This is the home page!</h1>
            <img className="img-align" src={group} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ex iaculis erat bibendum blandit. In ut euismod nibh, aliquet volutpat lorem. Aenean diam est, accumsan sed est vel, commodo venenatis lectus. Cras molestie gravida iaculis. Duis id convallis tortor. Donec non felis at odio fermentum ultricies in eu nisl. Phasellus tristique neque libero, quis sagittis massa dignissim et. Nam elit velit, posuere eu neque vitae, varius auctor ex. Maecenas est nulla, auctor vel diam in, ullamcorper commodo tellus. Vestibulum malesuada malesuada est, consectetur vestibulum magna blandit ut. Click here: <NavLink to='/trips' activeClassName="homePageButton">Trips</NavLink>
            </p>
            <br />
            <img className="img-align" src={people} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">
            Nullam mattis arcu tempus ex iaculis, id porta lacus condimentum. Aenean interdum lectus lorem, eget pharetra lacus suscipit a. Donec euismod, orci ac ultricies gravida, risus quam molestie augue, sit amet scelerisque felis justo ac nibh. Quisque sit amet mi a turpis vulputate commodo. Aenean luctus nulla sit amet nisi ullamcorper, vitae tristique sem tincidunt. Cras eget libero enim. Mauris gravida pretium quam eu feugiat. Nunc ut ultrices eros. Proin rutrum augue ipsum, nec tristique nisi pellentesque eget. Quisque et quam ante. Click here: <NavLink to='/profile' activeClassName="homePageButton">Profile Page</NavLink>
            </p>
            <br />
            <img className="img-align" src={notebook} width="250" height="250" alt="Guidr Logo"></img>
            <p className="paragraph-styler">
            Phasellus feugiat orci nec sem auctor mattis. Duis lacinia efficitur mattis. Aenean ipsum ex, fermentum semper pellentesque eu, ultrices ac turpis. Integer semper vitae dui id tempor. Aenean lectus mauris, aliquet ac sapien eget, ultrices ultricies magna. Nullam a lacinia quam, nec varius eros. Mauris tincidunt in nisl ac posuere. Nulla non augue laoreet, auctor diam at, molestie ligula. Quisque id tincidunt augue. Click here: <NavLink to='/login' activeClassName="homePageButton">Log Trip</NavLink>
            </p>
        </section>
    );
}

export default HomePage;
