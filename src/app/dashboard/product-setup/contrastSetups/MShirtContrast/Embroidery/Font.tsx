import { Checkbox } from "@nextui-org/react";

// --------- utils
interface EmbroideryFonts {
  value: "Abc";
}

const Embroidary = [
  { id: 1, value: "Abc" },
  { id: 2, value: "Abc" },
  { id: 3, value: "Abc" },
  { id: 4, value: "Abc" },
  { id: 5, value: "Abc" },
  { id: 6, value: "Abc" },
];

export const EmbroideryFonts = ({ heading }: { heading: string }) => {
  return (
    <div className="my-3">
      <div className="mb-2">
        <h2 className="font-[500] text-xl">{heading}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Embroidary.map((item, key) => (
          <div className="flex items-center">
            <Checkbox />
            <h3 className="text-3xl">{item.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
