export interface WhitelabelFormTypes {
  Status: string;
  Comments: string;
  ActionPABS: string;
  ActionClient: string;
}

export interface WhiteLabelCommunicationTypes {
  className?: string,
  whitelabelGroupEmailEstablished: GroupEmailWhiteLabelFormTypes;
  setWhitelabelGroupEmailEstablished: React.Dispatch<React.SetStateAction<GroupEmailWhiteLabelFormTypes>>;
  whitelabelKickOff: KickOffWhiteLabelFormTypes;
  setWhitelabelKickOff: React.Dispatch<React.SetStateAction<KickOffWhiteLabelFormTypes>>;
  whitelabelTeamOverCall: TeamOverCallWhiteLabelFormTypes;
  setWhitelabelTeamOverCall: React.Dispatch<React.SetStateAction<TeamOverCallWhiteLabelFormTypes>>;
}

export interface WhiteLabelSystemSoftwareSetupFormType {
  className?: string;
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
  extends Partial<AccountingSoftwareWhiteLabelFormTypes &
    CloudDocumentWhiteLabelFormTypes &
    MessengerWhiteLabelFormTypes &
    SystemAccessWhiteLabelFormTypes> { }

export interface whiteLabelServiceType {
  className?: string;
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
  setWhitelabelWeekly: React.Dispatch<
    React.SetStateAction<WeeklyFormTypes>
  >;
whitelabelIndustry: IndustryFormTypes;
  setWhitelabelIndustry: React.Dispatch<
    React.SetStateAction<IndustryFormTypes>
  >;
}

export interface WhitelabelServiceErrorsTypes
  extends Partial<FTEFormTypes &
  AccountingFormTypes &
  TaxFormTypes> { }

export interface whitelabelChallengesFormType {
  className?: string;
  whitelabelCurrentChallenges: CurrentChallengesFormTypes;
  setWhitelabelCurrentChallenges: React.Dispatch<React.SetStateAction<CurrentChallengesFormTypes>>;
  whitelabelExpectation: ExceptionFormTypes;
  setWhitelabelExpectation: React.Dispatch<React.SetStateAction<ExceptionFormTypes>>;
}

export interface whitelabelWorkAssignmentType {
  className?: string;
  whitelabelMonthly: WhitelabelFormTypes;
  setWhitelabelMonthly: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
  whitelabelCleanup: WhitelabelFormTypes;
  setWhitelabelCleanup: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
  whitelabelCatchup: WhitelabelFormTypes;
  setWhitelabelCatchup: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
  whitelabelCombination: WhitelabelFormTypes;
  setWhitelabelCombination: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface whitelabelEscalationmatrixFormType {
  className?: string,
  whitelabelClient: WhitelabelFormTypes;
  setWhitelabelClient: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
  whitelabelPABS: WhitelabelFormTypes;
  setWhitelabelPABS: React.Dispatch<React.SetStateAction<WhitelabelFormTypes>>;
  whitelabelBDM: WhitelabelFormTypes;
  setWhitelabelBDM: React.Dispatch<React.SetStateAction<WhitelabelFormTypes>>;
}

export interface whitelabelMeetingAvailabilityType {
  className?: string;
  whitelabelTimeZone: WhitelabelFormTypes;
  setWhitelabelTimeZone: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
  whitelabelConvenientDay: WhitelabelFormTypes;
  setWhitelabelConvenientDay: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
  whitelabelTimeSlot: WhitelabelFormTypes;
  setWhitelabelTimeSlot: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

// 1
export interface GroupEmailEstablishedTypes {
  whitelabelGroupEmailEstablished: GroupEmailWhiteLabelFormTypes;
  setWhitelabelGroupEmailEstablished: React.Dispatch<React.SetStateAction<GroupEmailWhiteLabelFormTypes>>;
}

export interface whitelabelTeamOverCallTypes {
  whitelabelTeamOverCall: TeamOverCallWhiteLabelFormTypes;
  setWhitelabelTeamOverCall: React.Dispatch<React.SetStateAction<TeamOverCallWhiteLabelFormTypes>>;
}

export interface KickOffTypes {
  whitelabelKickOff: KickOffWhiteLabelFormTypes;
  setWhitelabelKickOff: React.Dispatch<React.SetStateAction<KickOffWhiteLabelFormTypes>>;
}

export interface GroupEmailWhiteLabelFormTypes {
  groupEmailWhiteLabelStatus: string;
  groupEmailWhiteLabelComments: string;
  groupEmailWhiteLabelActionPABS: string;
  groupEmailWhiteLabelActionClient: string;
}

export interface TeamOverCallWhiteLabelFormTypes {
  teamOverCallWhiteLabelStatus: string;
  teamOverCallWhiteLabelComments: string;
  teamOverCallWhiteLabelActionPABS: string;
  teamOverCallWhiteLabelActionClient: string;
}

export interface KickOffWhiteLabelFormTypes {
  kickOffWhiteLabelStatus: string;
  kickOffWhiteLabelComments: string;
  kickOffWhiteLabelActionPABS: string;
  kickOffWhiteLabelActionClient: string;
}

// 2
export interface ITStructureTypes {
  whitelabelITStructure: ItStructureWhiteLabelFormTypes;
  setWhitelabelITStructure: React.Dispatch<
    React.SetStateAction<ItStructureWhiteLabelFormTypes>
  >;
}

export interface RemoteSetupTypes {
  whitelabelRemoteSetup: RemoteSetupWhiteLabelFormTypes;
  setWhitelabelRemoteSetup: React.Dispatch<
    React.SetStateAction<RemoteSetupWhiteLabelFormTypes>
  >;
}

export interface ITHelpTypes {
  whitelabelITHelp: ItHelpWhiteLabelFormTypes;
  setWhitelabelITHelp: React.Dispatch<
    React.SetStateAction<ItHelpWhiteLabelFormTypes>
  >;
}

export interface AccountingSoftwareTypes {
  whitelabelAccountingSoftware: AccountingSoftwareWhiteLabelFormTypes;
  setWhitelabelAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareWhiteLabelFormTypes>
  >;
  whitelabelAccountingSoftwareErrors: whitelabelSystemSoftwareErrorsType;
}

export interface CloudDocumentTypes {
  whitelabelCloudDocument: CloudDocumentWhiteLabelFormTypes;
  setWhitelabelCloudDocument: React.Dispatch<
    React.SetStateAction<CloudDocumentWhiteLabelFormTypes>
  >;
  whitelabelCloudDocumentErrors: whitelabelSystemSoftwareErrorsType;
}

export interface MessengerTypes {
  whitelabelMessenger: MessengerWhiteLabelFormTypes;
  setWhitelabelMessenger: React.Dispatch<
    React.SetStateAction<MessengerWhiteLabelFormTypes>
  >;
  whitelabelMessengerErrors: whitelabelSystemSoftwareErrorsType;
}

export interface SystemAccessTypes {
  whitelabelSystemAccess: SystemAccessWhiteLabelFormTypes;
  setWhitelabelSystemAccess: React.Dispatch<
    React.SetStateAction<SystemAccessWhiteLabelFormTypes>
  >;
  whitelabelSystemAccessErrors: whitelabelSystemSoftwareErrorsType
}

export interface OtherInfoTypes {
  whitelabelOtherInfo: OtherInfoWhiteLabelFormTypes;
  setWhitelabelOtherInfo: React.Dispatch<
    React.SetStateAction<OtherInfoWhiteLabelFormTypes>
  >;
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
}

export interface CloudDocumentWhiteLabelFormTypes {
  cloudDocumentWhiteLabelStatus: string;
  cloudDocumentWhiteLabelComments: string;
  cloudDocumentWhiteLabelActionPABS: string;
  cloudDocumentWhiteLabelActionClient: string;
}

export interface MessengerWhiteLabelFormTypes {
  messengerWhiteLabelStatus: string;
  messengerWhiteLabelComments: string;
  messengerWhiteLabelActionPABS: string;
  messengerWhiteLabelActionClient: string;
}

export interface SystemAccessWhiteLabelFormTypes {
  systemAccessWhiteLabelStatus: string;
  systemAccessWhiteLabelComments: string;
  systemAccessWhiteLabelActionPABS: string;
  systemAccessWhiteLabelActionClient: string;
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
  whitelabelFTEErrors: WhitelabelServiceErrorsTypes
}

export interface AccountingTypes {
  whitelabelAccounting: AccountingFormTypes;
  setWhitelabelAccounting: React.Dispatch<
    React.SetStateAction<AccountingFormTypes>
  >;
  whitelabelAccountingErrors: WhitelabelServiceErrorsTypes
}

export interface TaxTypes {
  whitelabelTax: TaxFormTypes;
  setWhitelabelTax: React.Dispatch<React.SetStateAction<TaxFormTypes>>;
  whitelabelTaxErrors: WhitelabelServiceErrorsTypes
}

export interface WeeklyTypes {
  whitelabelWeekly: WeeklyFormTypes;
  setWhitelabelWeekly: React.Dispatch<
    React.SetStateAction<WeeklyFormTypes>
  >;
}

export interface IndustryTypes {
  whitelabelIndustry: IndustryFormTypes;
  setWhitelabelIndustry: React.Dispatch<
    React.SetStateAction<IndustryFormTypes>
  >;
}

export interface FTEFormTypes {
  FTEStatus: string;
  FTEComments: string;
  FTEActionPABS: string;
  FTEActionClient: string;
}

export interface AccountingFormTypes {
  accountingStatus: string;
  accountingComments: string;
  accountingActionPABS: string;
  accountingActionClient: string;
}

export interface TaxFormTypes {
  taxStatus: string;
  taxComments: string;
  taxActionPABS: string;
  taxActionClient: string;
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
}

export interface ExpectationTypes {
  whitelabelExpectation: ExceptionFormTypes;
  setWhitelabelExpectation: React.Dispatch<
    React.SetStateAction<ExceptionFormTypes>
  >;
}

export interface CurrentChallengesFormTypes {
  currentChallengesStatus: string;
  currentChallengesComments: string;
  currentChallengesActionPABS: string;
  currentChallengesActionClient: string;
}

export interface ExceptionFormTypes {
  exceptionStatus: string;
  exceptionComments: string;
  exceptionActionPABS: string;
  exceptionActionClient: string;
}

// 5
export interface MonthlyTypes {
  whitelabelMonthly: WhitelabelFormTypes;
  setWhitelabelMonthly: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface CleanupTypes {
  whitelabelCleanup: WhitelabelFormTypes;
  setWhitelabelCleanup: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface CatchupTypes {
  whitelabelCatchup: WhitelabelFormTypes;
  setWhitelabelCatchup: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface CombinationTypes {
  whitelabelCombination: WhitelabelFormTypes;
  setWhitelabelCombination: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

// 6
export interface ClientTypes {
  whitelabelClient: WhitelabelFormTypes;
  setWhitelabelClient: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface PabsTypes {
  whitelabelPABS: WhitelabelFormTypes;
  setWhitelabelPABS: React.Dispatch<React.SetStateAction<WhitelabelFormTypes>>;
}

export interface BdmTypes {
  whitelabelBDM: WhitelabelFormTypes;
  setWhitelabelBDM: React.Dispatch<React.SetStateAction<WhitelabelFormTypes>>;
}

// 7
export interface TimeZoneTypes {
  whitelabelTimeZone: WhitelabelFormTypes;
  setWhitelabelTimeZone: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface ConvenientDayTypes {
  whitelabelConvenientDay: WhitelabelFormTypes;
  setWhitelabelConvenientDay: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}

export interface TimeSlotTypes {
  whitelabelTimeSlot: WhitelabelFormTypes;
  setWhitelabelTimeSlot: React.Dispatch<
    React.SetStateAction<WhitelabelFormTypes>
  >;
}
