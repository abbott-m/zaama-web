"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import SingleTicket from "../components/SingleTicket";

type singleTableProps = {
  color: string;
  packageName: string;
  cedi_price: string;
  perks: string[];
};
const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});
const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const SingleTable = ({
  color,
  packageName,
  cedi_price,
  perks,
}: singleTableProps) => {
  return (
    <div
      className={`relative mx-auto w-72 h-[390px]  px-2 py-4 flex flex-col justify-center items-center rounded-2xl bg-transparent  transition duration-100 lg:w-80 hover:scale-105  hover:text-gray-200 
 
  `}
    >
      <Image
        src={
          color === "green"
            ? "/SVG/ticket-1.svg"
            : color === "red"
            ? "/SVG/ticket-2.svg"
            : "/SVG/ticket-3.svg"
        }
        alt="zaama ticket"
        fill
        className="-z-10"
      />
      <p className={`${blatant.className} uppercase text-lg text-center mb-3`}>
        {packageName}
      </p>
      <p
        className={`${blatantBold.className} text-center text-4xl mb-10 md:text-5xl`}
      >
        <span className="text-lg md:text-2xl">&#8373;</span> {cedi_price}
      </p>

      <button
        onClick={() =>
          window.open(
            "https://vsprocessorpro.com/ev/BuyTicket?Id=1655&p=g&comid=1255",
            "_blank"
          )
        }
        className={`${
          blatant.className
        }  tracking-widest rounded-sm text-sm w-28 h-10 mb-5 outline-none font-semibold border uppercase select-none transition duration-150 md:w-32  ${
          color === "red"
            ? "border-zaama_red/50 hover:bg-zaama_red/10"
            : color === "green"
            ? "border-zaama_green/50 hover:bg-zaama_green/10"
            : "border-zaama_yellow/50 hover:bg-zaama_yellow/10"
        } `}
      >
        Purchase
      </button>
      <div className="text-sm text-center">
        <p className="mb-1">Table RSVP</p>
        <p className="text-sm">+233 55 283 1168</p>
      </div>
    </div>
  );
};

const Tables = () => {
  const tableData = [
    {
      color: "yellow",
      packageName: "YAYA K.K",
      cedi_price: "30,000",
      perks: [
        "Experience avenue",
        "Water and wristbands",
        "Standard access",
        "Cocktail area ",
      ],
    },
    {
      color: "red",
      packageName: "SIMMER DOWN ",
      cedi_price: "20,000",
      perks: [
        "Access to festival",
        "Bars and Merch",
        "Priority entry",
        "Drinks",
      ],
    },
    {
      color: "green",
      packageName: "COUNTRY SIDE",
      cedi_price: "10,000",
      perks: [
        "Unrestricted access",
        "Priority entry",
        "Access to the VIP lounge",
      ],
    },
  ];
  return (
    // <section className=" pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8 ">
    //   <div className=" w-full mb-16 md:bg-[#4c4c4c]/20 md:px-16 md:py-14 md:rounded-2xl md:inline-block   md:w-auto ">
    //     <h1
    //       data-aos="fade-down"
    //       className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-7 text-center md:text-2xl `}
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
        className={`${blatant.className} text-center text-xl font-medium mb-4 text-zaama_yellowf text-primary uppercase tracking-wider  md:text-2xl`}
      >
        Choose your package
      </p>
      <p data-aos="fade-up" className="text-center mb-14">
        We have uniquely crafted table packages for you
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row">
        {tableData.map((item, index) => (
          <SingleTable
            key={index}
            color={item.color}
            packageName={item.packageName}
            cedi_price={item.cedi_price}
            perks={item.perks}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-8 my-8 md:my-14 lg:justify-between">
        <div>
          <p className={`${blatant.className} text-lg mb-4`}>
            YAYA K.K – ( GHS 30,000.00 )
          </p>
          <ul className="text-gray-300">
            <li className="mb-2 text-sm ">• SPECIAL GIFT BOX PACKAGE</li>
            <li className="mb-2 text-sm ">• TABLE VIP ENTRY FOR 12 PEOPLE</li>
            <li className="mb-2 text-sm ">• 7 MERGE ITEMS</li>
            <li className="mb-2 text-sm ">• VIP SITTING LOUNGE PACK</li>
            <li className="mb-2 text-sm ">• SPECIAL 2 DEDICATED SECURITY</li>
            <li className="mb-2 text-sm ">• SPECIAL 2 DEDICATED SHAPRONS</li>
            <li className="mb-2 text-sm ">• SPECIAL DEDICATED USHER</li>
            <li className="mb-2 text-sm ">• CAR PACKING AREA WITH SECURITY</li>
            <li className="mb-2 text-sm ">• DEDICATED CLEANER</li>
            <li className="mb-2 text-sm ">• ACCESS TO ARTIST LOUNGE</li>
            <li className="mb-2 text-sm ">• BAR</li>
            <li className="mb-2 text-sm ">• CHAMPAGNE</li>
            <li className="mb-2 text-sm ">• COGNAC</li>
            <li className="mb-2 text-sm ">• WHISKEY</li>
            <li className="mb-2 text-sm ">• VODKA</li>
            <li className="mb-2 text-sm ">• TEQUILA</li>
            <li className="mb-2 text-sm ">• SPARKLING WINE / PRASECCO</li>
            <li className="mb-2 text-sm ">• MIXERS/ ENERGY DRINK</li>
            <li className="mb-2 text-sm ">• JUICE</li>
            <li className="mb-2 text-sm ">• UNLIMITED WATER</li>
            <li className="mb-2 text-sm ">• SHISHA</li>
            <li className="mb-2 text-sm ">• CATERING</li>
          </ul>
        </div>
        <div>
          <p className={`${blatant.className} text-lg mb-4`}>
            SIMMER DOWN ( GHS 20,000.00 )
          </p>
          <ul className="text-gray-300">
            <li className="mb-2 text-sm ">• TABLE VIP ENTRY FOR 10 PEOPLE</li>
            <li className="mb-2 text-sm ">• 5 MERGE ITEMS</li>
            <li className="mb-2 text-sm ">• VIP SITTING LOUNGE PACK</li>
            <li className="mb-2 text-sm ">• SPECIAL 1 DEDICATED SECURITY </li>
            <li className="mb-2 text-sm ">• SPECIAL DEDICATED SHAPRONS</li>
            <li className="mb-2 text-sm ">• SPECIAL DEDICATED USHER</li>
            <li className="mb-2 text-sm ">• BAR</li>
            <li className="mb-2 text-sm ">• CHAMPAGNE</li>
            <li className="mb-2 text-sm ">• COGNAC</li>
            <li className="mb-2 text-sm ">• TEQUILA</li>
            <li className="mb-2 text-sm ">• SPARKLING WINE / PRASECCO</li>
            <li className="mb-2 text-sm ">• MIXERS/ ENERGY DRINK</li>
            <li className="mb-2 text-sm ">• JUICE</li>
            <li className="mb-2 text-sm ">• UNLIMITED WATER</li>
            <li className="mb-2 text-sm ">• SHISHA</li>
            <li className="mb-2 text-sm ">• CATERING</li>
          </ul>
        </div>
        <div>
          <p className={`${blatant.className} text-lg mb-4`}>
            COUNTRY SIDE ( GHS 10,000.00 )
          </p>
          <ul className="text-gray-300">
            <li className="mb-2 text-sm ">• TABLE VIP ENTRY FOR 8 PEOPLE</li>
            <li className="mb-2 text-sm ">• 3 MERGE ITEMS</li>
            <li className="mb-2 text-sm ">• VIP SITTING LOUNGE PACK</li>
            <li className="mb-2 text-sm ">• SPECIAL 1 DEDICATED SECURITY </li>
            <li className="mb-2 text-sm ">• SPECIAL DEDICATED SHAPRONS</li>
            <li className="mb-2 text-sm ">• SPECIAL DEDICATED USHER</li>
            <li className="mb-2 text-sm ">• BAR</li>
            <li className="mb-2 text-sm ">• CHAMPAGNE</li>
            <li className="mb-2 text-sm ">• COGNAC</li>
            <li className="mb-2 text-sm ">• TEQUILA</li>
            <li className="mb-2 text-sm ">• SPARKLING WINE / PRASECCO</li>
            <li className="mb-2 text-sm ">• MIXERS/ ENERGY DRINK</li>
            <li className="mb-2 text-sm ">• JUICE</li>
            <li className="mb-2 text-sm ">• UNLIMITED WATER</li>
            <li className="mb-2 text-sm ">• SHISHA</li>
            <li className="mb-2 text-sm ">• CATERING</li>
          </ul>
        </div>
      </div>
      {/* <div className=" my-10 text-center  md:min-w-[700px]">
        <Image
          src="/images/zaama-white-logo.png"
          alt="zaama-logo-white"
          width={160}
          height={160}
          className="mx-auto mt-16 mb-8 animate-pulse"
        />
        <p className="mb-2">Table packages open on the 1st of December</p>
      </div> */}
    </section>
  );
};

export default Tables;
