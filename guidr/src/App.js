import Login from "./API/login";
import { Link, Route } from "react-router-dom";
import Profile from "./API/profile"
import  PrivateRoute  from "./API/ProtectedRoute";
import Trips from "./API/trips";
import React from 'react';
import './App.css';
import APITest from './components/apiTest.js';
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';


function App() {

  return (
      <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/trips">My Trips</Link>
      </nav>
      
      <Route path="/login" component={Login}></Route>
      <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
      <PrivateRoute path="/trips" component={Trips}></PrivateRoute>

    </div> 
    <div className="App">

      <APITest />

      <Route path= "/profile/" render={props=>
          <div>

            <ProfilePage
              {...props}

            />
            <Footer

            />
          </div>
        }
      />

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/home" component={HomePage} />

    </div>
  );
}

export default App;