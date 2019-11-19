
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';

import APITest from './components/apiTest.js';


//Load in the custom components here please
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';



import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';


function App() {



  return (
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