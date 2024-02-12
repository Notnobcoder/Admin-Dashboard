import React, { useState } from "react";
import styled from "styled-components";
import EditStatusModal from "@/app/dashboard/order/(components)/EditStatusModal";
import { RollInfoD } from "../../page";
import Image from "next/image";

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

export default function Table({
  rollInfo,
  fabricDiscount,
  perMeterPrice,
}: {
  rollInfo: RollInfoD[];
  fabricDiscount: number;
  perMeterPrice: number;
}) {
  const [editStatus, setEditStatus] = useState(false);

  return (
    <div className="shadow-md gap-4 rounded-lg">
      {/* ========================== TABLE ============================= */}

      <div className=" flex md:flex-row  flex-col w-full items-start p-4 border border-gray/30 rounded shadow-gray">
        <div className="md:w-[40%] w-full font-jost">
          <h5 className="text-2xl  mb-3">Fabric Roll Details</h5>
          {/* container flex 1 */}
          <div className="flex flex-col  ">
            <div className="my-8 flex flex-col text-sm font-semibold text-[#636363] gap-6">
              <div className="flex items-start  gap-4">
                <h4>
                  Fabric Price
                  <br />
                  (per mtr/yard){" "}
                </h4>
                <span>:</span>
                <h4 className="text-black/90"> ₹ {perMeterPrice}.00</h4>
              </div>
              <div className="flex items-center  gap-4">
                <h4>Fabric Discount</h4>
                <span>:</span>
                <h4 className="text-black/90">{fabricDiscount}%</h4>
              </div>
              <div className="flex items-center  gap-4">
                <h4>HSN/SAC Code </h4>
                <span>:</span>
                <h4 className="text-black/90">Na</h4>
              </div>
            </div>
          </div>
        </div>
        <TableWrapper className="overflow-x-auto w-full md:w-[60%] rounded-xl border border-[#cccccc7f]">
          <table className="w-full border-collapse rounded-xl border-spacing-0">
            <thead>
              <tr className="bg-black text-white ">
                <th className="text-left font-medium whitespace-pre">No.</th>
                <th className="text-center font-medium whitespace-pre">
                  <span className="text-center inline-block">
                    {" "}
                    Fabric Roll Length <br /> Mtr/Yard
                  </span>
                </th>
                <th className="text-center font-medium whitespace-pre">
                  Mtr/Yard
                </th>
                <th className="text-center font-medium whitespace-pre">
                  No of Rolls
                </th>
                <th className="text-center font-medium whitespace-pre">
                  Stock Location
                </th>
                <th className="text-center font-medium whitespace-pre">Edit</th>
              </tr>
            </thead>
            <tbody>
              {rollInfo.map((i, index) => {
                return (
                  <tr
                    key={index}
                    className={` ${
                      index % 2 === 0
                        ? "bg-[#F1F1F1] border-black/10 border-t border-b"
                        : ""
                    }`}
                  >
                    <td className="text-sm py-4 px-5">{index + 1}</td>
                    <td className="text-sm text-center py-4 px-5">
                      {i.rollLength}
                    </td>
                    <td className="text-sm text-center py-4 px-5">Mtr</td>
                    <td className="text-sm text-center py-4 px-5">10</td>
                    <td className="text-sm text-center py-4 px-5">In Store</td>
                    <td className="text-sm text-center py-4 px-5">
                      <Image
                        className="w-[15px] h-[15px] cursor-pointer"
                        src={"/rearrange/edit.png"}
                        width={30}
                        height={30}
                        alt={"edit.png"}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableWrapper>
      </div>
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
