import React, { useContext } from 'react'
import './Servicess.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Sam from './Sam.pdf';
import { motion } from 'framer-motion';
import { themeContext } from '../../context';
const Servicess = () => {
    const transition = {duration : 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='services' >
        <div className="awesome">
            <span>Awesome</span>
            <span>Services </span>
            <spane>Softeware Engineer I Have Two Internship Experience And I Creat Some Awesome Projects                   
            </spane>
            <a href={Sam} download >
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
                heading = {'Web Devlopment'}
                detail = {"Developed multiple web projects using HTML, CSS, Bootstrap, Python, and PHP. "}
                />
            </motion.div>
        </div>
        {/* C2 */}
        <div className="cards">
            <motion.div style={{top:'14rem',left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Python Programming'}
                detail = {"Completed various projects, including Diabetes Prediction models. Proficient in Django basics and libraries like Pandas, NumPy etc"}
                />
            </motion.div>
        </div>

        {/* C3 */}
        <div className="cards">
            <motion.div style={{top:'19rem',left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'Jr.ML Developer'}
                detail = {"AI/ML Developer Currently advancing my knowledge in AI and ML, focusing on model development and data-driven solutions"}
            
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}} ></div>
        </div>
    </div>
  );
}

export default Servicess

