React;
import React, { type ReactElement } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { IoCloseCircleSharp } from "react-icons/io5";

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  modalContent: React.ReactElement;
  title?: string;
  footerContent?: React.ReactElement;
  size?: "xs" | "md" | "lg" | "xl" | "2xl";
}

export function ModalComponent(props: ModalProps): ReactElement {
  const { isOpen, onOpenChange, modalContent, title, footerContent, size } =
    props;
  return (
    <>
      <Modal
        size={size || "md"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                <div
                  className={`flex items-center text-2xl  justify-center relative`}
                >
                  {title && <h3 className="font-normal">{title}</h3>}
                  <div className={"absolute top-2 right-2"}>
                    <IoCloseCircleSharp
                      size={32}
                      className="text-dark-pink cursor-pointer"
                      onClick={onClose}
                    />
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>{modalContent}</ModalBody>
              <ModalFooter>{footerContent}</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
