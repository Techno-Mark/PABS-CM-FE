import React from "react";
import { Grid, TextField } from "@mui/material";
import {
  ConvenientDayTypes,
  TimeSlotTypes,
  TimeZoneTypes,
  WhitelabelConvenientDayFormTypes,
  WhitelabelTimeSlotFormTypes,
  WhitelabelTimeZoneFormTypes,
  whitelabelMeetingAvailabilityType,
} from "@/models/whitelabelChecklist";
import { useStyles } from "@/utils/useStyles";
// Cookie import
import Cookies from "js-cookie";

const WhitelabelMeetingAvailabilityForm = ({
  className,
  whitelabelMeetingAvailabilityErrors,
  whitelabelTimeZone,
  setWhitelabelTimeZone,
  whitelabelConvenientDay,
  setWhitelabelConvenientDay,
  whitelabelTimeSlot,
  setWhitelabelTimeSlot,
  checkAllFieldsWhiteLabelMeetinAvailabilityList,
}: whitelabelMeetingAvailabilityType) => {
  return (
    <div className={`${className}`}>
      <TimeZone
        whitelabelTimeZone={whitelabelTimeZone}
        setWhitelabelTimeZone={setWhitelabelTimeZone}
        whitelabelTimeZoneErrors={whitelabelMeetingAvailabilityErrors}
        checkAllTimeZone={checkAllFieldsWhiteLabelMeetinAvailabilityList}
      />
      <ConvenientDay
        whitelabelConvenientDay={whitelabelConvenientDay}
        setWhitelabelConvenientDay={setWhitelabelConvenientDay}
        whitelabelConvenientDayErrors={whitelabelMeetingAvailabilityErrors}
        checkAllConvenientDay={checkAllFieldsWhiteLabelMeetinAvailabilityList}
      />
      <TimeSlot
        whitelabelTimeSlot={whitelabelTimeSlot}
        setWhitelabelTimeSlot={setWhitelabelTimeSlot}
        whitelabelTimeSlotErrors={whitelabelMeetingAvailabilityErrors}
        checkAllTimeSlot={checkAllFieldsWhiteLabelMeetinAvailabilityList}
      />
    </div>
  );
};

export default WhitelabelMeetingAvailabilityForm;

const TimeZone = ({
  whitelabelTimeZone,
  setWhitelabelTimeZone,
  whitelabelTimeZoneErrors,
  checkAllTimeZone,
}: TimeZoneTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelTimeZone((prev: WhitelabelTimeZoneFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Time Zone<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="timeZoneComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelTimeZone?.timeZoneComments}
                error={!!whitelabelTimeZoneErrors?.timeZoneComments}
                helperText={whitelabelTimeZoneErrors?.timeZoneComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeZone}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="timeZoneStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelTimeZone?.timeZoneStatus}
                error={!!whitelabelTimeZoneErrors?.timeZoneStatus}
                helperText={whitelabelTimeZoneErrors?.timeZoneStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeZone}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="timeZoneActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeZone?.timeZoneActionPABS}
                error={!!whitelabelTimeZoneErrors?.timeZoneActionPABS}
                helperText={whitelabelTimeZoneErrors?.timeZoneActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeZone}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="timeZoneActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeZone?.timeZoneActionClient}
                error={!!whitelabelTimeZoneErrors?.timeZoneActionClient}
                helperText={whitelabelTimeZoneErrors?.timeZoneActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeZone}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ConvenientDay = ({
  whitelabelConvenientDay,
  setWhitelabelConvenientDay,
  whitelabelConvenientDayErrors,
  checkAllConvenientDay,
}: ConvenientDayTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelConvenientDay((prev: WhitelabelConvenientDayFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Convenient Day<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="convenientDayComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelConvenientDay?.convenientDayComments}
                error={!!whitelabelConvenientDayErrors?.convenientDayComments}
                helperText={
                  whitelabelConvenientDayErrors?.convenientDayComments
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllConvenientDay}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="convenientDayStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelConvenientDay?.convenientDayStatus}
                error={!!whitelabelConvenientDayErrors?.convenientDayStatus}
                helperText={whitelabelConvenientDayErrors?.convenientDayStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllConvenientDay}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="convenientDayActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelConvenientDay?.convenientDayActionPABS}
                error={!!whitelabelConvenientDayErrors?.convenientDayActionPABS}
                helperText={
                  whitelabelConvenientDayErrors?.convenientDayActionPABS
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllConvenientDay}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="convenientDayActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelConvenientDay?.convenientDayActionClient}
                error={
                  !!whitelabelConvenientDayErrors?.convenientDayActionClient
                }
                helperText={
                  whitelabelConvenientDayErrors?.convenientDayActionClient
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllConvenientDay}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const TimeSlot = ({
  whitelabelTimeSlot,
  setWhitelabelTimeSlot,
  whitelabelTimeSlotErrors,
  checkAllTimeSlot,
}: TimeSlotTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelTimeSlot((prev: WhitelabelTimeSlotFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Time Slot Availability<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="timeSlotComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelTimeSlot?.timeSlotComments}
                error={!!whitelabelTimeSlotErrors?.timeSlotComments}
                helperText={whitelabelTimeSlotErrors?.timeSlotComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeSlot}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="timeSlotStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelTimeSlot?.timeSlotStatus}
                error={!!whitelabelTimeSlotErrors?.timeSlotStatus}
                helperText={whitelabelTimeSlotErrors?.timeSlotStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeSlot}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="timeSlotActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeSlot?.timeSlotActionPABS}
                error={!!whitelabelTimeSlotErrors?.timeSlotActionPABS}
                helperText={whitelabelTimeSlotErrors?.timeSlotActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeSlot}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="timeSlotActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeSlot?.timeSlotActionClient}
                error={!!whitelabelTimeSlotErrors?.timeSlotActionClient}
                helperText={whitelabelTimeSlotErrors?.timeSlotActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTimeSlot}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
