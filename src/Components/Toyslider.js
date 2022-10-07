import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Toyslider.css";
import toyImage1 from "../Images/image-toy-1.png";
import toyImage2 from "../Images/image-toy-2.png";
import toyImage3 from "../Images/image-toy-3.png";
import toyImage4 from "../Images/image-toy-4.png";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Toyslider() {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "#1A1A1A" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                {" "}
                <img src={toyImage1} alt="/" />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage2} alt="/" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage3} alt="/" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={toyImage4} alt="/" />
              </div>
            </div>
            <div className="row doodle">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles">
                Doodles
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 doodles ">
                <button className="item12">12items</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
