import React from "react";
import ListItem from "./ListItem";
import Link from "next/link";

const USERS_LIST = [
  {
    id: 1,
    name: "Customer",
    imgUrl: "/Images/order/customer.svg",
  },
  {
    id: 2,
    name: "Products",
    imgUrl: "/Images/order/products.svg",
  },
  {
    id: 3,
    name: "Measurments",
    imgUrl: "/Images/order/measurements.svg",
  },
  {
    id: 4,
    name: "Special Instructions",
    imgUrl: "/Images/order/instructions.svg",
  },
  {
    id: 5,
    name: "Contrast",
    imgUrl: "/Images/order/contrast.svg",
  },
  {
    id: 6,
    name: "Readymade & Accessories",
    imgUrl: "/Images/order/accessories.svg",
  },
  {
    id: 7,
    name: "Bill & Invoice",
    imgUrl: "/Images/order/bill-invoice.svg",
  },
];

export default function List() {
  return (
    <>
      <div className="flex flex-col gap-5">
        {USERS_LIST.map((i) => {
          return <ListItem key={i.id} item={i} />;
        })}
      </div>
      <div className="flex flex-wrap items-center justify-center md:gap-5 gap-3 pt-10 font-medium">
        <button className="border border-dark-pink text-dark-pink px-5 py-2 rounded-xl md:min-w-[140px]">
          Incomplete
        </button>
        <button className="border border-dark-pink bg-dark-pink text-white px-5 py-2 rounded-xl md:min-w-[140px]">
          Complete
        </button>
      </div>
    </>
  );
}
