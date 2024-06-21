import { Dayjs } from "dayjs";
import { ReactNode } from "react";

export interface FormBoxProps {
  checkStatus?: boolean;
  handleChange?: any;
  title: string;
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

export interface LegalStructureFormErrors
  extends Partial<LegalStructureFormTypes> {}

export interface AccountDetailsFormTypes {
  accountName: string;
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

export interface AccountDetailsFormErrors
  extends Partial<AccountDetailsFormTypes> {}

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

export interface PabsAccountingTeamFormErrors
  extends Partial<PabsAccountingTeamFormTypes> {}
export interface AccountDetailsTypes {
  className?: string;
  accountDetailsCheckStatus: boolean;
  handleAccountDetailsSwitch: any;
  autoCareAccountDetails: AccountDetailsFormTypes;
  setAutoCareAccountDetails: React.Dispatch<
    React.SetStateAction<AccountDetailsFormTypes>
  >;
  autoCareAccountDetailsErrors: AccountDetailsFormErrors;
  setAutoCareAccountDetailsErrors: React.Dispatch<
    React.SetStateAction<AccountDetailsFormErrors>
  >;
  finalCheckAllFieldsAccountDetails:boolean
}

export interface LegalStructureTypes {
  className?: string;
  legalStructureCheckStatus: boolean;
  handleLegalStructureSwitch: any;
  autoCareLegalStructure: LegalStructureFormTypes;
  setAutoCareLegalStructure: React.Dispatch<
    React.SetStateAction<LegalStructureFormTypes>
  >;
  autoCareLegalStructureErrors: LegalStructureFormErrors;
  setAutoCareLegalStructureErrors: React.Dispatch<
    React.SetStateAction<LegalStructureFormErrors>
  >;
  finalCheckAllFieldsLegalStructure:boolean
}

export interface ClientTeamTypes {
  className?: string;
  clientTeamCheckStatus: boolean;
  handleClientTeamSwitch: any;
  autoCareClientTeam: ClientTeamFormTypes;
  setAutoCareClientTeam: React.Dispatch<
    React.SetStateAction<ClientTeamFormTypes>
  >;
  autoCareClientTeamErrors: ClientTeamFormErrors;
  setAutoCareClientTeamErrors: React.Dispatch<
    React.SetStateAction<ClientTeamFormErrors>
  >;
  finalCheckAllFieldsClientTeam:boolean
}

export interface PabsAccountingTeamTypes {
  className?: string;
  pabsAccountingTeamCheckStatus: boolean;
  handlePabsAccountingTeamSwitch: any;
  autoCarePabsAccountingTeam: PabsAccountingTeamFormTypes;
  setAutoCarePabsAccountingTeam: React.Dispatch<
    React.SetStateAction<PabsAccountingTeamFormTypes>
  >;
  finalCheckAllFieldsPabsAccountingTeam:boolean
}

export interface ClientInfoType {
  SFID: string;
  DepartmentType: string;
  DepartmentId: string;
  ClientId: string;
  clientName: string;
  UserId: string;
}

export interface AutoCareType {
  clientInfo?: ClientInfoType;
  setBasicDetailCount: (value: number) => void;
  setBasicDetailsFormSubmit: (value: number) => void;
  setIsOpenModal: (value: boolean) => void;
  autoCareProgressPercentage:number
  setCheckAllFields: (value: boolean) => void;
}

export interface ChecklistType extends Partial<AutoCareType> {
  setIsOpenModal: (value: boolean) => void;
  setChecklistCount: (value: number) => void;
  setChecklistFormSubmit: (value: number) => void;
  autoCareProgressPercentage:number
  checkAllBasicDetails:boolean
  formSubmitId:number
}

export interface BasicDetailsResponseDataType {
  userId: number;
  businessTypeId: number;
  businessTypeName: string;
  accountName: string;
  service: string;
  corporateAddress: string;
  noOfLocations: string;
  nameOfLocations: string;
  ownerContact: string;
  ownerEmail: string;
  ownerPhone: string;
  noOfEntities: string;
  noOfShops: string;
  salesRep: string;
  agreementDate: Dayjs | null | string;
  probableAcquisitionDate: Dayjs | null | string;
  dba: string;
  shopManager: string;
  poc1: string;
  emailId: string;
  cpa: string;
  priorBookkeeper: string;
  itSupport: string;
  timeZone: string;
  state: string;
  weeklyCalls: string;
  weeklyCallTime: Dayjs | null | string;
  istTime: Dayjs | null | string;
  implementationManager: string;
  implementationAnalyst: string;
  operationsHead: string;
  operationsManager: string;
  operationsAccountHandler: string;
  pabsGroupEmail: string;
  pabsPhone: string;
  accountDetailsIsDisplay: boolean;
  legalStructureIsDisplay: boolean;
  cpaClientTeamIsDisplay: boolean;
  pabsAccountingTeamIsDisplay: boolean;
  isSubmited:boolean
}

export interface formChecklistDetails {
  id: number;
  clientId: number;
  businessType: string;
  fieldName: string;
  status: string;
  comments: string | null;
  details: string;
  actionsOfPabs: string;
  actionOfClient: string | null;
}
