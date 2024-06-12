import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
import { autoCarePosDetailsTypes } from "@/models/autoCareLogininfo";
import { initialAutoCarePosDetails } from "@/static/autoCareLoginInfo";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCarePosDetails({ className }: any) {
  const classes = useStyles();
  const [posDetailsRows, setPosDetailsRows] = useState<
    autoCarePosDetailsTypes[]
  >([initialAutoCarePosDetails]);

  const handleAddRow = () => {
    setPosDetailsRows([...posDetailsRows, initialAutoCarePosDetails]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = posDetailsRows.filter((_, i) => i !== index);
    setPosDetailsRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = posDetailsRows.map((posDetailsRows, rowIndex) =>
      rowIndex === index ? { ...posDetailsRows, [name]: value } : posDetailsRows
    );
    setPosDetailsRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {posDetailsRows.map((row, index) => (
        <div key={index} className={`py-3 px-2 w-full flex justify-between ${posDetailsRows.length -1 === index ? 'gap-[30px]' : 'gap-[63px]'}`}>
          <div className="flex">
            <span className="pr-2 flex justify-center items-center text-[12px]">
              {index + 1}.
            </span>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">POS</label>
                  <TextField
                    name="posDetailsPos"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter POS"
                    value={row.posDetailsPos}
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
                    Server Name
                  </label>
                  <TextField
                    name="posDetailsServerName"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter ServerName"
                    value={row.posDetailsServerName}
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
                    Personal Key
                  </label>
                  <TextField
                    name="posDetailsPersonalKey"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Personal Key"
                    value={row.posDetailsPersonalKey}
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
                    User Name
                  </label>
                  <TextField
                    name="posDetailsUserName"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Username"
                    value={row.posDetailsUserName}
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
                    name="posDetailsPassword"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Password"
                    value={row.posDetailsPassword}
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
                    name="posDetailsNotes_Status"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Notes/Status"
                    value={row.posDetailsNotes_Status}
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
            {posDetailsRows.length > 1 && (
              <span onClick={() => handleRemoveRow(index)}>
                <MinusCircle />
              </span>
            )}
            {index === posDetailsRows.length - 1 && (
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

export default AutoCarePosDetails;
