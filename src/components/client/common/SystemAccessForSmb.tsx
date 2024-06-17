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
import { autoCarFormUrl } from "@/static/apiUrl";

function LoginInfoAutoCare({
  setChecklistFormSubmit,
  formDetails,
  getFormDetials,
  setIsOpenModal,
  responseData,
  clientInfo,
}: any) {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");
  const initialSystemAccessDetailsErrors: SystemAccessDetailsFormErrors = {};

  const [smbSystemAccessDetails, setSmbSystemAccessDetails] =
    useState<SystemAccessDetailsFormTypes>(initialSystemAccessDetails);

  const [smbSystemAccessDetailsErrors, setSmbSystemAccessDetailsErrors] =
    useState<SystemAccessDetailsFormErrors>(initialSystemAccessDetailsErrors);
  const [smbSystemAccessDetailsCheckStatus, setSmbSystemDetailsCheckStatus] =
    useState<boolean>(true);

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
    setSmbSystemDetailsCheckStatus(responseData?.systemAccessDetailsIsDisplay);
  }, [formDetails, responseData]);

  const handleSubmit = (type: number) => {
    if (type === 1 || type === 2) {
      const callBack = (ResponseStatus: string, Message: string) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            showToast(Message, ToastType.Success);
            return;
        }
      };

      callAPIwithHeaders(autoCarFormUrl, "post", callBack, {
        userId: !!clientInfo?.UserId
          ? parseInt(clientInfo?.UserId)
          : parseInt(userId!),
        businessTypeId: !!clientInfo?.DepartmentId
          ? parseInt(clientInfo?.DepartmentId)
          : parseInt(businessTypeId!),
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
    } else {
      getFormDetials;
    }
  };

  const handleSwitch = (e: any) => {
    const systemAccessDetailsIsDisplay = e.target.checked;
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setSmbSystemDetailsCheckStatus(systemAccessDetailsIsDisplay);
          showToast(Message, ToastType.Success);
          return;
      }
    };
    const checkStatusFormData = {
      userId: parseInt(clientInfo?.UserId),
      businessTypeId: parseInt(clientInfo?.DepartmentId),
      systemAccessDetailsIsDisplay: systemAccessDetailsIsDisplay,
    };
    callAPIwithHeaders(autoCarFormUrl, "post", callback, checkStatusFormData);
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
              smbSystemAccessDetailsCheckStatus={
                smbSystemAccessDetailsCheckStatus
              }
              handleSwitch={(e: any) => handleSwitch(e)}
              smbSystemAccessDetails={smbSystemAccessDetails}
              setSmbSystemAccessDetails={setSmbSystemAccessDetails}
              smbSystemAccessDetailsErrors={smbSystemAccessDetailsErrors}
              setSmbSystemAccessDetailsErrors={setSmbSystemAccessDetailsErrors}
            />
          </div>
        </div>

        <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            onClick={() => {
              setChecklistFormSubmit(21);
              getFormDetials();
            }}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
            variant="outlined"
          >
            Back
          </Button>
          <div className="flex gap-5">
            <Button
              onClick={() => setIsOpenModal(false)}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => handleSubmit(1)}
              className={`!bg-[#022946] text-white !rounded-full`}
              variant="contained"
            >
              <span className="uppercase font-semibold text-[14px] whitespace-nowrap">
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
