import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import Amazon from "../../img/amazon.png"

const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works For All These</span>
            <span>Brands & Clients </span><span>Works For All These</span>
            <span>Brands & Clients </span>
            <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br/>
                tempore necessitatibus cum possimus                   
            </spane>
            <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br/>
                tempore necessitatibus cum possimus                   
            </spane>
            <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br/>
                tempore necessitatibus cum possimus                   
            </spane>
            <button className="button s-button"> Hire Me </button>

            <div className="blur s-blur1" style={{background:"#ABF1FF94"}} ></div>
        </div>
        {/* Right Side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-seaCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-seaCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-seaCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-seaCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-seaCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* Backgroumd Circles */}
            <div className="w-backCircle blueCircle "></div>
            <div className="w-backCircle yellowCircle "></div>
        </div>
    </div>
  );
}

export default Works