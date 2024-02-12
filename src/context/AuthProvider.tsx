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
import { useRouter } from "next/navigation";
import { STORAGE_TOKEN } from "@/utils/constants";
import { UserDetailsD } from "@/types";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

type AuthContextD = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  userDetails: UserDetailsD;
  setUserDetails: Dispatch<SetStateAction<UserDetailsD>>;
  Logout: () => void;
};

const MyContext = createContext({} as AuthContextD);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [userDetails, setUserDetails] = useState({} as UserDetailsD);
  const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {
  //   const expires = new Date();
  //   expires.setHours(expires.getHours() + 1);
  //   // setCookie("admin_token", "11111admin_token22222", { expires });
  //   const super_admin_token = localStorage.getItem(
  //     STORAGE_TOKEN.superadminToken
  //   );
  //   const admin_token = localStorage.getItem(STORAGE_TOKEN.adminToken);

  //   if (typeof window !== undefined) {
  //     if (admin_token || super_admin_token) {
  //       setToken(JSON.parse(admin_token || super_admin_token || ""));
  //     }
  //   }
  //   // if (!admin_token && !super_admin_token) {
  //   //   router.push("/login");
  //   // }
  //   // if (pathname === "/" && admin_token) {
  //   //   router.push("/dashboard");
  //   // }
  //   // if (pathname === "/" && super_admin_token) {
  //   //   router.push("/super-admin-dashboard");
  //   // }
  //   const userString = localStorage.getItem("user");
  //   const user = userString ? JSON.parse(userString) : ({} as UserDetailsD);

  //   if (user) {
  //     setUserDetails(user);
  //   }
  // }, []);

  useEffect(() => {
    // const expires = new Date();
    // expires.setFullYear(expires.getFullYear() + 1);
    // setCookie("admin_token", "11111admin_token22222", { expires });

    const admin_token = getCookie("admin_token");

    if (typeof window !== undefined) {
      if (STORAGE_TOKEN.adminToken) {
        setToken(admin_token || "");
      }
    }
    const userString = getCookie("user");
    // const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : ({} as UserDetailsD);

    if (user) {
      setUserDetails(user);
    }
  }, []);

  const Logout = () => {
    deleteCookie(STORAGE_TOKEN.adminToken);
    deleteCookie("user");
    router.push("/login");
  };

  return (
    <MyContext.Provider
      value={{ token, setToken, userDetails, setUserDetails, Logout }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
