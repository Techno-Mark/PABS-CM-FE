import { Button } from "@mui/material";
import { useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
// Types import
import {
  SystemAccessDetailsFormErrors,
  SystemAccessDetailsFormTypes,
} from "@/models/smbSystemAccessDetails";
import { initialSystemAccessDetails } from "@/static/smbSystemAccessDetalis";
import SmbAccessOfSystem from "../forms/smb/SmbAccessOfSystem";
import { ToastType } from "@/static/toastType";
import { showToast } from "@/components/ToastContainer";
import { callAPIwithHeaders } from "@/api/commonFunction";

function LoginInfoAutoCare({
  setChecklistFormSubmit,
  setChecklistCount,
  formDetails,
  getFormDetials,
}: any) {
  const roleId = Cookies.get("roleId");
  const userID = Cookies.get("userId");
  const initialSystemAccessDetailsErrors: SystemAccessDetailsFormErrors = {};

  const [smbSystemAccessDetails, setSmbSystemAccessDetails] =
    useState<SystemAccessDetailsFormTypes>(initialSystemAccessDetails);

  const [smbSystemAccessDetailsErrors, setSmbSystemAccessDetailsErrors] =
    useState<SystemAccessDetailsFormErrors>(initialSystemAccessDetailsErrors);

  useEffect(() => {
    if (!!formDetails) {
      formDetails.map((f: any) => {
        setSmbSystemAccessDetails({
          nameOfResource: f.nameOfResource,
          role: f.role,
          corporateAddress: "",
          email: f.email,
          accountingSoftware: f.accountingSoftware,
          bankDetails: f.bank,
          taxDetails: f.tax,
          payrollDetails: f.payroll,
          comments: f.comments,
        });
      });
    }
  }, [formDetails]);

  const handleSubmit = (type: number) => {
    if (type === 1 || type === 2) {
      const callBack = (ResponseStatus: string, Message: string) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            showToast(Message, ToastType.Success);
            // type === 1 && setChecklistFormSubmit(2);
            // type === 1 && setChecklistCount(2);
            getFormDetials();
            return;
        }
      };

      const saveClientIndo = "/api/clients/save-client-info";
      callAPIwithHeaders(saveClientIndo, "post", callBack, {
        userId: Number(userID),
        businessTypeId: 2,
        systemAccessDetails: [
          {
            nameOfResource: smbSystemAccessDetails.nameOfResource,
            role: smbSystemAccessDetails.role,
            email: smbSystemAccessDetails.email,
            accountingSoftware: smbSystemAccessDetails.accountingSoftware,
            tax: smbSystemAccessDetails.taxDetails,
            payroll: smbSystemAccessDetails.payrollDetails,
            bank: smbSystemAccessDetails.bankDetails,
            comments: smbSystemAccessDetails.comments,
          },
        ],
      });
      // validateSmbPeopleBusiness();
      // validateSmbSystemAccess();
      // validateSmbBankingAccess();
      // validateSmbExistingFinancials();
      // validateSmbMeeting();
      // const isValid =
      //   !validateSmbPeopleBusiness() &&
      //   !validateSmbSystemAccess() &&
      //   !validateSmbBankingAccess() &&
      //   !validateSmbExistingFinancials() &&
      //   !validateSmbMeeting();
      // if (isValid) {
      //   console.log("completed..");
      // }
    } else {
      getFormDetials;
    }
  };

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
            onClick={() => {
              setChecklistFormSubmit(1);
              getFormDetials();
            }}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Back
          </Button>
          <div className="flex gap-5">
            <Button
              onClick={() => handleSubmit(3)}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => handleSubmit(1)}
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
