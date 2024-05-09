import React from "react";
//assest icon
import PABSHalfIcon from "@/assets/Icons/PABSHalfIcon";
import PABSIcon from "@/assets/Icons/PABSIcon";
// type imports
import { childPropsType } from "@/models/common";
// toast imports
import { ToastContainer } from "../ToastContainer";

function AuthWapper({ children }: childPropsType) {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-[#045794] via-[#02243b] to-[#011B2E]">
      <ToastContainer />
      <div className="relative flex h-[80%] w-[70%]">
        <div className="w-[50%] flex justify-center items-center borderClass bg-[#002641]">
          <span className="flex absolute">
            <PABSIcon />
          </span>
          <span className="absolute bottom-[2px] left-[2px]  blur-sm">
            <PABSHalfIcon />
          </span>
        </div>
        <div className="w-[50%] flex flex-col bg-white px-14">{children}</div>
      </div>
    </div>
  );
}

export default AuthWapper;
