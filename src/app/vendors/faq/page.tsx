import FAQ from "@/app/components/FAQ";
import { vendorFAQ } from "@/app/lib/faqData";
import React from "react";

const VendorFAQ = () => {
  return (
    <section className="pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8 selection:bg-zaama_red/50">
      <FAQ faqData={vendorFAQ} headerText="Frequently Asked Questions" />
    </section>
  );
};

export default VendorFAQ;
