export const initialAutoCareAccountName = {
  accountName: "",
  businessType: "",
  service: "",
  corporateAddress: "",
  no_of_Locations: "",
  locationName: "",
  ownerContact: "",
  ownerEmail: "",
  ownerPhone: "",
};

export const initialAutoCareLegalStructure = {
  no_of_Entities: "",
  no_of_Shops: "",
  salesRep: "",
  agreementDate: null,
  probableAcquitionDate: null,
  dba: "",
};

export const initialAutoCareClientTeam = {
  shopManager: "",
  poc1: "",
  email: "",
  cpa: "",
  priorBookkeeper: "",
  itSupport: "",
  timeZone: "-1",
  state: "-1",
  weeklyCalls: "-1",
  weeklyCallTime: "-1",
  istTime: "",
};

export const initialAutoCarePabsAccountingTeam = {
  implementationManager: "",
  implementationAnalyst: "",
  operationsHead: "",
  operationsManager: "",
  operationsAccountHolder: "",
  pabsGroupEmail: "",
  pabsPhone: "",
};

export const validateFields = [
  "corporateAddress",
  "no_of_Locations",
  "locationName",
  "ownerContact",
  "ownerEmail",
  "ownerPhone",
  "no_of_Entities",
  "no_of_Shops",
  "shopManager",
  "poc1",
  "email",
];

export const validateAutoCarAccountName = [
  "corporateAddress",
  "no_of_Locations",
  "locationName",
  "ownerContact",
  "ownerEmail",
  "ownerPhone",
];

export const validateAutoCarLegalStructure = ["no_of_Entities", "no_of_Shops"];

export const validateAutoCarClientTeam = ["shopManager", "poc1", "email"];

export const TimeZoneList = [
  { value: '-1', label: "Please Select Time Zone" },
  { value: '1', label: "IST" },
  { value: '2', label: "PST" },
  { value: '3', label: "Atlantic" },
  { value: '4', label: "CST" },
  { value: '5', label: "EST" },
  { value: '6', label: "GMT" },
];

export const StateList = [
  { value: '-1', label: "Please Select State" },
];

export const WeeklyCallsList = [
  { value: '-1', label: "Please Select Weekly Calls" },
];

export const WeeklyCallTimeList = [
  { value: '-1', label: "Please Select Weekly Call Time" },
];
