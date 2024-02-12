"use client";

import React from "react";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import { Calender } from "@/components/Calender";
import { PageCard } from "./(components)/pageCard";
import Table from "./(components)/Table";
import AppointmentModal from "./(components)/AppointmentModal";
import { useDisclosure } from "@nextui-org/react";

const Root: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log("<admin>");

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <PageCard />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 lg:col-span-6">
          <ChartOne />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <ChartThree />
        </div>
        <div className="col-span-12 lg:col-span-3">
          {/* <button onClick={onOpen}>open</button> */}
          <Calender onClick={onOpen} />
          <AppointmentModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            title="Appointment Details"
            text="Are you sure to delete Store?"
          />
        </div>
        <div className="col-span-12 xl:col-span-12">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Root;
