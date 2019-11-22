import { Route, BrowserRouter, Switch } from "react-router-dom";
//import Profile from "./API/profile"
import PrivateRoute  from "./API/ProtectedRoute";

import React from 'react';
import './App.css';
//import APITest from './components/apiTest.js';
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';

import NavBar from './components/NavBar.js';

import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import TravelPage from './components/travelpage.js';
//import UserCardMain from './components/usercard.js';
import SignUp from "./API/newUserForm";
import Login from './API/login.js';
import TripPage from './components/trippage.js'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <br />
        <br />

        <Switch>
          <Route path= "/login/" render={props=>
            <Login
              {...props}

            />
          }
          />
          <Route path= "/profile/" render={props=>
            <ProfilePage
              {...props}

            />
          }
          />
          <Route exact path="/" render={props =>
            <WelcomePage
              {...props}

            />
          }
          />
          <Route exact path="/signUp" render={props =>
            <SignUp
              {...props}
            />
          }
          />
          <PrivateRoute>
            <Route exact path="/home" render={props =>
              <HomePage
                {...props}

              />
            }
            />
            <Route exact path="/trips/" render={props =>
              <TravelPage
                {...props}

              />
            }
            />
            <Route exact path="/users/:id/trips" component={TripPage}  />



          </PrivateRoute>
        </Switch>
        <br />
        <br />
        <Footer />

      </div>
      </BrowserRouter>
    );
};

export default App;
