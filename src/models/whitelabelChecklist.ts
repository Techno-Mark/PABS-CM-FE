export interface WhitelabelFormTypes {
  Status: string;
  Comments: string;
  ActionPABS: string;
  ActionClient: string;
}

export interface WhiteLabelCommunicationTypes {
  className?: string;
  checkAllFieldsWhiteLabelCommunicationList: boolean;
  whitelabelGroupEmailEstablished: GroupEmailWhiteLabelFormTypes;
  setWhitelabelGroupEmailEstablished: React.Dispatch<
    React.SetStateAction<GroupEmailWhiteLabelFormTypes>
  >;
  whitelabelKickOff: KickOffWhiteLabelFormTypes;
  setWhitelabelKickOff: React.Dispatch<
    React.SetStateAction<KickOffWhiteLabelFormTypes>
  >;
  whitelabelTeamOverCall: TeamOverCallWhiteLabelFormTypes;
  setWhitelabelTeamOverCall: React.Dispatch<
    React.SetStateAction<TeamOverCallWhiteLabelFormTypes>
  >;
}

export interface WhiteLabelSystemSoftwareSetupFormType {
  className?: string;
  checkAllFieldsWhiteLabelSystemSoftwareList: boolean;
  whitelabelSystemSoftwareErrors: whitelabelSystemSoftwareErrorsType;
  whitelabelITStructure: ItStructureWhiteLabelFormTypes;
  setWhitelabelITStructure: React.Dispatch<
    React.SetStateAction<ItStructureWhiteLabelFormTypes>
  >;
  whitelabelRemoteSetup: RemoteSetupWhiteLabelFormTypes;
  setWhitelabelRemoteSetup: React.Dispatch<
    React.SetStateAction<RemoteSetupWhiteLabelFormTypes>
  >;
  whitelabelITHelp: ItHelpWhiteLabelFormTypes;
  setWhitelabelITHelp: React.Dispatch<
    React.SetStateAction<ItHelpWhiteLabelFormTypes>
  >;
  whitelabelAccountingSoftware: AccountingSoftwareWhiteLabelFormTypes;
  setWhitelabelAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareWhiteLabelFormTypes>
  >;
  whitelabelCloudDocument: CloudDocumentWhiteLabelFormTypes;
  setWhitelabelCloudDocument: React.Dispatch<
    React.SetStateAction<CloudDocumentWhiteLabelFormTypes>
  >;
  whitelabelMessenger: MessengerWhiteLabelFormTypes;
  setWhitelabelMessenger: React.Dispatch<
    React.SetStateAction<MessengerWhiteLabelFormTypes>
  >;
  whitelabelSystemAccess: SystemAccessWhiteLabelFormTypes;
  setWhitelabelSystemAccess: React.Dispatch<
    React.SetStateAction<SystemAccessWhiteLabelFormTypes>
  >;
  whitelabelOtherInfo: OtherInfoWhiteLabelFormTypes;
  setWhitelabelOtherInfo: React.Dispatch<
    React.SetStateAction<OtherInfoWhiteLabelFormTypes>
  >;
}

export interface whitelabelSystemSoftwareErrorsType
  extends Partial<
    AccountingSoftwareWhiteLabelFormTypes &
      CloudDocumentWhiteLabelFormTypes &
      MessengerWhiteLabelFormTypes &
      SystemAccessWhiteLabelFormTypes
  > {}

export interface whiteLabelServiceType {
  className?: string;
  checkAllFieldsWhiteLabelServiceTypeList: boolean;
  whitelabelServiceErrors: WhitelabelServiceErrorsTypes;
  whitelabelFTE: FTEFormTypes;
  setWhitelabelFTE: React.Dispatch<React.SetStateAction<FTEFormTypes>>;
  whitelabelAccounting: AccountingFormTypes;
  setWhitelabelAccounting: React.Dispatch<
    React.SetStateAction<AccountingFormTypes>
  >;
  whitelabelTax: TaxFormTypes;
  setWhitelabelTax: React.Dispatch<React.SetStateAction<TaxFormTypes>>;
  whitelabelWeekly: WeeklyFormTypes;
  setWhitelabelWeekly: React.Dispatch<React.SetStateAction<WeeklyFormTypes>>;
  whitelabelIndustry: IndustryFormTypes;
  setWhitelabelIndustry: React.Dispatch<
    React.SetStateAction<IndustryFormTypes>
  >;
}

export interface WhitelabelServiceErrorsTypes
  extends Partial<FTEFormTypes & AccountingFormTypes & TaxFormTypes> {}

export interface whitelabelChallengesFormType {
  className?: string;
  checkAllFieldsWhiteLabelChallengesExceptionList: boolean;
  whitelabelCurrentChallenges: CurrentChallengesFormTypes;
  setWhitelabelCurrentChallenges: React.Dispatch<
    React.SetStateAction<CurrentChallengesFormTypes>
  >;
  whitelabelExpectation: ExceptionFormTypes;
  setWhitelabelExpectation: React.Dispatch<
    React.SetStateAction<ExceptionFormTypes>
  >;
}

export interface whitelabelWorkAssignmentType {
  className?: string;
  checkAllFieldsWhiteLabelWorkAssignmentList: boolean;
  whitleLabelWorkAssignmentErrors: whitleLabelWorkAssignmentErrorsType;
  whitelabelMonthly: MonthlyFormTypes;
  setWhitelabelMonthly: React.Dispatch<React.SetStateAction<MonthlyFormTypes>>;
  whitelabelCleanup: CleanupFormTypes;
  setWhitelabelCleanup: React.Dispatch<React.SetStateAction<CleanupFormTypes>>;
  whitelabelCatchup: CatchupFormTypes;
  setWhitelabelCatchup: React.Dispatch<React.SetStateAction<CatchupFormTypes>>;
  whitelabelCombination: CombinationFormTypes;
  setWhitelabelCombination: React.Dispatch<
    React.SetStateAction<CombinationFormTypes>
  >;
}

export interface whitleLabelWorkAssignmentErrorsType
  extends Partial<
    MonthlyFormTypes &
      CleanupFormTypes &
      CatchupFormTypes &
      CombinationFormTypes
  > {}

export interface whitelabelEscalationmatrixFormType {
  className?: string;
  checkAllFieldsWhiteLabelEscalationMatrixList: boolean;
  whitelabelClient: ClientFormTypes;
  setWhitelabelClient: React.Dispatch<React.SetStateAction<ClientFormTypes>>;
  whitelabelPABS: PabsFormTypes;
  setWhitelabelPABS: React.Dispatch<React.SetStateAction<PabsFormTypes>>;
  whitelabelBDM: BdmFormTypes;
  setWhitelabelBDM: React.Dispatch<React.SetStateAction<BdmFormTypes>>;
}

export interface whitelabelMeetingAvailabilityType {
  className?: string;
  checkAllFieldsWhiteLabelMeetinAvailabilityList: boolean;
  whitelabelMeetingAvailabilityErrors: whitelabelMeetingAvailabilityErrorsType;
  whitelabelTimeZone: WhitelabelTimeZoneFormTypes;
  setWhitelabelTimeZone: React.Dispatch<
    React.SetStateAction<WhitelabelTimeZoneFormTypes>
  >;
  whitelabelConvenientDay: WhitelabelConvenientDayFormTypes;
  setWhitelabelConvenientDay: React.Dispatch<
    React.SetStateAction<WhitelabelConvenientDayFormTypes>
  >;
  whitelabelTimeSlot: WhitelabelTimeSlotFormTypes;
  setWhitelabelTimeSlot: React.Dispatch<
    React.SetStateAction<WhitelabelTimeSlotFormTypes>
  >;
}

export interface whitelabelMeetingAvailabilityErrorsType
  extends Partial<
    WhitelabelTimeZoneFormTypes &
      WhitelabelConvenientDayFormTypes &
      WhitelabelTimeSlotFormTypes
  > {}

// 1
export interface GroupEmailEstablishedTypes {
  whitelabelGroupEmailEstablished: GroupEmailWhiteLabelFormTypes;
  setWhitelabelGroupEmailEstablished: React.Dispatch<
    React.SetStateAction<GroupEmailWhiteLabelFormTypes>
  >;
  checkAllGroupEmailEstablished: boolean;
}

export interface whitelabelTeamOverCallTypes {
  whitelabelTeamOverCall: TeamOverCallWhiteLabelFormTypes;
  setWhitelabelTeamOverCall: React.Dispatch<
    React.SetStateAction<TeamOverCallWhiteLabelFormTypes>
  >;
  checkAllIntroductionTeamOverCall: boolean;
}

export interface KickOffTypes {
  whitelabelKickOff: KickOffWhiteLabelFormTypes;
  setWhitelabelKickOff: React.Dispatch<
    React.SetStateAction<KickOffWhiteLabelFormTypes>
  >;
  checkAllKickOff: boolean;
}

export interface GroupEmailWhiteLabelFormTypes {
  groupEmailWhiteLabelStatus: string;
  groupEmailWhiteLabelComments: string;
  groupEmailWhiteLabelActionPABS: string;
  groupEmailWhiteLabelActionClient: string;
  [key: string]: string | null;
}
export interface TeamOverCallWhiteLabelFormTypes {
  teamOverCallWhiteLabelStatus: string;
  teamOverCallWhiteLabelComments: string;
  teamOverCallWhiteLabelActionPABS: string;
  teamOverCallWhiteLabelActionClient: string;
  [key: string]: string | null;
}

export interface KickOffWhiteLabelFormTypes {
  kickOffWhiteLabelStatus: string;
  kickOffWhiteLabelComments: string;
  kickOffWhiteLabelActionPABS: string;
  kickOffWhiteLabelActionClient: string;
  [key: string]: string | null;
}

// 2
export interface ITStructureTypes {
  whitelabelITStructure: ItStructureWhiteLabelFormTypes;
  setWhitelabelITStructure: React.Dispatch<
    React.SetStateAction<ItStructureWhiteLabelFormTypes>
  >;
  checkAllItStructure: boolean;
}

export interface RemoteSetupTypes {
  whitelabelRemoteSetup: RemoteSetupWhiteLabelFormTypes;
  setWhitelabelRemoteSetup: React.Dispatch<
    React.SetStateAction<RemoteSetupWhiteLabelFormTypes>
  >;
  checkAllRemoteSetup: boolean;
}

export interface ITHelpTypes {
  whitelabelITHelp: ItHelpWhiteLabelFormTypes;
  setWhitelabelITHelp: React.Dispatch<
    React.SetStateAction<ItHelpWhiteLabelFormTypes>
  >;
  checkAllITHelp: boolean;
}

export interface AccountingSoftwareTypes {
  whitelabelAccountingSoftware: AccountingSoftwareWhiteLabelFormTypes;
  setWhitelabelAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareWhiteLabelFormTypes>
  >;
  whitelabelAccountingSoftwareErrors: whitelabelSystemSoftwareErrorsType;
  checkAllAccountingSoftware: boolean;
}

export interface CloudDocumentTypes {
  whitelabelCloudDocument: CloudDocumentWhiteLabelFormTypes;
  setWhitelabelCloudDocument: React.Dispatch<
    React.SetStateAction<CloudDocumentWhiteLabelFormTypes>
  >;
  whitelabelCloudDocumentErrors: whitelabelSystemSoftwareErrorsType;
  checkAllCloudDocument: boolean;
}

export interface MessengerTypes {
  whitelabelMessenger: MessengerWhiteLabelFormTypes;
  setWhitelabelMessenger: React.Dispatch<
    React.SetStateAction<MessengerWhiteLabelFormTypes>
  >;
  whitelabelMessengerErrors: whitelabelSystemSoftwareErrorsType;
  checkAllMessenger: boolean;
}

export interface SystemAccessTypes {
  whitelabelSystemAccess: SystemAccessWhiteLabelFormTypes;
  setWhitelabelSystemAccess: React.Dispatch<
    React.SetStateAction<SystemAccessWhiteLabelFormTypes>
  >;
  whitelabelSystemAccessErrors: whitelabelSystemSoftwareErrorsType;
  checkAllSystemAccess: boolean;
}
export interface OtherInfoTypes {
  whitelabelOtherInfo: OtherInfoWhiteLabelFormTypes;
  setWhitelabelOtherInfo: React.Dispatch<
    React.SetStateAction<OtherInfoWhiteLabelFormTypes>
  >;
  checkAllOtherInfo: boolean;
}

export interface ItStructureWhiteLabelFormTypes {
  itStructureWhiteLabelStatus: string;
  itStructureWhiteLabelComments: string;
  itStructureWhiteLabelActionPABS: string;
  itStructureWhiteLabelActionClient: string;
}

export interface RemoteSetupWhiteLabelFormTypes {
  remoteSetupWhiteLabelStatus: string;
  remoteSetupWhiteLabelComments: string;
  remoteSetupWhiteLabelActionPABS: string;
  remoteSetupWhiteLabelActionClient: string;
}

export interface ItHelpWhiteLabelFormTypes {
  itHelpWhiteLabelStatus: string;
  itHelpWhiteLabelComments: string;
  itHelpWhiteLabelActionPABS: string;
  itHelpWhiteLabelActionClient: string;
}

export interface AccountingSoftwareWhiteLabelFormTypes {
  accountingSoftwareWhiteLabelStatus: string;
  accountingSoftwareWhiteLabelComments: string;
  accountingSoftwareWhiteLabelActionPABS: string;
  accountingSoftwareWhiteLabelActionClient: string;
  [key: string]: string | null;
}

export interface CloudDocumentWhiteLabelFormTypes {
  cloudDocumentWhiteLabelStatus: string;
  cloudDocumentWhiteLabelComments: string;
  cloudDocumentWhiteLabelActionPABS: string;
  cloudDocumentWhiteLabelActionClient: string;
  [key: string]: string | null;
}

export interface MessengerWhiteLabelFormTypes {
  messengerWhiteLabelStatus: string;
  messengerWhiteLabelComments: string;
  messengerWhiteLabelActionPABS: string;
  messengerWhiteLabelActionClient: string;
  [key: string]: string | null;
}

export interface SystemAccessWhiteLabelFormTypes {
  systemAccessWhiteLabelStatus: string;
  systemAccessWhiteLabelComments: string;
  systemAccessWhiteLabelActionPABS: string;
  systemAccessWhiteLabelActionClient: string;
  [key: string]: string | null;
}

export interface OtherInfoWhiteLabelFormTypes {
  otherInfoWhiteLabelStatus: string;
  otherInfoWhiteLabelComments: string;
  otherInfoWhiteLabelActionPABS: string;
  otherInfoWhiteLabelActionClient: string;
}

// 3
export interface FTETypes {
  whitelabelFTE: FTEFormTypes;
  setWhitelabelFTE: React.Dispatch<React.SetStateAction<FTEFormTypes>>;
  whitelabelFTEErrors: WhitelabelServiceErrorsTypes;
  checkAllFTE: boolean;
}

export interface AccountingTypes {
  whitelabelAccounting: AccountingFormTypes;
  setWhitelabelAccounting: React.Dispatch<
    React.SetStateAction<AccountingFormTypes>
  >;
  whitelabelAccountingErrors: WhitelabelServiceErrorsTypes;
  checkAllAccounting: boolean;
}

export interface TaxTypes {
  whitelabelTax: TaxFormTypes;
  setWhitelabelTax: React.Dispatch<React.SetStateAction<TaxFormTypes>>;
  whitelabelTaxErrors: WhitelabelServiceErrorsTypes;
  checkAllTax: boolean;
}

export interface WeeklyTypes {
  whitelabelWeekly: WeeklyFormTypes;
  setWhitelabelWeekly: React.Dispatch<React.SetStateAction<WeeklyFormTypes>>;
  checkAllWeekly: boolean;
}

export interface IndustryTypes {
  whitelabelIndustry: IndustryFormTypes;
  setWhitelabelIndustry: React.Dispatch<
    React.SetStateAction<IndustryFormTypes>
  >;
  checkAllIndustry: boolean;
}

export interface FTEFormTypes {
  FTEStatus: string;
  FTEComments: string;
  FTEActionPABS: string;
  FTEActionClient: string;
  [key: string]: string | null;
}

export interface AccountingFormTypes {
  accountingStatus: string;
  accountingComments: string;
  accountingActionPABS: string;
  accountingActionClient: string;
  [key: string]: string | null;
}

export interface TaxFormTypes {
  taxStatus: string;
  taxComments: string;
  taxActionPABS: string;
  taxActionClient: string;
  [key: string]: string | null;
}

export interface WeeklyFormTypes {
  weeklyStatus: string;
  weeklyComments: string;
  weeklyActionPABS: string;
  weeklyActionClient: string;
}

export interface IndustryFormTypes {
  industryStatus: string;
  industryComments: string;
  industryActionPABS: string;
  industryActionClient: string;
}

// 4
export interface CurrentChallengesTypes {
  whitelabelCurrentChallenges: CurrentChallengesFormTypes;
  setWhitelabelCurrentChallenges: React.Dispatch<
    React.SetStateAction<CurrentChallengesFormTypes>
  >;
  checkAllCurrentChallenges: boolean;
}

export interface ExpectationTypes {
  whitelabelExpectation: ExceptionFormTypes;
  setWhitelabelExpectation: React.Dispatch<
    React.SetStateAction<ExceptionFormTypes>
  >;
  checkAllExpectation: boolean;
}

export interface CurrentChallengesFormTypes {
  currentChallengesStatus: string;
  currentChallengesComments: string;
  currentChallengesActionPABS: string;
  currentChallengesActionClient: string;
  [key: string]: string | null;
}

export interface ExceptionFormTypes {
  exceptionStatus: string;
  exceptionComments: string;
  exceptionActionPABS: string;
  exceptionActionClient: string;
  [key: string]: string | null;
}

// 5
export interface MonthlyTypes {
  whitelabelMonthly: MonthlyFormTypes;
  setWhitelabelMonthly: React.Dispatch<React.SetStateAction<MonthlyFormTypes>>;
  whitelabelMonthlyErrors: whitleLabelWorkAssignmentErrorsType;
  checkAllMonthly: boolean;
}

export interface CleanupTypes {
  whitelabelCleanup: CleanupFormTypes;
  setWhitelabelCleanup: React.Dispatch<React.SetStateAction<CleanupFormTypes>>;
  whitelabelCleanupErrors: whitleLabelWorkAssignmentErrorsType;
  checkAllCleanup: boolean;
}

export interface CatchupTypes {
  whitelabelCatchup: CatchupFormTypes;
  setWhitelabelCatchup: React.Dispatch<React.SetStateAction<CatchupFormTypes>>;
  whitelabelCatchupErrors: whitleLabelWorkAssignmentErrorsType;
  checkAllCatchup: boolean;
}

export interface CombinationTypes {
  whitelabelCombination: CombinationFormTypes;
  setWhitelabelCombination: React.Dispatch<
    React.SetStateAction<CombinationFormTypes>
  >;
  whitelabelCombinationErrors: whitleLabelWorkAssignmentErrorsType;
  checkAllCombination: boolean;
}

export interface CombinationFormTypes {
  combinationStatus: string;
  combinationComments: string;
  combinationActionPABS: string;
  combinationActionClient: string;
  [key: string]: string | null;
}

export interface CleanupFormTypes {
  cleanupStatus: string;
  cleanupComments: string;
  cleanupActionPABS: string;
  cleanupActionClient: string;
  [key: string]: string | null;
}

export interface CatchupFormTypes {
  catchupStatus: string;
  catchupComments: string;
  catchupActionPABS: string;
  catchupActionClient: string;
  [key: string]: string | null;
}

export interface MonthlyFormTypes {
  monthlyStatus: string;
  monthlyComments: string;
  monthlyActionPABS: string;
  monthlyActionClient: string;
  [key: string]: string | null;
}

// 6
export interface ClientTypes {
  whitelabelClient: ClientFormTypes;
  setWhitelabelClient: React.Dispatch<React.SetStateAction<ClientFormTypes>>;
  checkAllClient: boolean;
}

export interface PabsTypes {
  whitelabelPABS: PabsFormTypes;
  setWhitelabelPABS: React.Dispatch<React.SetStateAction<PabsFormTypes>>;
  checkAllPABS: boolean;
}

export interface BdmTypes {
  whitelabelBDM: BdmFormTypes;
  setWhitelabelBDM: React.Dispatch<React.SetStateAction<BdmFormTypes>>;
  checkAllBDM: boolean;
}

export interface ClientFormTypes {
  clientStatus: string;
  clientComments: string;
  clientActionPABS: string;
  clientActionClient: string;
  [key: string]: string | null;
}

export interface PabsFormTypes {
  pabsStatus: string;
  pabsComments: string;
  pabsActionPABS: string;
  pabsActionClient: string;
  [key: string]: string | null;
}

export interface BdmFormTypes {
  bdmStatus: string;
  bdmComments: string;
  bdmActionPABS: string;
  bdmActionClient: string;
  [key: string]: string | null;
}

// 7
export interface TimeZoneTypes {
  whitelabelTimeZone: WhitelabelTimeZoneFormTypes;
  setWhitelabelTimeZone: React.Dispatch<
    React.SetStateAction<WhitelabelTimeZoneFormTypes>
  >;
  whitelabelTimeZoneErrors: whitelabelMeetingAvailabilityErrorsType;
  checkAllTimeZone:boolean;
}

export interface ConvenientDayTypes {
  whitelabelConvenientDay: WhitelabelConvenientDayFormTypes;
  setWhitelabelConvenientDay: React.Dispatch<
    React.SetStateAction<WhitelabelConvenientDayFormTypes>
  >;
  whitelabelConvenientDayErrors: whitelabelMeetingAvailabilityErrorsType;
  checkAllConvenientDay:boolean
}

export interface TimeSlotTypes {
  whitelabelTimeSlot: WhitelabelTimeSlotFormTypes;
  setWhitelabelTimeSlot: React.Dispatch<
    React.SetStateAction<WhitelabelTimeSlotFormTypes>
  >;
  whitelabelTimeSlotErrors: whitelabelMeetingAvailabilityErrorsType;
  checkAllTimeSlot:boolean;
}

export interface WhitelabelTimeZoneFormTypes {
  timeZoneStatus: string;
  timeZoneComments: string;
  timeZoneActionPABS: string;
  timeZoneActionClient: string;
  [key: string]: string | null;
}

export interface WhitelabelConvenientDayFormTypes {
  convenientDayStatus: string;
  convenientDayComments: string;
  convenientDayActionPABS: string;
  convenientDayActionClient: string;
  [key: string]: string | null;
}

export interface WhitelabelTimeSlotFormTypes {
  timeSlotStatus: string;
  timeSlotComments: string;
  timeSlotActionPABS: string;
  timeSlotActionClient: string;
  [key: string]: string | null;
}
