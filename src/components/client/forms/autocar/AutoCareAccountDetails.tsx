import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { useStyles } from "@/utils/useStyles";
import { TextField } from "@mui/material";
import { AccountNameFormTypes, AccountNameTypes } from "@/models/carCareBasicDetails";
import { validateNumber } from "@/utils/validate";

function AutoCareAccountName({
  className,
  autoCareAccountName,
  setAutoCareAccountName,
  autoCareAccountNameErrors,
}: AccountNameTypes) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isValidLength = (input: string) => input.length <= 10;

    switch (name) {
      case "ownerPhone":
      case "ownerContact":
        if (isValidLength(value) && validateNumber(value)) {
          setAutoCareAccountName((prev: AccountNameFormTypes) => ({ ...prev, [name]: value }));
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setAutoCareAccountName((prev: AccountNameFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
        }
        break;
      case "no_of_Locations":
        if (validateNumber(value)) {
          setAutoCareAccountName((prev: AccountNameFormTypes) => ({ ...prev, [name]: value }));
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setAutoCareAccountName((prev: AccountNameFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
        }
        break;
      default:
        setAutoCareAccountName((prev: AccountNameFormTypes) => ({ ...prev, [name]: value }));
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Account Details" checked={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
          <div className="flex grid-cols-2 gap-5">
            <div className="text-[12px] flex flex-col w-[70%]">
              <label className="text-[#6E6D7A] text-[12px]">
                Account Name
              </label>
              <TextField
                name="accountName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Account Name"
                value={autoCareAccountName?.accountName}
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
                Owner Phone<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="ownerPhone"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Owner Phone"
                value={autoCareAccountName?.ownerPhone}
                error={!!autoCareAccountNameErrors.ownerPhone}
                helperText={autoCareAccountNameErrors.ownerPhone}
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
                value={autoCareAccountName?.corporateAddress}
                error={!!autoCareAccountNameErrors.corporateAddress}
                helperText={autoCareAccountNameErrors.corporateAddress}
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
              <div className="text-[12px] flex flex-col w-full !pt-1">
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Email<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerEmail"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Email"
                  value={autoCareAccountName?.ownerEmail}
                  error={!!autoCareAccountNameErrors.ownerEmail}
                  helperText={autoCareAccountNameErrors.ownerEmail}
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
              <div className="text-[12px] flex flex-col w-full !pt-[26px]">
                <label className="text-[#6E6D7A] text-[12px]">Service</label>
                <TextField
                  name="service"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Service"
                  value={autoCareAccountName?.service}
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
                Business Type
              </label>
              <TextField
                name="businessType"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Business Type"
                value={autoCareAccountName?.businessType}
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
                No.of Locations<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="no_of_Locations"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter No.of Locations"
                value={autoCareAccountName?.no_of_Locations}
                error={!!autoCareAccountNameErrors.no_of_Locations}
                helperText={autoCareAccountNameErrors.no_of_Locations}
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
                Locations Name<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="locationName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Locations name"
                value={autoCareAccountName?.locationName}
                error={!!autoCareAccountNameErrors.locationName}
                helperText={autoCareAccountNameErrors.locationName}
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
              value={autoCareAccountName?.ownerContact}
              error={!!autoCareAccountNameErrors.ownerContact}
              helperText={autoCareAccountNameErrors.ownerContact}
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
      </FormBox>
    </div>
  );
}

export default AutoCareAccountName;
