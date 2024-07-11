import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { Grid, TextField, Tooltip } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
// DatePicker import
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import {
  WhitelabelOtherInfoTypes,
  WhitelabelOtherInformationErrors,
  WhitelabelOtherInformationTypes,
} from "@/models/whitelabelBasicDetails";
import { validateNumber } from "@/utils/validate";
import Cookies from "js-cookie";
import ImgInfoIcon from "@/assets/Icons/admin/ImgInfoIcon";

const WhitelabelOtherInformationForm = ({
  className,
  whitelabelOtherInformationCheckStatus,
  handleWhitelabelOtherInformationSwitch,
  whitelabelOtherInformation,
  setWhitelabelOtherInformation,
  whitelabelOtherInformationErrors,
  setWhitelabelOtherInformationErrors,
  checkAllFieldsWhitelabelOtherInformationForm,
}: WhitelabelOtherInfoTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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

  const handleDateChange = (date: Dayjs | null) => {
    const formattedDate = date ? date.format("MM/DD/YYYY") : null;
    if (!!formattedDate) {
      setWhitelabelOtherInformation({
        ...whitelabelOtherInformation,
        startDate: formattedDate,
      });
      setWhitelabelOtherInformationErrors(
        (prevErrors: WhitelabelOtherInformationErrors) => ({
          ...prevErrors,
          startDate: "",
        })
      );
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox
        title="Other Information"
        checkStatus={whitelabelOtherInformationCheckStatus}
        handleChange={(e: any) => handleWhitelabelOtherInformationSwitch(e)}
        switchDisabled={checkAllFieldsWhitelabelOtherInformationForm}
      >
        <div className="py-3 px-2 flex grid-cols-3 gap-5">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  No. of Accounts
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
                    roleId === "4" &&
                    checkAllFieldsWhitelabelOtherInformationForm
                  }
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">BDM</label>
                <TextField
                  name="bdm"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter BDM"
                  value={whitelabelOtherInformation?.bdm}
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
                    roleId === "4" &&
                    checkAllFieldsWhitelabelOtherInformationForm
                  }
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col">
                <label className="flex items-center text-[#6E6D7A] text-[12px]">
                  <div className="mr-1">
                    Start Date<span className="text-[#DC3545]">*</span>
                  </div>
                  <Tooltip
                    title={
                      <ul className="custom-tooltip">
                        <li>MM/DD/YYYY</li>
                      </ul>
                    }
                    placement="top"
                    arrow
                  >
                    <span>
                      <ImgInfoIcon />
                    </span>
                  </Tooltip>
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      height: "25px !important",
                      paddingTop: "4px",
                      flexDirection: "unset",
                      fontSize: "14px !important",
                      fontFamily: "'Poppins !important',sans serif",
                    }}
                    value={
                      whitelabelOtherInformation?.startDate
                        ? dayjs(
                            whitelabelOtherInformation.startDate,
                            "MM/DD/YYYY"
                          )
                        : null
                    }
                    onChange={(value: Dayjs | null) => handleDateChange(value)}
                    format="MM/DD/YYYY"
                    slotProps={{
                      textField: {
                        variant: "standard",
                        InputProps: {
                          sx: {
                            fontSize: "14px !important",
                            paddingBottom: "4px !important",
                            width: "100%",
                          },
                        },
                      },
                    }}
                    disabled={
                      roleId === "4" &&
                      checkAllFieldsWhitelabelOtherInformationForm
                    }
                  />
                </LocalizationProvider>
              </div>
            </Grid>
          </Grid>
        </div>
      </FormBox>
    </div>
  );
};

export default WhitelabelOtherInformationForm;
