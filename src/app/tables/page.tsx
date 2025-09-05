"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { tableData } from "../lib/ticketData";

type SingleTableProps = {
  color: string;
  packageName: string;
  cedi_price: string;
  tag: string;
};
const logik = localFont({
  src: "../Logik-font//Logik.otf",
});
const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const SingleTable = ({
  color,
  packageName,
  cedi_price,
  tag,
}: SingleTableProps) => {
  return (
    <div
      className={`cursor-pointer relative mx-auto w-72 h-[390px]  px-2 py-4 flex flex-col justify-center items-center rounded-2xl bg-transparent transition duration-200 lg:w-80 lg:hover:scale-105  lg:hover:text-gray-200 
 
  `}
    >
      <Image
        src={
          color === "green"
            ? "/images/ticket-1-.png"
            : color === "red"
            ? "/images/ticket-1-.png"
            : "/images/ticket-1-.png"
        }
        alt="zaama ticket"
        fill
        className="-z-10"
      />
      <p className={`${logik.className} uppercase text-xs md:text-sm text-center mb-12`}>
        {packageName}
      </p>
      <p
        className={`${logikBold.className} text-center text-2xl mb-14 md:text-2xl`}
      >
        <span className="text-lg md:text-lg">&#8373;</span> {cedi_price}
      </p>

      <p className={`${logikBold.className} uppercase mb-20 text-[10px] mb:text-xs`}>
        ( {tag} )
      </p>
    </div>
  );
};

const Tables = () => {
  return (
    // <section className=" pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8 ">
    //   <div className=" w-full mb-16 md:bg-[#4c4c4c]/20 md:px-16 md:py-14 md:rounded-2xl md:inline-block   md:w-auto ">
    //     <h1
    //       data-aos="fade-down"
    //       className={`${logikBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-7 text-center md:text-2xl `}
    //     >
    //       Table
    //     </h1>
    //     <div className="text-center  md:min-w-[700px]">
    //       <Image
    //         src="/images/zaama-white-logo.png"
    //         alt="zaama-logo-white"
    //         width={160}
    //         height={160}
    //         className="mx-auto mt-16 mb-8 animate-pulse"
    //       />
    //       <p className="mb-2">Table prices will be available soon.</p>
    //     </div>
    //   </div>
    // </section>

    <section id="tickets" className="px-5 pt-20 pb-28 sm:px-10 lg:px-24">
      <p
        data-aos="fade-up"
        className={`${logik.className} text-center text-xl font-medium mb-4 text-zaama_yellowf text-primary uppercase tracking-wider  md:text-2xl`}
      >
        Choose your table package
      </p>
      <p data-aos="fade-up" className="mb-2 text-center">
        We have uniquely crafted table packages for everyone
      </p>
      <div className="mb-10 text-center">
        <p data-aos="fade-up" className="text-center ">
          Ticket Support Numbers:{" "}
          <span className="text-sm whitespace-nowrap">+233 24 832 5314,</span>
          <span className="text-sm whitespace-nowrap">+233 24 138 3766</span>
        </p>
      </div>
      <div>
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
          {tableData.map((item, index) => (
            <SwiperSlide key={index} className="">
              <SingleTable
                color={item.color}
                packageName={item.packageName}
                cedi_price={item.cedi_price}
                tag={item.tag}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="mt-5 text-sm italic text-center text-gray-300 md:mt-10 md:hidden">
        Swipe for more...
      </p>
    </section>
  );
};

export default Tables;
