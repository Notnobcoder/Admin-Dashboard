"use client";

import { Divider, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import SelectBox from "../(components)/SelectBox";
import InputBox from "../(components)/InputBox";
import styled from "styled-components";

export default function AddFabricRoll({
  fabricRoll,
  updateRollLength,
  updateStockLocation,
  updateRackNumber,
}: {
  fabricRoll: {
    id: number;
    rollLength: string;
    stockLocation: string;
    rackNumber: string;
  };
  updateRollLength: (id: number, rollLength: string) => void;
  updateStockLocation: (id: number, rollLength: string) => void;
  updateRackNumber: (id: number, rollLength: string) => void;
}) {
  const { id, rollLength, stockLocation, rackNumber } = fabricRoll;

  return (
    <div className="max-md:border border-[#E7E7F6] max-md:p-2.5 rounded">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-5 justify-between max-sm:m-auto w-full">
        <div>
          <label className="inline-block mb-2 text-sm font-semibold">
            Fabric Roll Length(mtr/yard)
          </label>
          <div>
            <input
              className="text-sm border border-[#E7E7F6] py-2 px-6 rounded-lg w-full "
              type="text"
              placeholder="Enter Fabric Length"
              value={rollLength}
              onChange={(e) => updateRollLength(id, e.target.value)}
            />
          </div>
        </div>
        {/* <div>
        <label className="inline-block mb-2 text-sm font-semibold">
          Mtr/Yard
        </label>
        <SelectBox
          className="min-w-[160px]"
          placeholder="Enter Mtr/Yard"
          options={["Mtr", "Yard"]}
        />
      </div> */}
        <div>
          <label className="inline-block mb-2 text-sm font-semibold">
            Mtr/Yard
          </label>
          <SelectDiv className="min-w-[160px]">
            <Select
              label=""
              labelPlacement="outside"
              placeholder="Enter Mtr/Yard"
              className=""
              defaultSelectedKeys={["Mtr"]}
              // value={stockLocation}
              // onChange={(e) => updateStockLocation(id, e.target.value)}
            >
              {["Mtr", "Yard"].map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </Select>
          </SelectDiv>
        </div>
        <div>
          <label className="inline-block mb-2 text-sm font-semibold">
            Stock Location
          </label>
          <SelectDiv className="min-w-[160px]">
            <Select
              label=""
              labelPlacement="outside"
              placeholder="Enter Stock Location"
              className=""
              defaultSelectedKeys={["In shop"]}
              value={stockLocation}
              onChange={(e) => updateStockLocation(id, e.target.value)}
            >
              {["In shop", "Warehouse"].map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </Select>
          </SelectDiv>
        </div>
        <div>
          <label className="inline-block mb-2 text-sm font-semibold">
            Rack Number
          </label>
          <div>
            <input
              className="text-sm border border-[#E7E7F6] py-2 px-6 rounded-lg w-full "
              type="text"
              placeholder="Enter Rack Number"
              value={rackNumber}
              onChange={(e) => updateRackNumber(id, e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const SelectDiv = styled.div`
  .tap-highlight-transparent {
    background-color: transparent;
    border: 1px solid #e7e7f6;
    height: 40px;
  }
`;

// {
//   id: 3,
//   label: "No. of Rolls",
//   placeholder: "",
//   box: (
//     <SelectBox
//       className="min-w-[160px]"
//       placeholder="Enter No. of Rolls"
//       options={["10", "20", "30"]}
//     />
//   ),
// },
// {
//   id: 3,
//   label: "Fabric Price (per mtr/yard)",
//   placeholder: "Enter Fabric Price",
//   box: <InputBox placeholder="Enter Fabric Price" />,
// },
