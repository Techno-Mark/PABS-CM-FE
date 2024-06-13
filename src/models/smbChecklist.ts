import { ReactNode } from "react";

export interface ChecklistAccordianProps {
  title: string;
  children: ReactNode;
  expandedAccordian: boolean;
  handleChange: any;
  // setExpandedAccordian:React.Dispatch<React.SetStateAction<number>>
}

export interface ClientNameFormTypes {
  ClientNameStatus: string;
  ClientNameDetails: string;
  ClientNameActionItems: string;
  [key: string]: string | null;
}

export interface TypeOfEntityFormTypes {
  TypeOfEntityStatus: string;
  TypeOfEntityDetails: string;
  TypeOfEntityActionItems: string;
  [key: string]: string | null;
}
export interface BusinessNatureFormTypes {
  BusinessNatureStatus: string;
  BusinessNatureDetails: string;
  BusinessNatureActionItems: string;
  [key: string]: string | null;
}

export interface DimensionsFormTypes {
  DimensionsStatus: string;
  DimensionsDetails: string;
  DimensionsActionItems: string;
  [key: string]: string | null;
}

export interface PocFormTypes {
  PocStatus: string;
  PocDetails: string;
  PocActionItems: string;
  [key: string]: string | null;
}

export interface EmailFormTypes {
  EmailStatus: string;
  EmailDetails: string;
  EmailActionItems: string;
  [key: string]: string | null;
}

export interface ContactNumberFormTypes {
  ContactNumberStatus: string;
  ContactNumberDetails: string;
  ContactNumberActionItems: string;
  [key: string]: string | null;
}

export interface AddressFormTypes {
  AddressStatus: string;
  AddressDetails: string;
  AddressActionItems: string;
  [key: string]: string | null;
}

export interface ClientWebsiteFormTypes {
  ClientWebsiteStatus: string;
  ClientWebsiteDetails: string;
  ClientWebsiteActionItems: string;
  [key: string]: string | null;
}

export interface DepartmentFormTypes {
  DepartmentStatus: string;
  DepartmentDetails: string;
  DepartmentActionItems: string;
  [key: string]: string | null;
}

export interface OperationsFormTypes {
  OperationsStatus: string;
  OperationsDetails: string;
  OperationsActionItems: string;
  [key: string]: string | null;
}

export interface PABSGroupEmailFormTypes {
  pabsGroupEmailStatus: string;
  pabsGroupEmailDetails: string;
  pabsGroupEmailActionItems: string;
  [key: string]: string | null;
}

export interface AccessAccountingSoftwareFormTypes {
  AccessAccountingSoftwareStatus: string;
  AccessAccountingSoftwareDetails: string;
  AccessAccountingSoftwareActionItems: string;
  [key: string]: string | null;
}

export interface DropboxSetUpFormTypes {
  DropboxSetUpStatus: string;
  DropboxSetUpDetails: string;
  DropboxSetUpActionItems: string;
  [key: string]: string | null;
}

export interface PayrollServiceAccessFormTypes {
  PayrollServiceAccessStatus: string;
  PayrollServiceAccessDetails: string;
  PayrollServiceAccessActionItems: string;
  [key: string]: string | null;
}

export interface PayrollFrequencyFormTypes {
  PayrollFrequencyStatus: string;
  PayrollFrequencyDetails: string;
  PayrollFrequencyActionItems: string;
  [key: string]: string | null;
}

export interface ModeOfPaymentFormTypes {
  ModeOfPaymentStatus: string;
  ModeOfPaymentDetails: string;
  ModeOfPaymentActionItems: string;
  [key: string]: string | null;
}

export interface ApBillsFormTypes {
  ApBillsStatus: string;
  ApBillsDetails: string;
  ApBillsActionItems: string;
  [key: string]: string | null;
}

export interface ApplicablityFormTypes {
  ApplicablityStatus: string;
  ApplicablityDetails: string;
  ApplicablityActionItems: string;
  [key: string]: string | null;
}

export interface SavingAccountFormTypes {
  SavingAccountStatus: string;
  SavingAccountDetails: string;
  SavingAccountActionItems: string;
  [key: string]: string | null;
}

export interface AccessSavingAccountFormTypes {
  AccessSavingAccountStatus: string;
  AccessSavingAccountDetails: string;
  AccessSavingAccountActionItems: string;
  [key: string]: string | null;
}

export interface AddCardsFormTypes {
  AddCardsStatus: string;
  AddCardsDetails: string;
  AddCardsActionItems: string;
  [key: string]: string | null;
}

export interface AccessCreditCardPortalFormTypes {
  AccessCreditCardPortalStatus: string;
  AccessCreditCardPortalDetails: string;
  AccessCreditCardPortalActionItems: string;
  [key: string]: string | null;
}

export interface AccessLoanAccountFormTypes {
  AccessLoanAccountStatus: string;
  AccessLoanAccountDetails: string;
  AccessLoanAccountActionItems: string;
  [key: string]: string | null;
}

export interface AccessCreditCardFormTypes {
  AccessCreditCardStatus: string;
  AccessCreditCardDetails: string;
  AccessCreditCardActionItems: string;
  [key: string]: string | null;
}

export interface LiveDateFormTypes {
  LiveDateStatus: string;
  LiveDateDetails: string;
  LiveDateActionItems: string;
  [key: string]: string | null;
}

export interface AccountingMethodFormTypes {
  AccountingMethodStatus: string;
  AccountingMethodDetails: string;
  AccountingMethodActionItems: string;
  [key: string]: string | null;
}

export interface FEINFormTypes {
  FEINStatus: string;
  FEINDetails: string;
  FEINActionItems: string;
  [key: string]: string | null;
}

export interface FiscalYearEndFormTypes {
  FiscalYearEndStatus: string;
  FiscalYearEndDetails: string;
  FiscalYearEndActionItems: string;
  [key: string]: string | null;
}

export interface LastClosedMonthFormTypes {
  LastClosedMonthStatus: string;
  LastClosedMonthDetails: string;
  LastClosedMonthActionItems: string;
  [key: string]: string | null;
}

export interface ContactOfCpaFormTypes {
  ContactOfCpaStatus: string;
  ContactOfCpaDetails: string;
  ContactOfCpaActionItems: string;
  [key: string]: string | null;
}

export interface TaxReturnFormTypes {
  TaxReturnStatus: string;
  TaxReturnDetails: string;
  TaxReturnActionItems: string;
  [key: string]: string | null;
}

export interface DistributionListFormTypes {
  DistributionListStatus: string;
  DistributionListDetails: string;
  DistributionListActionItems: string;
  [key: string]: string | null;
}

export interface TimeZoneFormTypes {
  TimeZoneStatus: string;
  TimeZoneDetails: string;
  TimeZoneActionItems: string;
  [key: string]: string | null;
}

export interface ConvenientFormTypes {
  ConvenientStatus: string;
  ConvenientDetails: string;
  ConvenientActionItems: string;
  [key: string]: string | null;
}

export interface TimeSlotFormTypes {
  TimeSlotStatus: string;
  TimeSlotDetails: string;
  TimeSlotActionItems: string;
  [key: string]: string | null;
}

export interface ClientNameTypes {
  smbClientName: ClientNameFormTypes;
  setSmbClientName: React.Dispatch<React.SetStateAction<ClientNameFormTypes>>;
}
export interface TypeOfEntityTypes {
  smbTypeOfEntity: TypeOfEntityFormTypes;
  setSmbTypeOfEntity: React.Dispatch<
    React.SetStateAction<TypeOfEntityFormTypes>
  >;
}
export interface BusinessNatureTypes {
  smbBusinessNature: BusinessNatureFormTypes;
  setSmbBusinessNature: React.Dispatch<
    React.SetStateAction<BusinessNatureFormTypes>
  >;
}
export interface DimensionsTypes {
  smbDimensions: DimensionsFormTypes;
  setSmbDimensions: React.Dispatch<React.SetStateAction<DimensionsFormTypes>>;
}
export interface PocTypes {
  smbPoc: PocFormTypes;
  setSmbPoc: React.Dispatch<React.SetStateAction<PocFormTypes>>;
}
export interface EmailTypes {
  smbEmail: EmailFormTypes;
  setSmbEmail: React.Dispatch<React.SetStateAction<EmailFormTypes>>;
}
export interface ContactNumberTypes {
  smbContactNumber: ContactNumberFormTypes;
  setSmbContactNumber: React.Dispatch<
    React.SetStateAction<ContactNumberFormTypes>
  >;
}
export interface AddressTypes {
  smbAddress: AddressFormTypes;
  setSmbAddress: React.Dispatch<React.SetStateAction<AddressFormTypes>>;
}
export interface ClientWebsiteTypes {
  smbClientWebsite: ClientWebsiteFormTypes;
  setSmbClientWebsite: React.Dispatch<
    React.SetStateAction<ClientWebsiteFormTypes>
  >;
}
export interface DepartmentTypes {
  smbDepartment: DepartmentFormTypes;
  setSmbDepartment: React.Dispatch<React.SetStateAction<DepartmentFormTypes>>;
}

export interface OperationsTypes {
  smbOperations: OperationsFormTypes;
  setSmbOperations: React.Dispatch<React.SetStateAction<OperationsFormTypes>>;
}

export interface PABSGroupEmailTypes {
  smbPABSGroupEmail: PABSGroupEmailFormTypes;
  setSmbPABSGroupEmail: React.Dispatch<
    React.SetStateAction<PABSGroupEmailFormTypes>
  >;
}

export interface AccessAccountingSoftwareTypes {
  smbAccessAccountingSoftware: AccessAccountingSoftwareFormTypes;
  setSmbAccessAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccessAccountingSoftwareFormTypes>
  >;
}

export interface DropboxSetUpTypes {
  smbDropboxSetUp: DropboxSetUpFormTypes;
  setSmbDropboxSetUp: React.Dispatch<
    React.SetStateAction<DropboxSetUpFormTypes>
  >;
}

export interface PayrollServiceAccessTypes {
  smbPayrollServiceAccess: PayrollServiceAccessFormTypes;
  setSmbPayrollServiceAccess: React.Dispatch<
    React.SetStateAction<PayrollServiceAccessFormTypes>
  >;
}

export interface PayrollFrequencyTypes {
  smbPayrollFrequency: PayrollFrequencyFormTypes;
  setSmbPayrollFrequency: React.Dispatch<
    React.SetStateAction<PayrollFrequencyFormTypes>
  >;
}

export interface ModeOfPaymentTypes {
  smbModeOfPayment: ModeOfPaymentFormTypes;
  setSmbModeOfPayment: React.Dispatch<
    React.SetStateAction<ModeOfPaymentFormTypes>
  >;
}

export interface ApBillsTypes {
  smbApBills: ApBillsFormTypes;
  setSmbApBills: React.Dispatch<React.SetStateAction<ApBillsFormTypes>>;
}

export interface ApplicablityTypes {
  smbApplicablity: ApplicablityFormTypes;
  setSmbApplicablity: React.Dispatch<
    React.SetStateAction<ApplicablityFormTypes>
  >;
}

export interface SavingAccountTypes {
  smbSavingAccount: SavingAccountFormTypes;
  setSmbSavingAccount: React.Dispatch<
    React.SetStateAction<SavingAccountFormTypes>
  >;
}

export interface AccessSavingAccountTypes {
  smbAccessSavingAccount: AccessSavingAccountFormTypes;
  setSmbAccessSavingAccount: React.Dispatch<
    React.SetStateAction<AccessSavingAccountFormTypes>
  >;
}

export interface AddCardsTypes {
  smbAddCards: AddCardsFormTypes;
  setSmbAddCards: React.Dispatch<React.SetStateAction<AddCardsFormTypes>>;
}

export interface AccessCreditCardPortalTypes {
  smbAccessCreditCardPortal: AccessCreditCardPortalFormTypes;
  setSmbAccessCreditCardPortal: React.Dispatch<
    React.SetStateAction<AccessCreditCardPortalFormTypes>
  >;
}

export interface AccessLoanAccountTypes {
  smbAccessLoanAccount: AccessLoanAccountFormTypes;
  setSmbAccessLoanAccount: React.Dispatch<
    React.SetStateAction<AccessLoanAccountFormTypes>
  >;
}

export interface AccessCreditCardTypes {
  smbAccessCreditCard: AccessCreditCardFormTypes;
  setSmbAccessCreditCard: React.Dispatch<
    React.SetStateAction<AccessCreditCardFormTypes>
  >;
}

export interface LiveDateTypes {
  smbLiveDate: LiveDateFormTypes;
  setSmbLiveDate: React.Dispatch<React.SetStateAction<LiveDateFormTypes>>;
}

export interface AccountingMethodTypes {
  smbAccountingMethod: AccountingMethodFormTypes;
  setSmbAccountingMethod: React.Dispatch<
    React.SetStateAction<AccountingMethodFormTypes>
  >;
}

export interface FEINTypes {
  smbFEIN: FEINFormTypes;
  setSmbFEIN: React.Dispatch<React.SetStateAction<FEINFormTypes>>;
}

export interface FiscalYearEndTypes {
  smbFiscalYearEnd: FiscalYearEndFormTypes;
  setSmbFiscalYearEnd: React.Dispatch<
    React.SetStateAction<FiscalYearEndFormTypes>
  >;
}

export interface LastClosedMonthTypes {
  smbLastClosedMonth: LastClosedMonthFormTypes;
  setSmbLastClosedMonth: React.Dispatch<
    React.SetStateAction<LastClosedMonthFormTypes>
  >;
}

export interface ContactOfCpaTypes {
  smbContactOfCpa: ContactOfCpaFormTypes;
  setSmbContactOfCpa: React.Dispatch<
    React.SetStateAction<ContactOfCpaFormTypes>
  >;
}

export interface TaxReturnTypes {
  smbTaxReturn: TaxReturnFormTypes;
  setSmbTaxReturn: React.Dispatch<React.SetStateAction<TaxReturnFormTypes>>;
}

export interface DistributionListTypes {
  smbDistributionList: DistributionListFormTypes;
  setSmbDistributionList: React.Dispatch<
    React.SetStateAction<DistributionListFormTypes>
  >;
}

export interface TimeZoneTypes {
  smbTimeZone: TimeZoneFormTypes;
  setSmbTimeZone: React.Dispatch<React.SetStateAction<TimeZoneFormTypes>>;
}

export interface ConvenientTypes {
  smbConvenient: ConvenientFormTypes;
  setSmbConvenient: React.Dispatch<React.SetStateAction<ConvenientFormTypes>>;
}

export interface TimeSlotTypes {
  smbTimeSlot: TimeSlotFormTypes;
  setSmbTimeSlot: React.Dispatch<React.SetStateAction<TimeSlotFormTypes>>;
}
