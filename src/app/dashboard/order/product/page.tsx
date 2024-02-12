import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

export default function page() {
  return (
    <div className="h-[80vh] flex flex-col justify-between">
      <div>
        <div className="border border-light-purple rounded-xl bg-white text-[#2C3A4B] font-medium flex items-center gap-5 mb-5 px-7 py-3">
          <span>Order Number</span>
          <span className="h-7 w-0.5 bg-[#2C3A4B]"></span>
          <span>9135</span>
        </div>
        <div className="border border-light-purple bg-white rounded-xl flex items-center gap-3 justify-between px-5 py-2 relative">
          <input
            className="text-sm outline-none border-none flex-1 h-full py-1"
            type="text"
            placeholder="Search product name"
          />
          <FiPlus className="text-dark-pink text-2xl" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:gap-5 gap-3 pt-10 font-medium">
        <button className="border border-dark-pink text-dark-pink px-5 py-2 rounded-xl md:min-w-[140px]">
          Incomplete
        </button>
        <Link href="/dashboard/order/instructions">
          <button className="border border-dark-pink bg-dark-pink text-white px-5 py-2 rounded-xl md:min-w-[140px]">
            Complete
          </button>
        </Link>
      </div>
    </div>
  );
}
