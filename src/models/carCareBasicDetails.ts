import { Dayjs } from "dayjs";

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

export interface AccountNameFormTypes {
  businessType: string;
  service: string;
  corporateAddress: string;
  no_of_Locations: string;
  locationName: string;
  ownerContact: string;
  ownerEmail: string;
  ownerPhone: string;
  [key: string]: string | null;
}

export interface AccountNameFormErrors extends Partial<AccountNameFormTypes> {}

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
  weeklyCallTime: string;
  istTime: string;
  [key: string]: string | Date | null;
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
export interface AccountNameTypes {
  className?:string,
  autoCareAccountName:AccountNameFormTypes,
  setAutoCareAccountName:React.Dispatch<React.SetStateAction<AccountNameFormTypes>>,
  autoCareAccountNameErrors:AccountNameFormErrors,
}

export interface LegalStructureTypes {
  className?:string,
  autoCareLegalStructure:LegalStructureFormTypes,
  setAutoCareLegalStructure:React.Dispatch<React.SetStateAction<LegalStructureFormTypes>>,
  autoCareLegalStructureErrors:LegalStructureFormErrors,
}

export interface ClientTeamTypes {
  className?:string,
  autoCareClientTeam:ClientTeamFormTypes,
  setAutoCareClientTeam:React.Dispatch<React.SetStateAction<ClientTeamFormTypes>>,
  autoCareClientTeamErrors:ClientTeamFormErrors,
}

export interface PabsAccountingTeamTypes {
  className?:string,
  autoCarePabsAccountingTeam:PabsAccountingTeamFormTypes,
  setAutoCarePabsAccountingTeam:React.Dispatch<React.SetStateAction<PabsAccountingTeamFormTypes>>,
}