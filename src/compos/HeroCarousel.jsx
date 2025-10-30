import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
  EffectCoverflow,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import "../index.css";

const HeroCarousel = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFlip,
          EffectCoverflow,
          EffectCube,
        ]}
        spaceBetween={12}
        slidesPerView={1}
        effect="cube"
        // effect="flip"
        // effect="coverflow"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="../slide1.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide2.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide3.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide4.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide5.jpg"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide6.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide7.jpeg"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide8.jpeg"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide9.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide10.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide11.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../slide12.webp"
            alt="Indoor Plant Care and Store"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
