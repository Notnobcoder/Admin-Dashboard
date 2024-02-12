"use client";
import React, { useState } from "react";
import ChangeFabric from "./ChangeFabric";
import {
  CollarData,
  CuffData,
  PlacketData,
  PocketData,
  SleeveData,
  YokeData,
} from "../data";

export default function ChangeFabrics() {
  const [changeFabricState, setChangeFabricState] = useState("");
  return (
    <div className="md:overflow-x-auto font-jost md:h-full">
      <div className="flex flex-col max-md:h-full">
        <ChangeFabric
          styles={CollarData}
          heading="Collar"
          {...{ changeFabricState, setChangeFabricState }}
        />
        <ChangeFabric
          styles={CuffData}
          heading="Cuff"
          {...{ changeFabricState, setChangeFabricState }}
        />
        <ChangeFabric
          styles={PlacketData}
          heading="Placket Styles"
          {...{ changeFabricState, setChangeFabricState }}
        />
        <ChangeFabric
          styles={PocketData}
          heading="Pockets"
          {...{ changeFabricState, setChangeFabricState }}
        />
        <ChangeFabric
          styles={SleeveData}
          heading="Sleeves Styles"
          {...{ changeFabricState, setChangeFabricState }}
        />
        <ChangeFabric
          styles={YokeData}
          heading="Yoke Styles"
          {...{ changeFabricState, setChangeFabricState }}
        />
      </div>
    </div>
  );
}
