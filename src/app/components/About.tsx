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
      className="bg-[#232323] flex flex-col items-center gap-14 px-5 py-10 tracking-wider sm:px-10  sm:py-24 lg:flex-row  md:px-20 lg:px-28 selection:bg-zaama_red/50"
    >
      <div className="  relative w-full h-80  lg:w-1/2">
        <Image
          src="/images/zaama-tape.png"
          alt="about-zaama"
          fill
          objectFit="contain"
          className=" animate-bounce-slow "
        />
      </div>
      <div className=" text-justify  lg:w-3/4">
        <p
          className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-5 text-center md:text-2xl `}
        >
          About Zaama
        </p>
        <p className="mb-3 leading-7  ">
          Zaama Disco is an art of LIFE for the youth of Ghana and beyond the
          world. A combination of ARTS, FASHION, AND MUSIC from different
          backgrounds forming the army of Blacko Tribe. Zaama Disco is also
          intended to inculcate a spirit of adventure, co-operation, creation of
          excellence in the domain of art and culture and feelings of
          fraternity, patriotism, unity and brotherhood.
        </p>
        <p className=" mb-3 leading-7  ">
          We are putting together a fantastic production and visual experience
          planned along with a power packed line up of professionals and best
          artists across west Africa and the world. We will stream it in all
          virtual platforms with an aim to entertain, network with their people,
          uplift their spirit in the comfort of their homes and encourage the
          social distancing rules.
        </p>
        <p className="leading-7  ">
          Our aim is simply to bring together different people of different
          culture under one platform to celebrate their unique lifestyles whiles
          engaging amongst each other.
        </p>
      </div>
    </section>
  );
};

export default About;
