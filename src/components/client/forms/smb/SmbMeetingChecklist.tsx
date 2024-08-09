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
import { Grid, SelectChangeEvent, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

function SmbMeetingChecklist({
  className,
  smbMeetingChecklistErrors,
  smbTimeZone,
  setSmbTimeZone,
  smbConvenient,
  setSmbConvenient,
  smbTimeSlot,
  setSmbTimeSlot,
  checkAllFieldsSmbMeetingChecklist,
  isFormLocked,
}: MeetingChecklistType) {
  return (
    <div className={`${className}`}>
      <TimeZone
        checkAllFieldsTimeZone={checkAllFieldsSmbMeetingChecklist}
        smbTimeZone={smbTimeZone}
        setSmbTimeZone={setSmbTimeZone}
        smbTimeZoneErrors={smbMeetingChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <Convenient
        checkAllFieldsConvenient={checkAllFieldsSmbMeetingChecklist}
        smbConvenient={smbConvenient}
        setSmbConvenient={setSmbConvenient}
        smbConvenientErrors={smbMeetingChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <TimeSlot
        checkAllFieldsTimeSlot={checkAllFieldsSmbMeetingChecklist}
        smbTimeSlot={smbTimeSlot}
        setSmbTimeSlot={setSmbTimeSlot}
        smbTimeSlotErrors={smbMeetingChecklistErrors}
        isFormLocked={isFormLocked}
      />
    </div>
  );
}

export default SmbMeetingChecklist;

const TimeZone = ({
  smbTimeZone,
  setSmbTimeZone,
  smbTimeZoneErrors,
  checkAllFieldsTimeZone,
  isFormLocked,
}: TimeZoneTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
            <Status
              value={smbTimeZone?.TimeZoneStatus}
              onChange={(value: string) =>
                setSmbTimeZone((prev: TimeZoneFormTypes) => ({
                  ...prev,
                  TimeZoneStatus: value,
                }))
              }
              error={smbTimeZoneErrors?.TimeZoneStatus}
              helperText={smbTimeZoneErrors?.TimeZoneStatus}
              disabled={
                (roleId === "4" && checkAllFieldsTimeZone) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsTimeZone) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsTimeZone) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Convenient = ({
  smbConvenient,
  setSmbConvenient,
  smbConvenientErrors,
  checkAllFieldsConvenient,
  isFormLocked,
}: ConvenientTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
        Convenient Days<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbConvenient?.ConvenientStatus}
              onChange={(value: string) =>
                setSmbConvenient((prev: ConvenientFormTypes) => ({
                  ...prev,
                  ConvenientStatus: value,
                }))
              }
              error={smbConvenientErrors?.ConvenientStatus}
              helperText={smbConvenientErrors?.ConvenientStatus}
              disabled={
                (roleId === "4" && checkAllFieldsConvenient) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsConvenient) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsConvenient) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const TimeSlot = ({
  smbTimeSlot,
  setSmbTimeSlot,
  smbTimeSlotErrors,
  checkAllFieldsTimeSlot,
  isFormLocked,
}: TimeSlotTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
        Time Slot Availability<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbTimeSlot?.TimeSlotStatus}
              onChange={(value: string) =>
                setSmbTimeSlot((prev: TimeSlotFormTypes) => ({
                  ...prev,
                  TimeSlotStatus: value,
                }))
              }
              error={smbTimeSlotErrors?.TimeSlotStatus}
              helperText={smbTimeSlotErrors?.TimeSlotStatus}
              disabled={
                (roleId === "4" && checkAllFieldsTimeSlot) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsTimeSlot) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsTimeSlot) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
