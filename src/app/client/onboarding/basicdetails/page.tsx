"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// MUI import
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import ClientWrapper from "@/components/ClientWapper";
import CarCarePabsAccountingTeam from "@/components/client/forms/autocar/CarCarePabsAccountingTeam";
import CarCareClientTeam from "@/components/client/forms/autocar/CarCareClientTeam";
import CarCareLegalStructure from "@/components/client/forms/autocar/CarCareLegalStructure";
import CarCareAccountName from "@/components/client/forms/autocar/CarCareAccountName";
import {
  AccountNameFormErrors,
  AccountNameFormTypes,
  ClientTeamFormErrors,
  ClientTeamFormTypes,
  LegalStructureFormErrors,
  LegalStructureFormTypes,
  PabsAccountingTeamFormErrors,
  PabsAccountingTeamFormTypes,
} from "@/models/carCareBasicDetails";

function Page() {
  const router = useRouter();
  const initialCarCareAccountNameErrors: AccountNameFormErrors = {};
  const initialcarCareLegalStructureErrors: LegalStructureFormErrors = {};
  const initialCarCareClientTeamErrors: ClientTeamFormErrors = {};

  const [carCareAccountNameErrors, setCarCareAccountNameErrors] =
    useState<AccountNameFormErrors>(initialCarCareAccountNameErrors);
  const [carCareLegalStructureErrors, setCarCareLegalStructureErrors] =
    useState<LegalStructureFormErrors>(initialcarCareLegalStructureErrors);
  const [carCareClientTeamErrors, setCarCareClientTeamErrors] =
    useState<ClientTeamFormErrors>(initialCarCareClientTeamErrors);
  const [carCareAccountDetailsValid, setCarCareAccountDetailsValid] =
    useState<boolean>(false);
  const [carCareLegalStructureValid, setCarCareLegalStructureValid] =
    useState<boolean>(false);
  const [carCareClientTeamValid, setCarCareClientTeamValid] =
    useState<boolean>(false);
  const [carCareAccountName, setCarCareAccountName] =
    useState<AccountNameFormTypes>({
      businessType: "",
      service: "",
      corporateAddress: "",
      no_of_Locations: "",
      locationName: "",
      ownerContact: "",
      ownerEmail: "",
      ownerPhone: "",
    });

  const [carCarelegalStructure, setCarCareLegalStructure] =
    useState<any>({
      no_of_Entities: "",
      no_of_Shops: "",
      salesRep: "",
      agreementDate: null,
      probableAcquitionDate: null,
      dba: "",
    });
    
  const [carCareClientTeam, setCarCareClientTeam] =
    useState<ClientTeamFormTypes>({
      shopManager: "",
      poc1: "",
      email: "",
      cpa: "",
      priorBookkeeper: "",
      itSupport: "",
      timeZone: "",
      state: "",
      weeklyCalls: "",
      weeklyCallTime: "",
      istTime: "",
    });

  const [carCarePabsAccountingTeam, setCarCarePabsAccountingTeam] =
    useState<PabsAccountingTeamFormTypes>({
      implementationManager: "",
      implementationAnalyst: "",
      operationsHead: "",
      operationsManager: "",
      operationsAccountHolder: "",
      pabsGroupEmail: "",
      pabsPhone: "",
    });

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  const validateCarCareAccountName = () => {
    const requiredFields = [
      "corporateAddress",
      "no_of_Locations",
      "locationName",
      "ownerContact",
      "ownerEmail",
      "ownerPhone",
    ];
    const newErrors: any = {};

    requiredFields.forEach((field) => {
      if (!carCareAccountName[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else {
        newErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setCarCareAccountDetailsValid(!hasErrors);
    setCarCareAccountNameErrors(newErrors);
  };

  const validateCarCareLegalStructure = () => {
    const requiredFields = ["no_of_Entities", "no_of_Shops"];
    const newErrors: LegalStructureFormErrors = {};

    requiredFields.forEach((field) => {
      if (!carCarelegalStructure[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else {
        newErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setCarCareLegalStructureValid(!hasErrors);
    setCarCareLegalStructureErrors(newErrors);
  };

  const validateCarCareClientTeam = () => {
    const requiredFields = ["shopManager", "poc1", "email"];
    const newErrors: ClientTeamFormErrors = {};

    requiredFields.forEach((field) => {
      if (!carCareClientTeam[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else {
        newErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setCarCareClientTeamValid(!hasErrors);
    setCarCareClientTeamErrors(newErrors);
  };

  const handleSubmit = () => {
    console.log("carCarelegalStructure: ",carCarelegalStructure)
    validateCarCareAccountName();
    validateCarCareLegalStructure();
    validateCarCareClientTeam();
    if (
      carCareAccountDetailsValid &&
      carCareLegalStructureValid &&
      carCareClientTeamValid
    ) {
      console.log("carCareAccountName : ", carCareAccountName);
      console.log("carCareClientTeam : ", carCareClientTeam);
      console.log("Form is valid");
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <ClientWrapper>
      <div className="h-[calc(100vh-82px)] pt-12 overflow-y-scroll">
        <div className="m-6 flex flex-col gap-6">
          <CarCareAccountName
            carCareAccountName={carCareAccountName}
            setCarCareAccountName={setCarCareAccountName}
            carCareAccountNameErrors={carCareAccountNameErrors}
          />
          <CarCareLegalStructure
            carCareLegalStructure={carCarelegalStructure}
            setCarCareLegalStructure={setCarCareLegalStructure}
            carCareLegalStructureErrors={carCareLegalStructureErrors}
          />
          <CarCareClientTeam
            carCareClientTeam={carCareClientTeam}
            setCarCareClientTeam={setCarCareClientTeam}
            carCareClientTeamErrors={carCareClientTeamErrors}
          />
          <CarCarePabsAccountingTeam
            carCarePabsAccountingTeam={carCarePabsAccountingTeam}
            setCarCarePabsAccountingTeam={setCarCarePabsAccountingTeam}
          />
        </div>
      </div>
      <div className="py-5 border-[#D8D8D8] flex items-center justify-end border-t gap-5 px-6 w-full">
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
          onClick={handleSubmit}
          className={`!bg-[#022946] text-white !rounded-lg`}
          variant="contained"
        >
          <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
            Next: Check List
          </span>
        </Button>
      </div>
    </ClientWrapper>
  );
}

export default Page;
