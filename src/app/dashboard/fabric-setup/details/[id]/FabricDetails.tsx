"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import { ENDPOINT } from "@/network";
import axios from "axios";
import { logErr } from "@/utils/helper";
import { useAuth } from "@/context/AuthProvider";
import { FabricD } from "../../page";
import { Button, Card, Skeleton, useDisclosure } from "@nextui-org/react";
import { useFetch } from "@/hooks/useFetch";
import { IoDownloadOutline } from "react-icons/io5";

export default function FabricDetails({ fabricId }: { fabricId: string }) {
  const { token } = useAuth();
  const [fabricDetails, setFabricDetails] = useState({} as FabricD);

  const configAuth = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getFabricDetails = async () => {
    try {
      let res = await axios.get(
        `${ENDPOINT}/api/v1/fabric/getfabric?search=D107&id=${fabricId}`,
        configAuth,
      );
      setFabricDetails(res?.data?.fabrics[0]);
    } catch (error) {
      logErr(error);
    }
  };

  useEffect(() => {
    if (!token) return;
    getFabricDetails();
  }, [token]);
  const url = `https://fabricssoftware.com/api/v1/fabric/getFabric_dashNum/${fabricDetails.fabDashNumber}`;
  const { data } = useFetch(url);

  return (
    <div>
      <div className="flex md:flex-row flex-col max-md:items-center max-md:w-full gap-8">
        <div className="md:flex-1">
          {fabricDetails.fabImage ? (
            <div>
              <div className="my-4">
                <h2 className="text-xl font-semibold">
                  Fabric Name :{" "}
                  <span className="font-light">{fabricDetails.fabName}</span>
                </h2>
              </div>
              <Image
                src={fabricDetails.fabImage}
                alt="show fabric iamge"
                width={342}
                height={209}
                className="2xl:h-[25rem] xl:h-[20rem] w-[30rem] md:h-[20rem] w-auto aspect-square rounded-md"
              />
            </div>
          ) : (
            <Card
              className="2xl:h-[35rem] xl:h-[27rem] md:h-[20rem] aspect-square"
              radius="md"
            >
              <Skeleton className="rounded-lg">
                <div className="2xl:h-[35rem] xl:h-[27rem] md:h-[20rem] aspect-square rounded-lg bg-default-300"></div>
              </Skeleton>
            </Card>
          )}
        </div>

        <div className="flex gap-10 px-8">
          <div className="md:flex-1 flex flex-col gap-3 max-md:w-full">
            {fabricDetails.fabDashNumber && (
              <FabricList fabricDetails={fabricDetails} />
            )}
          </div>
          <div className="my-4 flex flex-col ">
            {data ? (
              <div className="flex items-center flex-col justify-center">
                <Image
                  priority
                  src={`data:image/jpeg;base64,${data}`}
                  alt="alt model"
                  width={300}
                  height={300}
                  className="w-[200px]"
                />
                <div className="flex items-center gap-8">
                  <Button
                    size="sm"
                    className="rounded-lg bg-white border border-dark-pink font-bold hover:shadow-md"
                    startContent={
                      <IoDownloadOutline
                        className={"text-dark-pink"}
                        size={20}
                      />
                    }
                  >
                    <a href={`data:image/jpeg;base64,${data}`} download>
                      Download Qr
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="w-[200px] flex items-center justify-center p-4  h-[100px]">
                <h3 className="capitalize">Qr Code Not available</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10">
        {fabricDetails.rollInfo && (
          <Table
            rollInfo={fabricDetails.rollInfo}
            fabricDiscount={fabricDetails.fabricDiscount}
            perMeterPrice={fabricDetails.perMeterPrice}
          />
        )}
      </div>
    </div>
  );
}

const FabricList = ({ fabricDetails }: { fabricDetails: FabricD }) => {
  const FABRIC_DETAILS = [
    {
      id: 1,
      label: "Fabric Number",
      value: fabricDetails.fabDashNumber,
    },
    {
      id: 2,
      label: "Fabric Brand",
      value: fabricDetails.fabricBrand[0],
    },
    {
      id: 3,
      label: "Fabric Category",
      value: fabricDetails.fabricCategory[0],
    },
    {
      id: 4,
      label: "Characters",
      value: fabricDetails.fabricCharacteristics[0],
    },
    {
      id: 5,
      label: "Color",
      value: fabricDetails.fabricColor[0],
    },
    {
      id: 6,
      label: "Material",
      value: fabricDetails.fabricMaterial[0],
    },
    {
      id: 7,
      label: "Type",
      value: fabricDetails.fabricType[0],
    },
    {
      id: 8,
      label: "Season",
      value: fabricDetails.fabricSeason[0],
    },
    {
      id: 9,
      label: "Discount",
      value: fabricDetails.fabricDiscount,
    },
    {
      id: 10,
      label: "Description",
      value: fabricDetails.fabDescription,
    },
  ];
  return (
    <>
      {FABRIC_DETAILS.map((i, index) => (
        <div key={index} className="flex items-center gap-8">
          <div className="text-base font-medium text-[#636363] flex-1">
            {i.label}
          </div>
          <span className="font-bold flex-[0.5]">:</span>
          <div className="text-base text-black font-semibold flex-1">
            {i.value}
          </div>
        </div>
      ))}
    </>
  );
};
