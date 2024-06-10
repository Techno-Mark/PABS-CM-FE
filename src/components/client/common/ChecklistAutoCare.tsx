import React, { useState } from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Types import
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import AutoCareCommmunicationChecklist from "@/components/client/forms/autocare/AutoCareCommmunicationChecklist";
import {
  AccordianExpand,
  initialAutoCareAccessComputerMethod,
  initialAutoCareAccountingSoftware,
  initialAutoCareCloudDocumentManagement,
  initialAutoCareEstimatingSoftware,
  initialAutoCareGroupEmailEstablished,
  initialAutoCareITStructureReview,
  initialAutoCareKickOff,
  initialAutoCarePosSoftware,
  initialAutoCarePreKickOff,
  initialAutoCareScanner,
  validateAutoCareSystemSoftwareLocationField,
} from "@/static/autoCareChecklist";
import AutoCareSystemLocationChecklist from "../forms/autocare/AutoCareSystemLocationChecklist";
import AutoCareCashBankLoans from "../forms/autocare/AutoCareCashBankLoans";
import AutoCarePayrollSystem from "../forms/autocare/AutoCarePayrollSystem";
import AutoCareCompliances from "../forms/autocare/AutoCareCompliances";
import AutoCarePayableCashPayAccess from "../forms/autocare/AutoCarePayableCashPayAccess";
import AutoCareStatusCondition from "../forms/autocare/AutoCareStatusCondition";
import {
  AccessComputerFormTypes,
  AccountingSoftwareFormTypes,
  CloudDocumentManagementFormTypes,
  EstimatingSoftwareFormTypes,
  GroupEmailEstablishedFormTypes,
  ITStructureReviewFormTypes,
  KickOffFormTypes,
  PosSoftwareFormTypes,
  PreKickOffFormTypes,
  ScannerFormTypes,
} from "@/models/autoCarChecklist";

function ChecklistAutoCare({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistAutoCareType) {
  const roleId = Cookies.get("roleId");
  const initialAutoCareSystemSoftwareLocationErrors: any = {};
  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);


  const [autoCareGroupEmailEstablished, setAutoCareGroupEmailEstablished] = useState<GroupEmailEstablishedFormTypes>(initialAutoCareGroupEmailEstablished);
  const [autoCarePreKickOff, setAutoCarePreKickOff] = useState<PreKickOffFormTypes>(initialAutoCarePreKickOff);
  const [autoCareKickOff, setAutoCareKickOff] = useState<KickOffFormTypes>(initialAutoCareKickOff);

  const [autoCareITStructureReview, setAutoCareITStructureReview] = useState<ITStructureReviewFormTypes>(initialAutoCareITStructureReview);
  const [autoCareAccessComputerMethod, setAutoCareAccessComputerMethod] = useState<AccessComputerFormTypes>(initialAutoCareAccessComputerMethod);
  const [autoCarePosSystem, setAutoCarePosSystem] = useState<PosSoftwareFormTypes>(initialAutoCarePosSoftware);
  const [autoCareEstimatingSoftware, setAutoCareEstimatingSoftware] = useState<EstimatingSoftwareFormTypes>(initialAutoCareEstimatingSoftware);
  const [autoCareAccountingSoftware, setAutoCareAccountingSoftware] = useState<AccountingSoftwareFormTypes>(initialAutoCareAccountingSoftware);
  const [autoCareCloudDocumentManagement, setAutoCareCloudDocumentManagement] = useState<CloudDocumentManagementFormTypes>(initialAutoCareCloudDocumentManagement);
  const [autoCareScanner, setAutoCareScanner] = useState<ScannerFormTypes>(initialAutoCareScanner);
  
  const [autoCareSystemSoftwareLocationErrors,setAutoCareSystemSoftwareLocationErrors] = useState<any>(initialAutoCareSystemSoftwareLocationErrors);

  const handleAccordianChange =
  (arg1: number) => (e: any, isExpanded: boolean) => {
    setExpandedAccordian(isExpanded ? arg1 : -1);
  };


  const validateAutoCareSystemSoftwareLocation = () => {
    const fieldDisplayNames: { [key: string]: string } = {
      posSystemStatus: "Status is required",
      posSystemComments: "Commments is required",
      posSystemDetails: "Details is reuired",
      posSystemActionName: "Action Name is required",
      posSystemActionItems: "Action Items is required",
      accountingSoftwareStatus: "Status is required",
      accountingSoftwareComments: "Commments is required",
      accountingSoftwareDetails: "Details is reuired",
      accountingSoftwareActionName: "Action Name is required",
      accountingSoftwareActionItems: "Action Items is required",
    };

    const newErrors: { [key: string]: string } = {};

    validateAutoCareSystemSoftwareLocationField.forEach((field) => {
      if (!autoCarePosSystem[field] && !autoCareAccountingSoftware[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAutoCareSystemSoftwareLocationErrors(newErrors);
    return hasErrors;
  };

  const handleSubmit = (type: number) => {
    if (type === 1) {
      validateAutoCareSystemSoftwareLocation();
      const isValid = !validateAutoCareSystemSoftwareLocation();
      if (isValid) {
        console.log("completed..");
      }
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
            <ChecklistAccordian
              expandedAccordian={expandedAccordian === AccordianExpand.COMMUNICATION}
              handleChange={handleAccordianChange(
                AccordianExpand.COMMUNICATION
              )}
              title="Phase 1: Communication"
            >
              <AutoCareCommmunicationChecklist
                autoCareGroupEmailEstablished={autoCareGroupEmailEstablished}
                setAutoCareGroupEmailEstablished={setAutoCareGroupEmailEstablished}
                autoCarePreKickOff={autoCarePreKickOff}
                setAutoCarePreKickOff={setAutoCarePreKickOff}
                autoCareKickOff={autoCareKickOff}
                setAutoCareKickOff={setAutoCareKickOff}
              />
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
              <AutoCareSystemLocationChecklist
                systemSoftwareLocationErrors={autoCareSystemSoftwareLocationErrors}
                autoCareITStructureReview={autoCareITStructureReview}
                setAutoCareITStructureReview={setAutoCareITStructureReview}
                autoCareAccessComputerMethod={autoCareAccessComputerMethod}
                setAutoCareAccessComputerMethod={setAutoCareAccessComputerMethod}
                autoCarePosSystem={autoCarePosSystem}
                setAutoCarePosSystem={setAutoCarePosSystem}
                autoCareEstimatingSoftware={autoCareEstimatingSoftware}
                setAutoCareEstimatingSoftware={setAutoCareEstimatingSoftware}
                autoCareAccountingSoftware={autoCareAccountingSoftware}
                setAutoCareAccountingSoftware={setAutoCareAccountingSoftware}
                autoCareCloudDocumentManagement={
                  autoCareCloudDocumentManagement
                }
                setAutoCareCloudDocumentManagement={
                  setAutoCareCloudDocumentManagement
                }
                autoCareScanner={autoCareScanner}
                setAutoCareScanner={setAutoCareScanner}
              />
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
