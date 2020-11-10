import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Surf from './components/Pages/Surf';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/' exact component= {Surf} />
      </Switch>
    </Router>
  );
}

export default App;
