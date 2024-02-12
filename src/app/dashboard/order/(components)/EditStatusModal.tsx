"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import { Modal } from "@/components";

const STATUS = [
  "Order",
  "Quality Control",
  "Cutting",
  "Stitching",
  "Master",
  "Delivered",
];

export default function EditStatusModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal>
      <div
        className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
        onClick={onClose}
      >
        <IoClose className="text-lg" />
      </div>
      <h5 className="text-lg font-medium mb-7">Edit Status</h5>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center md:gap-8 gap-5 justify-between">
        {STATUS.map((i) => {
          return (
            <div key={i} className="flex items-center gap-2 text-[#8C8C8C]">
              <input className="w-5 h-5" type="radio" name="status" />
              <span>{i}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <button className="outline-none border border-dark-pink px-8 py-2 rounded-xl font-medium text-dark-pink text-sm">
          Update Status
        </button>
      </div>
    </Modal>
  );
}
