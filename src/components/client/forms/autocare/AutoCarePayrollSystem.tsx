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

function AutoCarePayrollSystem({
  className,
  payrollSystemError,
  autoCarePayrollServiceProvider,
  setAutoCarePayrollServiceProvider,
  autoCareFrequency,
  setAutoCareFrequency,
  autoCareNoOfEmployee,
  setAutoCareNoOfEmployee,
}: autoCarePayrollSystemTypes) {
  return (
    <div className={`${className}`}>
      <PayrollServiceProvider
        autoCarePayrollServiceProvider={autoCarePayrollServiceProvider}
        setAutoCarePayrollServiceProvider={setAutoCarePayrollServiceProvider}
        payrollServiceProviderError={payrollSystemError}
      />
      <Frequency
        autoCareFrequency={autoCareFrequency}
        setAutoCareFrequency={setAutoCareFrequency}
        frequencyErrors={payrollSystemError}
      />
      <NoOfEmployees
        autoCareNoOfEmployee={autoCareNoOfEmployee}
        setAutoCareNoOfEmployee={setAutoCareNoOfEmployee}
      />
    </div>
  );
}

export default AutoCarePayrollSystem;

const PayrollServiceProvider = ({
  autoCarePayrollServiceProvider,
  setAutoCarePayrollServiceProvider,
  payrollServiceProviderError,
}: PayrollServiceProviderTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="payrollServiceProviderStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  autoCarePayrollServiceProvider?.payrollServiceProviderStatus
                }
                error={
                  !!payrollServiceProviderError?.payrollServiceProviderStatus
                }
                helperText={
                  payrollServiceProviderError?.payrollServiceProviderStatus
                }
                onChange={handlePayrollServiceProviderChange}
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
                name="payrollServiceProviderActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
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
                name="payrollServiceProviderActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
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

const Frequency = ({
  autoCareFrequency,
  setAutoCareFrequency,
  frequencyErrors,
}: FrequencyTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="frequencyStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareFrequency?.frequencyStatus}
                error={!!frequencyErrors?.frequencyStatus}
                helperText={frequencyErrors?.frequencyStatus}
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
                name="frequencyActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
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
                name="frequencyActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
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

const NoOfEmployees = ({
  autoCareNoOfEmployee,
  setAutoCareNoOfEmployee,
}: NoOfEmployeeTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="noOfEmployeeStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareNoOfEmployee?.noOfEmployeeStatus}
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
                name="noOfEmployeeActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareNoOfEmployee?.noOfEmployeeActionName}
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
                placeholder="Please Enter Action Items"
                value={autoCareNoOfEmployee?.noOfEmployeeActionItems}
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
