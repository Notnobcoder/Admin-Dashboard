"use clinet";

import axios from "axios";
import { MenValue } from "../data";
import TakeMeasurment from "./TakeMeasurment";
import { useEffect, useState } from "react";
import { ENDPOINT } from "@/network";
import { useAuth } from "@/context/AuthProvider";
import { log, logErr } from "@/utils/helper";
import {
  AddMeasurementD,
  AllActiveMeasurementsD,
  AllMeasurementsD,
  MeasurementD,
} from "@/types/styles";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";
import { useProductSetup } from "../../../(components)/ProductSetupProvider";

export const TakeMeasurments = () => {
  const { allMeasurement, loading, addMeasurementForUser, btnLoading } =
    useProductSetup();

  return (
    <div className="px-5">
      {loading ? (
        <div className="h-[30vh] w-full flex items-center justify-center">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="rounded-lg md:mt-8 md:gap-6 gap-x-3 gap-y-5 border border-gray pb-5 grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-2">
          {allMeasurement[0]?.measurements.map((item) => (
            <TakeMeasurment key={item._id} item={item} />
          ))}
        </div>
      )}
      <div className="flex justify-center my-4">
        <Button
          color="primary"
          className="px-8 bg-transparent border border-dark-pink text-dark-pink font-medium"
          isLoading={btnLoading}
          onClick={addMeasurementForUser}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
