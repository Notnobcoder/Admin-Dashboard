"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { useApp } from "@/context/AppProvider";
import { useSearchParams } from "next/navigation";
import MShirtDesign from "./designs/MShirtDesign";
import { FabricE } from "@/utils/constants";

export default function MobileSetup() {
  const [showFilter, setShowFilter] = useState(false);
  const drawerRef = useRef<any>(null);
  const { stepper, setStepper, isDrawerOpen, setIsDrawerOpen } = useApp();
  const searchParams = useSearchParams();
  const fabricType = searchParams?.get("fabric");
  // const [fabricToRender, setFabricToRender] = useState<any>(null);
  const [text, setText] = useState("");

  let fabricToRender;

  useEffect(() => {
    // if (stepper === 2) {
    //   handleSubmitValue();
    // }

    const handleOutsideClick = (e: any) => {
      // Check if the click is outside the drawer
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsDrawerOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleTouchStart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // Capture the initial touch position
    const startY = e.touches[0].clientY;
    drawerRef.current.startY = startY;
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // Calculate the distance moved during the touch
    const deltaY = e.touches[0].clientY - drawerRef.current.startY;

    // Open or close the drawer based on the direction of the touch movement
    if (deltaY < -50) {
      setIsDrawerOpen(true);
    } else if (deltaY > 50) {
      setIsDrawerOpen(false);
    }
  };

  // useEffect(() => {
  //   console.log("fabric render");
  //   switch (fabricType) {
  //     case FabricE.MShirt:
  //       break;

  //     default:
  //       setFabricToRender(<MShirtDesign setText={setText} />);
  //       break;
  //   }
  // }, [fabricType]);

  switch (fabricType) {
    case FabricE.MShirt:
      break;

    default:
      fabricToRender = <MShirtDesign setText={setText} />;
      break;
  }

  return (
    <Root
      ref={drawerRef}
      className={`fixed left-0 py-8 right-0 bottom-0 rounded-t-2xl bg-white z-50 max-h-[600px] ${
        isDrawerOpen ? "h-[70vh]" : "h-28"
      }`}
    >
      <div className="flex gap-3 items-center justify-center mb-3 relative">
        <div
          className="absolute -top-10 left-0 right-0 h-8 flex items-center justify-center rounded-3xl w-8/12 mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="w-10 h-1 bg-black/30 rounded"></div>
        </div>
        <Button
          className={`bg-black/80 h-12 text-white font-semibold text-lg px-4 ${
            stepper > 1 ? "inline-block" : "hidden"
          }`}
          color="primary"
          onClick={() => setStepper((prev) => prev - 1)}
        >
          Back
        </Button>

        <div
          className={`text-white h-12 w-12 flex items-center justify-center rounded-lg -rotate-90 ${
            stepper > 1 ? "hidden" : "inline-block"
          } ${showFilter ? "bg-dark-pink" : "bg-black/80"}`}
          onClick={() => setShowFilter(!showFilter)}
        >
          {/* <FabricSvg /> */}
        </div>

        <Button
          className={`h-12 text-white font-semibold text-lg px-4 ${
            showFilter ? "bg-black/80" : "bg-dark-pink"
          }`}
          color="primary"
          onClick={() => {
            if (text !== "Fabric") return;
            setShowFilter(false);
          }}
        >
          {text}
        </Button>

        <Button
          className={`bg-black/80 h-12 text-white font-semibold text-lg px-4 ${
            stepper < 7 ? "inline-block" : "hidden"
          }`}
          color="primary"
          onClick={() => {
            if (showFilter) {
              setStepper(1);
              setShowFilter(false);
            } else {
              setStepper((prev) => prev + 1);
              setShowFilter(false);
            }
          }}
        >
          Next
        </Button>

        <div
          className="bg-black/80 text-white h-12 w-12 flex items-center justify-center rounded-lg"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <FaArrowUp
            className={`${isDrawerOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>
      <div className="relative py-5 px-3 h-full overflow-y-auto pb-10">
        {fabricToRender}
      </div>
    </Root>
  );
}

const Root = styled.div`
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 30px 12px rgba(0, 0, 0, 0.25);
`;
