"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { PiDownloadSimpleFill } from "react-icons/pi";

const TABLE_DATA = [
  {
    id: 1,
    orderId: "IN1021127",
    email: "bijay@lovoj.com",
    date: "5/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Bijay Sahoo",
    amount: "$20,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#009F10] px-3 py-1 text-white rounded-lg text-xs">
        Delivered
      </span>
    ),
  },
  {
    id: 2,
    orderId: "IN1021128",
    email: "hemant@lovoj.com",
    date: "20/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Hemant Kumar Lodhi",
    amount: "$10,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 3,
    orderId: "IN1021129",
    email: "tushar@lovoj.com",
    date: "15/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Tushar Rawat",
    amount: "$10,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 4,
    orderId: "IN1021127",
    email: "bijay@lovoj.com",
    date: "5/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Bijay Sahoo",
    amount: "$20,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#009F10] px-3 py-1 text-white rounded-lg text-xs">
        Delivered
      </span>
    ),
  },
  {
    id: 5,
    orderId: "IN1021128",
    email: "hemant@lovoj.com",
    date: "20/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Hemant Kumar Lodhi",
    amount: "$10,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 6,
    orderId: "IN1021129",
    email: "tushar@lovoj.com",
    date: "15/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Tushar Rawat",
    amount: "$10,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 7,
    orderId: "IN1021127",
    email: "bijay@lovoj.com",
    date: "5/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Bijay Sahoo",
    amount: "$20,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#009F10] px-3 py-1 text-white rounded-lg text-xs">
        Delivered
      </span>
    ),
  },
  {
    id: 8,
    orderId: "IN1021128",
    email: "hemant@lovoj.com",
    date: "20/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Hemant Kumar Lodhi",
    amount: "$10,000,00",
    phone: "+91 222 333 55 66",
    status: (
      <span className="bg-[#FFAB07] px-3 py-1 text-white rounded-lg text-xs">
        Not Delivered
      </span>
    ),
  },
  {
    id: 9,
    orderId: "IN1021129",
    email: "tushar@lovoj.com",
    date: "15/05/2023",
    productName: "Shirt- Fabric",
    customerName: "Tushar Rawat",
    amount: "$10,000,00",
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
    <div className="mt-5">
      <h4 className="mb-5 text-[#333333] font-medium text-xl">Recent Orders</h4>
      {/* ========================== TABLE ============================= */}

      <div className="overflow-x-auto rounded-xl border border-[#cccccc7f]">
        <table className="w-full border-collapse rounded-xl border-spacing-0">
          <thead>
            <tr className="bg-black text-white ">
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Order ID
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Email ID
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Date
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Product Name
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Customer Name
              </th>
              <th className="text-left font-medium text-sm py-4 px-5 whitespace-pre">
                Total Amount
              </th>
              <th className="text-center whitespace-pre font-medium text-sm py-4 px-5">
                Status
              </th>
              <th className="text-center whitespace-pre font-medium text-sm py-4 px-5">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((i, index) => {
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
                  <td className="text-sm py-4 px-5">{i.email}</td>
                  <td className="text-sm py-4 px-5">{i.date}</td>
                  <td className="text-sm py-4 px-5">{i.productName}</td>
                  <td className="text-sm py-4 px-5">{i.customerName}</td>
                  <td className="text-sm py-4 px-5">{i.amount}</td>
                  <td
                    className="text-center whitespace-pre cursor-pointer"
                    onClick={() => setEditStatus(true)}
                  >
                    {i.status}
                  </td>
                  <td className="text-sm py-4 px-5">
                    <div className="flex items-center justify-center gap-3">
                      <PiDownloadSimpleFill className="text-xl text-[#888888]" />
                      <AiOutlineEye className="text-xl text-[#888888]" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
