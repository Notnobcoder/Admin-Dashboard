import React, { useState } from "react";
import ImageCropper from "../(components)/ImageCropper";
import { IoClose } from "react-icons/io5";

export default function AddFile({
  inputField,
  handleInputChange,
}: {
  inputField: { id: number; value: null };
  handleInputChange: (id: number, value: any) => void;
}) {
  const [imgUrl, setImgUrl] = useState<File | null>(null);

  const handleFileChange = (file: any) => {
    // setImagePreview(URL.createObjectURL(e.target.files[0]));
    // setFabImage(e.target.files[0]);
    // setfabImageName(e.target.files[0].name);
    setImgUrl(file);
  };

  const handleCroppedFile = (file: File) => {
    handleInputChange(inputField.id, file);
  };

  const removeImage = () => {
    handleInputChange(inputField.id, null);
    setImgUrl(null);
  };
  return (
    <div
      key={inputField.id}
      className="border border-[#E7E7F6] bg-[#00000005] w-full flex items-center justify-center aspect-square max-h-36 rounded-lg"
    >
      {inputField.value ? (
        <div className="h-full flex items-center justify-center p-4 relative">
          <div
            className="absolute z-50 right-1 top-1 bg-dark-pink w-6 h-6 flex items-center justify-center rounded-full text-white cursor-pointer"
            onClick={removeImage}
          >
            <IoClose className="text-lg" />
          </div>
          <img
            className="w-full h-full object-cover"
            src={URL.createObjectURL(inputField.value)}
            alt=""
          />
        </div>
      ) : (
        <label
          htmlFor={`AddFile${inputField.id}`}
          className="bg-[#FDDEF8] flex flex-col items-center justify-center h-16 aspect-video rounded-[0.45525rem]"
        >
          <div className="text-xl font-semibold">+</div>
          <h5 className="text-sm font-medium">Add File</h5>
          <input
            id={`AddFile${inputField.id}`}
            className="hidden"
            type="file"
            value={""}
            onChange={(e: any) => handleFileChange(e.target.files[0])}
          />
        </label>
      )}
      {imgUrl && (
        <ImageCropper
          {...{ initialUrl: imgUrl, handleCroppedFile }}
          clearImgUrl={() => setImgUrl(null)}
        />
      )}
    </div>
  );
}
