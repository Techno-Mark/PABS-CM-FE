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
// Static Data import
import {
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
// Utlis Import
import { validateEmail } from "@/utils/validate";
import AutoCareAccountDetails from "@/components/client/forms/autocare/AutoCareAccountDetails";

function BasicDetailsAutoCare({
  setBasicDetailCount,
  setBasicDetailsFormSubmit,
}: BasicDetailAutoCareType) {
  const roleId = Cookies.get("roleId");
  const initialAutoCareAccountDetailsErrors: AccountDetailsFormErrors = {};
  const initialAutoCareLegalStructureErrors: LegalStructureFormErrors = {};
  const initialAutoCareClientTeamErrors: ClientTeamFormErrors = {};

  const [autoCareAccountDetailsErrors, setAutoCareAccountDetailsErrors] =
    useState<AccountDetailsFormErrors>(initialAutoCareAccountDetailsErrors);
  const [autoCareLegalStructureErrors, setAutoCareLegalStructureErrors] =
    useState<LegalStructureFormErrors>(initialAutoCareLegalStructureErrors);
  const [autoCareClientTeamErrors, setAutoCareClientTeamErrors] =
    useState<ClientTeamFormErrors>(initialAutoCareClientTeamErrors);
  const [autoCareAccountDetails, setAutoCareAccountDetails] =
    useState<AccountDetailsFormTypes>(initialAutoCareAccountName);

  const [autoCareLegalStructure, setAutoCareLegalStructure] =
    useState<LegalStructureFormTypes>(initialAutoCareLegalStructure);

  const [autoCareClientTeam, setAutoCareClientTeam] =
    useState<ClientTeamFormTypes>(initialAutoCareClientTeam);

  const [autoCarePabsAccountingTeam, setAutoCarePabsAccountingTeam] =
    useState<PabsAccountingTeamFormTypes>(initialAutoCarePabsAccountingTeam);

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
    const fieldDisplayNames: { [key: string]: string } = {
      accountName: "Account Name",
      corporateAddress: "Corporate Address",
      noOfLocations: "Number of Locations",
      nameOfLocations: "Locations Name",
      ownerContact: "Owner Contact",
      ownerEmail: "Owner Email",
      ownerPhone: "Owner Phone",
    };

    const newErrors: { [key: string]: string } = {};

    validateAutoCarAccountDetails.forEach((field) => {
      if (!autoCareAccountDetails[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else if (
        field === "ownerEmail" &&
        !!autoCareAccountDetailsErrors[field]
      ) {
        newErrors[field] = `${autoCareAccountDetailsErrors[field]}`;
      }  else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAutoCareAccountDetailsErrors(newErrors);
    return hasErrors;
  };

  const validateCarCareLegalStructure = () => {
    const fieldDisplayNames: { [key: string]: string } = {
      no_of_Entities: "Number of Entities",
      no_of_Shops: "Number of Shops",
    };

    const newErrors: { [key: string]: string } = {};

    validateAutoCarLegalStructure.forEach((field) => {
      if (!autoCareLegalStructure[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAutoCareLegalStructureErrors(newErrors);
    return hasErrors;
  };

  const validateCarCareClientTeam = () => {
    const fieldDisplayNames: { [key: string]: string } = {
      istTime: "IST Time",
      shopManager: "Shop Manager",
      poc1: "Poc1",
      email: "Email",
      weeklyCalls: "Weekly Calls",
      weeklyCallTime: "Weekly Call Time",
    };

    const newErrors: { [key: string]: string } = {};

    validateAutoCarClientTeam.forEach((field) => {
      if (!autoCareClientTeam[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else if (
        field === "weeklyCalls" &&
        autoCareClientTeam[field] === "-1"
      ) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else if (
        (field === "weeklyCallTime" || field === "istTime") &&
        !!autoCareClientTeamErrors[field]
      ) {
        newErrors[field] = `${autoCareClientTeamErrors[field]}`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAutoCareClientTeamErrors(newErrors);
    return hasErrors;
  };

  const basicDetailStatus = () => {
    let count = 0;
    validateFields.forEach((field) => {
      if (
        !!autoCareLegalStructure[field] ||
        !!autoCareAccountDetails[field] ||
        !!autoCareClientTeam[field]
      ) {
        count++;
      }
    });
    let calc = (count / 15) * 100;
    return Math.floor(calc);
  };

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
      setBasicDetailsFormSubmit(2); // temporary basic change it afterwards
      validateCarCareAccountDetails();
      validateCarCareLegalStructure();
      validateCarCareClientTeam();
      const isValid =
        !validateCarCareAccountDetails() &&
        !validateCarCareLegalStructure() &&
        !validateCarCareClientTeam();

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
      setAutoCareAccountDetailsErrors({});
      setAutoCareLegalStructureErrors({});
      setAutoCareClientTeamErrors({});
      // callAPIwithHeaders(autoCarFormUrl, "post", callback, formData);
    } else {
      setAutoCareAccountDetails(initialAutoCareAccountName);
      setAutoCareLegalStructure(initialAutoCareLegalStructure);
      setAutoCareClientTeam(initialAutoCareClientTeam);
      setAutoCarePabsAccountingTeam(initialAutoCarePabsAccountingTeam);
      setAutoCareAccountDetailsErrors({});
      setAutoCareLegalStructureErrors({});
      setAutoCareClientTeamErrors({});
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
              Next: Check List
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default BasicDetailsAutoCare;
