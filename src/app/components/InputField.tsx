"use client";
import React from "react";
type InputFieldType = {
  placeholder?: string;
  type: "text" | "email" | "password" | "tel" | "number";
  name: string;
  value?: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputField = ({
  placeholder,
  value,
  type,
  name,
  onChange,
}: InputFieldType) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="rounded-md text-primary w-full h-12 py-3 px-[14px] bg-[#3a3a3a] text-sm border-none outline-none focus:outline-1 focus:outline-[#bc6161] placeholder:text-primary/80 md:placeholder:text-sm"
    />
  );
};

export default InputField;
