import { useApp } from "@/context/AppProvider";
import { AppleImage, GooglePlayImage } from "@/imageLinks";
import Image from "next/image";
import React from "react";

export default function LeftContent() {
  const { adminName, setAdminName } = useApp();
  return (
    <div className="flex-[1.5] flex flex-col gap-5 items-center px-10 text-center max-md:hidden">
      <h2 className="text-5xl font-semibold">{adminName}</h2>
      <h4 className="text-3xl text-dark-pink font-semibold">
        Register with Lovoj to display your Digital Catalogue!
      </h4>
      <p>
        LOVOJ stands as a unique platform for customized tailor & designer
        clothing, offering a marketplace for bespoke clothing. For the first
        time, consumers have the opportunity to browse and purchase tailor-made
        garments online, selecting from a diverse array of designers, tailors,
        and boutiques
      </p>
      <div>
        <h6 className="text-2xl font-medium font-jost text-center mb-5">
          Download Our App
        </h6>
        <div className="flex items-center gap-5">
          <a
            href="https://play.google.com/store/apps/details?id=com.lovoj.lovojpartner"
            target="_blank"
          >
            <Image
              src={GooglePlayImage}
              className="w-40"
              alt="google play"
              width={202}
              height={60}
            />
          </a>
          <Image
            src={AppleImage}
            className="w-40"
            alt="apple play"
            width={203}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
