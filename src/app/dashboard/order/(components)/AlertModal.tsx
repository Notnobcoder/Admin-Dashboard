"use client";

import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { Modal } from "@/components";

export default function AlertModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal>
      <div
        className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
        onClick={onClose}
      >
        <IoClose className="text-lg" />
      </div>
      <h5 className="text-lg font-medium mb-3">Alert</h5>
      <div className="text-[#8C8C8C]">Status updated successfully</div>
      <div className="mt-10 text-center">
        <button className="outline-none border border-dark-pink px-12 py-2 rounded-xl font-medium text-dark-pink text-sm">
          Ok
        </button>
      </div>
    </Modal>
  );
}
