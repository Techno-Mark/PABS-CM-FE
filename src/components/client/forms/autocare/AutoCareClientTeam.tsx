import React, { ChangeEvent, useEffect, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI import
import {
  Autocomplete,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  InputAdornment,
} from "@mui/material";
// Models import
import {
  ClientTeamFormTypes,
  ClientTeamTypes,
} from "@/models/autoCareBasicDetails";
// Static import
import { WeeklyCallsList } from "@/static/carCareBasicDetail";
// Utils import
import { useStyles } from "@/utils/useStyles";
import { validateEmail } from "@/utils/validate";
// Date import
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// Cookie import
import Cookies from "js-cookie";
import Country from "@/components/client/common/Country";
import State from "@/components/client/common/State";
import DropDownArrow from "@/assets/Icons/dropdownarrow";

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
  isFormLocked,
}: ClientTeamTypes) {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const [countryId, setCountryId] = useState(-1);
  const [timezoneOptions, setTimezoneOptions] = useState<
    Array<{ id: number; name: string }>
  >([]);

  const [open, setOpen] = useState(false);

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

  const handleTimeChange = (time: Dayjs | null, name: string) => {
    if (!time || !autoCareClientTeam.timeZone) return;

    const formattedTime = time
      .tz(autoCareClientTeam.timeZone)
      .format("hh:mm A");
    const convertedTime = convertToIST(time, autoCareClientTeam.timeZone);

    switch (name) {
      case "weeklyCallTime":
        setAutoCareClientTeam((prev) => ({
          ...prev,
          weeklyCallTime: formattedTime,
        }));

        setAutoCareClientTeamErrors((prevErrors) => ({
          ...prevErrors,
          weeklyCallTime: "",
        }));

        if (formattedTime && autoCareClientTeam.timeZone !== "") {
          setAutoCareClientTeam((prev) => ({
            ...prev,
            istTime: convertedTime.format("hh:mm A"),
            weeklyCallTime: formattedTime,
          }));

          setAutoCareClientTeamErrors((prevErrors) => ({
            ...prevErrors,
            istTime: "",
            weeklyCallTime: "",
          }));
        }
        break;

      case "istTime":
        setAutoCareClientTeam((prev) => ({
          ...prev,
          istTime: convertedTime.format("hh:mm A"),
        }));

        setAutoCareClientTeamErrors((prevErrors) => ({
          ...prevErrors,
          istTime: "",
        }));
        break;
    }
  };

  const convertToIST = (time: Dayjs, fromTimeZone: string): Dayjs => {
    return time.tz(fromTimeZone).tz("Asia/Kolkata");
  };

  const handleLocationChange = (
    type: "country" | "state" | "timeZone",
    selected: { id: number; name: string; timezones?: string }
  ) => {
    setAutoCareClientTeam((prev: any) => ({
      ...prev,
      [type]: selected.name,
    }));

    if (type === "country") {
      setCountryId(selected.id);
      setAutoCareClientTeam((prev: any) => ({
        ...prev,
        timeZone: "",
        weeklyCallTime: "",
        istTime: "",
      }));
      if (selected.timezones) {
        try {
          const timezonesArray = JSON.parse(selected.timezones);
          const formattedTimezones = timezonesArray.map(
            (tz: any, index: number) => ({
              id: index,
              name: tz.zoneName,
            })
          );
          setTimezoneOptions(formattedTimezones);
        } catch (error) {
          console.error("Error parsing timezones:", error);
          setTimezoneOptions([]);
        }
      } else {
        setTimezoneOptions([]);
      }
    }

    if (type === "timeZone") {
      const currentTime = dayjs();
      const newTimeZone = selected.name;
      const newWeeklyCallTime = currentTime.tz(newTimeZone).format("hh:mm A");
      const newISTTime = currentTime
        .tz(newTimeZone)
        .tz("Asia/Kolkata")
        .format("hh:mm A");
      setAutoCareClientTeam((prev: any) => ({
        ...prev,
        timeZone: selected.name,
        weeklyCallTime: newWeeklyCallTime,
        istTime: newISTTime,
      }));
      setAutoCareClientTeamErrors((prevErrors) => ({
        ...prevErrors,
        istTime: "",
        weeklyCallTime: "",
      }));
    }
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
        isFormLocked={isFormLocked}
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
                maxLength: 250,
                className: classes.textSize,
              }}
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
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
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
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
                maxLength: 250,
                className: classes.textSize,
              }}
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
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
                maxLength: 250,
                className: classes.textSize,
              }}
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
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
                maxLength: 250,
                className: classes.textSize,
              }}
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
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
                maxLength: 250,
                className: classes.textSize,
              }}
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </div>
          <Country
            value={autoCareClientTeam?.country}
            onChange={(selected: { id: number; name: string }) =>
              handleLocationChange("country", selected)
            }
            disabled={
              (roleId === "4" && finalCheckAllFieldsClientTeam) ||
              (isFormLocked && (roleId == "3" || roleId == "4"))
            }
          />
          <State
            value={autoCareClientTeam?.state}
            onChange={(selected: { id: number; name: string }) =>
              handleLocationChange("state", selected)
            }
            countryId={countryId}
            disabled={
              (roleId === "4" && finalCheckAllFieldsClientTeam) ||
              countryId === -1 ||
              (isFormLocked && (roleId == "3" || roleId == "4"))
            }
          />
          <div className="text-[12px] flex flex-col">
            <InputLabel className="text-[#6E6D7A] text-[12px]">
              Time Zone
            </InputLabel>
            <FormControl
              variant="standard"
              size="small"
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                countryId === -1 ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            >
              <Select
                name="Timezone"
                value={autoCareClientTeam?.timeZone}
                onChange={(e) => {
                  const selectedOption = timezoneOptions.find(
                    (option) => option.name === e.target.value
                  );
                  if (selectedOption) {
                    handleLocationChange("timeZone", {
                      id: selectedOption.id,
                      name: selectedOption.name,
                    });
                  }
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                displayEmpty
                renderValue={(selected) => {
                  if (selected === "") {
                    return (
                      <span className="text-[12px] text-[#A3A3A3]">
                        Please Select Time Zone
                      </span>
                    );
                  }
                  return selected;
                }}
                IconComponent={() => (
                  <DropDownArrow
                    fillColor="#333"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              >
                <MenuItem value="" disabled>
                  <span>Please Select Time Zone</span>
                </MenuItem>
                {timezoneOptions.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
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
              className={classes.select}
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
              onOpen={() => setOpen(true)}
              onClose={(event, reason) => {
                if (reason === "toggleInput") {
                  setOpen(false);
                }
              }}
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
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <DropDownArrow
                          style={{
                            fill: "#333",
                            transform: open ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              disabled={
                (roleId === "4" && finalCheckAllFieldsClientTeam) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
            {autoCareClientTeamErrors?.weeklyCalls && (
              <span className="text-[#d32f2f]">
                {autoCareClientTeamErrors?.weeklyCalls}
              </span>
            )}
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px] mb-[3px]">
              Weekly Call Time<span className="text-[#DC3545]">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                timezone={autoCareClientTeam.timeZone || "Asia/Kolkata"}
                name="weeklyCallTime"
                sx={{
                  height: "22px !important",
                  marginTop: "4px",
                  flexDirection: "unset",
                  fontSize: "12px !important",
                  fontFamily: "'Poppins !important',sans serif",
                }}
                value={
                  autoCareClientTeam?.weeklyCallTime &&
                  autoCareClientTeam?.timeZone
                    ? dayjs.tz(
                        autoCareClientTeam.weeklyCallTime,
                        "hh:mm A",
                        autoCareClientTeam.timeZone
                      )
                    : null
                }
                onChange={(newTime) =>
                  handleTimeChange(newTime, "weeklyCallTime")
                }
                onError={(error) =>
                  setAutoCareClientTeamErrors((prevErrors) => ({
                    ...prevErrors,
                    weeklyCallTime:
                      error === "invalidDate" ? "Invalid Time" : error,
                  }))
                }
                disabled={
                  autoCareClientTeam?.timeZone !== ""
                    ? roleId === "4" && finalCheckAllFieldsClientTeam
                      ? true
                      : false
                    : true || (isFormLocked && (roleId == "3" || roleId == "4"))
                }
                slotProps={{
                  textField: {
                    variant: "standard",
                    disabled: true,
                    InputProps: {
                      sx: {
                        fontSize: "12px !important",
                        width: "100%",
                      },
                    },
                    inputProps: { readOnly: true },
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
            <label className="text-[#6E6D7A] text-[12px] mb-[3px]">
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
                  autoCareClientTeam.istTime
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
                    disabled: true,
                    InputProps: {
                      sx: {
                        fontSize: "12px !important",
                        width: "100%",
                      },
                    },
                    inputProps: { readOnly: true },
                    error: !!autoCareClientTeamErrors.istTime,
                  },
                }}
                disabled={roleId === "4" && finalCheckAllFieldsClientTeam ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))}
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
