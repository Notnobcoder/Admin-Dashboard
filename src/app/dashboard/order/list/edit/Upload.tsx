"use client";

import Image from "next/image";
import React, { useState } from "react";
import UploadModal from "./UploadModal";
import PreviewImageModal from "./PreviewImageModal";
import { RiDeleteBin7Line } from "react-icons/ri";
import ConfirmModal from "./ConfirmModal";

export default function Upload({ text }: { text: string }) {
  const [upload, setUpload] = useState(false);
  const [preview, setPreview] = useState(false);
  const [cModal, setCModal] = useState(false);
  const [image, setImage] = useState({ name: "" });

  return (
    <>
      <div className="flex-1">
        <div className="border-2 border-[#E8E6EA] aspect-video bg-[#EDEDED] rounded-3xl flex items-center justify-center cursor-pointer relative">
          {image.name ? (
            <>
              <div
                className="w-full h-full flex items-center justify-center rounded-3xl"
                onClick={() => setPreview(true)}
              >
                <Image
                  className="w-full h-full"
                  src="/Images/order/10.svg"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div
                className="absolute md:right-4 right-3 md:top-4 top-3 md:w-8 md:h-8 w-6 h-6 flex items-center justify-center rounded-full text-dark-pink hover:bg-light-pink cursor-pointer"
                onClick={() => setCModal(true)}
              >
                <RiDeleteBin7Line className="text-lg" />
              </div>
            </>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center rounded-3xl"
              onClick={() => setUpload(true)}
            >
              <Image
                className="w-[50%] h-[50%] max-w-[80px] max-h-[80px]"
                src="/Images/order/upload.svg"
                alt=""
                width={80}
                height={80}
              />
            </div>
          )}
        </div>
        <div className="text-center mt-3 font-medium text-lg">{text}</div>
      </div>
      {upload && (
        <UploadModal {...{ text, setImage }} onClose={() => setUpload(false)} />
      )}
      {preview && <PreviewImageModal onClose={() => setPreview(false)} />}
      {cModal && (
        <ConfirmModal
          onRemove={() => {
            setImage({ name: "" });
            setCModal(false);
          }}
          onClose={() => setCModal(false)}
        />
      )}
    </>
  );
}
