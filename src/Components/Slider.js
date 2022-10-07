import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";
import Imageslide1 from "../Images/Image-1.jpg";
import Imageslide2 from "../Images/Image-2.jpg";
import Imageslide3 from "../Images/Image-3.jpg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
    <div className="slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      
        <SwiperSlide>
          <img src={Imageslide1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Imageslide3} alt='' />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
