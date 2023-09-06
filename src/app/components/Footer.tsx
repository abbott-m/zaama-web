"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import localFont from "next/font/local";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const Footer = () => {
  const [isSubscriptionLoading, setIsSubscriptionLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubscriptionLoading(true);
    let formData = new FormData();

    formData.append("email_address", emailAddress);
    fetch(
      "https://script.google.com/macros/s/AKfycbxM34PZhfjtBJTjkRXEnStrNrU766ZF7wWfi-nBCUKNwNGNLjwba0JPKXdMPFatsART3A/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        // set button loading state to false
        setIsSubscriptionLoading(false);

        // reset input fields to default
        setEmailAddress("");

        setResponse({
          type: "success",
          text: data,
        });
        setTimeout(() => {
          setResponse({
            type: "",
            text: "",
          });
        }, 4000);
      })
      .catch((error) => {
        // set button loading state to false
        setIsSubscriptionLoading(false);
        setResponse({
          type: "fail",
          text: "An error occurred",
        });
        setTimeout(() => {
          setResponse({
            type: "",
            text: "",
          });
        }, 5000);
      });
  };

  return (
    <footer className="bg-[#161616]  flex flex-col  justify-center items-center px-4 py-10 gap-16   sm:flex-row  sm:items-start sm:px-28 sm:py-16 md:gap-24 lg:gap-28 selection:bg-zaama_red/50">
      <div className="text-center ">
        <Link href="/" className="mb-6 inline-block py-2 ">
          <Image
            src="/SVG/zaama-logo.svg"
            alt="zaama-logo"
            width={120}
            height={120}
          />
        </Link>
        <div>
          {/* <p
            onClick={() => setIsSubscriptionLoading(!isSubscriptionLoading)}
            className="text-white"
          >
            isloading
          </p> */}
          {isSubscriptionLoading ? (
            <div className="w-64 h-32 flex justify-center items-center ">
              <Image
                src="/images/zaama-white-logo.png"
                alt="zaama-logo"
                width={30}
                height={30}
                className="opacity-10 animate-pulse "
              />
            </div>
          ) : response.type === "success" ? (
            <div className="w-64 h-32 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 mx-auto mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-lg">Subscribed!</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <p
                className={`${blatant.className} font-medium  uppercase mb-4  tracking-wide whitespace-nowrap text-center `}
              >
                Join our newsletter
              </p>
              <div>
                <input
                  type="email"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="Email address"
                  className=" w-64 h-10 text-sm outline-none bg-[#272727] rounded-md px-4 mb-3 "
                />
                <button
                  type="submit"
                  disabled={!emailAddress}
                  className="h-10 w-64 block  bg-zaama_red rounded-md transition duration-100 enabled:hover:bg-[#b21717] disabled:bg-zaama_red/80"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="text-center ">
        <p
          className={`${blatant.className} font-medium text-lg uppercase mb-4 tracking-wide whitespace-nowrap`}
        >
          Quick Links
        </p>
        <ul>
          {" "}
          <li
            onClick={() => router.push("/#about")}
            className="mb-3 text-gray-400 cursor-pointer hover:text-[#d3d3d3] p-[2px]"
          >
            {" "}
            About Zaama
          </li>{" "}
          <li
            onClick={() => router.push("/#tickets")}
            className="mb-3 text-gray-400 cursor-pointer hover:text-[#d3d3d3] p-[2px]"
          >
            Tickets
          </li>
          <li
            onClick={() => router.push("/#store")}
            className="mb-3 text-gray-400 cursor-pointer hover:text-[#d3d3d3] p-[2px]"
          >
            Store
          </li>{" "}
        </ul>
      </div>
      <div className="text-center ">
        <p
          className={`${blatant.className} font-medium text-lg uppercase mb-4 tracking-wide whitespace-nowrap`}
        >
          Connect
        </p>
        <ul>
          <li className="mb-3 text-gray-400  ">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Instagram
            </Link>
          </li>
          <li className="mb-3 text-gray-400 ">
            {" "}
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Twitter
            </Link>
          </li>
          <li className="mb-3 text-gray-400 ">
            {" "}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
