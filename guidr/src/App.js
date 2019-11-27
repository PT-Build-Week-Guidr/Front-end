import { Route, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute  from "./API/ProtectedRoute";
import Profile from "./API/profile";
import React from 'react';
import './App.css';
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';
import NavBar from './components/NavBar.js';

import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import TravelPage from './components/travelpage.js';
import SignUp from "./API/newUserForm";
import Login from './API/login.js';
import MyEditTrip from './components/tripedit.js';
import UpdateTrips from "./API/updateTrips";
// import MyInnerForm from "./components/WelcomePage";

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
               <Route exact path="/addTrip" render={props =>
            <Profile
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
            <Route exact path="/trips" render={props =>
              <TravelPage
                {...props}

              />
            }
            />
               {/* <Route exact path="/trips/new" render={props =>
            <Profile
              {...props}

            />
          } */}
          />
            <Route exact path="/users/:id/trips" render={props =>
              <ProfilePage
                {...props}
              />
            }
            />
            <Route exact path="/trips/edit" render={props =>
              <UpdateTrips
                {...props}

              />
            }
            />
            <Route exact path="/users/:id/trips/edit" render={props =>
              <MyEditTrip
                {...props}

              />
            }
            />
            <Route exact path="/trips/new" render={props =>
              <MyTripNew
                {...props}

                />
              }
              />
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
