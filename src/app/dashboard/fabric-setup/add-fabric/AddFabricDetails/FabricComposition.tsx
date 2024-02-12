import { useFabric } from "@/context/FabricProvider";
import { fabricCompositions } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoMdArrowBack } from "react-icons/io";

function FabricComposition({ selectedCategory }: { selectedCategory: string }) {
  const { fabricComposition, setFabricComposition } = useFabric();
  const [fabricCategory, setFabricCategory] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [otherComposition, setOtherComposition] = useState(false);

  const handleCategoryChange = (e: any) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "other") {
      setFabricComposition("");
      setOtherComposition(true);
    } else {
      setFabricCategory(selectedCategory);
      setFabricComposition(""); // Reset the sub-fabric selection when changing category
      if (selectedCategory) {
        setIsShow(true);
      }
    }
  };

  const handleSubFabricChange = (e: any) => {
    setFabricComposition(e.target.value);
  };

  // Determine which set of options to use based on the selected category
  const subFabrics =
    fabricCompositions.find((item) => item.fabricCategory === fabricCategory)
      ?.subFabrics || [];

  console.log(fabricComposition, "BRAND");

  return (
    <div>
      <div className="flex items-center flex-1 overflow-hidden relative h-full rounded-[0.75rem] min-h-[75px]">
        <div
          className={`transition-all w-full h-full rounded-[0.75rem] absolute top-0 bottom-0 right-0 ${
            isShow ? "-left-[100%]" : "left-0"
          }`}
        >
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Composition:
          </label>
          <div className={`border border-[#E7E7F6] rounded-[0.75rem] w-full`}>
            {otherComposition ? (
              <>
                <input
                  className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm"
                  type="text"
                  placeholder="Enter Other Composition"
                  onChange={(e) => setFabricComposition(e.target.value)}
                />
                <div
                  className="bg-dark-pink p-1 rounded-full text-white text-base cursor-pointer absolute right-0 top-0"
                  onClick={() => {
                    setOtherComposition(false);
                    setFabricComposition("");
                  }}
                >
                  <IoMdArrowBack />
                </div>
              </>
            ) : (
              <select
                className="w-full bg-white px-4 py-3 rounded-[0.75rem] text-[#2C3A4B] opacity-80 text-sm font-medium"
                id="fabricCategory"
                value={fabricCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Composition</option>
                {selectedCategory &&
                  fabricCompositions.map((item) => (
                    <option key={item._id} value={item.fabricCategory}>
                      {item.fabricCategory}
                    </option>
                  ))}
                {selectedCategory && <option value="other">Other</option>}
              </select>
            )}
          </div>
        </div>

        {/* Render the sub-fabric dropdown */}
        <div
          className={`transition-all rounded-[0.75rem] absolute w-full h-full top-0 bottom-0 right-0 ${
            isShow ? "left-0" : "-left-[100%]"
          }`}
        >
          <div className="flex items-center gap-3 justify-between">
            <label className="text-sm font-semibold mb-2 inline-block">
              {fabricCategory}
            </label>
            <div
              className="bg-dark-pink p-1 rounded-full text-white text-base cursor-pointer"
              onClick={() => setIsShow(false)}
            >
              {/* <IoIosArrowBack /> */}
              <IoMdArrowBack />
            </div>
          </div>
          <div className={`border border-[#E7E7F6] rounded-[0.75rem]`}>
            <select
              className="w-full bg-white px-4 py-3 rounded-[0.75rem] text-[#2C3A4B] opacity-80 text-sm font-medium"
              id="subFabric"
              value={fabricComposition}
              onChange={handleSubFabricChange}
            >
              <option value="">Select composition type</option>
              {selectedCategory &&
                subFabrics.map((subFabric, index) => (
                  <option key={index} value={subFabric}>
                    {subFabric}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FabricComposition;
