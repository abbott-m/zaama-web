import FAQ from "@/app/components/FAQ";
import { volunteerFAQ } from "@/app/lib/faqData";
import React from "react";

const VolunteerFAQ = () => {
  return (
    <section className="pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8">
      <FAQ faqData={volunteerFAQ} headerText="Frequently Asked Questions" />
    </section>
  );
};

export default VolunteerFAQ;
