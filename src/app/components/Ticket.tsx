import React from "react";
import SingleTicket from "./SingleTicket";

const Ticket = () => {
  const ticketData = [
    {
      color: "red",
      packageName: "standard",
      price: "20",
      perks: ["VIP Access", "Party Bands", "Cocktail Arena"],
    },
    {
      color: "green",
      packageName: "VIP",
      price: "50",
      perks: ["VIP Access", "Party Bands", "Cocktail Arena"],
    },
    {
      color: "yellow",
      packageName: "VVIP",
      price: "80",
      perks: ["VIP Access", "Party Bands", "Cocktail Arena"],
    },
  ];

  return (
    <section id="tickets" className="  px-5 py-20 sm:px-10 sm:py-24 md:px-20 ">
      <p className="text-center text-xl font-medium mb-4 text-zaama_yellow uppercase tracking-wider  md:text-2xl ">
        Choose your package
      </p>
      <p className="text-center mb-14">
        We have uniquely crafted ticket packages for everyone
      </p>
      <div className=" flex flex-col gap-10 justify-center items-center md:flex-row ">
        {ticketData.map((item, index) => (
          <SingleTicket
            key={index}
            color={item.color}
            packageName={item.packageName}
            price={item.price}
            perks={item.perks}
          />
        ))}
      </div>
    </section>
  );
};

export default Ticket;
