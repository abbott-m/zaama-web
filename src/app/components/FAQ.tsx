"use client";
import React, { useRef } from "react";

const FAQ = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const faq: faq = [
    {
      id: 1,
      question: "HOW TO BECOME A VENDOR ",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam!",
    },
    {
      id: 2,
      question: "HOW TO BECOME A VENDOR",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam!",
    },
    {
      id: 3,
      question: "HOW TO BECOME A VENDOR",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam!",
    },
  ];
  console.log("current", checkboxRef.current?.checked);
  return (
    <section className=" px-5 pt-14 sm:px-28 sm:pt-20 ">
      <p className="text-center text-xl font-medium mb-8 text-zaama_yellow uppercase md:text-2xl">
        Frequently Asked Questions
      </p>
      {faq.map((item) => (
        <div key={item.id} className="mb-5 w-full mx-auto sm:w-5/6 lg:w-3/4">
          <label className="w-full">
            <input
              type="radio"
              name="faq"
              //   id={item.id.toString()}
              ref={checkboxRef}
              className="peer sr-only"
            />{" "}
            <p className="py-3 px-4 w-full flex justify-between items-center text-white font-medium rounded-md border border-white cursor-pointer hover:bg-zaamatext-zaama_red/20 peer-checked:text-zaama_red peer-checked:border-zaama_red peer-checked:bg-zaama_red/20  ">
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
            <p className="hidden font-light text-white py-5 px-6  peer-checked:block">
              {item.answer}
            </p>
          </label>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
