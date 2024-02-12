"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ORDER_STYLE_DATA = [
  {
    id: 1,
    heading: "Shirt Collar",
    paragraph: "cutaway Collar",
    imageLinks: "/OrderStyle/Style/Shirt.svg",
  },
  {
    id: 2,
    heading: "Fit Preffrence",
    paragraph: "Slim Fit",
    imageLinks: "/OrderStyle/Style/FitPreffrence.svg",
  },
  {
    id: 2,
    heading: "Cuff Styles",
    paragraph: "1 Button",
    imageLinks: "/OrderStyle/Style/Cuff.svg",
  },
  {
    id: 2,
    heading: "Back Styles",
    paragraph: "Plain Back",
    imageLinks: "/OrderStyle/Style/Back.svg",
  },
  {
    id: 2,
    heading: "Placket Styles",
    paragraph: "Front Placket",
    imageLinks: "/OrderStyle/Style/Placket.svg",
  },
  {
    id: 2,
    heading: "Yoke Styles",
    paragraph: "Split Yoke",
    imageLinks: "/OrderStyle/Style/Yoke.svg",
  },
  {
    id: 2,
    heading: "Sleeves Styles",
    paragraph: "Short Sleeves",
    imageLinks: "/OrderStyle/Style/Sleves.svg",
  },
  {
    id: 2,
    heading: "Hemline",
    paragraph: "Classic",
    imageLinks: "/OrderStyle/Style/hemline.svg",
  },
  {
    id: 2,
    heading: "Pockets",
    paragraph: "Welt Pocket with Button",
    imageLinks: "/OrderStyle/Style/pocket.svg",
  },
];

type OrderStyleProps = {};
export const OrderStyle: React.FC<OrderStyleProps> = () => {
  const [Open, setOpen] = useState(true);
  return (
    <div className="border p-7 border-gray rounded-lg my-4">
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={() => setOpen(!Open)}
      >
        <h3 className="text-2xl font-bold">Style </h3>
        <FaAngleDown className="text-dark-pink cursor-pointer" size={24} />
      </div>
      {Open ? (
        <div className="grid grid-cols-3 gap-3 mt-11">
          {ORDER_STYLE_DATA.map((_, key) => (
            <div key={key} className="flex items-center gap-4">
              <Image
                className="rounded-lg w-[120px] border border-gray p-4 h-[100px]"
                src={_.imageLinks}
                width={110}
                height={100}
                alt={_.imageLinks}
              />
              <div>
                <h3 className="text-xs font-bold">{_.heading}</h3>
                <h5 className="text-xs font-bold">{_.paragraph}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
