import React, { ChangeEvent } from "react";
import FormBox from "@/components/client/common/FormBox";
import { TextField } from "@mui/material";
import { useStyles } from "@/utils/useStyles";
import { PabsAccountingTeamTypes } from "@/models/autoCareBasicDetails";
import { validateNumber } from "@/utils/validate";
// Cookie import
import Cookies from "js-cookie";

function AutoCarePabsAccountingTeam({
  className,
  pabsAccountingTeamCheckStatus,
  autoCarePabsAccountingTeam,
  setAutoCarePabsAccountingTeam,
  handlePabsAccountingTeamSwitch,
  finalCheckAllFieldsPabsAccountingTeam
}: PabsAccountingTeamTypes) {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    switch (name) {
      case "pabsPhone":
        const cleanedValue = value.replace(/[^0-9]/g, "");
        const validValue = cleanedValue.slice(0, 10);
        
        if (validateNumber(validValue) || validValue === "") {
          setAutoCarePabsAccountingTeam({
            ...autoCarePabsAccountingTeam,
            [name]: validValue,
          });
        }
        break;
        
      default:
        setAutoCarePabsAccountingTeam({
          ...autoCarePabsAccountingTeam,
          [name]: value,
        });
        break;
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox
        title="PABS Accounting Team"
        checkStatus={pabsAccountingTeamCheckStatus}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => handlePabsAccountingTeamSwitch(e)}
        switchDisabled={finalCheckAllFieldsPabsAccountingTeam}
      >
        <div className="py-3 grid grid-cols-3 gap-4">
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
              value={autoCarePabsAccountingTeam?.implementationManager}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
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
              value={autoCarePabsAccountingTeam?.implementationAnalyst}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
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
              value={autoCarePabsAccountingTeam?.operationsHead}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
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
              value={autoCarePabsAccountingTeam?.operationsManager}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
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
              value={autoCarePabsAccountingTeam?.operationsAccountHolder}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
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
              value={autoCarePabsAccountingTeam?.pabsGroupEmail}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
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
              value={autoCarePabsAccountingTeam?.pabsPhone}
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
              disabled={roleId === '4' && finalCheckAllFieldsPabsAccountingTeam}
            />
          </div>
        </div>
      </FormBox>
    </div>
  );
}

export default AutoCarePabsAccountingTeam;
