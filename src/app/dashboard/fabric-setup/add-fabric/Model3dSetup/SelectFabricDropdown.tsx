"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

type AddProductsD = {
  dropdowns: string[];
  buttons: string[];
};

// Men Clothes

export const PRODUCT_OPTIONS = ["Pant", "Blazer", "Vest"];

export const ADD_PRODUCTS_OPTIONS: AddProductsD = {
  dropdowns: PRODUCT_OPTIONS,
  buttons: ["Shirt"],
};

const SelectFabricDropdown = () => {
  const [activeType, setActiveType] = useState("Shirt");
  const [addProducts, setAddProducts] = useState(
    ADD_PRODUCTS_OPTIONS as AddProductsD
  );

  console.log(activeType, "activeType pppppp");

  const handleAddProducts = (text: string) => {
    // Find the clicked product in addProducts
    const clickedProductIndex = addProducts.dropdowns.findIndex(
      (product) => product === text
    );

    // If the clicked product is found, remove it from addProducts and add it to buttons
    if (clickedProductIndex !== -1) {
      const clickedProduct = addProducts.dropdowns[clickedProductIndex];

      setAddProducts((prev) => {
        const updatedAddProducts = [...prev.dropdowns];
        updatedAddProducts.splice(clickedProductIndex, 1);

        return {
          ...prev,
          dropdowns: updatedAddProducts,
          buttons: [...prev.buttons, clickedProduct],
        };
      });

      // Optionally, update the activeStyle state based on your logic
      setActiveType(clickedProduct);
    }
  };

  const handleDeleteProducts = (text: string) => {
    const clickedProductIndex = addProducts.buttons.findIndex(
      (product) => product === text
    );

    if (clickedProductIndex !== -1) {
      // If the clicked product is in buttons, remove it from buttons and add it back to dropdowns
      const clickedProduct = addProducts.buttons[clickedProductIndex];

      setAddProducts((prev) => {
        const updatedButtons = [...prev.buttons];
        updatedButtons.splice(clickedProductIndex, 1);

        return {
          ...prev,
          dropdowns: [...prev.dropdowns, clickedProduct],
          buttons: updatedButtons,
        };
      });

      setActiveType((prev) =>
        prev === text
          ? addProducts.buttons.find((btn) => btn !== text) ||
            addProducts.buttons[0]
          : prev
      );
    }
  };

  return (
    <div>
      <select
        className="w-full bg-white px-4 py-3 rounded-[0.75rem] border border-[#E7E7F6]"
        onChange={(e) => handleAddProducts(e.target.value)}
      >
        <option value={activeType}>{activeType}</option>
        {addProducts.dropdowns.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>

      {addProducts.buttons.length > 1 && (
        <div className="mt-4 flex items-center gap-3 flex-wrap">
          {addProducts.buttons.map((button, index) => (
            <div key={index}>
              <Button
                color="primary"
                className={`rounded-lg h-10 w-fit px-4 font-medium ${
                  activeType === button
                    ? "bg-dark-pink text-white"
                    : "bg-[#CBCBCB] text-black"
                }
        `}
                endContent={
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProducts(button);
                    }}
                  >
                    <IoClose className="text-xl" />
                  </div>
                }
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveType(button);
                }}
              >
                {button}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectFabricDropdown;
