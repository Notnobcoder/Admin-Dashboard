"use client";
import Image from "next/image";
import { FaAngleDown, FaPlay } from "react-icons/fa";
import { useState } from "react";

const OrderSpecialInstuctionsData = [
  { id: 1, heading: "Photo", ImageLink: "/specialInstructions/shirt.svg" },
  {
    id: 2,
    heading: "Sketch Pad",
    ImageLink: "/specialInstructions/sketch.svg",
  },
];

type OrderSpecialInstuctionsProps = {};

export const OrderSpecialInstuctions: React.FC<
  OrderSpecialInstuctionsProps
> = ({}) => {
  const [Open, setOpen] = useState(true);
  return (
    <div className="border p-7 border-gray rounded-lg my-4">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setOpen(!Open)}
      >
        <h3 className="text-2xl font-bold">Special Instructions </h3>
        <FaAngleDown className="text-dark-pink cursor-pointer" size={24} />
      </div>
      {Open ? (
        <div className="flex gap-36 mt-11">
          {OrderSpecialInstuctionsData.map((_, key) => (
            <div key={key} className="flex flex-col items-center gap-4">
              <Image
                className="rounded-lg w-[131px] h-[123px]"
                src={_.ImageLink}
                width={110}
                height={100}
                alt="measurment image "
              />
              <div>
                <h3>{_.heading}</h3>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center ">
            <Image
              className="rounded-lg w-[131px] h-[77px]"
              src={"/specialInstructions/voice.svg"}
              width={110}
              height={100}
              alt="measurment image "
            />
            <div className="bg-gray p-4 flex items-center justify-center rounded-full">
              <FaPlay className="text-dark-pink" />
            </div>
            <div className="mt-3">
              <h3>Voice</h3>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
