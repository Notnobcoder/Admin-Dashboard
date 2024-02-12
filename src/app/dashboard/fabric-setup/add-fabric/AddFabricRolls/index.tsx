"use client";

import React, { useEffect, useState } from "react";
import AddFabricRoll from "./AddFabricRoll";
import { Button, Divider } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import InputBox from "../(components)/InputBox";
import { useFabric } from "@/context/FabricProvider";

// @ts-nocheck
export const AddFabricRolls = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  // const [fabricRolls, setFabricRolls] = useState([1]);
  const {
    fabricDiscount,
    setFabricDiscount,
    fabricPrice,
    setFabricPrice,
    fabricRolls,
    setFabricRolls,
    addFabricSubmit,
    loading,
    isSuccess,
    hsnCode,
    setHsnCode,
  } = useFabric();

  // Function to add a new fabric roll
  const addFabricRoll = () => {
    const nextId = Math.max(...fabricRolls.map((roll) => roll.id), 0) + 1;
    setFabricRolls((rolls) => [
      ...rolls,
      {
        id: nextId,
        rollLength: "",
        stockLocation: "In shop",
        rackNumber: "",
      },
    ]);
  };

  // Function to update roll length
  const updateRollLength = (id: number, rollLength: string) => {
    setFabricRolls((rolls) =>
      rolls.map((roll) => (roll.id === id ? { ...roll, rollLength } : roll))
    );
  };

  // Function to update stock location
  const updateStockLocation = (id: number, stockLocation: string) => {
    setFabricRolls((rolls) =>
      rolls.map((roll) => (roll.id === id ? { ...roll, stockLocation } : roll))
    );
  };
  // Function to update rack Number
  const updateRackNumber = (id: number, rackNumber: string) => {
    setFabricRolls((rolls) =>
      rolls.map((roll) => (roll.id === id ? { ...roll, rackNumber } : roll))
    );
  };

  useEffect(() => {
    if (!isSuccess) return;
    onNext();
  }, [isSuccess]);

  return (
    <>
      <div className="flex md:flex-row flex-col md:items-center gap-5 justify-center pb-10">
        <div className="">
          <label className="inline-block mb-2 text-sm font-semibold">
            Fabric Discount(₹ or %)
          </label>
          <div>
            <input
              className="text-sm border border-[#E7E7F6] py-2 px-6 rounded-lg w-full"
              type="text"
              placeholder="Discount in(₹ or %)"
              value={fabricDiscount}
              onChange={(e) => setFabricDiscount(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="inline-block mb-2 text-sm font-semibold">
            Fabric Price (per mtr/yard)
          </label>
          <div>
            <input
              className="text-sm border border-[#E7E7F6] py-2 px-6 rounded-lg w-full"
              type="text"
              placeholder="Enter Fabric Price"
              value={fabricPrice}
              onChange={(e) => setFabricPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="inline-block mb-2 text-sm font-semibold">
            HSN/SAC Code
          </label>
          <div>
            <input
              className="text-sm border border-[#E7E7F6] py-2 px-6 rounded-lg w-full"
              type="text"
              placeholder="HSN/SAC Code"
              value={hsnCode}
              onChange={(e) => setHsnCode(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {fabricRolls.map((fabricRoll, index) => {
          return (
            <AddFabricRoll
              key={fabricRoll.id}
              {...{
                fabricRoll,
                updateRollLength,
                updateStockLocation,
                updateRackNumber,
              }}
            />
          );
        })}
        <div className="max-sm:m-auto">
          <Button
            className="bg-dark-pink uppercase font-semibold text-sm px-6"
            color="primary"
            startContent={<AiOutlinePlus />}
            onClick={addFabricRoll}
          >
            Add More
          </Button>
        </div>
        <div className="flex justify-end mt-10">
          <Button
            className="bg-[#D9D9D9] text-[#4D4D4D] font-semibold px-6 text-sm uppercase"
            color="primary"
            onClick={addFabricSubmit}
            isLoading={loading}
          >
            Save and Continue
          </Button>
        </div>
      </div>
    </>
  );
};
