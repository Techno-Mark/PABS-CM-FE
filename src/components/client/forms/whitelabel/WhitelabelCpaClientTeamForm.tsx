import React, { ChangeEvent } from "react";
import FormBox from "@/components/client/common/FormBox";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
import { WhitelabelCpaClientTypes } from "@/models/whitelabelBasicDetails";
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import Cookies from "js-cookie";

const WhitelabelCpaClientTeamForm = ({
  className,
  whitelabelCpaClientTeamCheckStatus,
  handleWhitelabelCpaClientTeamSwitch,
  whitelabelCpaClientTeam,
  whitelabelCpaClientTeamErrors,
  handlePocDetailsChange,
  handleChange,
  handleAddField,
  handleRemoveField,
  checkAllFieldsWhitelabelCpaClientTeamForm,
}: WhitelabelCpaClientTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  return (
    <div className={`${className}`}>
      <FormBox
        title="CPA Client Team"
        checkStatus={whitelabelCpaClientTeamCheckStatus}
        handleChange={(e: any) => handleWhitelabelCpaClientTeamSwitch(e)}
        switchDisabled={checkAllFieldsWhitelabelCpaClientTeamForm}
      >
        <div className="py-3 px-2 flex flex-col gap-4">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  POC Details<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  id="outlined-basic"
                  name="pocDetails"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter POC Details"
                  value={whitelabelCpaClientTeam?.pocDetails}
                  error={!!whitelabelCpaClientTeamErrors?.pocDetails}
                  helperText={whitelabelCpaClientTeamErrors?.pocDetails}
                  onChange={(e) => handlePocDetailsChange(e)}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    roleId === "4" && checkAllFieldsWhitelabelCpaClientTeamForm
                  }
                />
              </div>
            </Grid>
          </Grid>
          {whitelabelCpaClientTeam?.cpaArray.map(
            (field: any, index: number) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={3.6}>
                  <div className="text-[12px] flex flex-col">
                    <label className="text-[#6E6D7A] text-[12px]">
                      POC Name<span className="text-[#DC3545]">*</span>
                    </label>
                    <TextField
                      id="outlined-basic"
                      name="pocName"
                      variant="standard"
                      size="small"
                      placeholder="Please Enter POC Name"
                      value={whitelabelCpaClientTeam?.cpaArray[index]?.pocName}
                      error={
                        !!whitelabelCpaClientTeamErrors?.cpaArray[index]
                          ?.pocName
                      }
                      helperText={
                        whitelabelCpaClientTeamErrors?.cpaArray[index]?.pocName
                      }
                      onChange={(e) => handleChange(index, e)}
                      InputProps={{
                        classes: {
                          underline: classes.underline,
                        },
                      }}
                      inputProps={{
                        className: classes.textSize,
                      }}
                      disabled={
                        roleId === "4" &&
                        checkAllFieldsWhitelabelCpaClientTeamForm
                      }
                    />
                  </div>
                </Grid>
                <Grid item xs={3.6}>
                  <div className="text-[12px] flex flex-col">
                    <label className="text-[#6E6D7A] text-[12px]">
                      Email<span className="text-[#DC3545]">*</span>
                    </label>
                    <TextField
                      id="outlined-basic"
                      name="pocEmailId"
                      variant="standard"
                      size="small"
                      placeholder="Please Enter Email"
                      value={
                        whitelabelCpaClientTeam?.cpaArray[index]?.pocEmailId
                      }
                      error={
                        !!whitelabelCpaClientTeamErrors?.cpaArray[index]
                          ?.pocEmailId
                      }
                      helperText={
                        whitelabelCpaClientTeamErrors?.cpaArray[index]
                          ?.pocEmailId
                      }
                      onChange={(e) => handleChange(index, e)}
                      InputProps={{
                        classes: {
                          underline: classes.underline,
                        },
                      }}
                      inputProps={{
                        className: classes.textSize,
                      }}
                      disabled={
                        roleId === "4" &&
                        checkAllFieldsWhitelabelCpaClientTeamForm
                      }
                    />
                  </div>
                </Grid>
                <Grid item xs={3.6}>
                  <div className="text-[12px] flex flex-col">
                    <label className="text-[#6E6D7A] text-[12px]">
                      Contact No.<span className="text-[#DC3545]">*</span>
                    </label>
                    <TextField
                      id="outlined-basic"
                      name="pocContactNo"
                      variant="standard"
                      size="small"
                      placeholder="Please Enter Contact No."
                      value={
                        whitelabelCpaClientTeam?.cpaArray[index]?.pocContactNo
                      }
                      error={
                        !!whitelabelCpaClientTeamErrors?.cpaArray[index]
                          ?.pocContactNo
                      }
                      helperText={
                        whitelabelCpaClientTeamErrors?.cpaArray[index]
                          ?.pocContactNo
                      }
                      onChange={(e) => handleChange(index, e)}
                      InputProps={{
                        classes: {
                          underline: classes.underline,
                        },
                      }}
                      inputProps={{
                        className: classes.textSize,
                      }}
                      disabled={
                        roleId === "4" &&
                        checkAllFieldsWhitelabelCpaClientTeamForm
                      }
                    />
                  </div>
                </Grid>
                <Grid item xs={1}>
                  {roleId === "4" ? checkAllFieldsWhitelabelCpaClientTeamForm : true && (
                  <div className="flex justify-end items-center pl-2 mt-6 gap-4">
                    {whitelabelCpaClientTeam.cpaArray.length > 1 && (
                      <span
                        className="cursor-pointer"
                        onClick={() => handleRemoveField(index)}
                      >
                        <MinusCircle />
                      </span>
                    )}
                    {index === whitelabelCpaClientTeam.cpaArray.length - 1 && (
                      <span className="cursor-pointer" onClick={handleAddField}>
                        <PlusCircleicon />
                      </span>
                    )}
                  </div>
                  )}
                </Grid>
              </Grid>
            )
          )}
        </div>
      </FormBox>
    </div>
  );
};

export default WhitelabelCpaClientTeamForm;
