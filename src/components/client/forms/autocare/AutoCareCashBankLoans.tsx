import {
  BusinessLoansFormTypes,
  BusinessLoansTypes,
  CreditCardFormTypes,
  CreditCardTypes,
  OperatingCheckingAccountFormTypes,
  OperatingCheckingAccountTypes,
  PropertyLoansFormTypes,
  PropertyLoansTypes,
  SavingsAccountFormTypes,
  SavingsAccountTypes,
} from "@/models/autoCarChecklist";
import {
  initialAutoCareBusinessLoans,
  initialAutoCareCreditCard,
  initialAutoCareOperatingCheckingAccount,
  initialAutoCarePropertyLoans,
  initialAutoCareSavingsAccount,
} from "@/static/autoCareChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareCashBankLoans({
  className,
  cashBankLoansErrors,
  autoCareOperatingCheckingAccount,
  setAutoCareOperatingCheckingAccount,
  autoCareSavingsAccount,
  setAutoCareSavingsAccount,
  autoCareCreditCard,
  setAutoCareCreditCard,
  autoCareBusinessLoans,
  setAutoCareBusinessLoans,
  autoCarePropertyLoans,
  setAutoCarePropertyLoans,
}: any) {

  return (
    <div className={`${className}`}>
      <OperatingCheckingAccount
        autoCareOperatingCheckingAccount={autoCareOperatingCheckingAccount}
        setAutoCareOperatingCheckingAccount={
          setAutoCareOperatingCheckingAccount
        }
        operatingCheckingAccountErrors={cashBankLoansErrors}
      />
      <SavingsAccount
        autoCareSavingsAccount={autoCareSavingsAccount}
        setAutoCareSavingsAccount={setAutoCareSavingsAccount}
        savingsAccountErrors={cashBankLoansErrors}
      />
      <CreditCard
        autoCareCreditCard={autoCareCreditCard}
        setAutoCareCreditCard={setAutoCareCreditCard}
        creditCardErrors={cashBankLoansErrors}
      />
      <BusinessLoans
        autoCareBusinessLoans={autoCareBusinessLoans}
        setAutoCareBusinessLoans={setAutoCareBusinessLoans}
      />
      <PropertyLoans
        autoCarePropertyLoans={autoCarePropertyLoans}
        setAutoCarePropertyLoans={setAutoCarePropertyLoans}
      />
    </div>
  );
}

export default AutoCareCashBankLoans;

const OperatingCheckingAccount = ({
  autoCareOperatingCheckingAccount,
  setAutoCareOperatingCheckingAccount,
  operatingCheckingAccountErrors,
}: OperatingCheckingAccountTypes) => {
  const classes = useStyles();

  const handleOperatingCheckingAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareOperatingCheckingAccount(
      (prev: OperatingCheckingAccountFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Operating Checking Account(s)<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="operatingCheckingAccountComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountComments
                }
                error={!!operatingCheckingAccountErrors?.operatingCheckingAccountComments}
                helperText={operatingCheckingAccountErrors?.operatingCheckingAccountComments}
                onChange={handleOperatingCheckingAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="operatingCheckingAccountStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountStatus
                }
                error={!!operatingCheckingAccountErrors?.operatingCheckingAccountStatus}
                helperText={operatingCheckingAccountErrors?.operatingCheckingAccountStatus}
                onChange={handleOperatingCheckingAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="operatingCheckingAccountDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountDetails
                }
                error={!!operatingCheckingAccountErrors?.operatingCheckingAccountDetails}
                helperText={operatingCheckingAccountErrors?.operatingCheckingAccountDetails}
                onChange={handleOperatingCheckingAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="operatingCheckingAccountActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountActionName
                }
                error={!!operatingCheckingAccountErrors?.operatingCheckingAccountActionName}
                helperText={operatingCheckingAccountErrors?.operatingCheckingAccountActionName}
                onChange={handleOperatingCheckingAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="operatingCheckingAccountActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountActionItems
                }
                error={!!operatingCheckingAccountErrors?.operatingCheckingAccountActionItems}
                helperText={operatingCheckingAccountErrors?.operatingCheckingAccountActionItems}
                onChange={handleOperatingCheckingAccountChange}
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

const SavingsAccount = ({
  autoCareSavingsAccount,
  setAutoCareSavingsAccount,
  savingsAccountErrors
}: SavingsAccountTypes) => {
  const classes = useStyles();

  const handleSavingsAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareSavingsAccount((prev: SavingsAccountFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Savings Account(s)<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="savingsAccountComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareSavingsAccount?.savingsAccountComments}
                error={!!savingsAccountErrors?.savingsAccountComments}
                helperText={savingsAccountErrors?.savingsAccountComments}
                onChange={handleSavingsAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="savingsAccountStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareSavingsAccount?.savingsAccountStatus}
                error={!!savingsAccountErrors?.savingsAccountStatus}
                helperText={savingsAccountErrors?.savingsAccountStatus}
                onChange={handleSavingsAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="savingsAccountDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareSavingsAccount?.savingsAccountDetails}
                error={!!savingsAccountErrors?.savingsAccountDetails}
                helperText={savingsAccountErrors?.savingsAccountDetails}
                onChange={handleSavingsAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="savingsAccountActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareSavingsAccount?.savingsAccountActionName}
                error={!!savingsAccountErrors?.savingsAccountActionName}
                helperText={savingsAccountErrors?.savingsAccountActionName}
                onChange={handleSavingsAccountChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="savingsAccountActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareSavingsAccount?.savingsAccountActionItems}
                error={!!savingsAccountErrors?.savingsAccountActionItems}
                helperText={savingsAccountErrors?.savingsAccountActionItems}
                onChange={handleSavingsAccountChange}
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

const CreditCard = ({
  autoCareCreditCard,
  setAutoCareCreditCard,
  creditCardErrors
}: CreditCardTypes) => {
  const classes = useStyles();

  const handleCreditCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareCreditCard((prev: CreditCardFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Credit Card(s)<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="creditCardComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareCreditCard?.creditCardComments}
                error={!!creditCardErrors?.creditCardComments}
                helperText={creditCardErrors?.creditCardComments}
                onChange={handleCreditCardChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="creditCardStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareCreditCard?.creditCardStatus}
                error={!!creditCardErrors?.creditCardStatus}
                helperText={creditCardErrors?.creditCardStatus}
                onChange={handleCreditCardChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="creditCardDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareCreditCard?.creditCardDetails}
                error={!!creditCardErrors?.creditCardDetails}
                helperText={creditCardErrors?.creditCardDetails}
                onChange={handleCreditCardChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="creditCardActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareCreditCard?.creditCardActionName}
                error={!!creditCardErrors?.creditCardActionName}
                helperText={creditCardErrors?.creditCardActionName}
                onChange={handleCreditCardChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="creditCardActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareCreditCard?.creditCardActionItems}
                error={!!creditCardErrors?.creditCardActionItems}
                helperText={creditCardErrors?.creditCardActionItems}
                onChange={handleCreditCardChange}
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

const BusinessLoans = ({
  autoCareBusinessLoans,
  setAutoCareBusinessLoans,
}: BusinessLoansTypes) => {
  const classes = useStyles();

  const handleBusinessLoansChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareBusinessLoans((prev: BusinessLoansFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Business Loan(s)
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="businessLoansComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareBusinessLoans?.businessLoansComments}
                onChange={handleBusinessLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="businessLoansStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareBusinessLoans?.businessLoansStatus}
                onChange={handleBusinessLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="businessLoansDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareBusinessLoans?.businessLoansDetails}
                onChange={handleBusinessLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="businessLoansActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareBusinessLoans?.businessLoansActionName}
                onChange={handleBusinessLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="businessLoansActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareBusinessLoans?.businessLoansActionItems}
                onChange={handleBusinessLoansChange}
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

const PropertyLoans = ({
  autoCarePropertyLoans,
  setAutoCarePropertyLoans,
}: PropertyLoansTypes) => {
  const classes = useStyles();

  const handlePropertyLoansChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCarePropertyLoans((prev: PropertyLoansFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Property Loan(s)
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="propertyLoansComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCarePropertyLoans?.propertyLoansComments}
                onChange={handlePropertyLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="propertyLoansStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCarePropertyLoans?.propertyLoansStatus}
                onChange={handlePropertyLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="propertyLoansDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCarePropertyLoans?.propertyLoansDetails}
                onChange={handlePropertyLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="propertyLoansActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCarePropertyLoans?.propertyLoansActionName}
                onChange={handlePropertyLoansChange}
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
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="propertyLoansActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCarePropertyLoans?.propertyLoansActionItems}
                onChange={handlePropertyLoansChange}
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
