"use client";

import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { Modal } from "@/components";

export default function ConfirmModal({
  onClose,
  onRemove,
}: {
  onClose: () => void;
  onRemove: () => void;
}) {
  return (
    <Modal>
      <div
        className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
        onClick={onClose}
      >
        <IoClose className="text-lg" />
      </div>
      <h5 className="text-lg font-medium mb-5">Confirm</h5>
      <div className="text-[#8C8C8C]">Are you really want to delete image </div>
      <div className="mt-10 flex items-center gap-8 justify-center">
        <button
          className="outline-none border border-dark-pink px-5 min-w-[100px] py-2 rounded-xl font-medium text-dark-pink text-sm"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="outline-none border border-dark-pink px-5 min-w-[100px] py-2 rounded-xl font-medium text-dark-pink text-sm"
          onClick={onRemove}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
}
