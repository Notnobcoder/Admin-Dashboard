import { ModalComponent } from "@/components/Modal/Modal";
import { Button, useDisclosure } from "@nextui-org/react";
import { useState, type ReactElement } from "react";
import { LuPencil } from "react-icons/lu";

export interface ModalCancellationProps {}

export function ModalCancellation(): ReactElement {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState(1);
  const StorePoliciesYN_Data = [
    { id: 1, heading: "Yes" },
    { id: 2, heading: "No" },
  ];
  const modalContent = (
    <div className="px-8 pb-8">
      {/* cancelation expected */}
      <div className="my-4 ">
        <h3 className="font-bold">Cancelation Accepted</h3>
        <div className="space-x-4 mt-4">
          {StorePoliciesYN_Data.map((_item) => (
            <Button
              onClick={() => setSelected(_item.id)}
              className={`${
                _item.id === selected
                  ? "bg-dark-pink text-white"
                  : "bg-white border border-black/30"
              }`}
              size={"md"}
              key={_item.id}
            >
              {_item.heading}
            </Button>
          ))}
        </div>
      </div>
      {/* cancelation request */}
      <div className="mt-4">
        <h3 className="font-bold">Cancelation Request</h3>
        <div
          className={
            "flex items-center justify-between w-full border border-black/30 rounded-lg mt-4"
          }
        >
          <input
            style={{ borderRadius: "inherit" }}
            className="outline-none p-2 w-[70%] "
            placeholder="Enter in Hrs or Days"
          />
          <select className="border-l p-2 bg-white w-[30%] border-l-black/30 rounded-r-lg">
            <option className="bg-white">Hours</option>
            <option> Days</option>
          </select>
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex items-center w-full justify-center">
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
          modalContent={modalContent}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          footerContent={footerContent}
        />
      </div>
    </>
  );
}
