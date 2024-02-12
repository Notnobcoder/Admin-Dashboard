import React from "react";

export default function InputBox({ placeholder }: { placeholder: string }) {
  return (
    <div>
      <input
        className="text-sm border border-[#E7E7F6] py-2 px-6 rounded-lg w-full"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
