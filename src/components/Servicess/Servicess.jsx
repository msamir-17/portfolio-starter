
import React, { useContext } from 'react'
import './Servicess.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { motion } from 'framer-motion';
import { themeContext } from '../../context';
const Servicess = () => {
    const transition = {duration : 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services' >
        <div className="awesome">
            <span>Awesome</span>
            <span>services </span>
            <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br/>
                tempore necessitatibus cum possimus                   
            </spane>
            <a href={Resume} download >
            <button className="button s-button"> Download CV </button>

            </a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}} ></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
            whileInView={{left: '14rem' }}
            initial = {{ left: '25rem' }}
            transition={transition}

            style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma. Sketch,Photoshop,Adobe lorem*1 tempore necessitatibus cum possimus"}
                />
            </motion.div>
        </div>
        {/* C2 */}
        <div className="cards">
            <div style={{top:'14rem',left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML, Css, JavaScript, React lorem*1 tempore necessitatibus cum possimus"}
                />
            </div>
        </div>

        {/* C3 */}
        <div className="cards">
            <div style={{top:'19rem',left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"lorem*1 tempore necessitatibus cum possimus lorem*1 tempore necessitatibus cum possimus   "}
            
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}} ></div>
        </div>
    </div>
  );
}

export default Servicess

