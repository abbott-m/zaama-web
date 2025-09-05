import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const logik = localFont({
  src: "../Logik-font//Logik.otf",
});

const Store = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <section
      id="store"
      className="bg-gradient-to-br from-[#09192e] via-[#1f2122] to-[#020a15] px-5 py-20 sm:px-10 sm:py-20 md:py-4 md:px-20 md:flex md:items-center md:justify-center md:gap-10 lg:px-24"
    >
      <div className="md:w-5/12">
        <div className="mb-10 md:text-left">
          <p
            data-aos="fade-down"
            className={`${logikBold.className} text-center text-xl font-medium mb-5 text-zaama_yellowf text-primary uppercase tracking-wider md:text-2xl md:text-left`}
          >
            Zaama Disco App
          </p>

          <p
            data-aos="fade-right"
            className="leading-7 text-center sm:mx-auto md:text-left md:mx-0 mb-6"
          >
            The official Zaama Disco app is coming soon! Get ready for an enhanced concert experience with:
          </p>

          {/* App Features */}
          <div data-aos="fade-up" className="mb-8">
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Live concert schedule and artist lineup</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Interactive venue map and navigation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Cashless payment system integration</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Exclusive Blacko Tribe member content</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Social sharing and concert memories</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Real-time notifications and updates</span>
              </li>
            </ul>
          </div>

          <p
            data-aos="fade-right"
            className="leading-7 text-center sm:mx-auto md:text-left md:mx-0 text-sm text-gray-400 mb-6"
          >
            Subscribe to our{" "}
            <span
              onClick={scrollToBottom}
              className="underline underline-offset-2 cursor-pointer transition duration-150 hover:text-[#b0b0b0] text-primary"
            >
              newsletter
            </span>{" "}
            to be the first to know when the app launches!
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center gap-5 text-gray-800 select-none sm:flex-row md:justify-start"
        >
          <button
            onClick={scrollToBottom}
            className="inline-flex items-center w-48 px-5 py-2 bg-gray-100 rounded-lg outline-none hover:bg-gray-200 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 512 512"
            >
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="mb-1 text-xs font-semibold whitespace-nowrap">
                COMING TO
              </span>
              <span className="font-semibold whitespace-nowrap">
                Google Play
              </span>
            </span>
          </button>

          <button
            onClick={scrollToBottom}
            className="inline-flex items-center w-48 px-5 py-2 font-semibold bg-gray-100 rounded-lg outline-none hover:bg-gray-200 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 305 305"
            >
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="mb-1 text-xs font-semibold text-gray-700 whitespace-nowrap">
                COMING TO
              </span>
              <span className="font-semibold whitespace-nowrap">
                App Store
              </span>
            </span>
          </button>
        </div>

        {/* Early Access Signup */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-8 text-center md:text-left">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className={`${logik.className} text-lg font-semibold text-primary mb-3`}>
              🚀 Get Early Access
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Be among the first 1,000 users to download the app and unlock exclusive features!
            </p>
            <button
              onClick={() => window.open('mailto:info@zaamadisco.com?subject=Early Access - Zaama Disco App', '_blank')}
              className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
            >
              Join Early Access List
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="hidden select-none animate-little_bounce md:w-5/12 md:block"
      >
        <div className="relative">
          <Image
            src="/images/zaama-mobile.png"
            alt="zaama-mobile-app"
            width={250}
            height={200}
            className="mx-auto"
          />
          {/* App Features Floating Cards */}
          <div className="absolute -top-4 -left-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg p-3 animate-pulse">
            <p className="text-xs text-primary font-semibold">📱 Live Updates</p>
          </div>
          <div className="absolute top-1/2 -right-12 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg p-3 animate-pulse">
            <p className="text-xs text-secondary font-semibold">💳 Cashless Pay</p>
          </div>
          <div className="absolute -bottom-8 left-8 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 animate-pulse">
            <p className="text-xs text-green-400 font-semibold">🗺️ Venue Map</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;