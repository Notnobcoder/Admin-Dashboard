"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FabricD } from "./page";

export const ShowFabricImages = ({ item }: { item: FabricD }) => {
  const { fabImage, _id } = item;
  return (
    <div className="relative">
      <Image
        src={fabImage}
        alt=""
        width={300}
        height={200}
        className="w-full aspect-square rounded-md"
      />
      <div className="flex items-center absolute w-full transition-all h-full justify-center top-0 left-0 flex-col text-white bg-transparent hover:bg-dark-pink/70 rounded-md">
        <div className="opacity-0 hover:opacity-[1] w-full h-full flex flex-col gap-[1rem] items-center justify-center">
          <h3 className="text-sm font-medium border border-white/90 rounded-lg px-4 py-2">
            Edit Fabric
          </h3>
          <Link href={`/dashboard/fabric-setup/details/${_id}`}>
            <h3 className="text-sm font-medium border border-white/90 rounded-lg px-4 py-2">
              Fabric Details
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
