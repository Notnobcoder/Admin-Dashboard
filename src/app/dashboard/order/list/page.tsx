"use client";

import React from "react";
import List from "./List";

export default function Page() {
  return (
    <div>
      <div className="border border-light-purple rounded-xl bg-white text-[#2C3A4B] font-medium flex items-center gap-5 mb-5 px-7 py-3">
        <span>Order Number</span>
        <span className="h-7 w-0.5 bg-[#2C3A4B]"></span>
        <span>9135</span>
      </div>
      <List />
    </div>
  );
}
