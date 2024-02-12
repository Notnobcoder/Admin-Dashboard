import Image from "next/image";
import React from "react";

type propsTypeD = {
  id: number;
  placeholder: string;
  icon?: string;
  iconWidth?: number;
};

export default function Input({ item }: { item: propsTypeD }) {
  const { icon, placeholder, iconWidth } = item;
  return (
    <div className="relative">
      <input
        className="outline-none border border-[#E8E6EA] rounded-2xl bg-white px-5 py-3 w-full"
        type="text"
        placeholder={placeholder}
      />
      {icon && (
        <Image
          className="absolute top-1/2 -translate-y-1/2 right-5"
          src={icon}
          alt=""
          width={iconWidth}
          height={iconWidth}
        />
      )}
    </div>
  );
}
