import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio" class="col-lg-12">
  
      <header class="section-header">
        <h2>کارهای اخیر</h2>
      </header>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={img4} class="img-fluid rounded" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} class="img-fluid rounded" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} class="img-fluid rounded" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} class="img-fluid rounded" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
