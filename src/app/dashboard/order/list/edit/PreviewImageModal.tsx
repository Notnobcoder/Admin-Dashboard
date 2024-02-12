import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Modal } from "@/components";

export default function PreviewImageModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Modal>
      <div
        className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
        onClick={onClose}
      >
        <IoClose className="text-lg" />
      </div>
      <h5 className="text-lg font-medium mb-5">Image Full View</h5>
      <div className="w-full h-full flex items-center justify-center rounded-3xl md:min-h-[260px]">
        <Image
          className="w-full h-full"
          src="/Images/order/10.svg"
          alt=""
          width={80}
          height={80}
        />
      </div>
    </Modal>
  );
}
