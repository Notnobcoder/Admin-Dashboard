import { ModalComponent } from "@/components/Modal/Modal";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { Button, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState, type ReactElement } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";

export interface StorePoliciesProps {}

const FAQs = [
  {
    id: 1,
    title: "Shipping Address",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 2,
    title: "Sizing details",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 3,
    title: "Care instructions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 4,
    title: "Wholesale availability",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 5,
    title: "How to pay with credit card via PayPal?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
];

const POLICIES = [
  {
    id: 1,
    title: "Delivery",
    text: "See item details for estimated arrival times.",
  },
  {
    id: 2,
    title: "Payment options",
    text: "Lovoj keeps your payment information secure. Lovoj stores never receive your payment information",
  },
  {
    id: 3,
    title: "Returns & exchanges",
    text: "See item details for return and exchange eligibility.",
  },
  {
    id: 4,
    title: "Cancellations",
    text: `Cancellations Accepted: Yes 

Cancellation Request: Within 1 hour of Purchase
`,
  },
  {
    id: 5,
    title: "Privacy Policy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const toggleActive = (id: number) => {
    setActive((prevActive) => (prevActive === id ? 0 : id));
  };

  const modalContent = (
    <div className="px-10 ">
      <ModelTextArea
        heading="Frequently Asked Questions"
        placeholder="Enter Store Frequently Asked Questions"
        width={"w-full"}
      />
    </div>
  );

  const footerContent = (
    <div className="flex items-center w-full justify-center">
      <Button className="bg-dark-pink text-white">Save</Button>
    </div>
  );
  return (
    <div className="md:mt-20 mt-14">
      <div className="flex items-center justify-between pr-44">
        <h4 className="text-3xl font-semibold">Frequently asked questions</h4>
        <div>
          <Button
            onClick={onOpen}
            className="bg-white border-[2px] border-dark-pink rounded-full hover:bg-dark-pink text-black hover:text-white"
            startContent={<LuPencil />}
          >
            Edit Store Policies
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {FAQs.map((item) => (
          <div key={item.id}>
            <div
              className="flex flex-col gap-4 pb-5 cursor-pointer bg-red-30"
              onClick={() => toggleActive(item.id)}
            >
              <div className="flex gap-5 justify-between">
                <h4 className={`text-2xl font-semibold`}>{item.title}</h4>
                {item.id === active ? (
                  <FaMinus className="text-dark-pink text-xl" />
                ) : (
                  <FaPlus className="text-dark-pink text-xl" />
                )}
              </div>
              {active === item.id && (
                <motion.p
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{
                    duration: 0.3,
                    // ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  {item.text}
                </motion.p>
              )}
            </div>
            <div className="border-b border-dashed border-[#ABABAB]"></div>
          </div>
        ))}
      </div>
      <ModalComponent
        size="xl"
        modalContent={modalContent}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        footerContent={footerContent}
      />
    </div>
  );
}

export function StorePolicies(): ReactElement {
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
        <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between mb-10">
          <div>
            <h4 className="text-3xl font-semibold">Shop Policies</h4>
            <div className="text-[#606060] text-sm">
              Last updated on 03 Mar, 2021
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {POLICIES.map((i) => {
            return (
              <div className="flex flex-col gap-4" key={i.id}>
                <div className="flex items-center justify-between pr-44">
                  <h4 className="text-2xl font-semibold">{i.title}</h4>
                  <div>
                    <Button
                      onClick={onOpen}
                      className="bg-white border-[2px] border-dark-pink rounded-full hover:bg-dark-pink text-black hover:text-white"
                      startContent={<LuPencil />}
                    >
                      Edit Store Policies
                    </Button>
                  </div>
                </div>
                <p>{i.text}</p>
                <hr className="text-[#D9D9D9] w-[95%] " />
              </div>
            );
          })}
          <ModalComponent
            modalContent={modalContent}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            footerContent={footerContent}
          />
        </div>
        <FAQ />
      </div>
    </>
  );
}
