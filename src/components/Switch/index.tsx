import { useState } from "react";

const SwitchComponent1 = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="w-[80px] h-[27px]  flex item-center rounded bg-gray ">
      <div
        style={{ translate: isChecked ? "0" : "40px" }}
        className={`w-[40px]  absolute z-10 top-0 left-0 h-full rounded  transition-all ${
          isChecked ? "bg-[#02b914] border-[2px] border-[#02b914]" : "bg-black"
        } `}
      ></div>
      <div
        onClick={() => setIsChecked(true)}
        className={`w-[95px] flex  items-center justify-center    text-sm z-20  text-center relative ${
          isChecked ? "text-white " : "text-black cursor-pointer"
        }`}
      >
        On
      </div>
      <div
        className={`w-[95px] flex items-center  justify-center   text-sm z-20  text-center relative ${
          isChecked ? "text-black cursor-pointer" : "text-white "
        }`}
        onClick={() => setIsChecked(false)}
      >
        Off
      </div>
    </div>
  );
};

export default SwitchComponent1;
