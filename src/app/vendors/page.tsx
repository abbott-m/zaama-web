"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import CustomCheckbox from "../components/form/CustomCheckbox";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "next/navigation";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Vendors = () => {
  const router = useRouter();
  const [isTermChecked, setIsTermChecked] = useState(false);
  return (
    <section className="px-5 py-16 md:px-16 ">
      <h2
        className={`${blatantBold.className} text-xl text-zaama_yellowf text-primary uppercase tracking-wide font-medium mb-7 text-center md:text-2xl `}
      >
        ZAAMA DISCO VENDOR
      </h2>
      <p className="policy-paragraph">
        <span className="font-semibold"> ZAAMA DISCO</span> is committed to a
        quality event with an interesting assortment of vendors. Please read and
        understand these policies and procedures. As a vendor, you are expected
        to comply with all the vendor terms and conditions listed. Failure to
        comply with these policies and procedures will result in termination on
        the spot.
      </p>
      <p className="font-semibold policy-paragraph">
        VENDOR APPLICATION DEADLINE – Thursday 12th December, 2024
      </p>
      <div>
        <p className="policy-subheading">Beverages</p>
        <p className="policy-paragraph ">
          ZaamaDisco maintains the exclusive right to all beverage sales and
          distribution at the Zaama Disco Unless previously authorized, no
          vendor or sponsor may sell or provide samples of alcohol, carbonated
          soft drinks, bottled water, iced tea or bottled fruit juices. This
          policy will be strictly enforced and will result in termination.
        </p>
      </div>
      <div>
        <p className="policy-subheading">Booth</p>
        <ul>
          <li className="policy-paragraph policy-list">
            ⁃ 10 x 10ft vendor booth area will be provided to each vendor
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ All vendors are provided with their assigned vendor space applied
            for. No large racks or tables are permitted outside your booth
            space. If you need more room for your display and storage, you must
            purchase a second booth.{" "}
          </li>
        </ul>
      </div>

      <div>
        <p className="policy-subheading">Selection process</p>
        <ul>
          <li className="policy-paragraph policy-list">
            ⁃ Zaama Disco sponsors will have top priority in placement in all
            spaces, including food booths and corner locations.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ Zaama Disco reserves the right to limit the number of vendors
            selling similar items or services.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ In cases of duplication, approved vendors who fully paid for their
            vendor space by registration deadline will get priority.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ No applications will be accepted after Thursday 12th
            December, 2024.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ Vendors will be notified of booth assignments on Thursday 12th
            December, 2024 via email, calls or text.
          </li>
        </ul>
        <p className="policy-paragraph">
          Registration and space assignments will be honored strictly based on
          space availability at the time your application and payment received.
          Space assignments will be made based on the type of exhibit, sold or
          marketed. No refunds, no cancellations, transfers, and credits will be
          issued.
        </p>
      </div>
      <div>
        <p className="policy-subheading"> Merchandise And Product</p>
        <ul>
          <li className="policy-paragraph policy-list">
            ⁃ Vendors may only sell what Zaama Disco has approved in advance
            during the registration process. Offensive materials (ie: Ethnically
            or racially offensive) may not be sold or displayed at the Zaama
            Disco. Failure to comply with this policy will result in termination
            from the Zaama Disco team.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ All merchandise / product and signage must be contained within, or
            attached to your booth.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ A vendor’s merchandise / product shall be reviewed and evaluated
            according to the goals and guidelines of Zaama Disco management; and
            Zaama Disco Management shall also evaluate the quality of the items,
            uniqueness, and appropriateness of the items for Zaama Disco. It is
            within the discretion of the Zaama Disco management to deny
            applications based upon these criteria.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ A vendor may not receive merchandise / product, directly or
            indirectly, from any current or former vendor who has been suspended
            and/or had his/her selling rights terminated.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ Food vendors are to provide licensed food permits on the day of
            set up.
          </li>
        </ul>
      </div>
      <div>
        <p className="policy-subheading"> Signage</p>
        <ul>
          <li className="policy-paragraph policy-list">
            ⁃ Only professional quality signs may be posted on the space
            allocated; no hand-written signs permitted.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ Electricity: Electricity will be provided to vendor booths, with
            an electrical socket and light bulb.
          </li>
          <li className="policy-paragraph policy-list">
            ⁃ Site access/Set up: Vendors will be pre-assigned site access and
            set-up times. All vehicles must be off event site by 10:30 a.m. on
            event days.
          </li>
        </ul>
      </div>
      <div>
        <p className="policy-subheading">Clean up</p>
        <p className="policy-paragraph ">
          Vendors are responsible for cleanup of their space and removal of
          trash during and after the event at Upfest City.
        </p>
        <p className="policy-paragraph ">
          Overnight Security: Zaama Disco contracts limited overnight security.
          However, Zaama Disco management will not be held responsible for lost,
          stolen or damaged merchandise. Vendors who choose to leave items
          overnight do so at their own risk.
        </p>
        <p className="policy-paragraph ">
          Pets: No pets are allowed on the premises, including inside vendor
          booths.
        </p>
        <p className="policy-paragraph ">
          Music: If your booth involves music or sound, it must not reach beyond
          20 feet of your booth. You must be pre-approved for sound.
        </p>
      </div>
      <div>
        <p className="policy-subheading">Zaama Disco Logo</p>
        <p className="policy-paragraph ">
          Do not use the official Zaama Disco logo or artwork, or incorporate
          the name Zaama Disco into your product line. The name and logo are
          protected by trademark and copyright laws and may only be used by
          special licensing agreements.
        </p>
        <p className="policy-paragraph ">
          *ALL VENDORS MUST SUBMIT COPIES OF THEIR BUSINESS REGISTRATION; TAX ID
          NUMBER AND FDA PERMITS TO ZAAMA DISCO TEAM AT LEAST TWO WEEKS PRIOR TO
          YOUR VENDING DATE. NO APPLICATION WILL BE PROCESSED UNLESS ALL OF THE
          FOLLOWING ITEMS ARE INCLUDED IN THE REGISTRATION PACKAGE:
        </p>
        <ul>
          <li className="policy-paragraph policy-list">(1) Application Form</li>
          <li className="policy-paragraph policy-list">
            (2) Agreement (signed and dated)
          </li>
          <li className="policy-paragraph policy-list">(3) Payment</li>
        </ul>
      </div>
      <p
        onClick={() => router.push("/vendors/faq")}
        className="text-sm w-full underline underline-offset-2 mt-4 text-gray-400 cursor-pointer md:inline-block md:w-[650px]"
      >
        Read frequently asked questions
      </p>
      <div className="flex w-full gap-3 text-gray-300 cursor-pointer md:items-center my-7">
        <CustomCheckbox
          name="Terms"
          handleInputChange={() => setIsTermChecked(!isTermChecked)}
          checked={isTermChecked}
        />
        <span
          onClick={() => setIsTermChecked(!isTermChecked)}
          className="text-sm w-full md:inline-block md:w-[650px]"
        >
          By proceeding, I affirm and agree that I have read and understood the
          Zaama Disco Vendor Terms and Condition and agree to abide by them
        </span>
      </div>
      <div className="w-64 mx-auto h-11 ">
        <PrimaryButton
          type="button"
          disabled={!isTermChecked}
          handleClick={() => router.push("/vendors/form")}
        >
          Become a vendor
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Vendors;
