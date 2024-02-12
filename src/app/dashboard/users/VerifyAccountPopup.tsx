"use client";

import { Modal } from "@/components";
import React from "react";

export default function VerifyAccountPopup() {
  return (
    <Modal>
      <h5 className="text-lg font-medium mb-5">Verify Account</h5>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Email Address</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Password</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <button className="bg-dark-pink text-white px-7 py-2.5 min-w-[100px] rounded-xl uppercase text-xs font-medium">
            Verify Now
          </button>
        </div>
      </div>
    </Modal>
  );
}
