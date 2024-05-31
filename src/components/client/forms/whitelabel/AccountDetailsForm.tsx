import React, { forwardRef, useEffect, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI imports
import { TextField } from "@mui/material";
// utlis import
import { useStyles } from "@/utils/useStyles";
// model import

const AccountDetailsForm = ({
  className,
  accountDetails,
  setAccountDetails,
  errors,
}: any) => {
  const classes = useStyles();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Account Details" checked={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
          <div className="flex grid-cols-2 gap-5">
            <div className="text-[12px] flex flex-col w-[70%]">
              <label className="text-[#6E6D7A] text-[12px]">
                CPA Name<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="cpaName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter CPA Name"
                value={accountDetails.cpaName}
                error={!!errors.cpaName}
                helperText={errors.cpaName}
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
            <div className="text-[12px] flex flex-col w-[30%]">
              <label className="text-[#6E6D7A] text-[12px]">
                City<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="city"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter City"
                value={accountDetails.city}
                error={!!errors.city}
                helperText={errors.city}
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
          </div>

          <div className="flex grid-cols-2 gap-5">
            <div className="text-[12px] flex flex-col w-[70%]">
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
                value={accountDetails.corporateAddress}
                error={!!errors.corporateAddress}
                helperText={errors.corporateAddress}
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
            <div className="flex-col w-[30%]">
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
                  value={accountDetails.state}
                  error={!!errors.state}
                  helperText={errors.state}
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
                  value={accountDetails.zip}
                  error={!!errors.zip}
                  helperText={errors.zip}
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
            </div>
          </div>

          <div className="flex grid-cols-3 gap-5">
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
                value={accountDetails.ownerContact}
                error={!!errors.ownerContact}
                helperText={errors.ownerContact}
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
                value={accountDetails.ownerEmail}
                error={!!errors.ownerEmail}
                helperText={errors.ownerEmail}
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
                value={accountDetails.ownerPhone}
                error={!!errors.ownerPhone}
                helperText={errors.ownerPhone}
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
          </div>
        </div>
      </FormBox>
    </div>
  );
};

export default AccountDetailsForm;
