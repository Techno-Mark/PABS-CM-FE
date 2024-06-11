import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareLocationDetails({ className }: any) {
  const classes = useStyles();
  return (
    <div className={`${className}`}>
      <div className="py-3 px-2 w-full flex justify-between">
        <Grid container spacing={2}>
          <span className="flex justify-center items-center text-[12px]">
            1.
          </span>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Name</label>
              <TextField
                name="locationsDetailsName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Name"
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
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="locationDetailsDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
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
        <div className="flex justify-center items-center">
          <span>
            <PlusCircleicon />
          </span>
        </div>
      </div>
      <div className="px-2 w-full flex justify-between">
        <Grid container spacing={2}>
          <span className="flex justify-center items-center text-[12px]">
            2.
          </span>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Name</label>
              <TextField
                name="locationsDetailsName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Name"
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
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="locationDetailsDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
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
        <div className="flex justify-center gap-5 items-center w-[10%]">
          <span>
            <MinusCircle />
          </span>
          <span>
            <PlusCircleicon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AutoCareLocationDetails;
