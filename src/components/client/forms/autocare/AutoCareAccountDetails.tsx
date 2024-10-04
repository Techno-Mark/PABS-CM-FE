import React, { ChangeEvent, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI import
import { Grid, TextField } from "@mui/material";
// Type import
import {
  AccountDetailsFormErrors,
  AccountDetailsFormTypes,
  AccountDetailsTypes,
} from "@/models/autoCareBasicDetails";
// Utils import
import { useStyles } from "@/utils/useStyles";
import { validateEmail, validateNumber } from "@/utils/validate";
// Cookie import
import Cookies from "js-cookie";

function AutoCareAccountDetails({
  className,
  accountDetailsCheckStatus,
  autoCareAccountDetails,
  setAutoCareAccountDetails,
  autoCareAccountDetailsErrors,
  setAutoCareAccountDetailsErrors,
  handleAccountDetailsSwitch,
  finalCheckAllFieldsAccountDetails,
  isFormLocked,
}: AccountDetailsTypes) {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "ownerPhone":
        if (validateNumber(value)) {
          const validValue = value.slice(0, 10);
          const errorMessage =
          validValue.length < 10
          ? "Owner Phone must be exactly 10 characters"
          : "";
          setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
          setAutoCareAccountDetailsErrors(
            (prevErrors: AccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
          validValue.length < 10
          ? "Owner Phone must be exactly 10 characters"
          : "";
          setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
          setAutoCareAccountDetailsErrors(
            (prevErrors: AccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        }
        break;
      case "ownerEmail":
        if (!validateEmail(value)) {
          setAutoCareAccountDetailsErrors(
            (prevErrors: AccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: "Please provide a valid email address.",
            })
          );
          setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          }));
        } else {
          setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          }));
          setAutoCareAccountDetailsErrors(
            (prevErrors: AccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: "",
            })
          );
        }
        break;
      case "noOfLocations":
        if (validateNumber(value)) {
          setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          }));
          setAutoCareAccountDetailsErrors(
            (prevErrors: AccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: "",
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
        }
        break;
      default:
        setAutoCareAccountDetailsErrors(
          (prevErrors: AccountDetailsFormErrors) => ({
            ...prevErrors,
            [name]: "",
          })
        );
        setAutoCareAccountDetails((prev: AccountDetailsFormTypes) => ({
          ...prev,
          [name]: value,
        }));
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox
        title="Account Details"
        checkStatus={accountDetailsCheckStatus}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleAccountDetailsSwitch(e)
        }
        switchDisabled={finalCheckAllFieldsAccountDetails}
        isFormLocked={isFormLocked}
      >
        <div className="py-3 flex flex-col gap-4">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Account Name<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="accountName"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Account Name"
                  value={autoCareAccountDetails?.accountName}
                  error={!!autoCareAccountDetailsErrors.accountName}
                  helperText={autoCareAccountDetailsErrors.accountName}
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
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Phone
                </label>
                <TextField
                  name="ownerPhone"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Phone"
                  value={autoCareAccountDetails?.ownerPhone}
                  error={!!autoCareAccountDetailsErrors.ownerPhone}
                  helperText={autoCareAccountDetailsErrors.ownerPhone}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Corporate Address<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="corporateAddress"
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="standard"
                  placeholder="Please Enter Corporate Address"
                  value={autoCareAccountDetails?.corporateAddress}
                  error={!!autoCareAccountDetailsErrors.corporateAddress}
                  helperText={autoCareAccountDetailsErrors.corporateAddress}
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
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={`text-[12px] flex flex-col ${
                  autoCareAccountDetailsErrors.ownerEmail
                    ? "!mb-2"
                    : "!mb-[22px] mt-2"
                }`}
              >
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Email<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerEmail"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Email"
                  value={autoCareAccountDetails?.ownerEmail}
                  error={!!autoCareAccountDetailsErrors.ownerEmail}
                  helperText={autoCareAccountDetailsErrors.ownerEmail}
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
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">Service</label>
                <TextField
                  name="service"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Service"
                  value={autoCareAccountDetails?.service}
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
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Business Type
                </label>
                <TextField
                  name="businessType"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Business Type"
                  value={autoCareAccountDetails?.businessType}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  No. of Locations<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="noOfLocations"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter No. of Locations"
                  value={autoCareAccountDetails?.noOfLocations}
                  error={!!autoCareAccountDetailsErrors.noOfLocations}
                  helperText={autoCareAccountDetailsErrors.noOfLocations}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Name of Locations<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="nameOfLocations"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Name of Locations"
                  value={autoCareAccountDetails?.nameOfLocations}
                  error={!!autoCareAccountDetailsErrors.nameOfLocations}
                  helperText={autoCareAccountDetailsErrors.nameOfLocations}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Contact<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerContact"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Contact"
                  value={autoCareAccountDetails?.ownerContact}
                  error={!!autoCareAccountDetailsErrors.ownerContact}
                  helperText={autoCareAccountDetailsErrors.ownerContact}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" && finalCheckAllFieldsAccountDetails) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </FormBox>
    </div>
  );
}

export default AutoCareAccountDetails;
