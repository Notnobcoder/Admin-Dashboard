"use client";

import { useAuth } from "@/context/AuthProvider";
import { ENDPOINT } from "@/network";
import {
  AddMeasurementD,
  AllActiveMeasurementsD,
  AllMeasurementsD,
  AllStylesD,
  MeasurementD,
  UserCategoryD,
  UserStylesD,
  allActiveStylesD,
} from "@/types/styles";
import { log, logErr } from "@/utils/helper";
import axios from "axios";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type AppContextD = {
  loading: boolean;
  btnLoading: boolean;
  error: string;
  // ============================================
  allStyles: AllStylesD[];
  userStylesData: UserCategoryD[];
  setUserStylesData: Dispatch<SetStateAction<UserCategoryD[]>>;
  addStylesForUser: () => void;
  allActiveStyles: allActiveStylesD;
  setDeleteStyles: Dispatch<SetStateAction<string[]>>;
  // ====================================
  addMeasurementForUser: () => void;
  allMeasurement: AllMeasurementsD[];
  allActiveMeasurement: AllActiveMeasurementsD;
  setUserMeasurementData: Dispatch<SetStateAction<MeasurementD[]>>;
  setDeleteMeasurement: Dispatch<SetStateAction<string[]>>;
};

const MyContext = createContext({} as AppContextD);

const ProductSetupProvider = ({
  children,
  gender,
  apparel,
}: {
  children: React.ReactNode;
  gender: string;
  apparel: string;
}) => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState("");
  // ======================== for styles ====================================
  const [allStyles, setAllStyles] = useState<AllStylesD[]>([]);
  const [allActiveStyles, setAllActiveStyles] = useState(
    {} as allActiveStylesD
  );
  const [userStylesData, setUserStylesData] = useState<UserCategoryD[]>([]);
  const [deleteStyles, setDeleteStyles] = useState<string[]>([]);
  const [isDefaultPresent, setIsDefaultPresent] = useState(true);
  // ======================== for measurements ====================================
  const [allMeasurement, setAllMeasurement] = useState<AllMeasurementsD[]>([]);
  const [allActiveMeasurement, setAllActiveMeasurement] = useState(
    {} as AllActiveMeasurementsD
  );
  const [deleteMeasurement, setDeleteMeasurement] = useState<string[]>([]);
  const [userMeasurementData, setUserMeasurementData] = useState<
    MeasurementD[]
  >([]);

  // ========================= common data ==============================

  const configAuth = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // ======================== for style starts ==============================================

  // useEffect(() => {
  //   console.log(allStyles, "allStyles PPPPPPP");
  //   console.log(error, "error PPPPPPP");
  // }, [allStyles, error]);

  // useEffect(() => {
  //   // console.log(allActiveStyles, "allActiveStyles PPPPPPP");
  //   // console.log(userStylesData, "userStylesData PPPPPPP");
  //   // console.log(deleteStyles, "deleteStyles PPPPPPP");
  //   // console.log(allActiveStyles, "allActiveStyles PPPPPPP");
  // }, [deleteStyles, userStylesData, allActiveStyles]);

  const getActiveStyles = async () => {
    try {
      let res = await axios.get(
        `${ENDPOINT}/api/v1/SetupsforUser/admin_get-product-foruser/65757603ff441f05d8196168/${apparel}`,
        configAuth
      );

      log(res?.data?.data, "res allstyles");
      setAllActiveStyles(res?.data?.data);
      setLoading(false);
    } catch (error) {
      logErr(error);
      setLoading(false);
    }
  };

  // get all styles
  const getAllStyles = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `${ENDPOINT}/api/v1/Setups/getSuperadminData_byAdmin?genderName=${gender}&categoryName=${apparel}`,
        configAuth
      );

      log(res?.data?.data, "res allstyles");
      setAllStyles(res?.data?.data);
      getActiveStyles();
    } catch (error: any) {
      logErr(error);
      setLoading(false);
      console.log(error?.response.data.message, "pppppp error");
      setError("No Products Found");
    }
  };

  // post styles api

  const styleData: UserStylesD = {
    name: allStyles[0]?.name,
    productNumber: "123456",
    genderName: allStyles[0]?.gender.name,
    productName: allStyles[0]?.gender.categories[0].name,
    productImage: allStyles[0]?.productImage,
    categories:
      userStylesData.length > 0 ? userStylesData : allActiveStyles.categories,
    catStyleNameArraytoDelete: deleteStyles,
  };

  const addStylesForUser = async () => {
    if (isDefaultPresent) {
      try {
        setBtnLoading(true);
        let res = await axios.post(
          `${ENDPOINT}/api/v1/SetupsforUser/admin_add-product-foruser`,
          styleData,
          configAuth
        );

        // log(res, "res allstyles");
        log(res?.data?.data, "res allstyles");
        toast.success("Product setup completed successfully");

        // setAllStyles(res?.data?.data);
        setBtnLoading(false);
      } catch (error: any) {
        logErr(error);
        setBtnLoading(false);
        toast.error(`${error?.response.data.message}`);
      }
    } else {
      toast.warning("Please select default value");
    }
  };

  // ===========================

  useEffect(() => {
    if (!token || !gender || !apparel) {
      setLoading(false);
      return;
    }
    getAllStyles();
  }, [token, gender, apparel]);

  // ======================== for measurement starts ==============================================

  useEffect(() => {
    console.log(allMeasurement, "allMeasurement PPPPPPP");
    console.log(allActiveMeasurement, "allActiveMeasurement PPPPPPP");
  }, [allActiveMeasurement]);
  useEffect(() => {
    console.log(deleteMeasurement, "deleteMeasurement PPPPPPP");
    console.log(userMeasurementData, "userMeasurementData PPPPPPP");
  }, [deleteMeasurement, userMeasurementData]);

  const getActiveMeasurements = async () => {
    try {
      let res = await axios.get(
        `${ENDPOINT}/api/v1/SetupsforUser/admin_get-measurment-foruser/65757603ff441f05d8196168/${apparel}`,
        configAuth
      );

      log(res?.data?.data, "res allActiveMeasurements");
      setAllActiveMeasurement(res?.data?.data);
      setLoading(false);
    } catch (error) {
      logErr(error);
      setLoading(false);
    }
  };

  const getAllMeasurements = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `${ENDPOINT}/api/v1/Setups/admin_get-mesurmentSuperadmin?gender=${gender}&categoriename=${apparel}`,
        configAuth
      );

      log(res?.data?.data, "res allMeasurements");
      setAllMeasurement(res?.data?.data);
      // setLoading(false);
      getActiveMeasurements();
    } catch (error) {
      logErr(error);
      setLoading(false);
    }
  };

  const measurementData: AddMeasurementD = {
    name: allMeasurement[0]?.name,
    categoriename: allMeasurement[0]?.categoriename,
    gender: allMeasurement[0]?.gender,
    measurements: userMeasurementData,
    catMeasurmentNameArraytoDelete: deleteMeasurement,
  };

  const addMeasurementForUser = async () => {
    try {
      setBtnLoading(true);
      let res = await axios.post(
        `${ENDPOINT}/api/v1/SetupsforUser/admin_add-measurment-foruser`,
        measurementData,
        configAuth
      );
      toast.success("Measurement setup completed successfully");
      setBtnLoading(false);
    } catch (error: any) {
      logErr(error);
      setBtnLoading(false);
      toast.error(`${error?.response.data.message}`);
    }
  };

  useEffect(() => {
    if (!token || !gender || !apparel) {
      setLoading(false);
      return;
    }
    getAllMeasurements();
  }, [token, gender, apparel]);

  // ================================================= ends ===============================================

  return (
    <MyContext.Provider
      value={{
        loading,
        btnLoading,
        allStyles,
        userStylesData,
        setUserStylesData,
        addStylesForUser,
        allActiveStyles,
        setDeleteStyles,
        error,
        allMeasurement,
        allActiveMeasurement,
        addMeasurementForUser,
        setUserMeasurementData,
        setDeleteMeasurement,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useProductSetup = () => useContext(MyContext);

export default ProductSetupProvider;
