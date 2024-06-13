export interface autoCareLocationDetailsFormTypes {
  locationDetailsName: string;
  locationDetailsDetails: string;
}

export interface autoCareSalesTaxDetailsFormTypes {
  salesTaxDetailsUserId: string;
  salesTaxDetailsDetails: string;
}

export interface autoCarePosDetailsFormTypes {
  posDetailsPos: string;
  posDetailsServerName: string;
  posDetailsPersonalKey: string;
  posDetailsUserName: string;
  posDetailsPassword: string;
  posDetailsNotes_Status: string;
}

export interface autoCareUtilitiesFormTypes {
  utilitiesLocation: string;
  utilitiesUtilities: string;
  utilitiesService: string;
  utilitiesAccount_CustomerNo: string;
  utilitiesUser: string;
  utilitiesPassword: string;
  utilitiesWebsite: string;
  utilitiesNotes_Status: string;
  utilitiesAhi_Notes: string;
}

export interface autoCareVendorDetailsFormTypes {
  vendorDetailsNo: string;
  vendorDetailsLocation: string;
  vendorDetailsName: string;
  vendorDetailsService: string;
  vendorDetailsLoginLink: string;
  vendorDetailsUserId: string;
  vendorDetailsPassword: string;
  vendorDetailsNotes_Status: string;
  vendorDetailsClientComments: string;
}

export interface autoCareBankDetailsLoansFormTypes {
  bankDetailsLoansName: string;
  bankDetailsLoansType: string;
  bankDetailsLoansSiteLink: string;
  bankDetailsLoansCompanyId: string;
  bankDetailsLoansUserId: string;
  bankDetailsLoansPassword: string;
  bankDetailsLoansSercurityQuestions: string;
  bankDetailsLoansAnswer: string;
  bankDetailsLoansNotes_Status: string;
}

export interface autoCareMerchantDetailsFormTypes {
  merchantDetailsNumber: string;
  merchantDetailsName: string;
  merchantDetailsLink: string;
  merchantDetailsUserId: string;
  merchantDetailsPassword: string;
  merchantDetailsAccountId: string;
  merchantDetailsPasscode: string;
  merchantDetailNotes_Status: string;
}

export interface autoCarePayrollDetailsFormTypes {
  payrollDetailsCompanyName: string;
  payrollDetailsLink: string;
  payrollDetailsUserId: string;
  payrollDetailsPassword: string;
  payrollDetailsPasscode: string;
  payrollDetailsNotes_Status: string;
}

export interface autoCareLocationDetailsTypes {
  className?:string,
  locationDetailsRows:autoCareLocationDetailsFormTypes[],
  setLocationDetailsRows:React.Dispatch<React.SetStateAction<autoCareLocationDetailsFormTypes[]>>,
}

export interface autoCareSalesTaxDetailsTypes {
  className?:string,
  salesTaxDetailsRows:autoCareSalesTaxDetailsFormTypes[],
  setSalesTaxDetailsRows:React.Dispatch<React.SetStateAction<autoCareSalesTaxDetailsFormTypes[]>>,
}

export interface autoCarePosDetailsTypes {
  className?:string,
  posDetailsRows:autoCarePosDetailsFormTypes[],
  setPosDetailsRows:React.Dispatch<React.SetStateAction<autoCarePosDetailsFormTypes[]>>,
}

export interface autoCareUtilitiesTypes {
  className?:string,
  utilitiesRows:autoCareUtilitiesFormTypes[],
  setUtilitiesRows:React.Dispatch<React.SetStateAction<autoCareUtilitiesFormTypes[]>>,
}

export interface autoCareVendorDetailsTypes {
  className?:string,
  vendorDetailsRows:autoCareVendorDetailsFormTypes[],
  setVendorDetailsRows:React.Dispatch<React.SetStateAction<autoCareVendorDetailsFormTypes[]>>,
}

export interface autoCareBankDetailsLoansTypes {
  className?:string,
  bankDetailsLoansRows:autoCareBankDetailsLoansFormTypes[],
  setBankDetailsLoansRows:React.Dispatch<React.SetStateAction<autoCareBankDetailsLoansFormTypes[]>>,
}

export interface autoCareMerchantDetailsTypes {
  className?:string,
  merchantDetailsRows:autoCareMerchantDetailsFormTypes[],
  setMerchantDetailsRows:React.Dispatch<React.SetStateAction<autoCareMerchantDetailsFormTypes[]>>,
}

export interface autoCarePayrollDetailsTypes {
  className?:string,
  payrollDetailsRows:autoCarePayrollDetailsFormTypes[],
  setPayrollDetailsRows:React.Dispatch<React.SetStateAction<autoCarePayrollDetailsFormTypes[]>>,
}
