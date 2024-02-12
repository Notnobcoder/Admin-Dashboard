"use client";

import { FabricE } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import React from "react";
import { MShirtSetup } from "../setups/MShirtSetup";
import ProductSetupProvider from "../(components)/ProductSetupProvider";
import MobileSetup from "../../(components)/MobileSetup";

export default function ProductSetup() {
  const searchParams = useSearchParams();
  const fabricType = searchParams?.get("fabric");

  let fabricToRender;

  switch (fabricType) {
    case FabricE.MShirt:
      fabricToRender = <MShirtSetup />;

    default:
      fabricToRender = <MShirtSetup />;
      break;
  }

  return (
    // <ProductSetupProvider>
    <>
      {fabricToRender}{" "}
      {/* <div className="md:hidden">
        <MobileSetup />
      </div> */}
    </>

    // </ProductSetupProvider>
  );
}
