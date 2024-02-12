"use client";

import {
  CustomersSvg,
  DashboardSvg,
  MyOrderSvg,
  SettingSvg,
  UsersProfileSvg,
  UsersSvg,
} from "@/assets/svgComponent";
import { AppointmentSvg } from "@/assets/svgComponent/AppointmentSvg";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import Loader from "@/containers/loader";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, _setLoading] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  let dashbaordValues = [
    { path: "/dashboard", svg: <DashboardSvg />, value: "Dashboard" },
    { path: "/dashboard/order", svg: <MyOrderSvg />, value: "My Order" },
    {
      path: "/dashboard/store-setup",
      svg: <SettingSvg />,
      value: "Store Setup",
    },
    {
      path: "/dashboard/appointment",
      svg: <AppointmentSvg />,
      value: "Appointment",
    },
    { path: "/dashboard/users", svg: <UsersSvg />, value: "Users" },
    {
      path: "/dashboard/fabric-setup",
      svg: <FaSquarePlus className="text-xl" />,
      value: "Fabric-Setup",
    },
    { path: "/dashboard/customers", svg: <CustomersSvg />, value: "Customers" },
    {
      path: "/dashboard/user-profile",
      svg: <UsersProfileSvg />,
      value: "User Profile",
    },
  ];

  useEffect(() => {
    pathname.includes("product-setup")
      ? setDesktopOpen(false)
      : setDesktopOpen(true);
  }, [pathname]);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}

          <div className="max-lg:hidden">
            <Sidebar
              {...{
                dashbaordValues,
                open: desktopOpen,
                setOpen: setDesktopOpen,
              }}
            />
          </div>
          <div className="lg:hidden">
            <Sidebar
              {...{
                dashbaordValues,
                open: mobileOpen,
                setOpen: setMobileOpen,
              }}
            />
          </div>
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto">
            {/* <!-- ===== Header Start ===== --> */}
            <div className="max-lg:hidden">
              <Header {...{ open: desktopOpen, setOpen: setDesktopOpen }} />
            </div>
            <div className="lg:hidden">
              <Header {...{ open: mobileOpen, setOpen: setMobileOpen }} />
            </div>
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="">
              <div
                className={`mx-auto ${
                  pathname.includes("store-setup") ||
                  pathname.includes("product-setup")
                    ? ""
                    : "max-w-screen-3xl p-4 md:p-6 2xl:p-10"
                }`}
              >
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      )}
    </div>
  );
}
