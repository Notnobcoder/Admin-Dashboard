import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import axios from "axios";
import _ from "lodash";
import { useApp } from "@/context/AppProvider";
import styled from "styled-components";
import { SwitchComp } from "@/components/SwitchComp";

export const FABRICS = [
  {
    id: 1,
    fabImage: "https://lovoj.s3.amazonaws.com/fab4.webp",
    value: "Geometric LVJ002",
    paragraph: "Cotton -- Essential",
    price: "59$",
  },
  {
    id: 10,
    fabImage: "https://lovoj.s3.amazonaws.com/fab1.jpeg",
    value: "Texture LVJ001",
    paragraph: "Cotton -- Essential",
    price: "47$",
  },
  {
    id: 2,
    fabImage: "https://lovoj.s3.amazonaws.com/fab2.webp",
    value: "Texture LVJ002",
    paragraph: "Cotton -- Essential",
    price: "38$",
  },
  {
    id: 3,
    fabImage: "https://lovoj.s3.amazonaws.com/fab3.webp",
    value: "Geometric LVJ001",
    paragraph: "Cotton -- Essential",
    price: "40$",
  },
  {
    id: 4,
    fabImage: "https://lovoj.s3.amazonaws.com/fab5.webp",
    value: "Check Print LVJ001",
    paragraph: "Cotton -- Essential",
    price: "35$",
  },
  {
    id: 5,
    fabImage: "https://lovoj.s3.amazonaws.com/fab6.webp",
    value: "Check Print LVJ002",
    paragraph: "Cotton -- Essential",
    price: "48$",
  },
  {
    id: 6,
    fabImage: "https://lovoj.s3.amazonaws.com/fab7.webp",
    value: "Check Print LVJ003",
    paragraph: "Cotton -- Essential",
    price: "42$",
  },
  {
    id: 7,
    fabImage: "https://lovoj.s3.amazonaws.com/fab8.webp",
    value: "Check Print LVJ004",
    paragraph: "Cotton -- Essential",
    price: "39$",
  },
  {
    id: 8,
    fabImage: "https://lovoj.s3.amazonaws.com/fab9.webp",
    value: "Check Print LVJ005",
    paragraph: "Cotton -- Essential",
    price: "43$",
  },
  {
    id: 9,
    fabImage: "https://lovoj.s3.amazonaws.com/fab10.webp",
    value: "Geometric LVJ003",
    paragraph: "Cotton -- Essential",
    price: "61$",
  },
  {
    id: 11,
    fabImage: "https://lovoj.s3.amazonaws.com/fab11.webp",
    value: "Solid Color LVJ001",
    paragraph: "Cotton -- Essential",
    price: "37$",
  },
  {
    id: 12,
    fabImage: "https://lovoj.s3.amazonaws.com/fab12.webp",
    value: "Geometric LVJ004",
    paragraph: "Cotton -- Essential",
    price: "55$",
  },
  {
    id: 13,
    fabImage: "https://lovoj.s3.amazonaws.com/fab13.webp",
    value: "Check Print LVJ006",
    paragraph: "Cotton -- Essential",
    price: "48$",
  },
];

const FilterSidebar = ({ heading }: { heading: string }) => {
  // const { fabricNumber, setFabricNumber } = useAuth();
  const [fabricNumber, setFabricNumber] = useState(1);
  const [open, setOpen] = useState(true);
  const [Images, setImages] = useState([]);
  const { setIsDrawerOpen } = useApp();

  const handleGetData = async (storeNumber: any) => {
    await axios
      .get(
        `https://dev.fabricssoftware.com/api/v1/store/stores?search=Designer&storeNumber=${storeNumber}`
      )
      .then((res) => {
        setImages(res.data.data.stores[0].fabImages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storeNumber = localStorage.getItem("storeNumber");
      handleGetData(storeNumber);
    }
  }, []);

  const allFabImages = _.concat(FABRICS, Images);

  return (
    <div className="absolute top-[170px] left-0 right-0 w-full bg-white z-[99] h-[500px] overflow-y-auto">
      {" "}
      <div className="flex ">
        {/* <div className="max-md:hidden">
          <FilterSide open={open} setOpen={setOpen} />
        </div> */}

        {/* filter component */}
        <div className="w-full border-black rounded-lg">
          <div className="flex items-center justify-between px-[1rem] my-4 max-md:hidden">
            <div
              className="flex py-[0.5rem] px-[0.75rem] bg-white w-[6.69rem] gap-[0.5rem] rounded-[0.625rem] cursor-pointer items-center justify-center h-[3.25rem]"
              // onClick={() => {
              //   setOpen(!open);
              // }}
            >
              <h3>Filter</h3>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18C3 18.55 3.45 19 4 19H9V17H4C3.45 17 3 17.45 3 18ZM3 6C3 6.55 3.45 7 4 7H13V5H4C3.45 5 3 5.45 3 6ZM13 20V19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H13V16C13 15.45 12.55 15 12 15C11.45 15 11 15.45 11 16V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20ZM7 10V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H7V14C7 14.55 7.45 15 8 15C8.55 15 9 14.55 9 14V10C9 9.45 8.55 9 8 9C7.45 9 7 9.45 7 10ZM21 12C21 11.45 20.55 11 20 11H11V13H20C20.55 13 21 12.55 21 12ZM16 9C16.55 9 17 8.55 17 8V7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H17V4C17 3.45 16.55 3 16 3C15.45 3 15 3.45 15 4V8C15 8.55 15.45 9 16 9Z"
                  fill="#F703D0"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-black/50">Total 15</h3>
            </div>
          </div>

          {/* grid component */}
          <FabricRoot
            className={`grid ${
              open ? "grid-cols-3" : "grid-cols-1"
            } scrollbar-thin p-[1rem] w-full  gap-[1rem] overflow-y-auto`}
          >
            {allFabImages.map((item, key) => (
              <div key={key} className="w-full">
                <div
                  onClick={() => {
                    setFabricNumber(item.id);
                    // handleContrast(item.fabImage);
                    setIsDrawerOpen(false);
                    localStorage.setItem(
                      `${heading}_contrast`,
                      JSON.stringify({ image: item.fabImage, title: heading })
                    );
                  }}
                  className={`${
                    item.id === fabricNumber
                      ? "border-dark-pink"
                      : "border-black/40"
                  }  group  border object-contain  hover:border-dark-pink rounded-lg transition-all min-w-[50px] max-w-[300px] aspect-[1.34]`}
                >
                  <Image
                    className={`${
                      item.id === fabricNumber ? "scale-95" : ""
                    } cursor-pointer w-full h-full group-hover:scale-95 transition-all object-cover rounded-lg`}
                    src={item.fabImage}
                    width={383}
                    height={137}
                    alt="logo image"
                    onClick={() => {}}
                  />
                </div>
                <div className="mt-[0.53rem] w-[80%]">
                  <div className="flex justify-between px-1">
                    <h3 className="text-xs">
                      {
                        // @ts-ignore
                        item.value || item.fabricPattern[0]
                      }
                    </h3>
                    <p className="text-xs">
                      {item.price ||
                        `${Math.floor(Math.random() * (61 - 40) + 40)}$`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </FabricRoot>
        </div>
      </div>
    </div>
  );
};

export const FabricRoot = styled.div<any>`
  @media screen and (min-width: 768px) {
    height: calc(100% - 84px);
  }
`;

export const CollarImageCard = ({
  id,
  image,
  value,
  active,
  onClick,
  changeFabricState,
  heading,
  styleId,
}: {
  id: number;
  image: string;
  value: string;
  active: number;
  onClick: () => void;
  changeFabricState: string;
  heading: string;
  styleId: number;
}) => {
  return (
    <>
      <div className="flex items-center justify-between flex-col flex-1">
        <div
          className={`bg-white border rounded-lg w-full ${
            id === active ? "border-dark-pink" : "border-black/20"
          }`}
        >
          <div className="w-full mt-1.5 flex justify-end">
            <SwitchComp isSelectedProp={false} />
          </div>
          <div
            className={`flex item-center justify-center rounded-lg md:h-[8rem] h-[6rem] `}
            onClick={onClick}
          >
            <Image
              src={image}
              width={128}
              height={91}
              alt="shirt1"
              className=" bg-white p-4 cursor-pointer w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center w-full mt-2 font-jost px-2 justify-between">
          <h5 className="text-sm text-gray-500 ">{value}</h5>
        </div>
      </div>

      {heading === changeFabricState && styleId > 1 ? (
        <FilterSidebar heading={heading} />
      ) : null}
    </>
  );
};

export default function ChangeFabric({
  styles,
  heading,
  changeFabricState,
  setChangeFabricState,
}: {
  styles: {
    id: number;
    imageLink: string;
    label: string;
  }[];
  changeFabricState: string;
  setChangeFabricState: Dispatch<SetStateAction<string>>;
  heading: string;
}) {
  const [active, setActive] = useState(1);
  const [styleId, setStyleId] = useState(1);

  return (
    <div>
      <div className="flex justify-between items-center mt-[1rem]">
        <h3 className="text-xl font-[500]">{heading}</h3>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-[1.25rem] my-[1rem] relative">
          {styles.map((style, key) => (
            <CollarImageCard
              key={key}
              styleId={styleId}
              id={style.id}
              active={active}
              image={style.imageLink}
              value={style.label}
              heading={heading}
              changeFabricState={changeFabricState}
              onClick={() => {
                setActive(style.id);
                setStyleId((prev) =>
                  prev !== 1 && style.id === prev ? 1 : style.id
                );
                setChangeFabricState(heading);
              }}
            />
          ))}
        </div>
        {styleId > 1 && changeFabricState === heading ? (
          <div className="h-[500px] pointer-events-none z-[-10] relative"></div>
        ) : null}
      </div>
    </div>
  );
}
