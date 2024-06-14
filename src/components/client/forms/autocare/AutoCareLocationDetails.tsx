import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareLocationDetailsTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareLocationDetails } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI imports
import { Grid, TextField } from "@mui/material";

function AutoCareLocationDetails({
  className,
  locationDetailsRows,
  setLocationDetailsRows,
}: autoCareLocationDetailsTypes) {
  const classes = useStyles();

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
        <div key={index} className={`py-3 px-2 w-full flex justify-center ${index !== locationDetailsRows.length-1  && 'border-b border-[#D8D8D8]'}`}>
          <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
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
                <span className="cursor-pointer" onClick={() => handleRemoveRow(index)}>
                  <MinusCircle />
                </span>
              )}
              {index === locationDetailsRows.length - 1 && (
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

export default AutoCareLocationDetails;
