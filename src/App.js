import React from 'react';
import './App.css';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Resume from './components/resume';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={AboutMe}/>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Resume" component={Resume}/>
          {/* <Route exact path="/">
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
          </Route> */}
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
