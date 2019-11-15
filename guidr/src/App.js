import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';

import ProfilePage from './components/profile.js';


function App() {



  return (
    <div className="App">

      <Route path= "/profile" render={props=>
          <div>
            <Header
              {...props}

            />
            <ProfilePage
              {...props}

            />
          </div>
        }
      />
    </div>
  );
}

export default App;
