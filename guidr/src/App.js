import Login from "./API/login";
import { Link, Route } from "react-router-dom";
import Profile from "./API/profile"
import PrivateRoute  from "./API/ProtectedRoute";
import Trips from "./API/trips";
import React from 'react';
import './App.css';
import APITest from './components/apiTest.js';
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';

import NavBar from './components/NavBar.js';

import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import TravelPage from './components/travelpage.js';
import UserCardMain from './components/usercard.js';


function App() {

  return (


      <div className="App">

        {/*<APITest />*/}

        <Route path= "/login/" render={props=>
            <div>
              <NavBar

              />
              <br />
              <br />
              <Login
                {...props}


              />
              <br />
              <br />
              <Footer

              />
            </div>
          }
        />

        <Route path= "/profile/" render={props=>
            <div>
              <NavBar

              />
              <br />
              <br />
              <ProfilePage
                {...props}


              />
              <br />
              <br />
              <Footer

              />
            </div>
          }
        />

        <Route exact path="/" render={props =>
          <div>
            <NavBar

            />
            <br />
            <br />
            <WelcomePage
              {...props}

            />
            <br />
            <br />
            <Footer

            />
          </div>
        } />

        <Route exact path="/home" render={props =>
          <div>
            <NavBar

            />
            <br />
            <br />
            <HomePage
              {...props}

            />
            <br />
            <br />
            <Footer

            />
          </div>
        } />

        <Route exact path="/trips" render={props =>
          <div>
            <NavBar

            />
            <br />
            <br />
            <TravelPage
              {...props}

            />
            <br />
            <br />
            <Footer

            />
          </div>
        } />


      </div>


  )
};

export default App;
