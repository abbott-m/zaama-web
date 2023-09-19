"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});
const Media = () => {
  const [mediaFields, setMediaFields] = useState({
    media_name: "",
    phone_number: "",
    email: "",
    number_of_team: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMediaFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    // <section className="relative pt-16 pb-20 px-5  bg-zaama-code bg-cover bg-center bg-no-repeat md: selection:bg-zaama_red/50">
    //   <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
    <section className="relative pt-16 pb-20 px-5 bg-[#1a1a1a]   selection:bg-zaama_red/50">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div> */}
      <div className="relative ">
        <h1
          data-aos="fade-down"
          className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-5 text-center md:text-2xl `}
        >
          Register your media
        </h1>
        <form className="w-full pt-5 md:mx-auto md:block md:w-auto">
          <div className="flex flex-col gap-5 justify-center mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-8">
            <label className="w-full md:w-[350px]">
              <p className="text-white font-medium mb-3">Media Name</p>
              <InputField
                name="media_name"
                type="text"
                value={mediaFields.media_name}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="text-white font-medium mb-3">Email</p>
              <InputField
                name="email"
                type="email"
                value={mediaFields.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-5 justify-center md:flex-row md:gap-6 lg:gap-8">
            <label className="w-full md:w-[350px]">
              <p className="text-white font-medium mb-3 capitalize">
                Phone Number{" "}
              </p>
              <InputField
                name="phone_number"
                type="tel"
                value={mediaFields.phone_number}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="text-white font-medium mb-3 capitalize">
                Number of team
              </p>
              <InputField
                name="number_of_team"
                type="number"
                value={mediaFields.number_of_team}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="h-10 w-64 mx-auto my-10">
            <PrimaryButton
              type="submit"
              disabled={
                !mediaFields.email ||
                !mediaFields.media_name ||
                !mediaFields.number_of_team ||
                !mediaFields.phone_number
              }
            >
              Register
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Media;
