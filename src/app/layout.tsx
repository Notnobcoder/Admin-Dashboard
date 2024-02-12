import { ErrorComponent } from "@/ErrorBoundary";
import "./globals.css";
import { Poppins, Manrope, Jost } from "next/font/google";
export const revalidate = 1;

import React from "react";
import AuthProvider from "@/context/AuthProvider";
import StyledComponentsRegistry from "./lib/registry";
import FabricProvider from "@/context/FabricProvider";
import "react-toastify/dist/ReactToastify.css";
import AppProvider from "@/context/AppProvider";

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["300", "400", "500", "700"],
// });
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ErrorComponent>
        <AuthProvider>
          <AppProvider>
            <FabricProvider>
              <StyledComponentsRegistry>
                <body className={`${manrope.variable} ${jost.variable}`}>
                  {children}
                </body>
              </StyledComponentsRegistry>
            </FabricProvider>
          </AppProvider>
        </AuthProvider>
      </ErrorComponent>
    </html>
  );
}
