import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { useStyles } from "@/utils/useStyles";
import { TextField } from "@mui/material";

function CarCareAccountName({
  className,
  carCareAccountName,
  setCarCareAccountName,
  carCareAccountNameErrors,
}: any) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarCareAccountName({ ...carCareAccountName, [name]: value });
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
                value={carCareAccountName?.businessType}
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
                value={carCareAccountName?.service}
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
                value={carCareAccountName?.corporateAddress}
                error={!!carCareAccountNameErrors.corporateAddress}
                helperText={carCareAccountNameErrors.corporateAddress}
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
                  value={carCareAccountName?.no_of_Locations}
                  error={!!carCareAccountNameErrors.no_of_Locations}
                  helperText={carCareAccountNameErrors.no_of_Locations}
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
                  value={carCareAccountName?.locationName}
                  error={!!carCareAccountNameErrors.locationName}
                  helperText={carCareAccountNameErrors.locationName}
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
                value={carCareAccountName?.ownerContact}
                error={!!carCareAccountNameErrors.ownerContact}
                helperText={carCareAccountNameErrors.ownerContact}
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
                value={carCareAccountName?.ownerEmail}
                error={!!carCareAccountNameErrors.ownerEmail}
                helperText={carCareAccountNameErrors.ownerEmail}
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
                value={carCareAccountName?.ownerPhone}
                error={!!carCareAccountNameErrors.ownerPhone}
                helperText={carCareAccountNameErrors.ownerPhone}
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
