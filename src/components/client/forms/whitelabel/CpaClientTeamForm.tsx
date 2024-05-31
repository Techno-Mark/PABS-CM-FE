import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { useStyles } from "@/utils/useStyles";
import { TextField } from "@mui/material";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";

function CpaClientTeamForm({ className }: { className?: string }) {
  const classes = useStyles();

  return (
    <div className={`${className}`}>
      <FormBox title="CPA Client Team" checked={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
          <div className="text-[12px] flex flex-col w-full">
            <label className="text-[#6E6D7A] text-[12px]">
              POC Details<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter POC Details"
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

          <div className="flex grid-cols-4 gap-4 w-full">
            <div className="text-[12px] flex flex-col w-[30%]">
              <label className="text-[#6E6D7A] text-[12px]">
                POC Name<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter POC name"
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
            <div className="text-[12px] flex flex-col w-[30%]">
              <label className="text-[#6E6D7A] text-[12px]">
                Email<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Email"
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
            <div className="text-[12px] flex flex-col w-[30%]">
              <label className="text-[#6E6D7A] text-[12px]">
                Contact No.<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Contact No."
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
            <div className="flex justify-center items-center pl-2">
              <span className="cursor-pointer"><PlusCircleicon /></span>
            </div>
          </div>
        </div>
      </FormBox>
    </div>
  );
}

export default CpaClientTeamForm;
