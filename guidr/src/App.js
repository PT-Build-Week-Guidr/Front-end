import React from 'react';
import WelcomePage from './components/WelcomePage';
import {Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/home" component={HomePage}/>
    </div>
  );
}

export default App;
