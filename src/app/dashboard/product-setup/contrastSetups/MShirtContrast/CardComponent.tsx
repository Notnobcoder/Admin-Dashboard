import { SwitchComp } from "@/components/SwitchComp";
import Image from "next/image";

interface DataComponentProps {
  id: number;
  heading: string;
  imageLink: string;
}

interface CardComponentProps {
  data: DataComponentProps[];
  heading: string;
}
export const CardComponent: React.FC<CardComponentProps> = ({
  heading,
  data,
}) => {
  return (
    <div className="my-3">
      <div className="mb-2">
        <h2 className="font-[500] text-xl">{heading}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, key) => (
          <div>
            <div
              key={key}
              className="flex items-center border h-[118px] flex-col justify-center bg-white py-1 border-black/20 rounded-lg hover:border-dark-pink"
            >
              <div className="w-full mt-1.5 flex justify-end">
                {item.id > 1 ? <SwitchComp isSelectedProp={false} /> : null}
              </div>
              <div>
                <Image
                  src={item.imageLink}
                  className="w-[90px] h-[90px] scale-80 object-contain"
                  width={200}
                  height={200}
                  alt="item"
                />
              </div>
            </div>
            <div className="mt-1">
              <h4 className="text-[#8C8C8C] text-sm ">{item.heading}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
