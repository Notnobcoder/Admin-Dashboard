"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import UploadModal from "./UploadModal";

type propsTypeD = {
  id: number;
  src: string;
  alt: string;
};

export default function Box({ item }: { item: propsTypeD }) {
  const [upload, setUpload] = useState(false);
  const [image, setImage] = useState({ name: "" });
  return (
    <>
      <div
        className="border border-[#E8E6EA] rounded-xl aspect-video flex items-center justify-center cursor-pointer flex-1 relative"
        onClick={() => setUpload(true)}
      >
        <Image
          className="w-[50%] h-[50%] max-w-[70px] max-h-[70px]"
          src={item.src}
          alt={item.alt}
          width={50}
          height={50}
        />
        <div
          className="absolute border border-white right-2 top-2 bg-black w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
          // onClick={onClose}
        >
          <IoClose className="text-lg" />
        </div>
      </div>
      {upload && item.id === 1 && (
        <UploadModal
          {...{ text: "Add Photos", image, setImage }}
          onClose={() => {
            setUpload(false);
            setImage({ name: "" });
          }}
        />
      )}
    </>
  );
}
