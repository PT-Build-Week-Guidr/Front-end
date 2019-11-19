import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';

import APITest from './components/apiTest.js';


//Load in the custom components here please
import ProfilePage from './components/profile.js';
import Footer from './components/footer.js';


function App() {



  return (
    <div className="App">
      <APITest />

      <Route path= "/" render={props=>
          <div>

            <ProfilePage
              {...props}

            />
            <Footer

            />
          </div>
        }
      />
    </div>
  );
}

export default App;
