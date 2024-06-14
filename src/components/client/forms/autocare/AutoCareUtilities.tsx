import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareUtilitiesTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareUtilities } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCareUtilities({
  className,
  utilitiesRows,
  setUtilitiesRows,
}: autoCareUtilitiesTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setUtilitiesRows([...utilitiesRows, initialAutoCareUtilities]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = utilitiesRows.filter((_, i) => i !== index);
    setUtilitiesRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = utilitiesRows.map((utilitiesRows, rowIndex) =>
      rowIndex === index ? { ...utilitiesRows, [name]: value } : utilitiesRows
    );
    setUtilitiesRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {utilitiesRows.map((row, index) => (
        <div
          key={index}
          className={`py-3 px-2 w-full flex justify-between ${
            utilitiesRows.length - 1 === index ? "gap-[30px]" : "gap-[63px]"
          } ${
            index !== utilitiesRows.length - 1 && "border-b border-[#D8D8D8]"
          }`}
        >
          <div className="flex">
            <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
              {index + 1}.
            </span>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">Location</label>
                  <TextField
                    name="utilitiesLocation"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Location"
                    value={row.utilitiesLocation}
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
                    Utilities
                  </label>
                  <TextField
                    name="utilitiesUtilities"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Utilities"
                    value={row.utilitiesUtilities}
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
                  <label className="text-[#6E6D7A] text-[12px]">Service</label>
                  <TextField
                    name="utilitiesService"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Service"
                    value={row.utilitiesService}
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
                    Account/Customer Number
                  </label>
                  <TextField
                    name="utilitiesAccount_CustomerNo"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Account/Customer Number"
                    value={row.utilitiesAccount_CustomerNo}
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
                  <label className="text-[#6E6D7A] text-[12px]">User</label>
                  <TextField
                    name="utilitiesUser"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter User"
                    value={row.utilitiesUser}
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
                    name="utilitiesPassword"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Password"
                    value={row.utilitiesPassword}
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
                  <label className="text-[#6E6D7A] text-[12px]">Website</label>
                  <TextField
                    name="utilitiesWebsite"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Website"
                    value={row.utilitiesWebsite}
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
                    name="utilitiesNotes_Status"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter PABS Notes/Status"
                    value={row.utilitiesNotes_Status}
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
                    AHI Notes
                  </label>
                  <TextField
                    name="utilitiesAhi_Notes"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter AHI Notes"
                    value={row.utilitiesAhi_Notes}
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
            {utilitiesRows.length > 1 && (
              <span className="cursor-pointer" onClick={() => handleRemoveRow(index)}>
                <MinusCircle />
              </span>
            )}
            {index === utilitiesRows.length - 1 && (
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

export default AutoCareUtilities;
