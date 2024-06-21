import { Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import WhitelabelAccountDetailsForm from "../forms/whitelabel/WhitelabelAccountDetailsForm";
import {
  initialWhitelabelAccountName,
  initialWhitelabelCpaClientTeam,
  initialWhitelabelOtherInformation,
  initialWhitelabelPABSAccountingTeam,
  validateWhitelabelAccountDetails,
  validateWhitelabelOtherInformation,
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
import WhitelabelOtherInformationForm from "../forms/whitelabel/WhitelabelOtherInformationForm";
import WhitelabelCpaClientTeamForm from "../forms/whitelabel/WhitelabelCpaClientTeamForm";
import WhitelabelPabsAccountingTeamForm from "../forms/whitelabel/WhitelabelPabsAccountingTeamForm";
import { validateNumber } from "@/utils/validate";
import { onboardingListFormUrl, onboardingSaveFormUrl } from "@/static/apiUrl";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import dayjs from "dayjs";

const BasicDetailsWhitelabel = ({
  setWhitelabelBasicDetailCount,
  setWhitelabelBasicDetailsFormSubmit,
  clientInfo,
}: BasicDetailWhitelabelType) => {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");
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

  const [
    whitelabelAccountDetailsCheckStatus,
    setWhitelabelAccountDetailsCheckStatus,
  ] = useState<boolean>(true);
  const [
    whitelabelOtherInformationCheckStatus,
    setWhitelabelOtherInformationCheckStatus,
  ] = useState<boolean>(true);
  const [
    whitelabelCpaClientTeamCheckStatus,
    setWhitelabelCpaClientTeamCheckStatus,
  ] = useState<boolean>(true);
  const [
    whitelabelPABSAccountingTeamCheckStatus,
    setwhitelabelPABSAccountingTeamCheckStatus,
  ] = useState<boolean>(true);

  const getWhiteLabelBasicDetailsList = async () => {
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
          if (!!ResponseData) {
            setWhitelabelAccountDetailsCheckStatus(
              ResponseData.accountDetailsIsDisplay
            );
            setWhitelabelOtherInformationCheckStatus(
              ResponseData.otherInformationIsDisplay
            );
            setWhitelabelCpaClientTeamCheckStatus(
              ResponseData.cpaClientTeamIsDisplay
            );
            setwhitelabelPABSAccountingTeamCheckStatus(
              ResponseData.pabsAccountingTeamIsDisplay
            );
            setWhitelabelAccountDetails({
              cpaName: ResponseData.cpaName,
              city: ResponseData.city,
              corporateAddress: ResponseData.corporateAddress,
              state: ResponseData.state,
              zip: ResponseData.zip,
              ownerContact: ResponseData.ownerContact,
              ownerEmail: ResponseData.ownerEmail,
              ownerPhone: ResponseData.ownerPhone,
            });
            setWhitelabelOtherInformation({
              noOfAccounts: ResponseData.noOfAccounts,
              bdm: ResponseData.bdm,
              startDate: dayjs(ResponseData.startDate).format("DD MMM YYYY"),
            });
            setWhitelabelCpaClientTeam({
              pocDetails: ResponseData.pocDetails,
              cpaArray: ResponseData.pocFieldsDetail.map(
                (pocFieldsDetailItem: any) => ({
                  pocName: pocFieldsDetailItem.pocName,
                  pocEmailId: pocFieldsDetailItem.pocEmailId,
                  pocContactNo: pocFieldsDetailItem.pocContactNo,
                })
              ),
            });
            setWhitelabelPABSAccountingTeam({
              implementation: ResponseData.implementation,
              operationsHead: ResponseData.operationsHead,
              teamManager: ResponseData.teamManager,
              teamLeader: ResponseData.teamLeader,
              seniorAccountant: ResponseData.seniorAccountant,
              pabsGroupEmail: ResponseData.pabsPhone,
              pabsPhone: ResponseData.pabsPhone,
            });
          }
          return;
      }
    };
    await callAPIwithHeaders(onboardingListFormUrl, "post", callback, {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
    });
  };

  useEffect(() => {
    getWhiteLabelBasicDetailsList();
  }, []);

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
      startDate: "Start Date",
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

  const handleSubmit = (type: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          type === 1 && setWhitelabelBasicDetailsFormSubmit(12);
          showToast(Message, ToastType.Success);
          type === 1 && setWhitelabelBasicDetailsFormSubmit(12);
          return;
      }
    };

    const whiteLabelformData = {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
      businessTypeId: !!clientInfo?.DepartmentId
        ? parseInt(clientInfo?.DepartmentId)
        : parseInt(businessTypeId!),
      cpaName: whitelabelAccountDetails.cpaName,
      corporateAddress: whitelabelAccountDetails.corporateAddress,
      ownerContact: whitelabelAccountDetails.ownerContact,
      ownerEmail: whitelabelAccountDetails.ownerEmail,
      ownerPhone: whitelabelAccountDetails.ownerPhone,
      state: whitelabelAccountDetails.state,
      city: whitelabelAccountDetails.city,
      zip: whitelabelAccountDetails.zip,
      noOfAccounts: whitelabelOtherInformation.noOfAccounts,
      bdm: whitelabelOtherInformation.bdm,
      startDate: whitelabelOtherInformation.startDate,
      pocDetails: whitelabelCpaClientTeam.pocDetails,
      implementation: whitelabelPABSAccountingTeam.implementation,
      operationsHead: whitelabelPABSAccountingTeam.operationsHead,
      teamManager: whitelabelPABSAccountingTeam.teamManager,
      teamLeader: whitelabelPABSAccountingTeam.teamLeader,
      seniorAccountant: whitelabelPABSAccountingTeam.seniorAccountant,
      pabsGroupEmail: whitelabelPABSAccountingTeam.pabsGroupEmail,
      pabsPhone: whitelabelPABSAccountingTeam.pabsPhone,
      pocFieldsDetail: whitelabelCpaClientTeam.cpaArray
        .filter(
          (pocField: any) =>
            !!pocField.pocName ||
            !!pocField.pocEmailId ||
            !!pocField.pocContactNo
        )
        .map((pocField: any) => ({
          pocName: pocField.pocName,
          pocEmailId: pocField.pocEmailId,
          pocContactNo: pocField.pocContactNo,
        })),
    };

    if (type === 1) {
      validateAccountDetails();
      validateOtherInformation();
      validateCpaClientTeam();
      const isValid =
        !validateAccountDetails() ||
        !validateOtherInformation() ||
        validateCpaClientTeam();

      if (isValid) {
        callAPIwithHeaders(
          onboardingSaveFormUrl,
          "post",
          callback,
          whiteLabelformData
        );
      } else {
        showToast(
          "Please provide mandatory fields to submit the onboarding form.",
          ToastType.Error
        );
      }
    } else if (type === 2) {
      const isValidStatus =
        whitelabelAccountDetailsCheckStatus ||
        whitelabelOtherInformationCheckStatus ||
        whitelabelCpaClientTeamCheckStatus ||
        whitelabelPABSAccountingTeamCheckStatus;
      if (roleId === "4" ? isValidStatus : true) {
        showToast(
          "Mandatory information is not provided. Please fill in to submit the form.",
          ToastType.Warning
        );
        setWhitelabelAccountDetailsErrors({});
        callAPIwithHeaders(
          onboardingSaveFormUrl,
          "post",
          callback,
          whiteLabelformData
        );
      }
    }
  };

  const handleChange = (index: number, e: any) => {
    const { name, value } = e.target;
    const newFields = whitelabelCpaClientTeam.cpaArray.map(
      (item: any, i: any) => (i === index ? { ...item, [name]: value } : item)
    );
    const newErrors = whitelabelCpaClientTeamErrors.cpaArray.map(
      (item: any, i: any) => (i === index ? { ...item, [name]: "" } : item)
    );

    switch (name) {
      case "pocContactNo":
        if (validateNumber(value)) {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? `Contact No must be exactly 10 characters`
              : "";
          newFields[index][name] = validValue;
          newErrors[index][name] = errorMessage;
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          newFields[index][name] = validValue;
        }
        break;
      case "pocEmailId":
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailErrorMessage = !regex.test(value)
          ? `Please provide valid email`
          : "";
        newFields[index][name] = value;
        newErrors[index][name] = emailErrorMessage;
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
      setWhitelabelCpaClientTeam((prevState: any) => ({
        ...prevState,
        cpaArray: [
          ...prevState.cpaArray,
          { pocName: "", pocEmailId: "", pocContactNo: "" },
        ],
      }));

      setWhitelabelCpaClientTeamErrors((prevState: any) => ({
        ...prevState,
        cpaArray: [...prevState.cpaArray, {}],
      }));
    }
  };

  const handleRemoveField = (index: number) => {
    const newFields = whitelabelCpaClientTeam.cpaArray.filter(
      (_: any, i: any) => i !== index
    );
    const newErrors = whitelabelCpaClientTeamErrors.cpaArray.filter(
      (_: any, i: any) => i !== index
    );

    setWhitelabelCpaClientTeam({
      ...whitelabelCpaClientTeam,
      cpaArray: newFields,
    });

    setWhitelabelCpaClientTeamErrors({
      ...whitelabelCpaClientTeamErrors,
      cpaArray: newErrors,
    });
  };

  const handleSwitchChange = async (
    e: ChangeEvent<HTMLInputElement>,
    phaseType: number
  ) => {
    const check = e.target.checked;
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          break;
        case "success":
          showToast(Message, ToastType.Success);
          break;
      }
    };

    const updatePhaseState = (key: string, value: boolean) => {
      const updateStateFunc: ((value: boolean) => void) | undefined = {
        1: setWhitelabelAccountDetailsCheckStatus,
        2: setWhitelabelOtherInformationCheckStatus,
        3: setWhitelabelCpaClientTeamCheckStatus,
        4: setwhitelabelPABSAccountingTeamCheckStatus,
      }[phaseType];
      if (updateStateFunc) {
        updateStateFunc(value);
      }
    };

    const requestBody: any = {
      userId: parseInt(clientInfo?.UserId!),
      businessTypeId: parseInt(clientInfo?.DepartmentId!),
    };

    switch (phaseType) {
      case 1:
        requestBody.accountDetailsIsDisplay = check;
        break;
      case 2:
        requestBody.otherInformationIsDisplay = check;
        break;
      case 3:
        requestBody.cpaClientTeamIsDisplay = check;
        break;
      case 4:
        requestBody.pabsAccountingTeamIsDisplay = check;
        break;
    }

    await callAPIwithHeaders(
      onboardingSaveFormUrl,
      "post",
      callback,
      requestBody
    );
    updatePhaseState(`setPhase${phaseType}Checked`, check);
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
            {(roleId === "4" ? whitelabelAccountDetailsCheckStatus : true) && (
              <WhitelabelAccountDetailsForm
                whitelabelAccountDetailsCheckStatus={
                  whitelabelAccountDetailsCheckStatus
                }
                handleAccountDetailsSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 1)}
                whitelabelAccountDetails={whitelabelAccountDetails}
                setWhitelabelAccountDetails={setWhitelabelAccountDetails}
                whitelabelAccountDetailsErrors={whitelabelAccountDetailsErrors}
                setWhitelabelAccountDetailsErrors={
                  setWhitelabelAccountDetailsErrors
                }
              />
            )}
            {(roleId === "4"
              ? whitelabelOtherInformationCheckStatus
              : true) && (
              <WhitelabelOtherInformationForm
                whitelabelOtherInformationCheckStatus={
                  whitelabelOtherInformationCheckStatus
                }
                handleWhitelabelOtherInformationSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 2)}
                whitelabelOtherInformation={whitelabelOtherInformation}
                setWhitelabelOtherInformation={setWhitelabelOtherInformation}
                whitelabelOtherInformationErrors={
                  whitelabelOtherInformationErrors
                }
                setWhitelabelOtherInformationErrors={
                  setWhitelabelOtherInformationErrors
                }
              />
            )}
            {(roleId === "4" ? whitelabelCpaClientTeamCheckStatus : true) && (
              <WhitelabelCpaClientTeamForm
                whitelabelCpaClientTeamCheckStatus={
                  whitelabelCpaClientTeamCheckStatus
                }
                handleWhitelabelCpaClientTeamSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 3)}
                whitelabelCpaClientTeam={whitelabelCpaClientTeam}
                whitelabelCpaClientTeamErrors={whitelabelCpaClientTeamErrors}
                handlePocDetailsChange={handlePocDetailsChange}
                handleChange={handleChange}
                handleAddField={handleAddField}
                handleRemoveField={handleRemoveField}
              />
            )}
            {(roleId === "4"
              ? whitelabelPABSAccountingTeamCheckStatus
              : true) && (
              <WhitelabelPabsAccountingTeamForm
                whitelabelPABSAccountingTeamCheckStatus={
                  whitelabelPABSAccountingTeamCheckStatus
                }
                handleWhitelabelPABSAccountingTeamSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 4)}
                whitelabelPABSAccountingTeam={whitelabelPABSAccountingTeam}
                setWhitelabelPABSAccountingTeam={
                  setWhitelabelPABSAccountingTeam
                }
                whitelabelPABSAccountingTeamErrors={
                  whitelabelPABSAccountingTeamErrors
                }
                setWhitelabelPABSAccountingTeamErrors={
                  setWhitelabelPABSAccountingTeamErrors
                }
              />
            )}

            {roleId === "4" &&
              !whitelabelAccountDetailsCheckStatus &&
              !whitelabelOtherInformationCheckStatus &&
              !whitelabelCpaClientTeamCheckStatus &&
              !whitelabelPABSAccountingTeamCheckStatus && (
                <span className="text-[14px] flex justify-center items-center text-[#333333]">
                  No details for implementation checklist found for your
                  account. Please contact PABS team to get support.
                </span>
              )}
          </div>
        </div>

        <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-end border-t gap-5 px-6 w-full">
          {roleId !== "4" && (
            <Button
              onClick={() => handleSubmit(3)}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Cancel
            </Button>
          )}
          <Button
            onClick={() => handleSubmit(2)}
            className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
            variant="outlined"
          >
            Save
          </Button>
          <Button
            onClick={() => handleSubmit(1)}
            className={`!bg-[#022946] text-white !rounded-full`}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[14px] whitespace-nowrap">
              Next: Check List
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default BasicDetailsWhitelabel;
