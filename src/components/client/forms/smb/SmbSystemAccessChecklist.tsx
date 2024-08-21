import React, { useEffect } from "react";
// Models import
import {
  AccessAccountingSoftwareFormTypes,
  AccessAccountingSoftwareTypes,
  ApBillsFormTypes,
  ApBillsTypes,
  DropboxSetUpFormTypes,
  DropboxSetUpTypes,
  ExpensePaymentPortalAccessFormTypes,
  ExpensePaymentPortalAccessTypes,
  MerchantAccountPortalAccessFormTypes,
  MerchantAccountPortalAccessTypes,
  ModeOfPaymentFormTypes,
  ModeOfPaymentTypes,
  PABSGroupEmailFormTypes,
  PABSGroupEmailTypes,
  PayrollFrequencyFormTypes,
  PayrollFrequencyTypes,
  PayrollServiceAccessFormTypes,
  PayrollServiceAccessTypes,
  PointSalesAccessFormTypes,
  PointSalesAccessTypes,
  SalesTaxPortalAccessFormTypes,
  SalesTaxPortalAccessTypes,
  SystemDocumentInformationAccessTypes,
} from "@/models/smbChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";
import { updateStatus } from "@/utils/statusChangeFunction";

function SmbSystemAccessChecklist({
  className,
  smbSystemAccessChecklistErrors,
  smbPABSGroupEmail,
  setSmbPABSGroupEmail,
  smbAccessAccountingSoftware,
  setSmbAccessAccountingSoftware,
  smbDropboxSetUp,
  setSmbDropboxSetUp,
  smbSalesTaxPortalAccess,
  setSmbSalesTaxPortalAccess,
  smbMerchantAccountPortalAccess,
  setSmbMerchantAccountPortalAccess,
  smbPayrollServiceAccess,
  setSmbPayrollServiceAccess,
  smbPayrollFrequency,
  setSmbPayrollFrequency,
  smbModeOfPayment,
  setSmbModeOfPayment,
  smbApBills,
  setSmbApBills,
  smbExpensePaymentPortalAccess,
  setSmbExpensePaymentPortalAccess,
  smbPointSalesAccess,
  setSmbPointSalesAccess,
  checkAllFieldsSmbSystemAccessChecklist,
  isFormLocked,
}: SystemDocumentInformationAccessTypes) {
  useEffect(() => {
    updateStatus(
      smbPABSGroupEmail.pabsGroupEmailDetails,
      setSmbPABSGroupEmail,
      "pabsGroupEmailStatus"
    );

    updateStatus(
      smbAccessAccountingSoftware.AccessAccountingSoftwareDetails,
      setSmbAccessAccountingSoftware,
      "AccessAccountingSoftwareStatus"
    );

    updateStatus(
      smbDropboxSetUp.DropboxSetUpDetails,
      setSmbDropboxSetUp,
      "DropboxSetUpStatus"
    );

    updateStatus(
      smbSalesTaxPortalAccess.salesTaxPortalAccessDetails,
      setSmbSalesTaxPortalAccess,
      "salesTaxPortalAccessStatus"
    );

    updateStatus(
      smbMerchantAccountPortalAccess.merchantAccountPortalAccessDetails,
      setSmbMerchantAccountPortalAccess,
      "merchantAccountPortalAccessStatus"
    );

    updateStatus(
      smbPayrollServiceAccess.PayrollServiceAccessDetails,
      setSmbPayrollServiceAccess,
      "PayrollServiceAccessStatus"
    );

    updateStatus(
      smbPayrollFrequency.PayrollFrequencyDetails,
      setSmbPayrollFrequency,
      "PayrollFrequencyStatus"
    );

    updateStatus(
      smbModeOfPayment.ModeOfPaymentDetails,
      setSmbModeOfPayment,
      "ModeOfPaymentStatus"
    );

    updateStatus(smbApBills.ApBillsDetails, setSmbApBills, "ApBillsStatus");

    updateStatus(
      smbExpensePaymentPortalAccess.expensePaymentPortalAccessDetails,
      setSmbExpensePaymentPortalAccess,
      "expensePaymentPortalAccessStatus"
    );

    updateStatus(
      smbPointSalesAccess.pointSalesAccessDetails,
      setSmbPointSalesAccess,
      "pointSalesAccessStatus"
    );
  }, [
    smbPABSGroupEmail.pabsGroupEmailDetails,
    setSmbPABSGroupEmail,
    smbAccessAccountingSoftware.AccessAccountingSoftwareDetails,
    setSmbAccessAccountingSoftware,
    smbDropboxSetUp.DropboxSetUpDetails,
    setSmbDropboxSetUp,
    smbSalesTaxPortalAccess.salesTaxPortalAccessDetails,
    setSmbSalesTaxPortalAccess,
    smbMerchantAccountPortalAccess.merchantAccountPortalAccessDetails,
    setSmbMerchantAccountPortalAccess,
    smbPayrollServiceAccess.PayrollServiceAccessDetails,
    setSmbPayrollServiceAccess,
    smbPayrollFrequency.PayrollFrequencyDetails,
    setSmbPayrollFrequency,
    smbModeOfPayment.ModeOfPaymentDetails,
    setSmbModeOfPayment,
    smbApBills.ApBillsDetails,
    setSmbApBills,
    smbExpensePaymentPortalAccess.expensePaymentPortalAccessDetails,
    setSmbExpensePaymentPortalAccess,
    smbPointSalesAccess.pointSalesAccessDetails,
    setSmbPointSalesAccess,
  ]);

  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">General</div>
      <PABSGroupEmail
        checkAllFieldsPABSGroupEmail={checkAllFieldsSmbSystemAccessChecklist}
        smbPABSGroupEmail={smbPABSGroupEmail}
        setSmbPABSGroupEmail={setSmbPABSGroupEmail}
        isFormLocked={isFormLocked}
      />
      <AccessAccountingSoftware
        checkAllFieldsAccessAccountingSoftware={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbAccessAccountingSoftware={smbAccessAccountingSoftware}
        setSmbAccessAccountingSoftware={setSmbAccessAccountingSoftware}
        smbAccessAccountingSoftwareErrors={smbSystemAccessChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <DropboxSetUp
        checkAllFieldsDropboxSetUp={checkAllFieldsSmbSystemAccessChecklist}
        smbDropboxSetUp={smbDropboxSetUp}
        setSmbDropboxSetUp={setSmbDropboxSetUp}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">Sales Tax</div>
      <SalesTaxPortalAccess
        checkAllFieldsSalesTaxPortalAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbSalesTaxPortalAccess={smbSalesTaxPortalAccess}
        setSmbSalesTaxPortalAccess={setSmbSalesTaxPortalAccess}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">Merchant</div>
      <MerchantAccountPortalAccess
        checkAllFieldsMerchantAccountPortalAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbMerchantAccountPortalAccess={smbMerchantAccountPortalAccess}
        setSmbMerchantAccountPortalAccess={setSmbMerchantAccountPortalAccess}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">Payroll</div>
      <PayrollServiceAccess
        checkAllFieldsPayrollServiceAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbPayrollServiceAccess={smbPayrollServiceAccess}
        setSmbPayrollServiceAccess={setSmbPayrollServiceAccess}
        smbPayrollServiceAccessErrors={smbSystemAccessChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <PayrollFrequency
        checkAllFieldsPayrollFrequency={checkAllFieldsSmbSystemAccessChecklist}
        smbPayrollFrequency={smbPayrollFrequency}
        setSmbPayrollFrequency={setSmbPayrollFrequency}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">Expense</div>
      <ExpensePaymentPortalAccess
        checkAllFieldsExpensePaymentPortalAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbExpensePaymentPortalAccess={smbExpensePaymentPortalAccess}
        setSmbExpensePaymentPortalAccess={setSmbExpensePaymentPortalAccess}
        isFormLocked={isFormLocked}
      />
      <ModeOfPayment
        checkAllFieldsModeOfPayment={checkAllFieldsSmbSystemAccessChecklist}
        smbModeOfPayment={smbModeOfPayment}
        setSmbModeOfPayment={setSmbModeOfPayment}
        smbModeOfPaymentErrors={smbSystemAccessChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <ApBills
        smbApBills={smbApBills}
        setSmbApBills={setSmbApBills}
        checkAllFieldsApBills={checkAllFieldsSmbSystemAccessChecklist}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">POS</div>
      <PointSalesAccess
        checkAllFieldsPointSalesAccess={checkAllFieldsSmbSystemAccessChecklist}
        smbPointSalesAccess={smbPointSalesAccess}
        setSmbPointSalesAccess={setSmbPointSalesAccess}
        smbPointSalesAccessErrors={smbSystemAccessChecklistErrors}
        isFormLocked={isFormLocked}
      />
    </div>
  );
}

export default SmbSystemAccessChecklist;

const PABSGroupEmail = ({
  smbPABSGroupEmail,
  setSmbPABSGroupEmail,
  checkAllFieldsPABSGroupEmail,
  isFormLocked,
}: PABSGroupEmailTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbPABSGroupEmail((prev: PABSGroupEmailFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        PABS Group Email
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbPABSGroupEmail?.pabsGroupEmailStatus}
              onChange={(value: string) =>
                setSmbPABSGroupEmail((prev: PABSGroupEmailFormTypes) => ({
                  ...prev,
                  pabsGroupEmailStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsPABSGroupEmail) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="pabsGroupEmailDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbPABSGroupEmail?.pabsGroupEmailDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPABSGroupEmail) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="pabsGroupEmailActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbPABSGroupEmail?.pabsGroupEmailActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPABSGroupEmail) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const AccessAccountingSoftware = ({
  smbAccessAccountingSoftware,
  setSmbAccessAccountingSoftware,
  smbAccessAccountingSoftwareErrors,
  checkAllFieldsAccessAccountingSoftware,
  isFormLocked,
}: AccessAccountingSoftwareTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbAccessAccountingSoftware(
      (prev: AccessAccountingSoftwareFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Provide Access to Accounting Software
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={
                smbAccessAccountingSoftware?.AccessAccountingSoftwareStatus
              }
              onChange={(value: string) =>
                setSmbAccessAccountingSoftware(
                  (prev: AccessAccountingSoftwareFormTypes) => ({
                    ...prev,
                    AccessAccountingSoftwareStatus: value,
                  })
                )
              }
              error={
                smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareStatus
              }
              helperText={
                smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareStatus
              }
              disabled={
                (roleId === "4" && checkAllFieldsAccessAccountingSoftware) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="AccessAccountingSoftwareDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={
                  smbAccessAccountingSoftware?.AccessAccountingSoftwareDetails
                }
                error={
                  !!smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareDetails
                }
                helperText={
                  smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareDetails
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsAccessAccountingSoftware) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="AccessAccountingSoftwareActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={
                  smbAccessAccountingSoftware?.AccessAccountingSoftwareActionItems
                }
                error={
                  !!smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareActionItems
                }
                helperText={
                  smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareActionItems
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsAccessAccountingSoftware) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const DropboxSetUp = ({
  smbDropboxSetUp,
  setSmbDropboxSetUp,
  checkAllFieldsDropboxSetUp,
  isFormLocked,
}: DropboxSetUpTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbDropboxSetUp((prev: DropboxSetUpFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Dropbox Set-Up
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbDropboxSetUp?.DropboxSetUpStatus}
              onChange={(value: string) =>
                setSmbDropboxSetUp((prev: DropboxSetUpFormTypes) => ({
                  ...prev,
                  DropboxSetUpStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsDropboxSetUp) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="DropboxSetUpDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbDropboxSetUp?.DropboxSetUpDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsDropboxSetUp) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="DropboxSetUpActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbDropboxSetUp?.DropboxSetUpActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsDropboxSetUp) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const SalesTaxPortalAccess = ({
  smbSalesTaxPortalAccess,
  setSmbSalesTaxPortalAccess,
  checkAllFieldsSalesTaxPortalAccess,
  isFormLocked,
}: SalesTaxPortalAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbSalesTaxPortalAccess((prev: SalesTaxPortalAccessFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Provide Access to Sales Tax Portal Access
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbSalesTaxPortalAccess?.salesTaxPortalAccessStatus}
              onChange={(value: string) =>
                setSmbSalesTaxPortalAccess(
                  (prev: SalesTaxPortalAccessFormTypes) => ({
                    ...prev,
                    salesTaxPortalAccessStatus: value,
                  })
                )
              }
              disabled={
                (roleId === "4" && checkAllFieldsSalesTaxPortalAccess) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="salesTaxPortalAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbSalesTaxPortalAccess?.salesTaxPortalAccessDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsSalesTaxPortalAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="salesTaxPortalAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbSalesTaxPortalAccess?.salesTaxPortalAccessActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsSalesTaxPortalAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const MerchantAccountPortalAccess = ({
  smbMerchantAccountPortalAccess,
  setSmbMerchantAccountPortalAccess,
  checkAllFieldsMerchantAccountPortalAccess,
  isFormLocked,
}: MerchantAccountPortalAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbMerchantAccountPortalAccess(
      (prev: MerchantAccountPortalAccessFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Merchant Account Portal Access (If Any)
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={
                smbMerchantAccountPortalAccess?.merchantAccountPortalAccessStatus
              }
              onChange={(value: string) =>
                setSmbMerchantAccountPortalAccess(
                  (prev: MerchantAccountPortalAccessFormTypes) => ({
                    ...prev,
                    merchantAccountPortalAccessStatus: value,
                  })
                )
              }
              disabled={
                (roleId === "4" && checkAllFieldsMerchantAccountPortalAccess) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="merchantAccountPortalAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={
                  smbMerchantAccountPortalAccess?.merchantAccountPortalAccessDetails
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsMerchantAccountPortalAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="merchantAccountPortalAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={
                  smbMerchantAccountPortalAccess?.merchantAccountPortalAccessActionItems
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsMerchantAccountPortalAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PayrollServiceAccess = ({
  smbPayrollServiceAccess,
  setSmbPayrollServiceAccess,
  smbPayrollServiceAccessErrors,
  checkAllFieldsPayrollServiceAccess,
  isFormLocked,
}: PayrollServiceAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbPayrollServiceAccess((prev: PayrollServiceAccessFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Payroll Service Provider Access<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbPayrollServiceAccess?.PayrollServiceAccessStatus}
              onChange={(value: string) =>
                setSmbPayrollServiceAccess(
                  (prev: PayrollServiceAccessFormTypes) => ({
                    ...prev,
                    PayrollServiceAccessStatus: value,
                  })
                )
              }
              error={smbPayrollServiceAccessErrors?.PayrollServiceAccessStatus}
              helperText={
                smbPayrollServiceAccessErrors?.PayrollServiceAccessStatus
              }
              disabled={
                (roleId === "4" && checkAllFieldsPayrollServiceAccess) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="PayrollServiceAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbPayrollServiceAccess?.PayrollServiceAccessDetails}
                error={
                  !!smbPayrollServiceAccessErrors?.PayrollServiceAccessDetails
                }
                helperText={
                  smbPayrollServiceAccessErrors?.PayrollServiceAccessDetails
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPayrollServiceAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="PayrollServiceAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbPayrollServiceAccess?.PayrollServiceAccessActionItems}
                error={
                  !!smbPayrollServiceAccessErrors?.PayrollServiceAccessActionItems
                }
                helperText={
                  smbPayrollServiceAccessErrors?.PayrollServiceAccessActionItems
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPayrollServiceAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PayrollFrequency = ({
  smbPayrollFrequency,
  setSmbPayrollFrequency,
  checkAllFieldsPayrollFrequency,
  isFormLocked,
}: PayrollFrequencyTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbPayrollFrequency((prev: PayrollFrequencyFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        No. of Employees on Roll , Payroll Frequency
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbPayrollFrequency?.PayrollFrequencyStatus}
              onChange={(value: string) =>
                setSmbPayrollFrequency((prev: PayrollFrequencyFormTypes) => ({
                  ...prev,
                  PayrollFrequencyStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsPayrollFrequency) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="PayrollFrequencyDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbPayrollFrequency?.PayrollFrequencyDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPayrollFrequency) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="PayrollFrequencyActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbPayrollFrequency?.PayrollFrequencyActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPayrollFrequency) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ExpensePaymentPortalAccess = ({
  smbExpensePaymentPortalAccess,
  setSmbExpensePaymentPortalAccess,
  checkAllFieldsExpensePaymentPortalAccess,
  isFormLocked,
}: ExpensePaymentPortalAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbExpensePaymentPortalAccess(
      (prev: ExpensePaymentPortalAccessFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Expense Payment Portal Access (If Any)
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={
                smbExpensePaymentPortalAccess?.expensePaymentPortalAccessStatus
              }
              onChange={(value: string) =>
                setSmbExpensePaymentPortalAccess(
                  (prev: ExpensePaymentPortalAccessFormTypes) => ({
                    ...prev,
                    expensePaymentPortalAccessStatus: value,
                  })
                )
              }
              disabled={
                (roleId === "4" && smbExpensePaymentPortalAccess) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="expensePaymentPortalAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={
                  smbExpensePaymentPortalAccess?.expensePaymentPortalAccessDetails
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsExpensePaymentPortalAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="expensePaymentPortalAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={
                  smbExpensePaymentPortalAccess?.expensePaymentPortalAccessActionItems
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsExpensePaymentPortalAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ModeOfPayment = ({
  smbModeOfPayment,
  setSmbModeOfPayment,
  smbModeOfPaymentErrors,
  checkAllFieldsModeOfPayment,
  isFormLocked,
}: ModeOfPaymentTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbModeOfPayment((prev: ModeOfPaymentFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Monthly AP Bills Counts & Mode of Payment
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbModeOfPayment?.ModeOfPaymentStatus}
              onChange={(value: string) =>
                setSmbModeOfPayment((prev: ModeOfPaymentFormTypes) => ({
                  ...prev,
                  ModeOfPaymentStatus: value,
                }))
              }
              error={smbModeOfPaymentErrors?.ModeOfPaymentStatus}
              helperText={smbModeOfPaymentErrors?.ModeOfPaymentStatus}
              disabled={
                (roleId === "4" && checkAllFieldsModeOfPayment) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ModeOfPaymentDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbModeOfPayment?.ModeOfPaymentDetails}
                error={!!smbModeOfPaymentErrors?.ModeOfPaymentDetails}
                helperText={smbModeOfPaymentErrors?.ModeOfPaymentDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsModeOfPayment) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="ModeOfPaymentActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbModeOfPayment?.ModeOfPaymentActionItems}
                error={!!smbModeOfPaymentErrors?.ModeOfPaymentActionItems}
                helperText={smbModeOfPaymentErrors?.ModeOfPaymentActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsModeOfPayment) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ApBills = ({
  smbApBills,
  setSmbApBills,
  checkAllFieldsApBills,
  isFormLocked,
}: ApBillsTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbApBills((prev: ApBillsFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        AP Bills - (Mode of Receiving Bills)
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbApBills?.ApBillsStatus}
              onChange={(value: string) =>
                setSmbApBills((prev: ApBillsFormTypes) => ({
                  ...prev,
                  ApBillsStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsApBills) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ApBillsDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbApBills?.ApBillsDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsApBills) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="ApBillsActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbApBills?.ApBillsActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsApBills) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PointSalesAccess = ({
  smbPointSalesAccess,
  setSmbPointSalesAccess,
  smbPointSalesAccessErrors,
  checkAllFieldsPointSalesAccess,
  isFormLocked,
}: PointSalesAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbPointSalesAccess((prev: PointSalesAccessFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Point of Sales Access<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbPointSalesAccess?.pointSalesAccessStatus}
              onChange={(value: string) =>
                setSmbPointSalesAccess((prev: PointSalesAccessFormTypes) => ({
                  ...prev,
                  pointSalesAccessStatus: value,
                }))
              }
              error={smbPointSalesAccessErrors?.pointSalesAccessStatus}
              helperText={smbPointSalesAccessErrors?.pointSalesAccessStatus}
              disabled={
                (roleId === "4" && checkAllFieldsPointSalesAccess) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="pointSalesAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbPointSalesAccess?.pointSalesAccessDetails}
                error={!!smbPointSalesAccessErrors?.pointSalesAccessDetails}
                helperText={smbPointSalesAccessErrors?.pointSalesAccessDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPointSalesAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="pointSalesAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbPointSalesAccess?.pointSalesAccessActionItems}
                error={!!smbPointSalesAccessErrors.pointSalesAccessActionItems}
                helperText={
                  smbPointSalesAccessErrors.pointSalesAccessActionItems
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPointSalesAccess) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
