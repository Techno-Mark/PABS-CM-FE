import React from "react";
// Models import
import {
  GroupEmailEstablishedFormTypes,
  GroupEmailEstablishedTypes,
  KickOffFormTypes,
  KickOffTypes,
  PreKickOffFormTypes,
  PreKickOffTypes,
  autoCareCommmunicationChecklistTypes,
} from "@/models/autoCareChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

function AutoCareCommmunicationChecklist({
  className,
  autoCareGroupEmailEstablished,
  setAutoCareGroupEmailEstablished,
  autoCarePreKickOff,
  setAutoCarePreKickOff,
  autoCareKickOff,
  setAutoCareKickOff,
  checkAllFieldsAutoCareCommunicationList,
}: autoCareCommmunicationChecklistTypes) {
  return (
    <div className={`${className}`}>
      <GroupEmailEstablished
        checkAllFieldsGroupEmailEstablished={
          checkAllFieldsAutoCareCommunicationList
        }
        autoCareGroupEmailEstablished={autoCareGroupEmailEstablished}
        setAutoCareGroupEmailEstablished={setAutoCareGroupEmailEstablished}
      />
      <PreKickOff
        checkAllFieldsPreKickOff={
          checkAllFieldsAutoCareCommunicationList
        }
        autoCarePreKickOff={autoCarePreKickOff}
        setAutoCarePreKickOff={setAutoCarePreKickOff}
      />
      <KickOff
        checkAllFieldsKickOff={
          checkAllFieldsAutoCareCommunicationList
        }
        autoCareKickOff={autoCareKickOff}
        setAutoCareKickOff={setAutoCareKickOff}
      />
    </div>
  );
}

export default AutoCareCommmunicationChecklist;

const GroupEmailEstablished = ({
  autoCareGroupEmailEstablished,
  setAutoCareGroupEmailEstablished,
  checkAllFieldsGroupEmailEstablished,
}: GroupEmailEstablishedTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareGroupEmailEstablished(
      (prev: GroupEmailEstablishedFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Group Email Established
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="groupEmailEstablishComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  autoCareGroupEmailEstablished?.groupEmailEstablishComments
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
                disabled={roleId === "4" && checkAllFieldsGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="groupEmailEstablishStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareGroupEmailEstablished?.groupEmailEstablishStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="groupEmailEstablishDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareGroupEmailEstablished?.groupEmailEstablishDetails
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
                disabled={roleId === "4" && checkAllFieldsGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="groupEmailEstablishActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  autoCareGroupEmailEstablished?.groupEmailEstablishActionName
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
                disabled={roleId === "4" && checkAllFieldsGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="groupEmailEstablishActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  autoCareGroupEmailEstablished?.groupEmailEstablishActionItems
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
                disabled={roleId === "4" && checkAllFieldsGroupEmailEstablished}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PreKickOff = ({
  autoCarePreKickOff,
  setAutoCarePreKickOff,
  checkAllFieldsPreKickOff
}: PreKickOffTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCarePreKickOff((prev: PreKickOffFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Pre Kick Off
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="preKickOffComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCarePreKickOff?.preKickOffComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPreKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="preKickOffStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCarePreKickOff?.preKickOffStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPreKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="preKickOffDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCarePreKickOff?.preKickOffDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPreKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="preKickOffActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCarePreKickOff?.preKickOffActionName}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPreKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="preKickOffActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCarePreKickOff?.preKickOffActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPreKickOff}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const KickOff = ({ autoCareKickOff, setAutoCareKickOff,checkAllFieldsKickOff }: KickOffTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareKickOff((prev: KickOffFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Kick Off
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="kickOffComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareKickOff?.kickOffComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="kickOffStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareKickOff?.kickOffStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="kickOffDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareKickOff?.kickOffDetails}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="kickOffActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareKickOff?.kickOffActionName}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="kickOffActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareKickOff?.kickOffActionItems}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsKickOff}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
