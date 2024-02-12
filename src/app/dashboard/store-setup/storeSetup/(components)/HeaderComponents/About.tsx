import { ModalComponent } from "@/components/Modal/Modal";
import { ModalInput } from "@/components/Modal/ModalInput";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { ModalUploadLandscape } from "@/components/Modal/ModalUploadLandscape";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { SlPencil } from "react-icons/sl";

export interface AboutProps {}

export function About(props: AboutProps): ReactElement {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const { register } = useForm();
  const ModalContent = (
    <div>
      <ModalInput
        id="title"
        register={register}
        heading="Title"
        placeholder="Enter Price"
        width={"w-full"}
      />
      <ModelTextArea
        register={register}
        id="description"
        heading="Description"
        placeholder="Type Description"
        width={"w-full"}
      />
      <ModalUploadLandscape heading="Add Image" size="1100px X 660px" />
      <div className="flex items-center justify-center">
        <Button className="bg-dark-pink text-white "> Save</Button>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <div className="md:mb-5 mb-3 flex md:flex-row flex-col md:gap-5 gap-2 justify-between">
          <h2 className="md:text-4xl text-2xl font-medium font-jost">
            About Merina Clothing
          </h2>
          <div className="flex items-center gap-8">
            <div className="flex flex-col md:gap-2">
              <span className="text-[#606060] text-sm">Sales</span>
              <span className="md:text-2xl text-xl font-medium font-jost">
                8,249
              </span>
            </div>
            <div className="flex flex-col md:gap-2">
              <span className="text-[#606060] text-sm">On Lovoj since</span>
              <span className="md:text-2xl text-xl font-medium font-jost">
                2021
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="">
            <Image
              className="w-screen object-cover h-[550px]"
              src="/Images/merina/about-banner.svg"
              alt="banner"
              width={800}
              height={800}
            />
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex justify-between items-center">
              <h2 className="md:text-4xl text-2xl font-medium font-jost max-md:hidden">
                About Merina Clothing
              </h2>
              <Button
                onClick={onOpen}
                className="bg-white border-dark-pink border rounded-full"
                startContent={<SlPencil />}
              >
                Edit “About Store”{" "}
              </Button>
              <ModalComponent
                modalContent={ModalContent}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              />
            </div>
            <p className="text-[#242424] max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum doloreLorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
