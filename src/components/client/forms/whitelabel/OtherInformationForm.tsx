import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
// DatePicker import
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function OtherInformationForm({
  className,
  otherInformation,
  setOtherInformation,
  errors,
}: any) {
  const classes = useStyles();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOtherInformation({ ...otherInformation, [name]: value });
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Other Information" checked={true}>
        <div className="py-3 px-2 flex grid-cols-3 gap-5">
          <div className="text-[12px] flex flex-col w-full">
            <label className="text-[#6E6D7A] text-[12px]">No.of Accounts</label>
            <TextField
              name="noOfAccounts"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter No. of Accounts"
              value={otherInformation.noOfAccounts}
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
            <label className="text-[#6E6D7A] text-[12px]">BDM</label>
            <TextField
              name="bdm"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter BDM"
              value={otherInformation.bdm}
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
              Start Date<span className="text-[#DC3545]">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  height: "21px !important",
                  marginTop: "4px",
                  flexDirection: "unset",
                  fontSize: "12px !important",
                  fontFamily: "'Poppins !important',sans serif",
                }}
                minDate={dayjs(new Date())}
                disablePast
                slotProps={{
                  textField: {
                    variant: "standard",
                    InputProps: {
                      sx: {
                        fontSize: "12px !important",
                        width: "100%",
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </FormBox>
    </div>
  );
}

export default OtherInformationForm;
