import React, { useState } from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Types import
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import { AccordianExpand } from "@/static/autoCareChecklist";
import AutoCareLocationDetails from "../forms/autocare/AutoCareLocationDetails";

function LoginInfoAutoCare({ setLoginInfoFormSubmit }: any) {
  const roleId = Cookies.get("roleId");
  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
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
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.LOCATION_DETAILS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.LOCATION_DETAILS
              )}
              title="Location Details"
            >
              <AutoCareLocationDetails />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.SALES_TAX_DETAILS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.SALES_TAX_DETAILS
              )}
              title="Sales Tax Details"
            >
              <></>
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.POS_DETAILS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.POS_DETAILS
              )}
              title="POS Details"
            >
              <></>
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.UTILITIES
              }
              handleChange={handleAccordianChange(
                AccordianExpand.UTILITIES
              )}
              title="Utilities"
            >
              <></>
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.VENDOR_DETAILS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.VENDOR_DETAILS
              )}
              title="Vendor Details"
            >
              <></>
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.BANK_DETAILS_CC_DETAILS_LOAN
              }
              handleChange={handleAccordianChange(
                AccordianExpand.BANK_DETAILS_CC_DETAILS_LOAN
              )}
              title="Bank Details/CC Details/Loan"
            >
              <></>
            </ChecklistAccordian>
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.MERCHANT_DETAILS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.MERCHANT_DETAILS
              )}
              title="Merchant Details"
            >
              <></>
            </ChecklistAccordian>
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.PAYROLL_DETAILS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.PAYROLL_DETAILS
              )}
              title="Payroll Details"
            >
              <></>
            </ChecklistAccordian>
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            // onClick={() => setChecklistFormSubmit(1)}
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
