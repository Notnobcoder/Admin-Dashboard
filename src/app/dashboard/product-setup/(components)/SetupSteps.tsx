import { useApp } from "@/context/AppProvider";
import React from "react";

export const FABRIC_STEPS = [
  {
    id: 1,
    step: "Style",
  },
  {
    id: 2,
    step: "Contrast",
  },
  {
    id: 3,
    step: "Measurement",
  },
  {
    id: 4,
    step: "Completed",
  },
];

export default function SetupSteps() {
  const { stepper, setStepper } = useApp();
  return (
    <div className="flex items-start justify-between gap-5 w-full">
      {FABRIC_STEPS.map((item, key) => (
        <div
          key={key}
          className="flex items-center md:flex-col md:gap-2 justify-between cursor-pointer md:flex-1"
        >
          <div
            onClick={() => setStepper(item.id)}
            className={`${
              item.id <= stepper
                ? "bg-dark-pink text-white"
                : "bg-[#D9D9D9]  text-black"
            }
         flex items-center justify-center rounded-full w-7 h-7 md:h-[2.5rem] md:w-[2.5rem]`}
          >
            {key + 1}
          </div>
          <h2 className="text-xs text-center text-[#999999] max-md:hidden">
            {item.step}
          </h2>
        </div>
      ))}
    </div>
  );
}
