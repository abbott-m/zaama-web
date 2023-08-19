import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#E91C24] flex flex-col gap-10 px-4 py-14 sm:px-28 sm:py-20 md:flex-row"
    >
      <div className="text-center">
        <Image
          src="/z_web_3d.png"
          alt="about-zaama"
          width={300}
          height={300}
          className="inline-block md:w-96SSS"
        />
      </div>
      <div className="text-white">
        <p className="text-xl font-bold mb-3">About Us</p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae
          aut delectus sapiente natus alias accusantium tempore, velit dolorum
          ipsa debitis, repellendus, maiores laboriosam non pariatur! Quibusdam
          vel recusandae dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad,
          corporis exercitationem officiis quibusdam ab corrupti enim, doloribus
          alias, nesciunt quidem necessitatibus totam aliquam esse? Possimus rem
          deleniti ullam vitae.
        </p>
      </div>
    </section>
  );
};

export default About;
