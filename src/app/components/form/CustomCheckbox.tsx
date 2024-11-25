import React from "react";

type CustomCheckboxProps = {
  name: string;
  checked: boolean;
  handleInputChange: any;
};
const CustomCheckbox = ({
  name,
  checked,
  handleInputChange,
}: CustomCheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleInputChange}
        className="peer sr-only "
      />
      {/* displays when checkbox is unchecked */}

      {/* <span className="w-4 h-4 inline-block  cursor-pointer bg-transparent ring-1 ring-primary peer-checked:hidden "></span> */}

      {/* displays when checkbox is checked */}
      <span className="w-4 h-4 inline-block cursor-pointer bg-transparent transition duration-150 relative text-transparent border border-gray-300 rounded-sm  peer-checked:bg-gray-300 peer-checked:text-[#333333]">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="9"
          height="9"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.25838 7.24627L1.42259 5.26362C1.09715 4.91215 0.569513 4.91215 0.244077 5.26362C-0.081359 5.61509 -0.081359 6.18494 0.244077 6.53641L2.74406 9.23638C3.09734 9.61792 3.67992 9.5803 3.98858 9.15603L9.8219 1.95607C10.1062 1.56523 10.0434 0.999442 9.68148 0.692351C9.31959 0.38526 8.79571 0.453155 8.51137 0.843998L3.25838 7.24627Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </label>
  );
};

export default CustomCheckbox;
