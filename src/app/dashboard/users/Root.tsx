// @ts-nocheck
"use client";

import React, { useState } from "react";
import UserList from "./List";
import AddUserPopup from "./AddUserPopup";
import { FiPlus } from "react-icons/fi";

const USERS_LIST = [
  {
    id: 1,
    name: "Jonson Mark",
    imgUrl: "/Images/users/jonson.png",
  },
  {
    id: 2,
    name: "Mark Jonson",
    imgUrl: "/Images/users/mark.png",
  },
  {
    id: 3,
    name: "Michal Den",
    imgUrl: "/Images/users/michal.png",
  },
  {
    id: 4,
    name: "Pitter Jonson",
    imgUrl: "/Images/users/pitter.png",
  },
  {
    id: 5,
    name: "Jon Doe",
    imgUrl: "/Images/users/jon.png",
  },
  {
    id: 6,
    name: "San Den",
    imgUrl: "/Images/users/san.png",
  },
];

export default function Root() {
  const [addModal, setAddModal] = useState(false);
  return (
    <div className="w-[100%]">
      <div className="flex flex-col gap-5">
        {USERS_LIST.map((i) => {
          return <UserList key={i.id} item={i} />;
        })}
      </div>
      <div className="mt-10">
        <div
          className="bg-dark-pink text-white px-5 py-1.5 rounded-xl w-fit flex items-center gap-2"
          onClick={() => setAddModal(true)}
        >
          <FiPlus className="text-lg" />
          <button className="outline-none border-none text-base">
            Add user
          </button>
        </div>
      </div>
      {addModal && <AddUserPopup onClose={() => setAddModal(false)} />}
    </div>
  );
}
