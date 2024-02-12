// @ts-nocheck
import React from "react";

type buttonProp = {
  placeholder: string;
  // @ts-ignore
  icon?: any;
  alt?: string;
  type?: string;
  onChange?: (e: any) => void;
  value?: string;
  name: string;
  onClick?: () => void;
};

export const Inputs: React.FC<buttonProp> = ({
  placeholder,
  icon,
  type,
  onChange,
  value,
  name,
  onClick,
}) => {
  return (
    <React.Fragment>
      <div className="flex bg-white items-center border border-[#D9D9D9] w-full rounded-[0.5rem] justify-between p-2 hover:border-[#f603cf]">
        <input
          name={name}
          required
          className="bg-white border-none outline-none w-full"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
        <span
          className={`text-[#ABABAB] text-lg ${
            name === "password" && "cursor-pointer"
          }`}
          onClick={onClick}
        >
          {icon}
        </span>
      </div>
    </React.Fragment>
  );
};
