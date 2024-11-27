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
      className="text-sm uppercase text-zaama_greenf text-primary whitespace-nowrap "
    >
      {word}
    </span>
  ));
  return (
    <div className="overflow-hidden">
      <div className="flex py-3 animate-carousel gap-7">
        {duplicatedWords}
        {duplicatedWords}
        {duplicatedWords}
      </div>
    </div>
  );
};

export default CarouselLabel;
