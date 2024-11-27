"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import localFont from "next/font/local";

type SponsorData = {
  imageSrc: string;
  alt: string;
  smallSize: boolean;
};
const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Sponsors = () => {
  const sponsors: SponsorData[] = [
    {
      imageSrc: "/images/Blache_logo.png",
      alt: "Blache",
      smallSize: false,
    },
    {
      imageSrc: "/images/ministry-of-tourism-arts-and-culture.png",
      alt: "ministry-of-tourism-arts-and-culture",
      smallSize: false,
    },
    {
      imageSrc: "/images/beyond-the-return.png",
      alt: "beyond-the-return",
      smallSize: false,
    },
    {
      imageSrc: "/images/ghana-tourism-authority.png",
      alt: "ghana-tourism-authority",
      smallSize: false,
    },
    {
      imageSrc: "/images/musicians-union-of-ghana.png",
      alt: "musicians-union-of-ghana",
      smallSize: true,
    },
    {
      imageSrc: "/images/RythmzsAfrica.png",
      alt: "RythmzsAfrica",
      smallSize: false,
    },
    {
      imageSrc: "/images/xecute.png",
      alt: "xecute",
      smallSize: false,
    },
    {
      imageSrc: "/images/a-list-management.png",
      alt: "a-list-management",
      smallSize: false,
    },
    {
      imageSrc: "/images/road-boys-association.png",
      alt: "road-boys-association",
      smallSize: false,
    },
    {
      imageSrc: "/images/musicians-union-of-ghana.png",
      alt: "musicians-union-of-ghana",
      smallSize: true,
    },
  ];
  return (
    <section
      id="sponsors"
      className="relative px-4 py-10 bg-top bg-cover bg-bg-four sm:px-14 sm:py-24 md:bg-bottom md:gap-8 lg:px-24 "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <p
        data-aos="fade-down"
        className={`${blatantBold.className} text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellowf text-primary uppercase md:text-2xl md:mb-10`}
      >
        Our Sponsors and Partners
      </p>

      <div data-aos="fade-up" className="select-none">
        <div className="flex items-center justify-center my-5 ">
          <Swiper
            speed={1200}
            loop={true}
            slidesPerView={2}
            spaceBetween={10}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 640px (tablet)
              640: {
                slidesPerView: 3,
              },
              // when window width is >= 768px (tablet)
              768: {
                slidesPerView: 4,
              },
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 5,
              },
              // when window width is >= 1280px (desktop)
              1280: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper "
          >
            {sponsors.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#4a5463] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#6e6e6e] mx-auto mb-1"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={item.smallSize ? 200 : 120}
                    height={item.smallSize ? 200 : 120}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
