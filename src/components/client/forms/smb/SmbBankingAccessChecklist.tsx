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
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

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
  checkAllFieldsSmbBankingAccessChecklist,
}: CashBankingAccessType) {
  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">Banking</div>
      <SavingAccount
        checkAllFieldsSavingAccount={checkAllFieldsSmbBankingAccessChecklist}
        smbSavingAccount={smbSavingAccount}
        setSmbSavingAccount={setSmbSavingAccount}
        smbSavingAccountErrors={smbCashBankingAccessErrors}
      />
      <AccessSavingAccount
        checkAllFieldsAccessSavingAccount={
          checkAllFieldsSmbBankingAccessChecklist
        }
        smbAccessSavingAccount={smbAccessSavingAccount}
        setSmbAccessSavingAccount={setSmbAccessSavingAccount}
      />
      <div className="text-[18px] font-medium py-2 w-full">Credit Card</div>
      <AddCards
        checkAllFieldsAddCards={checkAllFieldsSmbBankingAccessChecklist}
        smbAddCards={smbAddCards}
        setSmbAddCards={setSmbAddCards}
        smbAddCardsErrors={smbCashBankingAccessErrors}
      />
      <AccessCreditCardPortal
        checkAllFieldsAccessCreditCardPortal={
          checkAllFieldsSmbBankingAccessChecklist
        }
        smbAccessCreditCardPortal={smbAccessCreditCardPortal}
        setSmbAccessCreditCardPortal={setSmbAccessCreditCardPortal}
      />
      <div className="text-[18px] font-medium py-2 w-full">Loan/LOC</div>
      <AccessLoanAccount
        checkAllFieldsAccessLoanAccount={
          checkAllFieldsSmbBankingAccessChecklist
        }
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
  checkAllFieldsSavingAccount,
}: SavingAccountTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
        No. of Checking & Saving Accounts
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
        <Grid item xs={3}>
          <Status
            value={smbSavingAccount?.SavingAccountStatus}
            onChange={(value: string) =>
              setSmbSavingAccount((prev: SavingAccountFormTypes) => ({
                  ...prev,
                  SavingAccountStatus: value,
                }))
              }
            error={smbSavingAccountErrors?.SavingAccountStatus}
            helperText={smbSavingAccountErrors?.SavingAccountStatus}
            disabled={roleId === "4" && checkAllFieldsSavingAccount}
          />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsSavingAccount}
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsSavingAccount}
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
  checkAllFieldsAccessSavingAccount,
}: AccessSavingAccountTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
          <Status
            value={smbAccessSavingAccount?.AccessSavingAccountStatus}
            onChange={(value: string) =>
              setSmbAccessSavingAccount((prev: AccessSavingAccountFormTypes) => ({
                  ...prev,
                  AccessSavingAccountStatus: value,
                }))
              }
            disabled={roleId === "4" && checkAllFieldsAccessSavingAccount}
          />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessSavingAccount}
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbAccessSavingAccount?.AccessSavingAccountActionItems}
                onChange={handleAccessSavingAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessSavingAccount}
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
  checkAllFieldsAddCards,
}: AddCardsTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
        No Credit/Debit Cards Any Add on Cards
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
        <Grid item xs={3}>
          <Status
            value={smbAddCards?.AddCardsStatus}
            onChange={(value: string) =>
              setSmbAddCards((prev: AddCardsFormTypes) => ({
                  ...prev,
                  AddCardsStatus: value,
                }))
              }
            error={smbAddCardsErrors?.AddCardsStatus}
            helperText={smbAddCardsErrors?.AddCardsStatus}
            disabled={roleId === "4" && checkAllFieldsAddCards}
          />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAddCards}
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAddCards}
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
  checkAllFieldsAccessLoanAccount,
}: AccessLoanAccountTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
          <Status
            value={smbAccessLoanAccount?.AccessLoanAccountStatus}
            onChange={(value: string) =>
              setSmbAccessLoanAccount((prev: AccessLoanAccountFormTypes) => ({
                  ...prev,
                  AccessLoanAccountStatus: value,
                }))
              }
            disabled={roleId === "4" && checkAllFieldsAccessLoanAccount}
          />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessLoanAccount}
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbAccessLoanAccount?.AccessLoanAccountActionItems}
                onChange={handleAccessLoanAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessLoanAccount}
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
  checkAllFieldsAccessCreditCardPortal,
}: AccessCreditCardPortalTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
          <Status
            value={smbAccessCreditCardPortal?.AccessCreditCardPortalStatus}
            onChange={(value: string) =>
              setSmbAccessCreditCardPortal((prev: AccessCreditCardPortalFormTypes) => ({
                  ...prev,
                  AccessCreditCardPortalStatus: value,
                }))
              }
            disabled={roleId === "4" && checkAllFieldsAccessCreditCardPortal}
          />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAccessCreditCardPortal}
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAccessCreditCardPortal}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
