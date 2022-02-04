import logo from './logo.svg';
import './App.css';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Work from './components/work';


function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <AboutMe/>
      <Work/>
    </div>
    </>
  );
}

export default App;
