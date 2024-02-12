"use client";
import React from "react";
import styled from "styled-components";
import LeftContent from "./LeftContent";

const Root = styled.div`
  background: url("/Images/lovoj-partner-bg.svg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Root className="">
      <div className="flex items-center gap-10 h-full py-10 max-w-screen-xl px-5 mx-auto">
        <LeftContent />
        {children}
      </div>
    </Root>
  );
};

export default AuthLayout;
