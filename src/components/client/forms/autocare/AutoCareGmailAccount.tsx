import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareGmailAccountTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareGmailAccountDetails } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI imports
import { Grid, TextField } from "@mui/material";

function AutoCareGmailAccount({
  className,
  gmailAccountRows,
  setGmailAccountRows,
}: autoCareGmailAccountTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setGmailAccountRows([
      ...gmailAccountRows,
      initialAutoCareGmailAccountDetails,
    ]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = gmailAccountRows.filter((_, i) => i !== index);
    setGmailAccountRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = gmailAccountRows.map((gmailAccountRows, rowIndex) =>
      rowIndex === index
        ? { ...gmailAccountRows, [name]: value }
        : gmailAccountRows
    );
    setGmailAccountRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {gmailAccountRows.map((row, index) => (
        <div key={index} className={`py-3 px-2 w-full flex justify-center ${index !== gmailAccountRows.length-1  && 'border-b border-[#D8D8D8]'}`}>
          <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
            {index + 1}.
          </span>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">User ID</label>
                <TextField
                  name="gmailAccountUserId"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter User ID"
                  value={row.gmailAccountUserId}
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
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">Password</label>
                <TextField
                  name="gmailAccountPassword"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Password"
                  value={row.gmailAccountPassword}
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
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">Status</label>
                <TextField
                  name="gmailAccountStatus"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Status"
                  value={row.gmailAccountStatus}
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
            <Grid item xs={3} className="flex justify-end items-end gap-4">
              {gmailAccountRows.length > 1 && (
                <span className="cursor-pointer" onClick={() => handleRemoveRow(index)}>
                  <MinusCircle />
                </span>
              )}
              {index === gmailAccountRows.length - 1 && (
                <span className="cursor-pointer" onClick={handleAddRow}>
                  <PlusCircleicon />
                </span>
              )}
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default AutoCareGmailAccount;
