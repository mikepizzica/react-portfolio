import logo from './logo.svg';
import './App.css';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <AboutMe/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
