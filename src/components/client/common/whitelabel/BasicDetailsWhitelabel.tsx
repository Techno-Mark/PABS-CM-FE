import { Button } from "@mui/material";
import React, { useState } from "react";
import Cookies from "js-cookie";
import WhitelabelAccountDetailsForm from "../../forms/whitelabel/WhitelabelAccountDetailsForm";
import {
  initialWhitelabelAccountName,
  initialWhitelabelCpaClientTeam,
  initialWhitelabelOtherInformation,
  initialWhitelabelPABSAccountingTeam,
  validateWhitelabelAccountDetails,
  validateWhitelabelOtherInformation,
  validateWhitelabelPABSAccountingTeam,
} from "@/static/whitelabel/whitelabelBasicDetails";
import {
  BasicDetailWhitelabelType,
  WhitelabelAccountDetailsFormErrors,
  WhitelabelAccountDetailsFormTypes,
  WhitelabelCpaClientTeamErrors,
  WhitelabelOtherInformationErrors,
  WhitelabelOtherInformationTypes,
  WhitelabelPABSAccountingTeamErrors,
  WhitelabelPABSAccountingTeamTypes,
} from "@/models/whitelabel/whitelabelBasicDetails";
import WhitelabelOtherInformationForm from "../../forms/whitelabel/WhitelabelOtherInformationForm";
import WhitelabelCpaClientTeamForm from "../../forms/whitelabel/WhitelabelCpaClientTeamForm";
import WhitelabelPabsAccountingTeamForm from "../../forms/whitelabel/WhitelabelPabsAccountingTeamForm";
import { validateNumber } from "@/utils/validate";

const BasicDetailsWhitelabel = ({
  setBasicDetailCount,
  setBasicDetailsFormSubmit,
}: BasicDetailWhitelabelType) => {
  const roleId = Cookies.get("roleId");
  const initialWhitelabelAccountDetailsErrors: WhitelabelAccountDetailsFormErrors =
    {};
  const initialWhitelabelOtherInformationErrors: WhitelabelOtherInformationErrors =
    {};
  const initialWhitelabelCpaClientTeamErrors: WhitelabelCpaClientTeamErrors =
    {};
  const initialWhitelabelPABSAccountingTeamErrors: WhitelabelPABSAccountingTeamErrors =
    {};

  const [whitelabelAccountDetails, setWhitelabelAccountDetails] =
    useState<WhitelabelAccountDetailsFormTypes>(initialWhitelabelAccountName);
  const [whitelabelAccountDetailsErrors, setWhitelabelAccountDetailsErrors] =
    useState<WhitelabelAccountDetailsFormErrors>(
      initialWhitelabelAccountDetailsErrors
    );

  const [whitelabelOtherInformation, setWhitelabelOtherInformation] =
    useState<WhitelabelOtherInformationTypes>(
      initialWhitelabelOtherInformation
    );
  const [
    whitelabelOtherInformationErrors,
    setWhitelabelOtherInformationErrors,
  ] = useState<WhitelabelOtherInformationErrors>(
    initialWhitelabelOtherInformationErrors
  );

  const [whitelabelCpaClientTeam, setWhitelabelCpaClientTeam] = useState<any>({
    pocDetails: "",
    cpaArray: [initialWhitelabelCpaClientTeam],
  });
  const [whitelabelCpaClientTeamErrors, setWhitelabelCpaClientTeamErrors] =
    useState<any>({
      pocDetails: "",
      cpaArray: [initialWhitelabelCpaClientTeamErrors],
    });

  const [whitelabelPABSAccountingTeam, setWhitelabelPABSAccountingTeam] =
    useState<WhitelabelPABSAccountingTeamTypes>(
      initialWhitelabelPABSAccountingTeam
    );
  const [
    whitelabelPABSAccountingTeamErrors,
    setWhitelabelPABSAccountingTeamErrors,
  ] = useState<WhitelabelPABSAccountingTeamErrors>(
    initialWhitelabelPABSAccountingTeamErrors
  );
  console.log(whitelabelCpaClientTeam);

  const validateAccountDetails = () => {
    const fieldDisplayNames: { [key: string]: string } = {
      cpaName: "CPA Name",
      corporateAddress: "Corporate Address",
      city: "City",
      state: "State",
      zip: "Zip",
      ownerContact: "Owner Contact",
      ownerEmail: "Owner Email",
      ownerPhone: "Owner Phone",
    };

    const newErrors: { [key: string]: string } = {};

    validateWhitelabelAccountDetails.forEach((field) => {
      if (!whitelabelAccountDetails[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else if (
        field === "ownerEmail" &&
        !!whitelabelAccountDetailsErrors[field]
      ) {
        newErrors[field] = `${whitelabelAccountDetailsErrors[field]}`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setWhitelabelAccountDetailsErrors(newErrors);
    return hasErrors;
  };

  const validateOtherInformation = () => {
    const fieldDisplayNames: { [key: string]: string | number } = {
      noOfAccounts: "No Of Accounts",
      bdm: "BDM",
      startDate: "Start Date",
      pandaDocStatus: "PAnda Doc Status",
    };

    const newErrors: { [key: string]: string | number } = {};

    validateWhitelabelOtherInformation.forEach((field) => {
      if (!whitelabelOtherInformation[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setWhitelabelOtherInformationErrors(newErrors);
    return hasErrors;
  };

  const validatePABSAccounting = () => {
    const fieldDisplayNames: { [key: string]: string } = {
      implementation: "Implementation",
      operationsHead: "Operations Head",
      teamManager: "Team Manager",
      teamLeader: "Team Leader",
      seniorAccountant: "Senior Accountant",
      pabsGroupEmail: "PABS Group Email",
      pabsPhone: "PABS Phone",
    };

    const newErrors: { [key: string]: string } = {};

    validateWhitelabelPABSAccountingTeam.forEach((field) => {
      if (!whitelabelPABSAccountingTeam[field]) {
        newErrors[field] = `${fieldDisplayNames[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setWhitelabelPABSAccountingTeamErrors(newErrors);
    return hasErrors;
  };

  const basicDetailStatus = () => {
    let count = 0;
    validateWhitelabelAccountDetails.forEach((field) => {
      if (!!whitelabelAccountDetails[field]) {
        count++;
      }
    });
    let calc = (count / 15) * 100;
    return Math.floor(calc);
  };

  const handleSubmit = (type: number) => {
    if (type === 1) {
      // setBasicDetailsFormSubmit(2); // temporary basic change it afterwards
      validateAccountDetails();
      validateOtherInformation();
      validateCpaClientTeam();
      validatePABSAccounting();
      const isValid =
        !validateAccountDetails() ||
        !validateOtherInformation() ||
        validateCpaClientTeam() ||
        !validatePABSAccounting();

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
      setWhitelabelAccountDetailsErrors({});
      // callAPIwithHeaders(autoCarFormUrl, "post", callback, formData);
    } else {
      setWhitelabelAccountDetails(initialWhitelabelAccountName);
      setWhitelabelAccountDetailsErrors({});
    }
  };

  const handleChange = (index: number, e: any) => {
    const { name, value } = e.target;
    const newFields: any = [...whitelabelCpaClientTeam.cpaArray];
    const newErrors: any = [...whitelabelCpaClientTeamErrors.cpaArray];

    switch (name) {
      case "pocContactNo":
        if (validateNumber(value)) {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? `Contact No must be exactly ${10} characters`
              : "";
          // Simplified validation for numeric values
          newFields[index][name] = validValue;
          newErrors[index][name] = errorMessage;
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          newFields[index][name] = validValue;
        }
        break;
      case "pocEmailId":
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const errorMessage = !regex.test(value)
          ? `Please provide valid email`
          : "";
        // Simplified validation for numeric values
        newFields[index][name] = value;
        newErrors[index][name] = errorMessage;
        break;
      default:
        newFields[index][name] = value;
        newErrors[index][name] = "";
        break;
    }

    setWhitelabelCpaClientTeam({
      ...whitelabelCpaClientTeam,
      cpaArray: newFields,
    });
    setWhitelabelCpaClientTeamErrors({
      ...whitelabelCpaClientTeamErrors,
      cpaArray: newErrors,
    });
  };

  const handlePocDetailsChange = (e: any) => {
    setWhitelabelCpaClientTeam({
      ...whitelabelCpaClientTeam,
      pocDetails: e.target.value,
    });
    setWhitelabelCpaClientTeamErrors({
      ...whitelabelCpaClientTeamErrors,
      pocDetails: "",
    });
  };

  const validateCpaClientTeam = () => {
    let isValid = true;
    const newErrors = {
      pocDetails: "",
      cpaArray: whitelabelCpaClientTeam.cpaArray.map((field: any) => {
        const fieldErrors: any = {};
        ["pocName", "pocEmailId", "pocContactNo"].forEach((key) => {
          if (!field[key]) {
            isValid = false;
            fieldErrors[key] = `${
              key === "pocName"
                ? "POC Name"
                : key === "pocEmailId"
                ? "Email"
                : "Contact No"
            } is required`;
          }
        });
        return fieldErrors;
      }),
    };

    if (!whitelabelCpaClientTeam.pocDetails) {
      isValid = false;
      newErrors.pocDetails = "POC Details is required";
    }

    setWhitelabelCpaClientTeamErrors(newErrors);
    return isValid;
  };

  const handleAddField = () => {
    if (validateCpaClientTeam()) {
      setWhitelabelCpaClientTeam({
        ...whitelabelCpaClientTeam,
        cpaArray: [
          ...whitelabelCpaClientTeam.cpaArray,
          { pocName: "", pocEmailId: "", pocContactNo: "" },
        ],
      });
      setWhitelabelCpaClientTeamErrors({
        ...whitelabelCpaClientTeamErrors,
        cpaArray: [...whitelabelCpaClientTeamErrors, {}],
      });
    }
  };

  const handleRemoveField = (index: number) => {
    const newFields = [...whitelabelCpaClientTeam.cpaArray];
    const newErrors = [...whitelabelCpaClientTeamErrors.cpaArray];
    newFields.splice(index, 1);
    newErrors.splice(index, 1);
    setWhitelabelCpaClientTeam({
      ...whitelabelCpaClientTeam,
      cpaArray: newFields,
    });
    setWhitelabelCpaClientTeamErrors({
      ...whitelabelCpaClientTeamErrors,
      cpaArray: newErrors,
    });
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
            <WhitelabelAccountDetailsForm
              whitelabelAccountDetails={whitelabelAccountDetails}
              setWhitelabelAccountDetails={setWhitelabelAccountDetails}
              whitelabelAccountDetailsErrors={whitelabelAccountDetailsErrors}
              setWhitelabelAccountDetailsErrors={
                setWhitelabelAccountDetailsErrors
              }
            />
            <WhitelabelOtherInformationForm
              whitelabelOtherInformation={whitelabelOtherInformation}
              setWhitelabelOtherInformation={setWhitelabelOtherInformation}
              whitelabelOtherInformationErrors={
                whitelabelOtherInformationErrors
              }
              setWhitelabelOtherInformationErrors={
                setWhitelabelOtherInformationErrors
              }
            />
            <WhitelabelCpaClientTeamForm
              whitelabelCpaClientTeam={whitelabelCpaClientTeam}
              whitelabelCpaClientTeamErrors={whitelabelCpaClientTeamErrors}
              handlePocDetailsChange={handlePocDetailsChange}
              handleChange={handleChange}
              handleAddField={handleAddField}
              handleRemoveField={handleRemoveField}
            />
            <WhitelabelPabsAccountingTeamForm
              whitelabelPABSAccountingTeam={whitelabelPABSAccountingTeam}
              setWhitelabelPABSAccountingTeam={setWhitelabelPABSAccountingTeam}
              whitelabelPABSAccountingTeamErrors={
                whitelabelPABSAccountingTeamErrors
              }
              setWhitelabelPABSAccountingTeamErrors={
                setWhitelabelPABSAccountingTeamErrors
              }
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
};

export default BasicDetailsWhitelabel;
