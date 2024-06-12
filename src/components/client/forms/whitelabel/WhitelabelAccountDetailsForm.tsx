import React, { forwardRef, useEffect, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI imports
import { Grid, TextField } from "@mui/material";
// utlis import
import { useStyles } from "@/utils/useStyles";
import {
  WhitelabelAccountDetailsFormErrors,
  WhitelabelAccountDetailsFormTypes,
  WhitelabelAccountDetailsTypes,
} from "@/models/whitelabel/whitelabelBasicDetails";
import { validateNumber } from "@/utils/validate";
// model import

const WhitelabelAccountDetailsForm = ({
  className,
  whitelabelAccountDetails,
  setWhitelabelAccountDetails,
  whitelabelAccountDetailsErrors,
  setWhitelabelAccountDetailsErrors,
}: WhitelabelAccountDetailsTypes) => {
  const classes = useStyles();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    switch (name) {
      case "ownerPhone":
      case "ownerContact":
        if (validateNumber(value)) {
          const validValue = value.slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? `${
                  name === "ownerPhone" ? "Owner Phone" : "Owner Contact"
                } must be exactly ${10} characters`
              : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? `${
                  name === "ownerPhone" ? "Owner Phone" : "Owner Contact"
                } must be exactly ${10} characters`
              : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        }
        break;
      case "zip":
        if (validateNumber(value)) {
          const validValue = value.slice(0, 6);
          const errorMessage =
            validValue.length < 6 ? `Zip must be exactly ${6} characters` : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 6);
          const errorMessage =
            validValue.length < 6 ? `Zip must be exactly ${6} characters` : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        }
        break;
      case "ownerEmail":
        const errorMessage = !regex.test(value)
          ? `Please provide valid email`
          : "";

        setWhitelabelAccountDetails(
          (prev: WhitelabelAccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        setWhitelabelAccountDetailsErrors(
          (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          })
        );
        break;
      default:
        setWhitelabelAccountDetailsErrors(
          (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
            ...prevErrors,
            [name]: "",
          })
        );
        setWhitelabelAccountDetails(
          (prev: WhitelabelAccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Account Details" checked={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  CPA Name<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="cpaName"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter CPA Name"
                  value={whitelabelAccountDetails?.cpaName}
                  error={!!whitelabelAccountDetailsErrors.cpaName}
                  helperText={whitelabelAccountDetailsErrors.cpaName}
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
                  City<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="city"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter City"
                  value={whitelabelAccountDetails.city}
                  error={!!whitelabelAccountDetailsErrors.city}
                  helperText={whitelabelAccountDetailsErrors.city}
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
                  value={whitelabelAccountDetails.corporateAddress}
                  error={!!whitelabelAccountDetailsErrors.corporateAddress}
                  helperText={whitelabelAccountDetailsErrors.corporateAddress}
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
              <div className="text-[12px] flex flex-col w-full pt-1">
                <label className="text-[#6E6D7A] text-[12px]">
                  State<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="state"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter State"
                  value={whitelabelAccountDetails.state}
                  error={!!whitelabelAccountDetailsErrors.state}
                  helperText={whitelabelAccountDetailsErrors.state}
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
              <div className="text-[12px] flex flex-col w-full pt-[26px]">
                <label className="text-[#6E6D7A] text-[12px]">
                  Zip<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="zip"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Zip Code"
                  value={whitelabelAccountDetails.zip}
                  error={!!whitelabelAccountDetailsErrors.zip}
                  helperText={whitelabelAccountDetailsErrors.zip}
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
                  Owner Contact<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerContact"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Contact"
                  value={whitelabelAccountDetails.ownerContact}
                  error={!!whitelabelAccountDetailsErrors.ownerContact}
                  helperText={whitelabelAccountDetailsErrors.ownerContact}
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
                  Owner Email<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerEmail"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Email"
                  value={whitelabelAccountDetails.ownerEmail}
                  error={!!whitelabelAccountDetailsErrors.ownerEmail}
                  helperText={whitelabelAccountDetailsErrors.ownerEmail}
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
                  Owner Phone<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerPhone"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Phone"
                  value={whitelabelAccountDetails.ownerPhone}
                  error={!!whitelabelAccountDetailsErrors.ownerPhone}
                  helperText={whitelabelAccountDetailsErrors.ownerPhone}
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

export default WhitelabelAccountDetailsForm;
