import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutMe from './components/aboutMe';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Resume from './components/resume';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>

            <Route exact path="/react-portfolio/">
              <AboutMe/>
            </Route>

            <Route path="/react-portfolio/portfolio">
              <Portfolio/>
            </Route>

            <Route path="/react-portfolio/contact">
              <Contact/>
            </Route>

            <Route path="/react-portfolio/resume">
              <Resume/>
            </Route>
            
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
