import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
import { autoCareLocationDetailsTypes } from "@/models/autoCareLogininfo";
import { initialAutoCareLocationDetails } from "@/static/autoCareLoginInfo";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareLocationDetails({ className }: any) {
  const classes = useStyles();
  const [locationDetailsRows, setLocationDetailsRows] = useState<
    autoCareLocationDetailsTypes[]
  >([initialAutoCareLocationDetails]);

  const handleAddRow = () => {
    setLocationDetailsRows([
      ...locationDetailsRows,
      initialAutoCareLocationDetails,
    ]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = locationDetailsRows.filter((_, i) => i !== index);
    setLocationDetailsRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = locationDetailsRows.map((locationDetailsRows, rowIndex) =>
      rowIndex === index
        ? { ...locationDetailsRows, [name]: value }
        : locationDetailsRows
    );
    setLocationDetailsRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {locationDetailsRows.map((row, index) => (
        <div key={index} className="py-3 px-2 w-full flex justify-center">
          <span className="pr-2 flex justify-center items-center text-[12px]">
            {index + 1}.
          </span>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">Name</label>
                <TextField
                  name="locationDetailsName"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Name"
                  value={row.locationDetailsName}
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
                <label className="text-[#6E6D7A] text-[12px]">Details</label>
                <TextField
                  name="locationDetailsDetails"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Details"
                  value={row.locationDetailsDetails}
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
            <Grid item xs={6} className="flex justify-end items-end gap-4">
              {locationDetailsRows.length > 1 && (
                <span onClick={() => handleRemoveRow(index)}>
                  <MinusCircle />
                </span>
              )}
              {index === locationDetailsRows.length - 1 && (
                <span onClick={handleAddRow}>
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

export default AutoCareLocationDetails;
