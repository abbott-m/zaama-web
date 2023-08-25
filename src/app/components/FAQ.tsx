"use client";
import React, { useRef } from "react";

const FAQ = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const faq: faq = [
    {
      id: 1,
      question: "HOW TO BECOME A VENDOR ",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam!",
    },
    {
      id: 2,
      question: "HOW TO BECOME A VENDOR",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam!",
    },
    {
      id: 3,
      question: "HOW TO BECOME A VENDOR",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam!",
    },
  ];
  return (
    <section
      id="faq"
      className=" px-5 pt-14 pb-10 bg-gradient-to-tr from-[#212121]  to-[#2a2a2a] sm:px-20 sm:pt-20 sm:pb-16 selection:bg-zaama_red/50"
    >
      <p className="text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellow uppercase md:text-2xl md:mb-10">
        Frequently Asked Questions
      </p>
      {faq.map((item) => (
        <div key={item.id} className="mb-5 w-full mx-auto sm:w-5/6 lg:w-3/5">
          <label className="w-full">
            <input
              type="radio"
              name="faq"
              //   id={item.id.toString()}
              ref={checkboxRef}
              className="peer sr-only"
            />{" "}
            <p className="py-3  w-full flex justify-between items-center  font-medium  border-b border-white cursor-pointer hover:bg-zaamatext-zaama_red/20 peer-checked:text-zaama_red peer-checked:border-b-zaama_red   ">
              <span>{item.question}</span>
              {/* {checkboxRef.current} */}
              {/* {checkboxRef.current?.checked ? (
                <span className="hidden text-2xl peer-checked:inline-block">
                  +
                </span>
              ) : (
                <span className="inline-block text-2xl peer-checked:hidden">
                  -
                </span>
              )} */}
            </p>
            <p className=" font-light   max-h-0 transition-all duration-200 overflow-hidden peer-checked:max-h-40 peer-checked:py-5  ">
              {item.answer}
            </p>
          </label>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
