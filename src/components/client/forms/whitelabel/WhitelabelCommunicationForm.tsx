import React from "react";
// models import
import {
  GroupEmailEstablishedTypes,
  GroupEmailWhiteLabelFormTypes,
  KickOffTypes,
  KickOffWhiteLabelFormTypes,
  TeamOverCallWhiteLabelFormTypes,
  WhiteLabelCommunicationTypes,
  whitelabelTeamOverCallTypes,
} from "@/models/whitelabelChecklist";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// MUI imports
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

const WhitelabelCommunicationForm = ({
  className,
  whitelabelGroupEmailEstablished,
  setWhitelabelGroupEmailEstablished,
  whitelabelKickOff,
  setWhitelabelKickOff,
  whitelabelTeamOverCall,
  setWhitelabelTeamOverCall,
  checkAllFieldsWhiteLabelCommunicationList,
}: WhiteLabelCommunicationTypes) => {
  return (
    <div className={`${className}`}>
      <GroupEmailEstablished
        whitelabelGroupEmailEstablished={whitelabelGroupEmailEstablished}
        setWhitelabelGroupEmailEstablished={setWhitelabelGroupEmailEstablished}
        checkAllGroupEmailEstablished={
          checkAllFieldsWhiteLabelCommunicationList
        }
      />
      <KickOff
        whitelabelKickOff={whitelabelKickOff}
        setWhitelabelKickOff={setWhitelabelKickOff}
        checkAllKickOff={checkAllFieldsWhiteLabelCommunicationList}
      />
      <IntroductionTeamOverCall
        whitelabelTeamOverCall={whitelabelTeamOverCall}
        setWhitelabelTeamOverCall={setWhitelabelTeamOverCall}
        checkAllIntroductionTeamOverCall={
          checkAllFieldsWhiteLabelCommunicationList
        }
      />
    </div>
  );
};

export default WhitelabelCommunicationForm;

const GroupEmailEstablished = ({
  whitelabelGroupEmailEstablished,
  setWhitelabelGroupEmailEstablished,
  checkAllGroupEmailEstablished,
}: GroupEmailEstablishedTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelGroupEmailEstablished(
      (prev: GroupEmailWhiteLabelFormTypes) => ({
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
                name="groupEmailWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  whitelabelGroupEmailEstablished?.groupEmailWhiteLabelComments
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
                disabled={roleId === "4" && checkAllGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="groupEmailWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  whitelabelGroupEmailEstablished?.groupEmailWhiteLabelStatus
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
                disabled={roleId === "4" && checkAllGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="groupEmailWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  whitelabelGroupEmailEstablished?.groupEmailWhiteLabelActionPABS
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
                disabled={roleId === "4" && checkAllGroupEmailEstablished}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="groupEmailWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  whitelabelGroupEmailEstablished?.groupEmailWhiteLabelActionClient
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
                disabled={roleId === "4" && checkAllGroupEmailEstablished}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const KickOff = ({
  whitelabelKickOff,
  setWhitelabelKickOff,
  checkAllKickOff,
}: KickOffTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelKickOff((prev: KickOffWhiteLabelFormTypes) => ({
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
                name="kickOffWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelKickOff?.kickOffWhiteLabelComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="kickOffWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelKickOff?.kickOffWhiteLabelStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="kickOffWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelKickOff?.kickOffWhiteLabelActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllKickOff}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="kickOffWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelKickOff?.kickOffWhiteLabelActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllKickOff}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const IntroductionTeamOverCall = ({
  whitelabelTeamOverCall,
  setWhitelabelTeamOverCall,
  checkAllIntroductionTeamOverCall,
}: whitelabelTeamOverCallTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelTeamOverCall((prev: TeamOverCallWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Introduction of Team Over Call
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="teamOverCallWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelTeamOverCall?.teamOverCallWhiteLabelComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIntroductionTeamOverCall}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="teamOverCallWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelTeamOverCall?.teamOverCallWhiteLabelStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIntroductionTeamOverCall}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="teamOverCallWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelTeamOverCall?.teamOverCallWhiteLabelActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIntroductionTeamOverCall}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="teamOverCallWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  whitelabelTeamOverCall?.teamOverCallWhiteLabelActionClient
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
                disabled={roleId === "4" && checkAllIntroductionTeamOverCall}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
