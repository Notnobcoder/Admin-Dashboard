"use client";

import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import { MeasurementD } from "@/types/styles";
import { Switch, cn } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useProductSetup } from "../../../(components)/ProductSetupProvider";

export default function TakeMeasurment({
  item: measurementObj,
}: {
  item: MeasurementD;
}) {
  const { mesurmentImage, name } = measurementObj;
  const [isSelected, setIsSelected] = useState(false);
  const { setUserMeasurementData, allActiveMeasurement, setDeleteMeasurement } =
    useProductSetup();

  const handleActiveMeasurements = () => {
    allActiveMeasurement?.measurements?.map((measurement) => {
      if (measurement.name === measurementObj.name) {
        setIsSelected(true);
      }
    });
  };

  useLayoutEffect(() => {
    handleActiveMeasurements();
  }, [allActiveMeasurement]);

  const handleMeasurementData = (isSelectedState: boolean) => {
    let isMeasurementPresent = false;
    allActiveMeasurement?.measurements?.map((measurement) => {
      if (measurement.name === measurementObj.name) {
        isMeasurementPresent = true;
      }
    });

    if (isSelectedState) {
      setUserMeasurementData((prev) => {
        let _temp = [...prev];
        if (_temp.length > 0) {
          let _i = _temp.findIndex(
            (e) => e.name.toLowerCase() == measurementObj.name
          );
          if (_i !== -1) {
            console.warn("third pppp check");
            return _temp;
          } else {
            console.warn("second pppp check");
            isMeasurementPresent ? _temp : _temp.push(measurementObj);
            return _temp;
          }
        } else {
          console.warn("first pppp check");
          isMeasurementPresent ? _temp : _temp.push(measurementObj);
          return _temp;
        }
      });
    } else {
      setUserMeasurementData((prev) => {
        let _temp = [...prev];
        if (_temp.length > 0) {
          let _i = _temp.findIndex(
            (e) => e.name.toLowerCase() == measurementObj.name
          );
          if (_i !== -1) {
            console.warn("third pppp uncheck");
            return _temp;
          } else {
            console.warn("second pppp uncheck");
            let aa = _temp.filter((i) => i.name !== measurementObj.name);
            return (_temp = aa);
          }
        } else {
          console.warn("first pppp uncheck");
          return _temp;
        }
      });
    }
  };

  const handleDeleteMeasurement = (isSelectedState: boolean) => {
    setDeleteMeasurement((prevMeasurement) => {
      let isMeasurementPresent = false;

      allActiveMeasurement?.measurements?.map((measurement) => {
        if (measurement.name === measurementObj.name) {
          isMeasurementPresent = true;
        }
      });

      const updatedMeasurement = isSelectedState
        ? isMeasurementPresent
          ? prevMeasurement.filter((item) => item !== measurementObj.name)
          : prevMeasurement
        : isMeasurementPresent
        ? [...prevMeasurement, measurementObj.name]
        : prevMeasurement;

      return updatedMeasurement;
    });
  };

  return (
    <div className="flex md:gap-4 gap-3 items-center">
      <Image
        className="rounded-lg md:w-28 md:h-28 w-20 h-20 border border-black/20"
        src={
          mesurmentImage.startsWith("https")
            ? mesurmentImage
            : "/Images/no-image.jpg"
        }
        width={100}
        height={100}
        alt="alt iamge"
      />
      <div className="w-1/2">
        <div>
          <Switch
            isSelected={isSelected}
            onValueChange={(isSelectedState) => {
              setIsSelected(!isSelected);
              handleMeasurementData(isSelectedState);
              handleDeleteMeasurement(isSelectedState);
            }}
            size="sm"
            color="success"
            classNames={{
              base: "",
              wrapper:
                "bg-red-600 group-data-[selected=true]:bg-green-600 h-[20px] border-[1px] border-gray",
              thumb: cn(
                "rounded-full bg-white w-[12px] h-[12px]",
                "group-data-[selected=true]:bg-white",
                "group-data-[selected=true]"
              ),
            }}
            startContent={<FaCheck style={{ color: "white" }} />}
            endContent={<IoClose style={{ color: "white" }} />}
          ></Switch>
        </div>
        <h4 className="text-md font-bold md:text-base text-sm mt-1">{name}</h4>
      </div>
    </div>
  );
}
