import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

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

            <Route exact path="/">
              <AboutMe/>
            </Route>

            <Route exact path="/portfolio">
              <Portfolio/>
            </Route>

            <Route exact path="/contact">
              <Contact/>
            </Route>

            <Route exact path="/resume">
              <Resume/>
            </Route>
            
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
