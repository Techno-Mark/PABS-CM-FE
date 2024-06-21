import { Button } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
// Types import
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
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
import SmbBankingAccessChecklist from "../forms/smb/SmbBankingAccessChecklist";
import SmbExistingFinancialsChecklist from "../forms/smb/SmbExistingFinancialsChecklist";
import SmbMeetingChecklist from "../forms/smb/SmbMeetingChecklist";
import SmbPeopleBusinessChecklist from "../forms/smb/SmbPeopleBusinessChecklist";
import SmbSystemAccessChecklist from "../forms/smb/SmbSystemAccessChecklist";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { onboardingSaveFormUrl } from "@/static/apiUrl";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

function ChecklistSmb({
  clientInfo,
  setSMBChecklistCount,
  formDetails,
  getFormDetials,
  setIsOpenModal,
  responseData,
}: SMBType) {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  const initialSmbPeopleBusinessErrors: smbPeopleBusinessErrors = {};
  const initialSmbSystemDocumentAccessErrors: smbSystemDocumentAccessErrors =
    {};
  const initialSmbCashBankingAccessErrors: smbCashBankingAccessErrors = {};
  const initialSmbExistingFinancialsChecklistErrors: smbExistingFinancialsChecklistErrors =
    {};
  const initialSmbMeetingChecklistErrors: smbMeetingAvailabilityErrors = {};

  const [smbClientName, setSmbClientName] =
    useState<ClientNameFormTypes>(initialClientName);

  const [smbTypeOfEntity, setSmbTypeOfEntity] =
    useState<TypeOfEntityFormTypes>(initialTypeOfEntity);

  const [smbBusinessNature, setSmbBusinessNature] =
    useState<BusinessNatureFormTypes>(initialBusinessNature);

  const [smbDimensions, setSmbDimensions] =
    useState<DimensionsFormTypes>(initialDimensions);

  const [smbPoc, setSmbPoc] = useState<PocFormTypes>(initialPoc);

  const [smbEmail, setSmbEmail] = useState<EmailFormTypes>(initialEmail);

  const [smbContactNumber, setSmbContactNumber] =
    useState<ContactNumberFormTypes>(initialContactNumber);

  const [smbAddress, setSmbAddress] =
    useState<AddressFormTypes>(initialAddress);

  const [smbClientWebsite, setSmbClientWebsite] =
    useState<ClientWebsiteFormTypes>(initialClientWebsite);

  const [smbDepartment, setSmbDepartment] =
    useState<DepartmentFormTypes>(initialDepartment);

  const [smbOperationsPoc, setSmbOperationsPoc] =
    useState<OperationsPocFormTypes>(initialOperationsPoc);

  const [smbOnboardingPoc, setSmbOnboardingPoc] =
    useState<OnboardingPocFormTypes>(initialOnboardingPoc);

  const [smbPABSGroupEmail, setSmbPABSGroupEmail] =
    useState<PABSGroupEmailFormTypes>(initialPABSGroupEmail);

  const [smbAccessAccountingSoftware, setSmbAccessAccountingSoftware] =
    useState<AccessAccountingSoftwareFormTypes>(
      initialAccessAccountingSoftware
    );

  const [smbDropboxSetUp, setSmbDropboxSetUp] =
    useState<DropboxSetUpFormTypes>(initialDropboxSetUp);
  const [smbSalesTaxPortalAccess, setSmbSalesTaxPortalAccess] =
    useState<SalesTaxPortalAccessFormTypes>(initialSalesTaxPortalAccess);
  const [smbMerchantAccountPortalAccess, setSmbMerchantAccountPortalAccess] =
    useState<MerchantAccountPortalAccessFormTypes>(
      initialMerchantAccountPortalAccess
    );
  const [smbPayrollServiceAccess, setSmbPayrollServiceAccess] =
    useState<PayrollServiceAccessFormTypes>(initialPayrollServiceAccess);

  const [smbPayrollFrequency, setSmbPayrollFrequency] =
    useState<PayrollFrequencyFormTypes>(initialPayrollFrequency);
  const [smbExpensePaymentPortalAccess, setSmbExpensePaymentPortalAccess] =
    useState<ExpensePaymentPortalAccessFormTypes>(
      initialExpensepaymentPortalAccess
    );

  const [smbModeOfPayment, setSmbModeOfPayment] =
    useState<ModeOfPaymentFormTypes>(initialModeOfPayment);

  const [smbApBills, setSmbApBills] =
    useState<ApBillsFormTypes>(initialApBills);

  const [smbPointSalesAccess, setSmbPointSalesAccess] =
    useState<PointSalesAccessFormTypes>(initialPointSalesAccess);

  const [smbSavingAccount, setSmbSavingAccount] =
    useState<SavingAccountFormTypes>(initialSavingAccount);

  const [smbAccessSavingAccount, setSmbAccessSavingAccount] =
    useState<AccessSavingAccountFormTypes>(initialAccessSavingAccount);

  const [smbAddCards, setSmbAddCards] =
    useState<AddCardsFormTypes>(initialAddCards);

  const [smbAccessCreditCard, setSmbAccessCreditCard] =
    useState<AccessCreditCardFormTypes>(initialAccessCreditCard);

  const [smbAccessLoanAccount, setSmbAccessLoanAccount] = useState<any>(
    initialAccessLoanAccount
  );

  const [smbAccessCreditCardPortal, setSmbAccessCreditCardPortal] =
    useState<AccessCreditCardPortalFormTypes>(initialAccessCreditCardPortal);

  const [smbLiveDate, setSmbLiveDate] =
    useState<LiveDateFormTypes>(initialLiveDate);

  const [smbAccountingMethod, setSmbAccountingMethod] =
    useState<AccountingMethodFormTypes>(initialAccountingMethod);

  const [smbFEIN, setSmbFEIN] = useState<FEINFormTypes>(initialFEIN);

  const [smbFiscalYearEnd, setSmbFiscalYearEnd] =
    useState<FiscalYearEndFormTypes>(initialFiscalYearEnd);

  const [smbLastClosedMonth, setSmbLastClosedMonth] =
    useState<LastClosedMonthFormTypes>(initialLastClosedMonth);

  const [smbContactOfCpa, setSmbContactOfCpa] =
    useState<ContactOfCpaFormTypes>(initialContactOfCpa);

  const [smbTaxReturn, setSmbTaxReturn] =
    useState<TaxReturnFormTypes>(initialTaxReturn);

  const [smbDistributionList, setSmbDistributionList] =
    useState<DistributionListFormTypes>(initialDistributionList);

  const [smbTimeZone, setSmbTimeZone] =
    useState<TimeZoneFormTypes>(initialTimeZone);

  const [smbConvenient, setSmbConvenient] =
    useState<ConvenientFormTypes>(initialConvenient);

  const [smbTimeSlot, setSmbTimeSlot] =
    useState<TimeSlotFormTypes>(initialTimeSlot);

  // Error state
  const [smbPeopleBusinessErrors, setSmbPeopleBusinessErrors] =
    useState<smbPeopleBusinessErrors>(initialSmbPeopleBusinessErrors);
  const [smbPeopleBusinessHasErrors, setSmbPeopleBusinessHasErrors] =
    useState<boolean>(false);
  const [smbSystemDocumentAccessErrors, setSmbSystemDocumentAccessErrors] =
    useState<smbSystemDocumentAccessErrors>(
      initialSmbSystemDocumentAccessErrors
    );
  const [
    smbSystemDocumentAccessHasErrors,
    setSmbSystemDocumentAccessHasErrors,
  ] = useState<boolean>(false);
  const [smbCashBankingAccessErrors, setSmbCashBankingAccessErrors] =
    useState<smbCashBankingAccessErrors>(initialSmbCashBankingAccessErrors);
  const [smbCashBankingAccessHasErrors, setSmbCashBankingAccessHasErrors] =
    useState<boolean>(false);
  const [
    smbExistingFinancialsChecklistErrors,
    setSmbExistingFinancialsChecklistErrors,
  ] = useState<smbExistingFinancialsChecklistErrors>(
    initialSmbExistingFinancialsChecklistErrors
  );
  const [
    smbExistingFinancialsChecklistHasErrors,
    setSmbExistingFinancialsChecklistHasErrors,
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
        "Type of entity": {
          setter: setSmbTypeOfEntity,
          keys: {
            status: "TypeOfEntityStatus",
            details: "TypeOfEntityDetails",
            actionItems: "TypeOfEntityActionItems",
          },
        },
        "Nature of business": {
          setter: setSmbBusinessNature,
          keys: {
            status: "BusinessNatureStatus",
            details: "BusinessNatureDetails",
            actionItems: "BusinessNatureActionItems",
          },
        },
        "Any other subsidiary or verticles or dimensions": {
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
        "Provide access to sales tax portal access": {
          setter: setSmbSalesTaxPortalAccess,
          keys: {
            status: "salesTaxPortalAccessStatus",
            details: "salesTaxPortalAccessDetails",
            actionItems: "salesTaxPortalAccessActionItems",
          },
        },
        "Merchant account portal access (if any)": {
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
        "No. of employees on roll, Payroll Frequency": {
          setter: setSmbPayrollFrequency,
          keys: {
            status: "PayrollFrequencyStatus",
            details: "PayrollFrequencyDetails",
            actionItems: "PayrollFrequencyActionItems",
          },
        },
        "Expense payment portal access (if any)": {
          setter: setSmbExpensePaymentPortalAccess,
          keys: {
            status: "expensePaymentPortalAccessStatus",
            details: "expensePaymentPortalAccessDetails",
            actionItems: "expensePaymentPortalAccessActionItems",
          },
        },
        "Monthly AP Bills counts & Mode of Payment": {
          setter: setSmbModeOfPayment,
          keys: {
            status: "ModeOfPaymentStatus",
            details: "ModeOfPaymentDetails",
            actionItems: "ModeOfPaymentActionItems",
          },
        },
        "AP bills - (mode of receiving bills)": {
          setter: setSmbApBills,
          keys: {
            status: "ApBillsStatus",
            details: "ApBillsDetails",
            actionItems: "ApBillsActionItems",
          },
        },
        "Point of sales access": {
          setter: setSmbPointSalesAccess,
          keys: {
            status: "pointSalesAccessStatus",
            details: "pointSalesAccessDetails",
            actionItems: "pointSalesAccessActionItems",
          },
        },
        "No of Checking & Saving Accounts": {
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
        "No Credit/Debit Cards Any add on Cards": {
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
        "Access for Credit Cards Portal": {
          setter: setSmbAccessCreditCardPortal,
          keys: {
            status: "AccessCreditCardPortalStatus",
            details: "AccessCreditCardPortalDetails",
            actionItems: "AccessCreditCardPortalActionItems",
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
        "Method of accounting": {
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
        "Fiscal Year end": {
          setter: setSmbFiscalYearEnd,
          keys: {
            status: "FiscalYearEndStatus",
            details: "FiscalYearEndDetails",
            actionItems: "FiscalYearEndActionItems",
          },
        },
        "Last Closed month in Accounting Software": {
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
        "Last year Tax Return": {
          setter: setSmbTaxReturn,
          keys: {
            status: "TaxReturnStatus",
            details: "TaxReturnDetails",
            actionItems: "TaxReturnActionItems",
          },
        },
        "Monthly Financials distribution list": {
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
        "Convenient days": {
          setter: setSmbConvenient,
          keys: {
            status: "ConvenientStatus",
            details: "ConvenientDetails",
            actionItems: "ConvenientActionItems",
          },
        },
        "Time slot Availability": {
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
        fieldName: "Type of entity",
        key: "smbTypeOfEntity",
        fields: [
          "TypeOfEntityStatus",
          "TypeOfEntityDetails",
          "TypeOfEntityActionItems",
        ],
      },
      {
        fieldName: "Nature of business",
        key: "smbBusinessNature",
        fields: [
          "BusinessNatureStatus",
          "BusinessNatureDetails",
          "BusinessNatureActionItems",
        ],
      },
      {
        fieldName: "Any other subsidiary or verticles or dimensions",
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
        fieldName: "Provide access to sales tax portal access",
        key: "smbSalesTaxPortalAccess",
        fields: [
          "salesTaxPortalAccessStatus",
          "salesTaxPortalAccessDetails",
          "salesTaxPortalAccessActionItems",
        ],
      },
      {
        fieldName: "Merchant account portal access (if any)",
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
        fieldName: "No. of employees on roll, Payroll Frequency",
        key: "smbPayrollFrequency",
        fields: [
          "PayrollFrequencyStatus",
          "PayrollFrequencyDetails",
          "PayrollFrequencyActionItems",
        ],
      },
      {
        fieldName: "Expense payment portal access (if any)",
        key: "smbExpensePaymentPortalAccess",
        fields: [
          "expensePaymentPortalAccessStatus",
          "expensePaymentPortalAccessDetails",
          "expensePaymentPortalAccessActionItems",
        ],
      },
      {
        fieldName: "Monthly AP Bills counts & Mode of Payment",
        key: "smbModeOfPayment",
        fields: [
          "ModeOfPaymentStatus",
          "ModeOfPaymentDetails",
          "ModeOfPaymentActionItems",
        ],
      },
      {
        fieldName: "AP bills - (mode of receiving bills)",
        key: "smbApBills",
        fields: ["ApBillsStatus", "ApBillsDetails", "ApBillsActionItems"],
      },
      {
        fieldName: "Point of sales access",
        key: "smbPointSalesAccess",
        fields: [
          "pointSalesAccessStatus",
          "pointSalesAccessDetails",
          "pointSalesAccessActionItems",
        ],
      },
      {
        fieldName: "No of Checking & Saving Accounts",
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
        fieldName: "No Credit/Debit Cards Any add on Cards",
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
        fieldName: "Access for Credit Cards Portal",
        key: "smbAccessCreditCardPortal",
        fields: [
          "AccessCreditCardPortalStatus",
          "AccessCreditCardPortalDetails",
          "AccessCreditCardPortalActionItems",
        ],
      },
      {
        fieldName: "Go Live Date",
        key: "smbLiveDate",
        fields: ["LiveDateStatus", "LiveDateDetails", "LiveDateActionItems"],
      },
      {
        fieldName: "Method of accounting",
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
        fieldName: "Fiscal Year end",
        key: "smbFiscalYearEnd",
        fields: [
          "FiscalYearEndStatus",
          "FiscalYearEndDetails",
          "FiscalYearEndActionItems",
        ],
      },
      {
        fieldName: "Last Closed month in Accounting Software",
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
        fieldName: "Last year Tax Return",
        key: "smbTaxReturn",
        fields: ["TaxReturnStatus", "TaxReturnDetails", "TaxReturnActionItems"],
      },
      {
        fieldName: "Monthly Financials distribution list",
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
        fieldName: "Convenient days",
        key: "smbConvenient",
        fields: [
          "ConvenientStatus",
          "ConvenientDetails",
          "ConvenientActionItems",
        ],
      },
      {
        fieldName: "Time slot Availability",
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
          handleRemoveErrors();
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
    let relevantFields = [];

    if (peopleBusinessChecked) {
      relevantFields.push(
        ...[
          "ClientNameStatus",
          "ClientNameDetails",
          "ClientNameActionItems",
          "PocStatus",
          "PocDetails",
          "PocActionItems",
          "EmailStatus",
          "EmailDetails",
          "EmailActionItems",
          "ContactNumberStatus",
          "ContactNumberDetails",
          "ContactNumberActionItems",
          "AddressStatus",
          "AddressDetails",
          "AddressActionItems",
          "ClientWebsiteStatus",
          "ClientWebsiteDetails",
          "ClientWebsiteActionItems",
        ]
      );
    }

    if (systemDocumentAccessChecked) {
      relevantFields.push(
        ...[
          "AccessAccountingSoftwareStatus",
          "AccessAccountingSoftwareDetails",
          "AccessAccountingSoftwareActionItems",
          "PayrollServiceAccessStatus",
          "PayrollServiceAccessDetails",
          "PayrollServiceAccessActionItems",
          "ModeOfPaymentStatus",
          "ModeOfPaymentDetails",
          "ModeOfPaymentActionItems",
          "pointSalesAccessStatus",
          "pointSalesAccessDetails",
          "pointSalesAccessActionItems",
        ]
      );
    }

    if (cashBanksLoansChecked) {
      relevantFields.push(
        ...[
          "SavingAccountStatus",
          "SavingAccountDetails",
          "SavingAccountActionItems",
          "AddCardsStatus",
          "AddCardsDetails",
          "AddCardsActionItems",
        ]
      );
    }

    if (conditionExistingFinancialsChecked) {
      relevantFields.push(
        ...[
          "LiveDateStatus",
          "LiveDateDetails",
          "LiveDateActionItems",
          "LastClosedMonthStatus",
          "LastClosedMonthDetails",
          "LastClosedMonthActionItems",
          "TaxReturnStatus",
          "TaxReturnDetails",
          "TaxReturnActionItems",
          "DistributionListStatus",
          "DistributionListDetails",
          "DistributionListActionItems",
        ]
      );
    }

    if (meetingAvailabilityChecked) {
      relevantFields.push(
        ...[
          "TimeZoneStatus",
          "TimeZoneDetails",
          "TimeZoneActionItems",
          "ConvenientStatus",
          "ConvenientDetails",
          "ConvenientActionItems",
          "TimeSlotStatus",
          "TimeSlotDetails",
          "TimeSlotActionItems",
        ]
      );
    }

    let count = 0;
    relevantFields.forEach((field) => {
      if (
        !!smbClientName[field] ||
        !!smbPoc[field] ||
        !!smbEmail[field] ||
        !!smbContactNumber[field] ||
        !!smbAddress[field] ||
        !!smbClientWebsite[field] ||
        !!smbAccessAccountingSoftware[field] ||
        !!smbPayrollServiceAccess[field] ||
        !!smbModeOfPayment[field] ||
        !!smbPointSalesAccess[field] ||
        !!smbSavingAccount[field] ||
        !!smbAddCards[field] ||
        !!smbLiveDate[field] ||
        !!smbLastClosedMonth[field] ||
        !!smbTaxReturn[field] ||
        !!smbDistributionList[field] ||
        !!smbTimeZone[field] ||
        !!smbConvenient[field] ||
        !!smbTimeSlot[field]
      ) {
        count++;
      }
    });

    let totalFields = relevantFields.length;
    let percentage =
      totalFields > 0 ? Math.floor((count / totalFields) * 100) : 0;

    return percentage;
  };

  const phases = [
    {
      id: 1,
      checkStatus: peopleBusinessChecked,
      errorStatus: smbPeopleBusinessHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.COMMUNICATION,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 1),
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
        />
      ),
    },
    {
      id: 2,
      checkStatus: systemDocumentAccessChecked,
      errorStatus: smbSystemDocumentAccessHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 2),
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
        />
      ),
    },
    {
      id: 3,
      checkStatus: cashBanksLoansChecked,
      errorStatus: smbCashBankingAccessHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.CASH_BANKING_LOANS,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 3),
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
        />
      ),
    },
    {
      id: 4,
      checkStatus: conditionExistingFinancialsChecked,
      errorStatus: smbExistingFinancialsChecklistHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.PAYROLL_SYSTEM,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 4),
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
        />
      ),
    },
    {
      id: 5,
      checkStatus: meetingAvailabilityChecked,
      errorStatus: smbMeetingChecklistHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.COMPLIANCES,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 5),
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
      <div
        className={`flex flex-col ${
          roleId !== "4" ? "h-[95vh]" : "h-full"
        } pt-12`}
      >
        <div className={`flex-1 overflow-y-scroll`}>
          <div className="m-6 flex flex-col gap-6">
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
        </div>

        {(roleId === "4" ? !isSubmitedSmbChecklist : true) && (
          <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex gap-5 items-center justify-end border-t px-6 w-full">
            {roleId !== "4" && (
              <Button
                onClick={() => setIsOpenModal(false)}
                className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
                variant="outlined"
              >
                Cancel
              </Button>
            )}
            {(roleId === "4" ? !isSubmitedSmbChecklist : true) && (
              <Button
                onClick={() => handleSubmit(2)}
                className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
                variant="outlined"
              >
                Save
              </Button>
            )}
            {roleId === "4" && !isSubmitedSmbChecklist && (
              <Button
                onClick={() => setIsOpenConfirmationSubmit(true)}
                className={`!bg-[#022946] text-white !rounded-full`}
                variant="contained"
              >
                <span className="uppercase font-semibold text-[14px] whitespace-nowrap">
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
