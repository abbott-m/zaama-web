import React from "react";
import localFont from "next/font/local";

type PrimaryButtonTypes = {
  disabled?: boolean;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const logikBold = localFont({
  src: "../Logik-font//Logik.otf",
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
      className={`${logikBold.className} tracking-wide w-full h-full block  bg-zaama_redf  rounded-md transition duration-150 select-none enabled:hover:bg-[#b21717]f enabled:bg-secondary disabled:bg-[#413939]f disabled:bg-[#373e48]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
