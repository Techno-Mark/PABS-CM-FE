import { Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";

import {
  initialWhitelabelAccountName,
  initialWhitelabelCpaClientTeam,
  initialWhitelabelOtherInformation,
  initialWhitelabelPABSAccountingTeam,
  validateWhitelabelAccountDetails,
  validateWhitelabelOtherInformation,
  whiteLabelAccountDetailsfieldDisplayNames,
} from "@/static/whitelabel/whitelabelBasicDetails";
import {
  BasicDetailWhitelabelType,
  SwitchRequestBody,
  WhiteLabelBasicDetailsDataType,
  WhitelabelAccountDetailsFormErrors,
  WhitelabelAccountDetailsFormTypes,
  WhitelabelCpaClientTeamErrors,
  WhitelabelCpaClientTeamTypes,
  WhitelabelOtherInformationErrors,
  WhitelabelOtherInformationTypes,
  WhitelabelPABSAccountingTeamErrors,
  WhitelabelPABSAccountingTeamTypes,
  whitelabelOtherInformationfieldDisplayNames,
} from "@/models/whitelabelBasicDetails";
import WhitelabelAccountDetailsForm from "@/components/client/forms/whitelabel/WhitelabelAccountDetailsForm";
import WhitelabelOtherInformationForm from "@/components/client/forms/whitelabel/WhitelabelOtherInformationForm";
import WhitelabelCpaClientTeamForm from "@/components/client/forms/whitelabel/WhitelabelCpaClientTeamForm";
import WhitelabelPabsAccountingTeamForm from "@/components/client/forms/whitelabel/WhitelabelPabsAccountingTeamForm";
import {
  validateEmail,
  validateNumber,
  validatePhone,
  validateZip,
} from "@/utils/validate";
import { onboardingListFormUrl, onboardingSaveFormUrl } from "@/static/apiUrl";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import dayjs from "dayjs";

const BasicDetailsWhitelabel = ({
  setWhitelabelBasicDetailCount,
  setWhitelabelBasicDetailsFormSubmit,
  clientInfo,
  setCheckAllWhiteLabelBasicFields,
  whiteLabelProgressPercentage,
  setIsOpenModal,
  setWhiteLabelFormSubmittedStatus,
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
    cpaArray: [initialWhitelabelCpaClientTeam],
  });
  const [whitelabelCpaClientTeamErrors, setWhitelabelCpaClientTeamErrors] =
    useState<any>({
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
  const [
    isFormSubmitWhiteLabelBasicDetails,
    setIsFormSubmitWhiteLabelBasicDetails,
  ] = useState<boolean>(false);
  const [isFormLocked, setIsFormLocked] = useState<boolean>(false);

  const getWhiteLabelBasicDetailsList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: WhiteLabelBasicDetailsDataType
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          if (!!ResponseData) {
            setIsFormLocked(ResponseData?.isFormLocked ?? false);
            setWhiteLabelFormSubmittedStatus(ResponseData?.isSubmited ?? false);
            setIsFormSubmitWhiteLabelBasicDetails(
              ResponseData?.isSubmited ?? false
            );
            setWhitelabelAccountDetailsCheckStatus(
              ResponseData?.accountDetailsIsDisplay ?? true
            );
            setWhitelabelOtherInformationCheckStatus(
              ResponseData?.otherInformationIsDisplay ?? true
            );
            setWhitelabelCpaClientTeamCheckStatus(
              ResponseData?.cpaClientTeamIsDisplay ?? true
            );
            setwhitelabelPABSAccountingTeamCheckStatus(
              ResponseData?.pabsAccountingTeamIsDisplay ?? true
            );
            setWhitelabelAccountDetails({
              cpaName: ResponseData.cpaName,
              corporateAddress: ResponseData.corporateAddress,
              country: ResponseData?.country || "",
              state: ResponseData?.state || "",
              city: ResponseData?.city || "",
              zip: ResponseData.zip,
              ownerContact: ResponseData.ownerContact,
              ownerEmail: ResponseData.ownerEmail,
              ownerPhone: ResponseData.ownerPhone,
            });
            setWhitelabelOtherInformation({
              noOfAccounts: ResponseData.noOfAccounts,
              bdm: ResponseData.bdm,
              startDate: ResponseData?.startDate
                ? dayjs(ResponseData?.startDate).format("MM/DD/YYYY")
                : null,
            });
            setWhitelabelCpaClientTeam({
              cpaArray:
                ResponseData.pocFieldsDetail.length > 0
                  ? ResponseData.pocFieldsDetail.map(
                      (pocFieldsDetailItem: WhitelabelCpaClientTeamTypes) => ({
                        pocName: pocFieldsDetailItem.pocName,
                        pocEmailId: pocFieldsDetailItem.pocEmailId,
                        pocContactNo: pocFieldsDetailItem.pocContactNo,
                      })
                    )
                  : [
                      {
                        pocName: "",
                        pocEmailId: "",
                        pocContactNo: "",
                      },
                    ],
            });
            setWhitelabelPABSAccountingTeam({
              implementation: ResponseData.implementation,
              operationsHead: ResponseData.operationsHead,
              teamManager: ResponseData.teamManager,
              teamLeader: ResponseData.teamLeader,
              seniorAccountant: ResponseData.seniorAccountant,
              pabsGroupEmail: ResponseData.pabsGroupEmail,
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
  }, [isFormLocked]);

  const validateAccountDetails = () => {
    const newErrors: { [key: string]: string } = {};

    validateWhitelabelAccountDetails.forEach((field) => {
      if (!whitelabelAccountDetails[field]) {
        newErrors[
          field
        ] = `${whiteLabelAccountDetailsfieldDisplayNames[field]} is required`;
      } else if (
        field === "ownerEmail" &&
        !!whitelabelAccountDetailsErrors[field]
      ) {
        newErrors[field] = `${whitelabelAccountDetailsErrors[field]}`;
      } else if (
        field === "ownerContact" &&
        !!whitelabelAccountDetailsErrors[field]
      ) {
        newErrors[field] = `${whitelabelAccountDetailsErrors[field]}`;
      } else if (field === "zip" && !!whitelabelAccountDetailsErrors[field]) {
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
    const newErrors: { [key: string]: string | number } = {};

    validateWhitelabelOtherInformation.forEach((field) => {
      if (!whitelabelOtherInformation[field]) {
        newErrors[
          field
        ] = `${whitelabelOtherInformationfieldDisplayNames[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setWhitelabelOtherInformationErrors(newErrors);
    return hasErrors;
  };

  const handleWhitelabelBasicDetailRemoveErrors = () => {
    setWhitelabelAccountDetailsErrors({});
    setWhitelabelOtherInformationErrors({});
    setWhitelabelCpaClientTeamErrors({
      cpaArray: [initialWhitelabelCpaClientTeamErrors],
    });
  };

  const handleSubmit = (type: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          getWhiteLabelBasicDetailsList();
          type === 2 ? !isValid && showToast(Message, ToastType.Success) : "";
          isValid && showToast(Message, ToastType.Success);
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
      ownerContact: whitelabelAccountDetails.ownerContact
        ? whitelabelAccountDetails.ownerContact
        : "",
      ownerEmail: validateEmail(whitelabelAccountDetails.ownerEmail)
        ? whitelabelAccountDetails.ownerEmail
        : "",
      ownerPhone: validatePhone(whitelabelAccountDetails.ownerPhone)
        ? whitelabelAccountDetails.ownerPhone
        : "",
      country: whitelabelAccountDetails.country,
      state: whitelabelAccountDetails.state,
      city: whitelabelAccountDetails.city,
      zip: validateZip(whitelabelAccountDetails.zip)
        ? whitelabelAccountDetails.zip
        : "",
      noOfAccounts: Number(whitelabelOtherInformation.noOfAccounts),
      bdm: whitelabelOtherInformation.bdm,
      startDate: whitelabelOtherInformation.startDate,
      implementation: whitelabelPABSAccountingTeam.implementation,
      operationsHead: whitelabelPABSAccountingTeam.operationsHead,
      teamManager: whitelabelPABSAccountingTeam.teamManager,
      teamLeader: whitelabelPABSAccountingTeam.teamLeader,
      seniorAccountant: whitelabelPABSAccountingTeam.seniorAccountant,
      pabsGroupEmail: validateEmail(whitelabelPABSAccountingTeam.pabsGroupEmail)
        ? whitelabelPABSAccountingTeam.pabsGroupEmail
        : "",
      pabsPhone: validatePhone(whitelabelPABSAccountingTeam.pabsPhone)
        ? whitelabelPABSAccountingTeam.pabsPhone
        : "",
      progress: whiteLabelProgressPercentage,
      pocFieldsDetail: whitelabelCpaClientTeam.cpaArray
        .filter(
          (pocField: WhitelabelCpaClientTeamTypes) =>
            !!pocField.pocName ||
            !!pocField.pocEmailId ||
            !!pocField.pocContactNo
        )
        .map((pocField: WhitelabelCpaClientTeamTypes) => ({
          pocName: pocField.pocName,
          pocEmailId: validateEmail(pocField.pocEmailId)
            ? pocField.pocEmailId
            : "",
          pocContactNo: validatePhone(pocField.pocContactNo)
            ? pocField.pocContactNo
            : "",
        })),
    };

    const isValidAccountDetails = whitelabelAccountDetailsCheckStatus
      ? validateAccountDetails()
      : false;
    const isValidOtherInformation = whitelabelOtherInformationCheckStatus
      ? validateOtherInformation()
      : false;
    const isValidClientTeam = whitelabelCpaClientTeamCheckStatus
      ? validateCpaClientTeam()
      : false;

    const isValid =
      !isValidAccountDetails && !isValidOtherInformation && isValidClientTeam;
    if (type === 1) {
      roleId === "4" && setCheckAllWhiteLabelBasicFields(isValid);
      const filledFieldsCount = basicDetailWhiteLabelPerStatus();
      setWhitelabelBasicDetailCount(filledFieldsCount);
      if (!isFormSubmitWhiteLabelBasicDetails) {
        callAPIwithHeaders(
          onboardingSaveFormUrl,
          "post",
          callback,
          whiteLabelformData
        );
      } else if (isFormSubmitWhiteLabelBasicDetails && roleId !== "4") {
        if (isValid) {
          callAPIwithHeaders(
            onboardingSaveFormUrl,
            "post",
            callback,
            whiteLabelformData
          );
        }
      } else {
        setWhitelabelBasicDetailsFormSubmit(12);
      }

      if (!isValid) {
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
        if (!isValid) {
          showToast(
            "Mandatory information is not provided. Please fill in to submit the form.",
            ToastType.Warning
          );
        }
        if (isFormSubmitWhiteLabelBasicDetails && roleId !== "4") {
          const isValidAccountDetails = validateAccountDetails();
          const isValidOtherInformation = validateOtherInformation();
          const isValidClientTeam = validateCpaClientTeam();

          const isValid =
            !isValidAccountDetails &&
            !isValidOtherInformation &&
            isValidClientTeam;
          if (isValid) {
            callAPIwithHeaders(
              onboardingSaveFormUrl,
              "post",
              callback,
              whiteLabelformData
            );
          }
        } else {
          const filledFieldsCount = basicDetailWhiteLabelPerStatus();
          setWhitelabelBasicDetailCount(filledFieldsCount);
          handleWhitelabelBasicDetailRemoveErrors();
          callAPIwithHeaders(
            onboardingSaveFormUrl,
            "post",
            callback,
            whiteLabelformData
          );
        }
      }
    }
  };

  const handleSubmitwithOutApi = () => {
    handleWhitelabelBasicDetailRemoveErrors();
    setWhitelabelBasicDetailsFormSubmit(12);
    getWhiteLabelBasicDetailsList();
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
          newFields[index] = { ...newFields[index], [name]: validValue };
          newErrors[index] = { ...newErrors[index], [name]: errorMessage };
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          newFields[index] = { ...newFields[index], [name]: validValue };
        }
        break;
      case "pocEmailId":
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailErrorMessage = !regex.test(value)
          ? `Please provide valid email`
          : "";
        newFields[index] = { ...newFields[index], [name]: value };
        newErrors[index] = { ...newErrors[index], [name]: emailErrorMessage };
        break;
      default:
        newFields[index] = { ...newFields[index], [name]: value };
        newErrors[index] = { ...newErrors[index], [name]: "" };
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
    });
    setWhitelabelCpaClientTeamErrors({
      ...whitelabelCpaClientTeamErrors,
    });
  };

  const validateCpaClientTeam = () => {
    let isValid = true;
    const newErrors = {
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
      (_: { name: string; id: number }, i: number) => i !== index
    );
    const newErrors = whitelabelCpaClientTeamErrors.cpaArray.filter(
      (_: { name: string; id: number }, i: number) => i !== index
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

    const requestBody: SwitchRequestBody = {
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

  useEffect(() => {
    const count = basicDetailWhiteLabelPerStatus();
    setWhitelabelBasicDetailCount(count);
  }, [
    whitelabelAccountDetails,
    whitelabelOtherInformation,
    whitelabelCpaClientTeam,
    whitelabelPABSAccountingTeam,
  ]);

  const basicDetailWhiteLabelPerStatus = () => {
    let relevantFields = [];

    if (whitelabelAccountDetailsCheckStatus) {
      relevantFields.push(
        ...[
          "cpaName",
          "corporateAddress",
          "country",
          "state",
          "city",
          "zip",
          "ownerContact",
          "ownerEmail",
        ]
      );
    }

    if (whitelabelOtherInformationCheckStatus) {
      relevantFields.push(...["startDate"]);
    }

    if (whitelabelCpaClientTeamCheckStatus) {
      if (whitelabelCpaClientTeam && whitelabelCpaClientTeam.cpaArray) {
        whitelabelCpaClientTeam.cpaArray.forEach(() => {
          relevantFields.push(...["pocEmailId"]);
          relevantFields.push(...["pocContactNo"]);
          relevantFields.push(...["pocName"]);
        });
      }
    }

    if (
      !whitelabelAccountDetailsCheckStatus &&
      !whitelabelOtherInformationCheckStatus &&
      !whitelabelCpaClientTeamCheckStatus &&
      whitelabelPABSAccountingTeamCheckStatus
    ) {
      relevantFields.push(
        "implementation",
        "operationsHead",
        "teamManager",
        "teamLeader",
        "seniorAccountant",
        "pabsGroupEmail",
        "pabsPhone"
      );
    }

    let count = 0;
    relevantFields.forEach((field) => {
      if (
        !!whitelabelAccountDetails[field] ||
        !!whitelabelOtherInformation[field] ||
        !!whitelabelCpaClientTeam[field] ||
        (whitelabelCpaClientTeam.cpaArray &&
          whitelabelCpaClientTeam.cpaArray.some(
            (cpa: WhitelabelCpaClientTeamTypes) => !!cpa[field]
          ))
      ) {
        count++;
      }
    });

    let totalFields = relevantFields.length;

    let percentage =
      totalFields > 0 ? Number(((count / totalFields) * 100).toFixed(2)) : 0;

    return percentage;
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
                checkAllFieldsWhiteLabelAccountDetailsForm={
                  isFormSubmitWhiteLabelBasicDetails
                }
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
                isFormLocked={isFormLocked}
              />
            )}
            {(roleId === "4"
              ? whitelabelOtherInformationCheckStatus
              : true) && (
              <WhitelabelOtherInformationForm
                checkAllFieldsWhitelabelOtherInformationForm={
                  isFormSubmitWhiteLabelBasicDetails
                }
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
                isFormLocked={isFormLocked}
              />
            )}
            {(roleId === "4" ? whitelabelCpaClientTeamCheckStatus : true) && (
              <WhitelabelCpaClientTeamForm
                checkAllFieldsWhitelabelCpaClientTeamForm={
                  isFormSubmitWhiteLabelBasicDetails
                }
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
                isFormLocked={isFormLocked}
              />
            )}
            {(roleId === "4"
              ? whitelabelPABSAccountingTeamCheckStatus
              : true) && (
              <WhitelabelPabsAccountingTeamForm
                checkAllFieldsWhitelabelPabsAccountingTeamForm={
                  isFormSubmitWhiteLabelBasicDetails
                }
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
                isFormLocked={isFormLocked}
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
              onClick={() => setIsOpenModal(false)}
              className={`!border-[#023963] !text-[#022946] !bg-[#FFFFFF] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Cancel
            </Button>
          )}
          {(roleId === "4" ? !isFormSubmitWhiteLabelBasicDetails : true) && (
            <Button
              onClick={() => handleSubmit(2)}
              className={`${
                isFormLocked && (roleId === "3" || roleId === "4")
                  ? "!border-[#666] !text-[#666]"
                  : "!border-[#023963] !text-[#022946]"
              } !bg-[#FFFFFF] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
              disabled={isFormLocked && (roleId === "3" || roleId === "4")}
            >
              Save
            </Button>
          )}
          <Button
            onClick={() =>
              isFormLocked && (roleId === "3" || roleId === "4")
                ? handleSubmitwithOutApi()
                : handleSubmit(1)
            }
            className={`!bg-[#022946] !text-white !rounded-full`}
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
