import './App.css';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
