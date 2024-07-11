import React, { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ChecklistWhitelabelType } from "@/models/whitelabelBasicDetails";
import { Button } from "@mui/material";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import {

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


const ChecklistWhitelabel = ({
  setWhiteLabelChecklistCount,
 
}: ChecklistWhitelabelType) => {

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
    whitelabelConvenientDay,
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

    if (whiteLabelMeetingAvailabilityChecked) {
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
};

export default ChecklistWhitelabel;