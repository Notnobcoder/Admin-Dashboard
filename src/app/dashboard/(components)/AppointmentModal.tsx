"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Calender } from "@/components/Calender";
import AppointmentDetails from "./AppointmentDetails";
import { BiSolidUpArrow } from "react-icons/bi";
import styled from "styled-components";

const Weak_Days = [
  {
    id: 1,
    day: "Mon",
    date: "9",
  },
  {
    id: 2,
    day: "Tue",
    date: "10",
  },
  {
    id: 3,
    day: "Wed",
    date: "11",
  },
  {
    id: 4,
    day: "Thu",
    date: "12",
  },
  {
    id: 5,
    day: "Fri",
    date: "13",
  },
  {
    id: 6,
    day: "Sat",
    date: "14",
  },
  {
    id: 7,
    day: "Sun",
    date: "15",
  },
];

type propsTypeD = {
  title: string;
  text: string;
  isOpen: any;
  onOpenChange: any;
};

export default function AppointmentModal({
  title,
  text,
  isOpen,
  onOpenChange,
}: propsTypeD) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton={true}
      className="p-8 md:max-w-5xl max-w-[96%]"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div
              className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
              onClick={onClose}
            >
              <IoClose className="text-lg" />
            </div>
            <h5 className="text-xl font-medium mb-5">{title}</h5>
            <div>
              <div className="flex items-end gap-5 mb-3">
                <div className="flex-1 text-lg font-medium text-[#4D4D4D]">
                  Select Date
                </div>
                <div className="flex-[2] flex gap-3 justify-between relative">
                  {Weak_Days.map((i) => {
                    return (
                      <div
                        key={i.id}
                        className="flex flex-col items-center gap-2"
                      >
                        <span className="text-[#4D4D4D] font-medium uppercase">
                          {i.day}
                        </span>
                        <span
                          className={`text-black font-medium px-5 py-1 rounded-full ${
                            i.id === 3 ? "bg-[#D9D9D9]" : ""
                          }`}
                        >
                          {i.date}
                        </span>
                        {i.id === 3 && (
                          <span className="absolute -bottom-4 text-[#D9D9D9]">
                            <BiSolidUpArrow />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-start gap-5 h-full">
                <div className="flex-1 h-full">
                  <Calender />
                </div>
                <div className="flex-[2] w-full border border-[#e2e8f0] h-full py-3 px-2 rounded-lg">
                  <AppointmentBox className="w-full h-full px-3 md:max-h-96 max-h-72 overflow-y-auto">
                    <h5 className="text-lg font-medium mb-5">
                      Appointment Details
                    </h5>
                    <div className="flex flex-col gap-3">
                      <AppointmentDetails />
                      <AppointmentDetails />
                      <AppointmentDetails />
                    </div>
                  </AppointmentBox>
                </div>
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

const AppointmentBox = styled.div`
  /* width */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(230, 230, 230, 0.7);
    border-radius: 10rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #242424;
    border-radius: 10rem;
  }
`;
