import React from "react";
import localFont from "next/font/local";

type PrimaryButtonTypes = {
  disabled?: boolean;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});
const PrimaryButton = ({
  disabled,
  children,
  type,
  handleClick,
}: PrimaryButtonTypes) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${blatantBold.className} tracking-wide w-full h-full block  bg-zaama_redf  rounded-md transition duration-150 select-none enabled:hover:bg-[#b21717]f enabled:bg-secondary disabled:bg-[#413939]f disabled:bg-[#373e48]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
