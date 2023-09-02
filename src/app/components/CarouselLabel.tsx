"use client";
import React from "react";

// Import Swiper React components
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CarouselLabel = {
  word: string;
};
const CarouselLabel = ({ word }: CarouselLabel) => {
  const duplicatedWords = Array.from({ length: 40 }, (_, index) => (
    // <SwiperSlide key={index}>
    //   <span className="text-sm text-zaama_green whitespace-nowrap ">
    //     {word}
    //   </span>
    // </SwiperSlide>
    <span className="text-sm uppercase text-zaama_green whitespace-nowrap ">
      {word}
    </span>
  ));
  return (
    <div className="overflow-hidden">
      {/* <Swiper
        loop={true}
        speed={1200}
        // slidesPerView={10}
        spaceBetween={8}
        autoplay={{
          delay: 1900,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper  "
      >
        {duplicatedWords}
      </Swiper> */}
      <div className="animate-carousel flex gap-7 py-3">{duplicatedWords}</div>
    </div>
  );
};

export default CarouselLabel;
