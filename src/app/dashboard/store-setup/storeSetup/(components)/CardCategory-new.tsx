import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { ModalUploadLandscape } from "@/components/Modal/ModalUploadLandscape";
import SwitchComponent1 from "@/components/Switch";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoPencil } from "react-icons/go";

export default function CardCategoryNew({ item }: { item: any; type: string }) {
  const { imgSrc, title } = item;

  const handleFabric = (fabric: string) => {};
  //

  const handleToggle = (isChecked: boolean) => {
    console.log("Switch is toggled:", isChecked);
  };

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const modalContent = (
    <div>
      <ModelTextArea
        heading={"Description"}
        placeholder={"Type Description"}
        width={"w-full"}
      />
      <ModalUploadLandscape heading="Image" size={"279  X 375  "} />
    </div>
  );

  return (
    <div>
      <div className="relative">
        <Image
          className="w-full md:h-[28rem] object-cover"
          src={imgSrc}
          alt="feature"
          width={200}
          height={200}
        />
        <div className="absolute top-4 right-2">
          <SwitchComponent1 />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <Link href="/dashboard/store-setup/add-ready-made">
            <Button
              color="primary"
              startContent={<GoPencil />}
              className="font-jost bg-dark-pink rounded-sm text-lg px-8"
              onClick={() => handleFabric(title)}
            >
              SETUP
            </Button>
          </Link>
        </div>
      </div>
      <div className="shadow-lg p-6 flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-center text-xl font-bold5">{title}</h3>
          <h3 className="text-center text-xl font-bold5"> ₹ 4,129 </h3>
        </div>
        <h5 className="text-left text-[#606060] text-md mt-4">
          Are you in search of a tailor-made suit that will elevate your
        </h5>
      </div>
    </div>
  );
}
