import React from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// Utlis import
import { useStyles } from "@/utils/useStyles";
import { validateNumber } from "@/utils/validate";
// Date import
import dayjs, { Dayjs } from "dayjs";
// MUI import
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LegalStructureFormTypes,
  LegalStructureTypes,
} from "@/models/carCareBasicDetails";

function AutoCareLegalStructure({
  className,
  autoCareLegalStructure,
  setAutoCareLegalStructure,
  autoCareLegalStructureErrors,
  setAutoCareLegalStructureErrors
}: LegalStructureTypes) {
  const classes = useStyles();

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
          setAutoCareLegalStructureErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
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

  const handleDateChange = (date: Dayjs | null) => {
    const formattedDate = date ? date.format("MM/DD/YYYY") : null;
    setAutoCareLegalStructure({
      ...autoCareLegalStructure,
      agreementDate: formattedDate,
    });
  };

  const handleProbableDateChange = (date: Dayjs | null) => {
    const formattedDate = date ? date.format("MM/DD/YYYY") : null;
    setAutoCareLegalStructure({
      ...autoCareLegalStructure,
      probableAcquitionDate: formattedDate,
    });
  };

  return (
    <div className={`${className}`}>
      <FormBox title="Legal Structure" checked={true}>
        <div className="py-3 px-2 grid grid-cols-3 gap-4">
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              No.of Entities<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              name="no_of_Entities"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter No.of Entities"
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
                className: classes.textSize,
              }}
            />
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              No.of Shops<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              name="no_of_Shops"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter No.of Shops"
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
                className: classes.textSize,
              }}
            />
          </div>

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
                className: classes.textSize,
              }}
            />
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">Agreement Date</label>
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
                value={
                  autoCareLegalStructure?.agreementDate
                    ? dayjs(autoCareLegalStructure.agreementDate, "MM/DD/YYYY")
                    : null
                }
                onChange={handleDateChange}
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
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Probable Acquition Date
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
                value={
                  autoCareLegalStructure?.probableAcquitionDate
                    ? dayjs(
                        autoCareLegalStructure.probableAcquitionDate,
                        "MM/DD/YYYY"
                      )
                    : null
                }
                onChange={handleProbableDateChange}
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
                className: classes.textSize,
              }}
            />
          </div>
        </div>
      </FormBox>
    </div>
  );
}

export default AutoCareLegalStructure;
