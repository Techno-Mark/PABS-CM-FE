import React from "react";
// Models import
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
  autoCareCashBankLoansTypes,
} from "@/models/autoCareChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

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
  checkAllFieldsAutoCareCashBankLoans,
  isFormLocked,
}: autoCareCashBankLoansTypes) {
  return (
    <div className={`${className}`}>
      <OperatingCheckingAccount
        checkAllFieldsOperatingCheckingAccount={
          checkAllFieldsAutoCareCashBankLoans
        }
        autoCareOperatingCheckingAccount={autoCareOperatingCheckingAccount}
        setAutoCareOperatingCheckingAccount={
          setAutoCareOperatingCheckingAccount
        }
        operatingCheckingAccountErrors={cashBankLoansErrors}
        isFormLocked={isFormLocked}
      />
      <SavingsAccount
        checkAllFieldsSavingsAccount={checkAllFieldsAutoCareCashBankLoans}
        autoCareSavingsAccount={autoCareSavingsAccount}
        setAutoCareSavingsAccount={setAutoCareSavingsAccount}
        savingsAccountErrors={cashBankLoansErrors}
        isFormLocked={isFormLocked}
      />
      <CreditCard
        checkAllFieldsCreditCard={checkAllFieldsAutoCareCashBankLoans}
        autoCareCreditCard={autoCareCreditCard}
        setAutoCareCreditCard={setAutoCareCreditCard}
        creditCardErrors={cashBankLoansErrors}
        isFormLocked={isFormLocked}
      />
      <BusinessLoans
        checkAllFieldsBusinessLoans={checkAllFieldsAutoCareCashBankLoans}
        autoCareBusinessLoans={autoCareBusinessLoans}
        setAutoCareBusinessLoans={setAutoCareBusinessLoans}
        isFormLocked={isFormLocked}
      />
      <PropertyLoans
        checkAllFieldsPropertyLoans={checkAllFieldsAutoCareCashBankLoans}
        autoCarePropertyLoans={autoCarePropertyLoans}
        setAutoCarePropertyLoans={setAutoCarePropertyLoans}
        isFormLocked={isFormLocked}
      />
    </div>
  );
}

export default AutoCareCashBankLoans;

const OperatingCheckingAccount = ({
  autoCareOperatingCheckingAccount,
  setAutoCareOperatingCheckingAccount,
  operatingCheckingAccountErrors,
  checkAllFieldsOperatingCheckingAccount,
  isFormLocked,
}: OperatingCheckingAccountTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleOperatingCheckingAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                error={
                  !!operatingCheckingAccountErrors?.operatingCheckingAccountComments
                }
                helperText={
                  operatingCheckingAccountErrors?.operatingCheckingAccountComments
                }
                onChange={handleOperatingCheckingAccountChange}
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
                  (roleId === "4" && checkAllFieldsOperatingCheckingAccount) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={
                autoCareOperatingCheckingAccount?.operatingCheckingAccountStatus
              }
              onChange={(value: string) =>
                setAutoCareOperatingCheckingAccount(
                  (prev: OperatingCheckingAccountFormTypes) => ({
                    ...prev,
                    operatingCheckingAccountStatus: value,
                  })
                )
              }
              error={
                operatingCheckingAccountErrors?.operatingCheckingAccountStatus
              }
              helperText={
                operatingCheckingAccountErrors?.operatingCheckingAccountStatus
              }
              disabled={
                (roleId === "4" && checkAllFieldsOperatingCheckingAccount) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                error={
                  !!operatingCheckingAccountErrors?.operatingCheckingAccountDetails
                }
                helperText={
                  operatingCheckingAccountErrors?.operatingCheckingAccountDetails
                }
                onChange={handleOperatingCheckingAccountChange}
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
                  (roleId === "4" && checkAllFieldsOperatingCheckingAccount) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="operatingCheckingAccountActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountActionName
                }
                error={
                  !!operatingCheckingAccountErrors?.operatingCheckingAccountActionName
                }
                helperText={
                  operatingCheckingAccountErrors?.operatingCheckingAccountActionName
                }
                onChange={handleOperatingCheckingAccountChange}
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
                  (roleId === "4" && checkAllFieldsOperatingCheckingAccount) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
                value={
                  autoCareOperatingCheckingAccount?.operatingCheckingAccountActionItems
                }
                error={
                  !!operatingCheckingAccountErrors?.operatingCheckingAccountActionItems
                }
                helperText={
                  operatingCheckingAccountErrors?.operatingCheckingAccountActionItems
                }
                onChange={handleOperatingCheckingAccountChange}
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
                  (roleId === "4" && checkAllFieldsOperatingCheckingAccount) ||
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

const SavingsAccount = ({
  autoCareSavingsAccount,
  setAutoCareSavingsAccount,
  savingsAccountErrors,
  checkAllFieldsSavingsAccount,
  isFormLocked,
}: SavingsAccountTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleSavingsAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsSavingsAccount) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={autoCareSavingsAccount?.savingsAccountStatus}
              onChange={(value: string) =>
                setAutoCareSavingsAccount((prev: SavingsAccountFormTypes) => ({
                  ...prev,
                  savingsAccountStatus: value,
                }))
              }
              error={savingsAccountErrors?.savingsAccountStatus}
              helperText={savingsAccountErrors?.savingsAccountStatus}
              disabled={
                (roleId === "4" && checkAllFieldsSavingsAccount) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsSavingsAccount) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="savingsAccountActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsSavingsAccount) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsSavingsAccount) ||
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

const CreditCard = ({
  autoCareCreditCard,
  setAutoCareCreditCard,
  creditCardErrors,
  checkAllFieldsCreditCard,
  isFormLocked,
}: CreditCardTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
      <div className="py-3 flex flex-col gap-4">
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsCreditCard) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={autoCareCreditCard?.creditCardStatus}
              onChange={(value: string) =>
                setAutoCareCreditCard((prev: CreditCardFormTypes) => ({
                  ...prev,
                  creditCardStatus: value,
                }))
              }
              error={creditCardErrors?.creditCardStatus}
              helperText={creditCardErrors?.creditCardStatus}
              disabled={
                (roleId === "4" && checkAllFieldsCreditCard) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsCreditCard) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="creditCardActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsCreditCard) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsCreditCard) ||
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

const BusinessLoans = ({
  autoCareBusinessLoans,
  setAutoCareBusinessLoans,
  checkAllFieldsBusinessLoans,
  isFormLocked,
}: BusinessLoansTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleBusinessLoansChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsBusinessLoans) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={autoCareBusinessLoans?.businessLoansStatus}
              onChange={(value: string) =>
                setAutoCareBusinessLoans((prev: BusinessLoansFormTypes) => ({
                  ...prev,
                  businessLoansStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsBusinessLoans) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsBusinessLoans) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="businessLoansActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareBusinessLoans?.businessLoansActionName}
                onChange={handleBusinessLoansChange}
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
                  (roleId === "4" && checkAllFieldsBusinessLoans) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
                value={autoCareBusinessLoans?.businessLoansActionItems}
                onChange={handleBusinessLoansChange}
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
                  (roleId === "4" && checkAllFieldsBusinessLoans) ||
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

const PropertyLoans = ({
  autoCarePropertyLoans,
  setAutoCarePropertyLoans,
  checkAllFieldsPropertyLoans,
  isFormLocked,
}: PropertyLoansTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handlePropertyLoansChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPropertyLoans) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={autoCarePropertyLoans?.propertyLoansStatus}
              onChange={(value: string) =>
                setAutoCarePropertyLoans((prev: PropertyLoansFormTypes) => ({
                  ...prev,
                  propertyLoansStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsPropertyLoans) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsPropertyLoans) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="propertyLoansActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCarePropertyLoans?.propertyLoansActionName}
                onChange={handlePropertyLoansChange}
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
                  (roleId === "4" && checkAllFieldsPropertyLoans) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
                value={autoCarePropertyLoans?.propertyLoansActionItems}
                onChange={handlePropertyLoansChange}
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
                  (roleId === "4" && checkAllFieldsPropertyLoans) ||
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
