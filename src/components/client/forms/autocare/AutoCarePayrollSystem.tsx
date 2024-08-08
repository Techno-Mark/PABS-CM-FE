import React from "react";
// Models import
import {
  FrequencyFormTypes,
  FrequencyTypes,
  NoOfEmployeeFormTypes,
  NoOfEmployeeTypes,
  PayrollServiceProviderFormTypes,
  PayrollServiceProviderTypes,
  autoCarePayrollSystemTypes,
} from "@/models/autoCareChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

function AutoCarePayrollSystem({
  className,
  payrollSystemError,
  autoCarePayrollServiceProvider,
  setAutoCarePayrollServiceProvider,
  autoCareFrequency,
  setAutoCareFrequency,
  autoCareNoOfEmployee,
  setAutoCareNoOfEmployee,
  checkAllFieldsAutoCarePayrollSystem,
  isFormLocked,
}: autoCarePayrollSystemTypes) {
  return (
    <div className={`${className}`}>
      <PayrollServiceProvider
        checkAllFieldsPayrollServiceProvider={
          checkAllFieldsAutoCarePayrollSystem
        }
        autoCarePayrollServiceProvider={autoCarePayrollServiceProvider}
        setAutoCarePayrollServiceProvider={setAutoCarePayrollServiceProvider}
        payrollServiceProviderError={payrollSystemError}
        isFormLocked={isFormLocked}
      />
      <Frequency
        checkAllFieldsFrequency={checkAllFieldsAutoCarePayrollSystem}
        autoCareFrequency={autoCareFrequency}
        setAutoCareFrequency={setAutoCareFrequency}
        frequencyErrors={payrollSystemError}
        isFormLocked={isFormLocked}
      />
      <NoOfEmployees
        checkAllFieldsNoOfEmployees={checkAllFieldsAutoCarePayrollSystem}
        autoCareNoOfEmployee={autoCareNoOfEmployee}
        setAutoCareNoOfEmployee={setAutoCareNoOfEmployee}
        isFormLocked={isFormLocked}
      />
    </div>
  );
}

export default AutoCarePayrollSystem;

const PayrollServiceProvider = ({
  autoCarePayrollServiceProvider,
  setAutoCarePayrollServiceProvider,
  payrollServiceProviderError,
  checkAllFieldsPayrollServiceProvider,
  isFormLocked,
}: PayrollServiceProviderTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handlePayrollServiceProviderChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCarePayrollServiceProvider(
      (prev: PayrollServiceProviderFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Payroll Service Provider<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="payrollServiceProviderComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  autoCarePayrollServiceProvider?.payrollServiceProviderComments
                }
                error={
                  !!payrollServiceProviderError?.payrollServiceProviderComments
                }
                helperText={
                  payrollServiceProviderError?.payrollServiceProviderComments
                }
                onChange={handlePayrollServiceProviderChange}
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
                  (roleId === "4" && checkAllFieldsPayrollServiceProvider) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={
                autoCarePayrollServiceProvider?.payrollServiceProviderStatus
              }
              onChange={(value: string) =>
                setAutoCarePayrollServiceProvider(
                  (prev: PayrollServiceProviderFormTypes) => ({
                    ...prev,
                    payrollServiceProviderStatus: value,
                  })
                )
              }
              error={payrollServiceProviderError?.payrollServiceProviderStatus}
              helperText={
                payrollServiceProviderError?.payrollServiceProviderStatus
              }
              disabled={
                (roleId === "4" && checkAllFieldsPayrollServiceProvider) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="payrollServiceProviderDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCarePayrollServiceProvider?.payrollServiceProviderDetails
                }
                error={
                  !!payrollServiceProviderError?.payrollServiceProviderDetails
                }
                helperText={
                  payrollServiceProviderError?.payrollServiceProviderDetails
                }
                onChange={handlePayrollServiceProviderChange}
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
                  (roleId === "4" && checkAllFieldsPayrollServiceProvider) ||
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
                name="payrollServiceProviderActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  autoCarePayrollServiceProvider?.payrollServiceProviderActionName
                }
                error={
                  !!payrollServiceProviderError?.payrollServiceProviderActionName
                }
                helperText={
                  payrollServiceProviderError?.payrollServiceProviderActionName
                }
                onChange={handlePayrollServiceProviderChange}
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
                  (roleId === "4" && checkAllFieldsPayrollServiceProvider) ||
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
                name="payrollServiceProviderActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  autoCarePayrollServiceProvider?.payrollServiceProviderActionItems
                }
                error={
                  !!payrollServiceProviderError?.payrollServiceProviderActionItems
                }
                helperText={
                  payrollServiceProviderError?.payrollServiceProviderActionItems
                }
                onChange={handlePayrollServiceProviderChange}
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
                  (roleId === "4" && checkAllFieldsPayrollServiceProvider) ||
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

const Frequency = ({
  autoCareFrequency,
  setAutoCareFrequency,
  frequencyErrors,
  checkAllFieldsFrequency,
  isFormLocked,
}: FrequencyTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareFrequency((prev: FrequencyFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Frequency<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="frequencyComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareFrequency?.frequencyComments}
                error={!!frequencyErrors?.frequencyComments}
                helperText={frequencyErrors?.frequencyComments}
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
                  (roleId === "4" && checkAllFieldsFrequency) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={autoCareFrequency?.frequencyStatus}
              onChange={(value: string) =>
                setAutoCareFrequency((prev: FrequencyFormTypes) => ({
                  ...prev,
                  frequencyStatus: value,
                }))
              }
              error={frequencyErrors?.frequencyStatus}
              helperText={frequencyErrors?.frequencyStatus}
              disabled={
                (roleId === "4" && checkAllFieldsFrequency) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="frequencyDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareFrequency?.frequencyDetails}
                error={!!frequencyErrors?.frequencyDetails}
                helperText={frequencyErrors?.frequencyDetails}
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
                  (roleId === "4" && checkAllFieldsFrequency) ||
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
                name="frequencyActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareFrequency?.frequencyActionName}
                error={!!frequencyErrors?.frequencyActionName}
                helperText={frequencyErrors?.frequencyActionName}
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
                  (roleId === "4" && checkAllFieldsFrequency) ||
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
                name="frequencyActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareFrequency?.frequencyActionItems}
                error={!!frequencyErrors?.frequencyActionItems}
                helperText={frequencyErrors?.frequencyActionItems}
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
                  (roleId === "4" && checkAllFieldsFrequency) ||
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

const NoOfEmployees = ({
  autoCareNoOfEmployee,
  setAutoCareNoOfEmployee,
  checkAllFieldsNoOfEmployees,
  isFormLocked,
}: NoOfEmployeeTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareNoOfEmployee((prev: NoOfEmployeeFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Number of Employees
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="noOfEmployeeComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareNoOfEmployee?.noOfEmployeeComments}
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
                  (roleId === "4" && checkAllFieldsNoOfEmployees) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={autoCareNoOfEmployee?.noOfEmployeeStatus}
              onChange={(value: string) =>
                setAutoCareNoOfEmployee((prev: NoOfEmployeeFormTypes) => ({
                  ...prev,
                  noOfEmployeeStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsNoOfEmployees) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="noOfEmployeeStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareNoOfEmployee?.noOfEmployeeStatus}
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
                  (roleId === "4" && checkAllFieldsNoOfEmployees) ||
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
                name="noOfEmployeeActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareNoOfEmployee?.noOfEmployeeActionName}
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
                  (roleId === "4" && checkAllFieldsNoOfEmployees) ||
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
                name="noOfEmployeeActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareNoOfEmployee?.noOfEmployeeActionItems}
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
                  (roleId === "4" && checkAllFieldsNoOfEmployees) ||
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
