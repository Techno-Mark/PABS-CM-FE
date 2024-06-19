import React from "react";
// Models import
import {
  AccessCreditCardFormTypes,
  AccessCreditCardPortalFormTypes,
  AccessCreditCardPortalTypes,
  AccessCreditCardTypes,
  AccessLoanAccountFormTypes,
  AccessLoanAccountTypes,
  AccessSavingAccountFormTypes,
  AccessSavingAccountTypes,
  AddCardsFormTypes,
  AddCardsTypes,
  CashBankingAccessType,
  SavingAccountFormTypes,
  SavingAccountTypes,
} from "@/models/smbChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function SmbBankingAccessChecklist({
  className,
  smbCashBankingAccessErrors,
  smbSavingAccount,
  setSmbSavingAccount,
  smbAccessSavingAccount,
  setSmbAccessSavingAccount,
  smbAddCards,
  setSmbAddCards,
  smbAccessCreditCardPortal,
  setSmbAccessCreditCardPortal,
  smbAccessLoanAccount,
  setSmbAccessLoanAccount,
  smbAccessCreditCard,
  setSmbAccessCreditCard,
}: CashBankingAccessType) {
  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">Banking</div>
      <SavingAccount
        smbSavingAccount={smbSavingAccount}
        setSmbSavingAccount={setSmbSavingAccount}
        smbSavingAccountErrors={smbCashBankingAccessErrors}
      />
      <AccessSavingAccount
        smbAccessSavingAccount={smbAccessSavingAccount}
        setSmbAccessSavingAccount={setSmbAccessSavingAccount}
      />
      <div className="text-[18px] font-medium py-2 w-full">Credit Card</div>
      <AddCards
        smbAddCards={smbAddCards}
        setSmbAddCards={setSmbAddCards}
        smbAddCardsErrors={smbCashBankingAccessErrors}
      />
      <AccessCreditCardPortal
        smbAccessCreditCardPortal={smbAccessCreditCardPortal}
        setSmbAccessCreditCardPortal={setSmbAccessCreditCardPortal}
      />
      <div className="text-[18px] font-medium py-2 w-full">Loan/LOC</div>
      <AccessLoanAccount
        smbAccessLoanAccount={smbAccessLoanAccount}
        setSmbAccessLoanAccount={setSmbAccessLoanAccount}
      />
    </div>
  );
}

export default SmbBankingAccessChecklist;

const SavingAccount = ({
  smbSavingAccount,
  setSmbSavingAccount,
  smbSavingAccountErrors,
}: SavingAccountTypes) => {
  const classes = useStyles();

  const handleSavingAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbSavingAccount((prev: SavingAccountFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        No of Checking & Saving Accounts<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="SavingAccountStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbSavingAccount?.SavingAccountStatus}
                error={!!smbSavingAccountErrors?.SavingAccountStatus}
                helperText={smbSavingAccountErrors?.SavingAccountStatus}
                onChange={handleSavingAccountChange}
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
                name="SavingAccountDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbSavingAccount?.SavingAccountDetails}
                error={!!smbSavingAccountErrors?.SavingAccountDetails}
                helperText={smbSavingAccountErrors?.SavingAccountDetails}
                onChange={handleSavingAccountChange}
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
                name="SavingAccountActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbSavingAccount?.SavingAccountActionItems}
                error={!!smbSavingAccountErrors?.SavingAccountActionItems}
                helperText={smbSavingAccountErrors?.SavingAccountActionItems}
                onChange={handleSavingAccountChange}
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

const AccessSavingAccount = ({
  smbAccessSavingAccount,
  setSmbAccessSavingAccount,
}: AccessSavingAccountTypes) => {
  const classes = useStyles();

  const handleAccessSavingAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbAccessSavingAccount((prev: AccessSavingAccountFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Access (&ldquo;Read-Only&rdquo;) to Checking/ Saving Accounts
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AccessSavingAccountStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbAccessSavingAccount?.AccessSavingAccountStatus}
                onChange={handleAccessSavingAccountChange}
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
                name="AccessSavingAccountDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbAccessSavingAccount?.AccessSavingAccountDetails}
                onChange={handleAccessSavingAccountChange}
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
                name="AccessSavingAccountActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbAccessSavingAccount?.AccessSavingAccountActionItems}
                onChange={handleAccessSavingAccountChange}
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

const AddCards = ({
  smbAddCards,
  setSmbAddCards,
  smbAddCardsErrors,
}: AddCardsTypes) => {
  const classes = useStyles();

  const handleAccessCardsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbAddCards((prev: AddCardsFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        No Credit/Debit Cards Any add on Cards<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AddCardsStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbAddCards?.AddCardsStatus}
                error={!!smbAddCardsErrors?.AddCardsStatus}
                helperText={smbAddCardsErrors?.AddCardsStatus}
                onChange={handleAccessCardsChange}
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
                name="AddCardsDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbAddCards?.AddCardsDetails}
                error={!!smbAddCardsErrors?.AddCardsDetails}
                helperText={smbAddCardsErrors?.AddCardsDetails}
                onChange={handleAccessCardsChange}
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
                name="AddCardsActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbAddCards?.AddCardsActionItems}
                error={!!smbAddCardsErrors?.AddCardsActionItems}
                helperText={smbAddCardsErrors?.AddCardsActionItems}
                onChange={handleAccessCardsChange}
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

const AccessLoanAccount = ({
  smbAccessLoanAccount,
  setSmbAccessLoanAccount,
}: AccessLoanAccountTypes) => {
  const classes = useStyles();

  const handleAccessLoanAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbAccessLoanAccount((prev: AccessLoanAccountFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Access to Loan/Loc Account
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AccessLoanAccountStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbAccessLoanAccount?.AccessLoanAccountStatus}
                onChange={handleAccessLoanAccountChange}
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
                name="AccessLoanAccountDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbAccessLoanAccount?.AccessLoanAccountDetails}
                onChange={handleAccessLoanAccountChange}
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
                name="AccessLoanAccountActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbAccessLoanAccount?.AccessLoanAccountActionItems}
                onChange={handleAccessLoanAccountChange}
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

const AccessCreditCardPortal = ({
  smbAccessCreditCardPortal,
  setSmbAccessCreditCardPortal,
}: AccessCreditCardPortalTypes) => {
  const classes = useStyles();

  const handleAccessCreditCardChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbAccessCreditCardPortal((prev: AccessCreditCardPortalFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Access for Credit Cards Portal
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AccessCreditCardPortalStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbAccessCreditCardPortal?.AccessCreditCardPortalStatus}
                onChange={handleAccessCreditCardChange}
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
                name="AccessCreditCardPortalDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbAccessCreditCardPortal?.AccessCreditCardPortalDetails}
                onChange={handleAccessCreditCardChange}
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
                name="AccessCreditCardPortalActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  smbAccessCreditCardPortal?.AccessCreditCardPortalActionItems
                }
                onChange={handleAccessCreditCardChange}
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
