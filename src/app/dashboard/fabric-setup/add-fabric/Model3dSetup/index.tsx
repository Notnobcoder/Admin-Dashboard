"use client";

import { ENDPOINT } from "@/network";
import { STORAGE_TOKEN } from "@/utils/constants";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";
import Preview3D from "./3DPreview";
import { useFabric } from "@/context/FabricProvider";
import AddFile from "./AddFile";
import MemoizedImageCropper from "../(components)/ImageCropper";
import { Spinner } from "@nextui-org/react";
import SelectFabricDropdown from "./SelectFabricDropdown";

export const Model3dSetup = ({ onNext }: { onNext: () => void }) => {
  const { token, userDetails } = useAuth();
  const {
    dashNumber,
    fabImage,
    fabImageName,
    fabName,
    fabNumber,
    setDashNumber,
    setFabImage,
    setFabName,
    setFabNumber,
    setStoreNumber,
    setfabImageName,
    storeNumber,
    imagePreview,
    setImagePreview,
    textureProp,
    setTextureProp,
    fabricImages,
    setFabricImages,
  } = useFabric();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<File | null>(null);

  useEffect(() => {
    setStoreNumber(userDetails?.storeNumber || "");
  }, [userDetails]);

  const configAuth = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Replace 'token' with the key where your token is stored
    },
  };

  const GenerateFabName = async () => {
    const checkDashApi = `${ENDPOINT}/api/v1/fabric/check-fabdashnumber/${dashNumber}`;
    setLoading(true);
    await axios
      .get(checkDashApi, configAuth)
      .then((response) => {
        setMessage(response.data.message);
        console.log(response.data.message, "response data");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
    setDashNumber(`${storeNumber}${fabNumber}`);
  };

  const handleFileChange = (e: any) => {
    setImgUrl(e.target.files[0]);
  };

  const handleCroppedFile = (file: File) => {
    setImagePreview(URL.createObjectURL(file));
    setFabImage(file);
    setfabImageName(file.name);
  };
  const remove3dImage = () => {
    setImagePreview(null);
    setFabImage("");
    setfabImageName("");
    setImgUrl(null);
  };

  const getSliderValue = (value: any, type: number) => {
    switch (type) {
      case 0: //x-tile
        setTextureProp((prev) => ({ ...prev, tilex: value }));
        break;
      case 1: //y-tile
        setTextureProp((prev) => ({ ...prev, tiley: value }));
        break;
      case 2: //rotation
        setTextureProp((prev) => ({ ...prev, rotation: value }));
        break;
      default:
        break;
    }
  };

  const addInputField = () => {
    setFabricImages([
      ...fabricImages,
      { id: fabricImages.length + 1, value: null },
    ]);
  };

  const handleInputChange = (id: number, file: any) => {
    const updatedInputFields = fabricImages.map((inputField) =>
      inputField.id === id ? { ...inputField, value: file } : inputField,
    );
    setFabricImages(updatedInputFields);
  };

  const addFabricSubmit2 = async () => {
    const formdata = new FormData();
    formdata.append("userFabricImages", fabImage, fabImageName);
    const tokenn =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThiYmU1ZThhMDMzZmMzNWYzNThkZDUiLCJpYXQiOjE3MDQzNjE1MDEsImV4cCI6MTcwNTY1NzUwMX0.l-9TKK55B3MUuqafN99mh5iXRTifGPY1T4I33T_Asuc";

    await axios
      .post(
        `https://dev.fabricssoftware.com/api/v1/store/add-users-fabric-images`,
        formdata,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${tokenn}`,
          },
        },
      )
      .then((response: any) => {
        console.log(response);
      })
      .catch((err: any) => {
        console.log({ err: err });
      });
  };

  return (
    <div>
      <div className="lg:flex lg:flex-row-reverse lg:items-start lg:gap-[3.25rem]">
        {/* 3d model start */}
        <div className="flex-[1.5]">
          <div className="border border-[#E7E7F6] bg-[#00000005] flex items-center justify-center h-[28rem] rounded-lg">
            {imgUrl ? (
              <>
                {fabImage ? (
                  <div className="flex items-center justify-center w-full relative">
                    <Preview3D
                      textureImg={imagePreview}
                      textureProperty={textureProp}
                      remove3dImage={remove3dImage}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Spinner className="" size="lg" />
                  </div>
                )}
              </>
            ) : (
              <label
                htmlFor="3DPreview"
                className="bg-[#FDDEF8] flex flex-col items-center justify-center w-[6.92025rem] h-[5.7365rem] rounded-[0.45525rem]"
              >
                <div className="text-3xl font-semibold">+</div>
                <h5 className="text-base font-medium">Add File</h5>
                <input
                  id="3DPreview"
                  className="hidden"
                  type="file"
                  value={""}
                  onChange={handleFileChange}
                />
              </label>
            )}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 my-5 items-center">
            {fabricImages.map((inputField) => (
              <AddFile
                key={inputField.id}
                {...{ inputField, handleInputChange }}
              />
            ))}

            {/* <div>
              <Button
                className="bg-dark-pink"
                color="primary"
                startContent={<AiOutlinePlus />}
                onClick={addInputField}
              >
                Add More
              </Button>
            </div> */}
          </div>
        </div>
        {/* form start */}
        <div className="flex-1 flex flex-col gap-5">
          {/* input component */}
          <div className="">
            <h3 className="text-sm font-semibold mb-2">Enter Fabric Name</h3>
            <input
              value={fabName}
              onChange={(e) => setFabName(e.target.value)}
              placeholder="Enter Fabric Name"
              className="text-[0.875rem] hover:border-[#F603D0] px-4 py-3 outline-none border border-[#E7E7F6] rounded-lg w-full"
            />
          </div>
          <div className="">
            <h3 className="text-sm font-semibold mb-2">Enter Fabric Number</h3>
            <input
              value={fabNumber}
              onChange={(e) => setFabNumber(e.target.value)}
              placeholder="Enter Fabric Number"
              className="text-[0.875rem] hover:border-[#F603D0] px-4 py-3 outline-none border border-[#E7E7F6] rounded-lg w-full"
            />
          </div>
          <div className="">
            <h3 className="text-sm font-semibold mb-2">
              Enter Fabric Dash Number
            </h3>
            <input
              readOnly
              placeholder="Enter Fabric Dash Number"
              value={dashNumber}
              className="text-[0.875rem] hover:border-[#F603D0] px-4 py-3 outline-none border border-[#E7E7F6] rounded-lg w-full"
            />
          </div>
          <div className="text-green-600 text-sm font-medium">{message}</div>
          {/* flex button */}
          <div className="flex gap-[1rem]">
            <Button
              className="bg-dark-pink px-4 uppercase text-sm font-semibold"
              color="primary"
              onClick={GenerateFabName}
              isLoading={loading}
            >
              Generate Fabric Number
            </Button>

            <Button className="bg-[#D9D9D9] text-[#4D4D4D] uppercase font-semibold px-4 text-sm">
              Clear
            </Button>
          </div>
          {/* select component */}
          <div className="">
            <h3 className="text-sm font-semibold mb-2">Select Products</h3>
            {/* <select className="w-full bg-white px-4 py-3 rounded-[0.75rem] border border-[#E7E7F6]">
              <option>Shirt</option>
              <option>pant</option>
              <option>pant2</option>
              <option>pant3</option>
              <option>pant4</option>
            </select> */}
            <SelectFabricDropdown />
          </div>

          {/* tile x */}
          <div className="w-full">
            <h3 className="text-sm font-semibold mb-2">TileX</h3>
            <div className="lg:flex gap-[2rem]">
              <input
                // defaultValue={textureProp.tilex}
                value={textureProp.tilex}
                onChange={(e) => getSliderValue(e.target.value, 0)}
                type="range"
                step={1}
                max={10}
                className="w-full h-[25px] bg-transparent"
              />
              <h4>{textureProp.tilex}</h4>
            </div>
          </div>
          {/* tile y */}
          <div className=" w-full">
            <h3 className=" text-sm font-semibold mb-2">TileY</h3>
            <div className="lg:flex gap-[2rem]">
              <input
                // defaultValue={textureProp.tiley}
                value={textureProp.tiley}
                type="range"
                step={1}
                max={10}
                className="w-full h-[25px] bg-transparent"
                onChange={(e) => getSliderValue(e.target.value, 1)}
              />
              <h4>{textureProp.tiley}</h4>
            </div>
          </div>
          {/* rotaton */}
          <div className="w-full">
            <h3 className="text-sm font-semibold mb-2">Rotation</h3>
            <div className="lg:flex gap-[2rem]">
              <input
                // defaultValue={textureProp.rotation}
                value={textureProp.rotation}
                type="range"
                step={1}
                max={180}
                className="w-full h-[25px] bg-transparent"
                onChange={(e) => getSliderValue(e.target.value, 2)}
              />
              <h4>{textureProp.rotation}</h4>
            </div>
          </div>
        </div>
      </div>
      {/* save and continue button */}
      {/* <div className="flex items-center justify-center lg:justify-end mt-[3.31rem]">
        <Button placeholder="Save and Continue" onClick={onNext} />
      </div> */}
      <div className="flex justify-end">
        <Button
          className="bg-dark-pink font-medium px-4 text-sm uppercase"
          color="primary"
          onClick={onNext}
          isDisabled={!fabName || !fabImageName || !fabNumber || !dashNumber}
        >
          Save and Continue
        </Button>
      </div>
      {imgUrl && (
        <div className="absolute top-0 left-0 pointer-events-none opacity-0">
          <MemoizedImageCropper
            {...{ initialUrl: imgUrl, handleCroppedFile }}
            clearImgUrl={() => setImgUrl(null)}
          />
        </div>
      )}

      {/* {fabImage && (
        <div className="border-2 border-red-200">
          <Image
            src={URL.createObjectURL(fabImage)}
            alt=""
            width={500}
            height={500}
            className="w-auto h-auto"
          />
        </div>
      )} */}

      {/* <button onClick={addFabricSubmit2}>Click</button> */}
    </div>
  );
};
