import { Checkbox } from "@nextui-org/react";

const PositionData = [
  { id: 1, value: "Left Chest" },
  { id: 2, value: "Right Chest" },
  { id: 3, value: "Left Cuff" },
  { id: 4, value: "Right Cuff" },
  { id: 5, value: "Left Sleeve" },
  { id: 6, value: "Right Sleeve" },
  { id: 7, value: "Front Middle" },
  { id: 8, value: "Back of Neck" },
  { id: 9, value: "Shirt Back" },
];
export const Position = ({ heading }: { heading: string }) => {
  return (
    <div className="my-3">
      <div className="mb-2">
        <h2 className="font-[500] text-xl">{heading}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {PositionData.map((item, key) => (
          <div key={key} className="flex items-center">
            <Checkbox />
            <h4>{item.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
