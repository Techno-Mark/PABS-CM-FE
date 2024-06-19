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
}: SystemDocumentInformationAccessTypes) {
  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">General</div>
      <PABSGroupEmail
        smbPABSGroupEmail={smbPABSGroupEmail}
        setSmbPABSGroupEmail={setSmbPABSGroupEmail}
      />
      <AccessAccountingSoftware
        smbAccessAccountingSoftware={smbAccessAccountingSoftware}
        setSmbAccessAccountingSoftware={setSmbAccessAccountingSoftware}
        smbAccessAccountingSoftwareErrors={smbSystemAccessChecklistErrors}
      />
      <DropboxSetUp
        smbDropboxSetUp={smbDropboxSetUp}
        setSmbDropboxSetUp={setSmbDropboxSetUp}
      />
      <div className="text-[18px] font-medium py-2 w-full">Sales Tax</div>
      <SalesTaxPortalAccess
        smbSalesTaxPortalAccess={smbSalesTaxPortalAccess}
        setSmbSalesTaxPortalAccess={setSmbSalesTaxPortalAccess}
      />
      <div className="text-[18px] font-medium py-2 w-full">Merchant</div>
      <MerchantAccountPortalAccess
        smbMerchantAccountPortalAccess={smbMerchantAccountPortalAccess}
        setSmbMerchantAccountPortalAccess={setSmbMerchantAccountPortalAccess}
      />
      <div className="text-[18px] font-medium py-2 w-full">Payroll</div>
      <PayrollServiceAccess
        smbPayrollServiceAccess={smbPayrollServiceAccess}
        setSmbPayrollServiceAccess={setSmbPayrollServiceAccess}
        smbPayrollServiceAccessErrors={smbSystemAccessChecklistErrors}
      />
      <PayrollFrequency
        smbPayrollFrequency={smbPayrollFrequency}
        setSmbPayrollFrequency={setSmbPayrollFrequency}
      />
      <div className="text-[18px] font-medium py-2 w-full">Expense</div>
      <ExpensePaymentPortalAccess
        smbExpensePaymentPortalAccess={smbExpensePaymentPortalAccess}
        setSmbExpensePaymentPortalAccess={setSmbExpensePaymentPortalAccess}
      />
      <ModeOfPayment
        smbModeOfPayment={smbModeOfPayment}
        setSmbModeOfPayment={setSmbModeOfPayment}
        smbModeOfPaymentErrors={smbSystemAccessChecklistErrors}
      />
      <ApBills smbApBills={smbApBills} setSmbApBills={setSmbApBills} />
      <div className="text-[18px] font-medium py-2 w-full">POS</div>
      <PointSalesAccess
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
}: PABSGroupEmailTypes) => {
  const classes = useStyles();

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
                placeholder="Please Enter Action Items"
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
}: AccessAccountingSoftwareTypes) => {
  const classes = useStyles();

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
                placeholder="Please Enter Action Items"
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
}: DropboxSetUpTypes) => {
  const classes = useStyles();

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
                placeholder="Please Enter Action Items"
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
}: SalesTaxPortalAccessTypes) => {
  const classes = useStyles();

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
        Provide Access to Sales Tax portal Access
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
                placeholder="Please Enter Action Items"
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
}: MerchantAccountPortalAccessTypes) => {
  const classes = useStyles();

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
        Merchant account portal Access (If any)
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
                placeholder="Please Enter Action Items"
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
}: PayrollServiceAccessTypes) => {
  const classes = useStyles();

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
        Payroll service Provider Access<span className="text-[#DC3545]">*</span>
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
                placeholder="Please Enter Action Items"
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
}: PayrollFrequencyTypes) => {
  const classes = useStyles();

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
        No. of employees on roll , Payroll Frequency
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
                placeholder="Please Enter Action Items"
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
}: ExpensePaymentPortalAccessTypes) => {
  const classes = useStyles();

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
        Expense Payment portal Access (If any)
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
                placeholder="Please Enter Action Items"
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
}: ModeOfPaymentTypes) => {
  const classes = useStyles();

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
        Monthly AP Bills counts & Mode of Payment
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
                placeholder="Please Enter Action Items"
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
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ApBills = ({ smbApBills, setSmbApBills }: ApBillsTypes) => {
  const classes = useStyles();

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
        AP bills - (mode of receiving bills)
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
                placeholder="Please Enter Action Items"
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
}: PointSalesAccessTypes) => {
  const classes = useStyles();

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
                placeholder="Please Enter Action Items"
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
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
