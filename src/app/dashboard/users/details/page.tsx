"use client";

import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import VerifyAccountPopup from "../VerifyAccountPopup";

export default function Detail() {
  const [verifyAccount, setVerifyAccount] = useState(false);
  return (
    <div>
      <UserBanner className="bg-light-gray2/70 p-10 rounded-lg">
        <div className="flex items-center gap-3">
          <div>
            <Image
              className="rounded-full object-cover"
              src={"/Images/users/jonson.png"}
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div className="font-medium text-lg">Jonson Mark</div>
        </div>
      </UserBanner>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Joining Date</label>
          <input
            className="border border-dark-pink text-dark-pink bg-transparent rounded-lg text-sm px-3 py-2 outline-none"
            type="date"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm text-light-gray3">Role</label>
          <select className="border border-black/30 bg-transparent rounded-lg text-sm px-3 py-2 outline-none">
            <option className="" value="">
              Select Role
            </option>
            <option value="">User</option>
            <option value="">Admin</option>
            <option value="">Super Admin</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm text-light-gray3">Salary</label>
          <select className="border border-black/30 bg-transparent rounded-lg text-sm px-3 py-2 outline-none">
            <option className="" value="">
              Select Salary
            </option>
            <option value="">$500</option>
            <option value="">$600</option>
            <option value="">$900</option>
          </select>
        </div>
      </div>

      {/* ==================== ID Proof ================================ */}

      <div className="mt-7">
        <h5 className="font-medium text-black/90 mb-5">ID Proof</h5>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div>
            <div className="text-light-gray3 text-sm mb-3">Aadhar Card*</div>
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="border border-black/30 rounded-md h-28 flex items-center justify-center">
                  <Image
                    src={"/Images/users/camera.svg"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-dim-gray text-center mt-2">Front</div>
              </div>
              <div className="flex-1">
                <div className="border border-black/30 rounded-md h-28 flex items-center justify-center">
                  <Image
                    src={"/Images/users/camera.svg"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-dim-gray text-center mt-2">Back</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-light-gray3 text-sm mb-3">Pan Card*</div>
            <div className="flex-1">
              <div className="border border-black/30 rounded-md h-28 flex items-center justify-center">
                <Image
                  src={"/Images/users/camera.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-dim-gray text-center mt-2">Front</div>
            </div>
          </div>
          <div>
            <div className="text-light-gray3 text-sm mb-3">
              Employment Documents
            </div>
            <div className="flex gap-4">
              <div className="border border-black/30 rounded-md h-28 flex-1 flex items-center justify-center">
                <Image
                  src={"/Images/users/camera.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="border border-black/30 rounded-md h-28 flex-1 flex items-center justify-center">
                <Image
                  src={"/Images/users/camera.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div className="grid md:grid-cols-3 grid-cols-1 items-end gap-5">
            <div>
              <div className="text-light-gray3 text-sm mb-3">
                Other Documents
              </div>
              <div className="flex gap-4">
                <div className="border border-black/30 rounded-md h-28 flex-1 flex items-center justify-center">
                  <Image
                    src={"/Images/users/camera.svg"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="border border-black/30 rounded-md h-28 flex-1 flex items-center justify-center">
                  <Image
                    src={"/Images/users/camera.svg"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="bg-dark-pink rounded-md h-28 flex-1 flex flex-col items-center justify-center cursor-pointer">
                  <FiPlus className="text-white text-xl" />
                  <span className="uppercase text-lg text-white">Add more</span>
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Contact Number /Address ================================ */}

      <div className="mt-7">
        <h5 className="font-medium text-black/90 mb-5">
          Contact Number /Address
        </h5>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-5">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-light-gray3">
              Phone Number
            </label>
            <div className="relative">
              <input
                className="border border-black/30 w-full  bg-transparent rounded-lg text-sm pl-10 pr-3 py-2 outline-none"
                type="tel"
                placeholder="6578564985"
              />
              <IoCallOutline className="text-light-gray3 absolute top-1/2 -translate-y-1/2 left-3" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-light-gray3">
              Alternate Phone number
            </label>
            <div className="relative">
              <input
                className="border border-black/30 w-full bg-transparent rounded-lg text-sm pl-10 pr-3 py-2 outline-none"
                type="tel"
                placeholder="6578564985"
              />
              <IoCallOutline className="text-light-gray3 absolute top-1/2 -translate-y-1/2 left-3" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-light-gray3">
              Email Address
            </label>

            <div className="relative">
              <input
                className="border border-black/30 w-full bg-transparent rounded-lg text-sm pl-10 pr-3 py-2 outline-none"
                type="email"
                placeholder="demo@gmail.com"
              />
              <CgMail className="text-light-gray3 text-xl absolute top-1/2 -translate-y-1/2 left-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="font-medium text-sm text-light-gray3">
            Address
          </label>
          <div className="relative">
            <textarea
              rows={3}
              className="border border-black/30 w-full bg-transparent rounded-lg text-sm pl-10 pr-3 py-2 outline-none resize-none"
              placeholder={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed , do eiusmod tempor incididunt ut`}
            />
            <CiLocationOn className="text-light-gray3 text-xl absolute top-2 left-3" />
          </div>
        </div>
      </div>

      {/* ==================== Buttons ================================ */}

      <div className="flex gap-3 items-center mt-10">
        <div className="flex items-center gap-3 bg-light-gray rounded-xl px-5 py-2.5 min-w-[140px] font-medium">
          <FiPlus className="text-black text-xl" />
          <button className=" font-medium] text-black uppercase text-sm">
            Add User
          </button>
        </div>
        <button
          className="bg-dark-pink text-white px-5 py-2.5 min-w-[140px] rounded-xl uppercase text-sm"
          onClick={() => setVerifyAccount(true)}
        >
          Verify User
        </button>
      </div>
      {verifyAccount && <VerifyAccountPopup />}
    </div>
  );
}

const UserBanner = styled.div``;
