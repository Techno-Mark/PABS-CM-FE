import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function CarCareLegalStructure({
  className,
  carCarelegalStructure,
  setCarCareLegalStructure,
  carCareLegalStructureErrors,
}: any) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarCareLegalStructure({ ...carCarelegalStructure, [name]: value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setCarCareLegalStructure({ ...carCarelegalStructure, agreementDate: date });
  };

  const handleProbableDateChange = (date: Dayjs | null) => {
    setCarCareLegalStructure({ ...carCarelegalStructure, probableAcquitionDate: date });
  }

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
              value={carCarelegalStructure?.no_of_Entities}
              error={!!carCareLegalStructureErrors.no_of_Entities}
              helperText={carCareLegalStructureErrors.no_of_Entities}
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
              value={carCarelegalStructure?.no_of_Shops}
              error={!!carCareLegalStructureErrors.no_of_Shops}
              helperText={carCareLegalStructureErrors.no_of_Shops}
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
              Sales Rep(PABS)
            </label>
            <TextField
              name="salesRep"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Sales Rep(PABS)"
              value={carCarelegalStructure?.salesRep}
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
                value={carCarelegalStructure?.agreementDate}
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
                value={carCarelegalStructure?.probableAcquitionDate}
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
              value={carCarelegalStructure?.dba}
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

export default CarCareLegalStructure;
