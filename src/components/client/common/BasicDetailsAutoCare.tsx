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
  StateList,
  TimeZoneList,
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
import { autoCarFormListUrl, autoCarFormUrl } from "@/static/apiUrl";
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
}: BasicDetailAutoCareType) {
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

  const getAutoCareBasicDetailsList = async () => {
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
          const filledFieldsCount = basicDetailStatus();
          setBasicDetailCount(filledFieldsCount);
          setAccountDetailsCheckStatus(ResponseData.accountDetailsIsDisplay);
          setLegalStructureCheckStatus(ResponseData.legalStructureIsDisplay);
          setClientTeamCheckStatus(ResponseData.cpaClientTeamIsDisplay);
          setPabsAccountingTeamCheckStatus(
            ResponseData.pabsAccountingTeamIsDisplay
          );
          setAutoCareAccountDetails({
            accountName: ResponseData.accountName,
            businessType: ResponseData.businessTypeName,
            service: ResponseData.service,
            corporateAddress: ResponseData.corporateAddress,
            noOfLocations: ResponseData.noOfLocations,
            nameOfLocations: ResponseData.nameOfLocations,
            ownerContact: ResponseData.ownerContact,
            ownerEmail: ResponseData.ownerEmail,
            ownerPhone: ResponseData.ownerPhone,
          });
          setAutoCareLegalStructure({
            clientWebsite: ResponseData.clientWebsite,
            no_of_Entities: ResponseData.noOfEntities,
            no_of_Shops: ResponseData.noOfShops,
            salesRep: ResponseData.salesRep,
            agreementDate: dayjs(ResponseData.agreementDate).format(
              "DD MMM YYYY"
            ),
            probableAcquitionDate: dayjs(
              ResponseData.probableAcquisitionDate
            ).format("DD MMM YYYY"),
            dba: ResponseData.dba,
          });
          setAutoCareClientTeam({
            shopManager: ResponseData.shopManager,
            poc1: ResponseData.poc1,
            email: ResponseData.emailId,
            contactInfo: ResponseData.contactInfo,
            priorBookkeeper: ResponseData.priorBookkeeper,
            itSupport: ResponseData.itSupport,
            timeZone:
              TimeZoneList.find((time) => time.label === ResponseData?.timeZone)
                ?.value || "-1",
            state:
              StateList.find((state) => state.label === ResponseData?.state)
                ?.value || "-1",
            weeklyCalls: ResponseData?.weeklyCalls,
            weeklyCallTime: ResponseData.weeklyCallTime,
            istTime: ResponseData.istTime,
          });
          setAutoCarePabsAccountingTeam({
            implementationManager: ResponseData.implementationManager,
            implementationAnalyst: ResponseData.implementationAnalyst,
            operationsHead: ResponseData.operationsHead,
            operationsManager: ResponseData.operationsManager,
            operationsAccountHolder: ResponseData.operationsAccountHandler,
            pabsGroupEmail: ResponseData.pabsGroupEmail,
            pabsPhone: ResponseData.pabsPhone,
          });
          return;
      }
    };
    await callAPIwithHeaders(autoCarFormListUrl, "post", callback, {
      userId:
        !!clientInfo?.UserId
          ? parseInt(clientInfo?.UserId)
          : parseInt(userId!),
    });
  };

  useEffect(() => {
    getAutoCareBasicDetailsList();
    basicDetailStatus()
  }, []);

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
        autoCareClientTeam[field] === "-1"
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
    let count = 0;
    validateFields.forEach((field) => {
      if (
        !!autoCareLegalStructure[field] ||
        !!autoCareAccountDetails[field] ||
        (!!autoCareClientTeam[field] &&
          autoCareClientTeam["weeklyCalls"] !== "-1")
      ) {
        count++;
      }
    });
    let calc = (count / 15) * 100;
    console.log(calc)
    return Math.floor(calc);
  };

  const handleBasicDetailInitialValues = () => {
    setAutoCareAccountDetails(initialAutoCareAccountName);
    setAutoCareLegalStructure(initialAutoCareLegalStructure);
    setAutoCareClientTeam(initialAutoCareClientTeam);
    setAutoCarePabsAccountingTeam(initialAutoCarePabsAccountingTeam);
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
          showToast(Message, ToastType.Success);
          getAutoCareBasicDetailsList();
          return;
      }
    };
    const basicDetailsFormData = {
      userId:
        !!clientInfo?.UserId
          ? parseInt(clientInfo?.UserId!)
          : parseInt(userId!),
      businessTypeId:
        !!clientInfo?.DepartmentId
          ? parseInt(clientInfo?.DepartmentId!)
          : parseInt(businessTypeId!),
      businessTypeName: autoCareAccountDetails.businessType,
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
      agreementDate: autoCareLegalStructure.agreementDate,
      probableAcquisitionDate: autoCareLegalStructure.probableAcquitionDate,
      dba: autoCareLegalStructure.dba,
      clientWebsite: autoCareLegalStructure.clientWebsite,
      shopManager: autoCareClientTeam.shopManager,
      poc1: autoCareClientTeam.poc1,
      emailId: autoCareClientTeam.email,
      contactInfo: autoCareClientTeam.contactInfo,
      priorBookkeeper: autoCareClientTeam.priorBookkeeper,
      itSupport: autoCareClientTeam.itSupport,
      timeZone: TimeZoneList.find(
        (time) => time.value === autoCareClientTeam.timeZone
      )?.label,
      state: StateList.find((state) => state.value === autoCareClientTeam.state)
        ?.label,
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

      const filledFieldsCount = basicDetailStatus();
      if (isValid) {
        setBasicDetailsFormSubmit(2);
        setBasicDetailCount(filledFieldsCount);
        callAPIwithHeaders(
          autoCarFormUrl,
          "post",
          callback,
          basicDetailsFormData
        );
      } else {
        showToast("Please Enter Required Field.", ToastType.Error);
        setBasicDetailCount(filledFieldsCount);
      }
    } else if (type === 2) {
      const filledFieldsCount = basicDetailStatus();
      setBasicDetailCount(filledFieldsCount);
      handleBasicDetailRemoveErrors();
      callAPIwithHeaders(
        autoCarFormUrl,
        "post",
        callback,
        basicDetailsFormData
      );
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
            {(roleId === "4" ? accountDetailsCheckStatus : true) && (
              <AutoCareAccountDetails
                accountDetailsCheckStatus={accountDetailsCheckStatus}
                setAccountDetailsCheckStatus={setAccountDetailsCheckStatus}
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
                legalStructureCheckStatus={legalStructureCheckStatus}
                setLegalStructureCheckStatus={setLegalStructureCheckStatus}
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
                clientTeamCheckStatus={clientTeamCheckStatus}
                setClientTeamCheckStatus={setClientTeamCheckStatus}
                autoCareClientTeam={autoCareClientTeam}
                setAutoCareClientTeam={setAutoCareClientTeam}
                autoCareClientTeamErrors={autoCareClientTeamErrors}
                setAutoCareClientTeamErrors={setAutoCareClientTeamErrors}
              />
            )}
            {(roleId === "4" ? pabsAccountingTeamCheckStatus : true) && (
              <AutoCarePabsAccountingTeam
                pabsAccountingTeamCheckStatus={pabsAccountingTeamCheckStatus}
                setPabsAccountingTeamCheckStatus={
                  setPabsAccountingTeamCheckStatus
                }
                autoCarePabsAccountingTeam={autoCarePabsAccountingTeam}
                setAutoCarePabsAccountingTeam={setAutoCarePabsAccountingTeam}
              />
            )}
          </div>
        </div>

        <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-end border-t gap-5 px-6 w-full">
          <Button
            onClick={() => handleSubmit(3)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(2)}
            className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
            variant="outlined"
          >
            Save as Draft
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
}

export default BasicDetailsAutoCare;
