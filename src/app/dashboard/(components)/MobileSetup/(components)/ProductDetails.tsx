import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { HiInformationCircle } from "react-icons/hi";
import { ProductDetailsCard } from "@/app/dashboard/product-setup/(components)/ProductDetailsCard";

export default function ProductDetails() {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <div className="p-1 rounded-md">
          <HiInformationCircle className="text-4xl z-50 text-dark-pink" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 ">
        <ProductDetailsCard />
      </PopoverContent>
    </Popover>
  );
}
