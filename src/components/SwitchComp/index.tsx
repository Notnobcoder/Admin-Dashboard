import { Switch, cn } from "@nextui-org/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface SwitchCompProps {
  isSelectedProp: boolean;
}

export const SwitchComp: React.FC<SwitchCompProps> = ({ isSelectedProp }) => {
  const [isSelected, setIsSelected] = useState(isSelectedProp || false);
  return (
    <Switch
      isSelected={isSelected}
      onValueChange={(isSelectedState) => {
        setIsSelected(!isSelected);
      }}
      size="sm"
      color="success"
      classNames={{
        base: "",
        wrapper:
          "bg-red-600 group-data-[selected=true]:bg-green-600 h-[20px] border-[1px] border-gray",
        thumb: cn(
          "rounded-full bg-white w-[12px] h-[12px]",
          "group-data-[selected=true]:bg-white",
          "group-data-[selected=true]"
        ),
      }}
      startContent={<FaCheck style={{ color: "white" }} />}
      endContent={<IoClose style={{ color: "white" }} />}
    ></Switch>
  );
};
