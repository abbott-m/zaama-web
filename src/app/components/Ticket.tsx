import React from "react";
import SingleTicket from "./SingleTicket";

const Ticket = () => {
  return (
    <section className="bg-[#000000] flex flex-col gap-5 px-5 py-20 justify-center items-center md:flex-row sm:px-10 md:px-20">
      <SingleTicket />
      <SingleTicket />
      <SingleTicket />
    </section>
  );
};

export default Ticket;
