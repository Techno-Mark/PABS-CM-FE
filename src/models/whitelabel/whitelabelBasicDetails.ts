export interface BasicDetailWhitelabelType {
  setBasicDetailCount: (value: number) => void;
  setBasicDetailsFormSubmit: (value: number) => void;
  getFormDetials: () => void;
}

export interface ChecklistWhitelabelType {
  setChecklistCount: (value: number) => void;
  setChecklistFormSubmit: (value: number) => void;
  formDetails: any;
  getFormDetials: () => void;
}

export interface WhitelabelAccountDetailsFormTypes {
  cpaName: string;
  corporateAddress: string;
  city: string;
  state: string;
  zip: string;
  ownerContact: string;
  ownerEmail: string;
  ownerPhone: string;
  [key: string]: string | null;
}

export interface WhitelabelAccountDetailsFormErrors
  extends Partial<WhitelabelAccountDetailsFormTypes> {}

export interface WhitelabelAccountDetailsTypes {
  className?: string;
  whitelabelAccountDetails: WhitelabelAccountDetailsFormTypes;
  setWhitelabelAccountDetails: React.Dispatch<
    React.SetStateAction<WhitelabelAccountDetailsFormTypes>
  >;
  whitelabelAccountDetailsErrors: WhitelabelAccountDetailsFormErrors;
  setWhitelabelAccountDetailsErrors: React.Dispatch<
    React.SetStateAction<WhitelabelAccountDetailsFormErrors>
  >;
}

export interface WhitelabelOtherInformationTypes {
  noOfAccounts: number;
  bdm: string;
  startDate: string;
  pandaDocStatus: string;
  [key: string]: string | number | null;
}

export interface WhitelabelOtherInformationErrors
  extends Partial<WhitelabelOtherInformationTypes> {}

export interface WhitelabelOtherInfoTypes {
  className?: string;
  whitelabelOtherInformation: WhitelabelOtherInformationTypes;
  setWhitelabelOtherInformation: React.Dispatch<
    React.SetStateAction<WhitelabelOtherInformationTypes>
  >;
  whitelabelOtherInformationErrors: WhitelabelOtherInformationErrors;
  setWhitelabelOtherInformationErrors: React.Dispatch<
    React.SetStateAction<WhitelabelOtherInformationErrors>
  >;
}

export interface WhitelabelCpaClientTeamTypes {
  pocDetails: string;
  pocName: string;
  pocEmailId: string;
  pocContactNo: string;
  [key: string]: string | number | null;
}

export interface WhitelabelCpaClientTeamErrors extends Partial<any> {}

export interface WhitelabelCpaClientTypes {
  className?: string;
  whitelabelCpaClientTeam: any;
  whitelabelCpaClientTeamErrors: WhitelabelCpaClientTeamErrors;
  handlePocDetailsChange: any;
  handleChange: any;
  handleAddField: any;
  handleRemoveField: any;
}

export interface WhitelabelPABSAccountingTeamTypes {
  implementation: string;
  operationsHead: string;
  teamManager: string;
  teamLeader: string;
  seniorAccountant: string;
  pabsGroupEmail: string;
  pabsPhone: string;
  [key: string]: string | number | null;
}

export interface WhitelabelPABSAccountingTeamErrors
  extends Partial<WhitelabelPABSAccountingTeamTypes> {}

export interface WhitelabelPABSAccountingTypes {
  className?: string;
  whitelabelPABSAccountingTeam: WhitelabelPABSAccountingTeamTypes;
  setWhitelabelPABSAccountingTeam: React.Dispatch<
    React.SetStateAction<WhitelabelPABSAccountingTeamTypes>
  >;
  whitelabelPABSAccountingTeamErrors: WhitelabelPABSAccountingTeamErrors;
  setWhitelabelPABSAccountingTeamErrors: React.Dispatch<
    React.SetStateAction<WhitelabelPABSAccountingTeamErrors>
  >;
}
