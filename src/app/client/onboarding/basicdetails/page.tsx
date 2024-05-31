"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// MUI import
import { Button } from "@mui/material";
// Component import
import AccountDetailsForm from "@/components/client/forms/whitelabel/AccountDetailsForm";
import CpaClientTeamForm from "@/components/client/forms/whitelabel/CpaClientTeamForm";
import OtherInformationForm from "@/components/client/forms/whitelabel/OtherInformationForm";
import PabsAccountingTeamForm from "@/components/client/forms/whitelabel/PabsAccountingTeamForm";
// Cookie import
import Cookies from "js-cookie";
import ClientWrapper from "@/components/ClientWapper";
import CarCarePabsAccountingTeam from "@/components/client/forms/autocar/CarCarePabsAccountingTeam";
import CarCareClientTeam from "@/components/client/forms/autocar/CarCareClientTeam";
import CarCareLegalStructure from "@/components/client/forms/autocar/CarCareLegalStructure";
import CarCareAccountName from "@/components/client/forms/autocar/CarCareAccountName";

function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [accountDetailsFormValid, setAccountDetailsFormvalid] =
    useState<boolean>(false);
  const [carCareAccountDetailsValid, setCarCareAccountDetailsvalid] =
    useState<boolean>(false);
  const [accountDetails, setAccountDetails] = useState<any>({
    cpaName: "",
    city: "",
    corporateAddress: "",
    state: "",
    zip: "",
    ownerContact: "",
    ownerEmail: "",
    ownerPhone: "",
  });

  const [accountName, setAccountName] = useState<any>({
    businessType: "",
    service: "",
    corporateAddress: "",
    no_of_Locations: "",
    locationName: "",
    ownerContact: "",
    ownerEmail: "",
    ownerPhone: "",
  });

  const [otherInformation, setOtherInformation] = useState<any>({
    noOfAccounts: "",
    bdm: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  const validateAccountDetailForm = () => {
    const requiredFields = [
      "cpaName",
      "city",
      "corporateAddress",
      "state",
      "zip",
      "ownerContact",
      "ownerEmail",
      "ownerPhone",
    ];
    const newErrors: any = {};

    requiredFields.forEach((field) => {
      if (!accountDetails[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else {
        newErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAccountDetailsFormvalid(!hasErrors);
    setErrors(newErrors);
  };

  const validateCarCareAccountName = () => {
    const requiredFields = [
      "corporateAddress",
      "no_of_Locations",
      "locationName",
      "ownerContact",
      "ownerEmail",
      "ownerPhone"
    ];
    const newErrors: any = {};

    requiredFields.forEach((field) => {
      if (!accountName[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else {
        newErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setCarCareAccountDetailsvalid(!hasErrors);
    setErrors(newErrors);
  };

  const handleSubmit = () => {
    validateCarCareAccountName();
    if (carCareAccountDetailsValid) {
      console.log("Form is valid");
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <ClientWrapper>
      <div className="h-[calc(100vh-82px)] pt-12 overflow-y-scroll">
        {/* <div className="m-6 flex flex-col gap-6">
          <AccountDetailsForm
            accountDetails={accountDetails}
            setAccountDetails={setAccountDetails}
            errors={errors}
          />
          <OtherInformationForm
            otherInformation={otherInformation}
            setOtherInformation={setOtherInformation}
          />
          <CpaClientTeamForm />
          <PabsAccountingTeamForm />
        </div> */}

        <div className="m-6 flex flex-col gap-6">
          <CarCareAccountName
            accountNameForm={accountName}
            setAccountDetails={setAccountName}
            errors={errors}
          />
          <CarCareLegalStructure />
          <CarCareClientTeam />
          <CarCarePabsAccountingTeam />
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
