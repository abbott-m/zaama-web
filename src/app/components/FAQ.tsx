"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});
type FAQProps = {
  faqData: faq;
  headerText: string;
};
const FAQ = ({ faqData, headerText }: FAQProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (item: number) => {
    console.log("item", item);
    if (item === selectedItem) {
      setSelectedItem(null);
      return;
    }

    setSelectedItem(item);
  };

  return (
    <div className="w-full mb-16 md:px-20 md:py-14 md:rounded-2xl md:inline-block md:mx-auto md:w-auto">
      <p
        data-aos="fade-down"
        className={`${logikBold.className} text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellowf text-primary uppercase md:text-2xl md:mb-10`}
      >
        {headerText}
      </p>
      <div data-aos="fade-up">
        {faqData.map((item) => (
          <div key={item.id} className="w-full mb-5 ">
            <label className="w-full">
              <input
                type="checkbox"
                name="faq"
                checked={item.id === selectedItem}
                onChange={() => handleItemClick(item.id)}
                className="sr-only peer"
              />{" "}
              <p className="flex items-center justify-between w-full py-3 font-medium border-b border-white cursor-pointer hover:bg-zaamatext-zaama_red/20 peer-checked:text-zaama_redf peer-checked:text-primary peer-checked:border-b-zaama_redf peer-checked:border-b-primary peer-checked:font-semibold ">
                <span>{item.question}</span>
              </p>
              <p
                onClick={(e) => e.preventDefault()}
                className="overflow-hidden font-light transition-all duration-200 max-h-0 peer-checked:max-h-40 peer-checked:py-5"
              >
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
