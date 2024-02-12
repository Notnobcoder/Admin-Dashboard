import React from "react";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Box from "./Box";
import Image from "next/image";

const BOXES = [
  {
    id: 1,
    src: "/Images/order/camera.svg",
    alt: "Camera",
  },
  {
    id: 2,
    src: "/Images/order/sketch.svg",
    alt: "Sketch",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-5 xl:px-52 lg:px-24 md:px-10 md:py-10 p-3 border border-[#F1F1F1]">
      <div className="border border-light-purple bg-white rounded-xl flex items-center gap-3 justify-between px-5 py-2 relative">
        <input
          className="text-sm outline-none border-none flex-1 h-full py-1"
          type="text"
          placeholder="Add Instructions"
        />
        <FiPlus className="text-dark-pink text-2xl" />
      </div>
      <div>
        <div
          className="md:w-8 md:h-8 w-6 h-6 flex items-center justify-center rounded-full ml-auto mr-2 text-dark-pink hover:bg-light-pink cursor-pointer"
          // onClick={() => setCModal(true)}
        >
          <RiDeleteBin7Line className="text-lg" />
        </div>
      </div>
      <div className="border border-[#E8E6EA] md:p-8 p-3 rounded-lg">
        <div className="flex items-center justify-center md:gap-10 gap-3 m-auto">
          {BOXES.map((i) => {
            return <Box key={i.id} item={i} />;
          })}
        </div>
        <div className="border border-light-purple bg-white rounded-xl flex items-center gap-3 justify-between px-5 py-2 relative mt-8 m-auto">
          <textarea
            className="text-sm outline-none border-none flex-1 h-full py-1 resize-none"
            placeholder="Add Note"
          />
        </div>
        <div className="mt-14 m-auto">
          <h6 className="font-semibold text-base mb-5">Add your Voice :</h6>
          <Image
            className="w-full"
            src="/Images/order/voice-wave.svg"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="m-auto mt-5 max-md:w-8"
            src="/Images/order/voice.svg"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:gap-5 gap-3 pt-5 font-medium">
        <button className="border border-dark-pink text-dark-pink md:px-5 px-3 py-2 rounded-xl md:min-w-[140px]">
          Save
        </button>
        <button className="border border-dark-pink text-dark-pink md:px-5 px-3 py-2 rounded-xl md:min-w-[140px]">
          Incomplete
        </button>
        <button className="border border-dark-pink bg-dark-pink text-white md:px-5 px-3 py-2 rounded-xl md:min-w-[140px]">
          Complete
        </button>
      </div>
    </div>
  );
}
