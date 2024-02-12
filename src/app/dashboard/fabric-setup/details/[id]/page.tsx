import React from "react";
import FabricDetails from "./FabricDetails";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="p-4 border border-gray shadow-md bg-[#fff] rounded">
      <FabricDetails fabricId={params.id} />
    </div>
  );
}
