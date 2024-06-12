import {
  GroupEmailEstablishedFormTypes,
  GroupEmailEstablishedTypes,
  KickOffFormTypes,
  KickOffTypes,
  PreKickOffFormTypes,
  PreKickOffTypes,
} from "@/models/whitelabel/whitelabelChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React from "react";

const WhitelabelCommunicationForm = ({
  className,
  whitelabelGroupEmailEstablished,
  setWhitelabelGroupEmailEstablished,
  whitelabelPreKickOff,
  setWhitelabelPreKickOff,
  whitelabelKickOff,
  setWhitelabelKickOff,
}: any) => {
  return (
    <div className={`${className}`}>
        <GroupEmailEstablished
          whitelabelGroupEmailEstablished={whitelabelGroupEmailEstablished}
          setWhitelabelGroupEmailEstablished={
            setWhitelabelGroupEmailEstablished
          }
        />
        <PreKickOff
          whitelabelPreKickOff={whitelabelPreKickOff}
          setWhitelabelPreKickOff={setWhitelabelPreKickOff}
        />
        <KickOff
          whitelabelKickOff={whitelabelKickOff}
          setWhitelabelKickOff={setWhitelabelKickOff}
        />
    </div>
  );
};

export default WhitelabelCommunicationForm;

const GroupEmailEstablished = ({
  whitelabelGroupEmailEstablished,
  setWhitelabelGroupEmailEstablished,
}: GroupEmailEstablishedTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelGroupEmailEstablished(
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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  whitelabelGroupEmailEstablished?.groupEmailEstablishComments
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
                value={
                  whitelabelGroupEmailEstablished?.groupEmailEstablishStatus
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
                placeholder="Please Enter Action Items"
                value={
                  whitelabelGroupEmailEstablished?.groupEmailEstablishActionName
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
                placeholder="Please Enter Action Items"
                value={
                  whitelabelGroupEmailEstablished?.groupEmailEstablishActionItems
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
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PreKickOff = ({
  whitelabelPreKickOff,
  setWhitelabelPreKickOff,
}: PreKickOffTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelPreKickOff((prev: PreKickOffFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Pre Kick Off
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
                value={whitelabelPreKickOff?.preKickOffComments}
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
                name="preKickOffStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelPreKickOff?.preKickOffStatus}
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
                name="preKickOffActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelPreKickOff?.preKickOffActionName}
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
                name="preKickOffActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelPreKickOff?.preKickOffActionItems}
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

const KickOff = ({ whitelabelKickOff, setWhitelabelKickOff }: KickOffTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelKickOff((prev: KickOffFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Kick Off
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
                value={whitelabelKickOff?.kickOffComments}
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
                name="kickOffStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelKickOff?.kickOffStatus}
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
                name="kickOffActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelKickOff?.kickOffActionName}
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
                name="kickOffActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelKickOff?.kickOffActionItems}
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
