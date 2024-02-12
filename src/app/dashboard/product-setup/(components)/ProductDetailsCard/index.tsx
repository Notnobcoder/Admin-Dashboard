"use client";
import { useApp } from "@/context/AppProvider";
import Image from "next/image";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export const FABRICS = [
  {
    id: 0,
    fabImage: "https://lovoj.s3.amazonaws.com/fab4.webp",
    value: "Geometric LVJ002",
    paragraph: "Cotton -- Essential",
    price: "59$",
  },
  {
    id: 1,
    fabImage: "https://lovoj.s3.amazonaws.com/fab1.jpeg",
    value: "Texture LVJ001",
    paragraph: "Cotton -- Essential",
    price: "47$",
  },
  {
    id: 2,
    fabImage: "https://lovoj.s3.amazonaws.com/fab2.webp",
    value: "Texture LVJ002",
    paragraph: "Cotton -- Essential",
    price: "38$",
  },
  {
    id: 3,
    fabImage: "https://lovoj.s3.amazonaws.com/fab3.webp",
    value: "Geometric LVJ001",
    paragraph: "Cotton -- Essential",
    price: "40$",
  },
  {
    id: 4,
    fabImage: "https://lovoj.s3.amazonaws.com/fab5.webp",
    value: "Check Print LVJ001",
    paragraph: "Cotton -- Essential",
    price: "35 $",
  },
  {
    id: 5,
    fabImage: "https://lovoj.s3.amazonaws.com/fab6.webp",
    value: "Check Print LVJ002",
    paragraph: "Cotton -- Essential",
    price: "48$",
  },
  {
    id: 6,
    fabImage: "https://lovoj.s3.amazonaws.com/fab7.webp",
    value: "Check Print LVJ003",
    paragraph: "Cotton -- Essential",
    price: "42$",
  },
  {
    id: 7,
    fabImage: "https://lovoj.s3.amazonaws.com/fab8.webp",
    value: "Check Print LVJ004",
    paragraph: "Cotton -- Essential",
    price: "39$",
  },
  {
    id: 8,
    fabImage: "https://lovoj.s3.amazonaws.com/fab9.webp",
    value: "Check Print LVJ005",
    paragraph: "Cotton -- Essential",
    price: "43$",
  },
  {
    id: 9,
    fabImage: "https://lovoj.s3.amazonaws.com/fab10.webp",
    value: "Geometric LVJ003",
    paragraph: "Cotton -- Essential",
    price: "61$",
  },
  {
    id: 10,
    fabImage: "https://lovoj.s3.amazonaws.com/fab11.webp",
    value: "Solid Color LVJ001",
    paragraph: "Cotton -- Essential",
    price: "37$",
  },
  {
    id: 11,
    fabImage: "https://lovoj.s3.amazonaws.com/fab12.webp",
    value: "Geometric LVJ004",
    paragraph: "Cotton -- Essential",
    price: "55$",
  },
  {
    id: 12,
    fabImage: "https://lovoj.s3.amazonaws.com/fab13.webp",
    value: "Check Print LVJ006",
    paragraph: "Cotton -- Essential",
    price: "48$",
  },
];

export const ProductDetailsCard = () => {
  const { stepper, setStepper } = useApp();
  const [selectedValue, setSelectedValue] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:flex flex-col items-center justify-between md:w-[400px] max-md:w-[300px] md:py-10 max-md:rounded-md h-full">
      <div className="bg-[#f6f6f6] p-5 max-md:pb-1 md:mb-[5rem] max-md:rounded-md">
        <div className="flex items-center flex-col justify-center">
          <div className="bg-dark-pink rounded-full p-3">
            <FiShoppingCart className="text-white text-xl" />
          </div>
          <h3 className="font-semibold">Shirt</h3>
        </div>
        <div className="flex md:w-[15vw] gap-[2rem] items-center text-[1.75rem] font-[400] mb-[1.5rem]">
          <Popover
            placement="left-start"
            isOpen={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
          >
            <PopoverTrigger>
              <Image
                src={FABRICS[selectedValue].fabImage}
                className="rounded-sm cursor-pointer"
                alt="Logo Image"
                width={50}
                height={50}
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col overflow-y-auto gap-4 h-[700px]">
                {FABRICS.map((item, key) => (
                  <div className="hover:cursor-pointer">
                    <Image
                      className={`w-[156px] ${
                        item.id === selectedValue
                          ? "scale-95 border  border-dark-pink p-1"
                          : "bg-red-300"
                      } transition  rounded-lg h-[121px]`}
                      priority
                      key={key}
                      src={item.fabImage}
                      width={200}
                      height={200}
                      alt="fabImage"
                      onClick={() => {
                        setSelectedValue(item.id);
                        setIsOpen(false);
                      }}
                    />
                    <div className="flex items-center  mt-2 px-1 justify-between">
                      <h3 className="text-xs font-semibold">{item.value}</h3>
                      <h5 className="text-xs font-bold">{item.price}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <h3 className="text-sm">Set Default Fabric</h3>
        </div>
        <div className="flex flex-col  items-center justify-between  border-dashed border-dark-pink border-y py-[1.25rem]">
          <div className="flex justify-between w-full items-center">
            <h3 className="font-bold text-sm">Fabric Name</h3>
            <p className="text-xs text-black/50">
              {FABRICS[selectedValue].value}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <h3 className="font-bold text-sm">Fabric Material</h3>
            <p className="text-black/50 text-sm">Special Cotton</p>
          </div>
        </div>
        <div className="py-[0.5rem]">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xs">Fabric</h3>
            <p className="text-black/50 text-xs">
              {FABRICS[selectedValue].price}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xs">Making Charges</h3>
            <p className="text-black/50 text-xs">0.00 $</p>
          </div>

          {stepper <= 1 ? null : (
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Style</h3>
              <p className="text-black/50"></p>
            </div>
          )}
          {stepper <= 2 ? null : (
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Contrast</h3>
              <p className="text-black/50"></p>
            </div>
          )}
          <hr className="my-3" />
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Subtotal</h3>
            <p className="text-black/50">{FABRICS[selectedValue].price}</p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center gap-8 max-md:hidden">
        {stepper <= 1 ? null : (
          <button
            className="bg-white text-dark-pink border border-dark-pink px-10 py-3 rounded-full"
            onClick={() => setStepper((prev: number) => prev - 1)}
          >
            Back
          </button>
        )}
        {stepper > 3 ? null : (
          <button
            className="bg-dark-pink px-10 py-3 text-white rounded-full"
            // onClick={() => setStepper((prev: number) => prev + 1)}
            onClick={() => {
              setStepper((prev: number) => prev + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const BoxDiv = styled.div`
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.2);
`;
