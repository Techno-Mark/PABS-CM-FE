import React, { ChangeEvent, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// Utlis import
import { useStyles } from "@/utils/useStyles";
import { validateNumber } from "@/utils/validate";
// Date import
import dayjs, { Dayjs } from "dayjs";
// MUI import
import { Grid, TextField, Tooltip } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LegalStructureFormTypes,
  LegalStructureTypes,
} from "@/models/autoCareBasicDetails";
// Cookie import
import Cookies from "js-cookie";
import ImgInfoIcon from "@/assets/Icons/admin/ImgInfoIcon";

function AutoCareLegalStructure({
  className,
  legalStructureCheckStatus,
  autoCareLegalStructure,
  setAutoCareLegalStructure,
  autoCareLegalStructureErrors,
  setAutoCareLegalStructureErrors,
  handleLegalStructureSwitch,
  finalCheckAllFieldsLegalStructure,
}: LegalStructureTypes) {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "no_of_Entities":
      case "no_of_Shops":
        if (validateNumber(value)) {
          setAutoCareLegalStructure({
            ...autoCareLegalStructure,
            [name]: value,
          });
          setAutoCareLegalStructureErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        } else {
          const validValue = value.replace(/[^0-9]/g, "");
          setAutoCareLegalStructure((prev: LegalStructureFormTypes) => ({
            ...prev,
            [name]: validValue,
          }));
        }
        break;
      default:
        setAutoCareLegalStructure({ ...autoCareLegalStructure, [name]: value });
        break;
    }
  };

  const handleDateChange = (date: Dayjs | null, type: string) => {
    const formattedDate = date ? date.format("MM/DD/YYYY") : null;
    switch (type) {
      case "AgreementDate":
        setAutoCareLegalStructure({
          ...autoCareLegalStructure,
          agreementDate: formattedDate,
        });
        break;
      case "probableAcquitionDate":
        setAutoCareLegalStructure({
          ...autoCareLegalStructure,
          probableAcquitionDate: formattedDate,
        });
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox
        title="Legal Structure"
        checkStatus={legalStructureCheckStatus}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleLegalStructureSwitch(e)
        }
        switchDisabled={finalCheckAllFieldsLegalStructure}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">
                No. of Entities<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="no_of_Entities"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter No. of Entities"
                value={autoCareLegalStructure?.no_of_Entities}
                error={!!autoCareLegalStructureErrors.no_of_Entities}
                helperText={autoCareLegalStructureErrors.no_of_Entities}
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
                disabled={roleId === "4" && finalCheckAllFieldsLegalStructure}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">
                No. of Shops<span className="text-[#DC3545]">*</span>
              </label>
              <TextField
                name="no_of_Shops"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter No. of Shops"
                value={autoCareLegalStructure?.no_of_Shops}
                error={!!autoCareLegalStructureErrors.no_of_Shops}
                helperText={autoCareLegalStructureErrors.no_of_Shops}
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
                disabled={roleId === "4" && finalCheckAllFieldsLegalStructure}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">
                Sales Rep (PABS)
              </label>
              <TextField
                name="salesRep"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Sales Rep(PABS)"
                value={autoCareLegalStructure?.salesRep}
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
                disabled={roleId === "4" && finalCheckAllFieldsLegalStructure}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="flex items-center text-[#6E6D7A] text-[12px]">
                <div className="mr-1">Agreement Date</div>
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
                    height: "23px !important",
                    marginTop: "4px",
                    flexDirection: "unset",
                    fontSize: "12px !important",
                    fontFamily: "'Poppins !important',sans serif",
                  }}
                  value={
                    autoCareLegalStructure?.agreementDate
                      ? dayjs(
                          autoCareLegalStructure.agreementDate,
                          "MM/DD/YYYY"
                        )
                      : null
                  }
                  onChange={(value: Dayjs | null) =>
                    handleDateChange(value, "AgreementDate")
                  }
                  format="MM/DD/YYYY"
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
                  disabled={roleId === "4" && finalCheckAllFieldsLegalStructure}
                />
              </LocalizationProvider>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="flex items-center text-[#6E6D7A] text-[12px]">
                <div className="mr-1">Probable Acquition Date</div>
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
                    height: "23px !important",
                    marginTop: "4px",
                    flexDirection: "unset",
                    fontSize: "12px !important",
                    fontFamily: "'Poppins !important',sans serif",
                  }}
                  value={
                    autoCareLegalStructure?.probableAcquitionDate
                      ? dayjs(
                          autoCareLegalStructure.probableAcquitionDate,
                          "MM/DD/YYYY"
                        )
                      : null
                  }
                  onChange={(value: Dayjs | null) =>
                    handleDateChange(value, "probableAcquitionDate")
                  }
                  format="MM/DD/YYYY"
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
                  disabled={roleId === "4" && finalCheckAllFieldsLegalStructure}
                />
              </LocalizationProvider>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">DBA</label>
              <TextField
                name="dba"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter DBA"
                value={autoCareLegalStructure?.dba}
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
                disabled={roleId === "4" && finalCheckAllFieldsLegalStructure}
              />
            </div>
          </Grid>
        </Grid>
        <div className="py-3 grid grid-cols-3 gap-4"></div>
      </FormBox>
    </div>
  );
}

export default AutoCareLegalStructure;
