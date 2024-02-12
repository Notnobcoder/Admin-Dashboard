import React from "react";

const Appointment_Details = [
  {
    id: 1,
    label: "Customer Name",
    value: "Jone Doe",
  },
  {
    id: 2,
    label: "Appointment Date",
    value: "30/02/2023",
  },
  {
    id: 3,
    label: "Email",
    value: "jonedoe@gmail.com",
  },
  {
    id: 4,
    label: "Appointment Time",
    value: "31/02/2023   9:30 PM",
  },
  {
    id: 5,
    label: "Phone",
    value: "+91 01234567",
  },
  {
    id: 6,
    label: "Address",
    value: "Todermal Road New Delhi",
  },
  {
    id: 7,
    label: "Description",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 8,
    label: "Appointment Type",
    value: "Online",
  },
];

export default function AppointmentDetails() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 rounded-lg border border-[#e2e8f0c9] p-3">
      {Appointment_Details.map((i) => {
        return (
          <div key={i.id} className="flex items-start lg:gap-16 gap-10">
            <div className="flex items-start gap-3">
              <span className="text-sm">{i.label}</span>
              <span className="text-sm">:</span>
              <span className="text-sm">{i.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
