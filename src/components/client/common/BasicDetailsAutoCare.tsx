import React, { useEffect, useState } from "react";
// MUI import
import { Button } from "@mui/material";
// Component import
import { showToast } from "@/components/ToastContainer";
import AutoCareLegalStructure from "@/components/client/forms/autocare/AutoCareLegalStructure";
import AutoCareClientTeam from "@/components/client/forms/autocare/AutoCareClientTeam";
import AutoCarePabsAccountingTeam from "@/components/client/forms/autocare/AutoCarePabsAccountingTeam";
// Models import
import {
  AccountDetailsFormErrors,
  AccountDetailsFormTypes,
  BasicDetailAutoCareType,
  ClientTeamFormErrors,
  ClientTeamFormTypes,
  LegalStructureFormErrors,
  LegalStructureFormTypes,
  PabsAccountingTeamFormTypes,
} from "@/models/carCareBasicDetails";
// Static import
import {
  fieldDisplayNamesAccountDetails,
  fieldDisplayNamesClientTeam,
  fieldDisplayNamesLegalStructure,
  initialAutoCareAccountName,
  initialAutoCareClientTeam,
  initialAutoCareLegalStructure,
  initialAutoCarePabsAccountingTeam,
  validateAutoCarAccountDetails,
  validateAutoCarClientTeam,
  validateAutoCarLegalStructure,
  validateFields,
} from "@/static/carCareBasicDetail";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { autoCarFormUrl } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
// Cookie import
import Cookies from "js-cookie";
// Utils import
import AutoCareAccountDetails from "@/components/client/forms/autocare/AutoCareAccountDetails";

function BasicDetailsAutoCare({
  setBasicDetailCount,
  setBasicDetailsFormSubmit,
}: BasicDetailAutoCareType) {
  const roleId = Cookies.get("roleId");
  const initialAutoCareAccountDetailsErrors: AccountDetailsFormErrors = {};
  const initialAutoCareLegalStructureErrors: LegalStructureFormErrors = {};
  const initialAutoCareClientTeamErrors: ClientTeamFormErrors = {};

  const [autoCareAccountDetailsErrors, setAutoCareAccountDetailsErrors] = useState<AccountDetailsFormErrors>(initialAutoCareAccountDetailsErrors);
  const [autoCareLegalStructureErrors, setAutoCareLegalStructureErrors] = useState<LegalStructureFormErrors>(initialAutoCareLegalStructureErrors);
  const [autoCareClientTeamErrors, setAutoCareClientTeamErrors] = useState<ClientTeamFormErrors>(initialAutoCareClientTeamErrors);
  const [autoCareAccountDetails, setAutoCareAccountDetails] = useState<AccountDetailsFormTypes>(initialAutoCareAccountName);
  const [autoCareLegalStructure, setAutoCareLegalStructure] = useState<LegalStructureFormTypes>(initialAutoCareLegalStructure);
  const [autoCareClientTeam, setAutoCareClientTeam] = useState<ClientTeamFormTypes>(initialAutoCareClientTeam);
  const [autoCarePabsAccountingTeam, setAutoCarePabsAccountingTeam] = useState<PabsAccountingTeamFormTypes>(initialAutoCarePabsAccountingTeam);

  const getAutoCareList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          return;
      }
    };
    // await callAPIwithHeaders(carCareBasicDetailListUrl, "get", callback, {});
  };

  useEffect(() => {
    getAutoCareList();
  }, []);

  const validateCarCareAccountDetails = () => {
    const newAccountDetailsErrors: { [key: string]: string } = {};

    validateAutoCarAccountDetails.forEach((field) => {
      if (!autoCareAccountDetails[field]) {
        newAccountDetailsErrors[field] = `${fieldDisplayNamesAccountDetails[field]} is required`;
      } else if (
        field === "ownerEmail" &&
        !!autoCareAccountDetailsErrors[field]
      ) {
        newAccountDetailsErrors[field] = `${autoCareAccountDetailsErrors[field]}`;
      }  else {
        newAccountDetailsErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newAccountDetailsErrors).some((error) => !!error);
    setAutoCareAccountDetailsErrors(newAccountDetailsErrors);
    return hasErrors;
  };

  const validateCarCareLegalStructure = () => {
    const newLegalStructureErrors: { [key: string]: string } = {};

    validateAutoCarLegalStructure.forEach((field) => {
      if (!autoCareLegalStructure[field]) {
        newLegalStructureErrors[field] = `${fieldDisplayNamesLegalStructure[field]} is required`;
      } else {
        newLegalStructureErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newLegalStructureErrors).some((error) => !!error);
    setAutoCareLegalStructureErrors(newLegalStructureErrors);
    return hasErrors;
  };

  const validateCarCareClientTeam = () => {
    const newClientTeamErrors: { [key: string]: string } = {};

    validateAutoCarClientTeam.forEach((field) => {
      if (!autoCareClientTeam[field]) {
        newClientTeamErrors[field] = `${fieldDisplayNamesClientTeam[field]} is required`;
      } else if (
        field === "weeklyCalls" &&
        autoCareClientTeam[field] === "-1"
      ) {
        newClientTeamErrors[field] = `${fieldDisplayNamesClientTeam[field]} is required`;
      } else if (
        (field === "weeklyCallTime" || field === "istTime") &&
        !!autoCareClientTeamErrors[field]
      ) {
        newClientTeamErrors[field] = `${autoCareClientTeamErrors[field]}`;
      } else {
        newClientTeamErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newClientTeamErrors).some((error) => !!error);
    setAutoCareClientTeamErrors(newClientTeamErrors);
    return hasErrors;
  };

  const basicDetailStatus = () => {
    let count = 0;
    validateFields.forEach((field) => {
      if (
        !!autoCareLegalStructure[field] ||
        !!autoCareAccountDetails[field] ||
        (!!autoCareClientTeam[field] && autoCareClientTeam['weeklyCalls'] !== "-1")
      ) {
        count++;
      }
    });
    let calc = (count / 15) * 100;
    return Math.floor(calc);
  };


  const handleBasicDetailInitialValues = () => {
    setAutoCareAccountDetails(initialAutoCareAccountName);
    setAutoCareLegalStructure(initialAutoCareLegalStructure);
    setAutoCareClientTeam(initialAutoCareClientTeam);
    setAutoCarePabsAccountingTeam(initialAutoCarePabsAccountingTeam);
  }

  const handleBasicDetailRemoveErrors = () => {
    setAutoCareAccountDetailsErrors({});
    setAutoCareLegalStructureErrors({});
    setAutoCareClientTeamErrors({});
  }

  const handleSubmit = (type: number) => {
    const formData = {
      businessType: autoCareAccountDetails.businessType,
      service: autoCareAccountDetails.service,
      corporateAddress: autoCareAccountDetails.corporateAddress,
      noOfLocations: autoCareAccountDetails.noOfLocations,//
      nameOfLocations: autoCareAccountDetails.nameOfLocations,//
      ownerContact: autoCareAccountDetails.ownerContact,
      ownerEmail: autoCareAccountDetails.ownerEmail,
      ownerPhone: autoCareAccountDetails.ownerPhone,
      noOfEntities: autoCareLegalStructure.no_of_Entities,//
      noOfShops: autoCareLegalStructure.no_of_Shops,//
      salesRep: autoCareLegalStructure.salesRep,
      agreementDate: autoCareLegalStructure.agreementDate,
      probableAcquisitionDate: autoCareLegalStructure.probableAcquitionDate,
      dba: autoCareLegalStructure.dba,
      shopManager: autoCareClientTeam.shopManager,
      poc1: autoCareClientTeam.poc1,
      emailId: autoCareClientTeam.email,
      cpa: autoCareClientTeam.cpa,
      priorBookkeeperCpa: autoCareClientTeam.priorBookkeeper,//
      itSupport: autoCareClientTeam.itSupport,
      timeZone: autoCareClientTeam.timeZone,
      state: autoCareClientTeam.state,
      weeklyCalls: autoCareClientTeam.weeklyCalls,
      weeklyCallTime: autoCareClientTeam.weeklyCallTime,
      istTime: autoCareClientTeam.istTime,
      implementationManager: autoCarePabsAccountingTeam.implementationManager,
      implementationAnalyst: autoCarePabsAccountingTeam.implementationAnalyst,
      operationsHead: autoCarePabsAccountingTeam.operationsHead,
      operationsManager: autoCarePabsAccountingTeam.operationsManager,
      operationsAccountHandler:
        autoCarePabsAccountingTeam.operationsAccountHolder,
      pabsGroupEmail: autoCarePabsAccountingTeam.pabsGroupEmail,
      pabsPhone: autoCarePabsAccountingTeam.pabsPhone,
    };
    if (type === 1) {
      const isValidAccountDetails = validateCarCareAccountDetails();
      const isValidLegalStructure = validateCarCareLegalStructure();
      const isValidClientTeam = validateCarCareClientTeam();
  
      const isValid = !isValidAccountDetails && !isValidLegalStructure && !isValidClientTeam;

      const filledFieldsCount = basicDetailStatus();
      if (isValid) {
        setBasicDetailsFormSubmit(2);
        setBasicDetailCount(filledFieldsCount);
        // callAPIwithHeaders(autoCarFormUrl, "post", callback, formData);
      } else {
        setBasicDetailCount(filledFieldsCount);
      }
    } else if (type === 2) {
      const filledFieldsCount = basicDetailStatus();
      setBasicDetailCount(filledFieldsCount);
      handleBasicDetailRemoveErrors();
      // callAPIwithHeaders(autoCarFormUrl, "post", callback, formData);
    } else {
      handleBasicDetailInitialValues();
      handleBasicDetailRemoveErrors();
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
            <AutoCareAccountDetails
              autoCareAccountDetails={autoCareAccountDetails}
              setAutoCareAccountDetails={setAutoCareAccountDetails}
              autoCareAccountDetailsErrors={autoCareAccountDetailsErrors}
              setAutoCareAccountDetailsErrors={setAutoCareAccountDetailsErrors}
            />
            <AutoCareLegalStructure
              autoCareLegalStructure={autoCareLegalStructure}
              setAutoCareLegalStructure={setAutoCareLegalStructure}
              autoCareLegalStructureErrors={autoCareLegalStructureErrors}
              setAutoCareLegalStructureErrors={setAutoCareLegalStructureErrors}
            />
            <AutoCareClientTeam
              autoCareClientTeam={autoCareClientTeam}
              setAutoCareClientTeam={setAutoCareClientTeam}
              autoCareClientTeamErrors={autoCareClientTeamErrors}
              setAutoCareClientTeamErrors={setAutoCareClientTeamErrors}
            />
            <AutoCarePabsAccountingTeam
              autoCarePabsAccountingTeam={autoCarePabsAccountingTeam}
              setAutoCarePabsAccountingTeam={setAutoCarePabsAccountingTeam}
            />
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-end border-t gap-5 px-6 w-full">
          <Button
            onClick={() => handleSubmit(3)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[16px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(2)}
            className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[16px]`}
            variant="outlined"
          >
            Save as Draft
          </Button>
          <Button
            onClick={() => handleSubmit(1)}
            className={`!bg-[#022946] text-white !rounded-full`}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
              Next: Check List
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default BasicDetailsAutoCare;
