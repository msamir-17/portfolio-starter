import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
// import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
const Testimonials = () => {
    const clients =[
        {
            img: profilePic1,
            review:
                " Lorem ipsum, dolor sit amet consectetur adipisicing eli Repellendus sunt beatae maiores officia modi tempore magnam libero! Fuga officiis voluptatibus error similique praesentium distinctio rem exercitationem nesciunt minima,mollitia dolorum " ,
            
        },
        {
            img: profilePic2,
            review:
                " Lorem ipsum, dolor sit amet consectetur adipisicing eliRepellendus .sunt beatae maiores officia modi tempore magnam libero!Fuga officiis voluptatibus error similiquepraesentium distinctio rem exercitationem nesciunt minima,mollitia dolorum " ,
        },

        {
            img: profilePic3,
            review:
                " Lorem ipsum, dolor sit amet consectetur adipisicing eliRepellendus .sunt beatae maiores officia modi tempore magnam libero!Fuga officiis voluptatibus error similiquepraesentium distinctio rem exercitationem nesciunt minima,mollitia dolorum " ,
        },

        {
            img: profilePic4,
            review:
                " Lorem ipsum, dolor sit amet consectetur adipisicing eliRepellendus .sunt beatae maiores officia modi tempore magnam libero!Fuga officiis voluptatibus error similiquepraesentium distinctio rem exercitationem nesciunt minima,mollitia dolorum " ,
        },
    ]
  return (
    <div className="t-wrapper" id='Testimonials' >
        <div className="t-heading">
            <span> Clients Always Get </span>
            <span> Exceptional Work </span>
            <span> From Me... </span>
            <div className="blur t-blur1" style={{ background:"var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background:"skyblue" }}></div>
        </div>
        {/* slider */}
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client ,index)=>{
                return(
                    <SwiperSlide key={index}  >
                        <div className="testimonial">                        
                            <img src={client.img} alt="" />
                            <span>{client.review} </span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  );
};

export default Testimonials