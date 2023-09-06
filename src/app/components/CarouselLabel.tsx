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
    <span
      key={index}
      className="text-sm uppercase text-zaama_green whitespace-nowrap "
    >
      {word}
    </span>
  ));
  return (
    <div className="overflow-hidden selection:bg-zaama_red/50">
      <div className="animate-carousel flex gap-7 py-3">
        {duplicatedWords}
        {duplicatedWords}
        {duplicatedWords}
      </div>
    </div>
  );
};

export default CarouselLabel;
