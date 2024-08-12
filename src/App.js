import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Servicess from "./components/Servicess/Servicess";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Toggle from "./components/Toggle/Toggle";
import {themeContext} from './context'
import { useContext } from "react";
import Contact from "./components/Contact/Contact";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black':'',
      color : darkMode? 'white' : '',
    }}
    >
      <Navbar/>
      <Intro/>
      <Servicess/>
      <Experience/>
      <Works/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
      <Toggle/>
    </div>
  );
}

export default App; 

// 2:02:20
