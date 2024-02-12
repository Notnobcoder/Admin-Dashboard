"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faceIcon } from "@/imageLinks";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth } from "@/context/AuthProvider";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import {
  LogOut,
  accountSettingsIcon,
  contactsIcon,
  profileIcon,
} from "@/svgIcons";
import { removeAdminToken } from "@/utils/helper";

const DropdownUser = () => {
  const { userDetails, Logout } = useAuth();

  return (
    <Popover placement="bottom" showArrow={true} offset={16}>
      <PopoverTrigger>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="hidden text-right lg:block mr-2">
            <span className="block text-sm font-medium text-black dark:text-white">
              {userDetails?.name}
            </span>
            <span className="block text-xs">{userDetails?.storeType}</span>
          </span>

          <span className="h-8 w-8 rounded-full">
            <Image width={50} height={50} src={faceIcon} alt="User" />
          </span>

          <div className="cursor-pointer">
            <MdKeyboardArrowDown className="text-2xl text-[#4D4D4D]" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <div className={`flex flex-col rounded`}>
          <ul className="flex flex-col gap-5 border-b border-black/10 dark:border-strokedark p-3">
            <li>
              <Link
                href="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-dark-pink lg:text-base"
              >
                {profileIcon}
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-dark-pink lg:text-base"
              >
                {contactsIcon}
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-dark-pink lg:text-base"
              >
                {accountSettingsIcon}
                Account Settings
              </Link>
            </li>
          </ul>
          <div>
            <div
              className="cursor-pointer"
              onClick={() => {
                removeAdminToken();
                Logout();
              }}
            >
              <div className="flex items-center gap-3.5 p-3 text-sm font-medium duration-300 ease-in-out hover:text-dark-pink lg:text-base">
                {LogOut}
                Log Out
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DropdownUser;
