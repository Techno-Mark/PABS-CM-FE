import React from "react";
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
}: SystemDocumentInformationAccessTypes) {
  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">General</div>
      <PABSGroupEmail
        checkAllFieldsPABSGroupEmail={checkAllFieldsSmbSystemAccessChecklist}
        smbPABSGroupEmail={smbPABSGroupEmail}
        setSmbPABSGroupEmail={setSmbPABSGroupEmail}
      />
      <AccessAccountingSoftware
        checkAllFieldsAccessAccountingSoftware={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbAccessAccountingSoftware={smbAccessAccountingSoftware}
        setSmbAccessAccountingSoftware={setSmbAccessAccountingSoftware}
        smbAccessAccountingSoftwareErrors={smbSystemAccessChecklistErrors}
      />
      <DropboxSetUp
        checkAllFieldsDropboxSetUp={checkAllFieldsSmbSystemAccessChecklist}
        smbDropboxSetUp={smbDropboxSetUp}
        setSmbDropboxSetUp={setSmbDropboxSetUp}
      />
      <div className="text-[18px] font-medium py-2 w-full">Sales Tax</div>
      <SalesTaxPortalAccess
        checkAllFieldsSalesTaxPortalAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbSalesTaxPortalAccess={smbSalesTaxPortalAccess}
        setSmbSalesTaxPortalAccess={setSmbSalesTaxPortalAccess}
      />
      <div className="text-[18px] font-medium py-2 w-full">Merchant</div>
      <MerchantAccountPortalAccess
        checkAllFieldsMerchantAccountPortalAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbMerchantAccountPortalAccess={smbMerchantAccountPortalAccess}
        setSmbMerchantAccountPortalAccess={setSmbMerchantAccountPortalAccess}
      />
      <div className="text-[18px] font-medium py-2 w-full">Payroll</div>
      <PayrollServiceAccess
        checkAllFieldsPayrollServiceAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbPayrollServiceAccess={smbPayrollServiceAccess}
        setSmbPayrollServiceAccess={setSmbPayrollServiceAccess}
        smbPayrollServiceAccessErrors={smbSystemAccessChecklistErrors}
      />
      <PayrollFrequency
        checkAllFieldsPayrollFrequency={checkAllFieldsSmbSystemAccessChecklist}
        smbPayrollFrequency={smbPayrollFrequency}
        setSmbPayrollFrequency={setSmbPayrollFrequency}
      />
      <div className="text-[18px] font-medium py-2 w-full">Expense</div>
      <ExpensePaymentPortalAccess
        checkAllFieldsExpensePaymentPortalAccess={
          checkAllFieldsSmbSystemAccessChecklist
        }
        smbExpensePaymentPortalAccess={smbExpensePaymentPortalAccess}
        setSmbExpensePaymentPortalAccess={setSmbExpensePaymentPortalAccess}
      />
      <ModeOfPayment
        checkAllFieldsModeOfPayment={checkAllFieldsSmbSystemAccessChecklist}
        smbModeOfPayment={smbModeOfPayment}
        setSmbModeOfPayment={setSmbModeOfPayment}
        smbModeOfPaymentErrors={smbSystemAccessChecklistErrors}
      />
      <ApBills
        smbApBills={smbApBills}
        setSmbApBills={setSmbApBills}
        checkAllFieldsApBills={checkAllFieldsSmbSystemAccessChecklist}
      />
      <div className="text-[18px] font-medium py-2 w-full">POS</div>
      <PointSalesAccess
        checkAllFieldsPointSalesAccess={checkAllFieldsSmbSystemAccessChecklist}
        smbPointSalesAccess={smbPointSalesAccess}
        setSmbPointSalesAccess={setSmbPointSalesAccess}
        smbPointSalesAccessErrors={smbSystemAccessChecklistErrors}
      />
    </div>
  );
}

export default SmbSystemAccessChecklist;

const PABSGroupEmail = ({
  smbPABSGroupEmail,
  setSmbPABSGroupEmail,
  checkAllFieldsPABSGroupEmail,
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="pabsGroupEmailStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbPABSGroupEmail?.pabsGroupEmailStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPABSGroupEmail}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPABSGroupEmail}
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPABSGroupEmail}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AccessAccountingSoftwareStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  smbAccessAccountingSoftware?.AccessAccountingSoftwareStatus
                }
                error={
                  !!smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareStatus
                }
                helperText={
                  smbAccessAccountingSoftwareErrors?.AccessAccountingSoftwareStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsAccessAccountingSoftware
                }
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsAccessAccountingSoftware
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
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsAccessAccountingSoftware
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
        Dropbox Set up
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="DropboxSetUpStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbDropboxSetUp?.DropboxSetUpStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsDropboxSetUp}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsDropboxSetUp}
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsDropboxSetUp}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="salesTaxPortalAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbSalesTaxPortalAccess?.salesTaxPortalAccessStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsSalesTaxPortalAccess}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsSalesTaxPortalAccess}
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsSalesTaxPortalAccess}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="merchantAccountPortalAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  smbMerchantAccountPortalAccess?.merchantAccountPortalAccessStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsMerchantAccountPortalAccess
                }
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsMerchantAccountPortalAccess
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
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsMerchantAccountPortalAccess
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="PayrollServiceAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbPayrollServiceAccess?.PayrollServiceAccessStatus}
                error={
                  !!smbPayrollServiceAccessErrors?.PayrollServiceAccessStatus
                }
                helperText={
                  smbPayrollServiceAccessErrors?.PayrollServiceAccessStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPayrollServiceAccess}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPayrollServiceAccess}
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPayrollServiceAccess}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="PayrollFrequencyStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbPayrollFrequency?.PayrollFrequencyStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPayrollFrequency}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPayrollFrequency}
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPayrollFrequency}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="expensePaymentPortalAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  smbExpensePaymentPortalAccess?.expensePaymentPortalAccessStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsExpensePaymentPortalAccess}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsExpensePaymentPortalAccess}
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsExpensePaymentPortalAccess}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ModeOfPaymentStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbModeOfPayment?.ModeOfPaymentStatus}
                error={!!smbModeOfPaymentErrors?.ModeOfPaymentStatus}
                helperText={smbModeOfPaymentErrors?.ModeOfPaymentStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsModeOfPayment}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsModeOfPayment}
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsModeOfPayment}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ApBillsStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbApBills?.ApBillsStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsApBills}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsApBills}
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsApBills}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="pointSalesAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbPointSalesAccess?.pointSalesAccessStatus}
                error={!!smbPointSalesAccessErrors?.pointSalesAccessStatus}
                helperText={smbPointSalesAccessErrors?.pointSalesAccessStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPointSalesAccess}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPointSalesAccess}
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPointSalesAccess}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
