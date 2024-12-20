"use client";
import React from "react";
import SingleTicket from "./SingleTicket";

import { Autoplay } from "swiper/modules";
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
    <section
      id="tickets"
      className="relative w-full px-5 overflow-hiddenf pt-14 pb-28 sm:py-10 lg:px-16 "
    >
      <p
        data-aos="fade-up"
        className={`${blatantBold.className} text-center text-xl font-medium mb-4 text-primary uppercase tracking-wider  md:text-2xl`}
      >
        Choose your package
      </p>
      <p data-aos="fade-up" className="mb-2 text-center">
        We have uniquely crafted ticket packages for everyone
      </p>
      <div className="mb-10 text-center">
        <p data-aos="fade-up" className="text-center ">
          Ticket Support Numbers:{" "}
          <span className="text-sm whitespace-nowrap">+233 24 832 5314,</span>
          <span className="text-sm whitespace-nowrap">+233 24 138 3766</span>
        </p>
      </div>

      <div data-aos="fade-up">
        <div className="">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2700,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 640px (tablet)
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {ticketData.map((item, index) => (
              <SwiperSlide key={index} className="">
                <SingleTicket
                  color={item.color}
                  packageName={item.packageName}
                  packageSubName={item.packageSubName}
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

        <p className="mt-5 text-sm italic text-center text-gray-300 md:hidden">
          Swipe for more...
        </p>
      </div>
    </section>
  );
};

export default Ticket;
