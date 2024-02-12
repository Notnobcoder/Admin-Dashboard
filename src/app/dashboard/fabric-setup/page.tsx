"use client";

import React, { useEffect, useState } from "react";
import { ShowFabricImages } from "./ShowFabricImage";
import { Button, Card, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import styled from "styled-components";
import { ENDPOINT } from "@/network";
import axios from "axios";
import { log, logErr } from "@/utils/helper";
import { useAuth } from "@/context/AuthProvider";

export type FabricD = {
  _id: string;
  storeId: string;
  fabDashNumber: string;
  fabImage: string;
  storeNumber: string;
  fabricCategory: string[];
  fabricBrand: string[];
  fabricColor: string[];
  fabricSubCategory: string[];
  fabricMaterial: string[];
  fabricPattern: string[];
  fabricType: string[];
  fabricCharacteristics: string[];
  fabricSeason: string[];
  fabricQuantity: any[];
  fabricGsm: string[];
  perMeterPrice: number;
  fabricDiscount: number;
  rollInfo: RollInfoD[];
  fabDescription: string;
  createdAt: Date;
  fabName: string;
};

export type RollInfoD = {
  rollLength: number;
  rollIdentity: string;
  _id: string;
};

export default function AddFabric() {
  const { token } = useAuth();
  const [allFabrics, setAllFabrics] = useState([] as FabricD[]);
  const [loading, setLoading] = useState(true);

  const configAuth = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getFabrics = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `${ENDPOINT}/api/v1/fabric/getfabric?search=D107`,
        configAuth
      );

      log(res, "PPPPPPPP res");
      setAllFabrics(res?.data?.fabrics);
      console.log(res.data.fabrics);
      setLoading(false);
    } catch (error) {
      logErr(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    getFabrics();
  }, [token]);

  return (
    <div>
      <div className="text-end">
        <Link href="/dashboard/fabric-setup/add-fabric">
          <Button
            color="primary"
            className="bg-dark-pink text-white mb-5 px-8 font-medium"
          >
            Add Fabric
          </Button>
        </Link>
      </div>
      <Root className="grid md:grid-cols-4 grid-cols-2 gap-5 p-5 border border-black/10 rounded-md">
        {!loading
          ? allFabrics.map((i) => {
              return <ShowFabricImages key={i._id} item={i} />;
            })
          : [1, 2].map((i) => {
              return (
                <Card className="aspect-square" radius="md" key={i}>
                  <Skeleton className="rounded-lg">
                    <div className="aspect-square rounded-lg bg-default-300"></div>
                  </Skeleton>
                </Card>
              );
            })}
      </Root>
    </div>
  );
}
const Root = styled.div`
  box-shadow: 0px 1px 44px rgba(255, 98, 98, 0.1);
`;
