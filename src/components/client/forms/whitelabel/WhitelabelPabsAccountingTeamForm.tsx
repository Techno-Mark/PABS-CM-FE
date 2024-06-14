import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { Grid, TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
import {
  WhitelabelPABSAccountingTeamErrors,
  WhitelabelPABSAccountingTeamTypes,
  WhitelabelPABSAccountingTypes,
} from "@/models/whitelabel/whitelabelBasicDetails";
import { validateNumber } from "@/utils/validate";

const WhitelabelPabsAccountingTeamForm = ({
  className,
  whitelabelPABSAccountingTeam,
  setWhitelabelPABSAccountingTeam,
  whitelabelPABSAccountingTeamErrors,
  setWhitelabelPABSAccountingTeamErrors,
}: WhitelabelPABSAccountingTypes) => {
  const classes = useStyles();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    switch (name) {
      case "pabsPhone":
        if (validateNumber(value)) {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? `PABS Phone must be exactly ${10} characters`
              : "";
          setWhitelabelPABSAccountingTeam(
            (prev: WhitelabelPABSAccountingTeamTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelPABSAccountingTeamErrors(
            (prevErrors: WhitelabelPABSAccountingTeamErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setWhitelabelPABSAccountingTeam(
            (prev: WhitelabelPABSAccountingTeamTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
        }
        break;
      case "pabsGroupEmail":
        const errorMessage = !regex.test(value)
          ? `Please provide valid email`
          : "";

        setWhitelabelPABSAccountingTeam(
          (prev: WhitelabelPABSAccountingTeamTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        setWhitelabelPABSAccountingTeamErrors(
          (prevErrors: WhitelabelPABSAccountingTeamErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          })
        );
        break;
      default:
        setWhitelabelPABSAccountingTeamErrors(
          (prevErrors: WhitelabelPABSAccountingTeamErrors) => ({
            ...prevErrors,
            [name]: "",
          })
        );
        setWhitelabelPABSAccountingTeam(
          (prev: WhitelabelPABSAccountingTeamTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox title="PABS Accounting Team" checkStatus={true}>
        <div className="py-3 px-2 flex grid-cols-3 gap-5">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col ">
                <label className="text-[#6E6D7A] text-[12px]">
                  Implementation Manager
                  <span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="implementation"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Implementation Manager"
                  value={whitelabelPABSAccountingTeam.implementation}
                  error={!!whitelabelPABSAccountingTeamErrors.implementation}
                  helperText={whitelabelPABSAccountingTeamErrors.implementation}
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
                <label className="text-[#6E6D7A] text-[12px]">
                  Operations Head<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  name="operationsHead"
                  size="small"
                  placeholder="Please Enter Operations Head"
                  value={whitelabelPABSAccountingTeam.operationsHead}
                  error={!!whitelabelPABSAccountingTeamErrors.operationsHead}
                  helperText={whitelabelPABSAccountingTeamErrors.operationsHead}
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
                <label className="text-[#6E6D7A] text-[12px]">
                  Team Manager<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="teamManager"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Team Manager"
                  value={whitelabelPABSAccountingTeam.teamManager}
                  error={!!whitelabelPABSAccountingTeamErrors.teamManager}
                  helperText={whitelabelPABSAccountingTeamErrors.teamManager}
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
              <div className="text-[12px] flex flex-col ">
                <label className="text-[#6E6D7A] text-[12px]">
                  Team Leader<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="teamLeader"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Team Leader"
                  value={whitelabelPABSAccountingTeam.teamLeader}
                  error={!!whitelabelPABSAccountingTeamErrors.teamLeader}
                  helperText={whitelabelPABSAccountingTeamErrors.teamLeader}
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
                <label className="text-[#6E6D7A] text-[12px]">
                  Senior Accountant<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="seniorAccountant"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Senior Accountant"
                  value={whitelabelPABSAccountingTeam.seniorAccountant}
                  error={!!whitelabelPABSAccountingTeamErrors.seniorAccountant}
                  helperText={
                    whitelabelPABSAccountingTeamErrors.seniorAccountant
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
              <div className="text-[12px] flex flex-col ">
                <label className="text-[#6E6D7A] text-[12px]">
                  PABS Group Email<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="pabsGroupEmail"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter PABS Group Email"
                  value={whitelabelPABSAccountingTeam.pabsGroupEmail}
                  error={!!whitelabelPABSAccountingTeamErrors.pabsGroupEmail}
                  helperText={whitelabelPABSAccountingTeamErrors.pabsGroupEmail}
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
              <div className="text-[12px] flex flex-col ">
                <label className="text-[#6E6D7A] text-[12px]">
                  PABS Phone<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="pabsPhone"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter PABS Phone"
                  value={whitelabelPABSAccountingTeam.pabsPhone}
                  error={!!whitelabelPABSAccountingTeamErrors.pabsPhone}
                  helperText={whitelabelPABSAccountingTeamErrors.pabsPhone}
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
      </FormBox>
    </div>
  );
};

export default WhitelabelPabsAccountingTeamForm;
