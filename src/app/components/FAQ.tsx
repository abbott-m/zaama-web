"use client";
import React, { useState } from "react";
import localFont from "next/font/local";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});
type FAQProps = {
  faqData: faq;
  headerText: string;
};
const FAQ = ({ faqData, headerText }: FAQProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (item: number) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className="w-full mb-16  md:px-20 md:py-14 md:rounded-2xl md:inline-block  md:mx-auto  md:w-auto">
      <p
        data-aos="fade-down"
        className={`${blatantBold.className} text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellow uppercase md:text-2xl md:mb-10`}
      >
        {headerText}
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
