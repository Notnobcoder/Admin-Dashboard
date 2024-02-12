import { useAuth } from "@/context/AuthProvider";
import { log, logErr } from "@/utils/helper";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import FabricCategoryDropdown from "./FabricCategoryDropdown";
import { useFabric } from "@/context/FabricProvider";
import FabricComposition from "./FabricComposition";
import { IoMdArrowBack } from "react-icons/io";
import { ENDPOINT } from "@/network";

// @ts-nocheck
export const AddFabricDetails = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  const { token } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category
  const [fabricData, setFabricData] = useState<any[]>([]);
  const [otherBrand, setOtherBrand] = useState(false);
  const [otherMaterial, setOtherMaterial] = useState(false);
  const [otherPattern, setOtherPattern] = useState(false);
  const [otherType, setOtherType] = useState(false);

  const {
    fabricBrand,
    setFabricBrand,
    fabricSubCategory,
    setFabricSubCategory,
    fabricGms,
    setFabricGms,
    fabricColor,
    setFabricColor,
    fabricMaterial,
    setFabricMaterial,
    fabricPattern,
    setFabricPattern,
    fabricType,
    setFabricType,
    fabricCharacteristics,
    setFabricCharacteristics,
    fabricSeason,
    setFabricSeason,
    fabricDescription,
    setFabricDescription,
  } = useFabric();

  const configAuth = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Replace 'token' with the key where your token is stored
    },
  };

  const countFabrics = async () => {
    console.log("PPPPPPP");
    try {
      let res = await axios.get(
        `${ENDPOINT}/api/v1/fabric/getfabricdropdowns`,
        configAuth
      );

      setFabricData(res?.data?.data);
      log(res, "PPPPPPPP res");
    } catch (error) {
      logErr(error);
    }
  };

  console.log(fabricData, "PPPPPP");

  useEffect(() => {
    countFabrics();
  }, []);

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    setFabricBrand(""); // Reset the selected brand when category changes
    // Reset other dropdown selections if needed
  };

  const handleFabricBrand = (e: any) => {
    const fabricBrand = e.target.value;
    if (fabricBrand === "other") {
      setFabricBrand("");
      setOtherBrand(true);
    } else {
      setFabricBrand(fabricBrand);
    }
  };

  const handleFabricMaterial = (e: any) => {
    const fabricMaterial = e.target.value;
    if (fabricMaterial === "other") {
      setFabricMaterial("");
      setOtherMaterial(true);
    } else {
      setFabricMaterial(fabricMaterial);
    }
  };

  const handleFabricPattern = (e: any) => {
    const fabricPattern = e.target.value;
    if (fabricPattern === "other") {
      setFabricPattern("");
      setOtherPattern(true);
    } else {
      setFabricPattern(fabricPattern);
    }
  };

  const handleFabricType = (e: any) => {
    const fabricType = e.target.value;
    if (fabricType === "other") {
      setFabricType("");
      setOtherType(true);
    } else {
      setFabricType(fabricType);
    }
  };

  return (
    <div>
      <div className="grid lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {/* select component */}

        <FabricCategoryDropdown
          data={fabricData}
          onCategoryChange={handleCategoryChange}
        />

        {/* =============== Fabric Brand ==================== */}
        <div className="relative">
          <label className="text-sm font-semibold mb-2 inline-block">
            Select Fabric Brand
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            {otherBrand ? (
              <>
                <input
                  className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm"
                  type="text"
                  placeholder="Enter Other Brand"
                  onChange={(e) => setFabricBrand(e.target.value)}
                />
                <div
                  className="bg-dark-pink p-1 rounded-full text-white text-base cursor-pointer absolute right-0 top-0"
                  onClick={() => {
                    setOtherBrand(false);
                    setFabricBrand("");
                  }}
                >
                  <IoMdArrowBack />
                </div>
              </>
            ) : (
              <select
                className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
                value={fabricBrand}
                onChange={handleFabricBrand}
              >
                <option value="">Select a brand</option>
                {fabricData
                  .find((item) => item.fabricCategory === selectedCategory)
                  ?.fabricBrand?.map((brand: any) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                {selectedCategory && <option value="other">Other</option>}
              </select>
            )}
          </div>
        </div>
        {/* =============== Fabric Sub Category ==================== */}
        <div>
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Sub Category
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            <select
              className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
              value={fabricSubCategory}
              onChange={(e) => setFabricSubCategory(e.target.value)}
            >
              <option value="">Select Sub Category</option>
              {fabricData
                .find((item) => item.fabricCategory === selectedCategory)
                ?.fabricSubCategory?.map((brand: any) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* =============== Fabric Gms ==================== */}
        <div>
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Gsm
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            <select
              className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
              value={fabricGms}
              onChange={(e) => setFabricGms(e.target.value)}
            >
              <option value="">Select Gsm</option>
              {fabricData
                .find((item) => item.fabricCategory === selectedCategory)
                ?.fabricGsm?.map((brand: any) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* =============== Fabric Color ==================== */}
        <div>
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Color
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            <select
              className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
              value={fabricColor}
              onChange={(e) => setFabricColor(e.target.value)}
            >
              <option value="">Select Color</option>
              {fabricData
                .find((item) => item.fabricCategory === selectedCategory)
                ?.fabricColor?.map((brand: any) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* =============== Fabric Material ==================== */}
        <div className="relative">
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Material
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            {otherMaterial ? (
              <>
                <input
                  className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm"
                  type="text"
                  placeholder="Enter Other Material"
                  onChange={(e) => setFabricMaterial(e.target.value)}
                />
                <div
                  className="bg-dark-pink p-1 rounded-full text-white text-base cursor-pointer absolute right-0 top-0"
                  onClick={() => {
                    setOtherMaterial(false);
                    setFabricMaterial("");
                  }}
                >
                  <IoMdArrowBack />
                </div>
              </>
            ) : (
              <select
                className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
                value={fabricMaterial}
                onChange={handleFabricMaterial}
              >
                <option value="">Select Material</option>
                {fabricData
                  .find((item) => item.fabricCategory === selectedCategory)
                  ?.fabricMaterial?.map((brand: any) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                {selectedCategory && <option value="other">Other</option>}
              </select>
            )}
          </div>
        </div>

        {/* =============== Fabric Pattern ==================== */}
        <div className="relative">
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Pattern
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            {otherPattern ? (
              <>
                <input
                  className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm"
                  type="text"
                  placeholder="Enter Other Pattern"
                  onChange={(e) => setFabricPattern(e.target.value)}
                />
                <div
                  className="bg-dark-pink p-1 rounded-full text-white text-base cursor-pointer absolute right-0 top-0"
                  onClick={() => {
                    setOtherPattern(false);
                    setFabricPattern("");
                  }}
                >
                  <IoMdArrowBack />
                </div>
              </>
            ) : (
              <select
                className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
                value={fabricPattern}
                onChange={handleFabricPattern}
              >
                <option value="">Select Pattern</option>
                {fabricData
                  .find((item) => item.fabricCategory === selectedCategory)
                  ?.fabricPattern?.map((brand: any) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                {selectedCategory && <option value="other">Other</option>}
              </select>
            )}
          </div>
        </div>

        {/* =============== Fabric Types ==================== */}
        <div className="relative">
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Types
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            {otherType ? (
              <>
                <input
                  className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm"
                  type="text"
                  placeholder="Enter Other Type"
                  onChange={(e) => setFabricType(e.target.value)}
                />
                <div
                  className="bg-dark-pink p-1 rounded-full text-white text-base cursor-pointer absolute right-0 top-0"
                  onClick={() => {
                    setOtherType(false);
                    setFabricType("");
                  }}
                >
                  <IoMdArrowBack />
                </div>
              </>
            ) : (
              <select
                className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
                value={fabricType}
                onChange={handleFabricType}
              >
                <option value="">Select Type</option>
                {fabricData
                  .find((item) => item.fabricCategory === selectedCategory)
                  ?.fabricTypes?.map((brand: any) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                {selectedCategory && <option value="other">Other</option>}
              </select>
            )}
          </div>
        </div>

        {/* =============== Fabric Characteristics ==================== */}
        <div>
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Characteristics
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            <select
              className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
              value={fabricCharacteristics}
              onChange={(e) => setFabricCharacteristics(e.target.value)}
            >
              <option value="">Select Characteristic</option>
              {fabricData
                .find((item) => item.fabricCategory === selectedCategory)
                ?.fabricCharacteristics?.map((brand: any) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* =============== Fabric Composition ==================== */}
        {/* <div>
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Composition
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            <select
              className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
              value={fabricComposition}
              onChange={(e) => setFabricComposition(e.target.value)}
            >
              <option value="">Select a brand</option>
              {fabricData
                .find((item) => item.fabricCategory === selectedCategory)
                ?.fabricComposition?.map((brand: any) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div> */}

        <FabricComposition selectedCategory={selectedCategory} />

        {/* =============== Fabric Season ==================== */}
        <div>
          <label className="text-sm font-semibold mb-2 inline-block">
            Fabric Season
          </label>
          <div className="border border-[#E7E7F6] rounded-[0.75rem]">
            <select
              className="w-full bg-white  px-4 py-3 rounded-[0.75rem]  text-[#2C3A4B] opacity-80 text-sm font-medium"
              value={fabricSeason}
              onChange={(e) => setFabricSeason(e.target.value)}
            >
              <option value="">Select Season</option>
              {fabricData
                .find((item) => item.fabricCategory === selectedCategory)
                ?.fabricSeason?.map((brand: any) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* ===================== Description ============= */}

        <div>
          <h3 className="text-sm font-semibold mb-2">Description</h3>
          <div className="border border-[#E7E7F6] bg-[#F1F1F1] rounded-[0.75rem] px-4 py-2.5 text-sm">
            <textarea
              className="resize-none bg-transparent w-full overflow-hidden"
              placeholder="Type here..."
              value={fabricDescription}
              onChange={(e) => setFabricDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* next and previous button flex */}

      <div className="flex justify-end mt-16">
        <div className="flex gap-[1rem]">
          <Button
            className="bg-[#D9D9D9] text-[#4D4D4D] uppercase px-8 font-medium text-sm"
            onClick={onPrev}
            color="primary"
          >
            Previous
          </Button>

          <Button
            className="bg-dark-pink font-medium px-4 uppercase text-sm"
            color="primary"
            onClick={onNext}
          >
            Save and Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
