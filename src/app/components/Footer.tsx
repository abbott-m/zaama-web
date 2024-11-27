"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useCallback } from "react";
import localFont from "next/font/local";
import handleScroll from "../lib/handleScroll";
import ZaamaLogo from "../../../public/SVG/zaama-logo.svg";
import Facebook from "../../../public/SVG/facebook-logo.svg";
import Snapchat from "../../../public/SVG/snapchat-logo.svg";
import Twitter from "../../../public/SVG/twitter-logo.svg";
import Instagram from "../../../public/SVG/instagram-logo.svg";
import Youtube from "../../../public/SVG/youtube-logo.svg";
import Tiktok from "../../../public/SVG/tiktok-logo.svg";
import PrimaryButton from "./PrimaryButton";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const Footer = () => {
  const [isSubscriptionLoading, setIsSubscriptionLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);

  const socialLinks: socialLinks = [
    {
      id: 1,
      icon: (
        <Twitter className="w-4 h-4 shadow-md stroke-gray-200 hover:fill-gray-300" />
      ),
      path: "https://x.com/zaamadisco?s=11&t=2z9CU3pe6dNz1Gfd4639Dg",
    },
    {
      id: 2,
      icon: (
        <Instagram className="w-4 h-4 shadow-md stroke-2 stroke-gray-100 hover:stroke-gray-300" />
      ),
      path: "https://instagram.com/zaamadisco?igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      icon: (
        <Facebook className="w-4 h-4 shadow-md fill-gray-200 hover:fill-gray-300" />
      ),
      path: "https://www.facebook.com/blacksherifmusic?mibextid=LQQJ4d",
    },
    {
      id: 4,
      icon: (
        <Tiktok className="w-4 h-4 shadow-md fill-gray-200 hover:fill-gray-300" />
      ),
      path: "https://www.tiktok.com/@zaamadisco?_t=8gpyYgQzFmo&_r=1",
    },
    {
      id: 5,
      icon: (
        <Snapchat className="w-5 h-5 shadow-md fill-gray-200 hover:fill-gray-300" />
      ),
      path: "https://www.snapchat.com/add/zaamadisco?share_id=1hefNEEWN3o&locale=en-GB",
    },
    {
      id: 6,
      icon: (
        <Youtube className="w-5 h-5 shadow-md fill-gray-200 hover:fill-gray-300" />
      ),
      path: "https://youtube.com/@ZaamaDisco?si=bruBWtV5GdWjRclI",
    },
  ];
  const quickLinks: quickLinks = [
    {
      id: 1,
      name: "Vendors",
      path: "/vendors",
    },
    {
      id: 2,
      name: "Volunteers",
      path: "/volunteers",
    },
    {
      id: 3,
      name: "Policy",
      path: "/policy",
    },
  ];
  const validateEmail = useCallback((email: string) => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }, []);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = e.target.value;
      setEmailAddress(newEmail);
      setIsValidEmail(validateEmail(newEmail));
    },
    [validateEmail]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubscriptionLoading(true);
    let formData = new FormData();

    formData.append("email_address", emailAddress);
    fetch(
      "https://script.google.com/macros/s/AKfycbw6Zj-CQwRJW_ZR1fdJrQj4zRAEbYavMWsj3f6ErrgZIXmD_2Vnxy5gDB-hZIAXAEU29w/exec",
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
    <footer className="bg-[#0e0e0e]   px-4 py-10  sm:px-28 sm:py-16">
      <div className="flex flex-col items-center justify-center gap-16 sm:flex-row sm:items-start sm:flex-wrap md:gap-24 lg:gap-28">
        <div className="text-center ">
          <Link href="/" className="inline-block py-2 mb-6 ">
            <ZaamaLogo className="w-32" />
          </Link>
          <div>
            {isSubscriptionLoading ? (
              <div className="flex items-center justify-center w-64 h-32 ">
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
                  className="mx-auto mb-2 w-14 h-14"
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
                    name="email"
                    required
                    value={emailAddress}
                    onChange={handleEmailChange}
                    placeholder="Email address"
                    className=" w-64 h-10 text-sm outline-none bg-[#272727] rounded-md px-4 mb-3 "
                  />
                  <div className="w-64 h-10">
                    <PrimaryButton type="submit" disabled={!isValidEmail}>
                      Subscribe
                    </PrimaryButton>
                  </div>
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
            {quickLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => router.push(item.path)}
                className="mb-3 text-gray-400 cursor-pointer hover:text-[#d3d3d3] p-[2px]"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center ">
          <p
            className={`${blatant.className} font-medium text-lg uppercase mb-4 tracking-wide whitespace-nowrap`}
          >
            Connect
          </p>
          <ul className="flex gap-3 items-center justify-center flex-wrap max-w-[180px] ">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  target="_blank"
                  rel="noopener"
                  className="bg-[#3a3a3a] w-10 h-10  rounded-full shadow-sm shadow-white/30 inline-flex justify-center items-center transition duration-150 hover:bg-[#2e2e2e]"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center max-w-[180px]">
          <p
            className={`${blatant.className} font-medium text-lg uppercase mb-4 tracking-wide whitespace-nowrap`}
          >
            Support
          </p>
          <div className="text-gray-400">
            <p className="mb-3 text-sm ">
              For more enquiry or information: <br />
              <span className="inline-block mt-1 text-gray-300">
                info@zaamadisco.com{" "}
              </span>
              <br />
              <span className="inline-block mt-1 text-gray-300">
                +233 55 283 1168
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-center mt-14">
        {" "}
        Created with <span className="mx-1 text-primary">&#10084;</span> by{" "}
        <Link
          href="https://blacheinc.com/"
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2"
        >
          Blache
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
