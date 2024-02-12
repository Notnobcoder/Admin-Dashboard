import { Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import AddMeasurementModal from "./AddMeasurementModal";
import { TakeMeasurments } from "./TakeMeasurments";
import { ToastContainer } from "react-toastify";

export const MShirtMeasurment = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allCategories, setAllCategories] = useState([]);
  const handleSubmit = async () => {};

  return (
    <div className="flex md:py-5 pt-3 flex-col items-center justify-center font-jost max-md:pb-32">
      <TakeMeasurments />
      <div className="md:mt-4">
        <Button
          color="primary"
          className="bg-dark-pink px-10 h-10 rounded-full"
          onClick={() => {
            onOpen();
          }}
        >
          Add New Measurement
        </Button>
      </div>
      <div className="flex items-center gap-3 mt-10">
        <div>
          <Button
            className="bg-transparent text-dark-pink border px-8 h-12 rounded-full border-dark-pink"
            onClick={handleSubmit}
          >
            Back
          </Button>
        </div>
        <div>
          <Button
            className="bg-dark-pink text-white border px-8 h-12 rounded-full border-dark-pink"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </div>
      </div>
      <ToastContainer className="text-sm z-[9999] relative" />
      <AddMeasurementModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        {...{ setAllCategories }}
      />
    </div>
  );
};
