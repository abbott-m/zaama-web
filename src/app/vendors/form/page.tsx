"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import ButtonLoader from "../../../../public/SVG/loader.svg";
import DropdownField from "../../components/DropdownField";
import {
  vendorRegistration,
  vendorCategory,
  vendorBoothSize,
} from "@/app/lib/formData";
import ToastNotification from "../../components/ToastNotification";
import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { useRouter } from "next/navigation";

const blatantRegular = localFont({
  src: "../../blatant-font/OTF/Blatant.otf",
});
const blatantBold = localFont({
  src: "../../blatant-font/OTF/Blatant-Bold.otf",
});
const VendorForm = () => {
  const router = useRouter();
  const [vendorFields, setVendorFields] = useState({
    primary_first_name: "",
    primary_last_name: "",
    primary_phone_number: "",
    primary_email: "",
    primary_country: "",
    secondary_first_name: "",
    secondary_last_name: "",
    secondary_phone_number: "",
    secondary_email: "",
    secondary_country: "",
    company_name: "",
    is_company_registered: "",
    country_of_registration: "",
    tax_id: "",
    category: "",
    other_category: "",
    booth_size: "",
  });
  const [isTermChecked, setIsTermChecked] = useState(false);

  const [isVendorFormLoading, setIsVendorFormLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setVendorFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsVendorFormLoading(true);
    let formData = new FormData();

    formData.append("primary_email", vendorFields.primary_email);
    formData.append("primary_first_name", vendorFields.primary_first_name);
    formData.append("primary_last_name", vendorFields.primary_last_name);
    formData.append("primary_country", vendorFields.primary_country);
    formData.append(
      "primary_phone_number",
      vendorFields.primary_phone_number.replace(/\s/g, "")
    );
    formData.append("secondary_email", vendorFields.secondary_email);
    formData.append("secondary_first_name", vendorFields.secondary_first_name);
    formData.append("secondary_last_name", vendorFields.secondary_last_name);
    formData.append("secondary_country", vendorFields.secondary_country);
    formData.append(
      "secondary_phone_number",
      vendorFields.secondary_phone_number.replace(/\s/g, "")
    );
    formData.append(
      "is_company_registered",
      vendorFields.is_company_registered
    );
    formData.append(
      "country_of_registration",
      vendorFields.country_of_registration
    );
    formData.append("company_name", vendorFields.company_name);
    formData.append("tax_id", vendorFields.tax_id);
    formData.append("category", vendorFields.category);
    formData.append("other_category", vendorFields.other_category);
    formData.append("booth_size", vendorFields.booth_size);
    formData.append("terms_accepted", isTermChecked ? "yes" : "no");

    fetch(
      "https://script.google.com/macros/s/AKfycbweg39cc_xO7baeDfhfmdYLpkVumWR4kL0hWS08eleR9XeZaOaAoYFUgwp-7vnhdVVpGA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        // set button loading state to false
        setIsVendorFormLoading(false);

        // reset input fields to default
        setVendorFields({
          primary_first_name: "",
          primary_last_name: "",
          primary_phone_number: "",
          primary_email: "",
          primary_country: "",
          secondary_first_name: "",
          secondary_last_name: "",
          secondary_phone_number: "",
          secondary_email: "",
          secondary_country: "",
          company_name: "",
          is_company_registered: "",
          country_of_registration: "",
          tax_id: "",
          category: "",
          other_category: "",
          booth_size: "",
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
        setIsVendorFormLoading(false);
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
      <div className="w-full mb-16 md:bg-[#4c4c4c]/20 md:px-16 md:py-14 md:rounded-2xl md:inline-block  md:mx-auto  md:w-auto">
        <h1
          data-aos="fade-down"
          className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-5 text-center md:text-2xl `}
        >
          Vendor Application Form
        </h1>
        <p className="text-xs text-gray-200 leading-relaxed md:w-[650px]">
          Please ensure you have reviewed our{" "}
          <span
            onClick={() => router.push("/vendors")}
            className="underline underline-offset-2 cursor-pointer hover:text-gray-300"
          >
            policy
          </span>{" "}
          before proceeding with the vendor application. Your compliance with
          our guidelines is appreciated.
        </p>
        <form
          onSubmit={handleSubmit}
          className="  w-full pt-5 md:mx-auto md:block md:w-auto"
        >
          <p
            className={`${blatantRegular.className} text-gray-200 text-lg mb-7 text-center`}
          >
            Primary Contact Details
          </p>
          <div className="flex flex-col gap-7 justify-center mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3"> First Name</p>
              <InputField
                name="primary_first_name"
                type="text"
                value={vendorFields.primary_first_name}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3">Last Name</p>
              <InputField
                name="primary_last_name"
                type="text"
                value={vendorFields.primary_last_name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Country
              </p>
              <InputField
                name="primary_country"
                type="text"
                value={vendorFields.primary_country}
                onChange={handleInputChange}
              />
            </label>{" "}
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Phone Number{" "}
              </p>
              <InputField
                name="primary_phone_number"
                type="tel"
                value={vendorFields.primary_phone_number}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex justify-between items-center mb-7 lg:mb-8">
            <label className="w-full ">
              <p className="text-gray-300 font-medium mb-3">Email</p>
              <InputField
                name="primary_email"
                type="email"
                value={vendorFields.primary_email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <p
            className={`${blatantRegular.className} text-gray-200 text-lg mb-7 text-center`}
          >
            Secondary Contact Details
          </p>
          <div className="flex flex-col gap-7 justify-center mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3"> First Name</p>
              <InputField
                name="secondary_first_name"
                type="text"
                value={vendorFields.secondary_first_name}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3">Last Name</p>
              <InputField
                name="secondary_last_name"
                type="text"
                value={vendorFields.secondary_last_name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Country
              </p>
              <InputField
                name="secondary_country"
                type="text"
                value={vendorFields.secondary_country}
                onChange={handleInputChange}
              />
            </label>{" "}
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Phone Number{" "}
              </p>
              <InputField
                name="secondary_phone_number"
                type="tel"
                value={vendorFields.secondary_phone_number}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex justify-between items-center mb-7 lg:mb-8">
            <label className="w-full ">
              <p className="text-gray-300 font-medium mb-3">Email</p>
              <InputField
                name="secondary_email"
                type="email"
                value={vendorFields.secondary_email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <p
            className={`${blatantRegular.className} text-gray-200 text-lg mb-7 text-center`}
          >
            Other Details
          </p>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Company Name
              </p>
              <InputField
                name="company_name"
                type="text"
                value={vendorFields.company_name}
                onChange={handleInputChange}
              />
            </label>
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Is the company registered?
              </p>
              <DropdownField
                placeholder="Select One"
                options={vendorRegistration}
                selectedOption={vendorFields.is_company_registered}
                onSelect={(option) =>
                  setVendorFields((prev) => ({
                    ...prev,
                    is_company_registered: option.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <div className="w-full md:w-[350px]">
              <label className="w-full ">
                <p className="text-gray-300 font-medium mb-3">
                  If yes, what country?
                </p>
                <InputField
                  name="country_of_registration"
                  type="text"
                  value={vendorFields.country_of_registration}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="w-full md:w-[350px]">
              <label className="w-full ">
                <p className="text-gray-300 font-medium mb-3"> Tax ID Number</p>
                <InputField
                  name="tax_id"
                  type="text"
                  value={vendorFields.tax_id}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Vendor Category
              </p>
              <DropdownField
                placeholder="Select One"
                options={vendorCategory}
                selectedOption={vendorFields.category}
                onSelect={(option) =>
                  setVendorFields((prev) => ({
                    ...prev,
                    category: option.value,
                  }))
                }
              />
            </div>
            <div className="w-full md:w-[350px]">
              <label className="w-full ">
                <p className="text-gray-300 font-medium mb-3">
                  {" "}
                  Other category?
                </p>
                <InputField
                  name="other_category"
                  type="text"
                  value={vendorFields.other_category}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className=" mb-7 ">
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Booth Size
              </p>
              <DropdownField
                placeholder="Select One"
                options={vendorBoothSize}
                selectedOption={vendorFields.booth_size}
                onSelect={(option) =>
                  setVendorFields((prev) => ({
                    ...prev,
                    booth_size: option.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="w-full flex gap-3 md:items-center text-gray-300 ">
            <CustomCheckbox
              name="Terms"
              handleInputChange={() => setIsTermChecked(!isTermChecked)}
              checked={isTermChecked}
            />
            <span
              onClick={() => setIsTermChecked(!isTermChecked)}
              className="text-sm w-full md:inline-block md:w-[650px]"
            >
              By submitting this document, I affirm and agree that I have read
              and understood the Zaama Vendor Terms and Condition and agree to
              abide by them
            </span>
          </div>
          {/* {JSON.stringify(isTermChecked)} */}
          <div className="h-11 w-64 mx-auto mt-16">
            <PrimaryButton
              type="submit"
              disabled={
                !isTermChecked ||
                !vendorFields.primary_country ||
                !vendorFields.primary_email ||
                !vendorFields.primary_first_name ||
                !vendorFields.primary_last_name ||
                !vendorFields.primary_phone_number ||
                !vendorFields.secondary_country ||
                !vendorFields.secondary_email ||
                !vendorFields.secondary_first_name ||
                !vendorFields.secondary_last_name ||
                !vendorFields.secondary_phone_number ||
                !vendorFields.company_name ||
                !vendorFields.is_company_registered ||
                !vendorFields.category ||
                !vendorFields.booth_size ||
                (vendorFields.is_company_registered.toLowerCase() === "yes" &&
                  (!vendorFields.tax_id ||
                    !vendorFields.country_of_registration))
              }
            >
              {isVendorFormLoading ? (
                <ButtonLoader className="animate-spin mx-auto  " />
              ) : (
                "Apply"
              )}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VendorForm;
