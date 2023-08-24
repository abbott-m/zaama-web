import React from "react";

const SingleTicket = ({}) => {
  return (
    <div className="w-80 h-[520px] relative bg-ticket-1 bg-contain bg-no-repeat text-zaama_yellow pt-14 px-3 ">
      <ul className="text-center mb-4">
        <li className="mb-1">VIP Access</li>
        <li className="mb-1"> Party Bands</li>
        <li className="mb-1">Cocktail Arena</li>
      </ul>
      <p className="text-center font-extrabold text-3xl mb-3">$70</p>
      <p className="uppercase font-semibold text-xl text-center">VIP</p>
    </div>
  );
};

export default SingleTicket;
