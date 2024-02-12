"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

type OrderData = {
  id: number;
  heading: string;
  price: string;
};

type OrderCardProps = {
  heading: string;
  headingValue: string;
  data: OrderData[];
};

export const OrderCard: React.FC<OrderCardProps> = ({
  heading,
  headingValue,
  data,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full my-2 border border-[#D9D9D9] px-2 py-1 rounded-md">
      <div
        className="flex items-center justify-between "
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <h3 className="text-sm font-bold">{heading}</h3>
          <IoIosArrowUp className="text-dark-pink cursor-pointer" />
        </div>
        <p className="text-sm font-bold">{headingValue}</p>
      </div>
      {/* toggle items */}
      {open ? (
        <div className="mt-3 space-y-1 text-xs px-2">
          {data.map((item) => (
            <div className="flex items-center justify-between" key={item.id}>
              <h3>{item.heading}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
