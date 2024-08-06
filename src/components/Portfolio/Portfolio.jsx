import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { themeContext } from '../../context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio' >
      {/* heading */}
      <span style={{color: darkMode? 'white': '' }} >Recent Projects </span>
      <span>Portfolio </span>

      {/* Slider */}
      <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='Portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Portfolio