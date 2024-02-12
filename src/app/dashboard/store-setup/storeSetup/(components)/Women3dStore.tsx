import React, { Dispatch, SetStateAction } from "react";
import CardCategory from "./CardCategory";

// ---------- BESPOKE IMAGES --------------
const Bespoke1 = "/bespokeCategories/fb1.webp";
const Bespoke2 = "/bespokeCategories/fb2.webp";
const Bespoke3 = "/bespokeCategories/fb3.webp";
const Bespoke4 = "/bespokeCategories/fb4.webp";
const Bespoke5 = "/bespokeCategories/fb5.webp";
const Bespoke6 = "/bespokeCategories/fb6.webp";
const Bespoke7 = "/bespokeCategories/fb7.webp";
const Bespoke8 = "/bespokeCategories/fb8.webp";

const CBespoke1 = "/bespokeCategories/cb1.webp";
const CBespoke2 = "/bespokeCategories/cb2.webp";
const CBespoke3 = "/bespokeCategories/cb3.webp";
const CBespoke4 = "/bespokeCategories/cb4.webp";
const CBespoke5 = "/bespokeCategories/cb5.webp";
const CBespoke6 = "/bespokeCategories/cb6.webp";
const CBespoke7 = "/bespokeCategories/cb7.webp";
const CBespoke8 = "/bespokeCategories/cb8.webp";
const CBespoke9 = "/bespokeCategories/cb9.webp";

const CaBespoke1 = "/bespokeCategories/Cab1.webp";
const CaBespoke2 = "/bespokeCategories/Cab2.webp";
const CaBespoke3 = "/bespokeCategories/Cab3.webp";
const CaBespoke4 = "/bespokeCategories/Cab4.webp";
const CaBespoke5 = "/bespokeCategories/Cab5.webp";
const CaBespoke6 = "/bespokeCategories/Cab6.webp";
const CaBespoke7 = "/bespokeCategories/Cab7.webp";
const CaBespoke8 = "/bespokeCategories/Cab8.webp";
const CaBespoke9 = "/bespokeCategories/Cab9.webp";
const CaBespoke10 = "/bespokeCategories/Cab10.webp";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useApp } from "@/context/AppProvider";
import CardCategoryNew from "./CardCategory-new";
import { AddMoreReadyMade } from "./AddMoreReadyMade";

const CARD_DETAILS = [
  {
    id: 1,
    imgSrc: Bespoke1,
    title: "Formals Suit",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 2,
    imgSrc: Bespoke2,
    title: "Tuxedo",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 3,
    imgSrc: Bespoke3,
    title: "Blazer",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 4,
    imgSrc: Bespoke4,
    title: "Kurti",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 5,
    imgSrc: Bespoke5,
    title: "Shirt",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 6,
    imgSrc: Bespoke6,
    title: "Formal Blouses",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 7,
    imgSrc: Bespoke7,
    title: "Formal Skirt",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 7,
    imgSrc: Bespoke8,
    title: "Formal Pants",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
];

const CARD_DETAILS2 = [
  {
    id: 1,
    imgSrc: CBespoke1,
    title: "Ceremonial Suits",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 2,
    imgSrc: CBespoke2,
    title: "Sarees",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 3,
    imgSrc: CBespoke3,
    title: "Anarkali Suit",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 4,
    imgSrc: CBespoke4,
    title: "Lehenga",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 5,
    imgSrc: CBespoke5,
    title: "Blouse",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },

  {
    id: 6,
    imgSrc: CBespoke6,
    title: "Gown",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 7,
    imgSrc: CBespoke7,
    title: "Pants",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 7,
    imgSrc: CBespoke8,
    title: "Skirt",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
];

const CARD_DETAILS3 = [
  {
    id: 1,
    imgSrc: CaBespoke1,
    title: "Casual Shirt",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 2,
    imgSrc: CaBespoke2,
    title: "Top",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 3,
    imgSrc: CaBespoke3,
    title: "Dress",
    paragraph:
      "Are you in search of a tailor-made tuxedo that will elevate your appearance?",
  },
  {
    id: 4,
    imgSrc: CaBespoke4,
    title: "Sweatshirt",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },
  {
    id: 5,
    imgSrc: CaBespoke5,
    title: "Abaya",
    paregraph:
      "Are you in search of a customised swearshirt that will elevate your appearance?",
  },

  {
    id: 6,
    imgSrc: CaBespoke6,
    title: "Casual Pants",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 7,
    imgSrc: CaBespoke7,
    title: "Trouser",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 8,
    imgSrc: CaBespoke8,
    title: "Jeans",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 9,
    imgSrc: CaBespoke9,
    title: "Casual Skirt",
    paragraph:
      "Are you in search of a tailor-made suit that will elevate your appearance?",
  },
  {
    id: 10,
    imgSrc: CaBespoke10,
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

const Data: React.FC<DataProps> = ({ options, onGenderChange }) => {
  const { readyMade, setReadyMade } = useApp();
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
            className={`border  py-3 px-6 font-medium rounded-md shadow-dark-pink hover:border-dark-pink border-dark-pink transition-all flex items-center gap-3`}
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
            className={` border border-black/30 py-3 px-6 font-medium rounded-md shadow-dark-pink hover:border-dark-pink transition-all flex items-center gap-3`}
            onClick={onGenderChange}
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

export default function Women3dStore({
  onGenderChange,
}: {
  onGenderChange: () => void;
}) {
  return (
    <div className="w-full font-jost">
      <Data
        heading="Women Collection"
        options
        onGenderChange={onGenderChange}
      />
      {/* modal header with image */}
      <div className="flex items-center gap-4">
        <Image
          src="/rearrange/storeSetup/women.png"
          width={40}
          height={40}
          alt="Image props"
        />
        <h3 className="text-4xl my-2 font-jost font-normal">Women</h3>
      </div>
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
              <CardCategoryNew item={i} type="W" />
            </div>
          );
        })}
        <AddMoreReadyMade />
      </div>
      <div className="mt-16">
        <h3 className="text-4xl my-4 font-jost font-bold">
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
                <CardCategoryNew item={i} type="W" />
              </div>
            );
          })}
          <AddMoreReadyMade />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-4xl font-jost my-4 font-bold">Casual Bespoke</h3>
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
                <CardCategoryNew item={i} type="W" />
              </div>
            );
          })}
          <AddMoreReadyMade />
        </div>
      </div>
      {/* <div className="md:my-10 my-5"> */}
      {/*   <PaginationComp /> */}
      {/* </div> */}
    </div>
  );
}
