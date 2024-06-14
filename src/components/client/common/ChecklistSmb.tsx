import { Button } from "@mui/material";
import { useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
// Types import
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import {
  AccessAccountingSoftwareFormTypes,
  AccessCreditCard1FormTypes,
  AccessCreditCard2FormTypes,
  AccessLoanAccountTypes,
  AccessSavingAccountFormTypes,
  AccountingMethodFormTypes,
  AddCardsFormTypes,
  AddressFormTypes,
  ApBillsFormTypes,
  ApplicablityTypes,
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
  FEINFormTypes,
  FieldMapEntry,
  FiscalYearEndFormTypes,
  FormDetails,
  LastClosedMonthFormTypes,
  LiveDateFormTypes,
  ModeOfPaymentFormTypes,
  OperationsFormTypes,
  PABSGroupEmailFormTypes,
  PayrollFrequencyFormTypes,
  PayrollServiceAccessFormTypes,
  PocFormTypes,
  SavingAccountFormTypes,
  TaxReturnFormTypes,
  TimeSlotFormTypes,
  TimeZoneFormTypes,
  TypeOfEntityFormTypes,
} from "@/models/smbChecklist";
import {
  AccordianExpand,
  fieldDisplayNamesSystemSoftwareLoans,
  validateAutoCareSystemSoftwareLocationField,
} from "@/static/autoCareChecklist";
import {
  fieldDisplayNamesSmbBankingAccess,
  fieldDisplayNamesSmbExistingFinancials,
  fieldDisplayNamesSmbMeeting,
  fieldDisplayNamesSmbPeopleBusiness,
  fieldDisplayNamesSmbSystemAccess,
  initialAccessAccountingSoftware,
  initialAccessCreditCard1,
  initialAccessCreditCard2,
  initialAccessLoanAccount,
  initialAccessSavingAccount,
  initialAccountingMethod,
  initialAddCards,
  initialAddress,
  initialApBills,
  initialApplicablity,
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
  initialFEIN,
  initialFiscalYearEnd,
  initialLastClosedMonth,
  initialLiveDate,
  initialModeOfPayment,
  initialOperations,
  initialPABSGroupEmail,
  initialPayrollFrequency,
  initialPayrollServiceAccess,
  initialPoc,
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

function ChecklistSmb({
  setChecklistCount,
  setChecklistFormSubmit,
  formDetails,
  getFormDetials,
}: ChecklistAutoCareType) {
  const roleId = Cookies.get("roleId");
  const userID = Cookies.get("userId");
  const initialSmbPeopleBusinessErrors: any = {};
  const initialSmbSystemAccessErrors: any = {};
  const initialSmbBankingAccessErrors: any = {};
  const initialSmbExistingFinancialsErrors: any = {};
  const initialSmbMeetingErrors: any = {};

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

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

  const [smbOperations, setSmbOperations] =
    useState<OperationsFormTypes>(initialOperations);

  const [smbPABSGroupEmail, setSmbPABSGroupEmail] =
    useState<PABSGroupEmailFormTypes>(initialPABSGroupEmail);

  const [smbAccessAccountingSoftware, setSmbAccessAccountingSoftware] =
    useState<AccessAccountingSoftwareFormTypes>(
      initialAccessAccountingSoftware
    );

  const [smbDropboxSetUp, setSmbDropboxSetUp] =
    useState<DropboxSetUpFormTypes>(initialDropboxSetUp);

  const [smbPayrollServiceAccess, setSmbPayrollServiceAccess] =
    useState<PayrollServiceAccessFormTypes>(initialPayrollServiceAccess);

  const [smbPayrollFrequency, setSmbPayrollFrequency] =
    useState<PayrollFrequencyFormTypes>(initialPayrollFrequency);

  const [smbModeOfPayment, setSmbModeOfPayment] =
    useState<ModeOfPaymentFormTypes>(initialModeOfPayment);

  const [smbApBills, setSmbApBills] =
    useState<ApBillsFormTypes>(initialApBills);

  const [smbApplicablity, setSmbApplicablity] =
    useState<any>(initialApplicablity);

  const [smbSavingAccount, setSmbSavingAccount] =
    useState<SavingAccountFormTypes>(initialSavingAccount);

  const [smbAccessSavingAccount, setSmbAccessSavingAccount] =
    useState<AccessSavingAccountFormTypes>(initialAccessSavingAccount);

  const [smbAddCards, setSmbAddCards] =
    useState<AddCardsFormTypes>(initialAddCards);

  const [smbAccessCreditCard1, setSmbAccessCreditCard1] =
    useState<AccessCreditCard1FormTypes>(initialAccessCreditCard1);

  const [smbAccessLoanAccount, setSmbAccessLoanAccount] = useState<any>(
    initialAccessLoanAccount
  );

  const [smbAccessCreditCard2, setSmbAccessCreditCard2] =
    useState<AccessCreditCard2FormTypes>(initialAccessCreditCard2);

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

  const [smbPeopleBusinessErrors, setSmbPeopleBusinessErrors] = useState<any>(
    initialSmbPeopleBusinessErrors
  );

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
        "Onboarding and Operations POC": {
          setter: setSmbOperations,
          keys: {
            status: "OperationsStatus",
            details: "OperationsDetails",
            actionItems: "OperationsActionItems",
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
        "Payroll Service Provider Access": {
          setter: setSmbPayrollServiceAccess,
          keys: {
            status: "PayrollServiceAccessStatus",
            details: "PayrollServiceAccessDetails",
            actionItems: "PayrollServiceAccessActionItems",
          },
        },
        "No. of employees on roll/Payroll Frequency": {
          setter: setSmbPayrollFrequency,
          keys: {
            status: "PayrollFrequencyStatus",
            details: "PayrollFrequencyDetails",
            actionItems: "PayrollFrequencyActionItems",
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
        Applicablity: {
          setter: setSmbApplicablity,
          keys: {
            status: "ApplicablityStatus",
            details: "ApplicablityDetails",
            actionItems: "ApplicablityActionItems",
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
        "Access for Credit Cards Portal1": {
          setter: setSmbAccessCreditCard1,
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
        "Access for Credit Cards Portal2": {
          setter: setSmbAccessCreditCard2,
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
  }, [formDetails]);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };

  const validateSmbPeopleBusiness = () => {
    const newErrors: { [key: string]: string } = {};

    validateSmbPeopleBusinessField.forEach((field) => {
      if (
        !smbClientName[field] &&
        !smbTypeOfEntity[field] &&
        !smbBusinessNature[field] &&
        !smbDimensions[field] &&
        !smbPoc[field] &&
        !smbEmail[field] &&
        !smbContactNumber[field] &&
        !smbAddress[field] &&
        !smbClientWebsite[field] &&
        !smbDepartment[field] &&
        !smbOperations[field]
      ) {
        newErrors[
          field
        ] = `${fieldDisplayNamesSmbPeopleBusiness[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setSmbPeopleBusinessErrors(newErrors);
    return hasErrors;
  };


  const handleSubmit = (type: number) => {
    if (type === 1 || type === 2) {
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
        smbOperations: smbOperations,
        smbPABSGroupEmail: smbPABSGroupEmail,
        smbAccessAccountingSoftware: smbAccessAccountingSoftware,
        smbDropboxSetUp: smbDropboxSetUp,
        smbPayrollServiceAccess: smbPayrollServiceAccess,
        smbPayrollFrequency: smbPayrollFrequency,
        smbModeOfPayment: smbModeOfPayment,
        smbApBills: smbApBills,
        smbApplicablity: smbApplicablity,
        smbSavingAccount: smbSavingAccount,
        smbAccessSavingAccount: smbAccessSavingAccount,
        smbAddCards: smbAddCards,
        smbAccessCreditCard1: smbAccessCreditCard1,
        smbAccessLoanAccount: smbAccessLoanAccount,
        smbAccessCreditCard2: smbAccessCreditCard2,
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
          fieldName: "Onboarding and Operations POC",
          key: "smbOperations",
          fields: [
            "OperationsStatus",
            "OperationsDetails",
            "OperationsActionItems",
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
          fieldName: "Payroll Service Provider Access",
          key: "smbPayrollServiceAccess",
          fields: [
            "PayrollServiceAccessStatus",
            "PayrollServiceAccessDetails",
            "PayrollServiceAccessActionItems",
          ],
        },
        {
          fieldName: "No. of employees on roll/Payroll Frequency",
          key: "smbPayrollFrequency",
          fields: [
            "PayrollFrequencyStatus",
            "PayrollFrequencyDetails",
            "PayrollFrequencyActionItems",
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
          fieldName: "Applicablity",
          key: "smbApplicablity",
          fields: [
            "ApplicablityStatus",
            "ApplicablityDetails",
            "ApplicablityActionItems",
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
          fieldName: "Access for Credit Cards Portal1",
          key: "smbAccessCreditCard1",
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
          fieldName: "Access for Credit Cards Portal2",
          key: "smbAccessCreditCard2",
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
          fields: [
            "TaxReturnStatus",
            "TaxReturnDetails",
            "TaxReturnActionItems",
          ],
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
            showToast(Message, ToastType.Error);
            return;
          case "success":
            showToast(Message, ToastType.Success);
            type === 1 && setChecklistFormSubmit(2);
            type === 1 && setChecklistCount(2);
            type === 2 && getFormDetials();
            return;
        }
      };

      const saveClientIndo = "/api/clients/save-client-info";
      callAPIwithHeaders(saveClientIndo, "post", callBack, {
        userId: Number(userID),
        businessTypeId: 2,
        checkList: checkList,
      });
    }else{

    }
  };

  return (
    <>
      <div
        className={`flex flex-col ${
          roleId !== "4" ? "h-[95vh]" : "h-full"
        } pt-12`}
      >
        <div className={`flex-1 overflow-y-scroll`}>
          <div className="m-6 flex flex-col gap-6">
            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.COMMUNICATION
              }
              handleChange={handleAccordianChange(
                AccordianExpand.COMMUNICATION
              )}
              title="Phase 1: People and Business"
            >
              <SmbPeopleBusinessChecklist
                peopleBusinessErrors={smbPeopleBusinessErrors}
                smbClientName={smbClientName}
                setSmbClientName={setSmbClientName}
                smbClientWebsite={smbClientWebsite}
                setSmbClientWebsite={setSmbClientWebsite}
                smbDepartment={smbDepartment}
                setSmbDepartment={setSmbDepartment}
                smbOperations={smbOperations}
                setSmbOperations={setSmbOperations}
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
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
              )}
              title="Phase 2: System & Document Access"
            >
              <SmbSystemAccessChecklist
                smbPABSGroupEmail={smbPABSGroupEmail}
                setSmbPABSGroupEmail={setSmbPABSGroupEmail}
                smbAccessAccountingSoftware={smbAccessAccountingSoftware}
                setSmbAccessAccountingSoftware={setSmbAccessAccountingSoftware}
                smbDropboxSetUp={smbDropboxSetUp}
                setSmbDropboxSetUp={setSmbDropboxSetUp}
                smbPayrollServiceAccess={smbPayrollServiceAccess}
                setSmbPayrollServiceAccess={setSmbPayrollServiceAccess}
                smbPayrollFrequency={smbPayrollFrequency}
                setSmbPayrollFrequency={setSmbPayrollFrequency}
                smbModeOfPayment={smbModeOfPayment}
                setSmbModeOfPayment={setSmbModeOfPayment}
                smbApBills={smbApBills}
                setSmbApBills={setSmbApBills}
                smbApplicablity={smbApplicablity}
                setSmbApplicablity={setSmbApplicablity}
              />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.CASH_BANKING_LOANS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.CASH_BANKING_LOANS
              )}
              title="Phase 3: Cash & Banking Access"
            >
              <SmbBankingAccessChecklist
                smbSavingAccount={smbSavingAccount}
                setSmbSavingAccount={setSmbSavingAccount}
                smbAccessSavingAccount={smbAccessSavingAccount}
                setSmbAccessSavingAccount={setSmbAccessSavingAccount}
                smbAddCards={smbAddCards}
                setSmbAddCards={setSmbAddCards}
                smbAccessCreditCard1={smbAccessCreditCard1}
                setSmbAccessCreditCard1={setSmbAccessCreditCard1}
                smbAccessLoanAccount={smbAccessLoanAccount}
                setSmbAccessLoanAccount={setSmbAccessLoanAccount}
                smbAccessCreditCard2={smbAccessCreditCard2}
                setSmbAccessCreditCard2={setSmbAccessCreditCard2}
              />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.PAYROLL_SYSTEM
              }
              handleChange={handleAccordianChange(
                AccordianExpand.PAYROLL_SYSTEM
              )}
              title="Phase 4: Condition of Existing Financials"
            >
              <SmbExistingFinancialsChecklist
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
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.COMPLIANCES
              }
              handleChange={handleAccordianChange(AccordianExpand.COMPLIANCES)}
              title="Phase 5: Meeting Availability"
            >
              <SmbMeetingChecklist
                smbTimeZone={smbTimeZone}
                setSmbTimeZone={setSmbTimeZone}
                smbConvenient={smbConvenient}
                setSmbConvenient={setSmbConvenient}
                smbTimeSlot={smbTimeSlot}
                setSmbTimeSlot={setSmbTimeSlot}
              />
            </ChecklistAccordian>
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <span></span>
          <div className="flex gap-5">
            <Button
              onClick={() => handleSubmit(3)}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[16px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => handleSubmit(1)}
              className={`!bg-[#022946] text-white !rounded-full`}
              variant="contained"
            >
              <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
                Next: System Access Status
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChecklistSmb;
