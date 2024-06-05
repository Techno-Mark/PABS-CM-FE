import React, { useEffect, useState } from "react";
// MUI import
import { Button } from "@mui/material";
// Component import
import CarCareAccountName from "@/components/client/forms/autocar/AutoCareAccountDetails";
// Models import
import {
  AccountNameFormErrors,
  AccountNameFormTypes,
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
  validateAutoCarAccountName,
  validateAutoCarClientTeam,
  validateAutoCarLegalStructure,
  validateFields,
} from "@/static/carCareBasicDetail";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { autoCarFormUrl } from "@/static/apiUrl";
import { showToast } from "@/components/ToastContainer";
import AutoCareLegalStructure from "@/components/client/forms/autocar/AutoCareLegalStructure";
import AutoCareClientTeam from "@/components/client/forms/autocar/AutoCareClientTeam";
import AutoCarePabsAccountingTeam from "@/components/client/forms/autocar/AutoCarePabsAccountingTeam";
import { ToastType } from "@/static/toastType";
// Cookie import
import Cookies from "js-cookie";
// Utlis Import
import { validateEmail } from "@/utils/validate";

function BasicDetailsAutoCare({
  setBasicDetailCount,
  setBasicDetailsFormSubmit,
}: any) {
  const roleId = Cookies.get("roleId");
  const initialAutoCareAccountNameErrors: AccountNameFormErrors = {};
  const initialAutoCareLegalStructureErrors: LegalStructureFormErrors = {};
  const initialAutoCareClientTeamErrors: ClientTeamFormErrors = {};

  const [autoCareAccountNameErrors, setAutoCareAccountNameErrors] =
    useState<AccountNameFormErrors>(initialAutoCareAccountNameErrors);
  const [autoCareLegalStructureErrors, setAutoCareLegalStructureErrors] =
    useState<LegalStructureFormErrors>(initialAutoCareLegalStructureErrors);
  const [autoCareClientTeamErrors, setAutoCareClientTeamErrors] =
    useState<ClientTeamFormErrors>(initialAutoCareClientTeamErrors);
  const [autoCareAccountName, setAutoCareAccountName] =
    useState<AccountNameFormTypes>(initialAutoCareAccountName);

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

  const validateCarCareAccountName = () => {
    const fieldDisplayNames: { [key: string]: string } = {
      corporateAddress: "Corporate Address",
      no_of_Locations: "Number of Locations",
      locationName: "Location Name",
      ownerContact: "Owner Contact",
      ownerEmail: "Owner Email",
      ownerPhone: "Owner Phone",
    };

    const newErrors: { [key: string]: string } = {};

    validateAutoCarAccountName.forEach((field) => {
      if (!autoCareAccountName[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else if (field === 'ownerEmail' && !validateEmail(autoCareAccountName[field])) {
        newErrors[field] = 'Please provide a valid email address!';
      }
      else {
        newErrors[field] = '';
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAutoCareAccountNameErrors(newErrors);
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
      shopManager: "Shop Manager",
      poc1: "Poc1",
      email: "Email",
    };

    const newErrors: { [key: string]: string } = {};

    validateAutoCarClientTeam.forEach((field) => {
      if (!autoCareClientTeam[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
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
        !!autoCareAccountName[field] ||
        !!autoCareClientTeam[field]
      ) {
        count++;
      }
    });
    let calc = (count / 11) * 100;
    return Math.floor(calc);
  };

  const handleSubmit = (type: number) => {

    if (type === 1) {
      validateCarCareAccountName();
      validateCarCareLegalStructure();
      validateCarCareClientTeam();
      const isValid =
        !validateCarCareAccountName() &&
        !validateCarCareLegalStructure() &&
        !validateCarCareClientTeam();

      const filledFieldsCount = basicDetailStatus();
      if (isValid) {
        setBasicDetailsFormSubmit(2);
        setBasicDetailCount(filledFieldsCount);
        // callAPIwithHeaders(autoCarFormUrl, "post", callback, formData);
      } 
    } else if (type === 2) {
      const filledFieldsCount = basicDetailStatus();
      setBasicDetailCount(filledFieldsCount);
      setAutoCareAccountNameErrors({});
      setAutoCareLegalStructureErrors({});
      setAutoCareClientTeamErrors({});
      // callAPIwithHeaders(autoCarFormUrl, "post", callback, formData);
    } else {
      setAutoCareAccountName(initialAutoCareAccountName);
      setAutoCareLegalStructure(initialAutoCareLegalStructure);
      setAutoCareClientTeam(initialAutoCareClientTeam);
      setAutoCarePabsAccountingTeam(initialAutoCarePabsAccountingTeam);
      setAutoCareAccountNameErrors({});
      setAutoCareLegalStructureErrors({});
      setAutoCareClientTeamErrors({});
    }
  };

  return (
    <>
      <div className={`flex flex-col ${roleId !== '4' && 'h-[95vh]'} pt-12`}>
        <div className={`flex-1 overflow-y-scroll`}>
          <div className="m-6 flex flex-col gap-6">
            <CarCareAccountName
              autoCareAccountName={autoCareAccountName}
              setAutoCareAccountName={setAutoCareAccountName}
              autoCareAccountNameErrors={autoCareAccountNameErrors}
            />
            <AutoCareLegalStructure
              autoCareLegalStructure={autoCareLegalStructure}
              setAutoCareLegalStructure={setAutoCareLegalStructure}
              autoCareLegalStructureErrors={autoCareLegalStructureErrors}
            />
            <AutoCareClientTeam
              autoCareClientTeam={autoCareClientTeam}
              setAutoCareClientTeam={setAutoCareClientTeam}
              autoCareClientTeamErrors={autoCareClientTeamErrors}
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
