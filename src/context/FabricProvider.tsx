// ts-nocheck
"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ENDPOINT } from "@/network";
import axios from "axios";
import { useAuth } from "./AuthProvider";

type AppContextD = {
  fabImage: any;
  setFabImage: Dispatch<SetStateAction<any>>;
  fabImageName: string;
  setfabImageName: Dispatch<SetStateAction<string>>;
  storeNumber: string;
  setStoreNumber: Dispatch<SetStateAction<string>>;
  fabName: string;
  setFabName: Dispatch<SetStateAction<string>>;
  fabNumber: string;
  setFabNumber: Dispatch<SetStateAction<string>>;
  dashNumber: string;
  setDashNumber: Dispatch<SetStateAction<string>>;
  fabricCategory: string;
  setFabricCategory: Dispatch<SetStateAction<string>>;
  fabricSubCategory: string;
  fabricBrand: string;
  setFabricBrand: Dispatch<SetStateAction<string>>;
  setFabricSubCategory: Dispatch<SetStateAction<string>>;
  fabricGms: string;
  setFabricGms: Dispatch<SetStateAction<string>>;
  fabricColor: string;
  setFabricColor: Dispatch<SetStateAction<string>>;
  fabricMaterial: string;
  setFabricMaterial: Dispatch<SetStateAction<string>>;
  fabricPattern: string;
  setFabricPattern: Dispatch<SetStateAction<string>>;
  fabricType: string;
  setFabricType: Dispatch<SetStateAction<string>>;
  fabricCharacteristics: string;
  setFabricCharacteristics: Dispatch<SetStateAction<string>>;
  fabricComposition: string;
  setFabricComposition: Dispatch<SetStateAction<string>>;
  fabricSeason: string;
  setFabricSeason: Dispatch<SetStateAction<string>>;
  fabricDescription: string;
  setFabricDescription: Dispatch<SetStateAction<string>>;
  imagePreview: string | null;
  setImagePreview: Dispatch<SetStateAction<string | null>>;
  fabricDiscount: string;
  setFabricDiscount: Dispatch<SetStateAction<string>>;
  fabricPrice: string;
  setFabricPrice: Dispatch<SetStateAction<string>>;
  hsnCode: string;
  setHsnCode: Dispatch<SetStateAction<string>>;
  fabricRolls: {
    id: number;
    rollLength: string;
    stockLocation: string;
    rackNumber: string;
  }[];
  setFabricRolls: Dispatch<
    SetStateAction<
      {
        id: number;
        rollLength: string;
        stockLocation: string;
        rackNumber: string;
      }[]
    >
  >;
  fabricImages: { id: number; value: null }[];
  setFabricImages: Dispatch<SetStateAction<{ id: number; value: null }[]>>;
  textureProp: {
    tilex: number;
    tiley: number;
    rotation: number;
  };
  setTextureProp: Dispatch<
    SetStateAction<{
      tilex: number;
      tiley: number;
      rotation: number;
    }>
  >;
  addFabricSubmit: () => void;
  loading: boolean;
  isSuccess: boolean;
};

const MyContext = createContext({} as AppContextD);

const FabricProvider = ({ children }: { children: React.ReactNode }) => {
  // 3D Modal
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [textureProp, setTextureProp] = useState({
    tilex: 1,
    tiley: 1,
    rotation: 0,
  });
  const [fabImage, setFabImage] = useState<any>("");
  const [fabImageName, setfabImageName] = useState("");
  const [storeNumber, setStoreNumber] = useState("");
  const [storeId, setStoreId] = useState("");
  const [fabName, setFabName] = useState("");
  const [fabNumber, setFabNumber] = useState("");
  const [dashNumber, setDashNumber] = useState("");
  // Add Fabric Details
  const [fabricCategory, setFabricCategory] = useState("");
  const [fabricBrand, setFabricBrand] = useState("");
  const [fabricSubCategory, setFabricSubCategory] = useState("");
  const [fabricGms, setFabricGms] = useState("");
  const [fabricColor, setFabricColor] = useState("");
  const [fabricMaterial, setFabricMaterial] = useState("");
  const [fabricPattern, setFabricPattern] = useState("");
  const [fabricType, setFabricType] = useState("");
  const [fabricCharacteristics, setFabricCharacteristics] = useState("");
  const [fabricComposition, setFabricComposition] = useState("");
  const [fabricSeason, setFabricSeason] = useState("");
  const [fabricDescription, setFabricDescription] = useState("");
  const [fabricDiscount, setFabricDiscount] = useState("");
  const [fabricPrice, setFabricPrice] = useState("");
  const [hsnCode, setHsnCode] = useState("");
  const [fabricRolls, setFabricRolls] = useState([
    {
      id: 1,
      rollLength: "",
      stockLocation: "In shop",
      rackNumber: "",
    },
  ]);

  const [fabricImages, setFabricImages] = useState([
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
  ]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { userDetails, token } = useAuth();
  useEffect(() => {
    setStoreId(userDetails.storeId);
  }, [userDetails]);

  const resetAll = () => {
    setFabImage("");
    setfabImageName("");
    setStoreNumber(userDetails?.storeNumber || "");
    setStoreId(userDetails.storeId);
    setFabName("");
    setFabNumber("");
    setDashNumber("");
    setFabricCategory("");
    setFabricBrand("");
    setFabricSubCategory("");
    setFabricGms("");
    setFabricCategory("");
    setFabricColor("");
    setFabricMaterial("");
    setFabricPattern("");
    setFabricType("");
    setFabricCharacteristics("");
    setFabricComposition("");
    setFabricSeason("");
    setFabricDescription("");
    setFabricDiscount("");
    setFabricPrice("");
    setFabricRolls([
      {
        id: 0,
        rollLength: "",
        stockLocation: "In shop",
        rackNumber: "",
      },
    ]);
    setFabricImages([
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
    ]);
  };

  // submit add fabric function
  const addFabricSubmit = async () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("fabImage", fabImage, fabImageName);
    formdata.append("tilex", textureProp.tilex.toString());
    formdata.append("tiley", textureProp.tiley.toString());
    formdata.append("rotation", textureProp.rotation.toString());
    formdata.append("storeNumber", storeNumber);
    formdata.append("storeId", storeId);
    formdata.append("fabName", fabName);
    formdata.append("fabNumber", fabNumber);
    formdata.append("fabDashNumber", dashNumber);
    formdata.append("fabricCategory", fabricCategory);
    formdata.append("fabricBrand", fabricBrand);
    formdata.append("fabricSubCategory", fabricSubCategory);
    formdata.append("fabricGsm", fabricGms);
    formdata.append("fabricColor", fabricColor);
    formdata.append("fabricMaterial", fabricMaterial);
    formdata.append("fabricPattern", fabricPattern);
    formdata.append("fabricType", fabricType);
    formdata.append("fabricCharacteristics", fabricCharacteristics);
    formdata.append("fabricComposition", fabricComposition);
    formdata.append("fabricSeason", fabricSeason);
    formdata.append("fabDescription", fabricDescription);
    formdata.append("fabricDiscount", fabricDiscount);
    formdata.append("perMeterPrice", fabricPrice);
    formdata.append("hascode", hsnCode);
    fabricRolls.forEach((i, index) => {
      formdata.append(`rollInfo[${i.id}][rollLength]`, i.rollLength);
      formdata.append(`rollInfo[${i.id}][stockLocation]`, i.stockLocation);
      formdata.append(`rollInfo[${i.id}][rackNumber]`, i.rackNumber);
      formdata.append(
        `rollInfo[${i.id}][rollIdentity]`,
        `${dashNumber}R${i.id}`
      );
    });
    fabricImages.forEach((i) => {
      if (i.value !== null) {
        //@ts-ignore
        formdata.append(`fabImageOptional${i.id}`, i.value?.name);
      }
    });

    // fabricRolNumber.forEach((obj, index) => {
    //   for (const key in obj) {
    //     formdata.append(`rollInfo[${index}][${key}]`, obj[key]);
    //   }
    // });
    // inputs.forEach((inputs) => {
    //   formdata.append("rollLength[]", parseInt(Number(inputs)));
    // });
    // totalInputs.forEach((total) => {
    //   formdata.append("rollPrice[]", parseInt(Number(total)));
    // });

    await axios
      .post(`${ENDPOINT}/api/v1/fabric/addFabric`, formdata, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        console.log(response);
        setLoading(false);
        setIsSuccess(true);
        resetAll();
      })
      .catch((err: any) => {
        console.log({ err: err });
        setLoading(false);
      });
  };

  return (
    <MyContext.Provider
      value={{
        fabImage,
        setFabImage,
        storeNumber,
        setStoreNumber,
        fabName,
        setFabName,
        fabNumber,
        setFabNumber,
        dashNumber,
        setDashNumber,
        fabImageName,
        setfabImageName,
        fabricCategory,
        setFabricCategory,
        fabricBrand,
        fabricCharacteristics,
        fabricColor,
        fabricComposition,
        fabricDescription,
        fabricMaterial,
        fabricPattern,
        fabricSeason,
        fabricSubCategory,
        fabricType,
        fabricGms,
        setFabricBrand,
        setFabricCharacteristics,
        setFabricColor,
        setFabricComposition,
        setFabricDescription,
        setFabricMaterial,
        setFabricPattern,
        setFabricSeason,
        setFabricSubCategory,
        setFabricType,
        setFabricGms,
        imagePreview,
        setImagePreview,
        textureProp,
        setTextureProp,
        fabricPrice,
        setFabricPrice,
        fabricDiscount,
        setFabricDiscount,
        fabricRolls,
        setFabricRolls,
        addFabricSubmit,
        loading,
        isSuccess,
        fabricImages,
        setFabricImages,
        hsnCode,
        setHsnCode,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useFabric = () => useContext(MyContext);

export default FabricProvider;
