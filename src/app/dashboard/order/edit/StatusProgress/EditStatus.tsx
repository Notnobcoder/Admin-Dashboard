import Image from "next/image";
import React from "react";
import Stepper from "./Stepper";
import { IoClose } from "react-icons/io5";

export default function EditStatus() {
  return (
    <div className="border border-[#f603d033] rounded-2xl p-6">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-8 max-md:pb-5">
        <div className="relative">
          <Image
            src="/Images/order/no-image.png"
            alt="no image"
            width={150}
            height={150}
          />
          <div
            className="absolute border border-white right-2 top-2 bg-black w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
            // onClick={onClose}
          >
            <IoClose className="text-lg" />
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1 max-md:w-full">
          <div className="flex md:flex-row flex-col justify-between gap-5">
            <div>
              <div className="flex items-center gap-8 font-medium">
                <div className="font-medium">Product - Shirt</div>
                <div className="font-medium">P ID: 28</div>
              </div>
              <div className="text-[#8C8C8C]">Order Date- 2023-06-19</div>
              <div className="text-[#C80404] font-medium">
                Delivery Date- 2023-06-19{" "}
              </div>
            </div>
            <div>
              <button className="outline-none border border-dark-pink px-8 py-2 rounded-xl font-medium text-dark-pink text-sm">
                Edit Status
              </button>
            </div>
          </div>
          <div className="border-b border-dashed border-[#CBCBCB]"></div>
          <div>
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
}
