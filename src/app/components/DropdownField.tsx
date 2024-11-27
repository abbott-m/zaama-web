"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import DropdownFilled from "../../../public/SVG/dropdown-filled.svg";

interface IDropdownFieldTypes {
  options: IOptions[];
  placeholder: string;
  selectedOption: string;
  onSelect: (option: Omit<IOptions, "id">) => void;
}

const DropdownField = ({
  options,
  selectedOption,
  placeholder,
  onSelect,
}: IDropdownFieldTypes) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const dropdownRef = useRef<HTMLUListElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handleOptionClick = (option: Omit<IOptions, "id">) => {
    onSelect(option);
    setIsDropdownOpen(false);
  };

  // close dropdown on clicking outside it
  const closeDropdown = useCallback(
    (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    },
    [isDropdownOpen]
  );
  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
  }, [closeDropdown]);

  return (
    <div ref={dropdownRef} className="relative w-full h-12">
      <div
        tabIndex={0}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`relative z-0 w-full h-full bg-[#3a3a3a] flex rounded-md justify-between items-center py-3 px-4  cursor-pointer transition duration-150 text-sm  
        hover:bg-[#464646] ${
          isDropdownOpen && "outline outline-1 outline-primary"
        }`}
      >
        <span className="select-none">
          {selectedOption
            ? options.find((item) => item.value === selectedOption)?.name
            : placeholder}
        </span>
        <DropdownFilled
          className={`fill-black transition duration-150 ${
            isDropdownOpen && "rotate-180 "
          }`}
        />
      </div>
      <ul
        // ref={dropdownRef}
        className={`dropdown  w-full h-40 overflow-y-scroll bg-[#2b2b2b] rounded-md absolute top-14 left-0 z-10 shadow-md shadow-black/30 p-3  ${
          isDropdownOpen ? "block" : "hidden"
        } `}
      >
        <li
          onClick={() =>
            handleOptionClick({
              name: placeholder,
              value: "",
            })
          }
          className={`py-3 px-4 rounded-lg mb-1 text-sm hover:cursor-pointer hover:bg-[#363636]`}
        >
          {placeholder}
        </li>
        {options.map((item) => (
          <li
            key={item.id}
            onClick={() => handleOptionClick(item)}
            className={`py-3 px-4 rounded-lg mb-1 text-sm hover:cursor-pointer   ${
              item.value === selectedOption
                ? "bg-[#454545]"
                : "hover:bg-[#363636]"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownField;
