import React from "react";
import Input from "./Input";
import Upload from "./Upload";
import Link from "next/link";

const FIELDS = [
  {
    id: 1,
    placeholder: "Mobile number",
    icon: "/Images/order/search.svg",
    iconWidth: 16,
  },
  {
    id: 2,
    placeholder: "Email",
    icon: "/Images/order/search.svg",
    iconWidth: 16,
  },
  {
    id: 3,
    placeholder: "Customer name",
  },
  {
    id: 4,
    placeholder: "Alternate Phone Number",
  },
  {
    id: 5,
    placeholder: "Gender",
    icon: "/Images/order/gender.svg",
    iconWidth: 10,
  },
  {
    id: 6,
    placeholder: "Enter D.O.B",
    icon: "/Images/order/date.svg",
    iconWidth: 18,
  },
  {
    id: 7,
    placeholder: "Country",
    icon: "/Images/order/country.svg",
    iconWidth: 14,
  },
  {
    id: 8,
    placeholder: "Address",
  },
];

export default function OrderDetails() {
  return (
    <>
      <div>
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {FIELDS.map((i) => {
            return <Input key={i.id} item={i} />;
          })}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 items-center gap-5 justify-between mt-5">
          <Upload text="Front" />
          <Upload text="Side" />
          <Upload text="Back" />
        </div>
        <div className="flex flex-wrap items-center justify-center md:gap-5 gap-3 pt-10 font-medium">
          <button className="border border-dark-pink text-dark-pink px-5 py-2 rounded-xl md:min-w-[140px]">
            Incomplete
          </button>
          <Link href="/dashboard/order/product">
            <button
              className="border border-dark-pink bg-dark-pink text-white px-5 py-2 rounded-xl md:min-w-[140px]"
              //   onClick={onNext}
            >
              Complete
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
