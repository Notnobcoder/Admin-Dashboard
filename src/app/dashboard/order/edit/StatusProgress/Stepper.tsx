"use client";

import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";

function Stepper() {
  const [currIndex, setCurrIndex] = useState(2);

  // Step 1: Modify the indicators array
  const indicators = [
    { active: false, label: "Order" },
    { active: false, label: "Cutting" },
    { active: false, label: "Master" },
    { active: false, label: "Stitching" },
    { active: false, label: "QC" },
    { active: false, label: "Delivered" },
  ];

  for (let i = 0; i <= currIndex; i++) {
    indicators[i].active = true;
  }

  const progress = (currIndex / (indicators.length - 1)) * 100;

  function previous() {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  }

  function next() {
    if (currIndex < indicators.length - 1) {
      setCurrIndex(currIndex + 1);
    }
  }

  return (
    <div className="text-left">
      <div className="md:w-[80%] w-[96%] flex items-center justify-between relative">
        <Progress className="bg-dark-pink" progress={progress} />
        {indicators.map((indicator, index) => (
          <div className="relative" key={index}>
            <ScreenIndicator key={index} active={indicator.active}>
              <span>
                {indicator.active && (
                  <BsCheckLg className="text-white text-xl" />
                )}
              </span>
            </ScreenIndicator>
            <span
              className={`md:text-sm text-xs absolute top-9 left-1/2 -translate-x-1/2 ${
                indicator.active ? "text-dark-pink" : "text-[#A0A0A0]"
              }`}
            >
              {indicator.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stepper;

const Progress = styled.div<any>`
  width: ${(props) => props.progress}%;
  top: 15px;
  height: 3px;
  position: absolute;
  z-index: -1;
  transition: width 0.3s;
`;

const ScreenIndicator = styled.div<any>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: border-color color; */
  transition-duration: 0.3s;
  background-color: ${(props) => (props.active ? "#F603D0" : "transparent")};
  border: 1px solid ${(props) => (props.active ? "transparent" : "#F603D0")};
`;

// const ControlBtn = styled.button`
//   margin-top: 50px;
//   background-color: rgb(238, 238, 238);
//   padding: 5px 10px;
//   border: 1px solid gray;
//   border-radius: 5px;
//   cursor: pointer;

//   &:disabled {
//     cursor: not-allowed;
//   }

//   &:not(:disabled):hover {
//     background-color: lightgray;
//   }
// `;
