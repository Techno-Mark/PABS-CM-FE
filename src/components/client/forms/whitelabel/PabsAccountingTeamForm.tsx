import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";

function PabsAccountingTeamForm({ className }: { className?: string }) {
  const classes = useStyles();

  return (
    <div className={`${className}`}>
      <FormBox title="PABS Accounting Team" checked={true}>
        <div className="py-3 px-2 grid grid-cols-3 gap-4">
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              Implementation Manager
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Implementation Manager"
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
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Operations Head
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Operations Head"
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
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">Team Manager</label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Team Manager"
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

          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              Team Leader
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Team Leader"
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
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Senior Accountant
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Senior Accountant"
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
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              PABS Group Email
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter PABS Group Email"
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
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              PABS Phone
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter PABS Phone"
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
        </div>
      </FormBox>
    </div>
  );
}

export default PabsAccountingTeamForm;
