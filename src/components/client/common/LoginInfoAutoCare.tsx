import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Static import
import { AccordianExpand } from "@/static/autoCareChecklist";
// Component import
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import AutoCareLocationDetails from "@/components/client/forms/autocare/AutoCareLocationDetails";
import AutoCareSalesTaxDetails from "@/components/client/forms/autocare/AutoCareSalesTaxDetails";
import AutoCarePosDetails from "@/components/client/forms/autocare/AutoCarePosDetails";
import AutoCareUtilities from "@/components/client/forms/autocare/AutoCareUtilities";
import AutoCareVendorDetails from "@/components/client/forms/autocare/AutoCareVendorDetails";
import AutoCareBankDetailsLoans from "@/components/client/forms/autocare/AutoCareBankDetailsLoans";
import AutoCareMerchantDetails from "@/components/client/forms/autocare/AutoCareMerchantDetails";
import AutoCarePayrollDetails from "@/components/client/forms/autocare/AutoCarePayrollDetails";
// Models import
import {
  autoCareBankDetailsLoansFormTypes,
  autoCareGmailAccountFormTypes,
  autoCareLocationDetailsFormTypes,
  autoCareMerchantDetailsFormTypes,
  autoCarePayrollDetailsFormTypes,
  autoCarePosDetailsFormTypes,
  autoCareSalesTaxDetailsFormTypes,
  autoCareUtilitiesFormTypes,
  autoCareVendorDetailsFormTypes,
} from "@/models/autoCareLogininfo";
// Static import
import {
  initialAutoCareBankDetailsLoans,
  initialAutoCareGmailAccountDetails,
  initialAutoCareLocationDetails,
  initialAutoCareMerchantDetails,
  initialAutoCarePayrollDetails,
  initialAutoCarePosDetails,
  initialAutoCareSalesTaxDetails,
  initialAutoCareUtilities,
  initialAutoCareVendorDetails,
} from "@/static/autoCareLoginInfo";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { autoCarFormListUrl, autoCarFormUrl } from "@/static/apiUrl";
import AutoCareGmailAccount from "@/components/client/forms/autocare/AutoCareGmailAccount";
import { LoginInfoAutoCareType } from "@/models/carCareBasicDetails";

function LoginInfoAutoCare({
  setLoginInfoFormSubmit,
  clientInfo,
  setIsOpenModal,
}: LoginInfoAutoCareType) {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");
  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };

  const [locationDetailsRows, setLocationDetailsRows] = useState<
    autoCareLocationDetailsFormTypes[]
  >([initialAutoCareLocationDetails]);
  const [salesTaxDetailsRows, setSalesTaxDetailsRows] = useState<
    autoCareSalesTaxDetailsFormTypes[]
  >([initialAutoCareSalesTaxDetails]);
  const [gmailAccountRows, setGmailAccountRows] = useState<
    autoCareGmailAccountFormTypes[]
  >([initialAutoCareGmailAccountDetails]);
  const [posDetailsRows, setPosDetailsRows] = useState<
    autoCarePosDetailsFormTypes[]
  >([initialAutoCarePosDetails]);
  const [utilitiesRows, setUtilitiesRows] = useState<
    autoCareUtilitiesFormTypes[]
  >([initialAutoCareUtilities]);
  const [vendorDetailsRows, setVendorDetailsRows] = useState<
    autoCareVendorDetailsFormTypes[]
  >([initialAutoCareVendorDetails]);
  const [bankDetailsLoansRows, setBankDetailsLoansRows] = useState<
    autoCareBankDetailsLoansFormTypes[]
  >([initialAutoCareBankDetailsLoans]);
  const [merchantDetailsRows, setMerchantDetailsRows] = useState<
    autoCareMerchantDetailsFormTypes[]
  >([initialAutoCareMerchantDetails]);
  const [payrollDetailsRows, setPayrollDetailsRows] = useState<
    autoCarePayrollDetailsFormTypes[]
  >([initialAutoCarePayrollDetails]);

  const [locationDetailsChecked, setLocationDetailsChecked] =
    useState<boolean>(true);
  const [salesTaxDetailsChecked, setSalesTaxDetailsChecked] =
    useState<boolean>(true);
  const [gmailAccountDetailsChecked, setGmailAccountDetailsChecked] =
    useState<boolean>(true);
  const [posDetailsChecked, setPosDetailsChecked] = useState<boolean>(true);
  const [utilitiesChecked, setUtilitiesChecked] = useState<boolean>(true);
  const [vendorDetailsChecked, setVendorDetailsChecked] =
    useState<boolean>(true);
  const [bankDetailsLoanChecked, setBankDetailsLoansChecked] =
    useState<boolean>(true);
  const [merchantDetailsChecked, setMerchantDetailsChecked] =
    useState<boolean>(true);
  const [payrollDetailsChecked, setPayrollDetailsChecked] =
    useState<boolean>(true);

  const handleLoginInfoInitialValues = () => {
    setLocationDetailsRows([initialAutoCareLocationDetails]);
    setSalesTaxDetailsRows([initialAutoCareSalesTaxDetails]);
    setGmailAccountRows([initialAutoCareGmailAccountDetails]);
    setPosDetailsRows([initialAutoCarePosDetails]);
    setUtilitiesRows([initialAutoCareUtilities]);
    setVendorDetailsRows([initialAutoCareVendorDetails]);
    setBankDetailsLoansRows([initialAutoCareBankDetailsLoans]);
    setMerchantDetailsRows([initialAutoCareMerchantDetails]);
    setPayrollDetailsRows([initialAutoCarePayrollDetails]);
  };

  const getAutoLoginInfoDetailsList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setLocationDetailsChecked(ResponseData.locationDetailsIsDisplay);
          setSalesTaxDetailsChecked(ResponseData.salesTaxDetailsIsDisplay);
          setGmailAccountDetailsChecked(
            ResponseData.gmailAccountDetailsIsDisplay
          );
          setPosDetailsChecked(ResponseData.posDetailsIsDisplay);
          setUtilitiesChecked(ResponseData.utilitiesDetailsIsDisplay);
          setVendorDetailsChecked(ResponseData.vendorDetailsIsDisplay);
          setBankDetailsLoansChecked(ResponseData.bankDetailsIsDisplay);
          setMerchantDetailsChecked(ResponseData.merchantDetailsIsDisplay);
          setPayrollDetailsChecked(ResponseData.payrollDetailsIsDisplay);
          if (ResponseData.locationDetails.length > 0) {
            setLocationDetailsRows(
              ResponseData.locationDetails.map((locationItem: any) => ({
                locationDetailsName: locationItem.name,
                locationDetailsDetails: locationItem.details,
              }))
            );
          } else {
            setLocationDetailsRows([initialAutoCareLocationDetails]);
          }
          if (ResponseData.salesTaxDetails.length > 0) {
            setSalesTaxDetailsRows(
              ResponseData.salesTaxDetails.map((salesTaxItem: any) => ({
                salesTaxDetailsUserId: salesTaxItem.userId,
                salesTaxDetailsPassword: salesTaxItem.password,
                salesTaxDetailsStatus: salesTaxItem.status,
              }))
            );
          } else {
            setSalesTaxDetailsRows([initialAutoCareSalesTaxDetails]);
          }
          if (ResponseData.gmailAccountDetails.length > 0) {
            setGmailAccountRows(
              ResponseData.gmailAccountDetails.map((gmailDetailsItem: any) => ({
                gmailAccountUserId: gmailDetailsItem.userId,
                gmailAccountPassword: gmailDetailsItem.password,
                gmailAccountStatus: gmailDetailsItem.status,
              }))
            );
          } else {
            setGmailAccountRows([initialAutoCareGmailAccountDetails]);
          }
          if (ResponseData.posDetails.length > 0) {
            setPosDetailsRows(
              ResponseData.posDetailsRows.map((posDetailsItem: any) => ({
                posDetailsPos: posDetailsItem.POS,
                posDetailsServerName: posDetailsItem.serverName,
                posDetailsPersonalKey: posDetailsItem.personalKey,
                posDetailsUserName: posDetailsItem.userName,
                posDetailsPassword: posDetailsItem.password,
                posDetailsNotes_Status: posDetailsItem.status,
              }))
            );
          } else {
            setPosDetailsRows([initialAutoCarePosDetails]);
          }
          if (ResponseData.utilitiesDetails.length > 0) {
            setUtilitiesRows(
              ResponseData.utilitiesRows.map((utilitiesItem: any) => ({
                utilitiesLocation: utilitiesItem.location,
                utilitiesUtilities: utilitiesItem.utilities,
                utilitiesService: utilitiesItem.service,
                utilitiesAccount_CustomerNo:
                  utilitiesItem.account_customerNumber,
                utilitiesUser: utilitiesItem.user,
                utilitiesPassword: utilitiesItem.password,
                utilitiesWebsite: utilitiesItem.website,
                utilitiesNotes_Status: utilitiesItem.status,
              }))
            );
          } else {
            setUtilitiesRows([initialAutoCareUtilities]);
          }
          if (ResponseData.vendorDetails.length > 0) {
            setVendorDetailsRows(
              ResponseData.vendorDetailsRows.map((vendorItem: any) => ({
                vendorDetailsLocation: vendorItem.location,
                vendorDetailsName: vendorItem.vendorName,
                vendorDetailsService: vendorItem.service,
                vendorDetailsLoginLink: vendorItem.vendorLoginLink,
                vendorDetailsUserId: vendorItem.vendorUserId,
                vendorDetailsPassword: vendorItem.vendorPassword,
                vendorDetailsNotes_Status: vendorItem.status,
              }))
            );
          } else {
            setVendorDetailsRows([initialAutoCareVendorDetails]);
          }
          if (ResponseData.bankDetails.length > 0) {
            setBankDetailsLoansRows(
              ResponseData.bankDetailsLoansRows.map((bankItem: any) => ({
                bankDetailsLoansName: bankItem.bankName,
                bankDetailsLoansType: bankItem.type,
                bankDetailsLoansSiteLink: bankItem.bankSiteLink,
                bankDetailsLoansCompanyId: bankItem.companyId,
                bankDetailsLoansUserId: bankItem.userId,
                bankDetailsLoansPassword: bankItem.password,
                bankDetailsLoansNotes_Status: bankItem.status,
              }))
            );
          } else {
            setBankDetailsLoansRows([initialAutoCareBankDetailsLoans]);
          }
          if (ResponseData.merchantDetails.length > 0) {
            setMerchantDetailsRows(
              ResponseData.merchantDetailsRows.map((merchantItem: any) => ({
                merchantDetailsName: merchantItem.merchantName,
                merchantDetailsLink: merchantItem.link,
                merchantDetailsUserId: merchantItem.userId,
                merchantDetailsPassword: merchantItem.password,
                merchantDetailsAccountId: merchantItem.accountId,
                merchantDetailNotes_Status: merchantItem.status,
              }))
            );
          } else {
            setMerchantDetailsRows([initialAutoCareMerchantDetails]);
          }
          if (ResponseData.payrollDetails.length > 0) {
            setPayrollDetailsRows(
              ResponseData.payrollDetailsRows.map((payrollItem: any) => ({
                payrollDetailsCompanyName: payrollItem.companyName,
                payrollDetailsLink: payrollItem.link,
                payrollDetailsUserId: payrollItem.userId,
                payrollDetailsPassword: payrollItem.password,
                payrollDetailsPasscode: payrollItem.passcode,
                payrollDetailsNotes_Status: payrollItem.status,
              }))
            );
          } else {
            setPayrollDetailsRows([initialAutoCarePayrollDetails]);
          }
          return;
      }
    };
    await callAPIwithHeaders(autoCarFormListUrl, "post", callback, {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
    });
  };

  useEffect(() => {
    getAutoLoginInfoDetailsList();
  }, []);

  const handleSubmit = (type: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setLoginInfoFormSubmit(3);
          showToast(Message, ToastType.Success);
          return;
      }
    };

    const loginInfoFormData = {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId)
        : parseInt(userId!),
      businessTypeId: !!clientInfo?.DepartmentId
        ? parseInt(clientInfo?.DepartmentId)
        : parseInt(businessTypeId!),
      locationDetails: locationDetailsRows
        .filter(
          (locationItem) =>
            !!locationItem.locationDetailsName ||
            !!locationItem.locationDetailsDetails
        )
        .map((locationItem) => ({
          name: locationItem.locationDetailsName,
          details: locationItem.locationDetailsDetails,
        })),
      salesTaxDetails: salesTaxDetailsRows
        .filter(
          (salesTaxItem) =>
            !!salesTaxItem.salesTaxDetailsUserId ||
            !!salesTaxItem.salesTaxDetailsPassword ||
            !!salesTaxItem.salesTaxDetailsStatus
        )
        .map((salesTaxItem) => ({
          userId: salesTaxItem.salesTaxDetailsUserId,
          password: salesTaxItem.salesTaxDetailsPassword,
          status: salesTaxItem.salesTaxDetailsStatus,
        })),
      gmailAccountDetails: gmailAccountRows
        .filter(
          (gmailDetailsItem) =>
            !!gmailDetailsItem.gmailAccountUserId ||
            !!gmailDetailsItem.gmailAccountPassword ||
            !!gmailDetailsItem.gmailAccountStatus
        )
        .map((gmailDetailsItem) => ({
          userId: gmailDetailsItem.gmailAccountUserId,
          password: gmailDetailsItem.gmailAccountPassword,
          status: gmailDetailsItem.gmailAccountStatus,
        })),
      posDetails: posDetailsRows
        .filter(
          (posDetailsItem) =>
            posDetailsItem.posDetailsPos ||
            !!posDetailsItem.posDetailsServerName ||
            !!posDetailsItem.posDetailsPersonalKey ||
            !!posDetailsItem.posDetailsUserName ||
            !!posDetailsItem.posDetailsPassword ||
            !!posDetailsItem.posDetailsNotes_Status
        )
        .map((posDetailsItem) => ({
          POS: posDetailsItem.posDetailsPos,
          serverName: posDetailsItem.posDetailsServerName,
          personalKey: posDetailsItem.posDetailsPersonalKey,
          userName: posDetailsItem.posDetailsUserName,
          password: posDetailsItem.posDetailsPassword,
          status: posDetailsItem.posDetailsNotes_Status,
        })),
      utilitiesDetails: utilitiesRows
        .filter(
          (utilitiesItem) =>
            !!utilitiesItem.utilitiesLocation ||
            !!utilitiesItem.utilitiesUtilities ||
            !!utilitiesItem.utilitiesService ||
            !!utilitiesItem.utilitiesAccount_CustomerNo ||
            !!utilitiesItem.utilitiesUser ||
            !!utilitiesItem.utilitiesPassword ||
            !!utilitiesItem.utilitiesWebsite ||
            !!utilitiesItem.utilitiesNotes_Status
        )
        .map((utilitiesItem) => ({
          location: utilitiesItem.utilitiesLocation,
          utilities: utilitiesItem.utilitiesUtilities,
          service: utilitiesItem.utilitiesService,
          account_customerNumber: utilitiesItem.utilitiesAccount_CustomerNo,
          user: utilitiesItem.utilitiesUser,
          password: utilitiesItem.utilitiesPassword,
          website: utilitiesItem.utilitiesWebsite,
          status: utilitiesItem.utilitiesNotes_Status,
        })),
      vendorDetails: vendorDetailsRows
        .filter(
          (vendorItem) =>
            !!vendorItem.vendorDetailsLocation ||
            !!vendorItem.vendorDetailsName ||
            !!vendorItem.vendorDetailsService ||
            !!vendorItem.vendorDetailsLoginLink ||
            !!vendorItem.vendorDetailsUserId ||
            !!vendorItem.vendorDetailsPassword ||
            !!vendorItem.vendorDetailsNotes_Status
        )
        .map((vendorItem) => ({
          location: vendorItem.vendorDetailsLocation,
          vendorName: vendorItem.vendorDetailsName,
          service: vendorItem.vendorDetailsService,
          vendorLoginLink: vendorItem.vendorDetailsLoginLink,
          vendorUserId: vendorItem.vendorDetailsUserId,
          vendorPassword: vendorItem.vendorDetailsPassword,
          status: vendorItem.vendorDetailsNotes_Status,
        })),
      bankDetails: bankDetailsLoansRows
        .filter(
          (bankItem) =>
            !!bankItem.bankDetailsLoansName ||
            !!bankItem.bankDetailsLoansType ||
            !!bankItem.bankDetailsLoansSiteLink ||
            !!bankItem.bankDetailsLoansCompanyId ||
            !!bankItem.bankDetailsLoansUserId ||
            !!bankItem.bankDetailsLoansPassword ||
            !!bankItem.bankDetailsLoansNotes_Status
        )
        .map((bankItem) => ({
          bankName: bankItem.bankDetailsLoansName,
          type: bankItem.bankDetailsLoansType,
          bankSiteLink: bankItem.bankDetailsLoansSiteLink,
          companyId: bankItem.bankDetailsLoansCompanyId,
          userId: bankItem.bankDetailsLoansUserId,
          password: bankItem.bankDetailsLoansPassword,
          status: bankItem.bankDetailsLoansNotes_Status,
        })),
      merchantDetails: merchantDetailsRows
        .filter(
          (merchantItem) =>
            !!merchantItem.merchantDetailsName ||
            !!merchantItem.merchantDetailsLink ||
            !!merchantItem.merchantDetailsUserId ||
            !!merchantItem.merchantDetailsPassword ||
            !!merchantItem.merchantDetailsAccountId ||
            !!merchantItem.merchantDetailNotes_Status ||
            !!merchantItem.merchantDetailNotes_Status
        )
        .map((merchantItem) => ({
          merchantName: merchantItem.merchantDetailsName,
          link: merchantItem.merchantDetailsLink,
          userId: merchantItem.merchantDetailsUserId,
          password: merchantItem.merchantDetailsPassword,
          accountId: merchantItem.merchantDetailsAccountId,
          status: merchantItem.merchantDetailNotes_Status,
        })),
      payrollDetails: payrollDetailsRows
        .filter(
          (payrollItem) =>
            !!payrollItem.payrollDetailsCompanyName ||
            !!payrollItem.payrollDetailsLink ||
            !!payrollItem.payrollDetailsUserId ||
            !!payrollItem.payrollDetailsPassword ||
            !!payrollItem.payrollDetailsPasscode ||
            !!payrollItem.payrollDetailsNotes_Status
        )
        .map((payrollItem) => ({
          companyName: payrollItem.payrollDetailsCompanyName,
          link: payrollItem.payrollDetailsLink,
          userId: payrollItem.payrollDetailsUserId,
          password: payrollItem.payrollDetailsPassword,
          passcode: payrollItem.payrollDetailsPasscode,
          status: payrollItem.payrollDetailsNotes_Status,
        })),
    };

    if (type === 1 || type === 2) {
      callAPIwithHeaders(autoCarFormUrl, "post", callback, loginInfoFormData);
    } else {
      handleLoginInfoInitialValues();
    }
  };

  const handleSwitchChange = async (e: any, phaseType: number) => {
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
        1: setLocationDetailsChecked,
        2: setSalesTaxDetailsChecked,
        3: setGmailAccountDetailsChecked,
        4: setPosDetailsChecked,
        5: setUtilitiesChecked,
        6: setVendorDetailsChecked,
        7: setBankDetailsLoansChecked,
        8: setMerchantDetailsChecked,
        9: setPayrollDetailsChecked,
      }[phaseType];
      updateStateFunc(value);
    };

    const requestBody: any = {
      userId: !!clientInfo?.UserId
        ? parseInt(clientInfo?.UserId!)
        : parseInt(userId!),
      businessTypeId: !!clientInfo?.DepartmentId
        ? parseInt(clientInfo?.DepartmentId!)
        : parseInt(businessTypeId!),
    };

    switch (phaseType) {
      case 1:
        requestBody.locationDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 2:
        requestBody.salesTaxDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 3:
        requestBody.gmailAccountDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 4:
        requestBody.posDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 5:
        requestBody.utilitiesDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 6:
        requestBody.vendorDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 7:
        requestBody.bankDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 8:
        requestBody.merchantDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
      case 9:
        requestBody.payrollDetailsIsDisplay = check;
        setExpandedAccordian(-1);
        break;
    }

    await callAPIwithHeaders(autoCarFormUrl, "post", callback, requestBody);
    updatePhaseState(`setPhase${phaseType}Checked`, check);
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
            {(roleId === "4" ? locationDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 1)}
                checkStatus={locationDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.LOCATION_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.LOCATION_DETAILS
                )}
                title="Location Details"
              >
                <AutoCareLocationDetails
                  locationDetailsRows={locationDetailsRows}
                  setLocationDetailsRows={setLocationDetailsRows}
                />
              </ChecklistAccordian>
            )}

            {(roleId === "4" ? salesTaxDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 2)}
                checkStatus={salesTaxDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.SALES_TAX_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.SALES_TAX_DETAILS
                )}
                title="Sales Tax Details"
              >
                <AutoCareSalesTaxDetails
                  salesTaxDetailsRows={salesTaxDetailsRows}
                  setSalesTaxDetailsRows={setSalesTaxDetailsRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? gmailAccountDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 3)}
                checkStatus={gmailAccountDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.GMAILACCOUNT_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.GMAILACCOUNT_DETAILS
                )}
                title="Gmail Account"
              >
                <AutoCareGmailAccount
                  gmailAccountRows={gmailAccountRows}
                  setGmailAccountRows={setGmailAccountRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? posDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 4)}
                checkStatus={posDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.POS_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.POS_DETAILS
                )}
                title="POS Details"
              >
                <AutoCarePosDetails
                  posDetailsRows={posDetailsRows}
                  setPosDetailsRows={setPosDetailsRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? utilitiesChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 5)}
                checkStatus={utilitiesChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.UTILITIES
                }
                handleChange={handleAccordianChange(AccordianExpand.UTILITIES)}
                title="Utilities"
              >
                <AutoCareUtilities
                  utilitiesRows={utilitiesRows}
                  setUtilitiesRows={setUtilitiesRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? vendorDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 6)}
                checkStatus={vendorDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.VENDOR_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.VENDOR_DETAILS
                )}
                title="Vendor Details"
              >
                <AutoCareVendorDetails
                  vendorDetailsRows={vendorDetailsRows}
                  setVendorDetailsRows={setVendorDetailsRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? bankDetailsLoanChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 7)}
                checkStatus={bankDetailsLoanChecked}
                expandedAccordian={
                  expandedAccordian ===
                  AccordianExpand.BANK_DETAILS_CC_DETAILS_LOAN
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.BANK_DETAILS_CC_DETAILS_LOAN
                )}
                title="Bank Details/CC Details/Loan"
              >
                <AutoCareBankDetailsLoans
                  bankDetailsLoansRows={bankDetailsLoansRows}
                  setBankDetailsLoansRows={setBankDetailsLoansRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? merchantDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 8)}
                checkStatus={merchantDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.MERCHANT_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.MERCHANT_DETAILS
                )}
                title="Merchant Details"
              >
                <AutoCareMerchantDetails
                  merchantDetailsRows={merchantDetailsRows}
                  setMerchantDetailsRows={setMerchantDetailsRows}
                />
              </ChecklistAccordian>
            )}
            {(roleId === "4" ? payrollDetailsChecked : true) && (
              <ChecklistAccordian
                handleSwitchChange={(e: any) => handleSwitchChange(e, 9)}
                checkStatus={payrollDetailsChecked}
                expandedAccordian={
                  expandedAccordian === AccordianExpand.PAYROLL_DETAILS
                }
                handleChange={handleAccordianChange(
                  AccordianExpand.PAYROLL_DETAILS
                )}
                title="Payroll Details"
              >
                <AutoCarePayrollDetails
                  payrollDetailsRows={payrollDetailsRows}
                  setPayrollDetailsRows={setPayrollDetailsRows}
                />
              </ChecklistAccordian>
            )}
          </div>
        </div>

        <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            onClick={() => setLoginInfoFormSubmit(32)}
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
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold !text-[14px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => handleSubmit(1)}
              className={`!bg-[#022946] text-white !rounded-full font-semibold !text-[14px]`}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginInfoAutoCare;
