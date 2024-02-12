import { type ReactElement } from "react";

export interface ReviewsProps {}

import Image from "next/image";
import React from "react";
import StarRating from "@/components/StarRating";

function Card() {
  return (
    <div>
      <div className="flex items-center md:gap-8 gap-5">
        <div>
          <Image
            className="min-w-[90px]"
            src="/Images/merina/review-1.svg"
            alt=""
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col md:gap-3 gap-1">
          <div className="flex items-center gap-3">
            <span className="font-medium text-sm">Jen</span>
            <span className="text-sm">8 Aug,2023</span>
          </div>
          {/* new code */}
          <StarRating rating={3} />
          <p className="text-[#606060]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-5 md:my-10 my-5 border-b-1 border-dashed border-[#ABABAB]/70 pb-5">
        <div className="">
          <Image
            className="w-full"
            src="/Images/merina/review-2.svg"
            alt="banner"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#242424] max-w-4xl font-medium md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
      </div>
    </div>
  );
}

export function Reviews(props: ReviewsProps): ReactElement {
  return (
    <>
      <div>
        <div className="flex items-center gap-5 justify-between mb-10">
          <h4 className="text-3xl font-semibold">Reviews</h4>
          <select className="bg-[#F1F1F1] outline-none border-none px-3 py-2 rounded-md">
            <option value="1">Sort: Relevance</option>
          </select>
        </div>
        <div className="flex flex-col md:gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
