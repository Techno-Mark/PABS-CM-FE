import { Switch } from "@mui/material";
import React from "react";
// Cookie import
import Cookies from "js-cookie";
import { FormBoxProps } from "@/models/autoCareBasicDetails";

const FormBox = ({
  title,
  children,
  className,
  checkStatus,
  handleChange,
  switchDisabled,
  isFormLocked,
}: FormBoxProps) => {
  const roleId = Cookies.get("roleId");
  return (
    <div
      className={`${className} bg-white w-full ${
        isFormLocked &&
        (roleId == "3" || roleId == "4") &&
        "pointer-events-none"
      }`}
    >
      <div className="flex justify-start items-center px-4 py-2">
        <span className="text-[#333333] text-[18px] font-medium">{title}</span>
        {roleId !== "4" && (
          <span className="!z-0">
            <Switch
              checked={checkStatus}
              onChange={handleChange}
              disabled={switchDisabled}
            />
          </span>
        )}
      </div>
      <div className="py-2 px-4 gap-5 min-h-[100px]">{children}</div>
    </div>
  );
};

export default FormBox;
