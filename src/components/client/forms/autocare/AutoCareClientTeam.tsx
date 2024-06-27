import React, { ChangeEvent, useEffect, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI import
import {
  Autocomplete,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
// Models import
import {
  ClientTeamFormTypes,
  ClientTeamTypes,
} from "@/models/autoCareBasicDetails";
// Static import
import {
  StateList,
  TimeZoneList,
  WeeklyCallsList,
} from "@/static/carCareBasicDetail";
// Utils import
import { useStyles } from "@/utils/useStyles";
import { validateEmail, validateNumber } from "@/utils/validate";
// Date import
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// Icons imports
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Cookie import
import Cookies from "js-cookie";

dayjs.extend(utc);
dayjs.extend(timezone);

function AutoCareClientTeam({
  className,
  clientTeamCheckStatus,
  autoCareClientTeam,
  setAutoCareClientTeam,
  autoCareClientTeamErrors,
  setAutoCareClientTeamErrors,
  finalCheckAllFieldsClientTeam,
  handleClientTeamSwitch,
}: ClientTeamTypes) {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");
  console.log("autoCareClientTeam: : ", autoCareClientTeam);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "contactInfo":
        if (validateNumber(value)) {
          const validValue = value.slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? "Contact Info Phone must be exactly 10 characters"
              : "";
          setAutoCareClientTeam((prev: ClientTeamFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
          setAutoCareClientTeamErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          }));
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? "Contact Info Phone must be exactly 10 characters"
              : "";

          setAutoCareClientTeam((prev: ClientTeamFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
          setAutoCareClientTeamErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          }));
        }
        break;
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

  const handleTimeChange = (time: any, name: string) => {
    const formattedTime = time ? time.format("hh:mm A") : null;

    switch (name) {
      case "weeklyCallTime":
        setAutoCareClientTeam({
          ...autoCareClientTeam,
          weeklyCallTime: formattedTime,
        });
        setAutoCareClientTeamErrors((prevErrors) => ({
          ...prevErrors,
          weeklyCallTime: "",
        }));
        if (formattedTime && autoCareClientTeam.timeZone !== "-1") {
          const convertedTime = convertToIST(time, autoCareClientTeam.timeZone);
          setAutoCareClientTeam({
            ...autoCareClientTeam,
            istTime: convertedTime.format("hh:mm A"),
            weeklyCallTime: formattedTime,
          });
          setAutoCareClientTeamErrors((prevErrors) => ({
            ...prevErrors,
            istTime: "",
            weeklyCallTime: "",
          }));
        }
        break;
      case "istTime":
        setAutoCareClientTeam({
          ...autoCareClientTeam,
          istTime: formattedTime,
        });
        setAutoCareClientTeamErrors((prevErrors) => ({
          ...prevErrors,
          istTime: "",
        }));
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
    }
  };

  const timeZoneMap: { [key: string]: string } = {
    "1": "Asia/Kolkata", // IST
    "2": "America/Los_Angeles", // PST
    "3": "America/Halifax", // Atlantic
    "4": "America/Chicago", // CST
    "5": "America/New_York", // EST
    "6": "Europe/London", // GMT
  };

  const convertToIST = (time: Dayjs, timeZone: string): Dayjs => {
    const selectedTimeZone = timeZoneMap[timeZone];
    if (!selectedTimeZone) return time;

    // Convert the time to UTC first, then to IST
    const utcTime = time.tz(selectedTimeZone).utc();
    return utcTime.tz("Asia/Kolkata");
  };

  return (
    <div className={`${className}`}>
      <FormBox
        title="Client Team"
        checkStatus={clientTeamCheckStatus}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleClientTeamSwitch(e)
        }
        switchDisabled={finalCheckAllFieldsClientTeam}
      >
        <div className="py-3 grid grid-cols-3 gap-4">
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
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
              placeholder="Please Enter Email"
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
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
                disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
                disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
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
            <label className="text-[#6E6D7A] text-[12px]">
              Weekly Calls<span className="text-[#DC3545]">*</span>
            </label>
            <Autocomplete
              multiple
              id="tags-standard"
              size="small"
              options={WeeklyCallsList.filter(
                (option) =>
                  !autoCareClientTeam.weeklyCalls.find(
                    (client: any) => client.value === option.value
                  )
              )}
              getOptionLabel={(option: any) => option.label}
              onChange={(e, data: any[]) => {
                setAutoCareClientTeam((prev) => ({
                  ...prev,
                  weeklyCalls: data,
                }));

                setAutoCareClientTeamErrors((prevErrors) => ({
                  ...prevErrors,
                  weeklyCalls: "",
                }));
              }}
              value={autoCareClientTeam.weeklyCalls}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder={
                    autoCareClientTeam?.weeklyCalls.length === 0
                      ? "Please Select Weekly Calls"
                      : ""
                  }
                  error={!!autoCareClientTeamErrors?.weeklyCalls}
                />
              )}
              disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
            />
            {autoCareClientTeamErrors?.weeklyCalls && (
              <span className="text-[#d32f2f]">
                {autoCareClientTeamErrors?.weeklyCalls}
              </span>
            )}
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Weekly Call Time<span className="text-[#DC3545]">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                timezone={
                  autoCareClientTeam?.timeZone
                    ? timeZoneMap[autoCareClientTeam.timeZone]
                    : "Asia/Kolkata"
                }
                name="weeklyCallTime"
                sx={{
                  height: "22px !important",
                  marginTop: "4px",
                  flexDirection: "unset",
                  fontSize: "12px !important",
                  fontFamily: "'Poppins !important',sans serif",
                }}
                value={
                  autoCareClientTeam?.weeklyCallTime
                    ? dayjs(
                        autoCareClientTeam?.weeklyCallTime,
                        "hh:mm A",
                        autoCareClientTeam?.timeZone
                          ? timeZoneMap[autoCareClientTeam.timeZone]
                          : "Asia/Kolkata"
                      )
                    : null
                }
                onChange={(e) => handleTimeChange(e, "weeklyCallTime")}
                onError={(error) =>
                  setAutoCareClientTeamErrors((prevErrors) => ({
                    ...prevErrors,
                    weeklyCallTime:
                      error === "invalidDate" ? "Invalid Time" : error,
                  }))
                }
                disabled={
                  autoCareClientTeam?.timeZone !== "-1"
                    ? roleId === "4" && finalCheckAllFieldsClientTeam
                      ? true
                      : false
                    : true
                }
                slotProps={{
                  textField: {
                    variant: "standard",
                    InputProps: {
                      sx: {
                        fontSize: "12px !important",
                        width: "100%",
                      },
                    },
                    error: !!autoCareClientTeamErrors.weeklyCallTime,
                  },
                }}
              />
              {autoCareClientTeamErrors?.weeklyCallTime && (
                <span className="text-[#d32f2f]">
                  {autoCareClientTeamErrors.weeklyCallTime.toString()}
                </span>
              )}
            </LocalizationProvider>
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              IST Time<span className="text-[#DC3545]">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name="istTime"
                sx={{
                  height: "22px !important",
                  marginTop: "4px",
                  flexDirection: "unset",
                  fontSize: "12px !important",
                  fontFamily: "'Poppins !important',sans serif",
                }}
                value={
                  autoCareClientTeam?.istTime
                    ? dayjs(autoCareClientTeam.istTime, "hh:mm A")
                    : null
                }
                onChange={(e) => handleTimeChange(e, "istTime")}
                onError={(error) =>
                  setAutoCareClientTeamErrors((prevErrors) => ({
                    ...prevErrors,
                    istTime: error === "invalidDate" ? "Invalid Time" : error,
                  }))
                }
                slotProps={{
                  textField: {
                    variant: "standard",
                    InputProps: {
                      sx: {
                        fontSize: "12px !important",
                        width: "100%",
                      },
                    },
                    error: !!autoCareClientTeamErrors.istTime,
                  },
                }}
                disabled={roleId === "4" && finalCheckAllFieldsClientTeam}
              />
              {autoCareClientTeamErrors?.istTime && (
                <span className="text-[#d32f2f]">
                  {autoCareClientTeamErrors.istTime.toString()}
                </span>
              )}
            </LocalizationProvider>
          </div>
        </div>
      </FormBox>
    </div>
  );
}

export default AutoCareClientTeam;
