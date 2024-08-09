import React from "react";
// Models import
import {
  CurrentChallengesFormTypes,
  CurrentChallengesTypes,
  ExceptionFormTypes,
  ExpectationTypes,
  WhitelabelFormTypes,
  whitelabelChallengesFormType,
} from "@/models/whitelabelChecklist";
// Utls import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

const WhitelabelChallengesForm = ({
  className,
  whitelabelCurrentChallenges,
  setWhitelabelCurrentChallenges,
  whitelabelExpectation,
  setWhitelabelExpectation,
  checkAllFieldsWhiteLabelChallengesExceptionList,
  isFormLocked,
}: whitelabelChallengesFormType) => {
  return (
    <div className={`${className}`}>
      <CurrentChallenges
        whitelabelCurrentChallenges={whitelabelCurrentChallenges}
        setWhitelabelCurrentChallenges={setWhitelabelCurrentChallenges}
        checkAllCurrentChallenges={
          checkAllFieldsWhiteLabelChallengesExceptionList
        }
        isFormLocked={isFormLocked}
      />
      <Expectation
        whitelabelExpectation={whitelabelExpectation}
        setWhitelabelExpectation={setWhitelabelExpectation}
        checkAllExpectation={checkAllFieldsWhiteLabelChallengesExceptionList}
        isFormLocked={isFormLocked}
      />
    </div>
  );
};

export default WhitelabelChallengesForm;

const CurrentChallenges = ({
  whitelabelCurrentChallenges,
  setWhitelabelCurrentChallenges,
  checkAllCurrentChallenges,
  isFormLocked
}: CurrentChallengesTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelCurrentChallenges((prev: CurrentChallengesFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Current Challenges (If Any)
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="currentChallengesComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelCurrentChallenges?.currentChallengesComments}
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
                  (roleId === "4" && checkAllCurrentChallenges) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelCurrentChallenges?.currentChallengesStatus}
              onChange={(value: string) =>
                setWhitelabelCurrentChallenges(
                  (prev: CurrentChallengesFormTypes) => ({
                    ...prev,
                    currentChallengesStatus: value,
                  })
                )
              }
              disabled={
                (roleId === "4" && checkAllCurrentChallenges) ||
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
                name="currentChallengesActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelCurrentChallenges?.currentChallengesActionPABS}
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
                  (roleId === "4" && checkAllCurrentChallenges) ||
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
                name="currentChallengesActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  whitelabelCurrentChallenges?.currentChallengesActionClient
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
                  (roleId === "4" && checkAllCurrentChallenges) ||
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

const Expectation = ({
  whitelabelExpectation,
  setWhitelabelExpectation,
  checkAllExpectation,
  isFormLocked
}: ExpectationTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelExpectation((prev: ExceptionFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Expectation From PABS
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="exceptionComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelExpectation?.exceptionComments}
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
                  (roleId === "4" && checkAllExpectation) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelExpectation?.exceptionStatus}
              onChange={(value: string) =>
                setWhitelabelExpectation((prev: ExceptionFormTypes) => ({
                  ...prev,
                  exceptionStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllExpectation) ||
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
                name="exceptionActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelExpectation?.exceptionActionPABS}
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
                  (roleId === "4" && checkAllExpectation) ||
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
                name="exceptionActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelExpectation?.exceptionActionClient}
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
                  (roleId === "4" && checkAllExpectation) ||
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
