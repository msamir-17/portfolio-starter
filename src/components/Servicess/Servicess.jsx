
import React from 'react'
import './Servicess.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
const Servicess = () => {
  return (
    <div className="services">
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
            <div style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma. Sketch,Photoshop,Adobe"}
                />
            </div>
        </div>
        {/* C2 */}
        <div className="cards">
            <div style={{top:'14rem',left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML, Css, JavaScript, React"}
                />
            </div>
        </div>

        {/* C3 */}
        <div className="cards">
            <div style={{top:'19rem',left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"lorem*1 tempore necessitatibus cum possimus   "}
            
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}} ></div>
        </div>
    </div>
  )
}

export default Servicess

