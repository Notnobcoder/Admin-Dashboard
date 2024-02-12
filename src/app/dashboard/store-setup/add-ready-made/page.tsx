"use client";
import { ModalInput } from "@/components/Modal/ModalInput";
import { ModelTextArea } from "@/components/Modal/ModalTextArea";
import { RandomArrayGenerator } from "@/utils/randomArray";
import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const SizeData = [
  { id: 1, heading: "XS" },
  { id: 2, heading: "S" },
  { id: 3, heading: "M" },
  { id: 4, heading: "L" },
  { id: 5, heading: "Xl" },
  { id: 6, heading: "xxl" },
];

const CameraCustomSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.794 13.461C23.595 9.531 27.093 6.75 31.098 6.75H40.902C44.907 6.75 48.402 9.531 49.206 13.461C49.2946 13.8938 49.5263 14.2841 49.8636 14.5693C50.201 14.8544 50.6245 15.0177 51.066 15.033H51.165C55.374 15.219 58.608 15.735 61.308 17.508C63.009 18.624 64.473 20.058 65.613 21.735C67.032 23.817 67.656 26.211 67.956 29.103C68.25 31.932 68.25 35.475 68.25 39.963V40.218C68.25 44.706 68.25 48.252 67.956 51.078C67.656 53.97 67.032 56.364 65.613 58.449C64.4694 60.127 63.0066 61.5633 61.308 62.676C59.199 64.059 56.778 64.671 53.844 64.962C50.97 65.25 47.367 65.25 42.789 65.25H29.211C24.633 65.25 21.03 65.25 18.156 64.962C15.222 64.671 12.801 64.062 10.692 62.676C8.99312 61.5624 7.53027 60.125 6.387 58.446C4.968 56.364 4.344 53.97 4.044 51.078C3.75 48.252 3.75 44.706 3.75 40.218V39.963C3.75 35.475 3.75 31.932 4.044 29.103C4.344 26.211 4.968 23.817 6.387 21.735C7.53027 20.056 8.99312 18.6186 10.692 17.505C13.392 15.735 16.626 15.219 20.835 15.036L20.886 15.033H20.934C21.3755 15.0177 21.799 14.8544 22.1364 14.5693C22.4737 14.2841 22.7054 13.8938 22.794 13.461ZM31.098 11.25C29.178 11.25 27.567 12.579 27.204 14.358C26.619 17.238 24.063 19.506 20.988 19.533C16.944 19.713 14.778 20.208 13.158 21.27C11.9546 22.0597 10.918 23.0779 10.107 24.267C9.279 25.482 8.781 27.039 8.517 29.568C8.253 32.136 8.25 35.448 8.25 40.092C8.25 44.736 8.25 48.045 8.52 50.613C8.781 53.142 9.279 54.699 10.11 55.917C10.914 57.099 11.949 58.119 13.161 58.911C14.412 59.733 16.014 60.228 18.603 60.486C21.225 60.747 24.603 60.75 29.334 60.75H42.666C47.394 60.75 50.772 60.75 53.397 60.486C55.986 60.228 57.588 59.736 58.839 58.914C60.051 58.119 61.089 57.099 61.893 55.914C62.721 54.699 63.219 53.142 63.483 50.613C63.747 48.045 63.75 44.733 63.75 40.092C63.75 35.448 63.75 32.136 63.48 29.568C63.219 27.039 62.721 25.482 61.89 24.267C61.0799 23.0763 60.0431 22.0569 58.839 21.267C57.225 20.208 55.059 19.713 51.009 19.533C47.937 19.503 45.381 17.241 44.796 14.358C44.604 13.4708 44.1117 12.6771 43.4023 12.1108C42.6928 11.5446 41.8097 11.2405 40.902 11.25H31.098Z"
        fill="#F703D0"
      />
      <path
        d="M52.409 28.409C51.9871 28.831 51.75 29.4033 51.75 30C51.75 30.5967 51.9871 31.169 52.409 31.591C52.831 32.0129 53.4033 32.25 54 32.25H57C57.5967 32.25 58.169 32.0129 58.591 31.591C59.0129 31.169 59.25 30.5967 59.25 30C59.25 29.4033 59.0129 28.831 58.591 28.409C58.169 27.9871 57.5967 27.75 57 27.75H54C53.4033 27.75 52.831 27.9871 52.409 28.409Z"
        fill="black"
      />
      <circle cx="34.5" cy="37.5" r="8.5" stroke="black" stroke-width="4" />
    </svg>
  );
};

export default function AddReadyMade() {
  const [selectedDataSize, setSelectedDataSize] = useState(1);

  const handleValue = (data: any) => {
    console.log("clicked");
    console.log(data);
  };
  const url = `https://fabricssoftware.com/api/v1/SetupsforUser/admin-add-readymadeProductForUser`;

  const { register, handleSubmit } = useForm();

  const handleClick = () => {
    console.log("hello world");
  };
  return (
    <>
      <div className="p-6">
        <div>
          <ModalInput
            heading={"Product Name"}
            placeholder="Product Name"
            width={"lg:w-[40%]"}
            id="productName"
            register={register}
          />
          {/* product image */}
          <div className="mb-8">
            <h3 className="my-2 font-normal text-lg">Product Image</h3>
            <div className="grid grid-cols-4 gap-4">
              {RandomArrayGenerator(1, 0).map((_item) => (
                <div
                  key={_item}
                  className="border h-[400px] row-span-1 flex items-center justify-center"
                >
                  <div className="cursor-pointer" onClick={handleClick}>
                    <CameraCustomSvg />
                  </div>
                  <input className="hidden" />
                </div>
              ))}
              {/* <div className="border flex items-center row-span-1 justify-center h-[400px] col-span-2"> */}
              {/*   <FaCirclePlus size={30} /> */}
              {/* </div> */}
            </div>
          </div>

          <div className="flex flex-col item-center w-full justify-between lg:flex-row ">
            <div className="w-[50%]">
              <ModalInput
                heading={"Product Price"}
                placeholder="Enter Price"
                width={"lg:w-[80%]"}
                id="productPrice"
                register={register}
              />
              <ModalInput
                heading={"HSN/SAC Code"}
                placeholder="Enter Price"
                width={"lg:w-[80%]"}
                id="HSN_SAC_Code"
                register={register}
              />
              <ModelTextArea
                heading={"Product Description"}
                placeholder="Type Description"
                width={"lg:w-[80%]"}
                id="Product_Description"
                register={register}
              />
            </div>
            <div className="w-[50%] flex item-center gap-8">
              <div>
                <h3 className="mb-4 font-bold">Size</h3>
                {/* size */}
                <div className="flex flex-col item-center gap-6 justify-center">
                  {SizeData.map((_item) => (
                    <h3
                      onClick={() => setSelectedDataSize(_item.id)}
                      key={_item.id}
                      className={`${
                        selectedDataSize === _item.id
                          ? "bg-dark-pink text-white"
                          : "bg-white"
                      } border border-black/20 text-center text-xs cursor-pointer p-3 rounded-full`}
                    >
                      {_item.heading}
                    </h3>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-bold">Enter Quantity</h5>
                <div className="flex item-center flex-col">
                  {RandomArrayGenerator(6, 0).map((_key) => (
                    <input
                      key={_key}
                      className="border border-black/50 p-2 rounded-md my-3 outline-none"
                      placeholder="Quantity"
                    />
                  ))}
                  <div className="flex item-center justify-between">
                    <h4 className="font-bold">Total Quantity</h4>
                    <p>32</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex item-center justify-center mt-10">
            <Button
              className="bg-dark-pink text-white"
              onClick={handleSubmit(handleValue)}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
