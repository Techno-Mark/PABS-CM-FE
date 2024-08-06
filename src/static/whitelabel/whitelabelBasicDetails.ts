export const initialWhitelabelAccountName = {
  cpaName: "",
  corporateAddress: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  ownerContact: "",
  ownerEmail: "",
  ownerPhone: "",
};

export const validateWhitelabelAccountDetails = [
  "cpaName",
  "corporateAddress",
  "country",
  "state",
  "city",
  "zip",
  "ownerContact",
  "ownerEmail",
];

export const whiteLabelAccountDetailsfieldDisplayNames: {
  [key: string]: string;
} = {
  cpaName: "CPA Name",
  corporateAddress: "Corporate Address",
  country: "Country",
  state: "State",
  city: "City",
  zip: "Zip",
  ownerContact: "Owner Contact",
  ownerEmail: "Owner Email",
  ownerPhone: "Owner Phone",
};

export const initialWhitelabelOtherInformation = {
  noOfAccounts: 0,
  bdm: "",
  startDate: "",
};

export const validateWhitelabelOtherInformation = ["startDate"];

export const initialWhitelabelCpaClientTeam = {
  pocName: "",
  pocEmailId: "",
  pocContactNo: "",
};

export const initialWhitelabelPABSAccountingTeam = {
  implementation: "",
  operationsHead: "",
  teamManager: "",
  teamLeader: "",
  seniorAccountant: "",
  pabsGroupEmail: "",
  pabsPhone: "",
};
