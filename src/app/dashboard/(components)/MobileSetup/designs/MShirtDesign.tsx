"use client";

import React, { Dispatch, SetStateAction } from "react";
import { useApp } from "@/context/AppProvider";
import { MShirtStyles } from "@/app/dashboard/product-setup/styleSetups/MShirtStyles";
import { MShirtContrast } from "@/app/dashboard/product-setup/contrastSetups/MShirtContrast";

export default function MShirtDesign({
  setText,
}: {
  setText: Dispatch<SetStateAction<string>>;
}) {
  const { stepper } = useApp();

  let componentToRender;

  switch (stepper) {
    case 1:
      componentToRender = <MShirtStyles />;
      setText("Style");
      break;

    case 2:
      componentToRender = <MShirtContrast />;
      setText("Contrast");
      break;

    default:
      componentToRender = null;
      setText("Completed");
  }
  return <>{componentToRender}</>;
}
