import React from "react";
import GalleryList from "./GalleryList";
import { TbPhoto } from "react-icons/tb";
import { BiFolder } from "react-icons/bi";

const TODAY_IMAGES = [
  {
    id: 1,
    src: "/Images/order/1.png",
  },
  {
    id: 2,
    src: "/Images/order/2.png",
  },
  {
    id: 3,
    src: "/Images/order/3.png",
  },
  {
    id: 4,
    src: "/Images/order/4.png",
  },
  {
    id: 5,
    src: "/Images/order/5.png",
  },
  {
    id: 6,
    src: "/Images/order/6.png",
  },
  {
    id: 7,
    src: "/Images/order/7.png",
  },
  {
    id: 8,
    src: "/Images/order/8.png",
  },
  {
    id: 9,
    src: "/Images/order/9.png",
  },
  {
    id: 10,
    src: "/Images/order/10.svg",
  },
];
const YESTERDAY_IMAGES = [
  {
    id: 1,
    src: "/Images/order/11.png",
  },
  {
    id: 2,
    src: "/Images/order/12.png",
  },
  {
    id: 3,
    src: "/Images/order/13.png",
  },
  {
    id: 4,
    src: "/Images/order/14.png",
  },
  {
    id: 5,
    src: "/Images/order/15.png",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <GalleryList text="Today" images={TODAY_IMAGES} />
      <GalleryList text="Yesterday" images={YESTERDAY_IMAGES} />
      <div className="flex flex-wrap items-center justify-end md:gap-5 gap-3 pt-10 font-medium">
        <div className="border border-dark-pink text-dark-pink px-5 py-2 rounded-xl md:min-w-[140px] flex items-center gap-2">
          <TbPhoto />
          <button className="outline-none">Photos</button>
        </div>
        <div className="border border-dark-pink bg-dark-pink text-white px-5 py-2 rounded-xl md:min-w-[140px] flex items-center gap-2">
          <BiFolder />
          <button className="outline-none">Folders</button>
        </div>
      </div>
    </div>
  );
}
