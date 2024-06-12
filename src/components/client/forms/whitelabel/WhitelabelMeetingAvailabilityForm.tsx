import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { Grid, TextField } from "@mui/material";
import {
  ConvenientDayFormTypes,
  ConvenientDayTypes,
  TimeSlotFormTypes,
  TimeSlotTypes,
  TimeZoneFormTypes,
  TimeZoneTypes,
} from "@/models/whitelabel/whitelabelChecklist";
import { useStyles } from "@/utils/useStyles";

const WhitelabelMeetingAvailabilityForm = ({
  className,
  whitelabelTimeZone,
  setWhitelabelTimeZone,
  whitelabelConvenientDay,
  setWhitelabelConvenientDay,
  whitelabelTimeSlot,
  setWhitelabelTimeSlot,
}: any) => {
  return (
    <div className={`${className}`}>
      <TimeZone
        whitelabelTimeZone={whitelabelTimeZone}
        setWhitelabelTimeZone={setWhitelabelTimeZone}
      />
      <ConvenientDay
        whitelabelConvenientDay={whitelabelConvenientDay}
        setWhitelabelConvenientDay={setWhitelabelConvenientDay}
      />
      <TimeSlot
        whitelabelTimeSlot={whitelabelTimeSlot}
        setWhitelabelTimeSlot={setWhitelabelTimeSlot}
      />
    </div>
  );
};

export default WhitelabelMeetingAvailabilityForm;

const TimeZone = ({
  whitelabelTimeZone,
  setWhitelabelTimeZone,
}: TimeZoneTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelTimeZone((prev: TimeZoneFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Time Zone
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="timeZoneActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeZone?.timeZoneActionItems}
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
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="timeZoneActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeZone?.timeZoneActionName}
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
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ConvenientDay = ({
  whitelabelConvenientDay,
  setWhitelabelConvenientDay,
}: ConvenientDayTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelConvenientDay((prev: ConvenientDayFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Convenient day
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="convenientDayActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelConvenientDay?.convenientDayActionItems}
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
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="convenientDayActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelConvenientDay?.convenientDayActionName}
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
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const TimeSlot = ({
  whitelabelTimeSlot,
  setWhitelabelTimeSlot,
}: TimeSlotTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelTimeSlot((prev: TimeSlotFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Time slot availability
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="timeSlotActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeSlot?.timeSlotActionItems}
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
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="timeSlotActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTimeSlot?.timeSlotActionName}
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
          </Grid>
        </Grid>
      </div>
    </>
  );
};
