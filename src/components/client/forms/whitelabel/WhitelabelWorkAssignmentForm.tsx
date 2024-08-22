import React from "react";
// Models import
import {
  CatchupFormTypes,
  CatchupTypes,
  CleanupFormTypes,
  CleanupTypes,
  CombinationFormTypes,
  CombinationTypes,
  MonthlyFormTypes,
  MonthlyTypes,
  whitelabelWorkAssignmentType,
} from "@/models/whitelabelChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

const WhitelabelWorkAssignmentForm = ({
  className,
  whitleLabelWorkAssignmentErrors,
  whitelabelMonthly,
  setWhitelabelMonthly,
  whitelabelCleanup,
  setWhitelabelCleanup,
  whitelabelCatchup,
  setWhitelabelCatchup,
  whitelabelCombination,
  setWhitelabelCombination,
  checkAllFieldsWhiteLabelWorkAssignmentList,
  isFormLocked,
}: whitelabelWorkAssignmentType) => {
  return (
    <div className={`${className}`}>
      <Monthly
        whitelabelMonthly={whitelabelMonthly}
        setWhitelabelMonthly={setWhitelabelMonthly}
        whitelabelMonthlyErrors={whitleLabelWorkAssignmentErrors}
        checkAllMonthly={checkAllFieldsWhiteLabelWorkAssignmentList}
        isFormLocked={isFormLocked}
      />
      <Cleanup
        whitelabelCleanup={whitelabelCleanup}
        setWhitelabelCleanup={setWhitelabelCleanup}
        whitelabelCleanupErrors={whitleLabelWorkAssignmentErrors}
        checkAllCleanup={checkAllFieldsWhiteLabelWorkAssignmentList}
        isFormLocked={isFormLocked}
      />
      <Catchup
        whitelabelCatchup={whitelabelCatchup}
        setWhitelabelCatchup={setWhitelabelCatchup}
        whitelabelCatchupErrors={whitleLabelWorkAssignmentErrors}
        checkAllCatchup={checkAllFieldsWhiteLabelWorkAssignmentList}
        isFormLocked={isFormLocked}
      />
      <Combination
        whitelabelCombination={whitelabelCombination}
        setWhitelabelCombination={setWhitelabelCombination}
        whitelabelCombinationErrors={whitleLabelWorkAssignmentErrors}
        checkAllCombination={checkAllFieldsWhiteLabelWorkAssignmentList}
        isFormLocked={isFormLocked}
      />
    </div>
  );
};

export default WhitelabelWorkAssignmentForm;

const Monthly = ({
  whitelabelMonthly,
  setWhitelabelMonthly,
  whitelabelMonthlyErrors,
  checkAllMonthly,
  isFormLocked,
}: MonthlyTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelMonthly((prev: MonthlyFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Monthly<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="monthlyComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelMonthly?.monthlyComments}
                error={!!whitelabelMonthlyErrors?.monthlyComments}
                helperText={whitelabelMonthlyErrors?.monthlyComments}
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
                  (roleId === "4" && checkAllMonthly) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelMonthly?.monthlyStatus}
              onChange={(value: string) =>
                setWhitelabelMonthly((prev: MonthlyFormTypes) => ({
                  ...prev,
                  monthlyStatus: value,
                }))
              }
              error={whitelabelMonthlyErrors?.monthlyStatus}
              helperText={whitelabelMonthlyErrors?.monthlyStatus}
              disabled={
                (roleId === "4" && checkAllMonthly) ||
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
                name="monthlyActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelMonthly?.monthlyActionPABS}
                error={!!whitelabelMonthlyErrors?.monthlyActionPABS}
                helperText={whitelabelMonthlyErrors?.monthlyActionPABS}
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
                  (roleId === "4" && checkAllMonthly) ||
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
                name="monthlyActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelMonthly?.monthlyActionClient}
                error={!!whitelabelMonthlyErrors?.monthlyActionClient}
                helperText={whitelabelMonthlyErrors?.monthlyActionClient}
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
                  (roleId === "4" && checkAllMonthly) ||
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

const Cleanup = ({
  whitelabelCleanup,
  setWhitelabelCleanup,
  whitelabelCleanupErrors,
  checkAllCleanup,
  isFormLocked,
}: CleanupTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelCleanup((prev: CleanupFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Clean Up<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="cleanupComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelCleanup?.cleanupComments}
                error={!!whitelabelCleanupErrors?.cleanupComments}
                helperText={whitelabelCleanupErrors?.cleanupComments}
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
                  (roleId === "4" && checkAllCleanup) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelCleanup?.cleanupStatus}
              onChange={(value: string) =>
                setWhitelabelCleanup((prev: CleanupFormTypes) => ({
                  ...prev,
                  cleanupStatus: value,
                }))
              }
              error={whitelabelCleanupErrors?.cleanupStatus}
              helperText={whitelabelCleanupErrors?.cleanupStatus}
              disabled={
                (roleId === "4" && checkAllCleanup) ||
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
                name="cleanupActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelCleanup?.cleanupActionPABS}
                error={!!whitelabelCleanupErrors?.cleanupActionPABS}
                helperText={whitelabelCleanupErrors?.cleanupActionPABS}
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
                  (roleId === "4" && checkAllCleanup) ||
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
                name="cleanupActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelCleanup?.cleanupActionClient}
                error={!!whitelabelCleanupErrors?.cleanupActionClient}
                helperText={whitelabelCleanupErrors?.cleanupActionClient}
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
                  (roleId === "4" && checkAllCleanup) ||
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

const Catchup = ({
  whitelabelCatchup,
  setWhitelabelCatchup,
  whitelabelCatchupErrors,
  checkAllCatchup,
  isFormLocked,
}: CatchupTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelCatchup((prev: CatchupFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Catch Up<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="catchupComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelCatchup?.catchupComments}
                error={!!whitelabelCatchupErrors?.catchupComments}
                helperText={whitelabelCatchupErrors?.catchupComments}
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
                  (roleId === "4" && checkAllCatchup) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelCatchup?.catchupStatus}
              onChange={(value: string) =>
                setWhitelabelCatchup((prev: CatchupFormTypes) => ({
                  ...prev,
                  catchupStatus: value,
                }))
              }
              error={whitelabelCatchupErrors?.catchupStatus}
              helperText={whitelabelCatchupErrors?.catchupStatus}
              disabled={
                (roleId === "4" && checkAllCatchup) ||
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
                name="catchupActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelCatchup?.catchupActionPABS}
                error={!!whitelabelCatchupErrors?.catchupActionPABS}
                helperText={whitelabelCatchupErrors?.catchupActionPABS}
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
                  (roleId === "4" && checkAllCatchup) ||
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
                name="catchupActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelCatchup?.catchupActionClient}
                error={!!whitelabelCatchupErrors?.catchupActionClient}
                helperText={whitelabelCatchupErrors?.catchupActionClient}
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
                  (roleId === "4" && checkAllCatchup) ||
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

const Combination = ({
  whitelabelCombination,
  setWhitelabelCombination,
  whitelabelCombinationErrors,
  checkAllCombination,
  isFormLocked,
}: CombinationTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelCombination((prev: CombinationFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Combination of Monthly/ Clean Up/ Catch Up
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="combinationComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelCombination?.combinationComments}
                error={!!whitelabelCombinationErrors?.combinationComments}
                helperText={whitelabelCombinationErrors?.combinationComments}
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
                  (roleId === "4" && checkAllCombination) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelCombination?.combinationStatus}
              onChange={(value: string) =>
                setWhitelabelCombination((prev: CombinationFormTypes) => ({
                  ...prev,
                  combinationStatus: value,
                }))
              }
              error={whitelabelCombinationErrors?.combinationStatus}
              helperText={whitelabelCombinationErrors?.combinationStatus}
              disabled={
                (roleId === "4" && checkAllCombination) ||
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
                name="combinationActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelCombination?.combinationActionPABS}
                error={!!whitelabelCombinationErrors?.combinationActionPABS}
                helperText={whitelabelCombinationErrors?.combinationActionPABS}
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
                  (roleId === "4" && checkAllCombination) ||
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
                name="combinationActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelCombination?.combinationActionClient}
                error={!!whitelabelCombinationErrors?.combinationActionClient}
                helperText={
                  whitelabelCombinationErrors?.combinationActionClient
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
                  (roleId === "4" && checkAllCombination) ||
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
