import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
