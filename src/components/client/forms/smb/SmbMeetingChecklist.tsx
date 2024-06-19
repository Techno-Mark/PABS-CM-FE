import React from "react";
// Models import
import {
  ConvenientFormTypes,
  ConvenientTypes,
  MeetingChecklistType,
  TimeSlotFormTypes,
  TimeSlotTypes,
  TimeZoneFormTypes,
  TimeZoneTypes,
} from "@/models/smbChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function SmbMeetingChecklist({
  className,
  smbMeetingChecklistErrors,
  smbTimeZone,
  setSmbTimeZone,
  smbConvenient,
  setSmbConvenient,
  smbTimeSlot,
  setSmbTimeSlot
}: MeetingChecklistType) {
  return (
    <div className={`${className}`}>
      <TimeZone smbTimeZone={smbTimeZone} setSmbTimeZone={setSmbTimeZone} smbTimeZoneErrors={smbMeetingChecklistErrors} />
      <Convenient
        smbConvenient={smbConvenient}
        setSmbConvenient={setSmbConvenient}
        smbConvenientErrors={smbMeetingChecklistErrors}
      />
      <TimeSlot smbTimeSlot={smbTimeSlot} setSmbTimeSlot={setSmbTimeSlot}
        smbTimeSlotErrors={smbMeetingChecklistErrors} />
    </div>
  );
}

export default SmbMeetingChecklist;

const TimeZone = ({ smbTimeZone, setSmbTimeZone,smbTimeZoneErrors }: TimeZoneTypes) => {
  const classes = useStyles();

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbTimeZone((prev: TimeZoneFormTypes) => ({
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="TimeZoneStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbTimeZone?.TimeZoneStatus}
                error={!!smbTimeZoneErrors?.TimeZoneStatus}
                helperText={smbTimeZoneErrors?.TimeZoneStatus}
                onChange={handleTimeZoneChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="TimeZoneDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbTimeZone?.TimeZoneDetails}
                error={!!smbTimeZoneErrors?.TimeZoneDetails}
                helperText={smbTimeZoneErrors?.TimeZoneDetails}
                onChange={handleTimeZoneChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="TimeZoneActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbTimeZone?.TimeZoneActionItems}
                error={!!smbTimeZoneErrors?.TimeZoneActionItems}
                helperText={smbTimeZoneErrors?.TimeZoneActionItems}
                onChange={handleTimeZoneChange}
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

const Convenient = ({ smbConvenient, setSmbConvenient,smbConvenientErrors }: ConvenientTypes) => {
  const classes = useStyles();

  const handleConvenientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbConvenient((prev: ConvenientFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Convenient days<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ConvenientStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbConvenient?.ConvenientStatus}
                error={!!smbConvenientErrors?.ConvenientStatus}
                helperText={smbConvenientErrors?.ConvenientStatus}
                onChange={handleConvenientChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ConvenientDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbConvenient?.ConvenientDetails}
                error={!!smbConvenientErrors?.ConvenientDetails}
                helperText={smbConvenientErrors?.ConvenientDetails}
                onChange={handleConvenientChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="ConvenientActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbConvenient?.ConvenientActionItems}
                error={!!smbConvenientErrors?.ConvenientActionItems}
                helperText={smbConvenientErrors?.ConvenientActionItems}
                onChange={handleConvenientChange}
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

const TimeSlot = ({ smbTimeSlot, setSmbTimeSlot,smbTimeSlotErrors }: TimeSlotTypes) => {
  const classes = useStyles();

  const handleTimeSlotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbTimeSlot((prev: TimeSlotFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Time slot availability<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="TimeSlotStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbTimeSlot?.TimeSlotStatus}
                error={!!smbTimeSlotErrors?.TimeSlotStatus}
                helperText={smbTimeSlotErrors?.TimeSlotStatus}
                onChange={handleTimeSlotChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="TimeSlotDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbTimeSlot?.TimeSlotDetails}
                error={!!smbTimeSlotErrors?.TimeSlotDetails}
                helperText={smbTimeSlotErrors?.TimeSlotDetails}
                onChange={handleTimeSlotChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="TimeSlotActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbTimeSlot?.TimeSlotActionItems}
                error={!!smbTimeSlotErrors?.TimeSlotActionItems}
                helperText={smbTimeSlotErrors?.TimeSlotActionItems}
                onChange={handleTimeSlotChange}
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
