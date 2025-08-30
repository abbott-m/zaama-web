// src/app/register/sponsorship/page.tsx
"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import InputField from "../../components/InputField";
import TextAreaField from "../../components/TextAreaField";
import DropdownField from "../../components/DropdownField";
import PrimaryButton from "../../components/PrimaryButton";
import ButtonLoader from "../../../../public/SVG/loader.svg";
import ToastNotification from "../../components/ToastNotification";

const blatantBold = localFont({
  src: "../../blatant-font/OTF/Blatant-Bold.otf",
});

const SponsorshipInquiry = () => {
  const [formFields, setFormFields] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone_number: "",
    website: "",
    industry: "",
    sponsorship_level: "",
    budget_range: "",
    objectives: "",
    previous_sponsorships: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });

  const sponsorshipLevels = [
    { id: 1, name: "Title Sponsor", value: "Title Sponsor" },
    { id: 2, name: "Presenting Sponsor", value: "Presenting Sponsor" },
    { id: 3, name: "Gold Sponsor", value: "Gold Sponsor" },
    { id: 4, name: "Silver Sponsor", value: "Silver Sponsor" },
    { id: 5, name: "Bronze Sponsor", value: "Bronze Sponsor" },
    { id: 6, name: "Media Partner", value: "Media Partner" },
    { id: 7, name: "Custom Package", value: "Custom Package" },
  ];

  const budgetRanges = [
    { id: 1, name: "Under $5,000", value: "Under $5,000" },
    { id: 2, name: "$5,000 - $15,000", value: "$5,000 - $15,000" },
    { id: 3, name: "$15,000 - $30,000", value: "$15,000 - $30,000" },
    { id: 4, name: "$30,000 - $50,000", value: "$30,000 - $50,000" },
    { id: 5, name: "$50,000+", value: "$50,000+" },
    { id: 6, name: "Prefer not to disclose", value: "Prefer not to disclose" },
  ];

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

    // Using same endpoint as general inquiry - you may want to create a separate one
    fetch(
      "https://script.google.com/macros/s/AKfycbyo9UhprKh_h3JVeCKqiIR12YsYXDDVGIU250WO03jecHqY5ez1CP-nyDo1xGrcJOHmZQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        setIsLoading(false);
        setFormFields({
          company_name: "",
          contact_name: "",
          email: "",
          phone_number: "",
          website: "",
          industry: "",
          sponsorship_level: "",
          budget_range: "",
          objectives: "",
          previous_sponsorships: "",
          message: "",
        });
        setResponse({
          type: "success",
          text: "Thank you for your sponsorship inquiry! Our team will contact you within 24 hours.",
        });
        setTimeout(() => {
          setResponse({ type: "", text: "" });
        }, 7000);
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
          className={`${blatantBold.className} text-xl text-primary uppercase tracking-wide font-medium mb-5 text-center md:text-2xl`}
        >
          Become a Sponsor
        </h1>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with Zaama Disco to reach thousands of engaged festival-goers and support Ghana's biggest cultural celebration. 
          Let's create something amazing together!
        </p>

        <form onSubmit={handleSubmit} className="w-full pt-5 md:mx-auto md:block md:w-auto">
          {/* Company Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Company Information</h3>
            <div className="flex flex-col justify-center gap-7 mb-7 md:flex-row md:gap-6 lg:gap-10">
              <label className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Company Name *</p>
                <InputField
                  name="company_name"
                  type="text"
                  value={formFields.company_name}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                />
              </label>
              <label className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Contact Person *</p>
                <InputField
                  name="contact_name"
                  type="text"
                  value={formFields.contact_name}
                  onChange={handleInputChange}
                  placeholder="Primary contact name"
                />
              </label>
            </div>

            <div className="flex flex-col justify-center gap-7 mb-7 md:flex-row md:gap-6 lg:gap-10">
              <label className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Email *</p>
                <InputField
                  name="email"
                  type="email"
                  value={formFields.email}
                  onChange={handleInputChange}
                  placeholder="contact@company.com"
                />
              </label>
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
            </div>

            <div className="flex flex-col justify-center gap-7 mb-7 md:flex-row md:gap-6 lg:gap-10">
              <label className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Website</p>
                <InputField
                  name="website"
                  type="text"
                  value={formFields.website}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                />
              </label>
              <label className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Industry</p>
                <InputField
                  name="industry"
                  type="text"
                  value={formFields.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Technology, Fashion, Food"
                />
              </label>
            </div>
          </div>

          {/* Sponsorship Details */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Sponsorship Details</h3>
            <div className="flex flex-col justify-center gap-7 mb-7 md:flex-row md:gap-6 lg:gap-10">
              <div className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Preferred Sponsorship Level</p>
                <DropdownField
                  placeholder="Select sponsorship level"
                  options={sponsorshipLevels}
                  selectedOption={formFields.sponsorship_level}
                  onSelect={(option) =>
                    setFormFields((prev) => ({
                      ...prev,
                      sponsorship_level: option.value,
                    }))
                  }
                />
              </div>
              <div className="w-full md:w-[350px]">
                <p className="mb-3 font-medium text-gray-300">Budget Range</p>
                <DropdownField
                  placeholder="Select budget range"
                  options={budgetRanges}
                  selectedOption={formFields.budget_range}
                  onSelect={(option) =>
                    setFormFields((prev) => ({
                      ...prev,
                      budget_range: option.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-7">
            <label className="w-full">
              <p className="mb-3 font-medium text-gray-300">Marketing Objectives</p>
              <TextAreaField
                name="objectives"
                value={formFields.objectives}
                maxLength={300}
                onChange={handleInputChange}
                placeholder="What are you hoping to achieve through this sponsorship?"
              />
              <div className="text-right text-gray-400 text-sm mt-1">
                {300 - formFields.objectives.length} characters left
              </div>
            </label>
          </div>

          <div className="mb-7">
            <label className="w-full">
              <p className="mb-3 font-medium text-gray-300">Previous Event Sponsorships</p>
              <TextAreaField
                name="previous_sponsorships"
                value={formFields.previous_sponsorships}
                maxLength={300}
                onChange={handleInputChange}
                placeholder="Tell us about any similar events you've sponsored (optional)"
              />
              <div className="text-right text-gray-400 text-sm mt-1">
                {300 - formFields.previous_sponsorships.length} characters left
              </div>
            </label>
          </div>

          <div className="mb-7">
            <label className="w-full">
              <p className="mb-3 font-medium text-gray-300">Additional Message</p>
              <TextAreaField
                name="message"
                value={formFields.message}
                maxLength={500}
                onChange={handleInputChange}
                placeholder="Any additional information or specific requests..."
              />
              <div className="text-right text-gray-400 text-sm mt-1">
                {500 - formFields.message.length} characters left
              </div>
            </label>
          </div>

          <div className="w-64 mx-auto my-10 h-11">
            <PrimaryButton
              type="submit"
              disabled={
                !formFields.company_name ||
                !formFields.contact_name ||
                !formFields.email ||
                !formFields.phone_number ||
                isLoading
              }
            >
              {isLoading ? (
                <ButtonLoader className="mx-auto animate-spin" />
              ) : (
                "Submit Sponsorship Inquiry"
              )}
            </PrimaryButton>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Our sponsorship team will review your application and respond within 24 hours.</p>
          <p className="mt-2">For urgent inquiries, call us at +233 24 447 5597</p>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipInquiry;