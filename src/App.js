import logo from './logo.svg';
import './App.css';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Work from './components/work';
import Contact from './components/contact';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <AboutMe/>
      <Work/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
