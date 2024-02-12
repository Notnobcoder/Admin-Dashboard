import { Button } from "@nextui-org/react";
import { IoIosCheckmark } from "react-icons/io";

export const CompltedSetup = () => {
  return (
    <div className="flex w-full h-[80%]  item-center  justify-center">
      <div className="flex items-center justify-center flex-col">
        <div className="lg:w-[150px] lg:h-[150px] w-[120px] mb-10 flex items-center justify-center rounded-full bg-[#02B914] h-[120px]">
          <IoIosCheckmark size={200} className="text-white" />
        </div>
        <h3 className="lg:text-5xl text-3xl text-center font-semibold">
          Product Setup Finished
        </h3>
        <div className="mt-9 gap-4 space-x-4">
          <Button
            size="lg"
            className="border border-dark-pink text-dark-pink rounded-full bg-transparent"
          >
            Edit
          </Button>
          <Button size="lg" className="bg-dark-pink text-white rounded-full">
            View Store
          </Button>
        </div>
      </div>
    </div>
  );
};
