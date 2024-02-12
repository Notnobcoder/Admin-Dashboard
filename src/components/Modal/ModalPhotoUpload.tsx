import Image from "next/image";
import { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";

type ModalPhotoUploadProps = {
  heading: string;
  size?: string;
};

export const ModalPhotoUpload: React.FC<ModalPhotoUploadProps> = ({
  heading,
  size,
}) => {
  const fileInputRef = useRef<any>(null);
  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [imageSrc, setImageSrc] = useState("" || null);
  return (
    <div className={`my-3`}>
      <h3 className="my-2 font-normal text-lg">{heading}</h3>
      <div className="border w-[146px] h-[146px] p-4 rounded-lg  border-black/30 ">
        {imageSrc ? (
          <div className="relative">
            <Image
              className="w-full h-[110px] object-cover"
              src={imageSrc}
              alt="image alt"
              width={200}
              height={200}
            />
            <div className="flex absolute top-0 right-2 items-center justify-center my-1">
              <AiFillCloseCircle
                size={24}
                className="cursor-pointer text-dark-pink"
                onClick={() => setImageSrc(null)}
              />
            </div>
          </div>
        ) : (
          <div className=" flex items-center h-full justify-center">
            <input
              ref={fileInputRef}
              id="files"
              type="file"
              className="bg-transparent hidden"
              onChange={(e) =>
                // @ts-ignore
                setImageSrc(URL.createObjectURL(e.target.files[0]))
              }
            />
            <div
              onClick={handleFileButtonClick}
              className="cursor-pointer flex items-center justify-center flex-col"
            >
              <FaCirclePlus size={50} for="files" className="text-dark-pink" />
              <div className="text-center">
                <h3 className="text-black/40 text-sm mt-4">
                  {size || "1920 X 800"}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
