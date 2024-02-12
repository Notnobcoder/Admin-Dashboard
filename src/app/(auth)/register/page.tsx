"use client";

import { LogoImage } from "@/imageLinks";
import { Button, Checkbox, Link } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { PiUploadSimpleBold } from "react-icons/pi";
import AuthLayout from "../AuthLayout";

export default function RightForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout>
      <div className="flex-1">
        <div className="border border-[#D9D9D9] rounded-3xl flex flex-col gap-3 md:px-12 px-8 py-8 bg-white">
          <div className="m-auto">
            <Image
              className="xl:w-36 w-28 h-auto"
              src={LogoImage}
              alt="Image"
              width={150}
              height={100}
            />
          </div>
          <h5 className="text-2xl font-medium text-center">Sign Up Now</h5>
          <input
            className="border border-black/30 rounded-lg px-4 py-2 hover:border-dark-pink"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="border border-black/30 rounded-lg px-4 py-2 hover:border-dark-pink"
            type="email"
            placeholder="Enter Your Email"
          />
          <div className="border border-black/30 rounded-lg px-4 hover:border-dark-pink flex items-center">
            <select className="rounded text-black/80 outline-none h-full py-1 bg-white font-noto_color_imoji text-sm">
              <option value="in">
                <span>🇮🇳</span> +91
              </option>
              <option value="usa">
                <span>🇺🇸</span> +1
              </option>
            </select>
            <input
              className="pl-4 outline-none w-full border-l border-black/30 py-2"
              type="text"
              placeholder="Mobile Number"
            />
          </div>
          <div className="relative border border-black/30 rounded-lg px-4 py-2 hover:border-dark-pink">
            <input
              className="border-none outline-none w-full pr-5"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <BsEyeSlashFill
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ABABAB] cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <BsEyeFill
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ABABAB] cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {/* <span>Passwords must be at least 6 characters.</span> */}
          <div className="text-sm">
            Upload Verification Documents like Electricity Bill/Visiting
            Card/Bank Passbook/Sale Bill/Shop Picture
          </div>
          <div className="flex flex-col gap-1 ">
            <label
              htmlFor="fileUpload"
              className="border border-black/30 rounded-lg px-4 py-2 hover:border-dark-pink text-black/50 relative"
            >
              Upload file
              <input
                className="hidden"
                type="file"
                id="fileUpload"
                placeholder="Upload file"
              />
              <PiUploadSimpleBold className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-pink text-xl" />
            </label>
            <span className="text-xs text-[#ADAFBB]">Pdf, Jpg, Doc, Png</span>
          </div>
          <div className="flex items-center">
            <Checkbox />
            <span>I accept the Terms and conditions</span>
          </div>
          <div>
            <Button
              className="bg-dark-pink w-full font-medium text-lg h-12"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
          <div className="text-sm text-center">
            Do you have an account?{" "}
            <Link href="/login">
              <span className="text-dark-pink font-medium">Sign In Now</span>{" "}
            </Link>
          </div>
          <div className="text-sm text-center">
            By creating an account or logging in, you agree to LOVOJ’s{" "}
            <span className="text-dark-pink font-medium">
              Privacy Policy & Terms of Use.
            </span>{" "}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
