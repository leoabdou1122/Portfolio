import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import './style.css'

function App() {
  return (
    <div className="App">
      <div className="head">
        <Navbar />  
      </div>
      <div className="home-component">
        <Home />
      </div>
      <div className="about-component">
        <About/>
      </div>
      <div className="skills-component">
        <Skills/>
      </div>
    </div>
  );
}

export default App;
