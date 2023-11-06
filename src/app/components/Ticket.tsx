"use client";
import React from "react";
import SingleTicket from "./SingleTicket";
// Import Swiper React components
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import localFont from "next/font/local";
import { ticketData } from "../lib/ticketData";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});
const Ticket = () => {
  return (
    <section id="tickets" className="  px-5 pt-14 pb-28  sm:py-10 lg:px-16 ">
      <p
        data-aos="fade-up"
        className={`${blatantBold.className} text-center text-xl font-medium mb-4 text-zaama_yellow uppercase tracking-wider  md:text-2xl selection:bg-zaama_red/50`}
      >
        Choose your package
      </p>
      <p
        data-aos="fade-up"
        className="text-center mb-14 selection:bg-zaama_red/50"
      >
        We have uniquely crafted ticket packages for everyone
      </p>

      <div data-aos="fade-up">
        <div className="flex justify-center items-center md:hidden">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2700,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper "
          >
            {ticketData.map((item, index) => (
              <SwiperSlide key={index}>
                <SingleTicket
                  key={index}
                  color={item.color}
                  packageName={item.packageName}
                  dollar_price={item.dollar_price}
                  cedi_price={item.cedi_price}
                  perks={item.perks}
                  available={item.available}
                  countDown={item.countDown}
                  ticketID={item.ticketType}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden justify-center items-center px-28 md:flex lg:hidden">
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
            {ticketData.map((item, index) => (
              <SwiperSlide key={index}>
                <SingleTicket
                  key={index}
                  color={item.color}
                  packageName={item.packageName}
                  dollar_price={item.dollar_price}
                  cedi_price={item.dollar_price}
                  perks={item.perks}
                  available={item.available}
                  countDown={item.countDown}
                  ticketID={item.ticketType}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden justify-center items-center lg:flex">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
              delay: 2700,
              pauseOnMouseEnter: true,
            }}
            // navigation
            // pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper "
          >
            {ticketData.map((item, index) => (
              <SwiperSlide key={index}>
                <SingleTicket
                  key={index}
                  color={item.color}
                  packageName={item.packageName}
                  dollar_price={item.dollar_price}
                  cedi_price={item.cedi_price}
                  perks={item.perks}
                  available={item.available}
                  countDown={item.countDown}
                  ticketID={item.ticketType}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
