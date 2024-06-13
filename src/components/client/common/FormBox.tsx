import { Switch } from "@mui/material";
import React from "react";
// Cookie import
import Cookies from "js-cookie";
import { FormBoxProps } from "@/models/carCareBasicDetails";

const FormBox = ({ title, checked, children, className }: FormBoxProps) => {
  return (
    <div className={`${className} bg-white shadow-lg rounded-md border-t-4 border-[#022946] w-full`}>
      <div className="flex justify-between items-center px-4 py-2 border-b border-[#D8D8D8]">
        <span className="text-[#333333] text-[18px] font-medium">{title}</span>
        <span className="!z-0"><Switch checked={checked}/></span>
      </div>
      <div className="py-2 px-4 gap-5 min-h-[100px]">{children}</div>
    </div>
  );
};

export default FormBox;