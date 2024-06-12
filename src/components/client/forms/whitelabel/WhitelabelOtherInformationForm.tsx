import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { Grid, TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
// DatePicker import
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {
  WhitelabelOtherInfoTypes,
  WhitelabelOtherInformationErrors,
  WhitelabelOtherInformationTypes,
} from "@/models/whitelabel/whitelabelBasicDetails";
import { validateNumber } from "@/utils/validate";

const WhitelabelOtherInformationForm = ({
  className,
  whitelabelOtherInformation,
  setWhitelabelOtherInformation,
  whitelabelOtherInformationErrors,
  setWhitelabelOtherInformationErrors,
}: WhitelabelOtherInfoTypes) => {
  const classes = useStyles();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    switch (name) {
      case "NoOfAccounts":
        if (validateNumber(value)) {
          setWhitelabelOtherInformation(
            (prev: WhitelabelOtherInformationTypes) => ({
              ...prev,
              [name]: value,
            })
          );
          setWhitelabelOtherInformationErrors(
            (prevErrors: WhitelabelOtherInformationErrors) => ({
              ...prevErrors,
              [name]: "",
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setWhitelabelOtherInformation(
            (prev: WhitelabelOtherInformationTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
        }
        break;
      default:
        setWhitelabelOtherInformationErrors(
          (prevErrors: WhitelabelOtherInformationErrors) => ({
            ...prevErrors,
            [name]: "",
          })
        );
        setWhitelabelOtherInformation(
          (prev: WhitelabelOtherInformationTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Other Information" checked={true}>
        <div className="py-3 px-2 flex grid-cols-3 gap-5">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  No. of Accounts<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="noOfAccounts"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter No. of Accounts"
                  value={
                    whitelabelOtherInformation.noOfAccounts > 0
                      ? whitelabelOtherInformation.noOfAccounts
                      : ""
                  }
                  error={!!whitelabelOtherInformationErrors.noOfAccounts}
                  helperText={whitelabelOtherInformationErrors.noOfAccounts}
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
                  BDM<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="bdm"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter BDM"
                  value={whitelabelOtherInformation.bdm}
                  error={!!whitelabelOtherInformationErrors.bdm}
                  helperText={whitelabelOtherInformationErrors.bdm}
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
              <div
                className={`text-[12px] flex flex-col w-full muiDatepickerCustomizer ${
                  !!whitelabelOtherInformationErrors.startDate &&
                  "datepickerError"
                }`}
              >
                <label className="text-[#6E6D7A] text-[12px] mb-[-18px]">
                  Start Date<span className="text-[#DC3545]">*</span>
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disablePast
                    minDate={dayjs(new Date())}
                    value={
                      whitelabelOtherInformation.startDate === "" &&
                      whitelabelOtherInformation.startDate.toString().trim()
                        .length <= 0
                        ? null
                        : dayjs(whitelabelOtherInformation.startDate)
                    }
                    onChange={handleChange}
                    slotProps={{
                      textField: {
                        helperText: whitelabelOtherInformationErrors.startDate,
                        readOnly: true,
                      } as Record<string, any>,
                    }}
                  />
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  Panda Doc Status<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="pandaDocStatus"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Panda Doc Status"
                  value={whitelabelOtherInformation.pandaDocStatus}
                  onChange={handleChange}
                  error={!!whitelabelOtherInformationErrors.pandaDocStatus}
                  helperText={whitelabelOtherInformationErrors.pandaDocStatus}
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

export default WhitelabelOtherInformationForm;
