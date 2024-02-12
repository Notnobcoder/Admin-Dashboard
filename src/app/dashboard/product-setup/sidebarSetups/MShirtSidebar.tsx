"use client";

import { useApp } from "@/context/AppProvider";
import { MShirtStyles } from "../styleSetups/MShirtStyles";
import { navbarHeight } from "@/utils/constants";
import SetupSteps from "../(components)/SetupSteps";
import styled from "styled-components";
import { CompltedSetup } from "../completedSetups";
import { MShirtContrast } from "../contrastSetups/MShirtContrast";
import { MShirtMeasurment } from "../measurmentSetups/MShirtMeasurment";

export default function MShirtSidebar() {
  const { stepper } = useApp();

  let componentToRender;

  switch (stepper) {
    case 1:
      componentToRender = <MShirtStyles />;
      break;
    case 2:
      componentToRender = <MShirtContrast />;
      break;
    case 3:
      componentToRender = <MShirtMeasurment />;
      break;
    case 4:
      componentToRender = <CompltedSetup />;
      break;
    default:
      componentToRender = null;
      break;
  }

  return (
    <div
      className={`max-md:px-4 ${
        stepper > 2
          ? "w-full bg-white"
          : stepper === 2
          ? "md:w-[550px] bg-black/5"
          : "md:w-[630px] bg-black/5"
      }`}
    >
      <div className={`md:h-[100px] h-[64px] flex items-center`}>
        <SetupSteps />
      </div>
      <SidebarRoot
        className={`${stepper <= 2 ? "max-md:hidden " : ""}`}
        height={navbarHeight}
      >
        {componentToRender}
      </SidebarRoot>
    </div>
  );
}

const SidebarRoot = styled.div<any>`
  height: calc(100vh - ${(p) => p.height + 100}px);
  @media screen and (max-width: 767px) {
    height: calc(100vh - ${(p) => p.height + 64}px);
  }
`;
