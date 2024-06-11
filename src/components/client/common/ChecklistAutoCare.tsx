import React, { useState } from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Types import
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import AutoCareCommmunicationChecklist from "@/components/client/forms/autocare/AutoCareCommmunicationChecklist";
import {
  AccordianExpand,
  fieldDisplayNamesCashBankLoans,
  fieldDisplayNamesCompliances,
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
  initialAutoCareGroupEmailEstablished,
  initialAutoCareITStructureReview,
  initialAutoCareKickOff,
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
  initialAutoCareTireTax,
  initialAutoCareTradeAccount,
  initialAutoCareUseTax,
  initialAutoCareVendorPortalAccess,
  validateAutoCareCashBankLoansField,
  validateAutoCareCompliancesField,
  validateAutoCareFrequencyField,
  validateAutoCarePayableCashPayAccessField,
  validateAutoCareSystemSoftwareLocationField,
} from "@/static/autoCareChecklist";
import AutoCareSystemLocationChecklist from "../forms/autocare/AutoCareSystemLocationChecklist";
import AutoCareCashBankLoans from "../forms/autocare/AutoCareCashBankLoans";
import AutoCarePayrollSystem from "../forms/autocare/AutoCarePayrollSystem";
import AutoCareCompliances from "../forms/autocare/AutoCareCompliances";
import AutoCarePayableCashPayAccess from "../forms/autocare/AutoCarePayableCashPayAccess";
import AutoCareStatusCondition from "../forms/autocare/AutoCareStatusCondition";
import {
  AccessComputerFormTypes,
  AccountingSoftwareFormTypes,
  ApThresholdLimitFormTypes,
  BillPayAccessFormTypes,
  BusinessLoansFormTypes,
  CloudDocumentManagementFormTypes,
  CreditCardFormTypes,
  EstimatingSoftwareFormTypes,
  FrequencyFormTypes,
  GroupEmailEstablishedFormTypes,
  ITStructureReviewFormTypes,
  KickOffFormTypes,
  LastTaxReturnFiledYearFormTypes,
  NoOfEmployeeFormTypes,
  OperatingCheckingAccountFormTypes,
  PayrollServiceProviderFormTypes,
  PosSoftwareFormTypes,
  PreKickOffFormTypes,
  PropertyLoansFormTypes,
  SalesTaxAccessWorkPaperFormTypes,
  SavingsAccountFormTypes,
  ScannerFormTypes,
  TireTaxFormTypes,
  TradeAccountFormTypes,
  UseTaxFormTypes,
  VendorPortalAccessFormTypes,
} from "@/models/autoCarChecklist";

function ChecklistAutoCare({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistAutoCareType) {
  const roleId = Cookies.get("roleId");
  const initialAutoCareSystemSoftwareLocationErrors: any = {};
  const initialAutoCareCashBankLoansErrors: any = {};
  const initialAutoCareFrequencyErrors: any = {};
  const initialAutoCareCompliancesErrors: any = {};
  const initialAutoCarePayableCashPayAccessErrors: any = {};

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

  const [
    autoCareSystemSoftwareLocationErrors,
    setAutoCareSystemSoftwareLocationErrors,
  ] = useState<any>(initialAutoCareSystemSoftwareLocationErrors);
  const [autoCareCashbankLoansErrors, setAutoCareCashbankLoansErrors] =
    useState<any>(initialAutoCareCashBankLoansErrors);
  const [autoCareFrequencyErrors, setAutoCareFrequencyErrors] = useState<any>(
    initialAutoCareFrequencyErrors
  );
  const [autoCareCompliancesErrors, setAutoCareCompliancesErrors] =
    useState<any>(initialAutoCareCompliancesErrors);
  const [
    autoCarePayableCashPayAccessErrors,
    setAutoCarePayableCashPayAccessErrors,
  ] = useState<any>(initialAutoCarePayableCashPayAccessErrors);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
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
    return hasErrors;
  };

  const validateAutoCareCompliances = () => {
    const newCompliancesErrors: { [key: string]: string } = {};

    validateAutoCareCompliancesField.forEach((field) => {
      if (!autoCarePayrollServiceProvider[field] && !autoCareFrequency[field]) {
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
    return hasErrors;
  };

  const validateAutoCarePayableCashPayAccess = () => {
    const newPayableCashPayAccessErrors: { [key: string]: string } = {};

    validateAutoCarePayableCashPayAccessField.forEach((field) => {
      if (!autoCarePayrollServiceProvider[field] && !autoCareFrequency[field]) {
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
    return hasErrors;
  };

  const handleSubmit = (type: number) => {
    if (type === 1) {
      setChecklistFormSubmit(3);
      validateAutoCarePayableCashPayAccess();
      validateAutoCareCompliances();
      validateAutoCareFrequency();
      validateAutoCareSystemSoftwareLocation();
      validateAutoCareCashBankLoans();
      const isValid =
        !validateAutoCareSystemSoftwareLocation() &&
        !validateAutoCareSystemSoftwareLocation() &&
        !validateAutoCareCompliances() &&
        !validateAutoCarePayableCashPayAccess() &&
        !validateAutoCareCashBankLoans();
      if (isValid) {
        console.log("completed..");
      }
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
              title="Phase 1: Communication"
            >
              <AutoCareCommmunicationChecklist
                autoCareGroupEmailEstablished={autoCareGroupEmailEstablished}
                setAutoCareGroupEmailEstablished={
                  setAutoCareGroupEmailEstablished
                }
                autoCarePreKickOff={autoCarePreKickOff}
                setAutoCarePreKickOff={setAutoCarePreKickOff}
                autoCareKickOff={autoCareKickOff}
                setAutoCareKickOff={setAutoCareKickOff}
              />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.SYSTEM_SOFTWARE_LOCATIONS
              )}
              title="Phase 2: System, Software Locations"
            >
              <AutoCareSystemLocationChecklist
                systemSoftwareLocationErrors={
                  autoCareSystemSoftwareLocationErrors
                }
                autoCareITStructureReview={autoCareITStructureReview}
                setAutoCareITStructureReview={setAutoCareITStructureReview}
                autoCareAccessComputerMethod={autoCareAccessComputerMethod}
                setAutoCareAccessComputerMethod={
                  setAutoCareAccessComputerMethod
                }
                autoCarePosSoftware={autoCarePosSoftware}
                setAutoCarePosSoftware={setAutoCarePosSoftware}
                autoCareEstimatingSoftware={autoCareEstimatingSoftware}
                setAutoCareEstimatingSoftware={setAutoCareEstimatingSoftware}
                autoCareAccountingSoftware={autoCareAccountingSoftware}
                setAutoCareAccountingSoftware={setAutoCareAccountingSoftware}
                autoCareCloudDocumentManagement={
                  autoCareCloudDocumentManagement
                }
                setAutoCareCloudDocumentManagement={
                  setAutoCareCloudDocumentManagement
                }
                autoCareScanner={autoCareScanner}
                setAutoCareScanner={setAutoCareScanner}
              />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.CASH_BANKING_LOANS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.CASH_BANKING_LOANS
              )}
              title="Phase 3: Cash and Banking & Loans"
            >
              <AutoCareCashBankLoans
                cashBankLoansErrors={autoCareCashbankLoansErrors}
                autoCareOperatingCheckingAccount={
                  autoCareOperatingCheckingAccount
                }
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
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.PAYROLL_SYSTEM
              }
              handleChange={handleAccordianChange(
                AccordianExpand.PAYROLL_SYSTEM
              )}
              title="Phase 4: Payroll System"
            >
              <AutoCarePayrollSystem
                payrollSystemError={autoCareFrequencyErrors}
                autoCarePayrollServiceProvider={autoCarePayrollServiceProvider}
                setAutoCarePayrollServiceProvider={
                  setAutoCarePayrollServiceProvider
                }
                autoCareFrequency={autoCareFrequency}
                setAutoCareFrequency={setAutoCareFrequency}
                autoCareNoOfEmployee={autoCareNoOfEmployee}
                setAutoCareNoOfEmployee={setAutoCareNoOfEmployee}
              />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.COMPLIANCES
              }
              handleChange={handleAccordianChange(AccordianExpand.COMPLIANCES)}
              title="Phase 5: Compliances"
            >
              <AutoCareCompliances
                compliancesErrors={autoCareCompliancesErrors}
                autoCareSalesTaxAccessWorkPaper={
                  autoCareSalesTaxAccessWorkPaper
                }
                setAutoCareSalesTaxAccessWorkPaper={
                  setAutoCareSalesTaxAccessWorkPaper
                }
                autoCareUseTax={autoCareUseTax}
                setAutoCareUseTax={setAutoCareUseTax}
                autoCareTireTax={autoCareTireTax}
                setAutoCareTireTax={setAutoCareTireTax}
                autoCareLastTaxReturnFiledYear={autoCareLastTaxReturnFiledYear}
                setAutoCareLastTaxReturnFiledYear={
                  setAutoCareLastTaxReturnFiledYear
                }
              />
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={expandedAccordian === AccordianExpand.AP}
              handleChange={handleAccordianChange(AccordianExpand.AP)}
              title="Phase 6: Access"
            >
              <AutoCarePayableCashPayAccess
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
            </ChecklistAccordian>

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian ===
                AccordianExpand.STATUS_CONDITION_FINANCIALS
              }
              handleChange={handleAccordianChange(
                AccordianExpand.STATUS_CONDITION_FINANCIALS
              )}
              title="Phase 7: Financials"
            >
              <AutoCareStatusCondition />
            </ChecklistAccordian>
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            onClick={() => setChecklistFormSubmit(1)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Back
          </Button>
          <div className="flex gap-5">
            <Button
              onClick={() => handleSubmit(3)}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => handleSubmit(1)}
              className={`!bg-[#022946] text-white !rounded-lg`}
              variant="contained"
            >
              <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
                Next: Login Info
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChecklistAutoCare;
