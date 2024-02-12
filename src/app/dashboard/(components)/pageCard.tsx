// @ts-nocheck
"use client";
import CardDataStats from "@/components/CardDataStats";
import { Icons } from "@/imageLinks";

import React from "react";

type valueType = {
  heading: string;
  value: string;
};

const value: valueType[] = [
  { heading: "Total Sales", value: "$20,000" },
  { heading: "Total Earnings", value: "$52,000" },
  { heading: "Total Customers", value: "1,000" },
  { heading: "Total Orders", value: "50,000" },
];

export const PageCard = () => {
  return (
    <React.Fragment>
      {value.map((item, key) => (
        <CardDataStats key={key} heading={item.heading} value={item.value} />
      ))}
    </React.Fragment>
  );
};
