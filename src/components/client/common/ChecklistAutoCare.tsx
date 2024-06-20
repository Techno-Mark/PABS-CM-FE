import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Static import
import {
  AccordianExpand,
  fieldDisplayNamesCashBankLoans,
  fieldDisplayNamesCompliances,
  fieldDisplayNamesFinancials,
  fieldDisplayNamesFrequency,
  fieldDisplayNamesPayableCashPayAccess,
  fieldDisplayNamesSystemSoftwareLoans,
  initialAutoCareAccessComputerMethod,
  initialAutoCareAccountingSoftware,
  initialAutoCareApThresholdLimit,
  initialAutoCareBillPayAccess,
  initialAutoCareBusinessLoans,
  initialAutoCareCloudDocumentManagement,
  initialAutoCareCreditCard,
  initialAutoCareEstimatingSoftware,
  initialAutoCareFrequency,
  initialAutoCareGP_GMNP_NM,
  initialAutoCareGroupEmailEstablished,
  initialAutoCareITStructureReview,
  initialAutoCareKickOff,
  initialAutoCareLastClosedPeriod,
  initialAutoCareLastTaxReturnFiledYear,
  initialAutoCareNoOfEmployee,
  initialAutoCareOperatingCheckingAccount,
  initialAutoCarePayrollServiceProvider,
  initialAutoCarePosSoftware,
  initialAutoCarePreKickOff,
  initialAutoCarePropertyLoans,
  initialAutoCareSalesTaxAccessWorkPaper,
  initialAutoCareSavingsAccount,
  initialAutoCareScanner,
  initialAutoCareSharingFinancials,
  initialAutoCareTireTax,
  initialAutoCareTradeAccount,
  initialAutoCareUseTax,
  initialAutoCareVendorPortalAccess,
  validateAutoCareCashBankLoansField,
  validateAutoCareCompliancesField,
  validateAutoCareFinancialsField,
  validateAutoCareFrequencyField,
  validateAutoCarePayableCashPayAccessField,
  validateAutoCareSystemSoftwareLocationField,
} from "@/static/autoCareChecklist";
// Component import
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import AutoCareCommmunicationChecklist from "@/components/client/forms/autocare/AutoCareCommmunicationChecklist";
import AutoCareSystemLocationChecklist from "@/components/client/forms/autocare/AutoCareSystemLocationChecklist";
import AutoCareCashBankLoans from "@/components/client/forms/autocare/AutoCareCashBankLoans";
import AutoCarePayrollSystem from "@/components/client/forms/autocare/AutoCarePayrollSystem";
import AutoCareCompliances from "@/components/client/forms/autocare/AutoCareCompliances";
import AutoCarePayableCashPayAccess from "@/components/client/forms/autocare/AutoCarePayableCashPayAccess";
import AutoCareFinancials from "@/components/client/forms/autocare/AutoCareFinancials";
// Models import
import {
  AccessComputerFormTypes,
  AccountingSoftwareFormTypes,
  ApThresholdLimitFormTypes,
  BillPayAccessFormTypes,
  BusinessLoansFormTypes,
  ChecklistResponseDataType,
  CloudDocumentManagementFormTypes,
  CreditCardFormTypes,
  EstimatingSoftwareFormTypes,
  FrequencyFormTypes,
  GP_GMNP_NMFormTypes,
  GroupEmailEstablishedFormTypes,
  ITStructureReviewFormTypes,
  KickOffFormTypes,
  LastClosedPeriodFormErrors,
  LastClosedPeriodFormTypes,
  LastTaxReturnFiledYearFormTypes,
  NoOfEmployeeFormTypes,
  OperatingCheckingAccountFormTypes,
  PayrollServiceProviderFormTypes,
  PhaseFormResponseDataType,
  PosSoftwareFormTypes,
  PreKickOffFormTypes,
  PropertyLoansFormTypes,
  SalesTaxAccessWorkPaperFormTypes,
  SavingsAccountFormTypes,
  ScannerFormTypes,
  SharingFinancialsFormTypes,
  TireTaxFormTypes,
  TradeAccountFormTypes,
  UseTaxFormTypes,
  VendorPortalAccessFormTypes,
  autoCareCashBankLoansErrors,
  autoCareCompliancesErrors,
  autoCarePayableCashPayAccessErrors,
  autoCarePayrollSystemErrors,
  autoCareSystemLocationChecklistErrors,
} from "@/models/autoCareChecklist";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { onboardingListFormUrl, onboardingSaveFormUrl } from "@/static/apiUrl";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { ChecklistType } from "@/models/autoCareBasicDetails";

function ChecklistAutoCare({
  clientInfo,
  setChecklistCount,
  setChecklistFormSubmit,
  setIsOpenModal,
  autoCareProgressPercentage,
  checkAllBasicDetails,
  formSubmitId,
}: ChecklistType) {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");
  const initialAutoCareSystemSoftwareLocationErrors: autoCareSystemLocationChecklistErrors =
    {};
  const initialAutoCareCashBankLoansErrors: autoCareCashBankLoansErrors = {};
  const initialAutoCareFrequencyErrors: autoCarePayrollSystemErrors = {};
  const initialAutoCareCompliancesErrors: autoCareCompliancesErrors = {};
  const initialAutoCarePayableCashPayAccessErrors: autoCarePayableCashPayAccessErrors =
    {};
  const initialAutoCareFinancialsErrors: LastClosedPeriodFormErrors = {};

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  const [autoCareGroupEmailEstablished, setAutoCareGroupEmailEstablished] =
    useState<GroupEmailEstablishedFormTypes>(
      initialAutoCareGroupEmailEstablished
    );
  const [autoCarePreKickOff, setAutoCarePreKickOff] =
    useState<PreKickOffFormTypes>(initialAutoCarePreKickOff);
  const [autoCareKickOff, setAutoCareKickOff] = useState<KickOffFormTypes>(
    initialAutoCareKickOff
  );

  const [autoCareITStructureReview, setAutoCareITStructureReview] =
    useState<ITStructureReviewFormTypes>(initialAutoCareITStructureReview);
  const [autoCareAccessComputerMethod, setAutoCareAccessComputerMethod] =
    useState<AccessComputerFormTypes>(initialAutoCareAccessComputerMethod);
  const [autoCarePosSoftware, setAutoCarePosSoftware] =
    useState<PosSoftwareFormTypes>(initialAutoCarePosSoftware);
  const [autoCareEstimatingSoftware, setAutoCareEstimatingSoftware] =
    useState<EstimatingSoftwareFormTypes>(initialAutoCareEstimatingSoftware);
  const [autoCareAccountingSoftware, setAutoCareAccountingSoftware] =
    useState<AccountingSoftwareFormTypes>(initialAutoCareAccountingSoftware);
  const [autoCareCloudDocumentManagement, setAutoCareCloudDocumentManagement] =
    useState<CloudDocumentManagementFormTypes>(
      initialAutoCareCloudDocumentManagement
    );
  const [autoCareScanner, setAutoCareScanner] = useState<ScannerFormTypes>(
    initialAutoCareScanner
  );

  const [
    autoCareOperatingCheckingAccount,
    setAutoCareOperatingCheckingAccount,
  ] = useState<OperatingCheckingAccountFormTypes>(
    initialAutoCareOperatingCheckingAccount
  );
  const [autoCareSavingsAccount, setAutoCareSavingsAccount] =
    useState<SavingsAccountFormTypes>(initialAutoCareSavingsAccount);
  const [autoCareCreditCard, setAutoCareCreditCard] =
    useState<CreditCardFormTypes>(initialAutoCareCreditCard);
  const [autoCareBusinessLoans, setAutoCareBusinessLoans] =
    useState<BusinessLoansFormTypes>(initialAutoCareBusinessLoans);
  const [autoCarePropertyLoans, setAutoCarePropertyLoans] =
    useState<PropertyLoansFormTypes>(initialAutoCarePropertyLoans);

  const [autoCarePayrollServiceProvider, setAutoCarePayrollServiceProvider] =
    useState<PayrollServiceProviderFormTypes>(
      initialAutoCarePayrollServiceProvider
    );
  const [autoCareFrequency, setAutoCareFrequency] =
    useState<FrequencyFormTypes>(initialAutoCareFrequency);
  const [autoCareNoOfEmployee, setAutoCareNoOfEmployee] =
    useState<NoOfEmployeeFormTypes>(initialAutoCareNoOfEmployee);

  const [autoCareSalesTaxAccessWorkPaper, setAutoCareSalesTaxAccessWorkPaper] =
    useState<SalesTaxAccessWorkPaperFormTypes>(
      initialAutoCareSalesTaxAccessWorkPaper
    );
  const [autoCareUseTax, setAutoCareUseTax] = useState<UseTaxFormTypes>(
    initialAutoCareUseTax
  );
  const [autoCareTireTax, setAutoCareTireTax] = useState<TireTaxFormTypes>(
    initialAutoCareTireTax
  );
  const [autoCareLastTaxReturnFiledYear, setAutoCareLastTaxReturnFiledYear] =
    useState<LastTaxReturnFiledYearFormTypes>(
      initialAutoCareLastTaxReturnFiledYear
    );

  const [autoCareVendorPortalAccess, setAutoCareVendorPortalAccess] =
    useState<VendorPortalAccessFormTypes>(initialAutoCareVendorPortalAccess);
  const [autoCareTradeAccount, setAutoCareTradeAccount] =
    useState<TradeAccountFormTypes>(initialAutoCareTradeAccount);
  const [autoCareBillPayAccess, setAutoCareBillPayAccess] =
    useState<BillPayAccessFormTypes>(initialAutoCareBillPayAccess);
  const [autoCareApThresholdLimit, setAutoCareApThresholdLimit] =
    useState<ApThresholdLimitFormTypes>(initialAutoCareApThresholdLimit);

  const [autoCareLastClosedPeriod, setAutoCareLastClosedPeriod] =
    useState<LastClosedPeriodFormTypes>(initialAutoCareLastClosedPeriod);
  const [autoCareSharingFinancials, setAutoCareSharingFinancials] =
    useState<SharingFinancialsFormTypes>(initialAutoCareSharingFinancials);
  const [autoCaregp_gmnp_nm, setAutoCaregp_gmnp_nm] =
    useState<GP_GMNP_NMFormTypes>(initialAutoCareGP_GMNP_NM);

  const [
    autoCareSystemSoftwareLocationErrors,
    setAutoCareSystemSoftwareLocationErrors,
  ] = useState<autoCareSystemLocationChecklistErrors>(
    initialAutoCareSystemSoftwareLocationErrors
  );
  const [autoCareCashbankLoansErrors, setAutoCareCashbankLoansErrors] =
    useState<autoCareCashBankLoansErrors>(initialAutoCareCashBankLoansErrors);
  const [autoCareFrequencyErrors, setAutoCareFrequencyErrors] =
    useState<autoCarePayrollSystemErrors>(initialAutoCareFrequencyErrors);
  const [autoCareCompliancesErrors, setAutoCareCompliancesErrors] =
    useState<autoCareCompliancesErrors>(initialAutoCareCompliancesErrors);
  const [
    autoCarePayableCashPayAccessErrors,
    setAutoCarePayableCashPayAccessErrors,
  ] = useState<autoCarePayableCashPayAccessErrors>(
    initialAutoCarePayableCashPayAccessErrors
  );
  const [autoCareFinancialsErrors, setAutoCareFinancialsErrors] =
    useState<LastClosedPeriodFormErrors>(initialAutoCareFinancialsErrors);

  const [autoCareSystemSoftwareHasErrors, setAutoCareSystemSoftwareHasErrors] =
    useState<boolean>(false);
  const [
    autoCareCashBankingLoansHasErrors,
    setAutoCareCashBankingLoansHasErrors,
  ] = useState<boolean>(false);
  const [
    autoCarePayrollServiceProviderHasErrors,
    setAutoCarePayrollServiceProviderHasErrors,
  ] = useState<boolean>(false);
  const [autoCareComplaincesHasErrors, setAutoCareComplaincesHasErrors] =
    useState<boolean>(false);
  const [autoCareAccessHasErrors, setAutoCareAccessHasErrors] =
    useState<boolean>(false);
  const [autoCareFinancialsHasErrors, setAutoCareFinancialsHasErrors] =
    useState<boolean>(false);

  const [communicationChecked, setCommunicationChecked] =
    useState<boolean>(true);
  const [systemSoftwareLocationsChecked, setSystemSoftwareLocationsChecked] =
    useState<boolean>(true);
  const [cashBankLoansChecked, setCashBankLoansChecked] =
    useState<boolean>(true);
  const [payrollSystemChecked, setPayrollSystemChecked] =
    useState<boolean>(true);
  const [compliancesChecked, setCompliancesChecked] = useState<boolean>(true);
  const [accessChecked, setAccessChecked] = useState<boolean>(true);
  const [financialsChecked, setFinancialsChecked] = useState<boolean>(true);
  const [isFormSubmitAutoCareChecklist, setIsFormSubmitAutoCareChecklist] =
    useState<boolean>(false);

  const handleAccordianChange =
    (arg1: number) => (e: SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };

  const validateAutoCareSystemSoftwareLocation = () => {
    const newErrors: { [key: string]: string } = {};

    validateAutoCareSystemSoftwareLocationField.forEach((field) => {
      if (!autoCarePosSoftware[field] && !autoCareAccountingSoftware[field]) {
        newErrors[
          field
        ] = `${fieldDisplayNamesSystemSoftwareLoans[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setAutoCareSystemSoftwareLocationErrors(newErrors);
    setAutoCareSystemSoftwareHasErrors(hasErrors);
    return hasErrors;
  };

  const validateAutoCareCashBankLoans = () => {
    const newCashBankLoansErrors: { [key: string]: string } = {};

    validateAutoCareCashBankLoansField.forEach((field) => {
      if (
        !autoCareOperatingCheckingAccount[field] &&
        !autoCareSavingsAccount[field] &&
        !autoCareCreditCard[field]
      ) {
        newCashBankLoansErrors[
          field
        ] = `${fieldDisplayNamesCashBankLoans[field]} is required`;
      } else {
        newCashBankLoansErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newCashBankLoansErrors).some(
      (error) => !!error
    );
    setAutoCareCashbankLoansErrors(newCashBankLoansErrors);
    setAutoCareCashBankingLoansHasErrors(hasErrors);
    return hasErrors;
  };

  const validateAutoCareFrequency = () => {
    const newFrequencyErrors: { [key: string]: string } = {};

    validateAutoCareFrequencyField.forEach((field) => {
      if (!autoCarePayrollServiceProvider[field] && !autoCareFrequency[field]) {
        newFrequencyErrors[
          field
        ] = `${fieldDisplayNamesFrequency[field]} is required`;
      } else {
        newFrequencyErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newFrequencyErrors).some(
      (error) => !!error
    );
    setAutoCareFrequencyErrors(newFrequencyErrors);
    setAutoCarePayrollServiceProviderHasErrors(hasErrors);
    return hasErrors;
  };

  const validateAutoCareCompliances = () => {
    const newCompliancesErrors: { [key: string]: string } = {};

    validateAutoCareCompliancesField.forEach((field) => {
      if (
        !autoCareSalesTaxAccessWorkPaper[field] &&
        !autoCareUseTax[field] &&
        !autoCareTireTax[field] &&
        !autoCareLastTaxReturnFiledYear[field]
      ) {
        newCompliancesErrors[
          field
        ] = `${fieldDisplayNamesCompliances[field]} is required`;
      } else {
        newCompliancesErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newCompliancesErrors).some(
      (error) => !!error
    );
    setAutoCareCompliancesErrors(newCompliancesErrors);
    setAutoCareComplaincesHasErrors(hasErrors);
    return hasErrors;
  };

  const validateAutoCarePayableCashPayAccess = () => {
    const newPayableCashPayAccessErrors: { [key: string]: string } = {};

    validateAutoCarePayableCashPayAccessField.forEach((field) => {
      if (!autoCareVendorPortalAccess[field] && !autoCareBillPayAccess[field]) {
        newPayableCashPayAccessErrors[
          field
        ] = `${fieldDisplayNamesPayableCashPayAccess[field]} is required`;
      } else {
        newPayableCashPayAccessErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newPayableCashPayAccessErrors).some(
      (error) => !!error
    );
    setAutoCarePayableCashPayAccessErrors(newPayableCashPayAccessErrors);
    setAutoCareAccessHasErrors(hasErrors);
    return hasErrors;
  };

  const validateAutoCareFinancials = () => {
    const newFinancialsErrors: { [key: string]: string } = {};

    validateAutoCareFinancialsField.forEach((field) => {
      if (!autoCareLastClosedPeriod[field]) {
        newFinancialsErrors[
          field
        ] = `${fieldDisplayNamesFinancials[field]} is required`;
      } else {
        newFinancialsErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newFinancialsErrors).some(
      (error) => !!error
    );
    setAutoCareFinancialsErrors(newFinancialsErrors);
    setAutoCareFinancialsHasErrors(hasErrors);
    return hasErrors;
  };

  const handleChecklistInitialValues = () => {
    setAutoCareGroupEmailEstablished(initialAutoCareGroupEmailEstablished);
    setAutoCarePreKickOff(initialAutoCarePreKickOff);
    setAutoCareKickOff(initialAutoCareKickOff);
    setAutoCareITStructureReview(initialAutoCareITStructureReview);
    setAutoCareAccessComputerMethod(initialAutoCareAccessComputerMethod);
    setAutoCarePosSoftware(initialAutoCarePosSoftware);
    setAutoCareEstimatingSoftware(initialAutoCareEstimatingSoftware);
    setAutoCareAccountingSoftware(initialAutoCareAccountingSoftware);
    setAutoCareCloudDocumentManagement(initialAutoCareCloudDocumentManagement);
    setAutoCareScanner(initialAutoCareScanner);
    setAutoCareOperatingCheckingAccount(
      initialAutoCareOperatingCheckingAccount
    );
    setAutoCareSavingsAccount(initialAutoCareSavingsAccount);
    setAutoCareCreditCard(initialAutoCareCreditCard);
    setAutoCareBusinessLoans(initialAutoCareBusinessLoans);
    setAutoCarePropertyLoans(initialAutoCarePropertyLoans);
    setAutoCarePayrollServiceProvider(initialAutoCarePayrollServiceProvider);
    setAutoCareFrequency(initialAutoCareFrequency);
    setAutoCareNoOfEmployee(initialAutoCareNoOfEmployee);
    setAutoCareSalesTaxAccessWorkPaper(initialAutoCareSalesTaxAccessWorkPaper);
    setAutoCareUseTax(initialAutoCareUseTax);
    setAutoCareTireTax(initialAutoCareTireTax);
    setAutoCareLastTaxReturnFiledYear(initialAutoCareLastTaxReturnFiledYear);
    setAutoCareVendorPortalAccess(initialAutoCareVendorPortalAccess);
    setAutoCareTradeAccount(initialAutoCareTradeAccount);
    setAutoCareBillPayAccess(initialAutoCareBillPayAccess);
    setAutoCareApThresholdLimit(initialAutoCareApThresholdLimit);
    setAutoCareLastClosedPeriod(initialAutoCareLastClosedPeriod);
    setAutoCareSharingFinancials(initialAutoCareSharingFinancials);
  };

  const handleChecklistRemoveErrors = () => {
    setAutoCareSystemSoftwareLocationErrors({});
    setAutoCareCashbankLoansErrors({});
    setAutoCareFrequencyErrors({});
    setAutoCareCompliancesErrors({});
    setAutoCarePayableCashPayAccessErrors({});
    setAutoCareFinancialsErrors({});
    setAutoCareSystemSoftwareHasErrors(false);
    setAutoCareCashBankingLoansHasErrors(false);
    setAutoCarePayrollServiceProviderHasErrors(false);
    setAutoCareComplaincesHasErrors(false);
    setAutoCareAccessHasErrors(false);
    setAutoCareFinancialsHasErrors(false);
  };

  const getAutoCareChecklistData = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: ChecklistResponseDataType
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          if (!!ResponseData) {
            setIsFormSubmitAutoCareChecklist(ResponseData?.isSubmited ?? false);
            setCommunicationChecked(
              ResponseData?.phase1CommunicationIsDisplay ?? true
            );
            setSystemSoftwareLocationsChecked(
              ResponseData?.phase2SystemIsDisplay ?? true
            );
            setCashBankLoansChecked(ResponseData?.phase3CashIsDisplay ?? true);
            setPayrollSystemChecked(
              ResponseData?.phase4PayrollIsDisplay ?? true
            );
            setCompliancesChecked(
              ResponseData?.phase5CompliancesIsDisplay ?? true
            );
            setAccessChecked(ResponseData?.phase6ApPayableIsDisplay ?? true);
            setFinancialsChecked(ResponseData?.phase7StatusIsDisplay ?? true);
            ResponseData.checkList.forEach(
              (checklistItem: PhaseFormResponseDataType) => {
                switch (checklistItem.fieldName) {
                  case "Group Email Established":
                    setAutoCareGroupEmailEstablished({
                      groupEmailEstablishStatus: checklistItem.status,
                      groupEmailEstablishComments: checklistItem.comments,
                      groupEmailEstablishDetails: checklistItem.details,
                      groupEmailEstablishActionName:
                        checklistItem.actionsOfPabs,
                      groupEmailEstablishActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Pre Kick Off":
                    setAutoCarePreKickOff({
                      preKickOffStatus: checklistItem.status,
                      preKickOffComments: checklistItem.comments,
                      preKickOffDetails: checklistItem.details,
                      preKickOffActionName: checklistItem.actionsOfPabs,
                      preKickOffActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Kick Off":
                    setAutoCareKickOff({
                      kickOffStatus: checklistItem.status,
                      kickOffComments: checklistItem.comments,
                      kickOffDetails: checklistItem.details,
                      kickOffActionName: checklistItem.actionsOfPabs,
                      kickOffActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "IT Structure Review":
                    setAutoCareITStructureReview({
                      itStructureStatus: checklistItem.status,
                      itStructureComments: checklistItem.comments,
                      itStructureDetails: checklistItem.details,
                      itStructureActionName: checklistItem.actionsOfPabs,
                      itStructureActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Access Computer Method":
                    setAutoCareAccessComputerMethod({
                      accessComputerStatus: checklistItem.status,
                      accessComputerComments: checklistItem.comments,
                      accessComputerDetails: checklistItem.details,
                      accessComputerActionName: checklistItem.actionsOfPabs,
                      accessComputerActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "POS Software":
                    setAutoCarePosSoftware({
                      posSoftwareStatus: checklistItem.status,
                      posSoftwareComments: checklistItem.comments,
                      posSoftwareDetails: checklistItem.details,
                      posSoftwareActionName: checklistItem.actionsOfPabs,
                      posSoftwareActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Estimating Software":
                    setAutoCareEstimatingSoftware({
                      estimatingSoftwareStatus: checklistItem.status,
                      estimatingSoftwareComments: checklistItem.comments,
                      estimatingSoftwareDetails: checklistItem.details,
                      estimatingSoftwareActionName: checklistItem.actionsOfPabs,
                      estimatingSoftwareActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Accounting Software":
                    setAutoCareAccountingSoftware({
                      accountingSoftwareStatus: checklistItem.status,
                      accountingSoftwareComments: checklistItem.comments,
                      accountingSoftwareDetails: checklistItem.details,
                      accountingSoftwareActionName: checklistItem.actionsOfPabs,
                      accountingSoftwareActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Cloud Document Management":
                    setAutoCareCloudDocumentManagement({
                      cloudDocumentManagementStatus: checklistItem.status,
                      cloudDocumentManagementComments: checklistItem.comments,
                      cloudDocumentManagementDetails: checklistItem.details,
                      cloudDocumentManagementActionName:
                        checklistItem.actionsOfPabs,
                      cloudDocumentManagementActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Scanner":
                    setAutoCareScanner({
                      scannerStatus: checklistItem.status,
                      scannerComments: checklistItem.comments,
                      scannerDetails: checklistItem.details,
                      scannerActionName: checklistItem.actionsOfPabs,
                      scannerActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Operating Checking Account":
                    setAutoCareOperatingCheckingAccount({
                      operatingCheckingAccountStatus: checklistItem.status,
                      operatingCheckingAccountComments: checklistItem.comments,
                      operatingCheckingAccountDetails: checklistItem.details,
                      operatingCheckingAccountActionName:
                        checklistItem.actionsOfPabs,
                      operatingCheckingAccountActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Savings Account":
                    setAutoCareSavingsAccount({
                      savingsAccountStatus: checklistItem.status,
                      savingsAccountComments: checklistItem.comments,
                      savingsAccountDetails: checklistItem.details,
                      savingsAccountActionName: checklistItem.actionsOfPabs,
                      savingsAccountActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Credit Card":
                    setAutoCareCreditCard({
                      creditCardStatus: checklistItem.status,
                      creditCardComments: checklistItem.comments,
                      creditCardDetails: checklistItem.details,
                      creditCardActionName: checklistItem.actionsOfPabs,
                      creditCardActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Business Loans":
                    setAutoCareBusinessLoans({
                      businessLoansStatus: checklistItem.status,
                      businessLoansComments: checklistItem.comments,
                      businessLoansDetails: checklistItem.details,
                      businessLoansActionName: checklistItem.actionsOfPabs,
                      businessLoansActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Property Loans":
                    setAutoCarePropertyLoans({
                      propertyLoansStatus: checklistItem.status,
                      propertyLoansComments: checklistItem.comments,
                      propertyLoansDetails: checklistItem.details,
                      propertyLoansActionName: checklistItem.actionsOfPabs,
                      propertyLoansActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Payroll Service Provider":
                    setAutoCarePayrollServiceProvider({
                      payrollServiceProviderStatus: checklistItem.status,
                      payrollServiceProviderComments: checklistItem.comments,
                      payrollServiceProviderDetails: checklistItem.details,
                      payrollServiceProviderActionName:
                        checklistItem.actionsOfPabs,
                      payrollServiceProviderActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Frequency":
                    setAutoCareFrequency({
                      frequencyStatus: checklistItem.status,
                      frequencyComments: checklistItem.comments,
                      frequencyDetails: checklistItem.details,
                      frequencyActionName: checklistItem.actionsOfPabs,
                      frequencyActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Number of Employees":
                    setAutoCareNoOfEmployee({
                      noOfEmployeeStatus: checklistItem.status,
                      noOfEmployeeComments: checklistItem.comments,
                      noOfEmployeeDetails: checklistItem.details,
                      noOfEmployeeActionName: checklistItem.actionsOfPabs,
                      noOfEmployeeActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Sales Tax Frequency":
                    setAutoCareSalesTaxAccessWorkPaper({
                      salesTaxAccessWorkPaperStatus: checklistItem.status,
                      salesTaxAccessWorkPaperComments: checklistItem.comments,
                      salesTaxAccessWorkPaperDetails: checklistItem.details,
                      salesTaxAccessWorkPaperActionName:
                        checklistItem.actionsOfPabs,
                      salesTaxAccessWorkPaperActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Use Tax":
                    setAutoCareUseTax({
                      useTaxStatus: checklistItem.status,
                      useTaxComments: checklistItem.comments,
                      useTaxDetails: checklistItem.details,
                      useTaxActionName: checklistItem.actionsOfPabs,
                      useTaxActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Tire Tax":
                    setAutoCareTireTax({
                      tireTaxStatus: checklistItem.status,
                      tireTaxComments: checklistItem.comments,
                      tireTaxDetails: checklistItem.details,
                      tireTaxActionName: checklistItem.actionsOfPabs,
                      tireTaxActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Last Tax Return Filed Year":
                    setAutoCareLastTaxReturnFiledYear({
                      lastTaxReturnFiledYearStatus: checklistItem.status,
                      lastTaxReturnFiledYearComments: checklistItem.comments,
                      lastTaxReturnFiledYearDetails: checklistItem.details,
                      lastTaxReturnFiledYearActionName:
                        checklistItem.actionsOfPabs,
                      lastTaxReturnFiledYearActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Vendor Portal Access":
                    setAutoCareVendorPortalAccess({
                      vendorPortalAccessStatus: checklistItem.status,
                      vendorPortalAccessComments: checklistItem.comments,
                      vendorPortalAccessDetails: checklistItem.details,
                      vendorPortalAccessActionName: checklistItem.actionsOfPabs,
                      vendorPortalAccessActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Trade Account":
                    setAutoCareTradeAccount({
                      tradeAccountStatus: checklistItem.status,
                      tradeAccountComments: checklistItem.comments,
                      tradeAccountDetails: checklistItem.details,
                      tradeAccountActionName: checklistItem.actionsOfPabs,
                      tradeAccountActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "Bill Pay Access":
                    setAutoCareBillPayAccess({
                      billPayAccessStatus: checklistItem.status,
                      billPayAccessComments: checklistItem.comments,
                      billPayAccessDetails: checklistItem.details,
                      billPayAccessActionName: checklistItem.actionsOfPabs,
                      billPayAccessActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                  case "AP Threshold Limit":
                    setAutoCareApThresholdLimit({
                      apThresholdLimitStatus: checklistItem.status,
                      apThresholdLimitComments: checklistItem.comments,
                      apThresholdLimitDetails: checklistItem.details,
                      apThresholdLimitActionName: checklistItem.actionsOfPabs,
                      apThresholdLimitActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Last Closed Period":
                    setAutoCareLastClosedPeriod({
                      lastClosedPeriodStatus: checklistItem.status,
                      lastClosedPeriodComments: checklistItem.comments,
                      lastClosedPeriodDetails: checklistItem.details,
                      lastClosedPeriodActionName: checklistItem.actionsOfPabs,
                      lastClosedPeriodActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "Sharing the Financials":
                    setAutoCareSharingFinancials({
                      sharingFinancialsStatus: checklistItem.status,
                      sharingFinancialsComments: checklistItem.comments,
                      sharingFinancialsDetails: checklistItem.details,
                      sharingFinancialsActionName: checklistItem.actionsOfPabs,
                      sharingFinancialsActionItems:
                        checklistItem.actionsOfClient,
                    });
                    break;
                  case "GP/GM NP/NM":
                    setAutoCaregp_gmnp_nm({
                      gp_gmnp_nmStatus: checklistItem.status,
                      gp_gmnp_nmComments: checklistItem.comments,
                      gp_gmnp_nmDetails: checklistItem.details,
                      gp_gmnp_nmActionName: checklistItem.actionsOfPabs,
                      gp_gmnp_nmActionItems: checklistItem.actionsOfClient,
                    });
                    break;
                }
              }
            );
          }
          return;
      }
    };
    await callAPIwithHeaders(onboardingListFormUrl, "post", callback, {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
    });
  };

  useEffect(() => {
    getAutoCareChecklistData();
  }, []);

  useEffect(() => {
    const count = checklistStatus();
    setChecklistCount(count);
  }, [
    autoCareGroupEmailEstablished,
    autoCarePreKickOff,
    autoCareKickOff,
    autoCarePosSoftware,
    autoCareAccountingSoftware,
    autoCareOperatingCheckingAccount,
    autoCareSavingsAccount,
    autoCareCreditCard,
    autoCarePayrollServiceProvider,
    autoCareFrequency,
    autoCareSalesTaxAccessWorkPaper,
    autoCareUseTax,
    autoCareTireTax,
    autoCareLastTaxReturnFiledYear,
    autoCareVendorPortalAccess,
    autoCareBillPayAccess,
    autoCareLastClosedPeriod,
  ]);

  const handleSubmit = (type: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          getAutoCareChecklistData();
          type === 1 && setExpandedAccordian(-1);
          showToast(Message, ToastType.Success);
          return;
      }
    };
    const checklistFormData = {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
      businessTypeId: !!clientInfo?.DepartmentId
        ? parseInt(clientInfo?.DepartmentId)
        : parseInt(businessTypeId!),
      checkList: [
        {
          fieldName: "Group Email Established",
          status: autoCareGroupEmailEstablished.groupEmailEstablishStatus,
          comments: autoCareGroupEmailEstablished.groupEmailEstablishComments,
          details: autoCareGroupEmailEstablished.groupEmailEstablishDetails,
          actionsOfPabs:
            autoCareGroupEmailEstablished.groupEmailEstablishActionName,
          actionsOfClient:
            autoCareGroupEmailEstablished.groupEmailEstablishActionItems,
        },
        {
          fieldName: "Pre Kick Off",
          status: autoCarePreKickOff.preKickOffStatus,
          comments: autoCarePreKickOff.preKickOffComments,
          details: autoCarePreKickOff.preKickOffDetails,
          actionsOfPabs: autoCarePreKickOff.preKickOffActionName,
          actionsOfClient: autoCarePreKickOff.preKickOffActionItems,
        },
        {
          fieldName: "Kick Off",
          status: autoCareKickOff.kickOffStatus,
          comments: autoCareKickOff.kickOffComments,
          details: autoCareKickOff.kickOffDetails,
          actionsOfPabs: autoCareKickOff.kickOffActionName,
          actionsOfClient: autoCareKickOff.kickOffActionItems,
        },
        {
          fieldName: "IT Structure Review",
          status: autoCareITStructureReview.itStructureStatus,
          comments: autoCareITStructureReview.itStructureComments,
          details: autoCareITStructureReview.itStructureDetails,
          actionsOfPabs: autoCareITStructureReview.itStructureActionName,
          actionsOfClient: autoCareITStructureReview.itStructureActionItems,
        },
        {
          fieldName: "Access Computer Method",
          status: autoCareAccessComputerMethod.accessComputerStatus,
          comments: autoCareAccessComputerMethod.accessComputerComments,
          details: autoCareAccessComputerMethod.accessComputerDetails,
          actionsOfPabs: autoCareAccessComputerMethod.accessComputerActionName,
          actionsOfClient:
            autoCareAccessComputerMethod.accessComputerActionItems,
        },
        {
          fieldName: "POS Software",
          status: autoCarePosSoftware.posSoftwareStatus,
          comments: autoCarePosSoftware.posSoftwareComments,
          details: autoCarePosSoftware.posSoftwareDetails,
          actionsOfPabs: autoCarePosSoftware.posSoftwareActionName,
          actionsOfClient: autoCarePosSoftware.posSoftwareActionItems,
        },
        {
          fieldName: "Estimating Software",
          status: autoCareEstimatingSoftware.estimatingSoftwareStatus,
          comments: autoCareEstimatingSoftware.estimatingSoftwareComments,
          details: autoCareEstimatingSoftware.estimatingSoftwareDetails,
          actionsOfPabs:
            autoCareEstimatingSoftware.estimatingSoftwareActionName,
          actionsOfClient:
            autoCareEstimatingSoftware.estimatingSoftwareActionItems,
        },
        {
          fieldName: "Accounting Software",
          status: autoCareAccountingSoftware.accountingSoftwareStatus,
          comments: autoCareAccountingSoftware.accountingSoftwareComments,
          details: autoCareAccountingSoftware.accountingSoftwareDetails,
          actionsOfPabs:
            autoCareAccountingSoftware.accountingSoftwareActionName,
          actionsOfClient:
            autoCareAccountingSoftware.accountingSoftwareActionItems,
        },
        {
          fieldName: "Cloud Document Management",
          status: autoCareCloudDocumentManagement.cloudDocumentManagementStatus,
          comments:
            autoCareCloudDocumentManagement.cloudDocumentManagementComments,
          details:
            autoCareCloudDocumentManagement.cloudDocumentManagementDetails,
          actionsOfPabs:
            autoCareCloudDocumentManagement.cloudDocumentManagementActionName,
          actionsOfClient:
            autoCareCloudDocumentManagement.cloudDocumentManagementActionItems,
        },
        {
          fieldName: "Scanner",
          status: autoCareScanner.scannerStatus,
          comments: autoCareScanner.scannerComments,
          details: autoCareScanner.scannerDetails,
          actionsOfPabs: autoCareScanner.scannerActionName,
          actionsOfClient: autoCareScanner.scannerActionItems,
        },
        {
          fieldName: "Operating Checking Account",
          status:
            autoCareOperatingCheckingAccount.operatingCheckingAccountStatus,
          comments:
            autoCareOperatingCheckingAccount.operatingCheckingAccountComments,
          details:
            autoCareOperatingCheckingAccount.operatingCheckingAccountDetails,
          actionsOfPabs:
            autoCareOperatingCheckingAccount.operatingCheckingAccountActionName,
          actionsOfClient:
            autoCareOperatingCheckingAccount.operatingCheckingAccountActionItems,
        },
        {
          fieldName: "Savings Account",
          status: autoCareSavingsAccount.savingsAccountStatus,
          comments: autoCareSavingsAccount.savingsAccountComments,
          details: autoCareSavingsAccount.savingsAccountDetails,
          actionsOfPabs: autoCareSavingsAccount.savingsAccountActionName,
          actionsOfClient: autoCareSavingsAccount.savingsAccountActionItems,
        },
        {
          fieldName: "Credit Card",
          status: autoCareCreditCard.creditCardStatus,
          comments: autoCareCreditCard.creditCardComments,
          details: autoCareCreditCard.creditCardDetails,
          actionsOfPabs: autoCareCreditCard.creditCardActionName,
          actionsOfClient: autoCareCreditCard.creditCardActionItems,
        },
        {
          fieldName: "Business Loans",
          status: autoCareBusinessLoans.businessLoansStatus,
          comments: autoCareBusinessLoans.businessLoansComments,
          details: autoCareBusinessLoans.businessLoansDetails,
          actionsOfPabs: autoCareBusinessLoans.businessLoansActionName,
          actionsOfClient: autoCareBusinessLoans.businessLoansActionItems,
        },
        {
          fieldName: "Property Loans",
          status: autoCarePropertyLoans.propertyLoansStatus,
          comments: autoCarePropertyLoans.propertyLoansComments,
          details: autoCarePropertyLoans.propertyLoansDetails,
          actionsOfPabs: autoCarePropertyLoans.propertyLoansActionName,
          actionsOfClient: autoCarePropertyLoans.propertyLoansActionItems,
        },
        {
          fieldName: "Payroll Service Provider",
          status: autoCarePayrollServiceProvider.payrollServiceProviderStatus,
          comments:
            autoCarePayrollServiceProvider.payrollServiceProviderComments,
          details: autoCarePayrollServiceProvider.payrollServiceProviderDetails,
          actionsOfPabs:
            autoCarePayrollServiceProvider.payrollServiceProviderActionName,
          actionsOfClient:
            autoCarePayrollServiceProvider.payrollServiceProviderActionItems,
        },
        {
          fieldName: "Frequency",
          status: autoCareFrequency.frequencyStatus,
          comments: autoCareFrequency.frequencyComments,
          details: autoCareFrequency.frequencyDetails,
          actionsOfPabs: autoCareFrequency.frequencyActionName,
          actionsOfClient: autoCareFrequency.frequencyActionItems,
        },
        {
          fieldName: "Number of Employees",
          status: autoCareNoOfEmployee.noOfEmployeeStatus,
          comments: autoCareNoOfEmployee.noOfEmployeeComments,
          details: autoCareNoOfEmployee.noOfEmployeeDetails,
          actionsOfPabs: autoCareNoOfEmployee.noOfEmployeeActionName,
          actionsOfClient: autoCareNoOfEmployee.noOfEmployeeActionItems,
        },
        {
          fieldName: "Sales Tax Frequency",
          status: autoCareSalesTaxAccessWorkPaper.salesTaxAccessWorkPaperStatus,
          comments:
            autoCareSalesTaxAccessWorkPaper.salesTaxAccessWorkPaperComments,
          details:
            autoCareSalesTaxAccessWorkPaper.salesTaxAccessWorkPaperDetails,
          actionsOfPabs:
            autoCareSalesTaxAccessWorkPaper.salesTaxAccessWorkPaperActionName,
          actionsOfClient:
            autoCareSalesTaxAccessWorkPaper.salesTaxAccessWorkPaperActionItems,
        },
        {
          fieldName: "Use Tax",
          status: autoCareUseTax.useTaxStatus,
          comments: autoCareUseTax.useTaxComments,
          details: autoCareUseTax.useTaxDetails,
          actionsOfPabs: autoCareUseTax.useTaxActionName,
          actionsOfClient: autoCareUseTax.useTaxActionItems,
        },
        {
          fieldName: "Tire Tax",
          status: autoCareTireTax.tireTaxStatus,
          comments: autoCareTireTax.tireTaxComments,
          details: autoCareTireTax.tireTaxDetails,
          actionsOfPabs: autoCareTireTax.tireTaxActionName,
          actionsOfClient: autoCareTireTax.tireTaxActionItems,
        },
        {
          fieldName: "Last Tax Return Filed Year",
          status: autoCareLastTaxReturnFiledYear.lastTaxReturnFiledYearStatus,
          comments:
            autoCareLastTaxReturnFiledYear.lastTaxReturnFiledYearComments,
          details: autoCareLastTaxReturnFiledYear.lastTaxReturnFiledYearDetails,
          actionsOfPabs:
            autoCareLastTaxReturnFiledYear.lastTaxReturnFiledYearActionName,
          actionsOfClient:
            autoCareLastTaxReturnFiledYear.lastTaxReturnFiledYearActionItems,
        },
        {
          fieldName: "Vendor Portal Access",
          status: autoCareVendorPortalAccess.vendorPortalAccessStatus,
          comments: autoCareVendorPortalAccess.vendorPortalAccessComments,
          details: autoCareVendorPortalAccess.vendorPortalAccessDetails,
          actionsOfPabs:
            autoCareVendorPortalAccess.vendorPortalAccessActionName,
          actionsOfClient:
            autoCareVendorPortalAccess.vendorPortalAccessActionItems,
        },
        {
          fieldName: "Trade Account",
          status: autoCareTradeAccount.tradeAccountStatus,
          comments: autoCareTradeAccount.tradeAccountComments,
          details: autoCareTradeAccount.tradeAccountDetails,
          actionsOfPabs: autoCareTradeAccount.tradeAccountActionName,
          actionsOfClient: autoCareTradeAccount.tradeAccountActionItems,
        },
        {
          fieldName: "Bill Pay Access",
          status: autoCareBillPayAccess.billPayAccessStatus,
          comments: autoCareBillPayAccess.billPayAccessComments,
          details: autoCareBillPayAccess.billPayAccessDetails,
          actionsOfPabs: autoCareBillPayAccess.billPayAccessActionName,
          actionsOfClient: autoCareBillPayAccess.billPayAccessActionItems,
        },
        {
          fieldName: "AP Threshold Limit",
          status: autoCareApThresholdLimit.apThresholdLimitStatus,
          comments: autoCareApThresholdLimit.apThresholdLimitComments,
          details: autoCareApThresholdLimit.apThresholdLimitDetails,
          actionsOfPabs: autoCareApThresholdLimit.apThresholdLimitActionName,
          actionsOfClient: autoCareApThresholdLimit.apThresholdLimitActionItems,
        },
        {
          fieldName: "Last Closed Period",
          status: autoCareLastClosedPeriod.lastClosedPeriodStatus,
          comments: autoCareLastClosedPeriod.lastClosedPeriodComments,
          details: autoCareLastClosedPeriod.lastClosedPeriodDetails,
          actionsOfPabs: autoCareLastClosedPeriod.lastClosedPeriodActionName,
          actionsOfClient: autoCareLastClosedPeriod.lastClosedPeriodActionItems,
        },
        {
          fieldName: "Sharing the Financials",
          status: autoCareSharingFinancials.sharingFinancialsStatus,
          comments: autoCareSharingFinancials.sharingFinancialsComments,
          details: autoCareSharingFinancials.sharingFinancialsDetails,
          actionsOfPabs: autoCareSharingFinancials.sharingFinancialsActionName,
          actionsOfClient:
            autoCareSharingFinancials.sharingFinancialsActionItems,
        },
        {
          fieldName: "GP/GM NP/NM",
          status: autoCaregp_gmnp_nm.gp_gmnp_nmStatus,
          comments: autoCaregp_gmnp_nm.gp_gmnp_nmComments,
          details: autoCaregp_gmnp_nm.gp_gmnp_nmDetails,
          actionsOfPabs: autoCaregp_gmnp_nm.gp_gmnp_nmActionName,
          actionsOfClient: autoCaregp_gmnp_nm.gp_gmnp_nmActionItems,
        },
      ],
    };
    const isFinancialsValid = financialsChecked
      ? validateAutoCareFinancials()
      : false;
    const isPayableCashPayAccessValid = accessChecked
      ? validateAutoCarePayableCashPayAccess()
      : false;
    const isCompliancesValid = compliancesChecked
      ? validateAutoCareCompliances()
      : false;
    const isFrequencyValid = payrollSystemChecked
      ? validateAutoCareFrequency()
      : false;
    const isSystemSoftwareLocationValid = systemSoftwareLocationsChecked
      ? validateAutoCareSystemSoftwareLocation()
      : false;
    const isCashBankLoansValid = cashBankLoansChecked
      ? validateAutoCareCashBankLoans()
      : false;

    const isValid =
      !isFinancialsValid &&
      !isPayableCashPayAccessValid &&
      !isCompliancesValid &&
      !isFrequencyValid &&
      !isSystemSoftwareLocationValid &&
      !isCashBankLoansValid;

    if (type === 1) {
      const filledFieldsCount = checklistStatus();
      setChecklistCount(filledFieldsCount);
      if (checkAllBasicDetails && roleId === "4") {
        setChecklistFormSubmit(31);
      }

      if (isValid && !checkAllBasicDetails) {
        if (!isFormSubmitAutoCareChecklist) {
          callAPIwithHeaders(onboardingSaveFormUrl, "post", callback, {
            ...checklistFormData,
            progress: autoCareProgressPercentage,
            isSubmited: true,
          });
        }
      } else {
        showToast(
          "Please provide mandatory fields to submit the onboarding form.",
          ToastType.Error
        );
      }
    } else if (type === 2) {
      const isValidStatus =
        financialsChecked ||
        accessChecked ||
        compliancesChecked ||
        payrollSystemChecked ||
        systemSoftwareLocationsChecked ||
        cashBankLoansChecked;
      if (roleId === "4" ? isValidStatus : true) {
        if (!isValid) {
          showToast(
            "Mandatory information is not provided. Please fill in to submit the form.",
            ToastType.Warning
          );
        }
        const filledFieldsCount = checklistStatus();
        setChecklistCount(filledFieldsCount);
        handleChecklistRemoveErrors();
        callAPIwithHeaders(
          onboardingSaveFormUrl,
          "post",
          callback,
          checklistFormData
        );
      }
    } else {
      handleChecklistInitialValues();
      handleChecklistRemoveErrors();
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
      const updateStateFunc: ((value: boolean) => void) | undefined = {
        1: setCommunicationChecked,
        2: setSystemSoftwareLocationsChecked,
        3: setCashBankLoansChecked,
        4: setPayrollSystemChecked,
        5: setCompliancesChecked,
        6: setAccessChecked,
        7: setFinancialsChecked,
      }[phaseType];
      if (updateStateFunc) {
        updateStateFunc(value);
      }
    };

    const requestBody: any = {
      userId: parseInt(clientInfo?.UserId!),
      businessTypeId: parseInt(clientInfo?.DepartmentId!),
    };

    switch (phaseType) {
      case 1:
        requestBody.phase1CommunicationIsDisplay = check;
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
        requestBody.phase4PayrollIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 5:
        requestBody.phase5CompliancesIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 6:
        requestBody.phase6ApPayableIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 7:
        requestBody.phase7StatusIsDisplay = check;
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

  const checklistStatus = () => {
    let relevantFields = [];

    if (financialsChecked) {
      relevantFields.push(
        ...[
          "lastClosedPeriodStatus",
          "lastClosedPeriodComments",
          "lastClosedPeriodDetails",
          "lastClosedPeriodActionName",
          "lastClosedPeriodActionItems",
        ]
      );
    }

    if (systemSoftwareLocationsChecked) {
      relevantFields.push(
        ...[
          "posSoftwareStatus",
          "posSoftwareComments",
          "posSoftwareDetails",
          "posSoftwareActionName",
          "posSoftwareActionItems",
          "accountingSoftwareStatus",
          "accountingSoftwareComments",
          "accountingSoftwareDetails",
          "accountingSoftwareActionName",
          "accountingSoftwareActionItems",
        ]
      );
    }

    if (cashBankLoansChecked) {
      relevantFields.push(
        ...[
          "operatingCheckingAccountStatus",
          "operatingCheckingAccountComments",
          "operatingCheckingAccountDetails",
          "operatingCheckingAccountActionName",
          "operatingCheckingAccountActionItems",
          "savingsAccountStatus",
          "savingsAccountComments",
          "savingsAccountDetails",
          "savingsAccountActionName",
          "savingsAccountActionItems",
          "creditCardStatus",
          "creditCardComments",
          "creditCardDetails",
          "creditCardActionName",
          "creditCardActionItems",
        ]
      );
    }

    if (payrollSystemChecked) {
      relevantFields.push(
        ...[
          "payrollServiceProviderStatus",
          "payrollServiceProviderComments",
          "payrollServiceProviderDetails",
          "payrollServiceProviderActionName",
          "payrollServiceProviderActionItems",
          "frequencyStatus",
          "frequencyComments",
          "frequencyDetails",
          "frequencyActionName",
          "frequencyActionItems",
        ]
      );
    }

    if (compliancesChecked) {
      relevantFields.push(
        ...[
          "salesTaxAccessWorkPaperStatus",
          "salesTaxAccessWorkPaperComments",
          "salesTaxAccessWorkPaperDetails",
          "salesTaxAccessWorkPaperActionName",
          "salesTaxAccessWorkPaperActionItems",
          "useTaxStatus",
          "useTaxComments",
          "useTaxDetails",
          "useTaxActionName",
          "useTaxActionItems",
          "tireTaxStatus",
          "tireTaxComments",
          "tireTaxDetails",
          "tireTaxActionName",
          "tireTaxActionItems",
          "lastTaxReturnFiledYearStatus",
          "lastTaxReturnFiledYearComments",
          "lastTaxReturnFiledYearDetails",
          "lastTaxReturnFiledYearActionName",
          "lastTaxReturnFiledYearActionItems",
        ]
      );
    }

    if (accessChecked) {
      relevantFields.push(
        ...[
          "vendorPortalAccessStatus",
          "vendorPortalAccessComments",
          "vendorPortalAccessDetails",
          "vendorPortalAccessActionName",
          "vendorPortalAccessActionItems",
          "billPayAccessStatus",
          "billPayAccessComments",
          "billPayAccessDetails",
          "billPayAccessActionName",
          "billPayAccessActionItems",
        ]
      );
    }

    if (
      !financialsChecked &&
      !systemSoftwareLocationsChecked &&
      !cashBankLoansChecked &&
      !payrollSystemChecked &&
      !compliancesChecked &&
      !accessChecked &&
      communicationChecked
    ) {
      relevantFields.push(
        "groupEmailEstablishStatus",
        "groupEmailEstablishComments",
        "groupEmailEstablishDetails",
        "groupEmailEstablishActionName",
        "groupEmailEstablishActionItems",
        "preKickOffStatus",
        "preKickOffComments",
        "preKickOffDetails",
        "preKickOffActionName",
        "preKickOffActionItems",
        "kickOffStatus",
        "kickOffComments",
        "kickOffDetails",
        "kickOffActionName",
        "kickOffActionItems"
      );
    }

    let count = 0;
    relevantFields.forEach((field) => {
      if (
        !!autoCareGroupEmailEstablished[field] ||
        !!autoCarePreKickOff[field] ||
        !!autoCareKickOff[field] ||
        !!autoCarePosSoftware[field] ||
        !!autoCareAccountingSoftware[field] ||
        !!autoCareOperatingCheckingAccount[field] ||
        !!autoCareSavingsAccount[field] ||
        !!autoCareCreditCard[field] ||
        !!autoCarePayrollServiceProvider[field] ||
        !!autoCareFrequency[field] ||
        !!autoCareSalesTaxAccessWorkPaper[field] ||
        !!autoCareUseTax[field] ||
        !!autoCareTireTax[field] ||
        !!autoCareLastTaxReturnFiledYear[field] ||
        !!autoCareVendorPortalAccess[field] ||
        !!autoCareBillPayAccess[field] ||
        !!autoCareLastClosedPeriod[field]
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
      checkStatus: communicationChecked,
      expandedStatus: expandedAccordian === AccordianExpand.COMMUNICATION,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 1),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.COMMUNICATION
      ),
      title: "Communication",
      component: (
        <AutoCareCommmunicationChecklist
          checkAllFieldsAutoCareCommunicationList={
            isFormSubmitAutoCareChecklist
          }
          autoCareGroupEmailEstablished={autoCareGroupEmailEstablished}
          setAutoCareGroupEmailEstablished={setAutoCareGroupEmailEstablished}
          autoCarePreKickOff={autoCarePreKickOff}
          setAutoCarePreKickOff={setAutoCarePreKickOff}
          autoCareKickOff={autoCareKickOff}
          setAutoCareKickOff={setAutoCareKickOff}
        />
      ),
    },
    {
      id: 2,
      checkStatus: systemSoftwareLocationsChecked,
      errorStatus: autoCareSystemSoftwareHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 2),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
      ),
      title: "Systems, Software Locations",
      component: (
        <AutoCareSystemLocationChecklist
          checkAllFieldsAutoCareSystemLocation={isFormSubmitAutoCareChecklist}
          systemSoftwareLocationErrors={autoCareSystemSoftwareLocationErrors}
          autoCareITStructureReview={autoCareITStructureReview}
          setAutoCareITStructureReview={setAutoCareITStructureReview}
          autoCareAccessComputerMethod={autoCareAccessComputerMethod}
          setAutoCareAccessComputerMethod={setAutoCareAccessComputerMethod}
          autoCarePosSoftware={autoCarePosSoftware}
          setAutoCarePosSoftware={setAutoCarePosSoftware}
          autoCareEstimatingSoftware={autoCareEstimatingSoftware}
          setAutoCareEstimatingSoftware={setAutoCareEstimatingSoftware}
          autoCareAccountingSoftware={autoCareAccountingSoftware}
          setAutoCareAccountingSoftware={setAutoCareAccountingSoftware}
          autoCareCloudDocumentManagement={autoCareCloudDocumentManagement}
          setAutoCareCloudDocumentManagement={
            setAutoCareCloudDocumentManagement
          }
          autoCareScanner={autoCareScanner}
          setAutoCareScanner={setAutoCareScanner}
        />
      ),
    },
    {
      id: 3,
      checkStatus: cashBankLoansChecked,
      errorStatus: autoCareCashBankingLoansHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.CASH_BANKING_LOANS,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 3),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.CASH_BANKING_LOANS
      ),
      title: "Cash and Banking & Loans",
      component: (
        <AutoCareCashBankLoans
          checkAllFieldsAutoCareCashBankLoans={isFormSubmitAutoCareChecklist}
          cashBankLoansErrors={autoCareCashbankLoansErrors}
          autoCareOperatingCheckingAccount={autoCareOperatingCheckingAccount}
          setAutoCareOperatingCheckingAccount={
            setAutoCareOperatingCheckingAccount
          }
          autoCareSavingsAccount={autoCareSavingsAccount}
          setAutoCareSavingsAccount={setAutoCareSavingsAccount}
          autoCareCreditCard={autoCareCreditCard}
          setAutoCareCreditCard={setAutoCareCreditCard}
          autoCareBusinessLoans={autoCareBusinessLoans}
          setAutoCareBusinessLoans={setAutoCareBusinessLoans}
          autoCarePropertyLoans={autoCarePropertyLoans}
          setAutoCarePropertyLoans={setAutoCarePropertyLoans}
        />
      ),
    },
    {
      id: 4,
      checkStatus: payrollSystemChecked,
      errorStatus: autoCarePayrollServiceProviderHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.PAYROLL_SYSTEM,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 4),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.PAYROLL_SYSTEM
      ),
      title: "Payroll System",
      component: (
        <AutoCarePayrollSystem
          checkAllFieldsAutoCarePayrollSystem={isFormSubmitAutoCareChecklist}
          payrollSystemError={autoCareFrequencyErrors}
          autoCarePayrollServiceProvider={autoCarePayrollServiceProvider}
          setAutoCarePayrollServiceProvider={setAutoCarePayrollServiceProvider}
          autoCareFrequency={autoCareFrequency}
          setAutoCareFrequency={setAutoCareFrequency}
          autoCareNoOfEmployee={autoCareNoOfEmployee}
          setAutoCareNoOfEmployee={setAutoCareNoOfEmployee}
        />
      ),
    },
    {
      id: 5,
      checkStatus: compliancesChecked,
      errorStatus: autoCareComplaincesHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.COMPLIANCES,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 5),
      handleAccordianChange: handleAccordianChange(AccordianExpand.COMPLIANCES),
      title: "Compliances",
      component: (
        <AutoCareCompliances
          checkAllFieldsAutoCareCompliances={isFormSubmitAutoCareChecklist}
          compliancesErrors={autoCareCompliancesErrors}
          autoCareSalesTaxAccessWorkPaper={autoCareSalesTaxAccessWorkPaper}
          setAutoCareSalesTaxAccessWorkPaper={
            setAutoCareSalesTaxAccessWorkPaper
          }
          autoCareUseTax={autoCareUseTax}
          setAutoCareUseTax={setAutoCareUseTax}
          autoCareTireTax={autoCareTireTax}
          setAutoCareTireTax={setAutoCareTireTax}
          autoCareLastTaxReturnFiledYear={autoCareLastTaxReturnFiledYear}
          setAutoCareLastTaxReturnFiledYear={setAutoCareLastTaxReturnFiledYear}
        />
      ),
    },
    {
      id: 6,
      checkStatus: accessChecked,
      errorStatus: autoCareAccessHasErrors,
      expandedStatus: expandedAccordian === AccordianExpand.AP,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 6),
      handleAccordianChange: handleAccordianChange(AccordianExpand.AP),
      title: "AP - Payable Cash Payment Access",
      component: (
        <AutoCarePayableCashPayAccess
          checkAllFieldsAutoCarePayableCashPayAccess={
            isFormSubmitAutoCareChecklist
          }
          payableCashPayAccessError={autoCarePayableCashPayAccessErrors}
          autoCareVendorPortalAccess={autoCareVendorPortalAccess}
          setAutoCareVendorPortalAccess={setAutoCareVendorPortalAccess}
          autoCareTradeAccount={autoCareTradeAccount}
          setAutoCareTradeAccount={setAutoCareTradeAccount}
          autoCareBillPayAccess={autoCareBillPayAccess}
          setAutoCareBillPayAccess={setAutoCareBillPayAccess}
          autoCareApThresholdLimit={autoCareApThresholdLimit}
          setAutoCareApThresholdLimit={setAutoCareApThresholdLimit}
        />
      ),
    },
    {
      id: 7,
      checkStatus: financialsChecked,
      errorStatus: autoCareFinancialsHasErrors,
      expandedStatus:
        expandedAccordian === AccordianExpand.STATUS_CONDITION_FINANCIALS,
      handleSwitchChange: (e: any) => handleSwitchChange(e, 7),
      handleAccordianChange: handleAccordianChange(
        AccordianExpand.STATUS_CONDITION_FINANCIALS
      ),
      title: "Status and Condition of Existing Financials",
      component: (
        <AutoCareFinancials
          checkAllFieldsAutoCareFinancials={isFormSubmitAutoCareChecklist}
          financialsErrors={autoCareFinancialsErrors}
          autoCareSharingFinancials={autoCareSharingFinancials}
          setAutoCareSharingFinancials={setAutoCareSharingFinancials}
          autoCareLastClosedPeriod={autoCareLastClosedPeriod}
          setAutoCareLastClosedPeriod={setAutoCareLastClosedPeriod}
          autoCaregp_gmnp_nm={autoCaregp_gmnp_nm}
          setAutoCaregp_gmnp_nm={setAutoCaregp_gmnp_nm}
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
      {formSubmitId === 32 && (
        <div
          className={`flex flex-col ${
            roleId !== "4" ? "h-[95vh]" : "h-full"
          } pt-12`}
        >
          <div className={`flex-1 overflow-y-scroll`}>
            <div className="m-6 flex flex-col gap-6">
              {updatedPhases.map((phase) => (
                <ChecklistAccordian
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
                !communicationChecked &&
                !cashBankLoansChecked &&
                !payrollSystemChecked &&
                !compliancesChecked &&
                !accessChecked &&
                !financialsChecked && (
                  <span className="text-[14px] flex justify-center items-center text-[#333333]">
                    No details for implementation checklist found for your
                    account. Please contact PABS team to get support.
                  </span>
                )}
            </div>
          </div>

          <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
            <Button
              onClick={() => {
                setChecklistFormSubmit(31);
              }}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Back
            </Button>
            <div className="flex gap-5">
              {roleId !== "4" && (
                <Button
                  onClick={() => setIsOpenModal(false)}
                  className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
                  variant="outlined"
                >
                  Cancel
                </Button>
              )}
              {(roleId === "4" ? !isFormSubmitAutoCareChecklist : true) && (
                <Button
                  onClick={() => handleSubmit(2)}
                  className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
                  variant="outlined"
                >
                  Save
                </Button>
              )}
              {roleId === "4" && !isFormSubmitAutoCareChecklist && (
                <Button
                  onClick={() => handleSubmit(1)}
                  className={`!bg-[#022946] text-white !rounded-full`}
                  variant="contained"
                >
                  <span className="uppercase font-semibold text-[14px] whitespace-nowrap">
                    Submit
                  </span>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChecklistAutoCare;
