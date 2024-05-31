import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { useStyles } from "@/utils/useStyles";
import { TextField } from "@mui/material";

function CarCareAccountName({
  className,
  accountName,
  setAccountName,
  errors,
}: any) {
  const classes = useStyles();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAccountName({ ...accountName, [name]: value });
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Account Name" checked={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
          <div className="flex grid-cols-2 gap-5">
            <div className="text-[12px] flex flex-col w-[70%]">
              <label className="text-[#6E6D7A] text-[12px]">
                Business Type
              </label>
              <TextField
                name="businessType"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Business Type"
                value={accountName?.businessType}
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
              <label className="text-[#6E6D7A] text-[12px]">Service</label>
              <TextField
                name="service"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Service"
                value={accountName?.service}
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
                value={accountName?.corporateAddress}
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
                  No.of Locations<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="no_of_Locations"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter No.of Locations"
                  value={accountName?.no_of_Locations}
                  error={!!errors.no_of_Locations}
                  helperText={errors.no_of_Locations}
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
                  Locations Name<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="locationName"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Locations name"
                  value={accountName?.locationName}
                  error={!!errors.locationName}
                  helperText={errors.locationName}
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
                value={accountName?.ownerContact}
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
                value={accountName?.ownerEmail}
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
                value={accountName?.ownerPhone}
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
}

export default CarCareAccountName;
