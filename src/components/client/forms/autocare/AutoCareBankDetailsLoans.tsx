import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareBankDetailsLoansTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareBankDetailsLoans } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCareBankDetailsLoans({
  className,
  bankDetailsLoansRows,
  setBankDetailsLoansRows,
}: autoCareBankDetailsLoansTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setBankDetailsLoansRows([
      ...bankDetailsLoansRows,
      initialAutoCareBankDetailsLoans,
    ]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = bankDetailsLoansRows.filter((_, i) => i !== index);
    setBankDetailsLoansRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = bankDetailsLoansRows.map((bankDetailsLoansRows, rowIndex) =>
      rowIndex === index
        ? { ...bankDetailsLoansRows, [name]: value }
        : bankDetailsLoansRows
    );
    setBankDetailsLoansRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {bankDetailsLoansRows.map((row, index) => (
        <div
          key={index}
          className={`py-3 px-2 w-full flex justify-between ${
            bankDetailsLoansRows.length - 1 === index
              ? "gap-[30px]"
              : "gap-[63px]"
          }${
            index !== bankDetailsLoansRows.length - 1 && "border-b border-[#D8D8D8]"
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
                    Bank Name
                  </label>
                  <TextField
                    name="bankDetailsLoansName"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Name"
                    value={row.bankDetailsLoansName}
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
                  <label className="text-[#6E6D7A] text-[12px]">Type</label>
                  <TextField
                    name="bankDetailsLoansType"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Type"
                    value={row.bankDetailsLoansType}
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
                    Bank Site Link
                  </label>
                  <TextField
                    name="bankDetailsLoansSiteLink"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Bank Site Link"
                    value={row.bankDetailsLoansSiteLink}
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
                    Company ID
                  </label>
                  <TextField
                    name="bankDetailsLoansCompanyId"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Company ID"
                    value={row.bankDetailsLoansCompanyId}
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
                    name="bankDetailsLoansUserId"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter User ID"
                    value={row.bankDetailsLoansUserId}
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
                    name="bankDetailsLoansPassword"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Password"
                    value={row.bankDetailsLoansPassword}
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
                    Security Questions
                  </label>
                  <TextField
                    name="bankDetailsLoansSercurityQuestions"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Security Questions"
                    value={row.bankDetailsLoansSercurityQuestions}
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
                  <label className="text-[#6E6D7A] text-[12px]">Answer</label>
                  <TextField
                    name="bankDetailsLoansAnswer"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Answer"
                    value={row.bankDetailsLoansAnswer}
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
                    name="bankDetailsLoansNotes_Status"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter PABS Notes/Status"
                    value={row.bankDetailsLoansNotes_Status}
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
          <div className="flex justify-end items-center gap-3">
            {bankDetailsLoansRows.length > 1 && (
              <span onClick={() => handleRemoveRow(index)}>
                <MinusCircle />
              </span>
            )}
            {index === bankDetailsLoansRows.length - 1 && (
              <span onClick={handleAddRow}>
                <PlusCircleicon />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AutoCareBankDetailsLoans;
