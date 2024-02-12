// @ts-nocheck
"use client";
import React, { useState } from "react";
import { AddFabricDetails } from "./AddFabricDetails";
import { AddFabricRolls } from "./AddFabricRolls";
import { Finish } from "./Finish";
import { Model3dSetup } from "./Model3dSetup";

const AddFabricSteps = [
  {
    id: 1,
    step: "Setup 3d Model",
  },
  {
    id: 2,
    step: "Add Fabric Details",
  },
  {
    id: 3,
    step: "Add Fabric Rolls",
  },
  {
    id: 4,
    step: "Finish",
  },
];

export default function AddFabric() {
  const [step, setStep] = useState(1);

  // model 3d setup
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [dashNumber, setDashNumber] = useState("");
  // texuter prop -- tile x tily rotation
  const [textureProp, setTextureProp] = useState({
    tileX: 1,
    tileY: 1,
    rotation: 0,
  });
  // image state prop
  const [fabricImage, setFabricImage] = useState(null);

  let componentToRender;

  switch (step) {
    case 1:
      componentToRender = <Model3dSetup onNext={() => setStep(2)} />;
      break;
    case 2:
      componentToRender = (
        <AddFabricDetails onNext={() => setStep(3)} onPrev={() => setStep(1)} />
      );
      break;
    case 3:
      componentToRender = (
        <AddFabricRolls onNext={() => setStep(4)} onPrev={() => setStep(2)} />
      );
      break;
    case 4:
      componentToRender = <Finish />;
      break;
    default:
      componentToRender = null;
      break;
  }

  return (
    <div className="w-[100%] ">
      <div className="flex flex-wrap items-center pb-10 lg:justify-between gap-8">
        {AddFabricSteps.map((item, key) => {
          return (
            <div
              className="flex items-center justify-between gap-3"
              key={item.id}
            >
              <div
                className={` flex items-center justify-center w-8 h-8 rounded-full font-medium ${
                  item.id <= step
                    ? "bg-[#F603CF] text-white"
                    : "bg-[#D9D9D9] text-[#999999]"
                }`}
              >
                {item.id}
              </div>
              <h2
                className={`text-base font-semibold font-manrope ${
                  item.id <= step ? "text-black" : "text-[#999999]"
                }`}
              >
                {item.step}
              </h2>
            </div>
          );
        })}
      </div>
      {componentToRender}
    </div>
  );
}
