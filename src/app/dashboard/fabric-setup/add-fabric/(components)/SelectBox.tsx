import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import styled from "styled-components";

export default function SelectBox({
  className,
  placeholder,
  options,
}: {
  className: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <SelectDiv className={className}>
      <Select
        label=""
        labelPlacement="outside"
        placeholder={placeholder}
        className="max-w-xs"
      >
        {options.map((i) => (
          <SelectItem key={i} value={i}>
            {i}
          </SelectItem>
        ))}
      </Select>
    </SelectDiv>
  );
}

const SelectDiv = styled.div`
  .tap-highlight-transparent {
    background-color: transparent;
    border: 1px solid #e7e7f6;
    height: 40px;
  }
`;
