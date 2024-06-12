import {
  CurrentChallengesFormTypes,
  CurrentChallengesTypes,
  ExpectationFormTypes,
  ExpectationTypes,
} from "@/models/whitelabel/whitelabelChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React from "react";

const WhitelabelChallengesForm = ({
  className,
  whitelabelCurrentChallenges,
  setWhitelabelCurrentChallenges,
  whitelabelExpectation,
  setWhitelabelExpectation,
}: any) => {
  return (
    <div className={`${className}`}>
      <CurrentChallenges
        whitelabelCurrentChallenges={whitelabelCurrentChallenges}
        setWhitelabelCurrentChallenges={setWhitelabelCurrentChallenges}
      />
      <Expectation
        whitelabelExpectation={whitelabelExpectation}
        setWhitelabelExpectation={setWhitelabelExpectation}
      />
    </div>
  );
};

export default WhitelabelChallengesForm;

const CurrentChallenges = ({
  whitelabelCurrentChallenges,
  setWhitelabelCurrentChallenges,
}: CurrentChallengesTypes) => {
  const classes = useStyles();

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
        Current Challenges
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="currentChallengesStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelCurrentChallenges?.currentChallengesStatus}
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
                name="currentChallengesActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  whitelabelCurrentChallenges?.currentChallengesActionItems
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
                name="currentChallengesActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelCurrentChallenges?.currentChallengesActionName}
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

const Expectation = ({
  whitelabelExpectation,
  setWhitelabelExpectation,
}: ExpectationTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelExpectation((prev: ExpectationFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Expectation
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="expectationComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelExpectation?.expectationComments}
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
                name="expectationStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelExpectation?.expectationStatus}
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
                name="expectationActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelExpectation?.expectationActionItems}
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
                name="expectationActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelExpectation?.expectationActionName}
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
