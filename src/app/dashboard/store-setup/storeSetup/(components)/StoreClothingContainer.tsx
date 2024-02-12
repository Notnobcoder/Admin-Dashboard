import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

type StoreClothingContainerProps = {};

export const StoreClothingContainer: React.FC<
  StoreClothingContainerProps
> = () => {
  const headerValue = [
    {
      id: 1,
      heading: "Tailor / Boutique",
      svgLink: "/rearrange/newStore/suit.svg",
    },
    { id: 2, heading: "Designer", svgLink: "/rearrange/newStore/sketch.svg" },
    {
      id: 3,
      heading: "Alteration",
      svgLink: "/rearrange/newStore/alteration.svg",
    },
  ];
  const [clothingType, setClothingType] = useState("Tailor / Boutique");
  const [svgItem, setSvgItem] = useState("/rearrange/newStore/suit.svg");

  return (
    <div className="my-8 flex items-center gap-4">
      <Image
        className={"w-[163px] h-[159px]"}
        src={"/rearrange/storeSetup/drop.svg"}
        alt="Image "
        width={200}
        height={200}
      />
      <div>
        <h3 className="text-3xl font-medium font-jost ">Merina Clothing</h3>
        <div className="mt-2">
          <Dropdown>
            <DropdownTrigger>
              <div className=" border border-black/30 gap-4 py-2 pr-2  pl-2 flex items-center  text-center rounded-sm text-dark-pink bg-white  cursor-pointer ">
                <Image
                  className="text-dark-pink"
                  src={svgItem}
                  alt="alteration item"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl">{clothingType}</h3>
                <FaAngleDown size={30} />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={headerValue}>
              {headerValue.map((_item) => (
                <DropdownItem
                  className="font-bold"
                  key={_item.id}
                  onClick={() => {
                    setClothingType(_item.heading);
                    setSvgItem(_item.svgLink);
                  }}
                >
                  <div className="flex transition text-dark-pink  items-center justify-start gap-4 px-3 w-[300px] ">
                    <Image
                      className="hover:text-white"
                      src={_item.svgLink}
                      width={40}
                      height={40}
                      alt="image link"
                    />
                    {_item.heading}
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
