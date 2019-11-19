import { Link, Route } from "react-router-dom";
import Profile from "./API/profile";
import PrivateRoute from "./API/ProtectedRoute";
import Trips from "./API/trips";
import React from "react";
import "./App.css";
import APITest from "./components/apiTest.js";

//Load in the custom components here please
import ProfilePage from "./components/profile.js";
import Footer from "./components/footer.js";

import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      {/* <APITest /> */}
      <Trips  />
<Link to="/trips">Trips</Link>
      <Route exact path="/" component={WelcomePage} />

      <Route
        path="/profile/"
        render={props => (
          <div>
            <ProfilePage {...props} />
            <Footer />
          </div>
        )}
      />
      <PrivateRoute exact path="/home" component={HomePage} />
      <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
      <PrivateRoute path="/trips" component={Trips}></PrivateRoute>

    </div>
  );
}

export default App;