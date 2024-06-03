import React from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";

function CarCarePabsAccountingTeam({
  className,
  carCarePabsAccountingTeam,
  setCarCarePabsAccountingTeam,
}: any) {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarCarePabsAccountingTeam({ ...carCarePabsAccountingTeam, [name]: value });
  };

  return (
    <div className={`${className}`}>
      <FormBox title="PABS Accounting Team" checked={true}>
        <div className="py-3 px-2 grid grid-cols-3 gap-4">
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              Implementation Manager
            </label>
            <TextField
              name="implementationManager"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Implementation Manager"
              value={carCarePabsAccountingTeam?.implementationManager}
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
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              Implementation Analyst
            </label>
            <TextField
              name="implementationAnalyst"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Implementation Analyst"
              value={carCarePabsAccountingTeam?.implementationAnalyst}
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
              Operations Head
            </label>
            <TextField
              name="operationsHead"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Operations Head"
              value={carCarePabsAccountingTeam?.operationsHead}
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
              Operations Manager
            </label>
            <TextField
              name="operationsManager"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Operations Manager"
              value={carCarePabsAccountingTeam?.operationsManager}
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

          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              Operations Account Handler
            </label>
            <TextField
              name="operationsAccountHolder"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Operations Account Handler"
              value={carCarePabsAccountingTeam?.operationsAccountHolder}
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
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">
              PABS Group Email
            </label>
            <TextField
              name="pabsGroupEmail"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter PABS Group Email"
              value={carCarePabsAccountingTeam?.pabsGroupEmail}
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
          <div className="text-[12px] flex flex-col ">
            <label className="text-[#6E6D7A] text-[12px]">PABS Phone</label>
            <TextField
              name="pabsPhone"
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter PABS Phone"
              value={carCarePabsAccountingTeam?.pabsPhone}
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

export default CarCarePabsAccountingTeam;
