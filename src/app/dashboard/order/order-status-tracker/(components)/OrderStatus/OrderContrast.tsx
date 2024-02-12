"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

type OrderContrastProps = {};

export const OrderContrast: React.FC<OrderContrastProps> = () => {
  const [Open, setOpen] = useState(true);
  return (
    <div className="border px-7 p-3 border-gray rounded-lg my-4">
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={() => setOpen(!Open)}
      >
        <h3 className="text-2xl font-bold">Contrast </h3>
        <FaAngleDown className="text-dark-pink cursor-pointer" size={24} />
      </div>
      {Open ? (
        <div className="mt-5">
          {/* card temp */}
          <div className="flex flex-col">
            <Image
              className="w-[140px] rounded-lg h-[100px]"
              src={"/orderNew/Green.png"}
              width={300}
              height={300}
              alt="measurment image"
            />
            <h3 className="mt-3 ml-6">Cuff : All</h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};
