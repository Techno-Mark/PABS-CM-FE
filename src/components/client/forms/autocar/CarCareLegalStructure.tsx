import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function CarCareLegalStructure({
  className,
  legalStructure,
  setLegalStructure,
  errors,
}: any) {
  const classes = useStyles();

  return (
    <div className={`${className}`}>
      <FormBox title="Legal Structure" checked={true}>
        <div className="py-3 px-2 grid grid-cols-3 gap-4">
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              No.of Entities<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              name="noOfEntities"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter No.of Entities"
              value={legalStructure?.noOfEntities}
              // onChange={handleChange}
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
              name="noOfShops"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter No.of Shops"
              value={legalStructure?.noOfShops}
              // onChange={handleChange}
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
              value={legalStructure?.salesRep}
              // onChange={handleChange}
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
              value={legalStructure?.dba}
              // onChange={handleChange}
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
