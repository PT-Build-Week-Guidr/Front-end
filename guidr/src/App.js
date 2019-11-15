import React from 'react';
import Login from "./API/login";
import { Link, Route } from "react-router-dom";
import Profile from "./API/profile"
import  PrivateRoute  from "./API/ProtectedRoute";
import Trips from "./API/trips";

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
  );
}

export default App;
