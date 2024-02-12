import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Modal } from "@/components";

export default function UploadModal({
  onClose,
  text,
  setImage,
  image,
}: {
  onClose: () => void;
  text: string;
  setImage: (e: any) => void;
  image: { name: string };
}) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Use optional chaining to handle null value
    if (selectedFile) {
      setImage(selectedFile);
      // onClose();
    }
  };

  return (
    <Modal classes={"md:min-w-[300px]"}>
      <div
        className="absolute right-5 top-5 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
        onClick={onClose}
      >
        <IoClose className="text-lg" />
      </div>
      <h5 className="text-lg font-medium mb-7">{text}</h5>
      {image.name ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <Image
            src="/Images/order/shirt.svg"
            alt=""
            width={150}
            height={150}
          />
          <button className="border border-dark-pink text-dark-pink md:px-5 px-3 py-2 rounded-xl w-full">
            Save
          </button>
        </div>
      ) : (
        <div className="flex gap-5 justify-evenly pb-2">
          <div>
            <div className="border border-[#E8E6EA] rounded-2xl p-5">
              <Image
                src="/Images/order/camera.svg"
                alt="camera"
                width={40}
                height={40}
              />
            </div>
            <span className="text-xs text-[#8C8C8C] text-center w-full inline-block mt-2">
              Camera
            </span>
          </div>
          <div>
            <label
              htmlFor="gallery"
              className="border border-[#E8E6EA] rounded-2xl p-5 relative block"
            >
              <Image
                src="/Images/order/gallery.svg"
                alt="gallery"
                width={40}
                height={40}
              />
              <input
                id="gallery"
                className="absolute pointer-events-none opacity-0"
                type="file"
                onChange={handleImageChange}
              />
            </label>
            <span className="text-xs text-[#8C8C8C] text-center w-full inline-block mt-2">
              Gallery
            </span>
          </div>
        </div>
      )}
    </Modal>
  );
}
