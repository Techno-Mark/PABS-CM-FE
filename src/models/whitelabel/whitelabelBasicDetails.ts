import { ClientInfoType } from "@/models/autoCareBasicDetails";
import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";

export interface BasicDetailWhitelabelType {
  setWhitelabelBasicDetailCount: (value: number) => void;
  setWhitelabelBasicDetailsFormSubmit: (value: number) => void;
  clientInfo?: ClientInfoType;
  setCheckAllWhiteLabelFields:(value:boolean) => void
  whiteLabelProgressPercentage:number
}

export interface ChecklistWhitelabelType {
  setChecklistCount: (value: number) => void;
  setChecklistFormSubmit: (value: number) => void;
  clientInfo?: ClientInfoType;
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
  whitelabelAccountDetailsCheckStatus: boolean;
  handleAccountDetailsSwitch: (value: ChangeEvent<HTMLInputElement>) => void;
  whitelabelAccountDetails: WhitelabelAccountDetailsFormTypes;
  setWhitelabelAccountDetails: React.Dispatch<
    React.SetStateAction<WhitelabelAccountDetailsFormTypes>
  >;
  whitelabelAccountDetailsErrors: WhitelabelAccountDetailsFormErrors;
  setWhitelabelAccountDetailsErrors: React.Dispatch<
    React.SetStateAction<WhitelabelAccountDetailsFormErrors>
  >;
  checkAllFieldsWhiteLabelAccountDetailsForm:boolean
}

export interface WhitelabelOtherInformationTypes {
  noOfAccounts: number;
  bdm: string;
  startDate: Dayjs | null | string;
  [key: string]: Dayjs | string | number | null;
}

export interface WhitelabelOtherInformationErrors
  extends Partial<WhitelabelOtherInformationTypes> {}

export interface WhitelabelOtherInfoTypes {
  className?: string;
  whitelabelOtherInformationCheckStatus: boolean;
  handleWhitelabelOtherInformationSwitch: (
    value: ChangeEvent<HTMLInputElement>
  ) => void;
  whitelabelOtherInformation: WhitelabelOtherInformationTypes;
  setWhitelabelOtherInformation: React.Dispatch<
    React.SetStateAction<WhitelabelOtherInformationTypes>
  >;
  whitelabelOtherInformationErrors: WhitelabelOtherInformationErrors;
  setWhitelabelOtherInformationErrors: React.Dispatch<
    React.SetStateAction<WhitelabelOtherInformationErrors>
  >;
  checkAllFieldsWhitelabelOtherInformationForm:boolean
}

export interface WhitelabelCpaClientTeamTypes {
  pocDetails: string;
  pocName: string;
  pocEmailId: string;
  pocContactNo: string;
  [key: string]: string | number | null;
}

export interface WhitelabelCpaClientTeamErrors
  extends Partial<WhitelabelCpaClientTeamTypes> {}

export interface WhitelabelCpaClientTypes {
  className?: string;
  whitelabelCpaClientTeam: any;
  whitelabelCpaClientTeamCheckStatus: boolean;
  handleWhitelabelCpaClientTeamSwitch: (
    value: ChangeEvent<HTMLInputElement>
  ) => void;
  whitelabelCpaClientTeamErrors: any;
  handlePocDetailsChange: any;
  handleChange: any;
  handleAddField: any;
  handleRemoveField: any;
  checkAllFieldsWhitelabelCpaClientTeamForm:boolean
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
  whitelabelPABSAccountingTeamCheckStatus: boolean;
  handleWhitelabelPABSAccountingTeamSwitch: (
    value: ChangeEvent<HTMLInputElement>
  ) => void;
  setWhitelabelPABSAccountingTeam: React.Dispatch<
    React.SetStateAction<WhitelabelPABSAccountingTeamTypes>
  >;
  whitelabelPABSAccountingTeamErrors: WhitelabelPABSAccountingTeamErrors;
  setWhitelabelPABSAccountingTeamErrors: React.Dispatch<
    React.SetStateAction<WhitelabelPABSAccountingTeamErrors>
  >;
  checkAllFieldsWhitelabelPabsAccountingTeamForm:boolean
}
