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
import Status from "@/components/client/common/Status";

const WhitelabelCommunicationForm = ({
  className,
  whitelabelGroupEmailEstablished,
  setWhitelabelGroupEmailEstablished,
  whitelabelKickOff,
  setWhitelabelKickOff,
  whitelabelTeamOverCall,
  setWhitelabelTeamOverCall,
  checkAllFieldsWhiteLabelCommunicationList,
  isFormLocked,
}: WhiteLabelCommunicationTypes) => {
  return (
    <div className={`${className}`}>
      <GroupEmailEstablished
        whitelabelGroupEmailEstablished={whitelabelGroupEmailEstablished}
        setWhitelabelGroupEmailEstablished={setWhitelabelGroupEmailEstablished}
        checkAllGroupEmailEstablished={
          checkAllFieldsWhiteLabelCommunicationList
        }
        isFormLocked={isFormLocked}
      />
      <KickOff
        whitelabelKickOff={whitelabelKickOff}
        setWhitelabelKickOff={setWhitelabelKickOff}
        checkAllKickOff={checkAllFieldsWhiteLabelCommunicationList}
        isFormLocked={isFormLocked}
      />
      <IntroductionTeamOverCall
        whitelabelTeamOverCall={whitelabelTeamOverCall}
        setWhitelabelTeamOverCall={setWhitelabelTeamOverCall}
        checkAllIntroductionTeamOverCall={
          checkAllFieldsWhiteLabelCommunicationList
        }
        isFormLocked={isFormLocked}
      />
    </div>
  );
};

export default WhitelabelCommunicationForm;

const GroupEmailEstablished = ({
  whitelabelGroupEmailEstablished,
  setWhitelabelGroupEmailEstablished,
  checkAllGroupEmailEstablished,
  isFormLocked,
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllGroupEmailEstablished) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={
                whitelabelGroupEmailEstablished?.groupEmailWhiteLabelStatus
              }
              onChange={(value: string) =>
                setWhitelabelGroupEmailEstablished(
                  (prev: GroupEmailWhiteLabelFormTypes) => ({
                    ...prev,
                    groupEmailWhiteLabelStatus: value,
                  })
                )
              }
              disabled={
                (roleId === "4" && checkAllGroupEmailEstablished) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                placeholder="Please Enter Action Items - PABS"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllGroupEmailEstablished) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllGroupEmailEstablished) ||
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

const KickOff = ({
  whitelabelKickOff,
  setWhitelabelKickOff,
  checkAllKickOff,
  isFormLocked,
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllKickOff) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelKickOff?.kickOffWhiteLabelStatus}
              onChange={(value: string) =>
                setWhitelabelKickOff((prev: KickOffWhiteLabelFormTypes) => ({
                  ...prev,
                  kickOffWhiteLabelStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllKickOff) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelKickOff?.kickOffWhiteLabelActionPABS}
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
                  (roleId === "4" && checkAllKickOff) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
                value={whitelabelKickOff?.kickOffWhiteLabelActionClient}
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
                  (roleId === "4" && checkAllKickOff) ||
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

const IntroductionTeamOverCall = ({
  whitelabelTeamOverCall,
  setWhitelabelTeamOverCall,
  checkAllIntroductionTeamOverCall,
  isFormLocked,
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllIntroductionTeamOverCall) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelTeamOverCall?.teamOverCallWhiteLabelStatus}
              onChange={(value: string) =>
                setWhitelabelTeamOverCall(
                  (prev: TeamOverCallWhiteLabelFormTypes) => ({
                    ...prev,
                    teamOverCallWhiteLabelStatus: value,
                  })
                )
              }
              disabled={
                (roleId === "4" && checkAllIntroductionTeamOverCall) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
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
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelTeamOverCall?.teamOverCallWhiteLabelActionPABS}
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
                  (roleId === "4" && checkAllIntroductionTeamOverCall) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllIntroductionTeamOverCall) ||
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
