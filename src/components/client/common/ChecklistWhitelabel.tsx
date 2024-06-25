import React, { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ChecklistWhitelabelType } from "@/models/whitelabelBasicDetails";
import { Button } from "@mui/material";
import ChecklistAccordian from "./ChecklistAccordian";
import {
  AccordianExpand,
  fieldDisplayNamesWhiteLabelMeetingAvailability,
  fieldDisplayNamesWhiteLabelServiceType,
  fieldDisplayNamesWhiteLabelSystemSoftware,
  fieldDisplayNamesWhiteLabelWorkAssignment,
  initialWhiteLabelIndustry,
  initialWhiteLabelWeekly,
  initialWhitelabeGroupEmailEstablished,
  initialWhitelabelAccounting,
  initialWhitelabelAccountingSoftware,
  initialWhitelabelBdm,
  initialWhitelabelCatchup,
  initialWhitelabelCleanup,
  initialWhitelabelClient,
  initialWhitelabelCloudDocument,
  initialWhitelabelCombination,
  initialWhitelabelConvenientDay,
  initialWhitelabelCurrentChallenges,
  initialWhitelabelException,
  initialWhitelabelFTE,
  initialWhitelabelItHelp,
  initialWhitelabelItStructure,
  initialWhitelabelKickOff,
  initialWhitelabelMessenger,
  initialWhitelabelMonthly,
  initialWhitelabelOtherInfo,
  initialWhitelabelPabs,
  initialWhitelabelRemoteSetup,
  initialWhitelabelSystemAcess,
  initialWhitelabelTax,
  initialWhitelabelTeamOverCall,
  initialWhitelabelTimeSlot,
  initialWhitelabelTimeZone,
  validateWhiteLabelMeetingAvailabilityField,
  validateWhiteLabelServiceTypeField,
  validateWhiteLabelSystemSoftwareField,
  validateWhiteLabelWorkAssignmentField,
} from "@/static/whitelabel/whitelabelChecklist";
import WhitelabelCommunicationForm from "@/components/client/forms/whitelabel/WhitelabelCommunicationForm";
import {
  AccountingFormTypes,
  AccountingSoftwareWhiteLabelFormTypes,
  BdmFormTypes,
  CatchupFormTypes,
  CleanupFormTypes,
  ClientFormTypes,
  CloudDocumentWhiteLabelFormTypes,
  CombinationFormTypes,
  CurrentChallengesFormTypes,
  ExceptionFormTypes,
  FTEFormTypes,
  GroupEmailWhiteLabelFormTypes,
  IndustryFormTypes,
  ItHelpWhiteLabelFormTypes,
  ItStructureWhiteLabelFormTypes,
  KickOffWhiteLabelFormTypes,
  MessengerWhiteLabelFormTypes,
  MonthlyFormTypes,
  OtherInfoWhiteLabelFormTypes,
  PabsFormTypes,
  RemoteSetupWhiteLabelFormTypes,
  SystemAccessWhiteLabelFormTypes,
  TaxFormTypes,
  TeamOverCallWhiteLabelFormTypes,
  WeeklyFormTypes,
  WhitelabelConvenientDayFormTypes,
  WhitelabelServiceErrorsTypes,
  WhitelabelTimeSlotFormTypes,
  WhitelabelTimeZoneFormTypes,
  whitelabelMeetingAvailabilityErrorsType,
  whitelabelSystemSoftwareErrorsType,
  whitleLabelWorkAssignmentErrorsType,
} from "@/models/whitelabelChecklist";
import WhitelabelMeetingAvailabilityForm from "@/components/client/forms/whitelabel/WhitelabelMeetingAvailabilityForm";
import WhitelabelEscalationmatrixForm from "@/components/client/forms/whitelabel/WhitelabelEscalationmatrixForm";
import WhitelabelChallengesForm from "@/components/client/forms/whitelabel/WhitelabelChallengesForm";
import WhitelabelWorkAssignmentForm from "@/components/client/forms/whitelabel/WhitelabelWorkAssignmentForm";
import WhitelabelServiceTypeForm from "@/components/client/forms/whitelabel/WhitelabelServiceTypeForm";
import WhitelabelSystemSoftwareSetupForm from "@/components/client/forms/whitelabel/WhitelabelSystemSoftwareSetupForm";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { onboardingListFormUrl, onboardingSaveFormUrl } from "@/static/apiUrl";

const ChecklistWhitelabel = ({
  setWhiteLabelChecklistCount,
  formSubmitId,
  setChecklistFormSubmit,
  whiteLabelProgressPercentage,
  clientInfo,
  setCheckAllWhiteLabelCheckist,
  setWhiteLabelFormIsSubmit,
  setWhiteLabelFormSubmittedStatus
}: ChecklistWhitelabelType) => {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  const initialWhiteLabelSystemSoftwareErrors: any = {};
  const initialWhiteLabelServiceTypeErrors: any = {};
  const initialWhiteLabelTypeWorkAssignmentErrors: any = {};
  const initialWhiteLabelMeetingAvailabilityErrors: any = {};

  // 1
  const [whitelabelGroupEmailEstablished, setWhitelabelGroupEmailEstablished] =
    useState<GroupEmailWhiteLabelFormTypes>(
      initialWhitelabeGroupEmailEstablished
    );
  const [whitelabelTeamOverCall, setWhitelabelTeamOverCall] =
    useState<TeamOverCallWhiteLabelFormTypes>(initialWhitelabelTeamOverCall);
  const [whitelabelKickOff, setWhitelabelKickOff] =
    useState<KickOffWhiteLabelFormTypes>(initialWhitelabelKickOff);

  // 2
  const [whitelabelITStructure, setWhitelabelITStructure] =
    useState<ItStructureWhiteLabelFormTypes>(initialWhitelabelItStructure);
  const [whitelabelRemoteSetup, setWhitelabelRemoteSetup] =
    useState<RemoteSetupWhiteLabelFormTypes>(initialWhitelabelRemoteSetup);
  const [whitelabelITHelp, setWhitelabelITHelp] =
    useState<ItHelpWhiteLabelFormTypes>(initialWhitelabelItHelp);
  const [whitelabelAccountingSoftware, setWhitelabelAccountingSoftware] =
    useState<AccountingSoftwareWhiteLabelFormTypes>(
      initialWhitelabelAccountingSoftware
    );
  const [whitelabelCloudDocument, setWhitelabelCloudDocument] =
    useState<CloudDocumentWhiteLabelFormTypes>(initialWhitelabelCloudDocument);
  const [whitelabelMessenger, setWhitelabelMessenger] =
    useState<MessengerWhiteLabelFormTypes>(initialWhitelabelMessenger);
  const [whitelabelSystemAccess, setWhitelabelSystemAccess] =
    useState<SystemAccessWhiteLabelFormTypes>(initialWhitelabelSystemAcess);
  const [whitelabelOtherInfo, setWhitelabelOtherInfo] =
    useState<OtherInfoWhiteLabelFormTypes>(initialWhitelabelOtherInfo);

  // 3
  const [whitelabelFTE, setWhitelabelFTE] =
    useState<FTEFormTypes>(initialWhitelabelFTE);
  const [whitelabelAccounting, setWhitelabelAccounting] =
    useState<AccountingFormTypes>(initialWhitelabelAccounting);
  const [whitelabelTax, setWhitelabelTax] =
    useState<TaxFormTypes>(initialWhitelabelTax);
  const [whitelabelWeekly, setWhitelabelWeekly] = useState<WeeklyFormTypes>(
    initialWhiteLabelWeekly
  );
  const [whitelabelIndustry, setWhitelabelIndustry] =
    useState<IndustryFormTypes>(initialWhiteLabelIndustry);

  // 4
  const [whitelabelCurrentChallenges, setWhitelabelCurrentChallenges] =
    useState<CurrentChallengesFormTypes>(initialWhitelabelCurrentChallenges);
  const [whitelabelExpectation, setWhitelabelExpectation] =
    useState<ExceptionFormTypes>(initialWhitelabelException);

  // 5
  const [whitelabelMonthly, setWhitelabelMonthly] = useState<MonthlyFormTypes>(
    initialWhitelabelMonthly
  );
  const [whitelabelCleanup, setWhitelabelCleanup] = useState<CleanupFormTypes>(
    initialWhitelabelCleanup
  );
  const [whitelabelCatchup, setWhitelabelCatchup] = useState<CatchupFormTypes>(
    initialWhitelabelCatchup
  );
  const [whitelabelCombination, setWhitelabelCombination] =
    useState<CombinationFormTypes>(initialWhitelabelCombination);

  // 6
  const [whitelabelClient, setWhitelabelClient] = useState<ClientFormTypes>(
    initialWhitelabelClient
  );
  const [whitelabelPABS, setWhitelabelPABS] = useState<PabsFormTypes>(
    initialWhitelabelPabs
  );
  const [whitelabelBDM, setWhitelabelBDM] =
    useState<BdmFormTypes>(initialWhitelabelBdm);

  // 7
  const [whitelabelTimeZone, setWhitelabelTimeZone] =
    useState<WhitelabelTimeZoneFormTypes>(initialWhitelabelTimeZone);
  const [whitelabelConvenientDay, setWhitelabelConvenientDay] =
    useState<WhitelabelConvenientDayFormTypes>(initialWhitelabelConvenientDay);
  const [whitelabelTimeSlot, setWhitelabelTimeSlot] =
    useState<WhitelabelTimeSlotFormTypes>(initialWhitelabelTimeSlot);

  // validate error state
  const [whiteLabelSystemSoftwareErrors, setWhiteLabelSystemSoftwareErrors] =
    useState<whitelabelSystemSoftwareErrorsType>(
      initialWhiteLabelSystemSoftwareErrors
    );
  const [whiteLabelServiceTypeErrors, setWhiteLabelServiceTypeErrors] =
    useState<WhitelabelServiceErrorsTypes>(initialWhiteLabelServiceTypeErrors);
  const [whiteLabelWorkAssignmentErrors, setWhiteLabelWorkAssignmentErrors] =
    useState<whitleLabelWorkAssignmentErrorsType>(
      initialWhiteLabelTypeWorkAssignmentErrors
    );
  const [
    whiteLabelMeetingAvailabilityErrors,
    setWhiteLabelMeetingAvailabilityErrors,
  ] = useState<whitelabelMeetingAvailabilityErrorsType>(
    initialWhiteLabelMeetingAvailabilityErrors
  );

  // has errors state
  const [
    whiteLabelSystemSoftwareHasErrors,
    setWhiteLabelSystemSoftwareHasErrors,
  ] = useState<boolean>(false);
  const [whiteLabelServiceTypeHasErrors, setWhiteLabelServiceTypeHasErrors] =
    useState<boolean>(false);
  const [
    whiteLabelWorkAssignmentHasErrors,
    setWhiteLabelWorkAssignmentHasErrors,
  ] = useState<boolean>(false);
  const [
    whiteLabelMeetingAvailabilityHasErrors,
    setWhiteLabelMeetingAvailabilityHasErrors,
  ] = useState<boolean>(false);

  const [whiteLabelCommunicationChecked, setWhiteLabelCommunicationChecked] =
    useState<boolean>(true);
  const [whiteLabelsystemSoftwareChecked, setWhiteLabelSystemSoftwareChecked] =
    useState<boolean>(true);
  const [whiteLabelServiceTypeChecked, setWhiteLabelServiceTypeChecked] =
    useState<boolean>(true);
  const [whitelabelChallengesChecked, setwhitelabelChallengesChecked] =
    useState<boolean>(true);
  const [whitelabelWorkAssignmentChecked, setWhiteLabelWorkAssignmentChecked] =
    useState<boolean>(true);
  const [
    whiteLabelEscalationMatrixChecked,
    setwhiteLabelEscalationMatrixChecked,
  ] = useState<boolean>(true);
  const [
    whiteLabelMeetingAvailabilityChecked,
    setwhiteLabelMeetingAvailabilityChecked,
  ] = useState<boolean>(true);
  const [isSubmitedWhiteLabelChecklist, setIsSubmitedWhiteLabelChecklist] =
    useState<boolean>(false);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };

  const getWhiteLabelChecklistData = async () => {
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
            setWhiteLabelFormSubmittedStatus(ResponseData?.isSubmited ?? false)
            setWhiteLabelFormIsSubmit(ResponseData?.isSubmited ?? false)
            setIsSubmitedWhiteLabelChecklist(ResponseData?.isSubmited ?? false);
            setWhiteLabelCommunicationChecked(
              ResponseData?.phase1CommunicationIsDisplay ?? true
            );
            setWhiteLabelSystemSoftwareChecked(
              ResponseData?.phase2SystemIsDisplay ?? true
            );
            setWhiteLabelServiceTypeChecked(
              ResponseData?.phase3ServiceIsDisplay ?? true
            );
            setwhitelabelChallengesChecked(
              ResponseData?.phase4ChallengesIsDisplay ?? true
            );
            setWhiteLabelWorkAssignmentChecked(
              ResponseData?.phase5WorkIsDisplay ?? true
            );
            setwhiteLabelEscalationMatrixChecked(
              ResponseData?.phase6EscalationIsDisplay ?? true
            );
            setwhiteLabelMeetingAvailabilityChecked(
              ResponseData?.phase7MeetingIsDisplay ?? true
            );
            ResponseData.checkList.forEach((checklistItem: any) => {
              switch (checklistItem.fieldName) {
                case "Group Email Established":
                  setWhitelabelGroupEmailEstablished({
                    groupEmailWhiteLabelStatus: checklistItem.status,
                    groupEmailWhiteLabelComments: checklistItem.comments,
                    groupEmailWhiteLabelActionPABS: checklistItem.actionsOfPabs,
                    groupEmailWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Kick-Off":
                  setWhitelabelKickOff({
                    kickOffWhiteLabelStatus: checklistItem.status,
                    kickOffWhiteLabelComments: checklistItem.comments,
                    kickOffWhiteLabelActionPABS: checklistItem.actionsOfPabs,
                    kickOffWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Introduction of team over call":
                  setWhitelabelTeamOverCall({
                    teamOverCallWhiteLabelStatus: checklistItem.status,
                    teamOverCallWhiteLabelComments: checklistItem.comments,
                    teamOverCallWhiteLabelActionPABS:
                      checklistItem.actionsOfPabs,
                    teamOverCallWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "IT Structure Knowledge":
                  setWhitelabelITStructure({
                    itStructureWhiteLabelStatus: checklistItem.status,
                    itStructureWhiteLabelComments: checklistItem.comments,
                    itStructureWhiteLabelActionPABS:
                      checklistItem.actionsOfPabs,
                    itStructureWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "If Remote Set up - Access Computer method (dedicated)":
                  setWhitelabelRemoteSetup({
                    remoteSetupWhiteLabelStatus: checklistItem.status,
                    remoteSetupWhiteLabelComments: checklistItem.comments,
                    remoteSetupWhiteLabelActionPABS:
                      checklistItem.actionsOfPabs,
                    remoteSetupWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Need your IT teams help?":
                  setWhitelabelITHelp({
                    itHelpWhiteLabelStatus: checklistItem.status,
                    itHelpWhiteLabelComments: checklistItem.comments,
                    itHelpWhiteLabelActionPABS: checklistItem.actionsOfPabs,
                    itHelpWhiteLabelActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Accounting Software":
                  setWhitelabelAccountingSoftware({
                    accountingSoftwareWhiteLabelStatus: checklistItem.status,
                    accountingSoftwareWhiteLabelComments:
                      checklistItem.comments,
                    accountingSoftwareWhiteLabelActionPABS:
                      checklistItem.actionsOfPabs,
                    accountingSoftwareWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Cloud Document Management Software":
                  setWhitelabelCloudDocument({
                    cloudDocumentWhiteLabelStatus: checklistItem.status,
                    cloudDocumentWhiteLabelComments: checklistItem.comments,
                    cloudDocumentWhiteLabelActionPABS:
                      checklistItem.actionsOfPabs,
                    cloudDocumentWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Team/Clickup/Slack/ Other Messenger tool set up":
                  setWhitelabelMessenger({
                    messengerWhiteLabelStatus: checklistItem.status,
                    messengerWhiteLabelComments: checklistItem.comments,
                    messengerWhiteLabelActionPABS: checklistItem.actionsOfPabs,
                    messengerWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Any Other System access":
                  setWhitelabelSystemAccess({
                    systemAccessWhiteLabelStatus: checklistItem.status,
                    systemAccessWhiteLabelComments: checklistItem.comments,
                    systemAccessWhiteLabelActionPABS:
                      checklistItem.actionsOfPabs,
                    systemAccessWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Other information":
                  setWhitelabelOtherInfo({
                    otherInfoWhiteLabelStatus: checklistItem.status,
                    otherInfoWhiteLabelComments: checklistItem.comments,
                    otherInfoWhiteLabelActionPABS: checklistItem.actionsOfPabs,
                    otherInfoWhiteLabelActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "FTE":
                  setWhitelabelFTE({
                    FTEStatus: checklistItem.status,
                    FTEComments: checklistItem.comments,
                    FTEActionPABS: checklistItem.actionsOfPabs,
                    FTEActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Accounting":
                  setWhitelabelAccounting({
                    accountingStatus: checklistItem.status,
                    accountingComments: checklistItem.comments,
                    accountingActionPABS: checklistItem.actionsOfPabs,
                    accountingActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Tax":
                  setWhitelabelTax({
                    taxStatus: checklistItem.status,
                    taxComments: checklistItem.comments,
                    taxActionPABS: checklistItem.actionsOfPabs,
                    taxActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Biweekly Hours Reporting update":
                  setWhitelabelWeekly({
                    weeklyStatus: checklistItem.status,
                    weeklyComments: checklistItem.comments,
                    weeklyActionPABS: checklistItem.actionsOfPabs,
                    weeklyActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Industry Type":
                  setWhitelabelIndustry({
                    industryStatus: checklistItem.status,
                    industryComments: checklistItem.comments,
                    industryActionPABS: checklistItem.actionsOfPabs,
                    industryActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Current Challenges (If any)":
                  setWhitelabelCurrentChallenges({
                    currentChallengesStatus: checklistItem.status,
                    currentChallengesComments: checklistItem.comments,
                    currentChallengesActionPABS: checklistItem.actionsOfPabs,
                    currentChallengesActionClient:
                      checklistItem.actionsOfClient,
                  });
                  break;
                case "Expectation from PABS":
                  setWhitelabelPABS({
                    pabsStatus: checklistItem.status,
                    pabsComments: checklistItem.comments,
                    pabsActionPABS: checklistItem.actionsOfPabs,
                    pabsActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Monthly":
                  setWhitelabelMonthly({
                    monthlyStatus: checklistItem.status,
                    monthlyComments: checklistItem.comments,
                    monthlyActionPABS: checklistItem.actionsOfPabs,
                    monthlyActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Clean up":
                  setWhitelabelCleanup({
                    cleanupStatus: checklistItem.status,
                    cleanupComments: checklistItem.comments,
                    cleanupActionPABS: checklistItem.actionsOfPabs,
                    cleanupActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Catch up":
                  setWhitelabelCatchup({
                    catchupStatus: checklistItem.status,
                    catchupComments: checklistItem.comments,
                    catchupActionPABS: checklistItem.actionsOfPabs,
                    catchupActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Combination of Monthly/ Clean up/ Catch up":
                  setWhitelabelCombination({
                    combinationStatus: checklistItem.status,
                    combinationComments: checklistItem.comments,
                    combinationActionPABS: checklistItem.actionsOfPabs,
                    combinationActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Client":
                  setWhitelabelClient({
                    clientStatus: checklistItem.status,
                    clientComments: checklistItem.comments,
                    clientActionPABS: checklistItem.actionsOfPabs,
                    clientActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "PABS":
                  setWhitelabelPABS({
                    pabsStatus: checklistItem.status,
                    pabsComments: checklistItem.comments,
                    pabsActionPABS: checklistItem.actionsOfPabs,
                    pabsActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "BDM":
                  setWhitelabelBDM({
                    bdmStatus: checklistItem.status,
                    bdmComments: checklistItem.comments,
                    bdmActionPABS: checklistItem.actionsOfPabs,
                    bdmActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Time Zone":
                  setWhitelabelTimeZone({
                    timeZoneStatus: checklistItem.status,
                    timeZoneComments: checklistItem.comments,
                    timeZoneActionPABS: checklistItem.actionsOfPabs,
                    timeZoneActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Convenient day":
                  setWhitelabelConvenientDay({
                    convenientDayStatus: checklistItem.status,
                    convenientDayComments: checklistItem.comments,
                    convenientDayActionPABS: checklistItem.actionsOfPabs,
                    convenientDayActionClient: checklistItem.actionsOfClient,
                  });
                  break;
                case "Time slot availability":
                  setWhitelabelTimeSlot({
                    timeSlotStatus: checklistItem.status,
                    timeSlotComments: checklistItem.comments,
                    timeSlotActionPABS: checklistItem.actionsOfPabs,
                    timeSlotActionClient: checklistItem.actionsOfClient,
                  });
                  break;
              }
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

  const validateWhiteLabelSystemSoftware = () => {
    const newSystemSoftwareErrors: { [key: string]: string } = {};

    validateWhiteLabelSystemSoftwareField.forEach((field) => {
      if (
        !whitelabelAccountingSoftware[field] &&
        !whitelabelCloudDocument[field] &&
        !whitelabelMessenger[field] &&
        !whitelabelSystemAccess[field]
      ) {
        newSystemSoftwareErrors[
          field
        ] = `${fieldDisplayNamesWhiteLabelSystemSoftware[field]} is required`;
      } else {
        newSystemSoftwareErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newSystemSoftwareErrors).some(
      (error) => !!error
    );
    setWhiteLabelSystemSoftwareErrors(newSystemSoftwareErrors);
    setWhiteLabelSystemSoftwareHasErrors(hasErrors);
    return hasErrors;
  };

  const validateWhiteLabelServiceType = () => {
    const newServiceTypeErrors: { [key: string]: string } = {};

    validateWhiteLabelServiceTypeField.forEach((field) => {
      if (
        !whitelabelFTE[field] &&
        !whitelabelAccounting[field] &&
        !whitelabelTax[field]
      ) {
        newServiceTypeErrors[
          field
        ] = `${fieldDisplayNamesWhiteLabelServiceType[field]} is required`;
      } else {
        newServiceTypeErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newServiceTypeErrors).some(
      (error) => !!error
    );
    setWhiteLabelServiceTypeErrors(newServiceTypeErrors);
    setWhiteLabelServiceTypeHasErrors(hasErrors);
    return hasErrors;
  };

  const validateWhiteLabelTypeOfWorkAssignment = () => {
    const newTypeofWorkAssignmentErrors: { [key: string]: string } = {};

    validateWhiteLabelWorkAssignmentField.forEach((field) => {
      if (
        !whitelabelMonthly[field] &&
        !whitelabelCleanup[field] &&
        !whitelabelCatchup[field] &&
        !whitelabelCombination[field]
      ) {
        newTypeofWorkAssignmentErrors[
          field
        ] = `${fieldDisplayNamesWhiteLabelWorkAssignment[field]} is required`;
      } else {
        newTypeofWorkAssignmentErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newTypeofWorkAssignmentErrors).some(
      (error) => !!error
    );
    setWhiteLabelWorkAssignmentErrors(newTypeofWorkAssignmentErrors);
    setWhiteLabelWorkAssignmentHasErrors(hasErrors);
    return hasErrors;
  };

  const validateWhiteLabelMeetingAvailability = () => {
    const newMeetingAvailabilityErrors: { [key: string]: string } = {};

    validateWhiteLabelMeetingAvailabilityField.forEach((field) => {
      if (
        !whitelabelTimeZone[field] &&
        !whitelabelConvenientDay[field] &&
        !whitelabelTimeSlot[field]
      ) {
        newMeetingAvailabilityErrors[
          field
        ] = `${fieldDisplayNamesWhiteLabelMeetingAvailability[field]} is required`;
      } else {
        newMeetingAvailabilityErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newMeetingAvailabilityErrors).some(
      (error) => !!error
    );
    setWhiteLabelMeetingAvailabilityErrors(newMeetingAvailabilityErrors);
    setWhiteLabelMeetingAvailabilityHasErrors(hasErrors);
    return hasErrors;
  };

  useEffect(() => {
    if (formSubmitId === 12) {
      handleWhiteLabelChecklistRemoveErrors()
    }
    getWhiteLabelChecklistData()
  }, [formSubmitId]);

  useEffect(() => {
    const filledFieldsCount = whiteLabelchecklistStatus();
    setWhiteLabelChecklistCount(filledFieldsCount);
  }, [
    whitelabelAccountingSoftware,
    whitelabelCloudDocument,
    whitelabelMessenger,
    whitelabelSystemAccess,
    whitelabelFTE,
    whitelabelAccounting,
    whitelabelTax,
    whitelabelMonthly,
    whitelabelCleanup,
    whitelabelCatchup,
    whitelabelCombination,
    whitelabelTimeZone,
    whitelabelConvenientDay,
    whitelabelTimeSlot,
    whitelabelGroupEmailEstablished,
    whitelabelKickOff,
    whitelabelTeamOverCall,
    whitelabelCurrentChallenges,
    whitelabelExpectation,
    whitelabelClient,
    whitelabelPABS,
    whitelabelBDM,
    whitelabelTimeSlot,
    whitelabelTimeZone,
    whitelabelConvenientDay
  ]);

  const whiteLabelchecklistStatus = () => {
    let relevantFields = [];

    if (
      !whiteLabelsystemSoftwareChecked &&
      !whiteLabelServiceTypeChecked &&
      !whitelabelWorkAssignmentChecked &&
      whiteLabelCommunicationChecked
    ) {
      relevantFields.push(
        ...[
          "groupEmailWhiteLabelStatus",
          "groupEmailWhiteLabelComments",
          "groupEmailWhiteLabelActionPABS",
          "groupEmailWhiteLabelActionClient",
          "teamOverCallWhiteLabelStatus",
          "teamOverCallWhiteLabelComments",
          "teamOverCallWhiteLabelActionPABS",
          "teamOverCallWhiteLabelActionClient",
          "kickOffWhiteLabelStatus",
          "kickOffWhiteLabelComments",
          "kickOffWhiteLabelActionPABS",
          "kickOffWhiteLabelActionClient",
        ]
      );
    }

    if (whiteLabelsystemSoftwareChecked) {
      relevantFields.push(...validateWhiteLabelSystemSoftwareField);
    }

    if (whiteLabelServiceTypeChecked) {
      relevantFields.push(...validateWhiteLabelServiceTypeField);
    }

    if (
      !whiteLabelsystemSoftwareChecked &&
      !whiteLabelServiceTypeChecked &&
      !whitelabelWorkAssignmentChecked &&
      whitelabelChallengesChecked
    ) {
      relevantFields.push(
        ...[
          "currentChallengesStatus",
          "currentChallengesComments",
          "currentChallengesActionPABS",
          "currentChallengesActionClient",
          "exceptionStatus",
          "exceptionComments",
          "exceptionActionPABS",
          "exceptionActionClient",
        ]
      );
    }

    if (whitelabelWorkAssignmentChecked) {
      relevantFields.push(...validateWhiteLabelWorkAssignmentField);
    }

    if (
      !whiteLabelsystemSoftwareChecked &&
      !whiteLabelServiceTypeChecked &&
      !whitelabelWorkAssignmentChecked &&
      whiteLabelEscalationMatrixChecked
    ) {
      relevantFields.push(
        ...[
          "clientStatus",
          "clientComments",
          "clientActionPABS",
          "clientActionClient",
          "pabsStatus",
          "pabsComments",
          "pabsActionPABS",
          "pabsActionClient",
          "bdmStatus",
          "bdmComments",
          "bdmActionPABS",
          "bdmActionClient",
        ]
      );
    }

    if (
      whiteLabelMeetingAvailabilityChecked
    ) {
      relevantFields.push(...validateWhiteLabelMeetingAvailabilityField);
    }

    let count = 0;
    relevantFields.forEach((field) => {
      if (
        !!whitelabelAccountingSoftware[field] ||
        !!whitelabelCloudDocument[field] ||
        !!whitelabelMessenger[field] ||
        !!whitelabelSystemAccess[field] ||
        !!whitelabelFTE[field] ||
        !!whitelabelAccounting[field] ||
        !!whitelabelTax[field] ||
        !!whitelabelMonthly[field] ||
        !!whitelabelCleanup[field] ||
        !!whitelabelCatchup[field] ||
        !!whitelabelCombination[field] ||
        !!whitelabelTimeZone[field] ||
        !!whitelabelConvenientDay[field] ||
        !!whitelabelTimeSlot[field] ||
        !!whitelabelGroupEmailEstablished[field] ||
        !!whitelabelKickOff[field] ||
        !!whitelabelTeamOverCall[field] ||
        !!whitelabelCurrentChallenges[field] ||
        !!whitelabelExpectation[field] ||
        !!whitelabelClient[field] ||
        !!whitelabelPABS[field] ||
        !!whitelabelBDM[field] ||
        !!whitelabelTimeZone[field] ||
        !!whitelabelConvenientDay[field] ||
        !!whitelabelTimeSlot[field]
      ) {
        count++;
      }
    });

    let totalFields = relevantFields.length;
    let percentage =
      totalFields > 0 ? Math.floor((count / totalFields) * 100) : 0;

    return percentage;
  };

  const handleWhiteLabelChecklistRemoveErrors = () => {
    setWhiteLabelSystemSoftwareErrors({});
    setWhiteLabelSystemSoftwareHasErrors(false);
    setWhiteLabelServiceTypeErrors({});
    setWhiteLabelServiceTypeHasErrors(false);
    setWhiteLabelWorkAssignmentErrors({});
    setWhiteLabelWorkAssignmentHasErrors(false);
    setWhiteLabelMeetingAvailabilityErrors({});
    setWhiteLabelMeetingAvailabilityHasErrors(false);
  };

  const handleSubmit = (type: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          setExpandedAccordian(-1);
          showToast(Message, ToastType.Error);
          return;
        case "success":
          type === 2 ? !isValid && showToast(Message, ToastType.Success) : "";
          isValid && showToast(Message, ToastType.Success);
          setExpandedAccordian(-1);
          type === 3 && setChecklistFormSubmit(11);
          type === 1 && setChecklistFormSubmit(13);
          return;
      }
    };

    const whitelabelChecklistFormData = {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
      businessTypeId: !!clientInfo?.DepartmentId
        ? parseInt(clientInfo?.DepartmentId)
        : parseInt(businessTypeId!),
      checkList: [
        {
          fieldName: "Group Email Established",
          status: whitelabelGroupEmailEstablished.groupEmailWhiteLabelStatus,
          comments:
            whitelabelGroupEmailEstablished.groupEmailWhiteLabelComments,
          actionsOfPabs:
            whitelabelGroupEmailEstablished.groupEmailWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelGroupEmailEstablished.groupEmailWhiteLabelActionClient,
        },
        {
          fieldName: "Kick-Off",
          status: whitelabelKickOff.kickOffWhiteLabelStatus,
          comments: whitelabelKickOff.kickOffWhiteLabelComments,
          actionsOfPabs: whitelabelKickOff.kickOffWhiteLabelActionPABS,
          actionsOfClient: whitelabelKickOff.kickOffWhiteLabelActionClient,
        },
        {
          fieldName: "Introduction of team over call",
          status: whitelabelTeamOverCall.teamOverCallWhiteLabelStatus,
          comments: whitelabelTeamOverCall.teamOverCallWhiteLabelComments,
          actionsOfPabs:
            whitelabelTeamOverCall.teamOverCallWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelTeamOverCall.teamOverCallWhiteLabelActionClient,
        },
        {
          fieldName: "IT Structure Knowledge",
          status: whitelabelITStructure.itStructureWhiteLabelStatus,
          comments: whitelabelITStructure.itStructureWhiteLabelComments,
          actionsOfPabs: whitelabelITStructure.itStructureWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelITStructure.itStructureWhiteLabelActionClient,
        },
        {
          fieldName: "If Remote Set up - Access Computer method (dedicated)",
          status: whitelabelRemoteSetup.remoteSetupWhiteLabelStatus,
          comments: whitelabelRemoteSetup.remoteSetupWhiteLabelComments,
          actionsOfPabs: whitelabelRemoteSetup.remoteSetupWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelRemoteSetup.remoteSetupWhiteLabelActionClient,
        },
        {
          fieldName: "Need your IT teams help?",
          status: whitelabelITHelp.itHelpWhiteLabelStatus,
          comments: whitelabelITHelp.itHelpWhiteLabelComments,
          actionsOfPabs: whitelabelITHelp.itHelpWhiteLabelActionPABS,
          actionsOfClient: whitelabelITHelp.itHelpWhiteLabelActionClient,
        },
        {
          fieldName: "Accounting Software",
          status:
            whitelabelAccountingSoftware.accountingSoftwareWhiteLabelStatus,
          comments:
            whitelabelAccountingSoftware.accountingSoftwareWhiteLabelComments,
          actionsOfPabs:
            whitelabelAccountingSoftware.accountingSoftwareWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelAccountingSoftware.accountingSoftwareWhiteLabelActionClient,
        },
        {
          fieldName: "Cloud Document Management Software",
          status: whitelabelCloudDocument.cloudDocumentWhiteLabelStatus,
          comments: whitelabelCloudDocument.cloudDocumentWhiteLabelComments,
          actionsOfPabs:
            whitelabelCloudDocument.cloudDocumentWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelCloudDocument.cloudDocumentWhiteLabelActionClient,
        },
        {
          fieldName: "Team/Clickup/Slack/ Other Messenger tool set up",
          status: whitelabelMessenger.messengerWhiteLabelStatus,
          comments: whitelabelMessenger.messengerWhiteLabelComments,
          actionsOfPabs: whitelabelMessenger.messengerWhiteLabelActionPABS,
          actionsOfClient: whitelabelMessenger.messengerWhiteLabelActionClient,
        },
        {
          fieldName: "Any Other System access",
          status: whitelabelSystemAccess.systemAccessWhiteLabelStatus,
          comments: whitelabelSystemAccess.systemAccessWhiteLabelComments,
          actionsOfPabs:
            whitelabelSystemAccess.systemAccessWhiteLabelActionPABS,
          actionsOfClient:
            whitelabelSystemAccess.systemAccessWhiteLabelActionClient,
        },
        {
          fieldName: "Other information",
          status: whitelabelOtherInfo.otherInfoWhiteLabelStatus,
          comments: whitelabelOtherInfo.otherInfoWhiteLabelComments,
          actionsOfPabs: whitelabelOtherInfo.otherInfoWhiteLabelActionPABS,
          actionsOfClient: whitelabelOtherInfo.otherInfoWhiteLabelActionClient,
        },
        {
          fieldName: "FTE",
          status: whitelabelFTE.FTEStatus,
          comments: whitelabelFTE.FTEComments,
          actionsOfPabs: whitelabelFTE.FTEActionPABS,
          actionsOfClient: whitelabelFTE.FTEActionClient,
        },
        {
          fieldName: "Accounting",
          status: whitelabelAccounting.accountingStatus,
          comments: whitelabelAccounting.accountingComments,
          actionsOfPabs: whitelabelAccounting.accountingActionPABS,
          actionsOfClient: whitelabelAccounting.accountingActionClient,
        },
        {
          fieldName: "Tax",
          status: whitelabelTax.taxStatus,
          comments: whitelabelTax.taxComments,
          actionsOfPabs: whitelabelTax.taxActionPABS,
          actionsOfClient: whitelabelTax.taxActionClient,
        },
        {
          fieldName: "Biweekly Hours Reporting update",
          status: whitelabelWeekly.weeklyStatus,
          comments: whitelabelWeekly.weeklyComments,
          actionsOfPabs: whitelabelWeekly.weeklyActionPABS,
          actionsOfClient: whitelabelWeekly.weeklyActionClient,
        },
        {
          fieldName: "Industry Type",
          status: whitelabelIndustry.industryStatus,
          comments: whitelabelIndustry.industryComments,
          actionsOfPabs: whitelabelIndustry.industryActionPABS,
          actionsOfClient: whitelabelIndustry.industryActionClient,
        },
        {
          fieldName: "Current Challenges (If any)",
          status: whitelabelCurrentChallenges.currentChallengesStatus,
          comments: whitelabelCurrentChallenges.currentChallengesComments,
          actionsOfPabs:
            whitelabelCurrentChallenges.currentChallengesActionPABS,
          actionsOfClient:
            whitelabelCurrentChallenges.currentChallengesActionClient,
        },
        {
          fieldName: "Expectation from PABS",
          status: whitelabelExpectation.exceptionStatus,
          comments: whitelabelExpectation.exceptionComments,
          actionsOfPabs: whitelabelExpectation.exceptionActionPABS,
          actionsOfClient: whitelabelExpectation.exceptionActionClient,
        },
        {
          fieldName: "Monthly",
          status: whitelabelMonthly.monthlyStatus,
          comments: whitelabelMonthly.monthlyComments,
          actionsOfPabs: whitelabelMonthly.monthlyActionPABS,
          actionsOfClient: whitelabelMonthly.monthlyActionClient,
        },
        {
          fieldName: "Clean up",
          status: whitelabelMonthly.monthlyStatus,
          comments: whitelabelMonthly.monthlyComments,
          actionsOfPabs: whitelabelMonthly.monthlyActionPABS,
          actionsOfClient: whitelabelMonthly.monthlyActionClient,
        },
        {
          fieldName: "Catch up",
          status: whitelabelCatchup.catchupStatus,
          comments: whitelabelCatchup.catchupComments,
          actionsOfPabs: whitelabelCatchup.catchupActionPABS,
          actionsOfClient: whitelabelCatchup.catchupActionClient,
        },
        {
          fieldName: "Combination of Monthly/ Clean up/ Catch up",
          status: whitelabelCombination.combinationStatus,
          comments: whitelabelCombination.combinationComments,
          actionsOfPabs: whitelabelCombination.combinationActionPABS,
          actionsOfClient: whitelabelCombination.combinationActionClient,
        },
        {
          fieldName: "Client",
          status: whitelabelClient.clientStatus,
          comments: whitelabelClient.clientComments,
          actionsOfPabs: whitelabelClient.clientActionPABS,
          actionsOfClient: whitelabelClient.clientActionClient,
        },
        {
          fieldName: "PABS",
          status: whitelabelPABS.pabsStatus,
          comments: whitelabelPABS.pabsComments,
          actionsOfPabs: whitelabelPABS.pabsActionPABS,
          actionsOfClient: whitelabelPABS.pabsActionClient,
        },
        {
          fieldName: "BDM",
          status: whitelabelBDM.bdmStatus,
          comments: whitelabelBDM.bdmComments,
          actionsOfPabs: whitelabelBDM.bdmActionPABS,
          actionsOfClient: whitelabelBDM.bdmActionClient,
        },
        {
          fieldName: "Time Zone",
          status: whitelabelTimeZone.timeZoneStatus,
          comments: whitelabelTimeZone.timeZoneComments,
          actionsOfPabs: whitelabelTimeZone.timeZoneActionPABS,
          actionsOfClient: whitelabelTimeZone.timeZoneActionClient,
        },
        {
          fieldName: "Convenient day",
          status: whitelabelConvenientDay.convenientDayStatus,
          comments: whitelabelConvenientDay.convenientDayComments,
          actionsOfPabs: whitelabelConvenientDay.convenientDayActionPABS,
          actionsOfClient: whitelabelConvenientDay.convenientDayActionClient,
        },
        {
          fieldName: "Time slot availability",
          status: whitelabelTimeSlot.timeSlotStatus,
          comments: whitelabelTimeSlot.timeSlotComments,
          actionsOfPabs: whitelabelTimeSlot.timeSlotActionPABS,
          actionsOfClient: whitelabelTimeSlot.timeSlotActionClient,
        },
      ],
    };

    const isWhiteLabelSystemSoftwareValid = whiteLabelsystemSoftwareChecked
      ? validateWhiteLabelSystemSoftware()
      : false;
    const isWhiteLabelServiceTypeValid = whiteLabelServiceTypeChecked
      ? validateWhiteLabelServiceType()
      : false;
    const isWhiteLabelWorkAssignmentValid = whitelabelWorkAssignmentChecked
      ? validateWhiteLabelTypeOfWorkAssignment()
      : false;
    const isWhiteLabelMeetingAvailabilityValid =
      whiteLabelMeetingAvailabilityChecked
        ? validateWhiteLabelMeetingAvailability()
        : false;

    const isValid =
      !isWhiteLabelSystemSoftwareValid &&
      !isWhiteLabelServiceTypeValid &&
      !isWhiteLabelWorkAssignmentValid &&
      !isWhiteLabelMeetingAvailabilityValid;

    if (type === 1) {
      roleId === "4" && setCheckAllWhiteLabelCheckist(isValid);
      const filledFieldsCount = whiteLabelchecklistStatus();
      setWhiteLabelChecklistCount(filledFieldsCount);
      if (!isSubmitedWhiteLabelChecklist) {
        callAPIwithHeaders(onboardingSaveFormUrl, "post", callback, {
          ...whitelabelChecklistFormData,
          progress: whiteLabelProgressPercentage,
        });
      } else {
        handleWhiteLabelChecklistRemoveErrors();
        setExpandedAccordian(-1);
        setChecklistFormSubmit(13);
      }
      if (!isValid) {
        setExpandedAccordian(-1);
        showToast(
          "Please provide mandatory fields to submit the onboarding form.",
          ToastType.Error
        );
      }
    } else if (type === 2) {
      const isValidStatus =
        whiteLabelCommunicationChecked ||
        whiteLabelsystemSoftwareChecked ||
        whiteLabelServiceTypeChecked ||
        whitelabelChallengesChecked ||
        whitelabelWorkAssignmentChecked ||
        whiteLabelEscalationMatrixChecked ||
        whiteLabelMeetingAvailabilityChecked;
      if (roleId === "4" ? isValidStatus : true) {
        if (!isValid) {
          showToast(
            "Mandatory information is not provided. Please fill in to submit the form.",
            ToastType.Warning
          );
        }

        if (isSubmitedWhiteLabelChecklist && roleId !== "4") {
          const isWhiteLabelSystemSoftwareValid =
            validateWhiteLabelSystemSoftware();
          const isWhiteLabelServiceTypeValid = validateWhiteLabelServiceType();
          const isWhiteLabelWorkAssignmentValid =
            validateWhiteLabelTypeOfWorkAssignment();
          const isWhiteLabelMeetingAvailabilityValid =
            validateWhiteLabelMeetingAvailability();

          const isValid =
            !isWhiteLabelSystemSoftwareValid &&
            !isWhiteLabelServiceTypeValid &&
            !isWhiteLabelWorkAssignmentValid &&
            !isWhiteLabelMeetingAvailabilityValid;

          if (isValid) {
            callAPIwithHeaders(onboardingSaveFormUrl, "post", callback, {
              ...whitelabelChecklistFormData,
              progress: whiteLabelProgressPercentage,
            });
          }
        } else {
          const filledFieldsCount = whiteLabelchecklistStatus();
          setWhiteLabelChecklistCount(filledFieldsCount);
          handleWhiteLabelChecklistRemoveErrors();
          callAPIwithHeaders(onboardingSaveFormUrl, "post", callback, {
            ...whitelabelChecklistFormData,
            progress: whiteLabelProgressPercentage,
          });
        }
      }
    } else {
      if (!isValid) {
        showToast(
          "Mandatory information is not provided. Please fill in to submit the form.",
          ToastType.Warning
        );
      }
      setExpandedAccordian(-1);
      handleWhiteLabelChecklistRemoveErrors();
      if (!isSubmitedWhiteLabelChecklist) {
        callAPIwithHeaders(onboardingSaveFormUrl, "post", callback, {
          ...whitelabelChecklistFormData,
          progress: whiteLabelProgressPercentage,
        });
      } else {
        setExpandedAccordian(-1);
        setChecklistFormSubmit(11);
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
        1: setWhiteLabelCommunicationChecked,
        2: setWhiteLabelSystemSoftwareChecked,
        3: setWhiteLabelServiceTypeChecked,
        4: setwhitelabelChallengesChecked,
        5: setWhiteLabelWorkAssignmentChecked,
        6: setwhiteLabelEscalationMatrixChecked,
        7: setwhiteLabelMeetingAvailabilityChecked,
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
        requestBody.phase1CommunicationIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 2:
        requestBody.phase2SystemIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 3:
        requestBody.phase3ServiceIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 4:
        requestBody.phase4ChallengesIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 5:
        requestBody.phase5WorkIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 6:
        requestBody.phase6EscalationIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 7:
        requestBody.phase7MeetingIsDisplay = check;
        setExpandedAccordian(-1);
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

  const phases = [
    {
      id: 1,
      checkStatus: whiteLabelCommunicationChecked,
      expandedStatus: expandedAccordian === AccordianExpand.COMMUNICATION,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 1),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.COMMUNICATION
      ),
      title: "Communication",
      component: (
        <WhitelabelCommunicationForm
          checkAllFieldsWhiteLabelCommunicationList={
            isSubmitedWhiteLabelChecklist
          }
          whitelabelGroupEmailEstablished={whitelabelGroupEmailEstablished}
          setWhitelabelGroupEmailEstablished={
            setWhitelabelGroupEmailEstablished
          }
          whitelabelTeamOverCall={whitelabelTeamOverCall}
          setWhitelabelTeamOverCall={setWhitelabelTeamOverCall}
          whitelabelKickOff={whitelabelKickOff}
          setWhitelabelKickOff={setWhitelabelKickOff}
        />
      ),
    },
    {
      id: 2,
      checkStatus: whiteLabelsystemSoftwareChecked,
      errorStatus: whiteLabelSystemSoftwareHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.SYSTEMS_SOFTWARE_SET_UP,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 2),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.SYSTEMS_SOFTWARE_SET_UP
      ),
      title: "Systems & Software Set up",
      component: (
        <WhitelabelSystemSoftwareSetupForm
          checkAllFieldsWhiteLabelSystemSoftwareList={
            isSubmitedWhiteLabelChecklist
          }
          whitelabelSystemSoftwareErrors={whiteLabelSystemSoftwareErrors}
          whitelabelITStructure={whitelabelITStructure}
          setWhitelabelITStructure={setWhitelabelITStructure}
          whitelabelRemoteSetup={whitelabelRemoteSetup}
          setWhitelabelRemoteSetup={setWhitelabelRemoteSetup}
          whitelabelITHelp={whitelabelITHelp}
          setWhitelabelITHelp={setWhitelabelITHelp}
          whitelabelAccountingSoftware={whitelabelAccountingSoftware}
          setWhitelabelAccountingSoftware={setWhitelabelAccountingSoftware}
          whitelabelCloudDocument={whitelabelCloudDocument}
          setWhitelabelCloudDocument={setWhitelabelCloudDocument}
          whitelabelMessenger={whitelabelMessenger}
          setWhitelabelMessenger={setWhitelabelMessenger}
          whitelabelSystemAccess={whitelabelSystemAccess}
          setWhitelabelSystemAccess={setWhitelabelSystemAccess}
          whitelabelOtherInfo={whitelabelOtherInfo}
          setWhitelabelOtherInfo={setWhitelabelOtherInfo}
        />
      ),
    },
    {
      id: 3,
      checkStatus: whiteLabelServiceTypeChecked,
      errorStatus: whiteLabelServiceTypeHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.SERVICE_TYPE,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 3),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.SERVICE_TYPE
      ),
      title: "Services Type",
      component: (
        <WhitelabelServiceTypeForm
          checkAllFieldsWhiteLabelServiceTypeList={
            isSubmitedWhiteLabelChecklist
          }
          whitelabelServiceErrors={whiteLabelServiceTypeErrors}
          whitelabelFTE={whitelabelFTE}
          setWhitelabelFTE={setWhitelabelFTE}
          whitelabelAccounting={whitelabelAccounting}
          setWhitelabelAccounting={setWhitelabelAccounting}
          whitelabelTax={whitelabelTax}
          setWhitelabelTax={setWhitelabelTax}
          whitelabelWeekly={whitelabelWeekly}
          setWhitelabelWeekly={setWhitelabelWeekly}
          whitelabelIndustry={whitelabelIndustry}
          setWhitelabelIndustry={setWhitelabelIndustry}
        />
      ),
    },
    {
      id: 4,
      checkStatus: whitelabelChallengesChecked,
      expandedStatus:
        expandedAccordian === AccordianExpand.CHALLENGES_EXPECTATION,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 4),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.CHALLENGES_EXPECTATION
      ),
      title: "Challenges & Expectation",
      component: (
        <WhitelabelChallengesForm
          checkAllFieldsWhiteLabelChallengesExceptionList={
            isSubmitedWhiteLabelChecklist
          }
          whitelabelCurrentChallenges={whitelabelCurrentChallenges}
          setWhitelabelCurrentChallenges={setWhitelabelCurrentChallenges}
          whitelabelExpectation={whitelabelExpectation}
          setWhitelabelExpectation={setWhitelabelExpectation}
        />
      ),
    },
    {
      id: 5,
      checkStatus: whitelabelWorkAssignmentChecked,
      errorStatus: whiteLabelWorkAssignmentHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.TYPE_OF_WORK_ASSIGNMENT,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 5),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.TYPE_OF_WORK_ASSIGNMENT
      ),
      title: "Type of work assignment",
      component: (
        <WhitelabelWorkAssignmentForm
          checkAllFieldsWhiteLabelWorkAssignmentList={
            isSubmitedWhiteLabelChecklist
          }
          whitleLabelWorkAssignmentErrors={whiteLabelWorkAssignmentErrors}
          whitelabelMonthly={whitelabelMonthly}
          setWhitelabelMonthly={setWhitelabelMonthly}
          whitelabelCleanup={whitelabelCleanup}
          setWhitelabelCleanup={setWhitelabelCleanup}
          whitelabelCatchup={whitelabelCatchup}
          setWhitelabelCatchup={setWhitelabelCatchup}
          whitelabelCombination={whitelabelCombination}
          setWhitelabelCombination={setWhitelabelCombination}
        />
      ),
    },
    {
      id: 6,
      checkStatus: whiteLabelEscalationMatrixChecked,
      expandedStatus: expandedAccordian === AccordianExpand.ESCALATION_MATRIX,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 6),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.ESCALATION_MATRIX
      ),
      title: "Escalation Matrix",
      component: (
        <WhitelabelEscalationmatrixForm
          checkAllFieldsWhiteLabelEscalationMatrixList={
            isSubmitedWhiteLabelChecklist
          }
          whitelabelClient={whitelabelClient}
          setWhitelabelClient={setWhitelabelClient}
          whitelabelPABS={whitelabelPABS}
          setWhitelabelPABS={setWhitelabelPABS}
          whitelabelBDM={whitelabelBDM}
          setWhitelabelBDM={setWhitelabelBDM}
        />
      ),
    },
    {
      id: 7,
      checkStatus: whiteLabelMeetingAvailabilityChecked,
      errorStatus: whiteLabelMeetingAvailabilityHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.MEETING_AVAILABILITY,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 7),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.MEETING_AVAILABILITY
      ),
      title: "Meeting Availability",
      component: (
        <WhitelabelMeetingAvailabilityForm
          checkAllFieldsWhiteLabelMeetinAvailabilityList={
            isSubmitedWhiteLabelChecklist
          }
          whitelabelMeetingAvailabilityErrors={
            whiteLabelMeetingAvailabilityErrors
          }
          whitelabelTimeZone={whitelabelTimeZone}
          setWhitelabelTimeZone={setWhitelabelTimeZone}
          whitelabelConvenientDay={whitelabelConvenientDay}
          setWhitelabelConvenientDay={setWhitelabelConvenientDay}
          whitelabelTimeSlot={whitelabelTimeSlot}
          setWhitelabelTimeSlot={setWhitelabelTimeSlot}
        />
      ),
    },
  ];

  const enabledPhases = phases.filter((phase) =>
    roleId === "4" ? phase.checkStatus : true
  );
  const updatedPhases = enabledPhases.map((phase, index) => ({
    ...phase,
    phaseNumber: index + 1,
  }));

  return (
    <>
      {formSubmitId === 12 && (
        <div
          className={`flex flex-col ${roleId !== "4" ? "h-[95vh]" : "h-full"
            } pt-12`}
        >
          <div className={`flex-1 overflow-y-scroll`}>
            <div className="m-6 flex flex-col gap-6">
              {updatedPhases.map((phase) => (
                <ChecklistAccordian
                  key={phase.id}
                  handleSwitchChange={phase.handleSwitchChange}
                  checkStatus={phase.checkStatus}
                  hasError={phase.errorStatus}
                  expandedAccordian={phase.expandedStatus}
                  handleChange={phase.handleAccordianChange}
                  switchDisabled={isSubmitedWhiteLabelChecklist}
                  title={`Phase ${phase.phaseNumber}: ${phase.title}`}
                >
                  {phase.component}
                </ChecklistAccordian>
              ))}

              {roleId === "4" &&
                !whiteLabelCommunicationChecked &&
                !whiteLabelsystemSoftwareChecked &&
                !whiteLabelServiceTypeChecked &&
                !whitelabelChallengesChecked &&
                !whitelabelWorkAssignmentChecked &&
                !whiteLabelEscalationMatrixChecked &&
                !whiteLabelMeetingAvailabilityChecked && (
                  <span className="text-[14px] flex justify-center items-center text-[#333333]">
                    No details for implementation checklist found for your
                    account. Please contact PABS team to get support.
                  </span>
                )}
            </div>
          </div>

          <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
            <Button
              onClick={() => handleSubmit(3)}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Back
            </Button>
            <div className="flex gap-5">
              {roleId !== "4" && (
                <Button
                  onClick={() => { }}
                  className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
                  variant="outlined"
                >
                  Cancel
                </Button>
              )}
              {(roleId === "4" ? !isSubmitedWhiteLabelChecklist : true) && (
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
                  Next: Account Details
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChecklistWhitelabel;
