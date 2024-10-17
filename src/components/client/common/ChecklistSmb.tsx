import { Button } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
// Types import
import { callAPIwithHeaders } from "@/api/commonFunction";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import SmbBankingAccessChecklist from "@/components/client/forms/smb/SmbBankingAccessChecklist";
import SmbExistingFinancialsChecklist from "@/components/client/forms/smb/SmbExistingFinancialsChecklist";
import SmbMeetingChecklist from "@/components/client/forms/smb/SmbMeetingChecklist";
import SmbPeopleBusinessChecklist from "@/components/client/forms/smb/SmbPeopleBusinessChecklist";
import SmbSystemAccessChecklist from "@/components/client/forms/smb/SmbSystemAccessChecklist";
import { showToast } from "@/components/ToastContainer";
import {
  AccessAccountingSoftwareFormTypes,
  AccessCreditCardFormTypes,
  AccessCreditCardPortalFormTypes,
  AccessSavingAccountFormTypes,
  AccountingMethodFormTypes,
  AddCardsFormTypes,
  AddressFormTypes,
  ApBillsFormTypes,
  BusinessNatureFormTypes,
  ClientNameFormTypes,
  ClientWebsiteFormTypes,
  ContactNumberFormTypes,
  ContactOfCpaFormTypes,
  ConvenientFormTypes,
  DepartmentFormTypes,
  DimensionsFormTypes,
  DistributionListFormTypes,
  DropboxSetUpFormTypes,
  EmailFormTypes,
  ExpensePaymentPortalAccessFormTypes,
  FEINFormTypes,
  FieldMapEntry,
  FiscalYearEndFormTypes,
  FormDetails,
  LastClosedMonthFormTypes,
  LiveDateFormTypes,
  MerchantAccountPortalAccessFormTypes,
  ModeOfPaymentFormTypes,
  OnboardingPocFormTypes,
  OperationsPocFormTypes,
  PABSGroupEmailFormTypes,
  PayrollFrequencyFormTypes,
  PayrollServiceAccessFormTypes,
  PocFormTypes,
  PointSalesAccessFormTypes,
  SMBType,
  SalesTaxPortalAccessFormTypes,
  SavingAccountFormTypes,
  TaxReturnFormTypes,
  TimeSlotFormTypes,
  TimeZoneFormTypes,
  TypeOfEntityFormTypes,
  smbCashBankingAccessErrors,
  smbExistingFinancialsChecklistErrors,
  smbMeetingAvailabilityErrors,
  smbPeopleBusinessErrors,
  smbSystemDocumentAccessErrors,
} from "@/models/smbChecklist";
import { onboardingSaveFormUrl } from "@/static/apiUrl";
import { AccordianExpand } from "@/static/autoCareChecklist";
import {
  fieldDisplayNamesSmbBankingAccess,
  fieldDisplayNamesSmbExistingFinancials,
  fieldDisplayNamesSmbMeeting,
  fieldDisplayNamesSmbPeopleBusiness,
  fieldDisplayNamesSmbSystemAccess,
  initialAccessAccountingSoftware,
  initialAccessCreditCard,
  initialAccessCreditCardPortal,
  initialAccessLoanAccount,
  initialAccessSavingAccount,
  initialAccountingMethod,
  initialAddCards,
  initialAddress,
  initialApBills,
  initialBusinessNature,
  initialClientName,
  initialClientWebsite,
  initialContactNumber,
  initialContactOfCpa,
  initialConvenient,
  initialDepartment,
  initialDimensions,
  initialDistributionList,
  initialDropboxSetUp,
  initialEmail,
  initialExpensepaymentPortalAccess,
  initialFEIN,
  initialFiscalYearEnd,
  initialLastClosedMonth,
  initialLiveDate,
  initialMerchantAccountPortalAccess,
  initialModeOfPayment,
  initialOnboardingPoc,
  initialOperationsPoc,
  initialPABSGroupEmail,
  initialPayrollFrequency,
  initialPayrollServiceAccess,
  initialPoc,
  initialPointSalesAccess,
  initialSalesTaxPortalAccess,
  initialSavingAccount,
  initialTaxReturn,
  initialTimeSlot,
  initialTimeZone,
  initialTypeOfEntity,
  validateSmbBankingAccessField,
  validateSmbExistingFinancialsField,
  validateSmbMeetingField,
  validateSmbPeopleBusinessField,
  validateSmbSystemAccessField,
} from "@/static/smbChecklist";
import { ToastType } from "@/static/toastType";

function ChecklistSmb({
  clientInfo,
  setSMBChecklistCount,
  formDetails,
  getFormDetials,
  setIsOpenModal,
  responseData,
  setSmbFormSubmittedStatus,
  isFormLocked,
}: SMBType) {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");
  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);
  const initialSmbPeopleBusinessErrors: smbPeopleBusinessErrors = {};
  const initialSmbSystemDocumentAccessErrors: smbSystemDocumentAccessErrors = {};
  const initialSmbCashBankingAccessErrors: smbCashBankingAccessErrors = {};
  const initialSmbExistingFinancialsChecklistErrors: smbExistingFinancialsChecklistErrors = {};
  const initialSmbMeetingChecklistErrors: smbMeetingAvailabilityErrors = {};

  // phase 1
  const [smbClientName, setSmbClientName] = useState<ClientNameFormTypes>(initialClientName);
  const [smbTypeOfEntity, setSmbTypeOfEntity] = useState<TypeOfEntityFormTypes>(initialTypeOfEntity);
  const [smbBusinessNature, setSmbBusinessNature] = useState<BusinessNatureFormTypes>(initialBusinessNature);
  const [smbDimensions, setSmbDimensions] = useState<DimensionsFormTypes>(initialDimensions);
  const [smbPoc, setSmbPoc] = useState<PocFormTypes>(initialPoc);
  const [smbEmail, setSmbEmail] = useState<EmailFormTypes>(initialEmail);
  const [smbContactNumber, setSmbContactNumber] = useState<ContactNumberFormTypes>(initialContactNumber);
  const [smbAddress, setSmbAddress] = useState<AddressFormTypes>(initialAddress);
  const [smbClientWebsite, setSmbClientWebsite] = useState<ClientWebsiteFormTypes>(initialClientWebsite);
  const [smbDepartment, setSmbDepartment] = useState<DepartmentFormTypes>(initialDepartment);
  const [smbOperationsPoc, setSmbOperationsPoc] = useState<OperationsPocFormTypes>(initialOperationsPoc);
  const [smbOnboardingPoc, setSmbOnboardingPoc] = useState<OnboardingPocFormTypes>(initialOnboardingPoc);

  // phase 2:
  const [smbPABSGroupEmail, setSmbPABSGroupEmail] = useState<PABSGroupEmailFormTypes>(initialPABSGroupEmail);
  const [smbAccessAccountingSoftware, setSmbAccessAccountingSoftware] = useState<AccessAccountingSoftwareFormTypes>(initialAccessAccountingSoftware);
  const [smbDropboxSetUp, setSmbDropboxSetUp] = useState<DropboxSetUpFormTypes>(initialDropboxSetUp);
  const [smbSalesTaxPortalAccess, setSmbSalesTaxPortalAccess] = useState<SalesTaxPortalAccessFormTypes>(initialSalesTaxPortalAccess);
  const [smbMerchantAccountPortalAccess, setSmbMerchantAccountPortalAccess] = useState<MerchantAccountPortalAccessFormTypes>(initialMerchantAccountPortalAccess);
  const [smbPayrollServiceAccess, setSmbPayrollServiceAccess] = useState<PayrollServiceAccessFormTypes>(initialPayrollServiceAccess);
  const [smbPayrollFrequency, setSmbPayrollFrequency] = useState<PayrollFrequencyFormTypes>(initialPayrollFrequency);
  const [smbExpensePaymentPortalAccess, setSmbExpensePaymentPortalAccess] = useState<ExpensePaymentPortalAccessFormTypes>(initialExpensepaymentPortalAccess);
  const [smbModeOfPayment, setSmbModeOfPayment] = useState<ModeOfPaymentFormTypes>(initialModeOfPayment);
  const [smbApBills, setSmbApBills] = useState<ApBillsFormTypes>(initialApBills);
  const [smbPointSalesAccess, setSmbPointSalesAccess] = useState<PointSalesAccessFormTypes>(initialPointSalesAccess);

  //phase 3:
  const [smbSavingAccount, setSmbSavingAccount] = useState<SavingAccountFormTypes>(initialSavingAccount);
  const [smbAccessSavingAccount, setSmbAccessSavingAccount] = useState<AccessSavingAccountFormTypes>(initialAccessSavingAccount);
  const [smbAddCards, setSmbAddCards] = useState<AddCardsFormTypes>(initialAddCards);
  const [smbAccessCreditCard, setSmbAccessCreditCard] = useState<AccessCreditCardFormTypes>(initialAccessCreditCard);
  const [smbAccessLoanAccount, setSmbAccessLoanAccount] = useState<any>(initialAccessLoanAccount);
  const [smbAccessCreditCardPortal, setSmbAccessCreditCardPortal] = useState<AccessCreditCardPortalFormTypes>(initialAccessCreditCardPortal);

  //phase 4:
  const [smbLiveDate, setSmbLiveDate] = useState<LiveDateFormTypes>(initialLiveDate);
  const [smbAccountingMethod, setSmbAccountingMethod] = useState<AccountingMethodFormTypes>(initialAccountingMethod);
  const [smbFEIN, setSmbFEIN] = useState<FEINFormTypes>(initialFEIN);
  const [smbFiscalYearEnd, setSmbFiscalYearEnd] = useState<FiscalYearEndFormTypes>(initialFiscalYearEnd);
  const [smbLastClosedMonth, setSmbLastClosedMonth] = useState<LastClosedMonthFormTypes>(initialLastClosedMonth);
  const [smbContactOfCpa, setSmbContactOfCpa] = useState<ContactOfCpaFormTypes>(initialContactOfCpa);
  const [smbTaxReturn, setSmbTaxReturn] = useState<TaxReturnFormTypes>(initialTaxReturn);
  const [smbDistributionList, setSmbDistributionList] = useState<DistributionListFormTypes>(initialDistributionList);

  //phase 5:
  const [smbTimeZone, setSmbTimeZone] = useState<TimeZoneFormTypes>(initialTimeZone);
  const [smbConvenient, setSmbConvenient] = useState<ConvenientFormTypes>(initialConvenient);
  const [smbTimeSlot, setSmbTimeSlot] = useState<TimeSlotFormTypes>(initialTimeSlot);

  // Error state
  const [smbPeopleBusinessErrors, setSmbPeopleBusinessErrors] = useState<smbPeopleBusinessErrors>(initialSmbPeopleBusinessErrors);
  const [smbPeopleBusinessHasErrors, setSmbPeopleBusinessHasErrors] = useState<boolean>(false);
  const [smbSystemDocumentAccessErrors, setSmbSystemDocumentAccessErrors] = useState<smbSystemDocumentAccessErrors>(initialSmbSystemDocumentAccessErrors);
  const [smbSystemDocumentAccessHasErrors, setSmbSystemDocumentAccessHasErrors] = useState<boolean>(false);
  const [smbCashBankingAccessErrors, setSmbCashBankingAccessErrors] = useState<smbCashBankingAccessErrors>(initialSmbCashBankingAccessErrors);
  const [smbCashBankingAccessHasErrors, setSmbCashBankingAccessHasErrors] = useState<boolean>(false);
  const [smbExistingFinancialsChecklistErrors, setSmbExistingFinancialsChecklistErrors] = useState<smbExistingFinancialsChecklistErrors>(initialSmbExistingFinancialsChecklistErrors);
  const [
    smbExistingFinancialsChecklistHasErrors,
    setSmbExistingFinancialsChecklistHasErrors
  ] = useState<boolean>(false);
  const [smbMeetingChecklistErrors, setSmbMeetingChecklistErrors] =
    useState<smbMeetingAvailabilityErrors>(initialSmbMeetingChecklistErrors);
  const [smbMeetingChecklistHasErrors, setSmbMeetingChecklistHasErrors] =
    useState<boolean>(false);

  const [peopleBusinessChecked, setPeopleBusinessChecked] =
    useState<boolean>(true);
  const [systemDocumentAccessChecked, setSystemDocumentAccessChecked] =
    useState<boolean>(true);
  const [cashBanksLoansChecked, setCashBanksLoansChecked] =
    useState<boolean>(true);
  const [
    conditionExistingFinancialsChecked,
    setConditionExistingFinancialsChecked,
  ] = useState<boolean>(true);
  const [meetingAvailabilityChecked, setMeetingAvailabilityChecked] =
    useState<boolean>(true);

  const [isSubmitedSmbChecklist, setIsSubmitedSmbChecklist] =
    useState<boolean>(false);
  const [isOpenConfirmationSubmit, setIsOpenConfirmationSubmit] =
    useState<boolean>(false);

  useEffect(() => {
    if (formDetails) {
      const fieldMap: { [key: string]: FieldMapEntry } = {
        "Client Name": {
          setter: setSmbClientName,
          keys: {
            status: "ClientNameStatus",
            details: "ClientNameDetails",
            actionItems: "ClientNameActionItems",
          },
        },
        "Type of Entity": {
          setter: setSmbTypeOfEntity,
          keys: {
            status: "TypeOfEntityStatus",
            details: "TypeOfEntityDetails",
            actionItems: "TypeOfEntityActionItems",
          },
        },
        "Nature of Business": {
          setter: setSmbBusinessNature,
          keys: {
            status: "BusinessNatureStatus",
            details: "BusinessNatureDetails",
            actionItems: "BusinessNatureActionItems",
          },
        },
        "Any Other Subsidiary or Verticles or Dimensions": {
          setter: setSmbDimensions,
          keys: {
            status: "DimensionsStatus",
            details: "DimensionsDetails",
            actionItems: "DimensionsActionItems",
          },
        },
        POC: {
          setter: setSmbPoc,
          keys: {
            status: "PocStatus",
            details: "PocDetails",
            actionItems: "PocActionItems",
          },
        },
        Email: {
          setter: setSmbEmail,
          keys: {
            status: "EmailStatus",
            details: "EmailDetails",
            actionItems: "EmailActionItems",
          },
        },
        "Contact Number": {
          setter: setSmbContactNumber,
          keys: {
            status: "ContactNumberStatus",
            details: "ContactNumberDetails",
            actionItems: "ContactNumberActionItems",
          },
        },
        Address: {
          setter: setSmbAddress,
          keys: {
            status: "AddressStatus",
            details: "AddressDetails",
            actionItems: "AddressActionItems",
          },
        },
        "Client Website": {
          setter: setSmbClientWebsite,
          keys: {
            status: "ClientWebsiteStatus",
            details: "ClientWebsiteDetails",
            actionItems: "ClientWebsiteActionItems",
          },
        },
        "Department Head": {
          setter: setSmbDepartment,
          keys: {
            status: "DepartmentStatus",
            details: "DepartmentDetails",
            actionItems: "DepartmentActionItems",
          },
        },
        "Operations POC": {
          setter: setSmbOperationsPoc,
          keys: {
            status: "OperationsPocStatus",
            details: "OperationsPocDetails",
            actionItems: "OperationsPocActionItems",
          },
        },
        "Onboarding POC": {
          setter: setSmbOnboardingPoc,
          keys: {
            status: "OnboardingPocStatus",
            details: "OnboardingPocDetails",
            actionItems: "OnboardingPocActionItems",
          },
        },
        "PABS Group Email": {
          setter: setSmbPABSGroupEmail,
          keys: {
            status: "pabsGroupEmailStatus",
            details: "pabsGroupEmailDetails",
            actionItems: "pabsGroupEmailActionItems",
          },
        },
        "Provide Access to Accounting Software": {
          setter: setSmbAccessAccountingSoftware,
          keys: {
            status: "AccessAccountingSoftwareStatus",
            details: "AccessAccountingSoftwareDetails",
            actionItems: "AccessAccountingSoftwareActionItems",
          },
        },
        "Dropbox Set-Up": {
          setter: setSmbDropboxSetUp,
          keys: {
            status: "DropboxSetUpStatus",
            details: "DropboxSetUpDetails",
            actionItems: "DropboxSetUpActionItems",
          },
        },
        "Provide Access to Sales Tax Portal Access": {
          setter: setSmbSalesTaxPortalAccess,
          keys: {
            status: "salesTaxPortalAccessStatus",
            details: "salesTaxPortalAccessDetails",
            actionItems: "salesTaxPortalAccessActionItems",
          },
        },
        "Merchant Account Portal Access (If Any)": {
          setter: setSmbMerchantAccountPortalAccess,
          keys: {
            status: "merchantAccountPortalAccessStatus",
            details: "merchantAccountPortalAccessDetails",
            actionItems: "merchantAccountPortalAccessActionItems",
          },
        },
        "Payroll Service Provider Access": {
          setter: setSmbPayrollServiceAccess,
          keys: {
            status: "PayrollServiceAccessStatus",
            details: "PayrollServiceAccessDetails",
            actionItems: "PayrollServiceAccessActionItems",
          },
        },
        "No. of Employees on Roll, Payroll Frequency": {
          setter: setSmbPayrollFrequency,
          keys: {
            status: "PayrollFrequencyStatus",
            details: "PayrollFrequencyDetails",
            actionItems: "PayrollFrequencyActionItems",
          },
        },
        "Expense Payment Portal Access (If Any)": {
          setter: setSmbExpensePaymentPortalAccess,
          keys: {
            status: "expensePaymentPortalAccessStatus",
            details: "expensePaymentPortalAccessDetails",
            actionItems: "expensePaymentPortalAccessActionItems",
          },
        },
        "Monthly AP Bills Counts & Mode of Payment": {
          setter: setSmbModeOfPayment,
          keys: {
            status: "ModeOfPaymentStatus",
            details: "ModeOfPaymentDetails",
            actionItems: "ModeOfPaymentActionItems",
          },
        },
        "AP Bills - (Mode of Receiving Bills)": {
          setter: setSmbApBills,
          keys: {
            status: "ApBillsStatus",
            details: "ApBillsDetails",
            actionItems: "ApBillsActionItems",
          },
        },
        "Point of Sales Access": {
          setter: setSmbPointSalesAccess,
          keys: {
            status: "pointSalesAccessStatus",
            details: "pointSalesAccessDetails",
            actionItems: "pointSalesAccessActionItems",
          },
        },
        "No. of Checking & Saving Accounts": {
          setter: setSmbSavingAccount,
          keys: {
            status: "SavingAccountStatus",
            details: "SavingAccountDetails",
            actionItems: "SavingAccountActionItems",
          },
        },
        "Access to Checking/ Saving Accounts": {
          setter: setSmbAccessSavingAccount,
          keys: {
            status: "AccessSavingAccountStatus",
            details: "AccessSavingAccountDetails",
            actionItems: "AccessSavingAccountActionItems",
          },
        },
        "No Credit/Debit Cards Any Add on Cards": {
          setter: setSmbAddCards,
          keys: {
            status: "AddCardsStatus",
            details: "AddCardsDetails",
            actionItems: "AddCardsActionItems",
          },
        },
        "Access for Credit Cards": {
          setter: setSmbAccessCreditCard,
          keys: {
            status: "AccessCreditCardStatus",
            details: "AccessCreditCardDetails",
            actionItems: "AccessCreditCardActionItems",
          },
        },
        "Access to Loan/Loc Account": {
          setter: setSmbAccessLoanAccount,
          keys: {
            status: "AccessLoanAccountStatus",
            details: "AccessLoanAccountDetails",
            actionItems: "AccessLoanAccountActionItems",
          },
        },
        "Go Live Date": {
          setter: setSmbLiveDate,
          keys: {
            status: "LiveDateStatus",
            details: "LiveDateDetails",
            actionItems: "LiveDateActionItems",
          },
        },
        "Method of Accounting": {
          setter: setSmbAccountingMethod,
          keys: {
            status: "AccountingMethodStatus",
            details: "AccountingMethodDetails",
            actionItems: "AccountingMethodActionItems",
          },
        },
        FEIN: {
          setter: setSmbFEIN,
          keys: {
            status: "FEINStatus",
            details: "FEINDetails",
            actionItems: "FEINActionItems",
          },
        },
        "Fiscal Year End": {
          setter: setSmbFiscalYearEnd,
          keys: {
            status: "FiscalYearEndStatus",
            details: "FiscalYearEndDetails",
            actionItems: "FiscalYearEndActionItems",
          },
        },
        "Last Closed Month in Accounting Software": {
          setter: setSmbLastClosedMonth,
          keys: {
            status: "LastClosedMonthStatus",
            details: "LastClosedMonthDetails",
            actionItems: "LastClosedMonthActionItems",
          },
        },
        "Name and Contact of CPA": {
          setter: setSmbContactOfCpa,
          keys: {
            status: "ContactOfCpaStatus",
            details: "ContactOfCpaDetails",
            actionItems: "ContactOfCpaActionItems",
          },
        },
        "Last Year Tax Return 990": {
          setter: setSmbTaxReturn,
          keys: {
            status: "TaxReturnStatus",
            details: "TaxReturnDetails",
            actionItems: "TaxReturnActionItems",
          },
        },
        "Monthly Financials Distribution List": {
          setter: setSmbDistributionList,
          keys: {
            status: "DistributionListStatus",
            details: "DistributionListDetails",
            actionItems: "DistributionListActionItems",
          },
        },
        "Time Zone": {
          setter: setSmbTimeZone,
          keys: {
            status: "TimeZoneStatus",
            details: "TimeZoneDetails",
            actionItems: "TimeZoneActionItems",
          },
        },
        "Convenient Days": {
          setter: setSmbConvenient,
          keys: {
            status: "ConvenientStatus",
            details: "ConvenientDetails",
            actionItems: "ConvenientActionItems",
          },
        },
        "Time Slot Availability": {
          setter: setSmbTimeSlot,
          keys: {
            status: "TimeSlotStatus",
            details: "TimeSlotDetails",
            actionItems: "TimeSlotActionItems",
          },
        },
      };

      formDetails.forEach((f: FormDetails) => {
        const field = fieldMap[f.fieldName];
        if (field) {
          const { setter, keys } = field;
          setter({
            [keys.status]: f.status,
            [keys.details]: f.details,
            [keys.actionItems]: f.actionsOfPabs,
          });
        }
      });
    }
    setSmbFormSubmittedStatus(responseData?.isSubmited ?? false);
    setIsSubmitedSmbChecklist(responseData?.isSubmited ?? false);
    setPeopleBusinessChecked(responseData?.phase1PeopleIsDisplay ?? true);
    setSystemDocumentAccessChecked(responseData?.phase2SystemIsDisplay ?? true);
    setCashBanksLoansChecked(responseData?.phase3CashIsDisplay ?? true);
    setConditionExistingFinancialsChecked(
      responseData?.phase4ConditionIsDisplay ?? true
    );
    setMeetingAvailabilityChecked(responseData?.phase5MeetingIsDisplay ?? true);
  }, [formDetails, responseData]);

  useEffect(() => {
    const counts = smbChecklistStatus();
    setSMBChecklistCount(counts);
  }, [
    smbClientName,
    smbPoc,
    smbEmail,
    smbContactNumber,
    smbAddress,
    smbClientWebsite,
    smbAccessAccountingSoftware,
    smbPayrollServiceAccess,
    smbModeOfPayment,
    smbPointSalesAccess,
    smbSavingAccount,
    smbAddCards,
    smbLiveDate,
    smbLastClosedMonth,
    smbTaxReturn,
    smbDistributionList,
    smbTimeZone,
    smbConvenient,
    smbTimeSlot,
  ]);

  const handleAccordianChange =
    (arg1: number) =>
      (e: ChangeEvent<HTMLInputElement>, isExpanded: boolean) => {
        setExpandedAccordian(isExpanded ? arg1 : -1);
      };

  const validateSmbPeopleBusiness = () => {
    const newPeopleBuinessErrors: { [key: string]: string } = {};

    validateSmbPeopleBusinessField.forEach((field) => {
      if (
        !smbClientName[field] &&
        !smbPoc[field] &&
        !smbEmail[field] &&
        !smbContactNumber[field] &&
        !smbAddress[field] &&
        !smbClientWebsite[field]
      ) {
        newPeopleBuinessErrors[
          field
        ] = `${fieldDisplayNamesSmbPeopleBusiness[field]} is required`;
      } else {
        newPeopleBuinessErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newPeopleBuinessErrors).some(
      (error) => !!error
    );
    setSmbPeopleBusinessErrors(newPeopleBuinessErrors);
    setSmbPeopleBusinessHasErrors(hasErrors);
    return hasErrors;
  };

  const validateSmbSystemDocumentAccess = () => {
    const newSystemDocumentAccessErrors: { [key: string]: string } = {};

    validateSmbSystemAccessField.forEach((field) => {
      if (
        !smbAccessAccountingSoftware[field] &&
        !smbPayrollServiceAccess[field] &&
        !smbModeOfPayment[field] &&
        !smbPointSalesAccess[field]
      ) {
        newSystemDocumentAccessErrors[
          field
        ] = `${fieldDisplayNamesSmbSystemAccess[field]} is required`;
      } else {
        newSystemDocumentAccessErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newSystemDocumentAccessErrors).some(
      (error) => !!error
    );
    setSmbSystemDocumentAccessErrors(newSystemDocumentAccessErrors);
    setSmbSystemDocumentAccessHasErrors(hasErrors);
    return hasErrors;
  };

  const validateSmbCashBankingAccess = () => {
    const newCashBankingAccessErrors: { [key: string]: string } = {};

    validateSmbBankingAccessField.forEach((field) => {
      if (!smbSavingAccount[field] && !smbAddCards[field]) {
        newCashBankingAccessErrors[
          field
        ] = `${fieldDisplayNamesSmbBankingAccess[field]} is required`;
      } else {
        newCashBankingAccessErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newCashBankingAccessErrors).some(
      (error) => !!error
    );
    setSmbCashBankingAccessErrors(newCashBankingAccessErrors);
    setSmbCashBankingAccessHasErrors(hasErrors);
    return hasErrors;
  };

  const validateSmbExistingFinancialsChecklist = () => {
    const newExistingFinancialsChecklistErrors: { [key: string]: string } = {};

    validateSmbExistingFinancialsField.forEach((field) => {
      if (
        !smbLiveDate[field] &&
        !smbLastClosedMonth[field] &&
        !smbTaxReturn[field] &&
        !smbDistributionList[field]
      ) {
        newExistingFinancialsChecklistErrors[
          field
        ] = `${fieldDisplayNamesSmbExistingFinancials[field]} is required`;
      } else {
        newExistingFinancialsChecklistErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newExistingFinancialsChecklistErrors).some(
      (error) => !!error
    );
    setSmbExistingFinancialsChecklistErrors(
      newExistingFinancialsChecklistErrors
    );
    setSmbExistingFinancialsChecklistHasErrors(hasErrors);
    return hasErrors;
  };

  const validateSmbMeetingChecklist = () => {
    const newMeetingChecklistErrors: { [key: string]: string } = {};

    validateSmbMeetingField.forEach((field) => {
      if (!smbTimeZone[field] && !smbConvenient[field] && !smbTimeSlot[field]) {
        newMeetingChecklistErrors[
          field
        ] = `${fieldDisplayNamesSmbMeeting[field]} is required`;
      } else {
        newMeetingChecklistErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newMeetingChecklistErrors).some(
      (error) => !!error
    );
    setSmbMeetingChecklistErrors(newMeetingChecklistErrors);
    setSmbMeetingChecklistHasErrors(hasErrors);
    return hasErrors;
  };

  const handleRemoveErrors = () => {
    setSmbPeopleBusinessErrors({});
    setSmbPeopleBusinessHasErrors(false);
    setSmbSystemDocumentAccessErrors({});
    setSmbSystemDocumentAccessHasErrors(false);
    setSmbCashBankingAccessErrors({});
    setSmbCashBankingAccessHasErrors(false);
    setSmbExistingFinancialsChecklistErrors({});
    setSmbExistingFinancialsChecklistHasErrors(false);
    setSmbMeetingChecklistErrors({});
    setSmbMeetingChecklistHasErrors(false);
  };

  const handleSubmit = (type: number) => {
    const progressCounts = smbChecklistStatus();
    const smbData: any = {
      smbClientName: smbClientName,
      smbTypeOfEntity: smbTypeOfEntity,
      smbBusinessNature: smbBusinessNature,
      smbDimensions: smbDimensions,
      smbPoc: smbPoc,
      smbEmail: smbEmail,
      smbContactNumber: smbContactNumber,
      smbAddress: smbAddress,
      smbClientWebsite: smbClientWebsite,
      smbDepartment: smbDepartment,
      smbOperationsPoc: smbOperationsPoc,
      smbOnboardingPoc: smbOnboardingPoc,
      smbPABSGroupEmail: smbPABSGroupEmail,
      smbAccessAccountingSoftware: smbAccessAccountingSoftware,
      smbDropboxSetUp: smbDropboxSetUp,
      smbSalesTaxPortalAccess: smbSalesTaxPortalAccess,
      smbMerchantAccountPortalAccess: smbMerchantAccountPortalAccess,
      smbPayrollServiceAccess: smbPayrollServiceAccess,
      smbPayrollFrequency: smbPayrollFrequency,
      smbExpensePaymentPortalAccess: smbExpensePaymentPortalAccess,
      smbModeOfPayment: smbModeOfPayment,
      smbApBills: smbApBills,
      smbPointSalesAccess: smbPointSalesAccess,
      smbSavingAccount: smbSavingAccount,
      smbAccessSavingAccount: smbAccessSavingAccount,
      smbAddCards: smbAddCards,
      smbAccessCreditCard: smbAccessCreditCard,
      smbAccessLoanAccount: smbAccessLoanAccount,
      smbAccessCreditCardPortal: smbAccessCreditCardPortal,
      smbLiveDate: smbLiveDate,
      smbAccountingMethod: smbAccountingMethod,
      smbFEIN: smbFEIN,
      smbFiscalYearEnd: smbFiscalYearEnd,
      smbLastClosedMonth: smbLastClosedMonth,
      smbContactOfCpa: smbContactOfCpa,
      smbTaxReturn: smbTaxReturn,
      smbDistributionList: smbDistributionList,
      smbTimeZone: smbTimeZone,
      smbConvenient: smbConvenient,
      smbTimeSlot: smbTimeSlot,
    };

    const fields = [
      {
        fieldName: "Client Name",
        key: "smbClientName",
        fields: [
          "ClientNameStatus",
          "ClientNameDetails",
          "ClientNameActionItems",
        ],
      },
      {
        fieldName: "Type of Entity",
        key: "smbTypeOfEntity",
        fields: [
          "TypeOfEntityStatus",
          "TypeOfEntityDetails",
          "TypeOfEntityActionItems",
        ],
      },
      {
        fieldName: "Nature of Business",
        key: "smbBusinessNature",
        fields: [
          "BusinessNatureStatus",
          "BusinessNatureDetails",
          "BusinessNatureActionItems",
        ],
      },
      {
        fieldName: "Any Other Subsidiary or Verticles or Dimensions",
        key: "smbDimensions",
        fields: [
          "DimensionsStatus",
          "DimensionsDetails",
          "DimensionsActionItems",
        ],
      },
      {
        fieldName: "POC",
        key: "smbPoc",
        fields: ["PocStatus", "PocDetails", "PocActionItems"],
      },
      {
        fieldName: "Email",
        key: "smbEmail",
        fields: ["EmailStatus", "EmailDetails", "EmailActionItems"],
      },
      {
        fieldName: "Contact Number",
        key: "smbContactNumber",
        fields: [
          "ContactNumberStatus",
          "ContactNumberDetails",
          "ContactNumberActionItems",
        ],
      },
      {
        fieldName: "Address",
        key: "smbAddress",
        fields: ["AddressStatus", "AddressDetails", "AddressActionItems"],
      },
      {
        fieldName: "Client Website",
        key: "smbClientWebsite",
        fields: [
          "ClientWebsiteStatus",
          "ClientWebsiteDetails",
          "ClientWebsiteActionItems",
        ],
      },
      {
        fieldName: "Department Head",
        key: "smbDepartment",
        fields: [
          "DepartmentStatus",
          "DepartmentDetails",
          "DepartmentActionItems",
        ],
      },
      {
        fieldName: "Operations POC",
        key: "smbOperationsPoc",
        fields: [
          "OperationsPocStatus",
          "OperationsPocDetails",
          "OperationsPocActionItems",
        ],
      },
      {
        fieldName: "Onboarding POC",
        key: "smbOnboardingPoc",
        fields: [
          "OnboardingPocStatus",
          "OnboardingPocDetails",
          "OnboardingPocActionItems",
        ],
      },
      {
        fieldName: "PABS Group Email",
        key: "smbPABSGroupEmail",
        fields: [
          "pabsGroupEmailStatus",
          "pabsGroupEmailDetails",
          "pabsGroupEmailActionItems",
        ],
      },
      {
        fieldName: "Provide Access to Accounting Software",
        key: "smbAccessAccountingSoftware",
        fields: [
          "AccessAccountingSoftwareStatus",
          "AccessAccountingSoftwareDetails",
          "AccessAccountingSoftwareActionItems",
        ],
      },
      {
        fieldName: "Dropbox Set-Up",
        key: "smbDropboxSetUp",
        fields: [
          "DropboxSetUpStatus",
          "DropboxSetUpDetails",
          "DropboxSetUpActionItems",
        ],
      },
      {
        fieldName: "Provide Access to Sales Tax Portal Access",
        key: "smbSalesTaxPortalAccess",
        fields: [
          "salesTaxPortalAccessStatus",
          "salesTaxPortalAccessDetails",
          "salesTaxPortalAccessActionItems",
        ],
      },
      {
        fieldName: "Merchant Account Portal Access (If Any)",
        key: "smbMerchantAccountPortalAccess",
        fields: [
          "merchantAccountPortalAccessStatus",
          "merchantAccountPortalAccessDetails",
          "merchantAccountPortalAccessActionItems",
        ],
      },
      {
        fieldName: "Payroll Service Provider Access",
        key: "smbPayrollServiceAccess",
        fields: [
          "PayrollServiceAccessStatus",
          "PayrollServiceAccessDetails",
          "PayrollServiceAccessActionItems",
        ],
      },
      {
        fieldName: "No. of Employees on Roll, Payroll Frequency",
        key: "smbPayrollFrequency",
        fields: [
          "PayrollFrequencyStatus",
          "PayrollFrequencyDetails",
          "PayrollFrequencyActionItems",
        ],
      },
      {
        fieldName: "Expense Payment Portal Access (If Any)",
        key: "smbExpensePaymentPortalAccess",
        fields: [
          "expensePaymentPortalAccessStatus",
          "expensePaymentPortalAccessDetails",
          "expensePaymentPortalAccessActionItems",
        ],
      },
      {
        fieldName: "Monthly AP Bills Counts & Mode of Payment",
        key: "smbModeOfPayment",
        fields: [
          "ModeOfPaymentStatus",
          "ModeOfPaymentDetails",
          "ModeOfPaymentActionItems",
        ],
      },
      {
        fieldName: "AP Bills - (Mode of Receiving Bills)",
        key: "smbApBills",
        fields: ["ApBillsStatus", "ApBillsDetails", "ApBillsActionItems"],
      },
      {
        fieldName: "Point of Sales Access",
        key: "smbPointSalesAccess",
        fields: [
          "pointSalesAccessStatus",
          "pointSalesAccessDetails",
          "pointSalesAccessActionItems",
        ],
      },
      {
        fieldName: "No. of Checking & Saving Accounts",
        key: "smbSavingAccount",
        fields: [
          "SavingAccountStatus",
          "SavingAccountDetails",
          "SavingAccountActionItems",
        ],
      },
      {
        fieldName: "Access to Checking/ Saving Accounts",
        key: "smbAccessSavingAccount",
        fields: [
          "AccessSavingAccountStatus",
          "AccessSavingAccountDetails",
          "AccessSavingAccountActionItems",
        ],
      },
      {
        fieldName: "No Credit/Debit Cards Any Add on Cards",
        key: "smbAddCards",
        fields: ["AddCardsStatus", "AddCardsDetails", "AddCardsActionItems"],
      },
      {
        fieldName: "Access for Credit Cards",
        key: "smbAccessCreditCard",
        fields: [
          "AccessCreditCardStatus",
          "AccessCreditCardDetails",
          "AccessCreditCardActionItems",
        ],
      },
      {
        fieldName: "Access to Loan/Loc Account",
        key: "smbAccessLoanAccount",
        fields: [
          "AccessLoanAccountStatus",
          "AccessLoanAccountDetails",
          "AccessLoanAccountActionItems",
        ],
      },
      {
        fieldName: "Go Live Date",
        key: "smbLiveDate",
        fields: ["LiveDateStatus", "LiveDateDetails", "LiveDateActionItems"],
      },
      {
        fieldName: "Method of Accounting",
        key: "smbAccountingMethod",
        fields: [
          "AccountingMethodStatus",
          "AccountingMethodDetails",
          "AccountingMethodActionItems",
        ],
      },
      {
        fieldName: "FEIN",
        key: "smbFEIN",
        fields: ["FEINStatus", "FEINDetails", "FEINActionItems"],
      },
      {
        fieldName: "Fiscal Year End",
        key: "smbFiscalYearEnd",
        fields: [
          "FiscalYearEndStatus",
          "FiscalYearEndDetails",
          "FiscalYearEndActionItems",
        ],
      },
      {
        fieldName: "Last Closed Month in Accounting Software",
        key: "smbLastClosedMonth",
        fields: [
          "LastClosedMonthStatus",
          "LastClosedMonthDetails",
          "LastClosedMonthActionItems",
        ],
      },
      {
        fieldName: "Name and Contact of CPA",
        key: "smbContactOfCpa",
        fields: [
          "ContactOfCpaStatus",
          "ContactOfCpaDetails",
          "ContactOfCpaActionItems",
        ],
      },
      {
        fieldName: "Last Year Tax Return 990",
        key: "smbTaxReturn",
        fields: ["TaxReturnStatus", "TaxReturnDetails", "TaxReturnActionItems"],
      },
      {
        fieldName: "Monthly Financials Distribution List",
        key: "smbDistributionList",
        fields: [
          "DistributionListStatus",
          "DistributionListDetails",
          "DistributionListActionItems",
        ],
      },
      {
        fieldName: "Time Zone",
        key: "smbTimeZone",
        fields: ["TimeZoneStatus", "TimeZoneDetails", "TimeZoneActionItems"],
      },
      {
        fieldName: "Convenient Days",
        key: "smbConvenient",
        fields: [
          "ConvenientStatus",
          "ConvenientDetails",
          "ConvenientActionItems",
        ],
      },
      {
        fieldName: "Time Slot Availability",
        key: "smbTimeSlot",
        fields: ["TimeSlotStatus", "TimeSlotDetails", "TimeSlotActionItems"],
      },
    ];

    const checkList = fields.map((field) => {
      const smbObject = smbData[field.key];
      return {
        fieldName: field.fieldName,
        status: smbObject[field.fields[0]],
        details: smbObject[field.fields[1]],
        actionsOfPabs: smbObject[field.fields[2]],
      };
    });

    const callBack = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          setIsOpenConfirmationSubmit(false);
          setExpandedAccordian(-1);
          showToast(Message, ToastType.Error);
          return;
        case "success":
          getFormDetials();
          setIsOpenConfirmationSubmit(false);
          setExpandedAccordian(-1);
          showToast(Message, ToastType.Success);
          return;
      }
    };

    const isPeopleBusinessValid = peopleBusinessChecked
      ? validateSmbPeopleBusiness()
      : false;
    const isSystemDocumentAccessValid = systemDocumentAccessChecked
      ? validateSmbSystemDocumentAccess()
      : false;
    const isCashBankingAccessValid = cashBanksLoansChecked
      ? validateSmbCashBankingAccess()
      : false;
    const isExistingFinancialsAccessValid = conditionExistingFinancialsChecked
      ? validateSmbExistingFinancialsChecklist()
      : false;
    const isMeetingChecklistValid = meetingAvailabilityChecked
      ? validateSmbMeetingChecklist()
      : false;

    const isValid =
      !isPeopleBusinessValid &&
      !isSystemDocumentAccessValid &&
      !isCashBankingAccessValid &&
      !isExistingFinancialsAccessValid &&
      !isMeetingChecklistValid;
    if (type === 1) {
      if (isValid && !isSubmitedSmbChecklist) {
        callAPIwithHeaders(onboardingSaveFormUrl, "post", callBack, {
          userId: !!clientInfo?.UserId
            ? parseInt(clientInfo?.UserId)
            : parseInt(userId!),
          businessTypeId: !!clientInfo?.DepartmentId
            ? parseInt(clientInfo?.DepartmentId)
            : parseInt(businessTypeId!),
          checkList: checkList,
          progress: progressCounts,
          isSubmited: true,
        });
      } else {
        setIsOpenConfirmationSubmit(false);
        setExpandedAccordian(-1);
        showToast(
          "Please provide mandatory fields to submit the onboarding form.",
          ToastType.Error
        );
      }
    } else {
      const isValidStatus =
        peopleBusinessChecked ||
        systemDocumentAccessChecked ||
        cashBanksLoansChecked ||
        conditionExistingFinancialsChecked ||
        meetingAvailabilityChecked;
      if (roleId === "4" ? isValidStatus : true) {
        if (!isValid) {
          showToast(
            "Mandatory information is not provided. Please fill in to submit the form.",
            ToastType.Warning
          );
        }
        if (isSubmitedSmbChecklist && roleId !== "4") {
          const isPeopleBusinessValid = validateSmbPeopleBusiness();
          const isSystemDocumentAccessValid = validateSmbSystemDocumentAccess();
          const isCashBankingAccessValid = validateSmbCashBankingAccess();
          const isExistingFinancialsAccessValid =
            validateSmbExistingFinancialsChecklist();
          const isMeetingChecklistValid = validateSmbMeetingChecklist();

          const isValid =
            !isPeopleBusinessValid &&
            !isSystemDocumentAccessValid &&
            !isCashBankingAccessValid &&
            !isExistingFinancialsAccessValid &&
            !isMeetingChecklistValid;

          if (isValid) {
            callAPIwithHeaders(onboardingSaveFormUrl, "post", callBack, {
              userId: !!clientInfo?.UserId
                ? parseInt(clientInfo?.UserId)
                : parseInt(userId!),
              businessTypeId: !!clientInfo?.DepartmentId
                ? parseInt(clientInfo?.DepartmentId)
                : parseInt(businessTypeId!),
              checkList: checkList,
              progress: progressCounts,
            });
          }
        } else {
          // handleRemoveErrors();
          callAPIwithHeaders(onboardingSaveFormUrl, "post", callBack, {
            userId: !!clientInfo?.UserId
              ? parseInt(clientInfo?.UserId)
              : parseInt(userId!),
            businessTypeId: !!clientInfo?.DepartmentId
              ? parseInt(clientInfo?.DepartmentId)
              : parseInt(businessTypeId!),
            checkList: checkList,
            progress: progressCounts,
          });
        }
      }
    }
  };

  const handleSwitchChange = async (
    e: ChangeEvent<HTMLInputElement>,
    phaseType: number
  ) => {
    const check = e.target.checked;
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          break;
        case "success":
          showToast(Message, ToastType.Success);
          break;
      }
    };

    const updatePhaseState = (key: string, value: boolean) => {
      const updateStateFunc: any = {
        1: setPeopleBusinessChecked,
        2: setSystemDocumentAccessChecked,
        3: setCashBanksLoansChecked,
        4: setConditionExistingFinancialsChecked,
        5: setMeetingAvailabilityChecked,
      }[phaseType];
      updateStateFunc(value);
    };

    const requestBody: any = {
      userId: parseInt(clientInfo?.UserId!),
      businessTypeId: parseInt(clientInfo?.DepartmentId!),
    };

    switch (phaseType) {
      case 1:
        requestBody.phase1PeopleIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 2:
        requestBody.phase2SystemIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 3:
        requestBody.phase3CashIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 4:
        requestBody.phase4ConditionIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 5:
        requestBody.phase5MeetingIsDisplay = check;
        setExpandedAccordian(-1);
        break;
    }

    await callAPIwithHeaders(
      onboardingSaveFormUrl,
      "post",
      callback,
      requestBody
    );
    updatePhaseState(`setPhase${phaseType}Checked`, check);
  };

  const smbChecklistStatus = () => {
    const sections = {
      peopleBusinessChecked: [
        smbClientName.ClientNameStatus,
        smbPoc.PocStatus,
        smbEmail.EmailStatus,
        smbContactNumber.ContactNumberStatus,
        smbAddress.AddressStatus,
        smbClientWebsite.ClientWebsiteStatus,
      ],
      systemDocumentAccessChecked: [
        smbAccessAccountingSoftware.AccessAccountingSoftwareStatus,
        smbPayrollServiceAccess.PayrollServiceAccessStatus,
        smbModeOfPayment.ModeOfPaymentStatus,
        smbPointSalesAccess.pointSalesAccessStatus,
      ],
      cashBanksLoansChecked: [
        smbSavingAccount.SavingAccountStatus,
        smbAddCards.AddCardsStatus,
      ],
      conditionExistingFinancialsChecked: [
        smbLiveDate.LiveDateStatus,
        smbLastClosedMonth.LastClosedMonthStatus,
        smbTaxReturn.TaxReturnStatus,
        smbDistributionList.DistributionListStatus,
      ],
      meetingAvailabilityChecked: [
        smbTimeZone.TimeZoneStatus,
        smbConvenient.ConvenientStatus,
        smbTimeSlot.TimeSlotStatus,
      ],
    };

    let requiredFields: string[] = [];

    // Only include fields from checked sections
    Object.entries(sections).forEach(([sectionName, fields]) => {
      if (eval(sectionName)) {
        requiredFields = requiredFields.concat(fields);
      }
    });

    const totalRequired = requiredFields.length;
    let completedCount = 0;
    let inProgressCount = 0;

    requiredFields.forEach((field: string) => {
      if (field === "Completed") {
        completedCount++;
      } else if (field === "In Progress") {
        inProgressCount++;
      }
    });

    if (totalRequired === 0) {
      return 0;
    }

    const completedPercentage = (completedCount / totalRequired) * 100;
    const inProgressPercentage = (inProgressCount / totalRequired) * 50;

    const percentage = completedPercentage + inProgressPercentage;
    return Number(percentage.toFixed(2));
  };

  useEffect(() => {
    const counts = smbChecklistStatus();
    setSMBChecklistCount(counts);
  }, [
    peopleBusinessChecked,
    systemDocumentAccessChecked,
    cashBanksLoansChecked,
    conditionExistingFinancialsChecked,
    meetingAvailabilityChecked,
  ]);

  const phases = [
    {
      id: 1,
      checkStatus: peopleBusinessChecked,
      errorStatus: smbPeopleBusinessHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.COMMUNICATION,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 1),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.COMMUNICATION
      ),
      title: "People and Business",
      component: (
        <SmbPeopleBusinessChecklist
          checkAllFieldsSmbPeopleBusinessChecklist={isSubmitedSmbChecklist}
          smbPeopleBusinessErrors={smbPeopleBusinessErrors}
          smbClientName={smbClientName}
          setSmbClientName={setSmbClientName}
          smbClientWebsite={smbClientWebsite}
          setSmbClientWebsite={setSmbClientWebsite}
          smbDepartment={smbDepartment}
          setSmbDepartment={setSmbDepartment}
          smbOperationsPoc={smbOperationsPoc}
          setSmbOperationsPoc={setSmbOperationsPoc}
          smbOnboardingPoc={smbOnboardingPoc}
          setSmbOnboardingPoc={setSmbOnboardingPoc}
          smbTypeOfEntity={smbTypeOfEntity}
          setSmbTypeOfEntity={setSmbTypeOfEntity}
          smbBusinessNature={smbBusinessNature}
          setSmbBusinessNature={setSmbBusinessNature}
          smbDimensions={smbDimensions}
          setSmbDimensions={setSmbDimensions}
          smbPoc={smbPoc}
          setSmbPoc={setSmbPoc}
          smbEmail={smbEmail}
          setSmbEmail={setSmbEmail}
          smbContactNumber={smbContactNumber}
          setSmbContactNumber={setSmbContactNumber}
          smbAddress={smbAddress}
          setSmbAddress={setSmbAddress}
          isFormLocked={!!isFormLocked}
        />
      ),
    },
    {
      id: 2,
      checkStatus: systemDocumentAccessChecked,
      errorStatus: smbSystemDocumentAccessHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 2),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
      ),
      title: "System & Document Information & Access",
      component: (
        <SmbSystemAccessChecklist
          checkAllFieldsSmbSystemAccessChecklist={isSubmitedSmbChecklist}
          smbSystemAccessChecklistErrors={smbSystemDocumentAccessErrors}
          smbPABSGroupEmail={smbPABSGroupEmail}
          setSmbPABSGroupEmail={setSmbPABSGroupEmail}
          smbAccessAccountingSoftware={smbAccessAccountingSoftware}
          setSmbAccessAccountingSoftware={setSmbAccessAccountingSoftware}
          smbDropboxSetUp={smbDropboxSetUp}
          setSmbDropboxSetUp={setSmbDropboxSetUp}
          smbSalesTaxPortalAccess={smbSalesTaxPortalAccess}
          setSmbSalesTaxPortalAccess={setSmbSalesTaxPortalAccess}
          smbMerchantAccountPortalAccess={smbMerchantAccountPortalAccess}
          setSmbMerchantAccountPortalAccess={setSmbMerchantAccountPortalAccess}
          smbPayrollServiceAccess={smbPayrollServiceAccess}
          setSmbPayrollServiceAccess={setSmbPayrollServiceAccess}
          smbPayrollFrequency={smbPayrollFrequency}
          setSmbPayrollFrequency={setSmbPayrollFrequency}
          smbExpensePaymentPortalAccess={smbExpensePaymentPortalAccess}
          setSmbExpensePaymentPortalAccess={setSmbExpensePaymentPortalAccess}
          smbModeOfPayment={smbModeOfPayment}
          setSmbModeOfPayment={setSmbModeOfPayment}
          smbApBills={smbApBills}
          setSmbApBills={setSmbApBills}
          smbPointSalesAccess={smbPointSalesAccess}
          setSmbPointSalesAccess={setSmbPointSalesAccess}
          isFormLocked={!!isFormLocked}
        />
      ),
    },
    {
      id: 3,
      checkStatus: cashBanksLoansChecked,
      errorStatus: smbCashBankingAccessHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.CASH_BANKING_LOANS,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 3),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.CASH_BANKING_LOANS
      ),
      title: "Cash & Banking Information & Access",
      component: (
        <SmbBankingAccessChecklist
          checkAllFieldsSmbBankingAccessChecklist={isSubmitedSmbChecklist}
          smbCashBankingAccessErrors={smbCashBankingAccessErrors}
          smbSavingAccount={smbSavingAccount}
          setSmbSavingAccount={setSmbSavingAccount}
          smbAccessSavingAccount={smbAccessSavingAccount}
          setSmbAccessSavingAccount={setSmbAccessSavingAccount}
          smbAddCards={smbAddCards}
          setSmbAddCards={setSmbAddCards}
          smbAccessCreditCard={smbAccessCreditCard}
          setSmbAccessCreditCard={setSmbAccessCreditCard}
          smbAccessLoanAccount={smbAccessLoanAccount}
          setSmbAccessLoanAccount={setSmbAccessLoanAccount}
          smbAccessCreditCardPortal={smbAccessCreditCardPortal}
          setSmbAccessCreditCardPortal={setSmbAccessCreditCardPortal}
          isFormLocked={!!isFormLocked}
        />
      ),
    },
    {
      id: 4,
      checkStatus: conditionExistingFinancialsChecked,
      errorStatus: smbExistingFinancialsChecklistHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.PAYROLL_SYSTEM,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 4),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.PAYROLL_SYSTEM
      ),
      title: "Condition of Existing Financials",
      component: (
        <SmbExistingFinancialsChecklist
          checkAllFieldsSmbExistingFinancialsChecklist={isSubmitedSmbChecklist}
          smbExistingFinancialsChecklistErrors={
            smbExistingFinancialsChecklistErrors
          }
          smbLiveDate={smbLiveDate}
          setSmbLiveDate={setSmbLiveDate}
          smbAccountingMethod={smbAccountingMethod}
          setSmbAccountingMethod={setSmbAccountingMethod}
          smbFEIN={smbFEIN}
          setSmbFEIN={setSmbFEIN}
          smbFiscalYearEnd={smbFiscalYearEnd}
          setSmbFiscalYearEnd={setSmbFiscalYearEnd}
          smbLastClosedMonth={smbLastClosedMonth}
          setSmbLastClosedMonth={setSmbLastClosedMonth}
          smbContactOfCpa={smbContactOfCpa}
          setSmbContactOfCpa={setSmbContactOfCpa}
          smbTaxReturn={smbTaxReturn}
          setSmbTaxReturn={setSmbTaxReturn}
          smbDistributionList={smbDistributionList}
          setSmbDistributionList={setSmbDistributionList}
          isFormLocked={!!isFormLocked}
        />
      ),
    },
    {
      id: 5,
      checkStatus: meetingAvailabilityChecked,
      errorStatus: smbMeetingChecklistHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.COMPLIANCES,
      handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleSwitchChange(e, 5),
      handleAccordianChange: handleAccordianChange(AccordianExpand.COMPLIANCES),
      title: "Meeting Availability",
      component: (
        <SmbMeetingChecklist
          checkAllFieldsSmbMeetingChecklist={isSubmitedSmbChecklist}
          smbMeetingChecklistErrors={smbMeetingChecklistErrors}
          smbTimeZone={smbTimeZone}
          setSmbTimeZone={setSmbTimeZone}
          smbConvenient={smbConvenient}
          setSmbConvenient={setSmbConvenient}
          smbTimeSlot={smbTimeSlot}
          setSmbTimeSlot={setSmbTimeSlot}
          isFormLocked={!!isFormLocked}
        />
      ),
    },
  ];

  const enabledPhases = phases.filter((phase) =>
    roleId === "4" ? phase.checkStatus : true
  );
  const updatedPhases = enabledPhases.map((phase, index) => ({
    ...phase,
    phaseNumber: index + 1,
  }));

  return (
    <>
      <div className={`flex flex-col h-[78vh]`}>
        <div className={`flex-1 overflow-y-scroll`}>
          {updatedPhases.map((phase) => (
            <ChecklistAccordian
              switchDisabled={isSubmitedSmbChecklist}
              key={phase.id}
              handleSwitchChange={phase.handleSwitchChange}
              checkStatus={phase.checkStatus}
              hasError={phase.errorStatus}
              expandedAccordian={phase.expandedStatus}
              handleChange={phase.handleAccordianChange}
              title={`Phase ${phase.phaseNumber}: ${phase.title}`}
              isFormLocked={isFormLocked ?? false}
            >
              {phase.component}
            </ChecklistAccordian>
          ))}

          {roleId === "4" &&
            !peopleBusinessChecked &&
            !systemDocumentAccessChecked &&
            !cashBanksLoansChecked &&
            !conditionExistingFinancialsChecked &&
            !meetingAvailabilityChecked && (
              <span className="text-[14px] flex justify-center items-center text-[#333333]">
                No details for implementation checklist found for your
                account. Please contact PABS team to get support.
              </span>
            )}
        </div>

        {(roleId === "4" ? !isSubmitedSmbChecklist : true) && (
          <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex gap-5 items-center justify-end border-t px-6 w-full">
            {roleId !== "4" && (
              <Button
                onClick={() => setIsOpenModal(false)}
                className={`border-[#022946] bg-white text-[#022946] rounded-md text-[14px] h-[36px]`}
                variant="outlined"
              >
                Cancel
              </Button>
            )}
            {(roleId === "4" ? !isSubmitedSmbChecklist : true) && (
              <Button
                onClick={() => handleSubmit(2)}
                className={`${isFormLocked && (roleId === "3" || roleId === "4")
                  ? "!border-[#666] !text-[#666]"
                  : "!border-[#0078C8] !text-[#0078C8]"
                  } !bg-[#FFFFFF] !rounded-md text-[14px] h-[36px]`}
                variant="outlined"
                disabled={isFormLocked && (roleId === "3" || roleId === "4")}
              >
                Save
              </Button>
            )}
            {roleId === "4" && !isSubmitedSmbChecklist && (
              <Button
                onClick={() => setIsOpenConfirmationSubmit(true)}
                className={`${isFormLocked && (roleId === "4" || roleId === "3")
                  ? "!bg-[#666] !text-white"
                  : "!bg-[#0078C8] text-white"
                  }  !rounded-md h-[36px]`}
                variant="contained"
                disabled={isFormLocked && (roleId === "4" || roleId === "3")}
              >
                <span className="uppercase text-[14px] whitespace-nowrap">
                  Submit
                </span>
              </Button>
            )}
          </div>
        )}
      </div>

      {isOpenConfirmationSubmit && (
        <ConfirmModal
          title="Confirm"
          isOpen={isOpenConfirmationSubmit}
          message="After submit you will not be able to update data. Please click confirm to continue."
          handleModalSubmit={() => handleSubmit(1)}
          handleClose={() => setIsOpenConfirmationSubmit(false)}
          setIsOpen={(value) => {
            setIsOpenConfirmationSubmit(value);
          }}
        />
      )}
    </>
  );
}

export default ChecklistSmb;
