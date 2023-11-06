"use client";
import React, { useRef, useState } from "react";
import localFont from "next/font/local";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const FAQ = ({ faqData }: { faqData: faq }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (item: number) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  // const faq: faq = [
  //   {
  //     id: 1,
  //     question:
  //       "Do you provide equipment, serveware, linens, etc. or must we rent them elsewhere?",
  //     answer:
  //       "No, we do not provide equipment, and or serve ware. But we will provide you with certain logistics",
  //   },
  //   {
  //     id: 2,
  //     question: "Does your company provide” and set” dinnerware?",
  //     answer: "No we do not.",
  //   },
  //   {
  //     id: 3,
  //     question: "How long do you need to set up and break down?",
  //     answer:
  //       "A day before the event for the setup and then the day after the event packing.",
  //   },
  //   {
  //     id: 4,
  //     question: "When will you need access to the venue?",
  //     answer: "A day to the event",
  //   },
  //   {
  //     id: 5,
  //     question:
  //       "Does this location allow adequate access to electricity, water, and refrigeration space?",
  //     answer: "Yes it does.",
  //   },
  //   {
  //     id: 6,
  //     question: "What delivery logistics must we consider?",
  //     answer:
  //       "Canopy, Tables, Chairs, Multi Sockets, Cleaning supplies, Skin and Hair protective gear",
  //   },
  //   {
  //     id: 7,
  //     question: "Can you provide sample menus?",
  //     answer: "Yes",
  //   },
  //   {
  //     id: 8,
  //     question: "Do you have a cuisine speciality?",
  //     answer: "No, but cuisines should be festival-friendly",
  //   },
  //   {
  //     id: 9,
  //     question: "Do you allow custom menus, or do you offer a pre-set menu?",
  //     answer: "Yes we do allow custom menus.",
  //   },
  //   {
  //     id: 10,
  //     question: "Do you allow substitutions or customization to your set menu?",
  //     answer: "Yes, we do.",
  //   },
  //   {
  //     id: 11,
  //     question: "Are there additional fees for custom menus?",
  //     answer: "Yes",
  //   },
  // ];
  return (
    // <section
    //   id="faq"
    //   className=" px-5 pt-14 pb-10 bg-gradient-to-tr from-[#212121]  to-[#2a2a2a] sm:px-20 sm:pt-20 sm:pb-16 selection:bg-zaama_red/50"
    // >
    <div className="w-full mb-16 md:bg-[#4c4c4c]/20 md:px-20 md:py-14 md:rounded-2xl md:inline-block  md:mx-auto  md:w-auto">
      <p
        data-aos="fade-down"
        className={`${blatantBold.className} text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellow uppercase md:text-2xl md:mb-10`}
      >
        Frequently Asked Questions
      </p>
      <div data-aos="fade-up">
        {faqData.map((item) => (
          <div key={item.id} className="mb-5 w-full ">
            <label className="w-full">
              <input
                type="radio"
                name="faq"
                checked={item.id === selectedItem}
                onChange={() => handleItemClick(item.id)}
                className="peer sr-only"
              />{" "}
              <p className="py-3  w-full flex justify-between items-center  font-medium  border-b border-white cursor-pointer hover:bg-zaamatext-zaama_red/20 peer-checked:text-zaama_red peer-checked:border-b-zaama_red peer-checked:font-semibold  ">
                <span>{item.question}</span>
              </p>
              <p className=" font-light  max-h-0 transition-all duration-200 overflow-hidden peer-checked:max-h-40 peer-checked:py-5  ">
                {item.answer}
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
    // </section>
  );
};

export default FAQ;
