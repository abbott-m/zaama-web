"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
      imageSrc: "/images/xecute.png",
      alt: "xecute",
      smallSize: false,
    },
    {
      imageSrc: "/images/EU-flag.png",
      alt: "EU-flag",
      smallSize: true,
    },
    {
      imageSrc: "/images/chamber-of-commerce.png",
      alt: "chamber-of-commerce",
      smallSize: true,
    },
  ];
  return (
    <section
      id="sponsors"
      className="relative px-4 py-10 bg-bg-four bg-top bg-cover sm:px-14 sm:py-24  md:bg-bottom md:gap-8 lg:px-24 selection:bg-zaama_red/50"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black/20"></div>
      <p
        data-aos="fade-down"
        className={`${blatantBold.className} text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellow uppercase md:text-2xl md:mb-10`}
      >
        Our Sponsors and Partners
      </p>
      {/* <div
        data-aos="fade-up"
        className="flex gap-5 justify-center items-center flex-wrap sm:gap-8 lg:w-4/6 lg:mx-auto"
      >
        <div className="relative w-40 h-20 sm:w-48">
          <Image
            src="/images/ministry-of-tourism-arts-and-culture.png"
            alt="ministry-of-tourism-arts-and-culture"
            objectFit="contain"
            fill
          />
        </div>
        <div className="relative w-40 h-20 sm:w-48">
          <Image
            src="/images/beyond-the-return.png"
            alt="beyond-the-return"
            objectFit="contain"
            fill
          />
        </div>
        <div className="relative w-40 h-20 sm:w-48">
          <Image
            src="/images/ghana-tourism-authority.png"
            alt="ghana-tourism-authority"
            objectFit="contain"
            fill
          />
        </div>
        <div className="relative w-40 h-20 sm:w-48">
          <Image
            src="/images/musicians-union-of-ghana.png"
            alt="musicians-union-of-ghana"
            objectFit="contain"
            fill
          />
        </div>
        <div className="relative w-40 h-20 sm:w-48">
          <Image
            src="/images/xecute.png"
            alt="xecute"
            objectFit="contain"
            fill
          />
        </div>
      </div> */}
      <div data-aos="fade-up">
        <div className="flex items-center justify-center my-5 sm:hidden">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={2}
            spaceBetween={10}
            autoplay={{
              delay: 2700,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper "
          >
            {sponsors.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#344834] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#6e6e6e]  mx-auto mb-1"
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
        <div className=" items-center justify-center my-5 hidden sm:flex md:hidden">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
              delay: 2900,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {sponsors.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#6e6e6e]  mx-auto mb-1"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={120}
                    height={120}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" items-center justify-center my-5 hidden md:flex lg:hidden ">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={4}
            spaceBetween={10}
            autoplay={{
              delay: 2900,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {sponsors.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#6e6e6e]  mx-auto mb-1"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={120}
                    height={120}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" items-center justify-center my-5 hidden lg:flex ">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 2900,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {sponsors.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#6e6e6e]  mx-auto mb-1"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={120}
                    height={120}
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
