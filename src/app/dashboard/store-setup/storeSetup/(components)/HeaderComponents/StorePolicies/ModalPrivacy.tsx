import { ModalComponent } from "@/components/Modal/Modal";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { Button, useDisclosure } from "@nextui-org/react";
import { type ReactElement } from "react";
import { LuPencil } from "react-icons/lu";

export interface ModalPrivacyProps {}

export function ModalPrivacy(props: ModalPrivacyProps): ReactElement {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const modalContent = (
    <div>
      <ModelTextArea
        heading="Privacy Policy"
        placeholder="Enter Store Privacy Policy"
        width="w-full"
      />
    </div>
  );

  const footerContent = (
    <div className="flex item-center justify-center w-full">
      <Button className="bg-dark-pink text-white">Save</Button>
    </div>
  );
  return (
    <>
      <div>
        <Button
          onClick={onOpen}
          className="bg-white border-[2px] border-dark-pink rounded-full hover:bg-dark-pink text-black hover:text-white"
          startContent={<LuPencil />}
        >
          Edit Store Policies
        </Button>
        <ModalComponent
          isOpen={isOpen}
          modalContent={modalContent}
          onOpenChange={onOpenChange}
          footerContent={footerContent}
        />
      </div>
    </>
  );
}
