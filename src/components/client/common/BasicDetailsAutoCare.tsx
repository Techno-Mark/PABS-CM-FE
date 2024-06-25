import React, { ChangeEvent, useEffect, useState } from "react";
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
  AutoCareType,
  BasicDetailsResponseDataType,
  ClientTeamFormErrors,
  ClientTeamFormTypes,
  DropdownOption,
  LegalStructureFormErrors,
  LegalStructureFormTypes,
  PabsAccountingTeamFormTypes,
  SwitchRequestBodyType,
} from "@/models/autoCareBasicDetails";
// Static import
import {
  StateList,
  TimeZoneList,
  WeeklyCallsList,
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
} from "@/static/carCareBasicDetail";
//API import
import { callAPIwithHeaders } from "@/api/commonFunction";
import { onboardingListFormUrl, onboardingSaveFormUrl } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
// Cookie import
import Cookies from "js-cookie";
// Utils import
import AutoCareAccountDetails from "@/components/client/forms/autocare/AutoCareAccountDetails";
import dayjs from "dayjs";

function BasicDetailsAutoCare({
  clientInfo,
  setBasicDetailCount,
  setBasicDetailsFormSubmit,
  setIsOpenModal,
  autoCareProgressPercentage,
  setCheckAllFields,
  setAutoCareFormSubmittedStatus,
}: AutoCareType) {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");
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

  const [accountDetailsCheckStatus, setAccountDetailsCheckStatus] =
    useState<boolean>(true);
  const [legalStructureCheckStatus, setLegalStructureCheckStatus] =
    useState<boolean>(true);
  const [clientTeamCheckStatus, setClientTeamCheckStatus] =
    useState<boolean>(true);
  const [pabsAccountingTeamCheckStatus, setPabsAccountingTeamCheckStatus] =
    useState<boolean>(true);
  const [
    isFormSubmitAutoCareBasicDetails,
    setIsFormSubmitAutoCareBasicDetails,
  ] = useState<boolean>(false);

  const getAutoCareBasicDetailsList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: BasicDetailsResponseDataType
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          if (!!ResponseData) {
            setAutoCareFormSubmittedStatus(ResponseData?.isSubmited ?? false);
            setIsFormSubmitAutoCareBasicDetails(
              ResponseData?.isSubmited ?? false
            );
            setAccountDetailsCheckStatus(
              ResponseData?.accountDetailsIsDisplay ?? true
            );
            setLegalStructureCheckStatus(
              ResponseData?.legalStructureIsDisplay ?? true
            );
            setClientTeamCheckStatus(
              ResponseData?.cpaClientTeamIsDisplay ?? true
            );
            setPabsAccountingTeamCheckStatus(
              ResponseData?.pabsAccountingTeamIsDisplay ?? true
            );
            setAutoCareAccountDetails({
              accountName: ResponseData?.accountName,
              businessType: ResponseData?.businessName,
              service: ResponseData?.service,
              corporateAddress: ResponseData?.corporateAddress,
              noOfLocations: ResponseData?.noOfLocations,
              nameOfLocations: ResponseData?.nameOfLocations,
              ownerContact: ResponseData?.ownerContact,
              ownerEmail: ResponseData?.ownerEmail,
              ownerPhone: ResponseData?.ownerPhone,
            });
            setAutoCareLegalStructure({
              no_of_Entities: ResponseData?.noOfEntities,
              no_of_Shops: ResponseData?.noOfShops,
              salesRep: ResponseData?.salesRep,
              agreementDate: ResponseData?.agreementDate
                ? dayjs(ResponseData?.agreementDate).format("DD MMM YYYY")
                : null,
              probableAcquitionDate: ResponseData?.probableAcquisitionDate
                ? dayjs(ResponseData?.probableAcquisitionDate).format(
                    "DD MMM YYYY"
                  )
                : null,
              dba: ResponseData?.dba,
            });
            setAutoCareClientTeam({
              shopManager: ResponseData?.shopManager,
              poc1: ResponseData?.poc1,
              email: ResponseData?.emailId,
              cpa: ResponseData?.cpa,
              priorBookkeeper: ResponseData?.priorBookkeeper,
              itSupport: ResponseData?.itSupport,
              timeZone:
                ResponseData?.timeZone && ResponseData?.timeZone !== "-1"
                  ? TimeZoneList.find(
                      (time) => time.label === ResponseData?.timeZone
                    )?.value || "-1"
                  : "-1",
              state: ResponseData?.state
                ? StateList.find((state) => state.label === ResponseData?.state)
                    ?.value || "-1"
                : "-1",
              weeklyCalls: ResponseData?.weeklyCalls
                ? ResponseData?.weeklyCalls
                    .split(",")
                    .map((value) => {
                      const matchingItem = WeeklyCallsList.find(
                        (item) => item.value === value
                      );
                      return (
                        matchingItem && {
                          value: matchingItem.value,
                          label: matchingItem.label,
                        }
                      );
                    })
                    .filter((item): item is DropdownOption => item !== null)
                : [],
              weeklyCallTime: ResponseData?.weeklyCallTime,
              istTime: ResponseData?.istTime,
            });
            setAutoCarePabsAccountingTeam({
              implementationManager: ResponseData?.implementationManager,
              implementationAnalyst: ResponseData?.implementationAnalyst,
              operationsHead: ResponseData?.operationsHead,
              operationsManager: ResponseData?.operationsManager,
              operationsAccountHolder: ResponseData?.operationsAccountHandler,
              pabsGroupEmail: ResponseData?.pabsGroupEmail,
              pabsPhone: ResponseData?.pabsPhone,
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

  console.log("auto care client : ", autoCareClientTeam);
  useEffect(() => {
    getAutoCareBasicDetailsList();
  }, []);

  useEffect(() => {
    const count = basicDetailStatus();
    setBasicDetailCount(count);
  }, [
    autoCareAccountDetails,
    autoCareLegalStructure,
    autoCareAccountDetails,
    autoCareClientTeam,
    autoCarePabsAccountingTeam,
  ]);

  const validateCarCareAccountDetails = () => {
    const newAccountDetailsErrors: { [key: string]: string } = {};

    validateAutoCarAccountDetails.forEach((field) => {
      if (!autoCareAccountDetails[field]) {
        newAccountDetailsErrors[
          field
        ] = `${fieldDisplayNamesAccountDetails[field]} is required`;
      } else if (
        field === "ownerEmail" &&
        !!autoCareAccountDetailsErrors[field]
      ) {
        newAccountDetailsErrors[
          field
        ] = `${autoCareAccountDetailsErrors[field]}`;
      } else {
        newAccountDetailsErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newAccountDetailsErrors).some(
      (error) => !!error
    );
    setAutoCareAccountDetailsErrors(newAccountDetailsErrors);
    return hasErrors;
  };

  const validateCarCareLegalStructure = () => {
    const newLegalStructureErrors: { [key: string]: string } = {};

    validateAutoCarLegalStructure.forEach((field) => {
      if (!autoCareLegalStructure[field]) {
        newLegalStructureErrors[
          field
        ] = `${fieldDisplayNamesLegalStructure[field]} is required`;
      } else {
        newLegalStructureErrors[field] = "";
      }
    });
    const hasErrors = Object.values(newLegalStructureErrors).some(
      (error) => !!error
    );
    setAutoCareLegalStructureErrors(newLegalStructureErrors);
    return hasErrors;
  };

  const validateCarCareClientTeam = () => {
    const newClientTeamErrors: { [key: string]: string } = {};

    validateAutoCarClientTeam.forEach((field) => {
      if (!autoCareClientTeam[field]) {
        newClientTeamErrors[
          field
        ] = `${fieldDisplayNamesClientTeam[field]} is required`;
      } else if (
        field === "weeklyCalls" &&
        autoCareClientTeam[field].length === 0
      ) {
        newClientTeamErrors[
          field
        ] = `${fieldDisplayNamesClientTeam[field]} is required`;
      } else if (
        (field === "weeklyCallTime" || field === "istTime") &&
        !!autoCareClientTeamErrors[field]
      ) {
        newClientTeamErrors[field] = `${autoCareClientTeamErrors[field]}`;
      } else {
        newClientTeamErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newClientTeamErrors).some(
      (error) => !!error
    );
    setAutoCareClientTeamErrors(newClientTeamErrors);
    return hasErrors;
  };

  const basicDetailStatus = () => {
    let relevantFields = [];

    if (accountDetailsCheckStatus) {
      relevantFields.push(
        ...[
          "accountName",
          "corporateAddress",
          "noOfLocations",
          "nameOfLocations",
          "ownerContact",
          "ownerEmail",
          "ownerPhone",
        ]
      );
    }

    if (legalStructureCheckStatus) {
      relevantFields.push(...["no_of_Entities", "no_of_Shops"]);
    }

    if (clientTeamCheckStatus) {
      relevantFields.push(
        ...[
          "shopManager",
          "poc1",
          "email",
          "weeklyCalls",
          "weeklyCallTime",
          "istTime",
        ]
      );
    }

    if (
      !accountDetailsCheckStatus &&
      !legalStructureCheckStatus &&
      !clientTeamCheckStatus &&
      pabsAccountingTeamCheckStatus
    ) {
      relevantFields.push(
        "implementationManager",
        "implementationAnalyst",
        "operationsHead",
        "operationsManager",
        "operationsAccountHolder",
        "pabsGroupEmail",
        "pabsPhone"
      );
    }

    let count = 0;
    relevantFields.forEach((field) => {
      if (
        !!autoCareLegalStructure[field] ||
        !!autoCareAccountDetails[field] ||
        !!(
          autoCareClientTeam[field] &&
          autoCareClientTeam["weeklyCalls"].length !== 0
        ) ||
        !!autoCarePabsAccountingTeam[field]
      ) {
        count++;
      }
    });

    let totalFields = relevantFields.length;
    let percentage =
      totalFields > 0 ? Math.floor((count / totalFields) * 100) : 0;

    return percentage;
  };

  const handleBasicDetailRemoveErrors = () => {
    setAutoCareAccountDetailsErrors({});
    setAutoCareLegalStructureErrors({});
    setAutoCareClientTeamErrors({});
  };

  const handleSubmit = (type: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          getAutoCareBasicDetailsList();
          type === 1 && setBasicDetailsFormSubmit(32);
          type === 2 ? !isValid && showToast(Message, ToastType.Success) : "";
          isValid && showToast(Message, ToastType.Success);
          return;
      }
    };
    const basicDetailsFormData = {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
      businessTypeId: !!clientInfo?.DepartmentId
        ? parseInt(clientInfo?.DepartmentId)
        : parseInt(businessTypeId!),
      businessName: autoCareAccountDetails.businessType,
      accountName: autoCareAccountDetails.accountName,
      service: autoCareAccountDetails.service,
      corporateAddress: autoCareAccountDetails.corporateAddress,
      noOfLocations: parseInt(autoCareAccountDetails.noOfLocations),
      nameOfLocations: autoCareAccountDetails.nameOfLocations,
      ownerContact: autoCareAccountDetails.ownerContact,
      ownerEmail: autoCareAccountDetails.ownerEmail,
      ownerPhone: autoCareAccountDetails.ownerPhone,
      noOfEntities: parseInt(autoCareLegalStructure.no_of_Entities),
      noOfShops: parseInt(autoCareLegalStructure.no_of_Shops),
      salesRep: autoCareLegalStructure.salesRep,
      agreementDate: autoCareLegalStructure.agreementDate ?? null,
      probableAcquisitionDate:
        autoCareLegalStructure.probableAcquitionDate ?? null,
      dba: autoCareLegalStructure.dba,
      shopManager: autoCareClientTeam.shopManager,
      poc1: autoCareClientTeam.poc1,
      emailId: autoCareClientTeam.email,
      cpa: autoCareClientTeam.cpa,
      priorBookkeeper: autoCareClientTeam.priorBookkeeper,
      itSupport: autoCareClientTeam.itSupport,
      timeZone:
        autoCareClientTeam.timeZone !== "-1"
          ? TimeZoneList.find(
              (time) => time.value === autoCareClientTeam.timeZone
            )?.label
          : "",
      state:
        autoCareClientTeam.state !== "-1"
          ? StateList.find((state) => state.value === autoCareClientTeam.state)
              ?.label
          : "",
      weeklyCalls:
        Array.isArray(autoCareClientTeam.weeklyCalls) &&
        autoCareClientTeam.weeklyCalls.length > 0
          ? autoCareClientTeam.weeklyCalls
              .map((item: { value: string; label: string }) => item.value)
              .join(",")
          : "",
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
      progress: autoCareProgressPercentage,
    };
    const isValidAccountDetails = accountDetailsCheckStatus
      ? validateCarCareAccountDetails()
      : false;
    const isValidLegalStructure = legalStructureCheckStatus
      ? validateCarCareLegalStructure()
      : false;
    const isValidClientTeam = clientTeamCheckStatus
      ? validateCarCareClientTeam()
      : false;

    const isValid =
      !isValidAccountDetails && !isValidLegalStructure && !isValidClientTeam;
    if (type === 1) {
      roleId === "4" && setCheckAllFields(isValid);
      const filledFieldsCount = basicDetailStatus();
      setBasicDetailCount(filledFieldsCount);
      if (!isFormSubmitAutoCareBasicDetails) {
        callAPIwithHeaders(
          onboardingSaveFormUrl,
          "post",
          callback,
          basicDetailsFormData
        );
      } else {
        setBasicDetailsFormSubmit(32);
      }
      if (!isValid) {
        showToast(
          "Please provide mandatory fields to submit the onboarding form.",
          ToastType.Error
        );
      }
    } else if (type === 2) {
      const isValidStatus =
        accountDetailsCheckStatus ||
        legalStructureCheckStatus ||
        clientTeamCheckStatus ||
        pabsAccountingTeamCheckStatus;
      if (roleId === "4" ? isValidStatus : true) {
        if (!isValid) {
          showToast(
            "Mandatory information is not provided. Please fill in to submit the form.",
            ToastType.Warning
          );
        }
        if (isFormSubmitAutoCareBasicDetails && roleId !== "4") {
          const isValidAccountDetails = validateCarCareAccountDetails();
          const isValidLegalStructure = validateCarCareLegalStructure();
          const isValidClientTeam = validateCarCareClientTeam();

          const isValid =
            !isValidAccountDetails &&
            !isValidLegalStructure &&
            !isValidClientTeam;

          if (isValid) {
            callAPIwithHeaders(
              onboardingSaveFormUrl,
              "post",
              callback,
              basicDetailsFormData
            );
          }
        } else {
          const filledFieldsCount = basicDetailStatus();
          setBasicDetailCount(filledFieldsCount);
          handleBasicDetailRemoveErrors();
          callAPIwithHeaders(
            onboardingSaveFormUrl,
            "post",
            callback,
            basicDetailsFormData
          );
        }
      }
    }
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
        1: setAccountDetailsCheckStatus,
        2: setLegalStructureCheckStatus,
        3: setClientTeamCheckStatus,
        4: setPabsAccountingTeamCheckStatus,
      }[phaseType];
      if (updateStateFunc) {
        updateStateFunc(value);
      }
    };

    const requestBody: SwitchRequestBodyType = {
      userId: parseInt(clientInfo?.UserId!),
      businessTypeId: parseInt(clientInfo?.DepartmentId!),
    };

    switch (phaseType) {
      case 1:
        requestBody.accountDetailsIsDisplay = check;
        break;
      case 2:
        requestBody.legalStructureIsDisplay = check;
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
        <div className="flex-1 overflow-y-scroll">
          <div className="m-6 flex flex-col gap-6">
            {(roleId === "4" ? accountDetailsCheckStatus : true) && (
              <AutoCareAccountDetails
                finalCheckAllFieldsAccountDetails={
                  isFormSubmitAutoCareBasicDetails
                }
                accountDetailsCheckStatus={accountDetailsCheckStatus}
                handleAccountDetailsSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 1)}
                autoCareAccountDetails={autoCareAccountDetails}
                setAutoCareAccountDetails={setAutoCareAccountDetails}
                autoCareAccountDetailsErrors={autoCareAccountDetailsErrors}
                setAutoCareAccountDetailsErrors={
                  setAutoCareAccountDetailsErrors
                }
              />
            )}
            {(roleId === "4" ? legalStructureCheckStatus : true) && (
              <AutoCareLegalStructure
                finalCheckAllFieldsLegalStructure={
                  isFormSubmitAutoCareBasicDetails
                }
                legalStructureCheckStatus={legalStructureCheckStatus}
                handleLegalStructureSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 2)}
                autoCareLegalStructure={autoCareLegalStructure}
                setAutoCareLegalStructure={setAutoCareLegalStructure}
                autoCareLegalStructureErrors={autoCareLegalStructureErrors}
                setAutoCareLegalStructureErrors={
                  setAutoCareLegalStructureErrors
                }
              />
            )}
            {(roleId === "4" ? clientTeamCheckStatus : true) && (
              <AutoCareClientTeam
                finalCheckAllFieldsClientTeam={isFormSubmitAutoCareBasicDetails}
                clientTeamCheckStatus={clientTeamCheckStatus}
                handleClientTeamSwitch={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSwitchChange(e, 3)
                }
                autoCareClientTeam={autoCareClientTeam}
                setAutoCareClientTeam={setAutoCareClientTeam}
                autoCareClientTeamErrors={autoCareClientTeamErrors}
                setAutoCareClientTeamErrors={setAutoCareClientTeamErrors}
              />
            )}
            {(roleId === "4" ? pabsAccountingTeamCheckStatus : true) && (
              <AutoCarePabsAccountingTeam
                finalCheckAllFieldsPabsAccountingTeam={
                  isFormSubmitAutoCareBasicDetails
                }
                pabsAccountingTeamCheckStatus={pabsAccountingTeamCheckStatus}
                handlePabsAccountingTeamSwitch={(
                  e: ChangeEvent<HTMLInputElement>
                ) => handleSwitchChange(e, 4)}
                autoCarePabsAccountingTeam={autoCarePabsAccountingTeam}
                setAutoCarePabsAccountingTeam={setAutoCarePabsAccountingTeam}
              />
            )}

            {roleId === "4" &&
              !accountDetailsCheckStatus &&
              !legalStructureCheckStatus &&
              !clientTeamCheckStatus &&
              !pabsAccountingTeamCheckStatus && (
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
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Cancel
            </Button>
          )}
          {(roleId === "4" ? !isFormSubmitAutoCareBasicDetails : true) && (
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Save
            </Button>
          )}

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
}

export default BasicDetailsAutoCare;
