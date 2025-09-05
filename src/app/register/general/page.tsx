// src/app/register/general/page.tsx
"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import InputField from "../../components/InputField";
import TextAreaField from "../../components/TextAreaField";
import PrimaryButton from "../../components/PrimaryButton";
import ButtonLoader from "../../../../public/SVG/loader.svg";
import ToastNotification from "../../components/ToastNotification";

const logikBold = localFont({
  src: "../../Logik-font//Logik-Bold.otf",
});

const GeneralInquiry = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone_number: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    let formData = new FormData();
    Object.entries(formFields).forEach(([key, value]) => {
      formData.append(key, key === "phone_number" ? value.replace(/\s/g, "") : value);
    });

    fetch(
      "https://script.google.com/macros/s/AKfycbw5LSIpaO9hPWOGfTAUefbb50mOg428qehQjgYRmT5fEY5AnsV_GEh5aSSD8KowqYbCfg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        setIsLoading(false);
        setFormFields({
          name: "",
          email: "",
          phone_number: "",
          company: "",
          subject: "",
          message: "",
        });
        setResponse({
          type: "success",
          text: data,
        });
        setTimeout(() => {
          setResponse({ type: "", text: "" });
        }, 5000);
      })
      .catch((error) => {
        setIsLoading(false);
        setResponse({
          type: "fail",
          text: "An error occurred. Please try again.",
        });
        setTimeout(() => {
          setResponse({ type: "", text: "" });
        }, 5000);
      });
  };

  return (
    <section className="pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8">
      {response.text && (
        <ToastNotification
          type={response.type === "success" ? "success" : "error"}
          text={response.text}
        />
      )}
      
      <div className="w-full mb-16 md:bg-[#4c4c4c]/20 md:px-16 md:py-14 md:rounded-2xl md:inline-block md:mx-auto md:w-auto">
        <h1
          className={`${logikBold.className} text-xl text-primary uppercase tracking-wide font-medium mb-5 text-center md:text-2xl`}
        >
          General Inquiry
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Have questions about Zaama Disco? We're here to help!
        </p>

        <form onSubmit={handleSubmit} className="w-full pt-5 md:mx-auto md:block md:w-auto">
          <div className="flex flex-col justify-center gap-7 mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10">
            <label className="w-full md:w-[350px]">
              <p className="mb-3 font-medium text-gray-300">Full Name *</p>
              <InputField
                name="name"
                type="text"
                value={formFields.name}
                onChange={handleInputChange}
                placeholder="Your full name"
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="mb-3 font-medium text-gray-300">Email *</p>
              <InputField
                name="email"
                type="email"
                value={formFields.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
              />
            </label>
          </div>

          <div className="flex flex-col justify-center gap-7 mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10">
            <label className="w-full md:w-[350px]">
              <p className="mb-3 font-medium text-gray-300">Phone Number *</p>
              <InputField
                name="phone_number"
                type="tel"
                value={formFields.phone_number}
                onChange={handleInputChange}
                placeholder="+233 XX XXX XXXX"
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="mb-3 font-medium text-gray-300">Company/Organization</p>
              <InputField
                name="company"
                type="text"
                value={formFields.company}
                onChange={handleInputChange}
                placeholder="Optional"
              />
            </label>
          </div>

          <div className="mb-7">
            <label className="w-full">
              <p className="mb-3 font-medium text-gray-300">Subject *</p>
              <InputField
                name="subject"
                type="text"
                value={formFields.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
              />
            </label>
          </div>

          <div className="mb-7">
            <label className="w-full">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-gray-300">Message *</p>
                <span className="text-gray-400 text-sm">
                  {500 - formFields.message.length} characters left
                </span>
              </div>
              <TextAreaField
                name="message"
                value={formFields.message}
                maxLength={500}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
              />
            </label>
          </div>

          <div className="w-64 mx-auto my-10 h-11">
            <PrimaryButton
              type="submit"
              disabled={
                !formFields.name ||
                !formFields.email ||
                !formFields.phone_number ||
                !formFields.subject ||
                !formFields.message ||
                isLoading
              }
            >
              {isLoading ? (
                <ButtonLoader className="mx-auto animate-spin" />
              ) : (
                "Send Inquiry"
              )}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GeneralInquiry;