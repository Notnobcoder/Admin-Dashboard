"use client";
import { useApp } from "@/context/AppProvider";
import { Fragment } from "react";
import { FaCheck } from "react-icons/fa";

const ORDER_STEPPER_DATA = [
  { id: 1, heading: "Order" },
  { id: 2, heading: "Cutting" },
  { id: 3, heading: "Master" },
  { id: 4, heading: "Stitching" },
  { id: 5, heading: "Qc" },
  { id: 6, heading: "Delivered" },
];

export default function OrderStepper() {
  const { orderCurrentStep } = useApp();

  const activeColor = (index: number) =>
    orderCurrentStep >= index ? "bg-green-600" : "bg-white";

  const activeColor2 = (index: number) =>
    orderCurrentStep >= index ? "text-green-600" : "text-black/50 ";

  const isFinalStep = (index: number) =>
    index === ORDER_STEPPER_DATA.length - 1;

  return (
    <div className="flex mb-10 mx-4 items-center w-[95%] ">
      {ORDER_STEPPER_DATA.map((_, index) => (
        <Fragment key={index}>
          <div className="relative">
            <div
              className={`w-[2rem] h-[2rem] rounded-full  flex border border-black/30 items-center justify-center ${activeColor(
                index,
              )}`}
            >
              <FaCheck className="text-white font-bold" />
            </div>
            <div className="absolute w-fill text-center w-full mt-1 ">
              <h3 className={`text-[10px] ${activeColor2(index)}`}>
                {_.heading}
              </h3>
            </div>
          </div>
          {isFinalStep(index) ? null : (
            <div className={`w-full h-1 ${activeColor(index)}`}></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
