import { ModalComponent } from "@/components/Modal/Modal";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { useDisclosure, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";

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

export function FAQ() {
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
                <h4 className={`text-3xl font-normal`}>{item.title}</h4>
                {/* {item.id === active ? ( */}
                {/*   <FaMinus className="text-dark-pink text-xl" /> */}
                {/* ) : ( */}
                {/*   <FaPlus className="text-dark-pink text-xl" /> */}
                {/* )} */}
              </div>
              {active === item.id && (
                <motion.p
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {item.text}
                </motion.p>
              )}
            </div>
            {/* <div className="border-b border-dashed border-[#ABABAB]"></div> */}
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
