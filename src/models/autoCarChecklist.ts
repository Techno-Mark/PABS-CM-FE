import { ReactNode } from "react";

export interface ChecklistAccordianProps {
  title: string;
  children: ReactNode;
  expandedAccordian: boolean;
  handleChange: any;
}

export interface autoCareCommmunicationChecklistTypes {
  className?:string,
  autoCareGroupEmailEstablished:GroupEmailEstablishedFormTypes,
  setAutoCareGroupEmailEstablished: React.Dispatch<React.SetStateAction<GroupEmailEstablishedFormTypes>>,
  autoCarePreKickOff:PreKickOffFormTypes,
  setAutoCarePreKickOff: React.Dispatch<React.SetStateAction<PreKickOffFormTypes>>,
  autoCareKickOff:KickOffFormTypes,
  setAutoCareKickOff: React.Dispatch<React.SetStateAction<KickOffFormTypes>>,
}

export interface autoCareSystemLocationChecklistTypes {
  className?:string,
  systemSoftwareLocationErrors:autoCareSystemLocationChecklistErrors,
  autoCareITStructureReview:ITStructureReviewFormTypes,
  setAutoCareITStructureReview: React.Dispatch<React.SetStateAction<ITStructureReviewFormTypes>>,
  autoCareAccessComputerMethod:AccessComputerFormTypes,
  setAutoCareAccessComputerMethod: React.Dispatch<React.SetStateAction<AccessComputerFormTypes>>,
  autoCarePosSoftware:PosSoftwareFormTypes,
  setAutoCarePosSoftware: React.Dispatch<React.SetStateAction<PosSoftwareFormTypes>>,
  autoCareEstimatingSoftware:EstimatingSoftwareFormTypes,
  setAutoCareEstimatingSoftware: React.Dispatch<React.SetStateAction<EstimatingSoftwareFormTypes>>,
  autoCareAccountingSoftware:AccountingSoftwareFormTypes,
  setAutoCareAccountingSoftware: React.Dispatch<React.SetStateAction<AccountingSoftwareFormTypes>>,
  autoCareCloudDocumentManagement:CloudDocumentManagementFormTypes,
  setAutoCareCloudDocumentManagement: React.Dispatch<React.SetStateAction<CloudDocumentManagementFormTypes>>,
  autoCareScanner:ScannerFormTypes,
  setAutoCareScanner: React.Dispatch<React.SetStateAction<ScannerFormTypes>>,
}

export interface autoCareSystemLocationChecklistErrors extends Partial<PosSoftwareFormTypes & AccountingSoftwareFormTypes> {}

export interface autoCareCashBankLoansTypes {
  className?:string,
  cashBankLoansErrors:autoCareCashBankLoansErrors,
  autoCareOperatingCheckingAccount:OperatingCheckingAccountFormTypes,
  setAutoCareOperatingCheckingAccount: React.Dispatch<React.SetStateAction<OperatingCheckingAccountFormTypes>>,
  autoCareSavingsAccount:SavingsAccountFormTypes,
  setAutoCareSavingsAccount: React.Dispatch<React.SetStateAction<SavingsAccountFormTypes>>,
  autoCareCreditCard:CreditCardFormTypes,
  setAutoCareCreditCard: React.Dispatch<React.SetStateAction<CreditCardFormTypes>>,
  autoCareBusinessLoans:BusinessLoansFormTypes,
  setAutoCareBusinessLoans: React.Dispatch<React.SetStateAction<BusinessLoansFormTypes>>,
  autoCarePropertyLoans:PropertyLoansFormTypes,
  setAutoCarePropertyLoans: React.Dispatch<React.SetStateAction<PropertyLoansFormTypes>>,
}

export interface autoCareCashBankLoansErrors extends Partial<OperatingCheckingAccountFormTypes & SavingsAccountFormTypes & CreditCardFormTypes> {}

export interface autoCarePayrollSystemTypes {
  className?:string,
  payrollSystemError:autoCarePayrollSystemErrors,
  autoCarePayrollServiceProvider:PayrollServiceProviderFormTypes,
  setAutoCarePayrollServiceProvider: React.Dispatch<React.SetStateAction<PayrollServiceProviderFormTypes>>,
  autoCareFrequency:FrequencyFormTypes,
  setAutoCareFrequency: React.Dispatch<React.SetStateAction<FrequencyFormTypes>>,
  autoCareNoOfEmployee:NoOfEmployeeFormTypes,
  setAutoCareNoOfEmployee: React.Dispatch<React.SetStateAction<NoOfEmployeeFormTypes>>,
}

export interface autoCarePayrollSystemErrors extends Partial<PayrollServiceProviderFormTypes & FrequencyFormTypes> {}

export interface autoCareCompliancesTypes {
  className?:string,
  compliancesErrors:autoCareCompliancesErrors,
  autoCareSalesTaxAccessWorkPaper:SalesTaxAccessWorkPaperFormTypes,
  setAutoCareSalesTaxAccessWorkPaper: React.Dispatch<React.SetStateAction<SalesTaxAccessWorkPaperFormTypes>>,
  autoCareUseTax:UseTaxFormTypes,
  setAutoCareUseTax: React.Dispatch<React.SetStateAction<UseTaxFormTypes>>,
  autoCareTireTax:TireTaxFormTypes,
  setAutoCareTireTax: React.Dispatch<React.SetStateAction<TireTaxFormTypes>>,
  autoCareLastTaxReturnFiledYear:LastTaxReturnFiledYearFormTypes,
  setAutoCareLastTaxReturnFiledYear: React.Dispatch<React.SetStateAction<LastTaxReturnFiledYearFormTypes>>,
}

export interface autoCareCompliancesErrors extends Partial<SalesTaxAccessWorkPaperFormTypes & UseTaxFormTypes & TireTaxFormTypes & LastTaxReturnFiledYearFormTypes> {}

export interface autoCarePayableCashPayAccessTypes {
  className?:string,
  payableCashPayAccessError:autoCarePayableCashPayAccessErrors,
  autoCareVendorPortalAccess:VendorPortalAccessFormTypes,
  setAutoCareVendorPortalAccess: React.Dispatch<React.SetStateAction<VendorPortalAccessFormTypes>>,
  autoCareTradeAccount:TradeAccountFormTypes,
  setAutoCareTradeAccount: React.Dispatch<React.SetStateAction<TradeAccountFormTypes>>,
  autoCareBillPayAccess:BillPayAccessFormTypes,
  setAutoCareBillPayAccess: React.Dispatch<React.SetStateAction<BillPayAccessFormTypes>>,
  autoCareApThresholdLimit:ApThresholdLimitFormTypes,
  setAutoCareApThresholdLimit: React.Dispatch<React.SetStateAction<ApThresholdLimitFormTypes>>
}

export interface autoCarePayableCashPayAccessErrors extends Partial<VendorPortalAccessFormTypes & BillPayAccessFormTypes> {}

export interface AutoCareFinancialsTypes {
  className?:string,
  financialsErrors:LastClosedPeriodFormErrors,
  autoCareLastClosedPeriod:LastClosedPeriodFormTypes,
  setAutoCareLastClosedPeriod: React.Dispatch<React.SetStateAction<LastClosedPeriodFormTypes>>,
  autoCareSharingFinancials:SharingFinancialsFormTypes,
  setAutoCareSharingFinancials: React.Dispatch<React.SetStateAction<SharingFinancialsFormTypes>>,
}

export interface GroupEmailEstablishedFormTypes {
  groupEmailEstablishStatus: string;
  groupEmailEstablishComments: string;
  groupEmailEstablishDetails: string;
  groupEmailEstablishActionName: string;
  groupEmailEstablishActionItems: string;
}

export interface PreKickOffFormTypes {
  preKickOffStatus: string;
  preKickOffComments: string;
  preKickOffDetails: string;
  preKickOffActionName: string;
  preKickOffActionItems: string;
}

export interface KickOffFormTypes {
  kickOffStatus: string;
  kickOffComments: string;
  kickOffDetails: string;
  kickOffActionName: string;
  kickOffActionItems: string;
}

export interface ITStructureReviewFormTypes {
  itStructureStatus: string;
  itStructureComments: string;
  itStructureDetails: string;
  itStructureActionName: string;
  itStructureActionItems: string;
}

export interface AccessComputerFormTypes {
  accessComputerStatus: string;
  accessComputerComments: string;
  accessComputerDetails: string;
  accessComputerActionName: string;
  accessComputerActionItems: string;
}

export interface PosSoftwareFormTypes {
  posSoftwareStatus: string;
  posSoftwareComments: string;
  posSoftwareDetails: string;
  posSoftwareActionName: string;
  posSoftwareActionItems: string;
  [key: string]: string | null;
}

export interface AccountingSoftwareFormTypes {
  accountingSoftwareStatus: string;
  accountingSoftwareComments: string;
  accountingSoftwareDetails: string;
  accountingSoftwareActionName: string;
  accountingSoftwareActionItems: string;
  [key: string]: string | null;
}

export interface EstimatingSoftwareFormTypes {
  estimatingSoftwareStatus: string;
  estimatingSoftwareComments: string;
  estimatingSoftwareDetails: string;
  estimatingSoftwareActionName: string;
  estimatingSoftwareActionItems: string;
}

export interface CloudDocumentManagementFormTypes {
  cloudDocumentManagementStatus: string;
  cloudDocumentManagementComments: string;
  cloudDocumentManagementDetails: string;
  cloudDocumentManagementActionName: string;
  cloudDocumentManagementActionItems: string;
}

export interface ScannerFormTypes {
  scannerStatus: string;
  scannerComments: string;
  scannerDetails: string;
  scannerActionName: string;
  scannerActionItems: string;
}

export interface OperatingCheckingAccountFormTypes {
  operatingCheckingAccountStatus: string;
  operatingCheckingAccountComments: string;
  operatingCheckingAccountDetails: string;
  operatingCheckingAccountActionName: string;
  operatingCheckingAccountActionItems: string;
  [key: string]: string | null;
}

export interface SavingsAccountFormTypes {
  savingsAccountStatus: string;
  savingsAccountComments: string;
  savingsAccountDetails: string;
  savingsAccountActionName: string;
  savingsAccountActionItems: string;
  [key: string]: string | null;
}

export interface CreditCardFormTypes {
  creditCardStatus: string;
  creditCardComments: string;
  creditCardDetails: string;
  creditCardActionName: string;
  creditCardActionItems: string;
  [key: string]: string | null;
}

export interface BusinessLoansFormTypes {
  businessLoansStatus: string;
  businessLoansComments: string;
  businessLoansDetails: string;
  businessLoansActionName: string;
  businessLoansActionItems: string;
}

export interface PropertyLoansFormTypes {
  propertyLoansStatus: string;
  propertyLoansComments: string;
  propertyLoansDetails: string;
  propertyLoansActionName: string;
  propertyLoansActionItems: string;
}

export interface PayrollServiceProviderFormTypes {
  payrollServiceProviderStatus: string;
  payrollServiceProviderComments: string;
  payrollServiceProviderDetails: string;
  payrollServiceProviderActionName: string;
  payrollServiceProviderActionItems: string;
  [key: string]: string | null;
}

export interface FrequencyFormTypes {
  frequencyStatus: string;
  frequencyComments: string;
  frequencyDetails: string;
  frequencyActionName: string;
  frequencyActionItems: string;
  [key: string]: string | null;
}

export interface NoOfEmployeeFormTypes {
  noOfEmployeeStatus: string;
  noOfEmployeeComments: string;
  noOfEmployeeDetails: string;
  noOfEmployeeActionName: string;
  noOfEmployeeActionItems: string;
}

export interface SalesTaxAccessWorkPaperFormTypes {
  salesTaxAccessWorkPaperStatus: string;
  salesTaxAccessWorkPaperComments: string;
  salesTaxAccessWorkPaperDetails: string;
  salesTaxAccessWorkPaperActionName: string;
  salesTaxAccessWorkPaperActionItems: string;
  [key: string]: string | null;
}

export interface UseTaxFormTypes {
  useTaxStatus: string;
  useTaxComments: string;
  useTaxDetails: string;
  useTaxActionName: string;
  useTaxActionItems: string;
  [key: string]: string | null;
}

export interface TireTaxFormTypes {
  tireTaxStatus: string;
  tireTaxComments: string;
  tireTaxDetails: string;
  tireTaxActionName: string;
  tireTaxActionItems: string;
  [key: string]: string | null;
}

export interface LastTaxReturnFiledYearFormTypes {
  lastTaxReturnFiledYearStatus: string;
  lastTaxReturnFiledYearComments: string;
  lastTaxReturnFiledYearDetails: string;
  lastTaxReturnFiledYearActionName: string;
  lastTaxReturnFiledYearActionItems: string;
  [key: string]: string | null;
}

export interface VendorPortalAccessFormTypes {
  vendorPortalAccessStatus: string;
  vendorPortalAccessComments: string;
  vendorPortalAccessDetails: string;
  vendorPortalAccessActionName: string;
  vendorPortalAccessActionItems: string;
  [key: string]: string | null;
}

export interface TradeAccountFormTypes {
  tradeAccountStatus: string;
  tradeAccountComments: string;
  tradeAccountDetails: string;
  tradeAccountActionName: string;
  tradeAccountActionItems: string;
}

export interface BillPayAccessFormTypes {
  billPayAccessStatus: string;
  billPayAccessComments: string;
  billPayAccessDetails: string;
  billPayAccessActionName: string;
  billPayAccessActionItems: string;
  [key: string]: string | null;
}

export interface ApThresholdLimitFormTypes {
  apThresholdLimitStatus: string;
  apThresholdLimitComments: string;
  apThresholdLimitDetails: string;
  apThresholdLimitActionName: string;
  apThresholdLimitActionItems: string;
}

export interface LastClosedPeriodFormTypes {
  lastClosedPeriodStatus: string;
  lastClosedPeriodComments: string;
  lastClosedPeriodDetails: string;
  lastClosedPeriodActionName: string;
  lastClosedPeriodActionItems: string;
  [key: string]: string | null;
}

export interface SharingFinancialsFormTypes {
  sharingFinancialsStatus: string;
  sharingFinancialsComments: string;
  sharingFinancialsDetails: string;
  sharingFinancialsActionName: string;
  sharingFinancialsActionItems: string;
}

export interface GroupEmailEstablishedTypes {
  autoCareGroupEmailEstablished: GroupEmailEstablishedFormTypes;
  setAutoCareGroupEmailEstablished: React.Dispatch<
    React.SetStateAction<GroupEmailEstablishedFormTypes>
  >;
}

export interface PreKickOffTypes {
  autoCarePreKickOff: PreKickOffFormTypes;
  setAutoCarePreKickOff: React.Dispatch<
    React.SetStateAction<PreKickOffFormTypes>
  >;
}

export interface KickOffTypes {
  autoCareKickOff: KickOffFormTypes;
  setAutoCareKickOff: React.Dispatch<React.SetStateAction<KickOffFormTypes>>;
}

export interface ITStructureReviewTypes {
  autoCareITStructureReview: ITStructureReviewFormTypes;
  setAutoCareITStructureReview: React.Dispatch<
    React.SetStateAction<ITStructureReviewFormTypes>
  >;
}

export interface AccessComputerMethodTypes {
  autoCareAccessComputerMethod: AccessComputerFormTypes;
  setAutoCareAccessComputerMethod: React.Dispatch<
    React.SetStateAction<AccessComputerFormTypes>
  >;
}

export interface PosSoftwareTypes {
  autoCarePosSoftware: PosSoftwareFormTypes;
  setAutoCarePosSoftware: React.Dispatch<
    React.SetStateAction<PosSoftwareFormTypes>
  >;
  posErrors: autoCareSystemLocationChecklistErrors;
}

export interface PosFormErrors extends Partial<PosSoftwareFormTypes> {}

export interface EstimatingSoftwareTypes {
  autoCareEstimatingSoftware: EstimatingSoftwareFormTypes;
  setAutoCareEstimatingSoftware: React.Dispatch<
    React.SetStateAction<EstimatingSoftwareFormTypes>
  >;
}

export interface AccountingSoftwareTypes {
  autoCareAccountingSoftware: AccountingSoftwareFormTypes;
  setAutoCareAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareFormTypes>
  >;
  accountingSoftwareErrors: autoCareSystemLocationChecklistErrors;
}

export interface AccountingSoftwareFormErrors extends Partial<AccountingSoftwareFormTypes> {}

export interface CloudDocumentManagementTypes {
  autoCareCloudDocumentManagement: CloudDocumentManagementFormTypes;
  setAutoCareCloudDocumentManagement: React.Dispatch<
    React.SetStateAction<CloudDocumentManagementFormTypes>
  >;
}

export interface ScannerTypes {
  autoCareScanner: ScannerFormTypes;
  setAutoCareScanner: React.Dispatch<React.SetStateAction<ScannerFormTypes>>;
}

export interface OperatingCheckingAccountTypes {
  autoCareOperatingCheckingAccount: OperatingCheckingAccountFormTypes;
  setAutoCareOperatingCheckingAccount: React.Dispatch<
    React.SetStateAction<OperatingCheckingAccountFormTypes>
  >;
  operatingCheckingAccountErrors:autoCareCashBankLoansErrors;
}

export interface OperatingCheckingAccountFormErrors extends Partial<OperatingCheckingAccountFormTypes> {}

export interface SavingsAccountTypes {
  autoCareSavingsAccount: SavingsAccountFormTypes;
  setAutoCareSavingsAccount: React.Dispatch<
    React.SetStateAction<SavingsAccountFormTypes>
  >;
  savingsAccountErrors:autoCareCashBankLoansErrors;
}

export interface SavingsAccountFormErrors extends Partial<SavingsAccountFormTypes> {}

export interface CreditCardTypes {
  autoCareCreditCard: CreditCardFormTypes;
  setAutoCareCreditCard: React.Dispatch<
    React.SetStateAction<CreditCardFormTypes>
  >;
  creditCardErrors:autoCareCashBankLoansErrors;
}

export interface CreditCardFormErrors extends Partial<CreditCardFormTypes> {}

export interface BusinessLoansTypes {
  autoCareBusinessLoans: BusinessLoansFormTypes;
  setAutoCareBusinessLoans: React.Dispatch<
    React.SetStateAction<BusinessLoansFormTypes>
  >;
}

export interface PropertyLoansTypes {
  autoCarePropertyLoans: PropertyLoansFormTypes;
  setAutoCarePropertyLoans: React.Dispatch<
    React.SetStateAction<PropertyLoansFormTypes>
  >;
}

export interface PayrollServiceProviderTypes {
  autoCarePayrollServiceProvider: PayrollServiceProviderFormTypes;
  setAutoCarePayrollServiceProvider: React.Dispatch<
    React.SetStateAction<PayrollServiceProviderFormTypes>
  >;
  payrollServiceProviderError:autoCarePayrollSystemErrors;
}

export interface PayrollServiceProviderFormErrors extends Partial<PayrollServiceProviderFormTypes> {}

export interface FrequencyTypes {
  autoCareFrequency: FrequencyFormTypes;
  setAutoCareFrequency: React.Dispatch<
    React.SetStateAction<FrequencyFormTypes>
  >;
  frequencyErrors:autoCarePayrollSystemErrors;
}

export interface FrequencyFormErrors extends Partial<FrequencyFormTypes> {}

export interface NoOfEmployeeTypes {
  autoCareNoOfEmployee: NoOfEmployeeFormTypes;
  setAutoCareNoOfEmployee: React.Dispatch<
    React.SetStateAction<NoOfEmployeeFormTypes>
  >;
}

export interface SalesTaxAccessWorkPaperTypes {
  autoCareSalesTaxAccessWorkPaper: SalesTaxAccessWorkPaperFormTypes;
  setAutoCareSalesTaxAccessWorkPaper: React.Dispatch<
    React.SetStateAction<SalesTaxAccessWorkPaperFormTypes>
  >;
  salesTaxAccessWorkPaperErrors:autoCareCompliancesErrors;
}

export interface SalesTaxAccessWorkPaperFormErrors extends Partial<SalesTaxAccessWorkPaperFormTypes> {}

export interface UseTaxTypes {
  autoCareUseTax: UseTaxFormTypes;
  setAutoCareUseTax: React.Dispatch<React.SetStateAction<UseTaxFormTypes>>;
  useTaxErrors:autoCareCompliancesErrors;
}

export interface UseTaxFormErrors extends Partial<UseTaxFormTypes> {}

export interface TireTaxTypes {
  autoCareTireTax: TireTaxFormTypes;
  setAutoCareTireTax: React.Dispatch<React.SetStateAction<TireTaxFormTypes>>;
  tireTaxErrors:autoCareCompliancesErrors;
}

export interface TireTaxFormErrors extends Partial<TireTaxFormTypes> {}

export interface LastTaxReturnFiledYearTypes {
  autoCareLastTaxReturnFiledYear: LastTaxReturnFiledYearFormTypes;
  setAutoCareLastTaxReturnFiledYear: React.Dispatch<
    React.SetStateAction<LastTaxReturnFiledYearFormTypes>
  >;
  lastTaxReturnFiledYearErrors:autoCareCompliancesErrors;
}

export interface LastTaxReturnFiledYearFormErrors extends Partial<LastTaxReturnFiledYearFormTypes> {}

export interface VendorPortalAccessTypes {
  autoCareVendorPortalAccess: VendorPortalAccessFormTypes;
  setAutoCareVendorPortalAccess: React.Dispatch<
    React.SetStateAction<VendorPortalAccessFormTypes>
  >;
  vendorPortalAccessErrors:autoCarePayableCashPayAccessErrors
}

export interface VendorPortalAccessFormErrors extends Partial<VendorPortalAccessFormTypes> {}

export interface TradeAccountTypes {
  autoCareTradeAccount: TradeAccountFormTypes;
  setAutoCareTradeAccount: React.Dispatch<
    React.SetStateAction<TradeAccountFormTypes>
  >;
}

export interface BillPayAccessTypes {
  autoCareBillPayAccess: BillPayAccessFormTypes;
  setAutoCareBillPayAccess: React.Dispatch<
    React.SetStateAction<BillPayAccessFormTypes>
  >;
  billPayAccessErrors:autoCarePayableCashPayAccessErrors
}

export interface BillPayAccessFormErrors extends Partial<BillPayAccessFormTypes> {}

export interface ApThresholdLimitTypes {
  autoCareApThresholdLimit: ApThresholdLimitFormTypes;
  setAutoCareApThresholdLimit: React.Dispatch<
    React.SetStateAction<ApThresholdLimitFormTypes>
  >;
}

export interface LastClosedPeriodTypes {
  autoCareLastClosedPeriod: LastClosedPeriodFormTypes;
  setAutoCareLastClosedPeriod: React.Dispatch<
    React.SetStateAction<LastClosedPeriodFormTypes>
  >;
  lastClosedPeriodErrors: LastClosedPeriodFormErrors
}

export interface LastClosedPeriodFormErrors extends Partial<LastClosedPeriodFormTypes> {}

export interface SharingFinancialsTypes {
  autoCareSharingFinancials: SharingFinancialsFormTypes;
  setAutoCareSharingFinancials: React.Dispatch<
    React.SetStateAction<SharingFinancialsFormTypes>
  >;
}

