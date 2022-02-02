import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "./simpleSwiper.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const SimpleSwiper = () => (
  <div className="SwiperWrapper">
    <Swiper pagination autoplay>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </div>
);

export default SimpleSwiper;
