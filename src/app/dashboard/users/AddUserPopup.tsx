"use client";

import { Modal } from "@/components";
import { useAuth } from "@/context/AuthProvider";
import { workerSignUpApi } from "@/network/api/user";
import { logErr } from "@/utils/helper";
import React, { Dispatch, useCallback, useState } from "react";

export default function AddUserPopup({
  onClose,
  setUserList,
}: {
  onClose: () => void;
  setUserList: Dispatch<React.SetStateAction<any[]>>;
}) {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = useCallback(async () => {
    try {
      const res = await workerSignUpApi(
        { name, email, password, role },
        {
          token,
        },
      );
      console.log(res, "work sign up");
      onClose();
      setUserList((prev) => [...prev, res.worker]);
    } catch (err) {
      logErr(err);
    }
  }, [token, name, email, password, role, onClose, setUserList]);

  return (
    <Modal>
      <h5 className="text-lg font-medium mb-5">Add User</h5>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Full Name</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Email Address</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Password</label>
          <input
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Role</label>
          <select
            onChange={(e) => setRole(e.target.value)}
            className="border border-light-purple rounded-lg text-sm px-3 py-2 outline-none"
          >
            <option className="" value="">
              Select your role
            </option>
            <option value="manager">Manager</option>
            <option value="sales">Sales</option>
            <option value="cutter">Cutter</option>
            <option value="accessories">Accessories</option>
            <option value="QC">Qc</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-dark-pink text-white px-5 py-2 min-w-[100px] rounded-xl uppercase text-sm"
          >
            Save
          </button>
          <button
            className="bg-light-gray text-black font-medium px-5 py-2 min-w-[100px] rounded-xl uppercase text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
