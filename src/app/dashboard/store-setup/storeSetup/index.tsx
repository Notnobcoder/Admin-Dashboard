"use client";
import { type ReactElement } from "react";
import { StoreClothingContainer } from "./(components)/StoreClothingContainer";
import { HeaderContainer } from "./(components)/HeaderContainer";
import { Tabs, Tab } from "@nextui-org/react";
import { Collection } from "./(components)/HeaderComponents/Collection";
import { Reviews } from "./(components)/HeaderComponents/Reviews";
import { About } from "./(components)/HeaderComponents/About";
import { StorePolicies } from "./(components)/HeaderComponents/StorePolicies";

const STORE_SETUP_DATA = [
  { id: 1, heading: "Collections", component: <Collection /> },
  { id: 2, heading: "Reviews", component: <Reviews /> },
  { id: 3, heading: "About", component: <About /> },
  { id: 4, heading: "Store Policies", component: <StorePolicies /> },
];

export interface StoreSetupProps {}

export function StoreSetup(): ReactElement {
  return (
    <>
      {/* header container */}
      <HeaderContainer />
      {/* store clothing container */}
      <StoreClothingContainer />
      {/* filter store setup */}
      <Tabs
        color="primary"
        key={"underlined"}
        variant={"underlined"}
        aria-label="Tabs variants"
      >
        {STORE_SETUP_DATA.map((_item) => (
          <Tab key={_item.id} title={_item.heading}>
            {_item.component}
          </Tab>
        ))}
      </Tabs>
    </>
  );
}
