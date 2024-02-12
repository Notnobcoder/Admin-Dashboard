"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AppContextD = {
  stepper: number;
  setStepper: Dispatch<SetStateAction<number>>;
  adminName: string;
  setAdminName: Dispatch<SetStateAction<string>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  orderCurrentStep: number;
  setOrderCurrentStep: Dispatch<SetStateAction<number>>;
  setReadyMade: Dispatch<SetStateAction<string>>;
  readyMade: string;
};

const MyContext = createContext({} as AppContextD);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [stepper, setStepper] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [adminName, setAdminName] = useState("Designer");
  const [orderCurrentStep, setOrderCurrentStep] = useState(0);
  const [readyMade, setReadyMade] = useState("3dStore");
  return (
    <MyContext.Provider
      value={{
        readyMade,
        setReadyMade,
        stepper,
        adminName,
        setAdminName,
        setStepper,
        isDrawerOpen,
        setIsDrawerOpen,
        orderCurrentStep,
        setOrderCurrentStep,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useApp = () => useContext(MyContext);

export default AppProvider;
