import { ReactNode } from "react";
import { PayrollServiceProviderFormTypes } from "./autoCareChecklist";

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

export interface OperationsPocFormTypes {
  OperationsPocStatus: string;
  OperationsPocDetails: string;
  OperationsPocActionItems: string;
  [key: string]: string | null;
}

export interface OnboardingPocFormTypes {
  OnboardingPocStatus: string;
  OnboardingPocDetails: string;
  OnboardingPocActionItems: string;
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

export interface SalesTaxPortalAccessFormTypes {
  salesTaxPortalAccessStatus: string;
  salesTaxPortalAccessDetails: string;
  salesTaxPortalAccessActionItems: string;
}

export interface MerchantAccountPortalAccessFormTypes {
  merchantAccountPortalAccessStatus: string;
  merchantAccountPortalAccessDetails: string;
  merchantAccountPortalAccessActionItems: string;
}

export interface PayrollFrequencyFormTypes {
  PayrollFrequencyStatus: string;
  PayrollFrequencyDetails: string;
  PayrollFrequencyActionItems: string;
  [key: string]: string | null;
}

export interface ExpensePaymentPortalAccessFormTypes {
  expensePaymentPortalAccessStatus: string;
  expensePaymentPortalAccessDetails: string;
  expensePaymentPortalAccessActionItems: string;
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

export interface PointSalesAccessFormTypes {
  pointSalesAccessStatus: string;
  pointSalesAccessDetails: string;
  pointSalesAccessActionItems: string;
  [key: string]: string | null;
}

export interface SystemDocumentInformationAccessTypes {
  className?: string;
  smbSystemAccessChecklistErrors: smbSystemDocumentAccessErrors;
  smbPABSGroupEmail: PABSGroupEmailFormTypes;
  setSmbPABSGroupEmail: React.Dispatch<
    React.SetStateAction<PABSGroupEmailFormTypes>
  >;
  smbAccessAccountingSoftware: AccessAccountingSoftwareFormTypes;
  setSmbAccessAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccessAccountingSoftwareFormTypes>
  >;
  smbDropboxSetUp: DropboxSetUpFormTypes;
  setSmbDropboxSetUp: React.Dispatch<
    React.SetStateAction<DropboxSetUpFormTypes>
  >;
  smbSalesTaxPortalAccess: SalesTaxPortalAccessFormTypes;
  setSmbSalesTaxPortalAccess: React.Dispatch<
    React.SetStateAction<SalesTaxPortalAccessFormTypes>
  >;
  smbMerchantAccountPortalAccess: MerchantAccountPortalAccessFormTypes;
  setSmbMerchantAccountPortalAccess: React.Dispatch<
    React.SetStateAction<MerchantAccountPortalAccessFormTypes>
  >;
  smbPayrollServiceAccess: PayrollServiceAccessFormTypes;
  setSmbPayrollServiceAccess: React.Dispatch<
    React.SetStateAction<PayrollServiceAccessFormTypes>
  >;
  smbPayrollFrequency: PayrollFrequencyFormTypes;
  setSmbPayrollFrequency: React.Dispatch<
    React.SetStateAction<PayrollFrequencyFormTypes>
  >;
  smbExpensePaymentPortalAccess: ExpensePaymentPortalAccessFormTypes;
  setSmbExpensePaymentPortalAccess: React.Dispatch<
    React.SetStateAction<ExpensePaymentPortalAccessFormTypes>
  >;
  smbModeOfPayment: ModeOfPaymentFormTypes;
  setSmbModeOfPayment: React.Dispatch<
    React.SetStateAction<ModeOfPaymentFormTypes>
  >;
  smbApBills: ApBillsFormTypes;
  setSmbApBills: React.Dispatch<React.SetStateAction<ApBillsFormTypes>>;
  smbPointSalesAccess: PointSalesAccessFormTypes;
  setSmbPointSalesAccess: React.Dispatch<
    React.SetStateAction<PointSalesAccessFormTypes>
  >;
  checkAllFieldsSmbSystemAccessChecklist: boolean;
}

export interface smbPeopleBusinessTypes {
  className?: string;
  smbPeopleBusinessErrors: smbPeopleBusinessErrors;
  smbClientName: ClientNameFormTypes;
  setSmbClientName: React.Dispatch<React.SetStateAction<ClientNameFormTypes>>;
  smbTypeOfEntity: TypeOfEntityFormTypes;
  setSmbTypeOfEntity: React.Dispatch<
    React.SetStateAction<TypeOfEntityFormTypes>
  >;
  smbBusinessNature: BusinessNatureFormTypes;
  setSmbBusinessNature: React.Dispatch<
    React.SetStateAction<BusinessNatureFormTypes>
  >;
  smbDimensions: DimensionsFormTypes;
  setSmbDimensions: React.Dispatch<React.SetStateAction<DimensionsFormTypes>>;
  smbPoc: PocFormTypes;
  setSmbPoc: React.Dispatch<React.SetStateAction<PocFormTypes>>;
  smbEmail: EmailFormTypes;
  setSmbEmail: React.Dispatch<React.SetStateAction<EmailFormTypes>>;
  smbContactNumber: ContactNumberFormTypes;
  setSmbContactNumber: React.Dispatch<
    React.SetStateAction<ContactNumberFormTypes>
  >;
  smbAddress: AddressFormTypes;
  setSmbAddress: React.Dispatch<React.SetStateAction<AddressFormTypes>>;
  smbClientWebsite: ClientWebsiteFormTypes;
  setSmbClientWebsite: React.Dispatch<
    React.SetStateAction<ClientWebsiteFormTypes>
  >;
  smbDepartment: DepartmentFormTypes;
  setSmbDepartment: React.Dispatch<React.SetStateAction<DepartmentFormTypes>>;
  smbOperationsPoc: OperationsPocFormTypes;
  setSmbOperationsPoc: React.Dispatch<
    React.SetStateAction<OperationsPocFormTypes>
  >;
  smbOnboardingPoc: OnboardingPocFormTypes;
  setSmbOnboardingPoc: React.Dispatch<
    React.SetStateAction<OnboardingPocFormTypes>
  >;
  checkAllFieldsSmbPeopleBusinessChecklist: boolean;
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

export interface CashBankingAccessType {
  className?: string;
  smbCashBankingAccessErrors: smbCashBankingAccessErrors;
  smbSavingAccount: SavingAccountFormTypes;
  setSmbSavingAccount: React.Dispatch<
    React.SetStateAction<SavingAccountFormTypes>
  >;
  smbAccessSavingAccount: AccessSavingAccountFormTypes;
  setSmbAccessSavingAccount: React.Dispatch<
    React.SetStateAction<AccessSavingAccountFormTypes>
  >;
  smbAddCards: AddCardsFormTypes;
  setSmbAddCards: React.Dispatch<React.SetStateAction<AddCardsFormTypes>>;
  smbAccessCreditCardPortal: AccessCreditCardPortalFormTypes;
  setSmbAccessCreditCardPortal: React.Dispatch<
    React.SetStateAction<AccessCreditCardPortalFormTypes>
  >;
  smbAccessLoanAccount: AccessLoanAccountFormTypes;
  setSmbAccessLoanAccount: React.Dispatch<
    React.SetStateAction<AccessLoanAccountFormTypes>
  >;
  smbAccessCreditCard: AccessCreditCardFormTypes;
  setSmbAccessCreditCard: React.Dispatch<
    React.SetStateAction<AccessCreditCardFormTypes>
  >;
  checkAllFieldsSmbBankingAccessChecklist: boolean;
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

export interface ExistingFinancialsChecklistType {
  className?: string;
  smbExistingFinancialsChecklistErrors: smbExistingFinancialsChecklistErrors;
  smbLiveDate: LiveDateFormTypes;
  setSmbLiveDate: React.Dispatch<React.SetStateAction<LiveDateFormTypes>>;
  smbAccountingMethod: AccountingMethodFormTypes;
  setSmbAccountingMethod: React.Dispatch<
    React.SetStateAction<AccountingMethodFormTypes>
  >;
  smbFEIN: FEINFormTypes;
  setSmbFEIN: React.Dispatch<React.SetStateAction<FEINFormTypes>>;
  smbFiscalYearEnd: FiscalYearEndFormTypes;
  setSmbFiscalYearEnd: React.Dispatch<
    React.SetStateAction<FiscalYearEndFormTypes>
  >;
  smbLastClosedMonth: LastClosedMonthFormTypes;
  setSmbLastClosedMonth: React.Dispatch<
    React.SetStateAction<LastClosedMonthFormTypes>
  >;
  smbContactOfCpa: ContactOfCpaFormTypes;
  setSmbContactOfCpa: React.Dispatch<
    React.SetStateAction<ContactOfCpaFormTypes>
  >;
  smbTaxReturn: TaxReturnFormTypes;
  setSmbTaxReturn: React.Dispatch<React.SetStateAction<TaxReturnFormTypes>>;
  smbDistributionList: DistributionListFormTypes;
  setSmbDistributionList: React.Dispatch<
    React.SetStateAction<DistributionListFormTypes>
  >;
  checkAllFieldsSmbExistingFinancialsChecklist: boolean;
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

export interface MeetingChecklistType {
  className?: string;
  smbMeetingChecklistErrors: smbMeetingAvailabilityErrors;
  smbTimeZone: TimeZoneFormTypes;
  setSmbTimeZone: React.Dispatch<React.SetStateAction<TimeZoneFormTypes>>;
  smbConvenient: ConvenientFormTypes;
  setSmbConvenient: React.Dispatch<React.SetStateAction<ConvenientFormTypes>>;
  smbTimeSlot: TimeSlotFormTypes;
  setSmbTimeSlot: React.Dispatch<React.SetStateAction<TimeSlotFormTypes>>;
  checkAllFieldsSmbMeetingChecklist: boolean;
}

export interface ClientNameTypes {
  smbClientName: ClientNameFormTypes;
  setSmbClientName: React.Dispatch<React.SetStateAction<ClientNameFormTypes>>;
  smbClientNameErrors: smbPeopleBusinessErrors;
  checkAllFieldsClientName: boolean;
}
export interface TypeOfEntityTypes {
  smbTypeOfEntity: TypeOfEntityFormTypes;
  setSmbTypeOfEntity: React.Dispatch<
    React.SetStateAction<TypeOfEntityFormTypes>
  >;
  checkAllFieldsTypeOfEntity: boolean;
}
export interface BusinessNatureTypes {
  smbBusinessNature: BusinessNatureFormTypes;
  setSmbBusinessNature: React.Dispatch<
    React.SetStateAction<BusinessNatureFormTypes>
  >;
  checkAllFieldsBusinessNature: boolean;
}
export interface DimensionsTypes {
  smbDimensions: DimensionsFormTypes;
  setSmbDimensions: React.Dispatch<React.SetStateAction<DimensionsFormTypes>>;
  checkAllFieldsDimensions: boolean;
}
export interface PocTypes {
  smbPoc: PocFormTypes;
  setSmbPoc: React.Dispatch<React.SetStateAction<PocFormTypes>>;
  smbPocErrors: smbPeopleBusinessErrors;
  checkAllFieldsPoc: boolean;
}
export interface EmailTypes {
  smbEmail: EmailFormTypes;
  setSmbEmail: React.Dispatch<React.SetStateAction<EmailFormTypes>>;
  smbEmailErrors: smbPeopleBusinessErrors;
  checkAllFieldsEmail: boolean;
}
export interface ContactNumberTypes {
  smbContactNumber: ContactNumberFormTypes;
  setSmbContactNumber: React.Dispatch<
    React.SetStateAction<ContactNumberFormTypes>
  >;
  smbContactNumberErrors: smbPeopleBusinessErrors;
  checkAllFieldsContactNumber: boolean;
}
export interface AddressTypes {
  smbAddress: AddressFormTypes;
  setSmbAddress: React.Dispatch<React.SetStateAction<AddressFormTypes>>;
  smbAddressErrors: smbPeopleBusinessErrors;
  checkAllFieldsAddress: boolean;
}
export interface ClientWebsiteTypes {
  smbClientWebsite: ClientWebsiteFormTypes;
  setSmbClientWebsite: React.Dispatch<
    React.SetStateAction<ClientWebsiteFormTypes>
  >;
  smbClientWebsiteErrors: smbPeopleBusinessErrors;
  checkAllFieldsClientWebsite: boolean;
}
export interface DepartmentTypes {
  smbDepartment: DepartmentFormTypes;
  setSmbDepartment: React.Dispatch<React.SetStateAction<DepartmentFormTypes>>;
  checkAllFieldsDepartment: boolean;
}

export interface OperationsPocTypes {
  smbOperationsPoc: OperationsPocFormTypes;
  setSmbOperationsPoc: React.Dispatch<
    React.SetStateAction<OperationsPocFormTypes>
  >;
  checkAllFieldsOperationsPoc: boolean;
}

export interface OnboardingPocTypes {
  smbOnboardingPoc: OnboardingPocFormTypes;
  setSmbOnboardingPoc: React.Dispatch<
    React.SetStateAction<OnboardingPocFormTypes>
  >;

  checkAllFieldsOnboardingPoc: boolean;
}

export interface smbPeopleBusinessErrors
  extends Partial<
    ClientNameFormTypes &
      PocFormTypes &
      EmailFormTypes &
      ContactNumberFormTypes &
      AddressFormTypes &
      ClientWebsiteFormTypes
  > {}

export interface PABSGroupEmailTypes {
  smbPABSGroupEmail: PABSGroupEmailFormTypes;
  setSmbPABSGroupEmail: React.Dispatch<
    React.SetStateAction<PABSGroupEmailFormTypes>
  >;
  checkAllFieldsPABSGroupEmail:boolean
}

export interface AccessAccountingSoftwareTypes {
  smbAccessAccountingSoftware: AccessAccountingSoftwareFormTypes;
  setSmbAccessAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccessAccountingSoftwareFormTypes>
  >;
  smbAccessAccountingSoftwareErrors: smbSystemDocumentAccessErrors;
  checkAllFieldsAccessAccountingSoftware:boolean
}

export interface DropboxSetUpTypes {
  smbDropboxSetUp: DropboxSetUpFormTypes;
  setSmbDropboxSetUp: React.Dispatch<
    React.SetStateAction<DropboxSetUpFormTypes>
  >;
  checkAllFieldsDropboxSetUp:boolean
}

export interface SalesTaxPortalAccessTypes {
  smbSalesTaxPortalAccess: SalesTaxPortalAccessFormTypes;
  setSmbSalesTaxPortalAccess: React.Dispatch<
    React.SetStateAction<SalesTaxPortalAccessFormTypes>
  >;
  checkAllFieldsSalesTaxPortalAccess:boolean
}

export interface MerchantAccountPortalAccessTypes {
  smbMerchantAccountPortalAccess: MerchantAccountPortalAccessFormTypes;
  setSmbMerchantAccountPortalAccess: React.Dispatch<
    React.SetStateAction<MerchantAccountPortalAccessFormTypes>
  >;
  checkAllFieldsMerchantAccountPortalAccess:boolean
}

export interface PayrollServiceAccessTypes {
  smbPayrollServiceAccess: PayrollServiceAccessFormTypes;
  setSmbPayrollServiceAccess: React.Dispatch<
    React.SetStateAction<PayrollServiceAccessFormTypes>
  >;
  smbPayrollServiceAccessErrors: smbSystemDocumentAccessErrors;
  checkAllFieldsPayrollServiceAccess:boolean
}

export interface PayrollFrequencyTypes {
  smbPayrollFrequency: PayrollFrequencyFormTypes;
  setSmbPayrollFrequency: React.Dispatch<
    React.SetStateAction<PayrollFrequencyFormTypes>
  >;
  checkAllFieldsPayrollFrequency:boolean
}

export interface ExpensePaymentPortalAccessTypes {
  smbExpensePaymentPortalAccess: ExpensePaymentPortalAccessFormTypes;
  setSmbExpensePaymentPortalAccess: React.Dispatch<
    React.SetStateAction<ExpensePaymentPortalAccessFormTypes>
  >;
  checkAllFieldsExpensePaymentPortalAccess:boolean
}

export interface ModeOfPaymentTypes {
  smbModeOfPayment: ModeOfPaymentFormTypes;
  setSmbModeOfPayment: React.Dispatch<
    React.SetStateAction<ModeOfPaymentFormTypes>
  >;
  smbModeOfPaymentErrors: smbSystemDocumentAccessErrors;
  checkAllFieldsModeOfPayment:boolean
}

export interface ApBillsTypes {
  smbApBills: ApBillsFormTypes;
  setSmbApBills: React.Dispatch<React.SetStateAction<ApBillsFormTypes>>;
  checkAllFieldsApBills:boolean
}

export interface PointSalesAccessTypes {
  smbPointSalesAccess: PointSalesAccessFormTypes;
  setSmbPointSalesAccess: React.Dispatch<
    React.SetStateAction<PointSalesAccessFormTypes>
  >;
  smbPointSalesAccessErrors: smbSystemDocumentAccessErrors;
  checkAllFieldsPointSalesAccess:boolean
}

export interface smbSystemDocumentAccessErrors
  extends Partial<
    AccessAccountingSoftwareFormTypes &
      PayrollServiceProviderFormTypes &
      ModeOfPaymentFormTypes &
      PointSalesAccessFormTypes
  > {}

export interface SavingAccountTypes {
  smbSavingAccount: SavingAccountFormTypes;
  setSmbSavingAccount: React.Dispatch<
    React.SetStateAction<SavingAccountFormTypes>
  >;
  smbSavingAccountErrors: smbCashBankingAccessErrors;
  checkAllFieldsSavingAccount:boolean
}

export interface AccessSavingAccountTypes {
  smbAccessSavingAccount: AccessSavingAccountFormTypes;
  setSmbAccessSavingAccount: React.Dispatch<
    React.SetStateAction<AccessSavingAccountFormTypes>
  >;
  checkAllFieldsAccessSavingAccount:boolean
}

export interface AddCardsTypes {
  smbAddCards: AddCardsFormTypes;
  setSmbAddCards: React.Dispatch<React.SetStateAction<AddCardsFormTypes>>;
  smbAddCardsErrors: smbCashBankingAccessErrors;
  checkAllFieldsAddCards:boolean
}

export interface AccessCreditCardPortalTypes {
  smbAccessCreditCardPortal: AccessCreditCardPortalFormTypes;
  setSmbAccessCreditCardPortal: React.Dispatch<
    React.SetStateAction<AccessCreditCardPortalFormTypes>
  >;
  checkAllFieldsAccessCreditCardPortal:boolean
}

export interface AccessLoanAccountTypes {
  smbAccessLoanAccount: AccessLoanAccountFormTypes;
  setSmbAccessLoanAccount: React.Dispatch<
    React.SetStateAction<AccessLoanAccountFormTypes>
  >;
  checkAllFieldsAccessLoanAccount:boolean
}

export interface AccessCreditCardTypes {
  smbAccessCreditCard: AccessCreditCardFormTypes;
  setSmbAccessCreditCard: React.Dispatch<
    React.SetStateAction<AccessCreditCardFormTypes>
  >;
}

export interface smbCashBankingAccessErrors
  extends Partial<SavingAccountFormTypes & AddCardsFormTypes> {}

export interface LiveDateTypes {
  smbLiveDate: LiveDateFormTypes;
  setSmbLiveDate: React.Dispatch<React.SetStateAction<LiveDateFormTypes>>;
  smbLiveDateErrors: smbExistingFinancialsChecklistErrors;
  checkAllFieldsLiveDate:boolean
}

export interface AccountingMethodTypes {
  smbAccountingMethod: AccountingMethodFormTypes;
  setSmbAccountingMethod: React.Dispatch<
    React.SetStateAction<AccountingMethodFormTypes>
  >;
  checkAllFieldsAccountingMethod:boolean
}

export interface FEINTypes {
  smbFEIN: FEINFormTypes;
  setSmbFEIN: React.Dispatch<React.SetStateAction<FEINFormTypes>>;
  checkAllFieldsFEIN:boolean
}

export interface FiscalYearEndTypes {
  smbFiscalYearEnd: FiscalYearEndFormTypes;
  setSmbFiscalYearEnd: React.Dispatch<
    React.SetStateAction<FiscalYearEndFormTypes>
  >;
  checkAllFieldsFiscalYearEnd:boolean
}

export interface LastClosedMonthTypes {
  smbLastClosedMonth: LastClosedMonthFormTypes;
  setSmbLastClosedMonth: React.Dispatch<
    React.SetStateAction<LastClosedMonthFormTypes>
  >;
  smbLastClosedMonthErrors: smbExistingFinancialsChecklistErrors;
  checkAllFieldsLastClosedMonth:boolean
}

export interface ContactOfCpaTypes {
  smbContactOfCpa: ContactOfCpaFormTypes;
  setSmbContactOfCpa: React.Dispatch<
    React.SetStateAction<ContactOfCpaFormTypes>
  >;
  checkAllFieldsContactOfCpa:boolean
}

export interface TaxReturnTypes {
  smbTaxReturn: TaxReturnFormTypes;
  setSmbTaxReturn: React.Dispatch<React.SetStateAction<TaxReturnFormTypes>>;
  smbTaxReturnErrors: smbExistingFinancialsChecklistErrors;
  checkAllFieldsTaxReturn:boolean
}

export interface DistributionListTypes {
  smbDistributionList: DistributionListFormTypes;
  setSmbDistributionList: React.Dispatch<
    React.SetStateAction<DistributionListFormTypes>
  >;
  smbDistributionListErrors: smbExistingFinancialsChecklistErrors;
  checkAllFieldsDistributionList:boolean
}

export interface smbExistingFinancialsChecklistErrors
  extends Partial<
    LiveDateFormTypes &
      LastClosedMonthFormTypes &
      TaxReturnFormTypes &
      DistributionListFormTypes
  > {}

export interface TimeZoneTypes {
  smbTimeZone: TimeZoneFormTypes;
  setSmbTimeZone: React.Dispatch<React.SetStateAction<TimeZoneFormTypes>>;
  smbTimeZoneErrors: smbMeetingAvailabilityErrors;
  checkAllFieldsTimeZone:boolean
}

export interface ConvenientTypes {
  smbConvenient: ConvenientFormTypes;
  setSmbConvenient: React.Dispatch<React.SetStateAction<ConvenientFormTypes>>;
  smbConvenientErrors: smbMeetingAvailabilityErrors;
  checkAllFieldsConvenient:boolean
}

export interface TimeSlotTypes {
  smbTimeSlot: TimeSlotFormTypes;
  setSmbTimeSlot: React.Dispatch<React.SetStateAction<TimeSlotFormTypes>>;
  smbTimeSlotErrors: smbMeetingAvailabilityErrors;
  checkAllFieldsTimeSlot:boolean
}

export interface smbMeetingAvailabilityErrors
  extends Partial<
    TimeZoneFormTypes & ConvenientFormTypes & TimeSlotFormTypes
  > {}

export interface FormDetails {
  fieldName: string;
  status: string;
  details: string;
  actionsOfPabs: string;
}

export interface FieldMapEntry {
  setter: (data: any) => void;
  keys: {
    status: string;
    details: string;
    actionItems: string;
  };
}

export interface SMBType {
  clientInfo?: any;
  responseData?: any;
  getFormDetials?: any;
  formDetails?: any;
  getFormAutoCareDetials?: any;
  setSMBChecklistCount: (value: number) => void;
  setIsOpenModal?: any;
  setSmbFormSubmittedStatus:(value:boolean) => void;
}
