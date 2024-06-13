import { Button } from "@mui/material";
import { useState } from "react";
// Cookie import
import Cookies from "js-cookie";
// Types import
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import {
  AccessAccountingSoftwareFormTypes,
  AccessCreditCardFormTypes,
  AccessCreditCardPortalFormTypes,
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
  FiscalYearEndFormTypes,
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
  initialAccessCreditCard,
  initialAccessCreditCardPortal,
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

function ChecklistSmb({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistAutoCareType) {
  const roleId = Cookies.get("roleId");
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

  const [smbAccessCreditCard, setSmbAccessCreditCard] =
    useState<AccessCreditCardFormTypes>(initialAccessCreditCard);

  const [smbAccessLoanAccount, setSmbAccessLoanAccount] =
    useState<any>(initialAccessLoanAccount);

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

  const [smbPeopleBusinessErrors, setSmbPeopleBusinessErrors] = useState<any>(
    initialSmbPeopleBusinessErrors
  );

  const [smbSystemAccessErrors, setSmbSystemAccessErrors] = useState<any>(
    initialSmbSystemAccessErrors
  );

  const [smbBankingAccessErrors, setSmbBankingAccessErrors] = useState<any>(
    initialSmbBankingAccessErrors
  );

  const [smbExistingFinancialsErrors, setSmbExistingFinancialsErrors] =
    useState<any>(initialSmbExistingFinancialsErrors);

  const [smbMeetingErrors, setSmbMeetingErrors] = useState<any>(
    initialSmbMeetingErrors
  );

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

  const validateSmbSystemAccess = () => {
    const newErrors: { [key: string]: string } = {};

    validateSmbSystemAccessField.forEach((field) => {
      if (
        !smbPABSGroupEmail[field] &&
        !smbAccessAccountingSoftware[field] &&
        !smbDropboxSetUp[field] &&
        !smbPayrollServiceAccess[field] &&
        !smbPayrollFrequency[field] &&
        !smbModeOfPayment[field] &&
        !smbApBills[field] &&
        !smbApplicablity[field]
      ) {
        newErrors[
          field
        ] = `${fieldDisplayNamesSmbSystemAccess[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setSmbSystemAccessErrors(newErrors);
    return hasErrors;
  };

  const validateSmbBankingAccess = () => {
    const newErrors: { [key: string]: string } = {};

    validateSmbBankingAccessField.forEach((field) => {
      if (
        !smbSavingAccount[field] &&
        !smbAccessSavingAccount[field] &&
        !smbAddCards[field] &&
        !smbAccessCreditCard[field] &&
        !smbAccessLoanAccount[field] &&
        !smbAccessCreditCardPortal[field]
      ) {
        newErrors[
          field
        ] = `${fieldDisplayNamesSmbBankingAccess[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setSmbBankingAccessErrors(newErrors);
    return hasErrors;
  };

  const validateSmbExistingFinancials = () => {
    const newErrors: { [key: string]: string } = {};

    validateSmbExistingFinancialsField.forEach((field) => {
      if (
        !smbLiveDate[field] &&
        !smbAccountingMethod[field] &&
        !smbFEIN[field] &&
        !smbFiscalYearEnd[field] &&
        !smbLastClosedMonth[field] &&
        !smbContactOfCpa[field] &&
        !smbTaxReturn[field] &&
        !smbDistributionList[field]
      ) {
        newErrors[
          field
        ] = `${fieldDisplayNamesSmbExistingFinancials[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setSmbExistingFinancialsErrors(newErrors);
    return hasErrors;
  };

  const validateSmbMeeting = () => {
    const newErrors: { [key: string]: string } = {};

    validateSmbMeetingField.forEach((field) => {
      if (!smbTimeZone[field] && !smbConvenient[field] && !smbTimeSlot[field]) {
        newErrors[field] = `${fieldDisplayNamesSmbMeeting[field]} is required`;
      } else {
        newErrors[field] = "";
      }
    });

    const hasErrors = Object.values(newErrors).some((error) => !!error);
    setSmbMeetingErrors(newErrors);
    return hasErrors;
  };

  const handleSubmit = (type: number) => {
    if (type === 1) {
      setChecklistFormSubmit(3);
      validateSmbPeopleBusiness();
      validateSmbSystemAccess();
      validateSmbBankingAccess();
      validateSmbExistingFinancials();
      validateSmbMeeting();
      const isValid =
        !validateSmbPeopleBusiness() &&
        !validateSmbSystemAccess() &&
        !validateSmbBankingAccess() &&
        !validateSmbExistingFinancials() &&
        !validateSmbMeeting();
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
                systemAccessErrors={smbSystemAccessErrors}
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
                bankingAccessErrors={smbBankingAccessErrors}
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
                existingFinancialsErrors={smbExistingFinancialsErrors}
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
                meetingErrors={smbMeetingErrors}
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
          <Button
            onClick={() => setChecklistFormSubmit(2)}
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
              onClick={() => handleSubmit(3)}
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

export default ChecklistSmb;
