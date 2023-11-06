"use client";
import React from "react";
type TextArea = {
  placeholder?: string;
  name: string;
  value?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaField = ({
  placeholder,
  value,
  name,
  maxLength,
  onChange,
}: TextArea) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      className="rounded-[10px] bg-[#3a3a3a]  w-full h-28 resize-none py-3 px-[14px] text-sm border-none outline-none  focus:outline-1 focus:outline-[#bc6161] "
    ></textarea>
  );
};

export default TextAreaField;
