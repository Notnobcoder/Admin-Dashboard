import { ModalComponent } from "@/components/Modal/Modal";
import { ModalDropdown } from "@/components/Modal/ModalDropdown";
import { ModalInput } from "@/components/Modal/ModalInput";
import { ModalPhotoUpload } from "@/components/Modal/ModalPhotoUpload";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { ModalUploadLandscape } from "@/components/Modal/ModalUploadLandscape";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { LuPencil } from "react-icons/lu";

type HeaderContainerProps = {};

export const HeaderContainer: React.FC<HeaderContainerProps> = ({}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // modal content
  const ModelBorderValue = [
    { id: 1, heading: "Tailor / Boutique " },
    { id: 2, heading: "Designer" },
    { id: 3, heading: "Alteration" },
  ];

  const ModalContent = (
    <div className="h-[40vh] scrollbar  scrollbar-track-gray scrollbar-thumb-dark-pink  scrollbar-thumb-rounded-full  overflow-auto pr-4">
      {/* modal input */}
      <ModalInput
        heading={"Store Name"}
        placeholder={"Enter Name"}
        width={"w-full"}
      />
      {/* modal dropdown */}
      <ModalDropdown
        heading={"Store Type"}
        ModelBorderValue={ModelBorderValue}
      />
      {/* model text area */}
      <ModelTextArea
        heading={"Store Description"}
        placeholder="Type Description"
        width={"w-full"}
      />
      {/* model photo upload */}
      <ModalPhotoUpload heading="Upload Logo" />
      <ModalUploadLandscape heading="Upload Cover Image" size={""} />
    </div>
  );
  const FooterContent = (
    <div className="flex items-center justify-center">
      <Button className="bg-dark-pink text-white">Submit</Button>
    </div>
  );
  return (
    <div className="relative font-jost">
      <Image
        className="w-full h-full "
        src={`/rearrange/storeSetup/banner.svg`}
        width={800}
        height={800}
        alt="image"
      />
      <div className="absolute top-[4rem] left-4 md:px-6 lg:px-25 p-2">
        <Button
          startContent={<LuPencil />}
          className="bg-white lg:p-4 lg:text-md p-4 rounded-full shadow-md border border-gray text-black"
          onClick={onOpen}
        >
          Edit Store Details
        </Button>
        <ModalComponent
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          modalContent={ModalContent}
          title="Edit Store Details"
          footerContent={FooterContent}
        />

        <div className={`mt-6`}>
          <h4 className={`text-3xl md:text-4xl lg:text-6xl font-jost`}>
            Merina Clothing
          </h4>
          <p className={`text-md mt-8 lg:w-[45%] w-[80%]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco l
          </p>
        </div>
      </div>
    </div>
  );
};
