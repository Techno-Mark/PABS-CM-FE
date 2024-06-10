import { ReactNode } from "react";

export interface ChecklistAccordianProps {
  title: string;
  children: ReactNode;
  expandedAccordian: boolean;
  handleChange: any;
  // setExpandedAccordian:React.Dispatch<React.SetStateAction<number>>
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

export interface PosSystemFormTypes {
  posSystemStatus: string;
  posSystemComments: string;
  posSystemDetails: string;
  posSystemActionName: string;
  posSystemActionItems: string;
}

export interface AccountingSoftwareFormTypes {
  accountingSoftwareStatus: string;
  accountingSoftwareComments: string;
  accountingSoftwareDetails: string;
  accountingSoftwareActionName: string;
  accountingSoftwareActionItems: string;
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
}

export interface SavingsAccountFormTypes {
  savingsAccountStatus: string;
  savingsAccountComments: string;
  savingsAccountDetails: string;
  savingsAccountActionName: string;
  savingsAccountActionItems: string;
}

export interface CreditCardFormTypes {
  creditCardStatus: string;
  creditCardComments: string;
  creditCardDetails: string;
  creditCardActionName: string;
  creditCardActionItems: string;
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
}

export interface FrequencyFormTypes {
  frequencyStatus: string;
  frequencyComments: string;
  frequencyDetails: string;
  frequencyActionName: string;
  frequencyActionItems: string;
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
}

export interface UseTaxFormTypes {
  useTaxStatus: string;
  useTaxComments: string;
  useTaxDetails: string;
  useTaxActionName: string;
  useTaxActionItems: string;
}

export interface TireTaxFormTypes {
  tireTaxStatus: string;
  tireTaxComments: string;
  tireTaxDetails: string;
  tireTaxActionName: string;
  tireTaxActionItems: string;
}

export interface LastTaxReturnFiledYearFormTypes {
  lastTaxReturnFiledYearStatus: string;
  lastTaxReturnFiledYearComments: string;
  lastTaxReturnFiledYearDetails: string;
  lastTaxReturnFiledYearActionName: string;
  lastTaxReturnFiledYearActionItems: string;
}

export interface VendorPortalAccessFormTypes {
  vendorPortalAccessStatus: string;
  vendorPortalAccessComments: string;
  vendorPortalAccessDetails: string;
  vendorPortalAccessActionName: string;
  vendorPortalAccessActionItems: string;
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
}

export interface SharingFinancialsFormTypes {
  sharingFinancialsStatus: string;
  sharingFinancialsComments: string;
  sharingFinancialsDetails: string;
  sharingFinancialsActionName: string;
  sharingFinancialsActionItems: string;
}

export interface GP_GMNP_NMFormTypes {
  gpGmnpNmStatus: string;
  gpGmnpNmComments: string;
  gpGmnpNmDetails: string;
  gpGmnpNmActionName: string;
  gpGmnpNmActionItems: string;
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

export interface PosSystemTypes {
  autoCarePosSystem: PosSystemFormTypes;
  setAutoCarePosSystem: React.Dispatch<
    React.SetStateAction<PosSystemFormTypes>
  >;
  posErrors:PosFormErrors
}

export interface PosFormErrors extends Partial<PosSystemFormTypes> {}

export interface AccountingSoftwareTypes {
  autoCareAccountingSoftware: AccountingSoftwareFormTypes;
  setAutoCareAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareFormTypes>
  >;
}

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
}

export interface SavingsAccountTypes {
  autoCareSavingsAccount: SavingsAccountFormTypes;
  setAutoCareSavingsAccount: React.Dispatch<
    React.SetStateAction<SavingsAccountFormTypes>
  >;
}

export interface CreditCardTypes {
  autoCareCreditCard: CreditCardFormTypes;
  setAutoCareCreditCard: React.Dispatch<
    React.SetStateAction<CreditCardFormTypes>
  >;
}

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
}

export interface FrequencyTypes {
  autoCareFrequency: FrequencyFormTypes;
  setAutoCareFrequency: React.Dispatch<
    React.SetStateAction<FrequencyFormTypes>
  >;
}

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
}

export interface UseTaxTypes {
  autoCareUseTax: UseTaxFormTypes;
  setAutoCareUseTax: React.Dispatch<React.SetStateAction<UseTaxFormTypes>>;
}

export interface TireTaxTypes {
  autoCareTireTax: TireTaxFormTypes;
  setAutoCareTireTax: React.Dispatch<React.SetStateAction<TireTaxFormTypes>>;
}

export interface LastTaxReturnFiledYearTypes {
  autoCareLastTaxReturnFiledYear: LastTaxReturnFiledYearFormTypes;
  setAutoCareLastTaxReturnFiledYear: React.Dispatch<
    React.SetStateAction<LastTaxReturnFiledYearFormTypes>
  >;
}

export interface VendorPortalAccessTypes {
  autoCareVendorPortalAccess: VendorPortalAccessFormTypes;
  setAutoCareVendorPortalAccess: React.Dispatch<
    React.SetStateAction<VendorPortalAccessFormTypes>
  >;
}

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
}

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
}

export interface SharingFinancialsTypes {
  autoCareSharingFinancials: SharingFinancialsFormTypes;
  setAutoCareSharingFinancials: React.Dispatch<
    React.SetStateAction<SharingFinancialsFormTypes>
  >;
}

export interface GP_GMNP_NMTypes {
  autoCareGP_GMNP_NM: GP_GMNP_NMFormTypes;
  setAutoCareGP_GMNP_NM: React.Dispatch<
    React.SetStateAction<GP_GMNP_NMFormTypes>
  >;
}
