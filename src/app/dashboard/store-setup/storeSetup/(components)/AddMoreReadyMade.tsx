import Image from "next/image";
import Link from "next/link";
import { type ReactElement } from "react";
import { FaCirclePlus } from "react-icons/fa6";

export interface AddMoreReadyMadeProps {}

export function AddMoreReadyMade(): ReactElement {
  return (
    <>
      <div
        className={
          "md:col-span-3 flex-col lg:col-span-2 border-[2px] flex items-center justify-center border-black/20 h-[65vh]"
        }
      >
        <Link href="/dashboard/store-setup/add-ready-made">
          <FaCirclePlus size={50} className="text-dark-pink" />
        </Link>
        <h3 className="my-4 text-lg font-normal font-bold-[500]">
          Add New Readymade
        </h3>
        <Image
          src={"/rearrange/newStore/tShirt.png"}
          width={60}
          height={60}
          alt="t shirt image icon"
        />
      </div>
    </>
  );
}
