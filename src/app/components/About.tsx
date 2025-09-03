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
          About Zaama Disco
        </p>
        <div data-aos="fade-up">
          <p className="mb-4 leading-7">
            Zaama Disco isn't just an event—it's a movement. A fusion of music, fashion, art, and raw energy, Zaama Disco is where Ghana's youth and culture and the world come alive to celebrate creativity and culture. It's the heartbeat of the Blacko Tribe, a community built on freedom, unity, and unapologetic self-expression.
          </p>
          <p className="mb-4 leading-7">
            This year, we're leveling up with a mind-blowing production—an immersive world of lights, sound, and visuals backed by the hottest performers across West Africa and beyond. Expect bold fashion, electrifying music, and art that tells the story of our generation.
          </p>
          <div className="mb-4">
            <p className="mb-3 leading-7 font-semibold">
              Zaama Disco is more than a Concert. It's:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                <span className="leading-7">A stage for the bold and the fearless</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                <span className="leading-7">A platform to connect with people who move like you, dream like you, and live like you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                <span className="leading-7">A once-in-a-lifetime experience that brings together thousands under one rhythm</span>
              </li>
            </ul>
          </div>
          <p className="leading-7">
            Whether you're on the dance floor, catching the vibes virtually, or repping the Blacko Tribe lifestyle, Zaama Disco is your place to belong.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;