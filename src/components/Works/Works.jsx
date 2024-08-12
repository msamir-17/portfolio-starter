import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import Amazon from "../../img/amazon.png"
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span >If You Want To Know </span>
            <span>About Me.. </span>
            <spane>
                Here I Am Provide My Resume You Can Easily Download And Read 
            </spane>
            <button className="button s-button"> Download CV </button>            
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}} ></div>
        </div>
            {/* Right Side */}
        <div className="w-right">
            <motion.div
            initial = {{ rotate: 45 }}
            whileInView={{rotate: 0 }}
            viewport={{margin: '-40px'  }}
            transition={{duration: 3.5, type: 'spring'}}
             className="w-mainCircle">
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
            </motion.div>
            <div className="w-backCircle blueCircle "></div>
            <div className="w-backCircle yellowCircle "></div>
        </div>        
    </div>
  )
}

export default Works

