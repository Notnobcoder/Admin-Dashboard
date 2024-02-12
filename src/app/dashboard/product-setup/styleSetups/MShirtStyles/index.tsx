"use client";

import StyleComp from "../../(components)/StyleComp";
import { TailSpin } from "react-loader-spinner";
import { useProductSetup } from "../../(components)/ProductSetupProvider";
import { Button } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

export let hemLineNo = 0,
  backStyleNo = 0,
  placketStyleNo = 0;

export const MShirtStyles = () => {
  const { loading, btnLoading, allStyles, addStylesForUser, error } =
    useProductSetup();

  const handleSubmit = (index: number, type: any, value: any) => {
    // UpdateShirtStyle(index, type);
  };

  return (
    <div className="md:h-full md:overflow-y-auto scrollbar-hide md:px-6 md:py-5">
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="max-md:h-full font-jost">
          <div className="font-jost flex flex-col gap-8">
            {allStyles[0]?.gender?.categories[0]?.subcategories.map((i) => {
              return (
                <StyleComp
                  key={i._id}
                  styles={i.styles}
                  heading={i.name}
                  onSubmit={handleSubmit}
                  subcategoriesObj={i}
                  type={""}
                />
              );
            })}
          </div>
        </div>
      )}

      <ToastContainer className="text-sm z-[9999] relative" />
      <div className="text-center mt-5">
        <Button
          isLoading={btnLoading}
          onClick={addStylesForUser}
          color="primary"
          className="bg-dark-pink text-white px-10 font-medium"
        >
          Save
        </Button>
      </div>
      {!loading && error && (
        <div className="flex items-center justify-center h-full w-full text-black/60 font-medium text-lg">
          {error}
        </div>
      )}
    </div>
  );
};
