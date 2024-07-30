import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Servicess from "./components/Servicess/Servicess";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Servicess/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App; 

// 1:12:20
