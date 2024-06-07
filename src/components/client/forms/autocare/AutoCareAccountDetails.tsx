import React from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI import
import { Grid, TextField } from "@mui/material";
// Type import
import {
  AccountDetailsFormErrors,
  AccountDetailsFormTypes,
  AccountDetailsTypes,
} from "@/models/carCareBasicDetails";
// Utils import
import { useStyles } from "@/utils/useStyles";
import { validateNumber } from "@/utils/validate";

function AutoCareAccountDetails({
  className,
  autoCareAccountDetails,
  setAutoCareAccountDetails,
  autoCareAccountDetailsErrors,
  setAutoCareAccountDetailsErrors,
}: AccountDetailsTypes) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "ownerPhone":
      case "ownerContact":
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
      case "no_of_Locations":
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
      <FormBox title="Account Details" checked={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
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
                    className: classes.textSize,
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Phone<span className="text-[#DC3545]">*</span>
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
                    className: classes.textSize,
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={`text-[12px] flex flex-col ${autoCareAccountDetailsErrors.ownerEmail ? '!mb-2':'!mb-[30px]'}`}>
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
                    className: classes.textSize,
                  }}
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
                    className: classes.textSize,
                  }}
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
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  No.of Locations<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="no_of_Locations"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter No.of Locations"
                  value={autoCareAccountDetails?.no_of_Locations}
                  error={!!autoCareAccountDetailsErrors.no_of_Locations}
                  helperText={autoCareAccountDetailsErrors.no_of_Locations}
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
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Locations Name<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="locationName"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Locations name"
                  value={autoCareAccountDetails?.locationName}
                  error={!!autoCareAccountDetailsErrors.locationName}
                  helperText={autoCareAccountDetailsErrors.locationName}
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
