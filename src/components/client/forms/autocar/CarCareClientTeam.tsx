import { useStyles } from "@/utils/useStyles";
import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";

function CarCareClientTeam({
  className,
  clientTeamForm,
  setClientTeamForm,
  errors,
}: any) {
  const classes = useStyles();
  return (
    <div className={`${className}`}>
      <FormBox title="Client Team" checked={true}>
        <div className="py-3 px-2 grid grid-cols-3 gap-4">
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Shop Manager<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              name="shopManager"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Shop Manager"
              value={clientTeamForm?.shopManager}
              // onChange={handleChange}
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
              POC 1<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              name="poc1"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter POC1"
              value={clientTeamForm?.poc1}
              // onChange={handleChange}
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
              Email-ID<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              name="email"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Sales Rep(PABS)"
              value={clientTeamForm?.email}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">CPA</label>
            <TextField
              name="cpa"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter CPA"
              value={clientTeamForm?.cpa}
              // onChange={handleChange}
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
              Prior Bookkeeper
            </label>
            <TextField
              name="priorBookkeeper"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Prior Bookkeeper"
              value={clientTeamForm?.priorBookkeeper}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">IT Support</label>
            <TextField
              name="itSupport"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter IT Support"
              value={clientTeamForm?.itSupport}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">Time Zone</label>
            <TextField
              name="timeZone"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Time Zone"
              value={clientTeamForm?.timeZone}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">State</label>
            <TextField
              name="state"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter State"
              value={clientTeamForm?.state}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">Weekly Calls</label>
            <TextField
              name="weeklyCalls"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Weekly Calls"
              value={clientTeamForm?.weeklyCalls}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">Weekly Call Time</label>
            <TextField
              name="weeklyCallTime"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Weekly Call Time"
              value={clientTeamForm?.weeklyCallTime}
              // onChange={handleChange}
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
            <label className="text-[#6E6D7A] text-[12px]">IST Time</label>
            <TextField
              name="istTime"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter IST Time"
              value={clientTeamForm?.istTime}
              // onChange={handleChange}
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

export default CarCareClientTeam;
