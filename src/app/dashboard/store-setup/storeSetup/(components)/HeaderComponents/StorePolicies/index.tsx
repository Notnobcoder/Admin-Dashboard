import { ReactElement } from "react";
import { FAQ } from "./Faq";
import { ModalCancellation } from "./ModalCancellation";
import { ModalPrivacy } from "./ModalPrivacy";

export interface StorePoliciesProps {}

const POLICIES = [
  {
    id: 1,
    title: "Delivery",
    text: "See item details for estimated arrival times.",
  },
  {
    id: 2,
    title: "Payment options",
    text: "Lovoj keeps your payment information secure. Lovoj stores never receive your payment information",
  },
  {
    id: 3,
    title: "Returns & exchanges",
    text: "See item details for return and exchange eligibility.",
  },
  {
    id: 4,
    title: "Cancellations",
    text: "Cancellations Accepted: Yes  Cancellation Request: Within 1 hour of Purchase",
    modal: "Cancellation",
  },
  {
    id: 5,
    title: "Privacy Policy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    modal: "Privacy",
  },
];

export function StorePolicies(): ReactElement {
  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between mb-10">
          <div>
            <h4 className="text-3xl font-semibold">Shop Policies</h4>
            <div className="text-[#606060] text-sm">
              Last updated on 03 Mar, 2021
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {POLICIES.map((i) => {
            return (
              <div className="flex flex-col gap-4" key={i.id}>
                <div className="flex items-center justify-between pr-44">
                  <h4 className="text-3xl font-normal">{i.title}</h4>
                  {i.modal === "Cancellation" ? (
                    <ModalCancellation />
                  ) : i.modal === "Privacy" ? (
                    <ModalPrivacy />
                  ) : null}
                </div>
                <p>{i.text}</p>
                <hr className="text-[#D9D9D9] w-[95%] " />
              </div>
            );
          })}
        </div>
        <FAQ />
      </div>
    </>
  );
}
