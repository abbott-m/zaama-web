import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-wrap items-center justify-center my-5 gap-8  px-4 py-10  sm:px-28 sm:py-24"
    >
      <Image src="/Blache_logo.png" alt="Blach-logo" width={140} height={140} />
      <Image src="/Blache_logo.png" alt="Blach-logo" width={140} height={140} />
      <Image src="/Blache_logo.png" alt="Blach-logo" width={140} height={140} />
      <Image src="/Blache_logo.png" alt="Blach-logo" width={140} height={140} />
      <Image src="/Blache_logo.png" alt="Blach-logo" width={140} height={140} />
      <Image src="/Blache_logo.png" alt="Blach-logo" width={140} height={140} />
    </section>
  );
};

export default Sponsors;
