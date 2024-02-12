import { useFabric } from "@/context/FabricProvider";
import React, { useEffect, useState } from "react";

const FabricCategoryDropdown = ({
  data,
  onCategoryChange,
}: {
  data: any;
  onCategoryChange: any;
}) => {
  const { fabricCategory, setFabricCategory } = useFabric();

  const handleCategoryChange = (e: any) => {
    const category = e.target.value;
    setFabricCategory(category);
    onCategoryChange(category); // Pass the selected category to the parent component
  };

  // useEffect(() => {
  //   if (data.length > 0) {
  //     setFabricCategory(data[0].fabricCategory);
  //   }
  // }, [data]);

  return (
    <div>
      <label
        className="text-sm font-semibold mb-2 inline-block"
        htmlFor="fabricCategory"
      >
        Select Fabric Category:
      </label>
      <div className="border border-[#E7E7F6] rounded-[0.75rem]">
        <select
          className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
          id="fabricCategory"
          value={fabricCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {data.map((item: any) => (
            <option key={item._id} value={item.fabricCategory}>
              {item.fabricCategory}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FabricCategoryDropdown;
