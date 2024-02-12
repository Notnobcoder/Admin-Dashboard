"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import ConfirmModal from "./ConfirmModal";
import Link from "next/link";

type propsTypeD = {
  id: number;
  name: string;
  imgUrl: string;
};

export default function UserList({ item }: { item: propsTypeD }) {
  const [isShow, setisShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [suspendModal, setSuspendModal] = useState(false);

  return (
    <>
      <Root className="bg-white p-5 rounded-xl">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div>
              <Image
                className="rounded-full object-cover"
                src={item.imgUrl}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="font-medium">{item.name}</div>
          </div>
          <div
            className="bg-light-pink text-dark-pink w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setisShow(!isShow)}
          >
            <MdArrowForwardIos
              className={`transition-all ${isShow ? "rotate-90" : ""}`}
            />
          </div>
        </div>
        {isShow && (
          <div className="flex flex-wrap items-center md:gap-5 gap-3 pt-10">
            <Link href="/dashboard/users/details">
              <button className="border border-dark-pink bg-dark-pink text-white px-5 py-1.5 rounded-xl">
                Edit user
              </button>
            </Link>
            <button
              className="border border-dark-pink text-dark-pink px-5 py-1.5 rounded-xl"
              onClick={() => setDeleteModal(true)}
            >
              Delete user
            </button>
            <button
              className="border border-dark-pink text-dark-pink px-5 py-1.5 rounded-xl"
              onClick={() => setSuspendModal(true)}
            >
              Suspend user
            </button>
          </div>
        )}
      </Root>
      {deleteModal && (
        <ConfirmModal
          onClose={() => setDeleteModal(false)}
          title="Delete User"
          text="Are you sure to delete user?"
        />
      )}
      {suspendModal && (
        <ConfirmModal
          onClose={() => setSuspendModal(false)}
          title="Suspend user"
          text="Are you sure to suspend user?"
        />
      )}
    </>
  );
}

const Root = styled.div`
  filter: drop-shadow(0px 1px 44px rgba(255, 98, 98, 0.1));
`;
