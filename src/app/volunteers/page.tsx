"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import ButtonLoader from "../../../public/SVG/loader.svg";
import DropdownField from "../components/DropdownField";
import {
  volunteerCategory,
  volunteerAge,
  volunteerEducation,
  volunteerGenre,
  volunteerHealth,
  volunteerPayment,
  volunteerExperience,
} from "@/app/lib/formData";
import TextAreaField from "../components/TextAreaField";
import ToastNotification from "../components/ToastNotification";
import { useRouter } from "next/navigation";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});
const Volunteers = () => {
  const [volunteerFields, setVolunteerFields] = useState({
    name: "",
    phone_number: "",
    email: "",
    category: "",
    educational_level: "",
    age: "",
    interest: "",
    favourite_genre: "",
    volunteer_payment_mode: "",
    health_status: "",
    past_experience: "",
    expectation: "",
    social_handle: "",
  });
  const [isMediaFormLoading, setIsMediaFormLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    text: "",
  });
  const router = useRouter();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setVolunteerFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsMediaFormLoading(true);
    let formData = new FormData();

    formData.append("email", volunteerFields.email);
    formData.append("name", volunteerFields.name);
    formData.append(
      "phone_number",
      volunteerFields.phone_number.replace(/\s/g, "")
    );
    formData.append("category", volunteerFields.category);
    formData.append("educational_level", volunteerFields.educational_level);
    formData.append("age", volunteerFields.age);
    formData.append("interest", volunteerFields.interest);
    formData.append("favourite_genre", volunteerFields.favourite_genre);
    formData.append(
      "volunteer_payment_mode",
      volunteerFields.volunteer_payment_mode
    );
    formData.append("health_status", volunteerFields.health_status);
    formData.append("past_experience", volunteerFields.past_experience);
    formData.append("expectation", volunteerFields.expectation);
    formData.append("social_handle", volunteerFields.social_handle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxN0nSk7Okb9U0uVK3y5InqcbBFPgY2ShbJho4OtgR3ovMkWYHn3QijZl47pSclFesHmw/exec",
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
        setVolunteerFields({
          name: "",
          phone_number: "",
          email: "",
          category: "",
          educational_level: "",
          age: "",
          interest: "",
          favourite_genre: "",
          volunteer_payment_mode: "",
          health_status: "",
          past_experience: "",
          expectation: "",
          social_handle: "",
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
        }, 5000);
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
        }, 5000);
      });
  };

  return (
    <section className="pt-20 pb-4 px-5 bg-[#161616] flex justify-center items-center md:px-8 md:pb-8 selection:bg-zaama_red/50">
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
          Become a volunteer
        </h1>
        <p
          onClick={() => router.push("/volunteers/faq")}
          className="text-sm w-full underline underline-offset-2 mt-4 text-gray-400 cursor-pointer md:inline-block md:w-[650px]"
        >
          Read frequently asked questions
        </p>

        <form
          onSubmit={handleSubmit}
          className="  w-full pt-5 md:mx-auto md:block md:w-auto"
        >
          <div className="flex flex-col gap-7 justify-center mb-7 md:mb-8 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3"> Name</p>
              <InputField
                name="name"
                type="text"
                value={volunteerFields.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3">Email</p>
              <InputField
                name="email"
                type="email"
                value={volunteerFields.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Phone Number{" "}
              </p>
              <InputField
                name="phone_number"
                type="tel"
                value={volunteerFields.phone_number}
                onChange={handleInputChange}
              />
            </label>
            <label className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize">
                Social Media Handle
              </p>
              <InputField
                name="social_handle"
                type="text"
                value={volunteerFields.social_handle}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Category
              </p>
              <DropdownField
                placeholder="Select Category"
                options={volunteerCategory}
                selectedOption={volunteerFields.category}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    category: option.value,
                  }))
                }
              />
            </div>
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Age
              </p>
              <DropdownField
                placeholder="Select Age"
                options={volunteerAge}
                selectedOption={volunteerFields.age}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    age: option.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Educational Level
              </p>
              <DropdownField
                placeholder="Select level"
                options={volunteerEducation}
                selectedOption={volunteerFields.educational_level}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    educational_level: option.value,
                  }))
                }
              />
            </div>
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                Do you want to be paid or learn?
              </p>
              <DropdownField
                placeholder="Select one "
                options={volunteerPayment}
                selectedOption={volunteerFields.volunteer_payment_mode}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    volunteer_payment_mode: option.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-7 justify-center mb-7 md:flex-row md:gap-6 lg:gap-10 lg:mb-8">
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                What's your health status
              </p>
              <DropdownField
                placeholder="Select health status "
                options={volunteerHealth}
                selectedOption={volunteerFields.health_status}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    health_status: option.value,
                  }))
                }
              />
            </div>
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                What's your past experience on event?
              </p>
              <DropdownField
                placeholder="Select genre"
                options={volunteerExperience}
                selectedOption={volunteerFields.past_experience}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    past_experience: option.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-7 ">
            <div className="w-full md:w-[350px]">
              <p className="text-gray-300 font-medium mb-3 capitalize select-none">
                What's your favorite genre of music
              </p>
              <DropdownField
                placeholder="Select genre"
                options={volunteerGenre}
                selectedOption={volunteerFields.favourite_genre}
                onSelect={(option) =>
                  setVolunteerFields((prev) => ({
                    ...prev,
                    favourite_genre: option.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex justify-between items-center">
              {" "}
              <p className="text-gray-300  font-medium mb-3 capitalize select-none">
                What are your interest?
              </p>
              <span className="text-gray-400">
                {300 - volunteerFields.interest.length}
              </span>
            </div>

            <TextAreaField
              name="interest"
              value={volunteerFields.interest}
              maxLength={300}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              {" "}
              <p className="text-gray-300  font-medium mb-3 capitalize select-none">
                What's your Expectation for Zaama Disco ?
              </p>
              <span className="text-gray-400">
                {300 - volunteerFields.expectation.length}
              </span>
            </div>

            <TextAreaField
              name="expectation"
              value={volunteerFields.expectation}
              maxLength={300}
              onChange={handleInputChange}
            />
          </div>
          <div className="h-11 w-64 mx-auto mt-16">
            <PrimaryButton
              type="submit"
              disabled={Object.values(volunteerFields).some((value) => !value)}
            >
              {isMediaFormLoading ? (
                <ButtonLoader className="animate-spin mx-auto  " />
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

export default Volunteers;
