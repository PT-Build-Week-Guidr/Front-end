import React from 'react';
import Login from "./API/login";
import { Link, Route } from "react-router-dom";


function App() {
  return (
      <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to='/login'>Log In</Link>
      </nav>
      <Route exact path="/login" component={Login}></Route>
    </div> 
  );
}

export default App;
