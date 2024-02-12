"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "@nextui-org/react";
import { StyleD, SubcategoryD, UserStyleD } from "@/types/styles";
import { useProductSetup } from "./ProductSetupProvider";
import SubStyleComp from "./SubStyleComp";

type propsType = {
  styles: StyleD[];
  heading: string;
  onSubmit: (index: number, type: any, value?: string) => void;
  type: any;
  isValue?: boolean;
  setActiveNo?: Dispatch<SetStateAction<string>>;
  subcategoriesObj: SubcategoryD;
};

export default function StyleComp({
  styles,
  heading,
  onSubmit,
  type,
  isValue = false,
  setActiveNo,
  subcategoriesObj,
}: propsType) {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [initialStyles, setInitialStyles] = useState(styles.slice(0, 4));
  const [selectedStyleId, setSelectedStyleId] = useState("");
  const { setUserStylesData, allActiveStyles } = useProductSetup();

  // const handleDefaultStyle = (
  //   isDefault: boolean,
  //   _id: string,
  //   subcategoriesObj: any
  // ) => {
  //   if (isDefault) {
  //     // console.warn(subcategoriesObj, "PPPPPPPPPP iiiiii");
  //     setUserStylesData((prev) => {
  //       return prev.map((category) => {
  //         if (
  //           category.name.toLowerCase() === subcategoriesObj.name.toLowerCase()
  //         ) {
  //           return {
  //             ...category,
  //             styles: category.styles.map((style) => {
  //               if (style._id === _id) {
  //                 return {
  //                   ...style,
  //                   flag: true,
  //                 };
  //               }
  //               return {
  //                 ...style,
  //                 flag: false,
  //               };
  //             }),
  //           };
  //         }
  //         return category;
  //       });
  //     });
  //   } else {
  //     setUserStylesData((prev) => {
  //       return prev.map((category) => {
  //         if (
  //           category.name.toLowerCase() === subcategoriesObj.name.toLowerCase()
  //         ) {
  //           return {
  //             ...category,
  //             styles: category.styles.map((style) => {
  //               return {
  //                 ...style,
  //                 flag: false,
  //               };
  //             }),
  //           };
  //         }
  //         return category;
  //       });
  //     });
  //   }
  // };

  // const handleDefaultStyle = (
  //   isDefault: boolean,
  //   _id: string,
  //   subcategoriesObj: SubcategoryD,
  //   styleObj: UserStyleD
  // ) => {
  //   let updatedStyleObj = { ...styleObj, styleGlbImage: "" };
  //   if (isDefault) {
  //     // console.warn(subcategoriesObj, "PPPPPPPPPP iiiiii");
  //     setUserStylesData((prev) => {
  //       let _temp = [...prev];
  //       if (_temp.length > 0) {
  //         return _temp.map((category) => {
  //           if (
  //             category.name.toLowerCase() ===
  //             subcategoriesObj.name.toLowerCase()
  //           ) {
  //             return {
  //               ...category,
  //               styles: category.styles.map((style) => {
  //                 let tt = style.catStyleName
  //                   .toLowerCase()
  //                   .includes(styleObj.catStyleName);

  //                 if (tt) {
  //                   if (style._id === _id) {
  //                     return {
  //                       ...style,
  //                       flag: true,
  //                     };
  //                   } else {
  //                     return {
  //                       ...style,
  //                       flag: false,
  //                     };
  //                   }
  //                 } else {
  //                   return { ...updatedStyleObj, flag: true };
  //                 }
  //               }),
  //             };
  //           }
  //           return category;
  //         });
  //       } else {
  //         _temp.push({
  //           name: subcategoriesObj.name,
  //           catImage: subcategoriesObj.subCatImage,
  //           catNumber: subcategoriesObj.subCatNumber,
  //           styles: [{ ...updatedStyleObj, flag: true }],
  //         });
  //         return [..._temp];
  //       }
  //     });
  //   } else {
  //     setUserStylesData((prev) => {
  //       return prev.map((category) => {
  //         if (
  //           category.name.toLowerCase() === subcategoriesObj.name.toLowerCase()
  //         ) {
  //           return {
  //             ...category,
  //             styles: category.styles.map((style) => {
  //               return {
  //                 ...style,
  //                 flag: false,
  //               };
  //             }),
  //           };
  //         }
  //         return category;
  //       });
  //     });
  //   }
  // };

  // const handleDefaultStyle = (
  //   isDefault: boolean,
  //   _id: string,
  //   subcategoriesObj: SubcategoryD,
  //   styleObj: UserStyleD
  // ) => {
  //   let updatedStyleObj = { ...styleObj, styleGlbImage: "" };
  //   if (isDefault) {
  //     setUserStylesData((prev) => {
  //       let _temp = [...prev];
  //       if (_temp.length > 0) {
  //         let categoryIndex = _temp.findIndex(
  //           (category) =>
  //             category.name.toLowerCase() ===
  //             subcategoriesObj.name.toLowerCase()
  //         );

  //         if (categoryIndex !== -1) {
  //           // Category exists, update styles
  //           return _temp.map((category, index) => {
  //             if (index === categoryIndex) {
  //               return {
  //                 ...category,
  //                 styles: category.styles.map((style) => {
  //                   let tt =
  //                     style.catStyleName.toLowerCase() ===
  //                     styleObj.catStyleName.toLowerCase();

  //                   if (tt) {
  //                     if (style._id === styleObj._id) {
  //                       return {
  //                         ...style,
  //                         flag: true,
  //                       };
  //                     } else {
  //                       return {
  //                         ...style,
  //                         flag: false,
  //                       };
  //                     }
  //                   } else {
  //                     return {
  //                       ...style,
  //                       flag: false,
  //                     };
  //                   }
  //                 }),
  //               };
  //             }
  //             return category;
  //           });
  //         } else {
  //           // Category doesn't exist, add a new category
  //           return [
  //             ..._temp,
  //             {
  //               name: subcategoriesObj.name,
  //               catImage: subcategoriesObj.subCatImage,
  //               catNumber: subcategoriesObj.subCatNumber,
  //               styles: [{ ...updatedStyleObj, flag: true }],
  //             },
  //           ];
  //         }
  //       } else {
  //         // _temp is empty, add a new category
  //         return [
  //           {
  //             name: subcategoriesObj.name,
  //             catImage: subcategoriesObj.subCatImage,
  //             catNumber: subcategoriesObj.subCatNumber,
  //             styles: [{ ...updatedStyleObj, flag: true }],
  //           },
  //         ];
  //       }
  //     });
  //   } else {
  //     setUserStylesData((prev) => {
  //       return prev.map((category) => {
  //         if (
  //           category.name.toLowerCase() === subcategoriesObj.name.toLowerCase()
  //         ) {
  //           return {
  //             ...category,
  //             styles: category.styles.map((style) => {
  //               return {
  //                 ...style,
  //                 flag: false,
  //               };
  //             }),
  //           };
  //         }
  //         return category;
  //       });
  //     });
  //   }
  // };

  const handleDefaultStyle = (
    isDefault: boolean,
    _id: string,
    subcategoriesObj: SubcategoryD,
    styleObj: UserStyleD
  ) => {
    let isDefaultStylePresent: UserStyleD | null = null;
    let isStylePresent = false;

    let updatedStyleObj = { ...styleObj, styleGlbImage: "" };
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
    if (isDefault) {
      console.warn(isDefaultStylePresent, "PPPPPP isDefaultStylePresent");
      console.warn(isStylePresent, "PPPPPP isStylePresent");

      setUserStylesData((prev) => {
        let _temp = [...prev];
        if (_temp.length > 0) {
          let categoryIndex = _temp.findIndex(
            (category) =>
              category.name.toLowerCase() ===
              subcategoriesObj.name.toLowerCase()
          );

          if (categoryIndex !== -1) {
            return _temp.map((category) => {
              if (
                category.name.toLowerCase() ===
                subcategoriesObj.name.toLowerCase()
              ) {
                let styleIndex = category.styles.findIndex(
                  (style) =>
                    style.catStyleName.toLowerCase() ===
                    styleObj.catStyleName.toLowerCase()
                );

                if (styleIndex !== -1) {
                  console.warn("third pppppp");
                  let userStyles: UserStyleD[] = [];

                  if (
                    isDefaultStylePresent &&
                    !isStylePresent &&
                    isDefaultStylePresent.catStyleName === styleObj.catStyleName
                  ) {
                    console.warn("third pppppp if");
                    let tt = category.styles.filter(
                      (i) =>
                        i.catStyleName !== isDefaultStylePresent?.catStyleName
                    );

                    userStyles = tt.map((style) => {
                      return { ...style, flag: false };
                    });
                  } else if (
                    isDefaultStylePresent &&
                    !isStylePresent &&
                    isDefaultStylePresent.catStyleName !== styleObj.catStyleName
                  ) {
                    console.warn("third pppppp else if");
                    let jj = category.styles.filter(
                      (i) => i.catStyleName !== styleObj.catStyleName
                    );
                    jj = jj.map((i) => ({ ...i, flag: false }));

                    let kk = jj.findIndex(
                      (i) =>
                        i.catStyleName === isDefaultStylePresent?.catStyleName
                    );

                    if (kk !== -1) {
                      userStyles = [...jj];
                      userStyles.push({ ...updatedStyleObj, flag: true });
                    } else {
                      userStyles = [...jj];
                      userStyles.push({ ...updatedStyleObj, flag: true });
                      userStyles.push({
                        ...isDefaultStylePresent,
                        flag: false,
                      });
                    }
                  } else if (!isStylePresent && !isDefaultStylePresent) {
                    let tt = category.styles.map((style) => {
                      if (style.catStyleName === styleObj.catStyleName) {
                        return { ...style, flag: true };
                      } else {
                        return { ...style, flag: false };
                      }
                    });
                    userStyles = tt;
                  }

                  // remove objects already available in allactivestyles

                  allActiveStyles.categories.map((i) => {
                    if (i.name === subcategoriesObj.name) {
                      i.styles.map((k) => {
                        // Check if the object is present in userStyles
                        const isObjectPresent = userStyles.some(
                          (j) =>
                            j.catStyleName === k.catStyleName &&
                            j.flag === k.flag
                        );

                        // If the object is present, remove it from userStyles
                        if (isObjectPresent) {
                          userStyles = userStyles.filter(
                            (j) =>
                              !(
                                j.catStyleName === k.catStyleName &&
                                j.flag === k.flag
                              )
                          );
                        }
                      });
                    }
                  });

                  return {
                    ...category,
                    styles: userStyles,
                  };
                } else {
                  console.warn("second pppppp");
                  let userStyles: UserStyleD[] = [];

                  if (
                    isDefaultStylePresent &&
                    isDefaultStylePresent.catStyleName !== styleObj.catStyleName
                  ) {
                    let jj = category.styles.map((style) => {
                      return { ...style, flag: false };
                    });

                    let kk = jj.findIndex(
                      (i) =>
                        i.catStyleName === isDefaultStylePresent?.catStyleName
                    );

                    if (kk !== -1) {
                      userStyles = [...jj];
                      userStyles.push({ ...updatedStyleObj, flag: true });
                    } else {
                      userStyles = [...jj];
                      userStyles.push({ ...updatedStyleObj, flag: true });
                      userStyles.push({
                        ...isDefaultStylePresent,
                        flag: false,
                      });
                    }
                  }

                  // remove objects already available in allactivestyles

                  allActiveStyles.categories.map((i) => {
                    if (i.name === subcategoriesObj.name) {
                      i.styles.map((k) => {
                        // Check if the object is present in userStyles
                        const isObjectPresent = userStyles.some(
                          (j) =>
                            j.catStyleName === k.catStyleName &&
                            j.flag === k.flag
                        );

                        // If the object is present, remove it from userStyles
                        if (isObjectPresent) {
                          userStyles = userStyles.filter(
                            (j) =>
                              !(
                                j.catStyleName === k.catStyleName &&
                                j.flag === k.flag
                              )
                          );
                        }
                      });
                    }
                  });

                  return {
                    ...category,
                    styles: userStyles,
                  };
                }
              }
              return category;
            });
          } else {
            console.warn("fourth pppppp");
            let userStyles: UserStyleD[] = [{ ...updatedStyleObj, flag: true }];

            if (isDefaultStylePresent) {
              userStyles.push({ ...isDefaultStylePresent, flag: false });
            }
            return [
              ..._temp,
              {
                name: subcategoriesObj.name,
                catImage: subcategoriesObj.subCatImage,
                catNumber: subcategoriesObj.subCatNumber,
                styles: userStyles,
              },
            ];
          }
        } else {
          console.warn("first pppppp");
          let userStyles: UserStyleD[] = [{ ...updatedStyleObj, flag: true }];

          if (isDefaultStylePresent) {
            userStyles.push({ ...isDefaultStylePresent, flag: false });
          }
          return [
            {
              name: subcategoriesObj.name,
              catImage: subcategoriesObj.subCatImage,
              catNumber: subcategoriesObj.subCatNumber,
              styles: userStyles,
            },
          ];
        }
      });
    }
  };

  return (
    <div>
      <div className="flex scrollbar justify-between items-center">
        <h3 className="text-xl font-[500] mb-2">{heading}</h3>
        {styles.length > 4 ? (
          <h3
            className="text-sm text-dark-pink font-semibold cursor-pointer"
            onClick={() => {
              setInitialStyles(toggle ? styles.slice(0, 4) : styles);
              setToggle(!toggle);
            }}
          >
            {toggle ? "View Less" : "View More"}
          </h3>
        ) : null}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4">
        {initialStyles.map((i, index) => (
          <div
            className="flex items-center justify-center flex-col"
            key={i._id}
          >
            <SubStyleComp
              {...{ active, subcategoriesObj, setSelectedStyleId }}
              styleObj={i}
              id={i._id}
              checkbox={
                <Checkbox
                  isSelected={selectedStyleId === i._id}
                  onValueChange={(isDefault) => {
                    setSelectedStyleId(i._id);
                    handleDefaultStyle(isDefault, i._id, subcategoriesObj, i);
                  }}
                  className="mt-1"
                >
                  Default
                </Checkbox>
              }
              image={
                i.styleImage.startsWith("https")
                  ? i.styleImage
                  : "/Images/no-image.jpg"
              }
              value={i.catStyleName}
              onClick={() => {
                onSubmit(index, type, isValue ? i.catStyleName : "");
                setActive(i._id);
                if (setActiveNo) {
                  setActiveNo(i._id);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
