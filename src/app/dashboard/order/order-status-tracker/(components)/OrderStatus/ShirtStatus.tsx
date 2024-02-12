// @ts-nocheck
"use client";
import { Button, Radio, RadioGroup, cn } from "@nextui-org/react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useApp } from "@/context/AppProvider";

const FABRIC_ITEM = [
  { id: 1, heading: "Fabric Cutting", paragraph: "2 Mtr" },
  { id: 2, heading: "Fabric Available", paragraph: "82 Mtr" },
  { id: 3, heading: "Stock Location", paragraph: "In Shop" },
];

const ORDER_MODAL_DATA = [
  { id: 0, heading: "Order" },
  { id: 1, heading: "Cutting" },
  { id: 2, heading: "MasterTailor" },
  { id: 3, heading: "Stitching" },
  { id: 4, heading: "Quality Control" },
  { id: 5, heading: "Delivered" },
];

type ShirtStatusProps = {};

export const ShirtStatus: React.FC<ShirtStatusProps> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalstep, setModalStep] = useState(0);
  const { setOrderCurrentStep } = useApp();

  const handleClose = () => {
    setOrderCurrentStep(modalstep);
  };

  return (
    <div className="flex justify-around ">
      <div className="flex items-center gap-2">
        <Image
          src={"/orderNew/Front1.png"}
          width={212}
          height={317}
          alt="Front image"
        />
        <Image
          src={"/orderNew/Back1.png"}
          width={212}
          height={317}
          alt="Front image"
        />
      </div>
      <div>
        <div className="flex items-center gap-40">
          <h4 className="text-2xl ">Shirt</h4>
          <Button
            onPress={onOpen}
            className="bg-dark-pink text-white rounded-full"
          >
            Edit Status
          </Button>
          <Modal
            className="z-[200]"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            hideCloseButton
            size="sm"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex justify-between  items-center gap-1">
                    Edit Status
                    <div className="flex items-center justify-end">
                      <IoMdCloseCircle
                        className="text-dark-pink cursor-pointer"
                        onClick={onClose}
                        size={25}
                      />
                    </div>
                  </ModalHeader>

                  <ModalBody className="flex items-center justify-center">
                    <RadioGroup
                      size="sm"
                      // orientation="horizontal"
                      value={modalstep}
                      onValueChange={setModalStep}
                    >
                      <div className="w-full gap-10 grid grid-cols-2 ">
                        {ORDER_MODAL_DATA.map((_) => (
                          <div key={_.id}>
                            <Radio
                              color="#f603d0"
                              classNames={{
                                base: cn(
                                  " gap-1  ",
                                  "data-[selected=true]:text-dark-pink",
                                ),
                              }}
                              value={_.id}
                              size="sm"
                            >
                              {_.heading}
                            </Radio>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </ModalBody>
                  <ModalFooter className="flex items-center justify-center">
                    <Button
                      className="bg-white border border-dark-pink text-dark-pink"
                      onPress={onClose}
                      onClick={handleClose}
                    >
                      Update Status
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <h4 className="text-sm">
            Fabric Name :<span> Mayfield</span>{" "}
          </h4>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Fabric</h4>
            <p className="text-lg">Fabric No.: F2045</p>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <Image
              className="w-[140px] h-[100px]"
              src={"/orderNew/Green.png"}
              width={300}
              height={300}
              alt="square Image"
            />
            <div>
              <h4>
                Special <br /> Cotton
              </h4>
            </div>
          </div>
          <div className="mt-4">
            {FABRIC_ITEM.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between w-[80%]"
              >
                <h3 className="text-sm font-bold">{item.heading}</h3>
                <p className="text-sm text-dark-pink">{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
