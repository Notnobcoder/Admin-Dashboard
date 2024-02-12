import { SuccessImage } from "@/imageLinks";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// @ts-nocheck

export const Finish = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center flex-col md:h-[70vh] h-[50vh] md:mt-[5rem] mt-12">
        <Image src={SuccessImage} width={106} height={106} alt="success Icon" />
        <h3 className="md:text-[3rem] text-3xl font-[600] my-3">Succesfully</h3>
        <p className="md:text-[1.5rem] text-base text-center">
          You have added Fabric to your store catlog!{" "}
        </p>

        <div className="flex gap-[1rem] mt-7">
          <Button className="bg-[#D9D9D9] text-[#4D4D4D] uppercase px-8 font-semibold text-sm">
            Save Draft
          </Button>
          <Button
            className="bg-dark-pink font-semibold px-6 uppercase text-sm"
            color="primary"
          >
            Publish Fabric Details
          </Button>
        </div>
        <div className="md:mt-[11.3rem] mt-20">
          <Link href={"/dashboard"}>
            <Button className="bg-[#D9D9D9] text-[#4D4D4D] uppercase px-8 font-semibold text-sm">
              Back To Home
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
