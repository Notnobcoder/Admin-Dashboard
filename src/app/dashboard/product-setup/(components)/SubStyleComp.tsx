"use client";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Button, Checkbox, Switch, cn } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { StyleD, SubcategoryD, UserStyleD } from "@/types/styles";
import { useProductSetup } from "./ProductSetupProvider";

type imageCardType = {
  image: string;
  value: string;
  onClick: () => void;
  id: string;
  active: string;
  checkbox: any;
  subcategoriesObj: SubcategoryD;
  styleObj: StyleD;
  setSelectedStyleId: Dispatch<SetStateAction<string>>;
  // activeStyles: any;
};

const SubStyleComp = ({
  id,
  image,
  value,
  onClick,
  active,
  checkbox,
  subcategoriesObj,
  styleObj,
  setSelectedStyleId,
}: // activeStyles,
  imageCardType) => {
  const [isSelected, setIsSelected] = useState(false);
  const { setUserStylesData, allActiveStyles, setDeleteStyles } =
    useProductSetup();

  const handleActiveStyles = () => {
    allActiveStyles?.categories?.map((category) => {
      if (category.name === subcategoriesObj.name) {
        category.styles.map((style) => {
          if (style.catStyleName === styleObj.catStyleName) {
            setIsSelected(true);
            if (style.flag && style._id) {
              setSelectedStyleId(style._id);
            }
          }
        });
      }
    });
  };

  useLayoutEffect(() => {
    handleActiveStyles();
  }, [allActiveStyles]);

  // const handleUserStylesData = (isSelectedState: boolean) => {
  //   let updatedStyleObj = { ...styleObj, styleGlbImage: "" };
  //   if (isSelectedState) {
  //     setUserStylesData((prev) => {
  //       let _temp = [...prev];
  //       if (_temp.length > 0) {
  //         let _i = _temp.findIndex(
  //           (e) => e.name.toLowerCase() == subcategoriesObj.name.toLowerCase()
  //         );
  //         if (_i !== -1) {
  //           if (_temp[_i].styles.includes(updatedStyleObj) === false) {
  //             _temp[_i].styles.push(updatedStyleObj);
  //           }

  //           return [..._temp];
  //         } else {
  //           _temp.push({
  //             name: subcategoriesObj.name,
  //             catImage: subcategoriesObj.subCatImage,
  //             catNumber: subcategoriesObj.subCatNumber,
  //             styles: [updatedStyleObj],
  //           });
  //           return [..._temp];
  //         }
  //       } else {
  //         _temp.push({
  //           name: subcategoriesObj.name,
  //           catImage: subcategoriesObj.subCatImage,
  //           catNumber: subcategoriesObj.subCatNumber,
  //           styles: [updatedStyleObj],
  //         });
  //         return [..._temp];
  //       }
  //     });
  //   } else {
  //     setUserStylesData((prev) => {
  //       let _temp = [...prev];
  //       // console.log(_temp, "_temp PPPPPPPPP");
  //       if (_temp.length > 0) {
  //         let _i = _temp.findIndex(
  //           (e) => e.name.toLowerCase() == subcategoriesObj.name.toLowerCase()
  //         );
  //         if (_i !== -1) {
  //           let _remove: UserStyleD[] = [];
  //           if (
  //             _temp[_i].styles.some(
  //               (style) => style.catStyleName === updatedStyleObj.catStyleName
  //             )
  //           ) {
  //             _remove = _temp[_i].styles.filter(
  //               (e) =>
  //                 e.catStyleName.toLowerCase() !=
  //                 updatedStyleObj.catStyleName.toLowerCase()
  //             );
  //             if (_temp[_i].styles.length > 1) {
  //               _temp[_i].styles = [..._remove];
  //             } else {
  //               _temp = _temp.filter(
  //                 (e) =>
  //                   e.name.toLowerCase() !== subcategoriesObj.name.toLowerCase()
  //               );
  //             }
  //           }
  //           return [..._temp];
  //         } else {
  //           return [..._temp];
  //         }
  //       } else {
  //         _temp.push({
  //           name: subcategoriesObj.name,
  //           catImage: subcategoriesObj.subCatImage,
  //           catNumber: subcategoriesObj.subCatNumber,
  //           styles: [],
  //         });
  //         return [..._temp];
  //       }
  //     });
  //   }
  // };

  const handleUserStylesData = (isSelectedState: boolean) => {
    let updatedStyleObj = { ...styleObj, styleGlbImage: "" };
    let isStylePresent = false;
    let isDefaultStylePresent: UserStyleD | null = null;
    allActiveStyles?.categories?.forEach((category) => {
      if (category.name === subcategoriesObj.name) {
        category.styles.some((style) => {
          if (style.catStyleName === styleObj.catStyleName && !style.flag) {
            isStylePresent = true;
          } else if (
            style.catStyleName === styleObj.catStyleName &&
            style.flag
          ) {
            isDefaultStylePresent = style;
          } else if (
            style.catStyleName !== styleObj.catStyleName &&
            style.flag
          ) {
            isDefaultStylePresent = style;
          }
        });
      }
    });

    if (isSelectedState) {
      setUserStylesData((prev) => {
        let _temp = [...prev];
        if (_temp.length > 0) {
          let _i = _temp.findIndex(
            (e) => e.name.toLowerCase() == subcategoriesObj.name.toLowerCase()
          );
          if (_i !== -1) {
            if (
              _temp[_i].styles.every(
                (style) =>
                  style.catStyleName.toLowerCase() !==
                  updatedStyleObj.catStyleName.toLowerCase()
              )
            ) {
              isStylePresent
                ? [..._temp]
                : _temp[_i].styles.push(updatedStyleObj);
              // Check if styles array is empty, then remove the parent array
              if (_temp[_i].styles.length === 0) {
                _temp.splice(_i, 1);
              }
            }
            return [..._temp];
          } else {
            _temp.push({
              name: subcategoriesObj.name,
              catImage: subcategoriesObj.subCatImage,
              catNumber: subcategoriesObj.subCatNumber,
              styles: [updatedStyleObj],
            });
            return [..._temp];
          }
        } else {
          _temp.push({
            name: subcategoriesObj.name,
            catImage: subcategoriesObj.subCatImage,
            catNumber: subcategoriesObj.subCatNumber,
            styles: [updatedStyleObj],
          });
          return [..._temp];
        }
      });
    } else {
      setUserStylesData((prev) => {
        let _temp = [...prev];
        // console.log(_temp, "_temp PPPPPPPPP");
        if (_temp.length > 0) {
          let _i = _temp.findIndex(
            (e) => e.name.toLowerCase() == subcategoriesObj.name.toLowerCase()
          );
          if (_i !== -1) {
            let _remove: UserStyleD[] = [];
            if (
              _temp[_i].styles.some(
                (style) =>
                  style.catStyleName.toLowerCase() ===
                  updatedStyleObj.catStyleName.toLowerCase()
              )
            ) {
              _remove = _temp[_i].styles.filter(
                (e) =>
                  e.catStyleName.toLowerCase() !=
                  updatedStyleObj.catStyleName.toLowerCase()
              );
              if (_temp[_i].styles.length > 1) {
                _temp[_i].styles = [..._remove];
              } else {
                _temp = _temp.filter(
                  (e) =>
                    e.name.toLowerCase() !== subcategoriesObj.name.toLowerCase()
                );
              }
            }
            return [..._temp];
          } else {
            _temp.push({
              name: subcategoriesObj.name,
              catImage: subcategoriesObj.subCatImage,
              catNumber: subcategoriesObj.subCatNumber,
              styles: [],
            });
            return [..._temp];
          }
        } else {
          console.warn("1 pppppp")
          return [
            {
              name: subcategoriesObj.name,
              catImage: subcategoriesObj.subCatImage,
              catNumber: subcategoriesObj.subCatNumber,
              styles: [],
            },
          ];
        }
      });
    }
  };

  const handleDeleteStyles = (isSelectedState: boolean) => {
    setDeleteStyles((prevStyles) => {
      let isStylePresent = false;

      allActiveStyles?.categories?.forEach((category) => {
        if (category.name === subcategoriesObj.name) {
          category.styles.forEach((style) => {
            if (style.catStyleName === styleObj.catStyleName) {
              isStylePresent = true;
              if (style.flag && style._id) {
                setSelectedStyleId(style._id);
              }
              //  else {
              //   setSelectedStyleId("");
              // }
            }
          });
        }
      });

      // let updatedStyles;

      // if (isSelectedState) {
      //   if (isStylePresent) {
      //     console.warn("1 pppppp if");
      //     updatedStyles = prevStyles.filter((item) => item !== styleObj.catStyleName);
      //   } else {
      //     console.warn("1 pppppp else");
      //     updatedStyles = prevStyles;
      //   }
      // } else {
      //   if (isStylePresent) {
      //     console.warn("2 pppppp if");
      //     updatedStyles = [...prevStyles, styleObj.catStyleName];
      //   } else {
      //     console.warn("2 pppppp else");
      //     updatedStyles = prevStyles;
      //   }
      // }

      const updatedStyles = isSelectedState
        ? isStylePresent
          ? prevStyles.filter((item) => item !== styleObj.catStyleName)
          : prevStyles
        : isStylePresent
          ? [...prevStyles, styleObj.catStyleName]
          : prevStyles;

      return updatedStyles;
    });
  };
  // const handleDeleteStyles = (isSelectedState: boolean) => {
  //   let updatedStyleObj = { ...styleObj, styleGlbImage: "" };
  //   setDeleteStyles((prevStyles) => {
  //     if (isSelectedState) {
  //       // Remove styleObj.catStyleName from the array if present

  //       return prevStyles.filter((item) => item !== styleObj.catStyleName);
  //     } else {
  //       setUserStylesData((prev) => {
  //         let _temp = [...prev];
  //         // console.log(_temp, "_temp PPPPPPPPP");

  //         if (_temp.length > 0) {
  //           let _i = _temp.findIndex(
  //             (e) => e.name.toLowerCase() == subcategoriesObj.name.toLowerCase()
  //           );
  //           if (_i !== -1) {
  //             let _remove: UserStyleD[] = [];
  //             if (
  //               _temp[_i].styles.some(
  //                 (style) => style.catStyleName === updatedStyleObj.catStyleName
  //               )
  //             ) {
  //               _remove = _temp[_i].styles.filter(
  //                 (e) =>
  //                   e.catStyleName.toLowerCase() !=
  //                   updatedStyleObj.catStyleName.toLowerCase()
  //               );
  //               if (_temp[_i].styles.length > 1) {
  //                 _temp[_i].styles = [..._remove];
  //               } else {
  //                 _temp = _temp.filter(
  //                   (e) =>
  //                     e.name.toLowerCase() !==
  //                     subcategoriesObj.name.toLowerCase()
  //                 );
  //               }
  //             }
  //             return [..._temp];
  //           } else {
  //             return [..._temp];
  //           }
  //         } else {
  //           console.warn("PPPPPPPP");
  //           // _temp.push({
  //           //   name: subcategoriesObj.name,
  //           //   catImage: subcategoriesObj.subCatImage,
  //           //   catNumber: subcategoriesObj.subCatNumber,
  //           //   styles: [],
  //           // });
  //           return [..._temp];
  //         }
  //       });
  //       // Add styleObj.catStyleName to the array if not present
  //       return [...prevStyles, styleObj.catStyleName];
  //     }
  //   });
  // };

  return (
    <>
      <div
        className={`${id === active
          ? "border-dark-pink"
          : isSelected
            ? "border-green-500"
            : "border-black/20 hover:border-dark-pink"
          } bg-white w-full max-w-[151px] flex flex-col gap-4 py-1.5 border-[2px] px-1 items-center rounded-2xl cursor-pointer`}
        onClick={onClick}
      >
        <div className="flex items-center justify-end w-full">
          <Switch
            isSelected={isSelected}
            onValueChange={(isSelectedState) => {
              setIsSelected(!isSelected);
              handleUserStylesData(isSelectedState);
              handleDeleteStyles(isSelectedState);
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
        </div>
        <Image
          className="min-w-[40px] max-w-[80px] h-full max-h-[35px] object-contain"
          src={image}
          alt="image Links"
          width={180}
          height={180}
        />
        <h2
          className={`text-xs text-center font-medium ${id === active ? "text-black" : "text-black/70"
            }`}
        >
          {value}
        </h2>
      </div>
      {isSelected ? (
        checkbox
      ) : (
        <Checkbox isDisabled={true} className="mt-1">
          Default
        </Checkbox>
      )}
    </>
  );
};

export default SubStyleComp;
