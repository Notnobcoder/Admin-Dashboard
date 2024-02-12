import { ModalComponent } from "@/components/Modal/Modal";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { ModalUploadLandscape } from "@/components/Modal/ModalUploadLandscape";
import SwitchComponent1 from "@/components/Switch";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoPencil } from "react-icons/go";

export default function CardCategory({
  item,
  type,
}: {
  item: any;
  type: string;
}) {
  const { imgSrc, title } = item;

  const handleFabric = () => {};

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const modalContent = (
    <div>
      {/* @ts-ignore */}
      <ModelTextArea heading={"Description"} placeholder={"Type Description"} />
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
        {/* on off switch end */}
        <div className="absolute  m-auto transform -translate-x-1/2 -translate-y-1/2 bottom-6 left-1/2  ">
          <Button
            className="rounded-full bg-white text-[#606060] border border-gray-2 w-12"
            startContent={<GoPencil />}
            onClick={onOpen}
          >
            Edit
          </Button>
          <ModalComponent
            modalContent={modalContent}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            title="Edit Product Details"
          />
        </div>
        <Link
          href={`/dashboard/product-setup/${type}/${title}`}
          className="absolute bottom-0 left-0 right-0 text-center"
        >
          {/* <Link href="/fabric-form"> */}
          <Button
            color="primary"
            startContent={<GoPencil />}
            className="font-jost bg-dark-pink rounded-sm text-lg px-8"
            // onClick={() => handleFabric()}
          >
            SETUP
          </Button>
          {/* </Link> */}
        </Link>
      </div>
      <div className="shadow-lg p-3">
        <h3 className="text-center text-xl font-bold5">{title}</h3>
        <p className="text-center text-[#606060] text-sm mt-4">
          Are you in search of a tailor-made suit that will elevate your
        </p>
      </div>
    </div>
  );
}
