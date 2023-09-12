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

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className=" px-4 py-10 bg-bg-four bg-top bg-cover sm:px-14 sm:py-24  md:bg-bottom md:gap-8 lg:px-24 selection:bg-zaama_red/50"
    >
      <p
        data-aos="fade-down"
        className={`${blatantBold.className} text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellow uppercase md:text-2xl md:mb-10`}
      >
        Our Sponsors
      </p>

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
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#e36666]  mx-auto mb-1"
                >
                  <Image
                    src="/images/Blache_logo.png"
                    alt="Blach-logo"
                    width={120}
                    height={120}
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
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#e36666]  mx-auto mb-1"
                >
                  <Image
                    src="/images/Blache_logo.png"
                    alt="Blach-logo"
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#e36666]  mx-auto mb-1"
                >
                  <Image
                    src="/images/Blache_logo.png"
                    alt="Blach-logo"
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#e36666]  mx-auto mb-1"
                >
                  <Image
                    src="/images/Blache_logo.png"
                    alt="Blach-logo"
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
