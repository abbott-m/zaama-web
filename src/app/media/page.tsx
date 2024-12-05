"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import ButtonLoader from "../../../public/SVG/loader.svg";
import ToastNotification from "../components/ToastNotification";

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
  const [isMediaFormLoading, setIsMediaFormLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMediaFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsMediaFormLoading(true);
    let formData = new FormData();

    formData.append("email", mediaFields.email);
    formData.append("media_name", mediaFields.media_name);
    formData.append("number_of_team", mediaFields.number_of_team);
    formData.append(
      "phone_number",
      mediaFields.phone_number.replace(/\s/g, "")
    );
    fetch(
      "https://script.google.com/macros/s/AKfycbxyss-ZNbZcvUdgDNgS86k3fCJhcqx3zOjpTpOIeb2mD3GAqSrgaX5mkpskky98lGQIjw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        // set button loading state to false
        setIsMediaFormLoading(false);

        // reset input fields to default
        setMediaFields({
          media_name: "",
          phone_number: "",
          email: "",
          number_of_team: "",
        });

        setResponse({
          type: "success",
          text: data,
        });
        setTimeout(() => {
          setResponse({
            type: "",
            text: "",
          });
        }, 10000);
      })
      .catch((error) => {
        // set button loading state to false
        setIsMediaFormLoading(false);
        setResponse({
          type: "fail",
          text: "An error occurred. Try again",
        });
        setTimeout(() => {
          setResponse({
            type: "",
            text: "",
          });
        }, 10000);
      });
  };

  return (
    <section className="pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8">
      {response.text &&
        (response.type === "success" ? (
          <ToastNotification type="success" text={response.text} />
        ) : (
          <ToastNotification type="error" text={response.text} />
        ))}
      <div className=" w-full mb-16 md:bg-[#4c4c4c]/20 md:px-16 md:py-14 md:rounded-2xl md:inline-block  md:mx- md:w-auto ">
        <h1
          data-aos="fade-down"
          className={`${blatantBold.className} text-xl text-zaama_yellowf text-primary uppercase tracking-wide font-medium mb-5 text-center md:text-2xl `}
        >
          Register your media
        </h1>

        <form
          onSubmit={handleSubmit}
          className="block w-full pt-5 md:mx-auto md:block md:w-auto"
        >
          <div className="flex flex-col justify-center gap-7 mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px] ">
              <p className="mb-3 font-medium text-gray-300">Media Name</p>
              <InputField
                name="media_name"
                type="text"
                value={mediaFields.media_name}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="mb-3 font-medium text-gray-300">Email</p>
              <InputField
                name="email"
                type="email"
                value={mediaFields.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex flex-col justify-center gap-7 mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="mb-3 font-medium text-gray-300 capitalize">
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
              <p className="mb-3 font-medium text-gray-300 capitalize">
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
          <div className="w-64 mx-auto my-10 h-11">
            <PrimaryButton
              type="submit"
              disabled={Object.values(mediaFields).some((value) => !value)}
            >
              {isMediaFormLoading ? (
                <ButtonLoader className="mx-auto animate-spin " />
              ) : (
                "Register"
              )}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Media;
