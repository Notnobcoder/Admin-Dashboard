"use client";
import { useApp } from "@/context/AppProvider";
import React from "react";
import styled from "styled-components";
import { ProductDetailsCard } from "../(components)/ProductDetailsCard";
import { navbarHeight } from "@/utils/constants";
import MShirtSidebar from "../sidebarSetups/MShirtSidebar";
import Web3D from "@/components/web3d";

export const MShirtSetup = () => {
  const { stepper } = useApp();

  return (
    <Root
      className={`lg:flex lg:flex-row items-center justify-between w-full flex-1 ${
        stepper <= 2 ? "lg:mr-[1rem]" : ""
      }`}
      height={navbarHeight}
    >
      <MShirtSidebar />

      <div
        className={`flex-col justify-center items-center md:flex-1  ${
          stepper <= 2 ? "flex" : "hidden"
        }`}
      >
        <div
          className={`flex flex-col w-full justify-center h-full ${
            stepper > 2 ? "hidden" : ""
          }`}
        >
          <Web3D fashion_type={"Shirt"} gender={"male"} />
        </div>
      </div>
      <div className="max-md:hidden">
        {stepper > 2 ? null : <ProductDetailsCard />}
      </div>
    </Root>
  );
};

const Root = styled.div<any>`
  height: calc(100vh - ${(p) => p.height}px);
`;
