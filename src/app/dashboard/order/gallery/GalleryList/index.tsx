import Image from "next/image";
import React from "react";

type propsTypeD = {
  id: number;
  src: string;
};

export default function GalleryList({
  text,
  images,
}: {
  text: string;
  images: propsTypeD[];
}) {
  return (
    <div>
      <h6 className="mb-5 flex items-center gap-3">
        <span className="font-medium">{text}</span>
        <div className="border-b border-dashed border-[#D9D9D9] flex-1"></div>
      </h6>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-2 md:gap-8 gap-5">
        {images.map((i) => {
          return (
            <Image
              className="w-full object-cover rounded-xl"
              key={i.id}
              src={i.src}
              alt=""
              width={100}
              height={100}
            />
          );
        })}
      </div>
    </div>
  );
}
