import React, { useState } from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Types import
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import AutoCareCommmunicationChecklist from "@/components/client/forms/autocare/AutoCareCommmunicationChecklist";
import { AccordianExpand } from "@/static/autoCareChecklist";
import AutoCareSystemLocationChecklist from "../forms/autocare/AutoCareSystemLocationChecklist";
import AutoCareCashBankLoans from "../forms/autocare/AutoCareCashBankLoans";
import AutoCarePayrollSystem from "../forms/autocare/AutoCarePayrollSystem";
import AutoCareCompliances from "../forms/autocare/AutoCareCompliances";
import AutoCarePayableCashPayAccess from "../forms/autocare/AutoCarePayableCashPayAccess";
import AutoCareStatusCondition from "../forms/autocare/AutoCareStatusCondition";

function ChecklistAutoCare({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistAutoCareType) {
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
                expandedAccordian === AccordianExpand.COMMUNICATION
              }
              handleChange={handleAccordianChange(
                AccordianExpand.COMMUNICATION
              )}
              title="Phase 1: Communication"
            >
              <AutoCareCommmunicationChecklist />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
              )}
              title="Phase 2: System, Software Locations"
            >
                <AutoCareSystemLocationChecklist />

            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.CASH_BANKING_LOANS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.CASH_BANKING_LOANS
              )}
              title="Phase 3: Cash and Banking & Loans"
            >
              <AutoCareCashBankLoans />
            </ChecklistAccordian>
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.PAYROLL_SYSTEM
              }
              handleChange={handleAccordianChange(
                AccordianExpand.PAYROLL_SYSTEM
              )}
              title="Phase 4: Payroll System"
            >
             <AutoCarePayrollSystem />
            </ChecklistAccordian>
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.COMPLIANCES
              }
              handleChange={handleAccordianChange(AccordianExpand.COMPLIANCES)}
              title="Phase 5: Compliances"
            >
             <AutoCareCompliances />
            </ChecklistAccordian>
            <ChecklistAccordian
              expandedAccordian={expandedAccordian === AccordianExpand.AP}
              handleChange={handleAccordianChange(AccordianExpand.AP)}
              title="Phase 6: AP - Payable Cash Payment Access"
            >
            <AutoCarePayableCashPayAccess />
            </ChecklistAccordian>
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian ===
                AccordianExpand.STATUS_CONDITION_FINANCIALS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.STATUS_CONDITION_FINANCIALS
              )}
              title="Phase 7: Status and Condition of Existing Financials"
            >
             <AutoCareStatusCondition />
            </ChecklistAccordian>
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            onClick={() => setChecklistFormSubmit(1)}
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
                Next: Account Details
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChecklistAutoCare;
