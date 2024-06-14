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
import {
  SystemAccessDetailsFormErrors,
  SystemAccessDetailsFormTypes,
  SystemAccessDetailsTypes,
} from "@/models/smbSystemAccessDetails";

function SmbAccessOfSystem({
  className,
  smbSystemAccessDetails,
  setSmbSystemAccessDetails,
  smbSystemAccessDetailsErrors,
  setSmbSystemAccessDetailsErrors,
}: SystemAccessDetailsTypes) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "ownerContact":
        if (validateNumber(value)) {
          setSmbSystemAccessDetails((prev: SystemAccessDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          }));
          setSmbSystemAccessDetailsErrors(
            (prevErrors: SystemAccessDetailsFormErrors) => ({
              ...prevErrors,
              [name]: "",
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setSmbSystemAccessDetails((prev: SystemAccessDetailsFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
        }
        break;
      default:
        setSmbSystemAccessDetailsErrors(
          (prevErrors: SystemAccessDetailsFormErrors) => ({
            ...prevErrors,
            [name]: "",
          })
        );
        setSmbSystemAccessDetails((prev: SystemAccessDetailsFormTypes) => ({
          ...prev,
          [name]: value,
        }));
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox title="System Of Access" checkStatus={true}>
        <div className="py-3 px-2 flex flex-col gap-4">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Name of the Resource
                  {/* <span className="text-[#DC3545]">*</span> */}
                </label>
                <TextField
                  name="nameOfResource"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Name of the Resource"
                  value={smbSystemAccessDetails?.nameOfResource}
                  error={!!smbSystemAccessDetailsErrors.nameOfResource}
                  helperText={smbSystemAccessDetailsErrors.nameOfResource}
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
                  Role
                  {/* <span className="text-[#DC3545]">*</span> */}
                </label>
                <TextField
                  name="role"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Role"
                  value={smbSystemAccessDetails?.role}
                  error={!!smbSystemAccessDetailsErrors.role}
                  helperText={smbSystemAccessDetailsErrors.role}
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
                  Email
                  {/* <span className="text-[#DC3545]">*</span> */}
                </label>
                <TextField
                  name="email"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Role"
                  value={smbSystemAccessDetails?.email}
                  error={!!smbSystemAccessDetailsErrors.email}
                  helperText={smbSystemAccessDetailsErrors.email}
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
              <div className={`text-[12px] flex flex-col `}>
                <label className="text-[#6E6D7A] text-[12px]">
                  Accounting Software
                  {/* <span className="text-[#DC3545]">*</span> */}
                </label>
                <TextField
                  name="accountingSoftware"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Accounting Software"
                  value={smbSystemAccessDetails?.accountingSoftware}
                  error={!!smbSystemAccessDetailsErrors.accountingSoftware}
                  helperText={smbSystemAccessDetailsErrors.accountingSoftware}
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
                  Bank Detail
                </label>
                <TextField
                  name="bankDetails"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Bank Details"
                  value={smbSystemAccessDetails?.bankDetails}
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
                <label className="text-[#6E6D7A] text-[12px]">Tax Detail</label>
                <TextField
                  name="taxDetails"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Tax Details"
                  value={smbSystemAccessDetails?.taxDetails}
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
                  Payroll Detail
                  {/* <span className="text-[#DC3545]">*</span> */}
                </label>
                <TextField
                  name="payrollDetails"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Payroll Detail"
                  value={smbSystemAccessDetails?.payrollDetails}
                  error={!!smbSystemAccessDetailsErrors.payrollDetails}
                  helperText={smbSystemAccessDetailsErrors.payrollDetails}
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
                  Comments
                  {/* <span className="text-[#DC3545]">*</span> */}
                </label>
                <TextField
                  name="comments"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Comment"
                  value={smbSystemAccessDetails?.comments}
                  error={!!smbSystemAccessDetailsErrors.comments}
                  helperText={smbSystemAccessDetailsErrors.comments}
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

export default SmbAccessOfSystem;
