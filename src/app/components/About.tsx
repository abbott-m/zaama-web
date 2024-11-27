import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});
const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center px-5 py-10 tracking-wider bg-opacity-50 bg-center bg-no-repeat bg-cover bg-about-zaama-cover gap-14 sm:px-10 sm:py-24 lg:flex-row md:px-20 lg:px-28"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div
        data-aos="fade-right"
        className="relative w-full h-56 sm:w-3/4 sm:h-64 md:h-72 lg:h-80 lg:w-1/2 "
      >
        <Image
          src="/images/about-zaama.png"
          alt="about-zaama"
          fill
          objectFit="contain"
          className="mx-auto animate-bounce-slow filter grayscale"
        />
      </div>

      <div className="relative text-justify lg:w-3/4">
        <p
          data-aos="fade-down"
          className={`${blatantBold.className} text-xl text-zaama_yellowf text-primary uppercase tracking-wide font-medium mb-5 text-center md:text-2xl `}
        >
          About Zaama
        </p>
        <div data-aos="fade-up">
          <p className="mb-3 leading-7 ">
            Zaama Disco is an art of LIFE for the youth of Ghana and beyond the
            world. A combination of ARTS, FASHION, AND MUSIC from different
            backgrounds forming the army of Blacko Tribe. Zaama Disco is also
            intended to inculcate a spirit of adventure, co-operation, creation
            of excellence in the domain of art and culture and feelings of
            fraternity, patriotism, unity and brotherhood.
          </p>
          <p className="mb-3 leading-7 ">
            We are putting together a fantastic production and visual experience
            planned along with a power packed line up of professionals and best
            artists across west Africa and the world. We will stream it in all
            virtual platforms with an aim to entertain, network with their
            people, uplift their spirit in the comfort of their homes and
            encourage the social distancing rules.
          </p>
          <p className="leading-7 ">
            Our aim is simply to bring together different people of different
            culture under one platform to celebrate their unique lifestyles
            whiles engaging amongst each other.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
