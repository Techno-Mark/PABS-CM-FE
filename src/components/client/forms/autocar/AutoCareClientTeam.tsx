import { useStyles } from "@/utils/useStyles";
import React from "react";
import FormBox from "@/components/client/common/FormBox";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  ClientTeamFormTypes,
  ClientTeamTypes,
} from "@/models/carCareBasicDetails";
import {
  StateList,
  TimeZoneList,
  WeeklyCallTimeList,
  WeeklyCallsList,
} from "@/static/carCareBasicDetail";
import { validateEmail } from "@/utils/validate";

function AutoCareClientTeam({
  className,
  autoCareClientTeam,
  setAutoCareClientTeam,
  autoCareClientTeamErrors,
  setAutoCareClientTeamErrors,
}: ClientTeamTypes) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          setAutoCareClientTeamErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Please provide a valid email address.",
          }));
          setAutoCareClientTeam((prev: ClientTeamFormTypes) => ({
            ...prev,
            [name]: value,
          }));
        } else {
          setAutoCareClientTeam((prev: ClientTeamFormTypes) => ({
            ...prev,
            [name]: value,
          }));
          setAutoCareClientTeamErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
        break;
      default:
        setAutoCareClientTeamErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
        setAutoCareClientTeam({ ...autoCareClientTeam, [name]: value });
        break;
    }
  };

  const handleDropdownChange = (
    e: SelectChangeEvent<string>,
    dropdownType: string
  ) => {
    const { value } = e.target;
    switch (dropdownType) {
      case "timeZone":
        setAutoCareClientTeam((prev) => ({ ...prev, timeZone: value }));
        break;
      case "state":
        setAutoCareClientTeam((prev) => ({ ...prev, state: value }));
        break;
      case "weeklyCalls":
        setAutoCareClientTeam((prev) => ({ ...prev, weeklyCalls: value }));
        break;
    }
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
              value={autoCareClientTeam?.shopManager}
              error={!!autoCareClientTeamErrors.shopManager}
              helperText={autoCareClientTeamErrors.shopManager}
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
              value={autoCareClientTeam?.poc1}
              error={!!autoCareClientTeamErrors.poc1}
              helperText={autoCareClientTeamErrors.poc1}
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
              value={autoCareClientTeam?.email}
              error={!!autoCareClientTeamErrors.email}
              helperText={autoCareClientTeamErrors.email}
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
              value={autoCareClientTeam?.cpa}
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
              value={autoCareClientTeam?.priorBookkeeper}
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
              value={autoCareClientTeam?.itSupport}
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
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  autoCareClientTeam?.timeZone === "-1"
                    ? "!text-[12px] !text-[#a1a1a1]"
                    : "!text-[14px]"
                }`}
                value={autoCareClientTeam?.timeZone}
                onChange={(e) => handleDropdownChange(e, "timeZone")}
              >
                {TimeZoneList.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">State</label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  autoCareClientTeam?.state === "-1"
                    ? "!text-[12px] !text-[#a1a1a1]"
                    : "!text-[14px]"
                }`}
                value={autoCareClientTeam?.state}
                onChange={(e) => handleDropdownChange(e, "state")}
              >
                {StateList.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">Weekly Calls</label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  autoCareClientTeam?.weeklyCalls === "-1"
                    ? "!text-[12px] !text-[#a1a1a1]"
                    : "!text-[14px]"
                }`}
                value={autoCareClientTeam?.weeklyCalls}
                onChange={(e) => handleDropdownChange(e, "weeklyCalls")}
              >
                {WeeklyCallsList.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Weekly Call Time
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  autoCareClientTeam?.weeklyCallTime === "-1"
                    ? "!text-[12px] !text-[#a1a1a1]"
                    : "!text-[14px]"
                }`}
                value={autoCareClientTeam?.weeklyCallTime}
                onChange={(e) => handleDropdownChange(e, "weeklyCallTime")}
              >
                {WeeklyCallTimeList.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">IST Time</label>
            <TextField
              name="istTime"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter IST Time"
              value={autoCareClientTeam?.istTime}
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

export default AutoCareClientTeam;
