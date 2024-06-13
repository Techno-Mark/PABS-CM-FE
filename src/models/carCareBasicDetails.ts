import { Dayjs } from "dayjs";
import { ReactNode } from "react";

export interface FormBoxProps {
  title: string;
  checked: boolean;
  children: ReactNode;
  className?: string;
}
export interface LegalStructureFormTypes {
  no_of_Entities: string;
  no_of_Shops: string;
  salesRep: string;
  agreementDate: Dayjs | null | string;
  probableAcquitionDate: Dayjs | null | string;
  dba: string;
  [key: string]: string | Dayjs | null;
}

export interface LegalStructureFormErrors extends Partial<LegalStructureFormTypes> {}

export interface AccountDetailsFormTypes {
  businessType: string;
  service: string;
  corporateAddress: string;
  noOfLocations: string;
  nameOfLocations: string;
  ownerContact: string;
  ownerEmail: string;
  ownerPhone: string;
  [key: string]: string | null;
}

export interface AccountDetailsFormErrors extends Partial<AccountDetailsFormTypes> {}

export interface ClientTeamFormTypes {
  shopManager: string;
  poc1: string;
  email: string;
  cpa: string;
  priorBookkeeper: string;
  itSupport: string;
  timeZone: string;
  state: string;
  weeklyCalls: string;
  weeklyCallTime: Dayjs | null | string;
  istTime: Dayjs | null | string;
  [key: string]: string | Dayjs | null;
}

export interface ClientTeamFormErrors extends Partial<ClientTeamFormTypes> {}

export interface PabsAccountingTeamFormTypes {
  implementationManager: string;
  implementationAnalyst: string;
  operationsHead: string;
  operationsManager: string;
  operationsAccountHolder: string;
  pabsGroupEmail: string;
  pabsPhone: string;
  [key: string]: string | Date | null;
}

export interface PabsAccountingTeamFormErrors extends Partial<PabsAccountingTeamFormTypes> {}
export interface AccountDetailsTypes {
  className?:string,
  autoCareAccountDetails:AccountDetailsFormTypes,
  setAutoCareAccountDetails:React.Dispatch<React.SetStateAction<AccountDetailsFormTypes>>,
  autoCareAccountDetailsErrors:AccountDetailsFormErrors,
  setAutoCareAccountDetailsErrors:React.Dispatch<React.SetStateAction<AccountDetailsFormErrors>>,
}

export interface LegalStructureTypes {
  className?:string,
  autoCareLegalStructure:LegalStructureFormTypes,
  setAutoCareLegalStructure:React.Dispatch<React.SetStateAction<LegalStructureFormTypes>>,
  autoCareLegalStructureErrors:LegalStructureFormErrors,
  setAutoCareLegalStructureErrors:React.Dispatch<React.SetStateAction<LegalStructureFormErrors>>,
}

export interface ClientTeamTypes {
  className?:string,
  autoCareClientTeam:ClientTeamFormTypes,
  setAutoCareClientTeam:React.Dispatch<React.SetStateAction<ClientTeamFormTypes>>,
  autoCareClientTeamErrors:ClientTeamFormErrors,
  setAutoCareClientTeamErrors:React.Dispatch<React.SetStateAction<ClientTeamFormErrors>>,
}

export interface PabsAccountingTeamTypes {
  className?:string,
  autoCarePabsAccountingTeam:PabsAccountingTeamFormTypes,
  setAutoCarePabsAccountingTeam:React.Dispatch<React.SetStateAction<PabsAccountingTeamFormTypes>>,
}

export interface BasicDetailAutoCareType {
  setBasicDetailCount:(value:number) => void,
  setBasicDetailsFormSubmit:(value:number) => void,
}

export interface ChecklistAutoCareType {
  setChecklistCount:(value:number) => void,
  setChecklistFormSubmit:(value:number) => void,
}