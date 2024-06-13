// 1
export interface GroupEmailEstablishedFormTypes {
  groupEmailEstablishStatus: string;
  groupEmailEstablishComments: string;
  groupEmailEstablishActionName: string;
  groupEmailEstablishActionItems: string;
}

export interface PreKickOffFormTypes {
  preKickOffStatus: string;
  preKickOffComments: string;
  preKickOffActionName: string;
  preKickOffActionItems: string;
}

export interface KickOffFormTypes {
  kickOffStatus: string;
  kickOffComments: string;
  kickOffActionName: string;
  kickOffActionItems: string;
}

export interface GroupEmailEstablishedTypes {
  whitelabelGroupEmailEstablished: GroupEmailEstablishedFormTypes;
  setWhitelabelGroupEmailEstablished: React.Dispatch<
    React.SetStateAction<GroupEmailEstablishedFormTypes>
  >;
}

export interface PreKickOffTypes {
  whitelabelPreKickOff: PreKickOffFormTypes;
  setWhitelabelPreKickOff: React.Dispatch<
    React.SetStateAction<PreKickOffFormTypes>
  >;
}

export interface KickOffTypes {
  whitelabelKickOff: KickOffFormTypes;
  setWhitelabelKickOff: React.Dispatch<React.SetStateAction<KickOffFormTypes>>;
}

// 2
export interface ITStructureFormTypes {
  itStructureStatus: string;
  itStructureComments: string;
  itStructureActionName: string;
  itStructureActionItems: string;
}

export interface RemoteSetupFormTypes {
  remoteSetupStatus: string;
  remoteSetupComments: string;
  remoteSetupActionName: string;
  remoteSetupActionItems: string;
}

export interface ITHelpFormTypes {
  itHelpStatus: string;
  itHelpComments: string;
  itHelpActionName: string;
  itHelpActionItems: string;
}

export interface AccountingSoftwareFormTypes {
  accountingSoftwareStatus: string;
  accountingSoftwareComments: string;
  accountingSoftwareActionName: string;
  accountingSoftwareActionItems: string;
}

export interface CloudDocumentFormTypes {
  cloudDocumentStatus: string;
  cloudDocumentComments: string;
  cloudDocumentActionName: string;
  cloudDocumentActionItems: string;
}

export interface MessengerFormTypes {
  messengerStatus: string;
  messengerComments: string;
  messengerActionName: string;
  messengerActionItems: string;
}

export interface SystemAccessFormTypes {
  systemAccessStatus: string;
  systemAccessComments: string;
  systemAccessActionName: string;
  systemAccessActionItems: string;
}

export interface OtherInfoFormTypes {
  otherInfoStatus: string;
  otherInfoComments: string;
  otherInfoActionName: string;
  otherInfoActionItems: string;
}

export interface ITStructureTypes {
  whitelabelITStructure: ITStructureFormTypes;
  setWhitelabelITStructure: React.Dispatch<
    React.SetStateAction<ITStructureFormTypes>
  >;
}

export interface RemoteSetupTypes {
  whitelabelRemoteSetup: RemoteSetupFormTypes;
  setWhitelabelRemoteSetup: React.Dispatch<
    React.SetStateAction<RemoteSetupFormTypes>
  >;
}

export interface ITHelpTypes {
  whitelabelITHelp: ITHelpFormTypes;
  setWhitelabelITHelp: React.Dispatch<React.SetStateAction<ITHelpFormTypes>>;
}

export interface AccountingSoftwareTypes {
  whitelabelAccountingSoftware: AccountingSoftwareFormTypes;
  setWhitelabelAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareFormTypes>
  >;
}

export interface CloudDocumentTypes {
  whitelabelCloudDocument: CloudDocumentFormTypes;
  setWhitelabelCloudDocument: React.Dispatch<
    React.SetStateAction<CloudDocumentFormTypes>
  >;
}

export interface MessengerTypes {
  whitelabelMessenger: MessengerFormTypes;
  setWhitelabelMessenger: React.Dispatch<
    React.SetStateAction<MessengerFormTypes>
  >;
}

export interface SystemAccessTypes {
  whitelabelSystemAccess: SystemAccessFormTypes;
  setWhitelabelSystemAccess: React.Dispatch<
    React.SetStateAction<SystemAccessFormTypes>
  >;
}

export interface OtherInfoTypes {
  whitelabelOtherInfo: OtherInfoFormTypes;
  setWhitelabelOtherInfo: React.Dispatch<
    React.SetStateAction<OtherInfoFormTypes>
  >;
}

// 3
export interface FTEFormTypes {
  fteStatus: string;
  fteComments: string;
  fteActionName: string;
  fteActionItems: string;
}

export interface AccountingFormTypes {
  accountingStatus: string;
  accountingComments: string;
  accountingActionName: string;
  accountingActionItems: string;
}
export interface TaxFormTypes {
  taxStatus: string;
  taxComments: string;
  taxActionName: string;
  taxActionItems: string;
}

export interface WeeklyFormTypes {
  weeklyStatus: string;
  weeklyComments: string;
  weeklyActionName: string;
  weeklyActionItems: string;
}
export interface IndustryFormTypes {
  industryStatus: string;
  industryComments: string;
  industryActionName: string;
  industryActionItems: string;
}

export interface FTETypes {
  whitelabelFTE: FTEFormTypes;
  setWhitelabelFTE: React.Dispatch<React.SetStateAction<FTEFormTypes>>;
}

export interface AccountingTypes {
  whitelabelAccounting: AccountingFormTypes;
  setWhitelabelAccounting: React.Dispatch<
    React.SetStateAction<AccountingFormTypes>
  >;
}

export interface TaxTypes {
  whitelabelTax: TaxFormTypes;
  setWhitelabelTax: React.Dispatch<React.SetStateAction<TaxFormTypes>>;
}

export interface WeeklyTypes {
  whitelabelWeekly: WeeklyFormTypes;
  setWhitelabelWeekly: React.Dispatch<React.SetStateAction<WeeklyFormTypes>>;
}

export interface IndustryTypes {
  whitelabelIndustry: IndustryFormTypes;
  setWhitelabelIndustry: React.Dispatch<
    React.SetStateAction<IndustryFormTypes>
  >;
}

// 4
export interface CurrentChallengesFormTypes {
  currentChallengesStatus: string;
  currentChallengesComments: string;
  currentChallengesActionName: string;
  currentChallengesActionItems: string;
}

export interface ExpectationFormTypes {
  expectationStatus: string;
  expectationComments: string;
  expectationActionName: string;
  expectationActionItems: string;
}

export interface CurrentChallengesTypes {
  whitelabelCurrentChallenges: CurrentChallengesFormTypes;
  setWhitelabelCurrentChallenges: React.Dispatch<
    React.SetStateAction<CurrentChallengesFormTypes>
  >;
}

export interface ExpectationTypes {
  whitelabelExpectation: ExpectationFormTypes;
  setWhitelabelExpectation: React.Dispatch<
    React.SetStateAction<ExpectationFormTypes>
  >;
}

// 5
export interface MonthlyFormTypes {
  monthlyStatus: string;
  monthlyComments: string;
  monthlyActionName: string;
  monthlyActionItems: string;
}

export interface CleanupFormTypes {
  cleanupStatus: string;
  cleanupComments: string;
  cleanupActionName: string;
  cleanupActionItems: string;
}

export interface CatchupFormTypes {
  catchupStatus: string;
  catchupComments: string;
  catchupActionName: string;
  catchupActionItems: string;
}

export interface CombinationFormTypes {
  combinationStatus: string;
  combinationComments: string;
  combinationActionName: string;
  combinationActionItems: string;
}

export interface MonthlyTypes {
  whitelabelMonthly: MonthlyFormTypes;
  setWhitelabelMonthly: React.Dispatch<React.SetStateAction<MonthlyFormTypes>>;
}

export interface CleanupTypes {
  whitelabelCleanup: CleanupFormTypes;
  setWhitelabelCleanup: React.Dispatch<React.SetStateAction<CleanupFormTypes>>;
}

export interface CatchupTypes {
  whitelabelCatchup: CatchupFormTypes;
  setWhitelabelCatchup: React.Dispatch<React.SetStateAction<CatchupFormTypes>>;
}

export interface CombinationTypes {
  whitelabelCombination: CombinationFormTypes;
  setWhitelabelCombination: React.Dispatch<
    React.SetStateAction<CombinationFormTypes>
  >;
}

// 6
export interface ClientFormTypes {
  clientStatus: string;
  clientComments: string;
  clientActionName: string;
  clientActionItems: string;
}

export interface PabsFormTypes {
  pabsStatus: string;
  pabsComments: string;
  pabsActionName: string;
  pabsActionItems: string;
}

export interface BdmFormTypes {
  bdmStatus: string;
  bdmComments: string;
  bdmActionName: string;
  bdmActionItems: string;
}

export interface ClientTypes {
  whitelabelClient: ClientFormTypes;
  setWhitelabelClient: React.Dispatch<React.SetStateAction<ClientFormTypes>>;
}

export interface PabsTypes {
  whitelabelPABS: PabsFormTypes;
  setWhitelabelPABS: React.Dispatch<React.SetStateAction<PabsFormTypes>>;
}

export interface BdmTypes {
  whitelabelBDM: BdmFormTypes;
  setWhitelabelBDM: React.Dispatch<React.SetStateAction<BdmFormTypes>>;
}

// 7
export interface TimeZoneFormTypes {
  timeZoneStatus: string;
  timeZoneComments: string;
  timeZoneActionName: string;
  timeZoneActionItems: string;
}

export interface ConvenientDayFormTypes {
  convenientDayStatus: string;
  convenientDayComments: string;
  convenientDayActionName: string;
  convenientDayActionItems: string;
}

export interface TimeSlotFormTypes {
  timeSlotStatus: string;
  timeSlotComments: string;
  timeSlotActionName: string;
  timeSlotActionItems: string;
}

export interface TimeZoneTypes {
  whitelabelTimeZone: TimeZoneFormTypes;
  setWhitelabelTimeZone: React.Dispatch<
    React.SetStateAction<TimeZoneFormTypes>
  >;
}

export interface ConvenientDayTypes {
  whitelabelConvenientDay: ConvenientDayFormTypes;
  setWhitelabelConvenientDay: React.Dispatch<
    React.SetStateAction<ConvenientDayFormTypes>
  >;
}

export interface TimeSlotTypes {
  whitelabelTimeSlot: TimeSlotFormTypes;
  setWhitelabelTimeSlot: React.Dispatch<
    React.SetStateAction<TimeSlotFormTypes>
  >;
}
