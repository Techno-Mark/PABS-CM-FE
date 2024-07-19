export const initialAutoCareAccountName = {
  accountName: "",
  businessType: "",
  service: "",
  corporateAddress: "",
  noOfLocations: "",
  nameOfLocations: "",
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
  country: "-1",
  state: "",
  weeklyCalls: [],
  weeklyCallTime: null,
  istTime: null,
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

export const validatePerCountFields = [
  "accountName",
  "corporateAddress",
  "noOfLocations",
  "nameOfLocations",
  "ownerContact",
  "ownerEmail",
  "ownerPhone",
  "no_of_Entities",
  "no_of_Shops",
  "shopManager",
  "poc1",
  "email",
  "weeklyCalls",
  "weeklyCallTime",
  "istTime",
  "implementationMa",
  "implementationAnalyst",
  "operationsHead",
  "operationsManager",
  "operationsAccountHolder",
  "pabsGroupEmail",
  "pabsPhone",
];

export const validateAutoCarAccountDetails = [
  "accountName",
  "corporateAddress",
  "noOfLocations",
  "nameOfLocations",
  "ownerContact",
  "ownerEmail",
  "ownerPhone",
];

export const fieldDisplayNamesAccountDetails: { [key: string]: string } = {
  accountName: "Account Name",
  corporateAddress: "Corporate Address",
  noOfLocations: "Number of Locations",
  nameOfLocations: "Locations Name",
  ownerContact: "Owner Contact",
  ownerEmail: "Owner Email",
  ownerPhone: "Owner Phone",
};

export const fieldDisplayNamesLegalStructure: { [key: string]: string } = {
  no_of_Entities: "Number of Entities",
  no_of_Shops: "Number of Shops",
};

export const fieldDisplayNamesClientTeam: { [key: string]: string } = {
  istTime: "IST Time",
  shopManager: "Shop Manager",
  poc1: "Poc1",
  email: "Email",
  weeklyCalls: "Weekly Calls",
  weeklyCallTime: "Weekly Call Time",
};

export const validateAutoCarLegalStructure = ["no_of_Entities", "no_of_Shops"];

export const validateAutoCarClientTeam = [
  "shopManager",
  "poc1",
  "email",
  "weeklyCalls",
  "weeklyCallTime",
  "istTime",
];

export const TimeZoneList = [
  { value: "-1", label: "Please Select Time Zone" },
  { value: "1", label: "IST" },
  { value: "2", label: "PST" },
  { value: "3", label: "Atlantic" },
  { value: "4", label: "CST" },
  { value: "5", label: "EST" },
  { value: "6", label: "GMT" },
];

export const CountryList = [
  { value: "-1", label: "Please Select Country" },
  { value: "1", label: "India" },
  { value: "2", label: "Australia" },
  { value: "3", label: "America" },
];

export const StateList = [
  { value: "-1", label: "Please Select State" },
  { value: "1", label: "California" },
  { value: "2", label: "Texas" },
  { value: "3", label: "New York" },
  { value: "4", label: "Florida" },
  { value: "5", label: "Illinois" },
];

export const CityList = [
  { value: "-1", label: "Please Select City" },
  { value: "1", label: "Rajkot" },
  { value: "2", label: "Surat" },
  { value: "3", label: "Ahmdabad" },
];

export const WeeklyCallsList = [
  { value: "1", label: "Monday" },
  { value: "2", label: "Tuesday" },
  { value: "3", label: "Wednesday" },
  { value: "4", label: "Thursday" },
  { value: "5", label: "Friday" },
];

export const WeeklyCallTimeList = [
  { value: "-1", label: "Please Select Weekly Call Time" },
];
