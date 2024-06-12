import { Button } from "@mui/material";
import { useState } from "react";
// Cookie import
import Cookies from "js-cookie";
// Types import
import {
  SystemAccessDetailsFormErrors,
  SystemAccessDetailsFormTypes,
} from "@/models/smbSystemAccessDetails";
import { initialSystemAccessDetails } from "@/static/smbSystemAccessDetalis";
import SmbAccessOfSystem from "../forms/smb/SmbAccessOfSystem";

function LoginInfoAutoCare({ setLoginInfoFormSubmit }: any) {
  const roleId = Cookies.get("roleId");
  const initialSystemAccessDetailsErrors: SystemAccessDetailsFormErrors = {};

  const [smbSystemAccessDetails, setSmbSystemAccessDetails] =
    useState<SystemAccessDetailsFormTypes>(initialSystemAccessDetails);

  const [smbSystemAccessDetailsErrors, setSmbSystemAccessDetailsErrors] =
    useState<SystemAccessDetailsFormErrors>(initialSystemAccessDetailsErrors);

  return (
    <>
      <div
        className={`flex flex-col ${
          roleId !== "4" ? "h-[95vh]" : "h-full"
        } pt-12`}
      >
        <div className={`flex-1 overflow-y-scroll`}>
          <div className="m-6 flex flex-col gap-6">
            <SmbAccessOfSystem
              smbSystemAccessDetails={smbSystemAccessDetails}
              setSmbSystemAccessDetails={setSmbSystemAccessDetails}
              smbSystemAccessDetailsErrors={smbSystemAccessDetailsErrors}
              setSmbSystemAccessDetailsErrors={setSmbSystemAccessDetailsErrors}
            />
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            // onClick={() => setChecklistFormSubmit(2)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Back
          </Button>
          <div className="flex gap-5">
            <Button
              onClick={() => {}}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {}}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => {}}
              className={`!bg-[#022946] text-white !rounded-lg`}
              variant="contained"
            >
              <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
                Submit
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginInfoAutoCare;
