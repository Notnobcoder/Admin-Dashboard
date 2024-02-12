import React from "react";
import CardCategory from "./CardCategory";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useApp } from "@/context/AppProvider";

const CARD_DETAILS = [
  {
    id: 1,
    imgSrc: "/Images/bespoke/men/formal-1.svg",
    title: "Suits",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 2,
    imgSrc: "/Images/bespoke/men/formal-2.svg",
    title: "Tuxedos",
    paragraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 3,
    imgSrc: "/Images/bespoke/men/formal-3.svg",
    title: "Blazers",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 4,
    imgSrc: "/Images/bespoke/men/formal-4.svg",
    title: "Vest",
    paregraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 5,
    imgSrc: "/Images/bespoke/men/formal-5.svg",
    title: "Shirt",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },

  {
    id: 6,
    imgSrc: "/Images/bespoke/men/formal-6.svg",
    title: "Pants",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
];

const CARD_DETAILS2 = [
  {
    id: 1,
    imgSrc: "/Images/bespoke/men/ceremonial-1.svg",
    title: "Ceremonial Suits",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 2,
    imgSrc: "/Images/bespoke/men/ceremonial-2.svg",
    title: "Ceremonial Tuxedos",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 3,
    imgSrc: "/Images/bespoke/men/ceremonial-3.svg",
    title: "Ceremonial Shirt",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 4,
    imgSrc: "/Images/bespoke/men/ceremonial-4.svg",
    title: "Sherwani Set",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 5,
    imgSrc: "/Images/bespoke/men/ceremonial-5.svg",
    title: "Nehru Jacket",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 6,
    imgSrc: "/Images/bespoke/men/ceremonial-6.svg",
    title: "Kurtas Set",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
];

const CARD_DETAILS3 = [
  {
    id: 1,
    imgSrc: "/Images/bespoke/men/casual-1.svg",
    title: "T-Shirt",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 2,
    imgSrc: "/Images/bespoke/men/casual-2.svg",
    title: "Casual Shirt",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 3,
    imgSrc: "/Images/bespoke/men/casual-3.svg",
    title: "Polo Shirt",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 4,
    imgSrc: "/Images/bespoke/men/casual-4.svg",
    title: "Trousers",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 5,
    imgSrc: "/Images/bespoke/men/casual-5.svg",
    title: "Casual Pants",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },

  {
    id: 6,
    imgSrc: "/Images/bespoke/men/casual-6.svg",
    title: "Jeans",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 7,
    imgSrc: "/Images/bespoke/men/casual-7.svg",
    title: "Sweatshirt",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 8,
    imgSrc: "/Images/bespoke/men/casual-8.svg",
    title: "Joggers",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 9,
    imgSrc: "/Images/bespoke/men/casual-9.svg",
    title: "Shorts",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
];

interface DataProps {
  heading: string;
  options: boolean;
  onGenderChange: () => void;
}

const Data: React.FC<DataProps> = ({ heading, options, onGenderChange }) => {
  const { setReadyMade, readyMade } = useApp();
  return (
    <div className="lg:flex items-center flex-row-reverse justify-between">
      <div className="my-4 space-x-4">
        <Button
          className={`${
            readyMade === "3dStore"
              ? "bg-dark-pink text-white"
              : "bg-[#f1f1f1] text-black"
          }`}
          onClick={() => setReadyMade("3dStore")}
        >
          3d Bespoke Store
        </Button>
        <Button
          className={`${
            readyMade === "ReadyMade"
              ? "bg-dark-pink text-white"
              : "bg-[#f1f1f1] text-black"
          }`}
          onClick={() => setReadyMade("ReadyMade")}
        >
          Readymade Store
        </Button>
      </div>
      {options ? (
        <div className="flex items-center justify-center gap-8 ">
          <button
            className={`border border-black/30 py-2 px-4 font-medium rounded-md shadow-dark-pink hover:border-dark-pink  transition-all flex items-center gap-3`}
            onClick={onGenderChange}
          >
            <Image
              src="/rearrange/storeSetup/women.png"
              alt=""
              width={28}
              height={20}
            />
            <span>Women</span>
          </button>
          <button
            className={` border border-dark-pink py-2 px-4 font-medium rounded-md shadow-dark-pink hover:border-dark-pink transition-all flex items-center gap-3`}
          >
            <Image
              src="/rearrange/storeSetup/man.png"
              alt=""
              width={28}
              height={20}
            />
            <span>Men</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default function MenCollections({
  onGenderChange,
}: {
  onGenderChange: () => void;
}) {
  return (
    <div className="w-full font-jost">
      <Data heading="Men Collection" options onGenderChange={onGenderChange} />
      <h3 className="text-4xl my-4 font-jost font-bold">Formals Bespoke</h3>
      <div className="grid md:grid-cols-8 grid-cols-1 gap-5">
        {CARD_DETAILS.map((i) => {
          return (
            <div
              className={
                i.id <= 2
                  ? "md:col-span-3 lg:col-span-2"
                  : "md:col-span-3 lg:col-span-2"
              }
              key={i.id}
            >
              <CardCategory item={i} type="Men" />
            </div>
          );
        })}
      </div>
      <div className="mt-16">
        <h3 className="text-4xl my-4 font-bold font-jost">
          Ceremonial Bespoke
        </h3>
        <div className=" grid md:grid-cols-8 grid-cols-1 gap-5">
          {CARD_DETAILS2.map((i) => {
            return (
              <div
                className={
                  i.id <= 2
                    ? "md:col-span-3 lg:col-span-2"
                    : "md:col-span-3 lg:col-span-2"
                }
                key={i.id}
              >
                <CardCategory item={i} type="Men" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-4xl my-4 font-bold font-jost">Casual Bespoke</h3>
        <div className=" grid md:grid-cols-8 grid-cols-1 gap-5">
          {CARD_DETAILS3.map((i) => {
            return (
              <div
                className={
                  i.id <= 2
                    ? "md:col-span-3 lg:col-span-2"
                    : "md:col-span-3 lg:col-span-2"
                }
                key={i.id}
              >
                <CardCategory item={i} type="Men" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
