import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareMerchantDetailsTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareMerchantDetails } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCareMerchantDetails({
  className,
  merchantDetailsRows,
  setMerchantDetailsRows,
}: autoCareMerchantDetailsTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setMerchantDetailsRows([
      ...merchantDetailsRows,
      initialAutoCareMerchantDetails,
    ]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = merchantDetailsRows.filter((_, i) => i !== index);
    setMerchantDetailsRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = merchantDetailsRows.map((merchantDetailsRows, rowIndex) =>
      rowIndex === index
        ? { ...merchantDetailsRows, [name]: value }
        : merchantDetailsRows
    );
    setMerchantDetailsRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {merchantDetailsRows.map((row, index) => (
        <div
          key={index}
          className={`py-3 px-2 w-full flex justify-between ${
            merchantDetailsRows.length - 1 === index
              ? "gap-[30px]"
              : "gap-[63px]"
          }${
            index !== merchantDetailsRows.length - 1 &&
            "border-b border-[#D8D8D8]"
          }`}
        >
          <div className="flex">
            <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
              {index + 1}.
            </span>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">Number</label>
                  <TextField
                    name="merchantDetailsNumber"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Number"
                    value={row.merchantDetailsNumber}
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
                    Merchant Name
                  </label>
                  <TextField
                    name="merchantDetailsName"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Merchant Name"
                    value={row.merchantDetailsName}
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
                    name="merchantDetailsLink"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Link"
                    value={row.merchantDetailsLink}
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
                    name="merchantDetailsUserId"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter User ID"
                    value={row.merchantDetailsUserId}
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
                    name="merchantDetailsPassword"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Password"
                    value={row.merchantDetailsPassword}
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
                    name="merchantDetailsAccountId"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Account ID"
                    value={row.merchantDetailsAccountId}
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
                    name="merchantDetailsPasscode"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Passcode (If any)"
                    value={row.merchantDetailsPasscode}
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
                    name="merchantDetailNotes_Status"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter PABS Notes/Status"
                    value={row.merchantDetailNotes_Status}
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
            {merchantDetailsRows.length > 1 && (
              <span className="cursor-pointer" onClick={() => handleRemoveRow(index)}>
                <MinusCircle />
              </span>
            )}
            {index === merchantDetailsRows.length - 1 && (
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

export default AutoCareMerchantDetails;
