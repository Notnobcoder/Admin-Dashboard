"use client";

import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import styled from "styled-components";
import EditStatusModal from "./EditStatusModal";
import Link from "next/link";
import AlertModal from "./AlertModal";

const TABLE_DATA = [
  {
    id: 1,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#009F10] px-3 py-1 text-white rounded-lg text-xs">
        Delivered
      </span>
    ),
  },
  {
    id: 2,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 3,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#000] px-3 py-1 text-white rounded-lg text-xs">
        In-Progress
      </span>
    ),
  },
  {
    id: 4,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#F603D0] px-3 py-1 text-white rounded-lg text-xs">
        Incomplete
      </span>
    ),
  },
  {
    id: 5,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#C80404] px-3 py-1 text-white rounded-lg text-xs">
        Disputed
      </span>
    ),
  },
  {
    id: 6,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#F603D0] px-3 py-1 text-white rounded-lg text-xs">
        Incomplete
      </span>
    ),
  },
  {
    id: 7,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#F603D0] px-3 py-1 text-white rounded-lg text-xs">
        Incomplete
      </span>
    ),
  },
  {
    id: 8,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 9,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#009F10] px-3 py-1 text-white rounded-lg text-xs">
        Delivered
      </span>
    ),
  },
  {
    id: 10,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 11,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#C80404] px-3 py-1 text-white rounded-lg text-xs">
        Disputed
      </span>
    ),
  },
  {
    id: 12,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#009F10] px-3 py-1 text-white rounded-lg text-xs">
        Delivered
      </span>
    ),
  },
  {
    id: 13,
    orderId: "IN1021127",
    customerName: "Bijay Sahoo",
    email: "demo@gmail.com",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
];

export default function Table() {
  const [editStatus, setEditStatus] = useState(false);
  return (
    <div className="">
      <div className="flex md:flex-row flex-col items-center justify-between md:gap-5 gap-10 mb-14">
        <div className="flex items-center gap-5">
          <div className="font-medium">Total Result Found</div>
          <div className="font-medium">44</div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <span className="font-medium">From</span>
            <div className="relative">
              <input
                className="border border-[#E8E8F7] px-4 outline-none py-2 rounded-2xl max-w-[140px]"
                type="text"
              />
              <MdOutlineDateRange className="absolute top-1/2 -translate-y-1/2 right-4 text-dark-pink" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium">To</span>
            <div className="relative">
              <input
                className="border border-[#E8E8F7] px-4 outline-none py-2 rounded-2xl max-w-[140px]"
                type="text"
              />
              <MdOutlineDateRange className="absolute top-1/2 -translate-y-1/2 right-4 text-dark-pink" />
            </div>
          </div>
        </div>
        <div>
          <select className="border border-[#E8E8F7] px-3 py-2 rounded-2xl outline-none">
            <option value="1">All Orders</option>
            <option value="2">All Orders</option>
          </select>
        </div>
      </div>
      {/* ========================== TABLE ============================= */}

      <TableWrapper className="overflow-x-auto rounded-xl border border-[#cccccc7f]">
        <table className="w-full border-collapse rounded-xl border-spacing-0">
          <thead>
            <tr className="bg-black text-white ">
              <th className="text-left font-medium whitespace-pre">Order ID</th>
              <th className="text-left font-medium whitespace-pre">
                Customer Name
              </th>
              <th className="text-left font-medium whitespace-pre">Email ID</th>
              <th className="text-left font-medium whitespace-pre">
                Phone Number
              </th>
              <th className="text-center whitespace-pre font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((i, index) => {
              console.log(i);
              return (
                <tr
                  key={i.id}
                  className={`text-[#4d4d4d] ${
                    index % 2 === 0
                      ? "bg-[#f1f1f1] border-t border-b border-[#cccccc7f]"
                      : "bg-[#ffffff]"
                  } ${
                    TABLE_DATA[index].id ===
                    TABLE_DATA[TABLE_DATA.length - 1].id
                      ? "border-b-transparent"
                      : ""
                  }`}
                >
                  <Link className="w-full" href="/dashboard/order/edit">
                    <td className="text-sm py-4 px-5">{i.orderId}</td>
                  </Link>
                  <td className="text-sm py-4 px-5">{i.customerName}</td>
                  <td className="text-sm py-4 px-5">{i.email}</td>
                  <td className="text-sm py-4 px-5">{i.phone}</td>
                  <td className="text-center whitespace-pre cursor-pointer text-sm py-4 px-5">
                    <Link href={`/dashboard/order/order-status-tracker`}>
                      {i.status}
                    </Link>
                  </td>
                  {/* old code */}
                  {/* <td */}
                  {/*   className="text-center whitespace-pre cursor-pointer text-sm py-4 px-5" */}
                  {/*   onClick={() => setEditStatus(true)} */}
                  {/* > */}
                  {/*   {i.status} */}
                  {/* </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
      {editStatus && <EditStatusModal onClose={() => setEditStatus(false)} />}
      {/* <AlertModal onClose={() => setEditStatus(false)} /> */}
    </div>
  );
}

const TableWrapper = styled.div`
  th,
  td {
    padding: 14px 20px;
    font-size: 14px;
  }
`;
