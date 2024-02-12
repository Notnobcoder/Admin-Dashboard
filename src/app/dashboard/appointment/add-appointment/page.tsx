import { Button } from "@/components/Button";
import { Inputs } from "@/components/Inputs";

const CallenderComponent = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2H15V1C15 0.4 14.6 0 14 0C13.4 0 13 0.4 13 1V2H7V1C7 0.4 6.6 0 6 0C5.4 0 5 0.4 5 1V2H3C1.3 2 0 3.3 0 5V7H20V5C20 3.3 18.7 2 17 2Z"
        fill="black"
      />
      <path
        d="M3 20C1.3 20 0 18.7 0 17V9H20V17C20 18.7 18.7 20 17 20H3Z"
        fill="#F703D0"
      />
      <path
        d="M5 1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V2H5V1Z"
        fill="#F703D0"
      />
      <path
        d="M13 1C13 0.447715 13.4477 0 14 0C14.5523 0 15 0.447715 15 1V2H13V1Z"
        fill="#F703D0"
      />
    </svg>
  );
};

const DownIconComponent = () => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.311937 1.67707C0.314013 1.67707 0.316013 1.67786 0.317533 1.67927L6.4065 7.34695C7.17431 8.06164 8.36387 8.06164 9.13175 7.34695L15.2237 1.67707C15.4262 1.48796 15.5369 1.23424 15.5315 0.971718C15.526 0.709194 15.4049 0.459374 15.1946 0.277215C14.9844 0.0950555 14.7024 -0.00452144 14.4105 0.000390908C14.1187 0.00530326 13.8409 0.114302 13.6384 0.303408L9.13155 4.50032C8.36386 5.21521 7.17432 5.21553 6.40631 4.50107L1.89409 0.303406C1.6916 0.1143 1.41388 0.00530215 1.12204 0.000389747C0.830192 -0.00452266 0.548125 0.0950543 0.337889 0.277214C0.127652 0.459373 0.00646744 0.709192 0.000993006 0.971716C-0.0044604 1.23321 0.10534 1.48598 0.306329 1.67485C0.307845 1.67627 0.309855 1.67707 0.311937 1.67707Z"
        fill="#F703D0"
      />
    </svg>
  );
};

const AddAppointment = () => {
  return (
    <div>
      <div className="grid gap-4 lg:gap-8 lg:p-12 grid-cols-1 lg:grid-cols-2">
        <div>
          <h3 className="text-black pb-4">Customer Name</h3>
          <Inputs name="Customer Name" placeholder="Customer Name" />
        </div>
        <div>
          <h3 className="text-black pb-4">Select Appointment Date</h3>
          <Inputs
            name="Customer Name"
            placeholder="Select Date"
            icon={<CallenderComponent />}
          />
        </div>
        <div>
          <h3 className="text-black pb-4">Phone Number</h3>
          <Inputs name="Customer Name" placeholder="Phone Number" />
        </div>
        <div>
          <h3 className="text-black pb-4">Choose Time Slot</h3>
          <Inputs
            name="Appointment Time"
            placeholder="Appointment Time"
            icon={<DownIconComponent />}
          />
        </div>
        <div>
          <h3 className="text-black pb-4">Email</h3>
          <Inputs name="Appointment Time" placeholder="Email Address" />
        </div>
        <div>
          <h3 className="text-black pb-4">Appointment Time</h3>
          <Inputs
            name="Appointment Time"
            placeholder="Email Address"
            icon={<DownIconComponent />}
          />
        </div>
        <div>
          <h3 className="text-black pb-4">Full Address</h3>
          <textarea
            placeholder="Address"
            className="outline-none p-3 h-full border  w-full rounded-lg border-[#d9d9d9]"
          />
        </div>
        <div>
          <h3 className="text-black pb-4">Full Address</h3>
          <textarea
            placeholder="Type Description"
            className="outline-none p-3 border h-full  w-full rounded-lg border-[#d9d9d9]"
          />
        </div>
      </div>
      <div className="flex mt-20 w-full items-center justify-center">
        <Button placeholder="Save" />
      </div>
    </div>
  );
};

export default AddAppointment;
