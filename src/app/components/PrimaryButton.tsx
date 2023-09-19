import React from "react";
import localFont from "next/font/local";

type PrimaryButtonTypes = {
  disabled?: boolean;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
};

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});
const PrimaryButton = ({ disabled, children, type }: PrimaryButtonTypes) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${blatantBold.className} tracking-wide w-full h-full block  bg-zaama_red rounded-md transition duration-100 enabled:hover:bg-[#b21717] disabled:bg-[#413939]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
