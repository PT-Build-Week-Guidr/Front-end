import Login from "./API/login";
import { Link, Route } from "react-router-dom";
import Profile from "./API/profile"
import  PrivateRoute  from "./API/ProtectedRoute";
import Trips from "./API/trips";
import React, {useState} from 'react';
import './App.css';

import APITest from './components/apiTest.js';


//Load in the custom components here please
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';
import NavBar from './components/NavBar.js';
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';


function App() {



  return (
      <div className="App">
      {// <nav>
      //   <Link to="/">Home</Link>
      //   <Link to='/login'>Log In</Link>
      //   <Link to="/profile">Profile</Link>
      //   <Link to="/trips">My Trips</Link>
      // </nav>
      //
      // <Route path="/login" component={Login}></Route>
      // <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
      // <PrivateRoute path="/trips" component={Trips}></PrivateRoute>
      }

      <div className="App">

        <APITest />

        <Route path= "/profile/" render={props=>
            <div>
              <NavBar />
              <ProfilePage
                {...props}

              />
              <Footer

              />
            </div>
          }
        />

        <Route exact path="/" render={props =>
          <div>
            <NavBar />
            <WelcomePage
              {...props}

            />
            <Footer

            />
          </div>
        } />
        <Route exact path="/home" component={HomePage} />

      </div>

    </div>

  );
}

export default App;
