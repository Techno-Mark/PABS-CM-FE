import React, { useState } from "react";
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
  initialAutoCareLocationDetails,
  initialAutoCareMerchantDetails,
  initialAutoCarePayrollDetails,
  initialAutoCarePosDetails,
  initialAutoCareSalesTaxDetails,
  initialAutoCareUtilities,
  initialAutoCareVendorDetails,
} from "@/static/autoCareLoginInfo";

function LoginInfoAutoCare({ setLoginInfoFormSubmit }: any) {
  const roleId = Cookies.get("roleId");
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

            <ChecklistAccordian
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

            <ChecklistAccordian
              expandedAccordian={
                expandedAccordian === AccordianExpand.POS_DETAILS
              }
              handleChange={handleAccordianChange(AccordianExpand.POS_DETAILS)}
              title="POS Details"
            >
              <AutoCarePosDetails
                posDetailsRows={posDetailsRows}
                setPosDetailsRows={setPosDetailsRows}
              />
            </ChecklistAccordian>

            <ChecklistAccordian
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

            <ChecklistAccordian
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

            <ChecklistAccordian
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

            <ChecklistAccordian
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

            <ChecklistAccordian
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
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
          <Button
            onClick={() => setLoginInfoFormSubmit(2)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[16px]`}
            variant="outlined"
          >
            Back
          </Button>
          <div className="flex gap-5">
            <Button
              onClick={() => {}}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {}}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold !text-[16px]`}
              variant="outlined"
            >
              Save as Draft
            </Button>
            <Button
              onClick={() => {}}
              className={`!bg-[#022946] text-white !rounded-full font-semibold !text-[16px]`}
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
