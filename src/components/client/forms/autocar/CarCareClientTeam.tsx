import { useStyles } from "@/utils/useStyles";
import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";

function CarCareClientTeam({
  className,
  carCareClientTeam,
  setCarCareClientTeam,
  carCareClientTeamErrors,
}: any) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarCareClientTeam({ ...carCareClientTeam, [name]: value });
  };

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
              value={carCareClientTeam?.shopManager}
              error={!!carCareClientTeamErrors.shopManager}
              helperText={carCareClientTeamErrors.shopManager}
              onChange={handleChange}
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
              value={carCareClientTeam?.poc1}
              error={!!carCareClientTeamErrors.poc1}
              helperText={carCareClientTeamErrors.poc1}
              onChange={handleChange}
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
              placeholder="Please Enter Email-ID"
              value={carCareClientTeam?.email}
              error={!!carCareClientTeamErrors.email}
              helperText={carCareClientTeamErrors.email}
              onChange={handleChange}
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
              value={carCareClientTeam?.cpa}
              onChange={handleChange}
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
              value={carCareClientTeam?.priorBookkeeper}
              onChange={handleChange}
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
              value={carCareClientTeam?.itSupport}
              onChange={handleChange}
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
              value={carCareClientTeam?.timeZone}
              onChange={handleChange}
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
              value={carCareClientTeam?.state}
              onChange={handleChange}
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
              value={carCareClientTeam?.weeklyCalls}
              onChange={handleChange}
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
              value={carCareClientTeam?.weeklyCallTime}
              onChange={handleChange}
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
              value={carCareClientTeam?.istTime}
              onChange={handleChange}
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
