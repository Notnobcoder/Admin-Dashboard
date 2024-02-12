// @ts-nocheck
"use client";

import React, { useCallback, useEffect, useState } from "react";
import UserList from "./List";
import AddUserPopup from "./AddUserPopup";
import { FiPlus } from "react-icons/fi";
import { getWorkersApi } from "@/network/api/user";
import { useAuth } from "@/context/AuthProvider";
import { logErr } from "@/utils/helper";

export default function Users() {
  const [addModal, setAddModal] = useState(false);
  const [userListValue, setUserList] = useState([]);
  const { token } = useAuth();

  const getUser = useCallback(async () => {
    try {
      const res = await getWorkersApi({
        token,
      });
      setUserList(res.workers);
      console.log(res.workers, "res workers");
    } catch (err) {
      logErr(err);
    }
  }, [token]);

  useEffect(() => {
    getUser();
  }, [getUser]);
  console.log(userListValue, "Userlist");

  return (
    <div className="w-[100%]">
      <div className="flex flex-col gap-5">
        {userListValue.map((i) => {
          return <UserList key={i} item={i} />;
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
      {addModal && (
        <AddUserPopup
          setUserList={setUserList}
          onClose={() => setAddModal(false)}
        />
      )}
    </div>
  );
}
