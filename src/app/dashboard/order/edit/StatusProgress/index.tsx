import React from "react";
import { IoClose, IoMailSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import EditStatus from "./EditStatus";

export default function StatusProgress() {
  return (
    <div className="flex flex-col md:gap-8 gap-6">
      <div className="flex items-center justify-end md:gap-5 gap-10 md:mb-14 mb-3">
        <div className="flex  md:flex-row flex-col items-center gap-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <span className="font-medium">From</span>
              <div className="relative">
                <input
                  className="border border-[#E8E8F7] px-4 outline-none py-2 rounded-2xl max-w-[140px]"
                  type="text"
                />
                <MdOutlineDateRange className="absolute top-1/2 -translate-y-1/2 right-4 text-dark-pink" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">To</span>
              <div className="relative">
                <input
                  className="border border-[#E8E8F7] px-4 outline-none py-2 rounded-2xl max-w-[140px]"
                  type="text"
                />
                <MdOutlineDateRange className="absolute top-1/2 -translate-y-1/2 right-4 text-dark-pink" />
              </div>
            </div>
          </div>
          <div>
            <select className="border border-[#E8E8F7] px-3 py-2 rounded-2xl outline-none">
              <option value="1">All Orders</option>
              <option value="2">All Orders</option>
            </select>
          </div>
        </div>
      </div>

      {/* =============== EDIT ORDER ================== */}

      <div className="border border-[#E8E6EA] bg-[#F6F6F9] rounded-2xl">
        <div className="flex md:flex-row flex-col items-center gap-5 justify-between px-5 md:h-16 max-md:py-5">
          <div className="flex items-center gap-8">
            <div className="font-medium flex items-center gap-1 md:min-w-[200px]">
              <span>Order ID</span>
              <span>:</span>
              <span>IN1021127</span>
            </div>
            <div>
              <span className="font-semibold">Bijay Sahoo</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <button className="outline-none border border-dark-pink px-8 py-2 rounded-xl font-medium text-dark-pink text-sm">
                Edit Order
              </button>
            </div>
            <div
              className="bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
              //   onClick={onClose}
            >
              <IoClose className="text-lg" />
            </div>
          </div>
        </div>
        <div className="border-b border-dashed border-[#CBCBCB] mx-5"></div>
        <div className="flex md:flex-row flex-col items-center gap-5 justify-between px-5 md:h-16 max-md:py-5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 md:min-w-[200px]">
              <IoMailSharp className="text-2xl" />
              <span className="text-dark-pink font-medium">
                bijay@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephoneFill className="text-xl" />
              <span className="text-dark-pink font-medium">9773500000</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== EDIT STATUS ======================== */}

      <EditStatus />
      <EditStatus />

      {/* =============== BILLING DETAILS ================== */}

      <div className="border border-[#E8E6EA] bg-[#F6F6F9] rounded-2xl">
        <div className="flex md:flex-row flex-col items-center gap-5 justify-between px-5 md:h-16 max-md:py-5">
          <div className="flex items-center gap-8">
            <div className="font-semibold">Billing details</div>
          </div>
        </div>
        <div className="border-b border-dashed border-[#CBCBCB] mx-5"></div>
        <div className="flex md:flex-row flex-col items-center gap-5 justify-between px-5 md:h-16 max-md:py-5">
          <div className="font-medium flex items-center gap-1">
            <span>Total Payment</span>
            <span>:</span>
            <span className="font-semibold">₹9500</span>
          </div>
          <div className="font-medium flex items-center gap-1 text-[#636363]">
            <span>Advance</span>
            <span>:</span>
            <span>₹2500</span>
          </div>
          <div className="font-medium flex items-center gap-1 ">
            <span className="text-[#636363]">Pending</span>
            <span className="text-[#636363]">:</span>
            <span className="text-[#C80404]">₹7000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
