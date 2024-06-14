import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCarePayrollDetailsTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCarePayrollDetails } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCarePayrollDetails({
  className,
  payrollDetailsRows,
  setPayrollDetailsRows,
}: autoCarePayrollDetailsTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setPayrollDetailsRows([
      ...payrollDetailsRows,
      initialAutoCarePayrollDetails,
    ]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = payrollDetailsRows.filter((_, i) => i !== index);
    setPayrollDetailsRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = payrollDetailsRows.map((payrollDetailsRows, rowIndex) =>
      rowIndex === index
        ? { ...payrollDetailsRows, [name]: value }
        : payrollDetailsRows
    );
    setPayrollDetailsRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {payrollDetailsRows.map((row, index) => (
        <div
          key={index}
          className={`py-3 px-2 w-full flex justify-between ${
            payrollDetailsRows.length - 1 === index
              ? "gap-[30px]"
              : "gap-[63px]"
          }${
            index !== payrollDetailsRows.length - 1 && "border-b border-[#D8D8D8]"
          }`}
        >
          <div className="flex">
            <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
              {index + 1}.
            </span>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    Company Name
                  </label>
                  <TextField
                    name="payrollDetailsCompanyName"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Company Name"
                    value={row.payrollDetailsCompanyName}
                    onChange={(event) => handleInputChange(index, event)}
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
                  <label className="text-[#6E6D7A] text-[12px]">Link</label>
                  <TextField
                    name="payrollDetailsLink"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Link"
                    value={row.payrollDetailsLink}
                    onChange={(event) => handleInputChange(index, event)}
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
                  <label className="text-[#6E6D7A] text-[12px]">User ID</label>
                  <TextField
                    name="payrollDetailsUserId"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter User ID"
                    value={row.payrollDetailsUserId}
                    onChange={(event) => handleInputChange(index, event)}
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
                  <label className="text-[#6E6D7A] text-[12px]">Password</label>
                  <TextField
                    name="payrollDetailsPassword"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Password"
                    value={row.payrollDetailsPassword}
                    onChange={(event) => handleInputChange(index, event)}
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
                  <label className="text-[#6E6D7A] text-[12px]">
                    Passcode (If any)
                  </label>
                  <TextField
                    name="payrollDetailsPasscode"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Passcode (If any)"
                    value={row.payrollDetailsPasscode}
                    onChange={(event) => handleInputChange(index, event)}
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
                  <label className="text-[#6E6D7A] text-[12px]">
                    PABS Notes/Status
                  </label>
                  <TextField
                    name="payrollDetailsNotes_Status"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter PABS Notes/Status"
                    value={row.payrollDetailsNotes_Status}
                    onChange={(event) => handleInputChange(index, event)}
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
          <div className="flex justify-end items-end gap-3">
            {payrollDetailsRows.length > 1 && (
              <span className="cursor-pointer" onClick={() => handleRemoveRow(index)}>
                <MinusCircle />
              </span>
            )}
            {index === payrollDetailsRows.length - 1 && (
              <span className="cursor-pointer" onClick={handleAddRow}>
                <PlusCircleicon />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AutoCarePayrollDetails;
