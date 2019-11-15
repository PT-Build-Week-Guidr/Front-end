import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';

import ProfilePage from './components/profile.js';


function App() {



  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;
