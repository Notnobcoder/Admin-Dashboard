"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

type propsTypeD = {
  id: number;
  name: string;
  imgUrl: string;
};

export default function ListItem({ item }: { item: propsTypeD }) {
  const [isShow, setisShow] = useState(false);

  return (
    <Link
      href="/dashboard/order/list/edit"
      className="border border-light-purple bg-white px-5 py-2 rounded-xl"
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-8">
          <div>
            <Image
              className="rounded-full object-cover"
              src={item.imgUrl}
              alt=""
              width={24}
              height={24}
            />
          </div>
          <div className="font-medium">{item.name}</div>
        </div>
        <div
          className="text-dark-pink w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setisShow(!isShow)}
        >
          <MdArrowForwardIos
            className={`transition-all ${isShow ? "rotate-90" : ""}`}
          />
        </div>
      </div>
    </Link>
  );
}
