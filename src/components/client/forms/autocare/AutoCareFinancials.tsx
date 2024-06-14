import React from "react";
// Models import
import {
  AutoCareFinancialsTypes,
  LastClosedPeriodFormTypes,
  LastClosedPeriodTypes,
  SharingFinancialsFormTypes,
  SharingFinancialsTypes,
} from "@/models/autoCarChecklist";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCareFinancials({
  className,
  financialsErrors,
  autoCareLastClosedPeriod,
  setAutoCareLastClosedPeriod,
  autoCareSharingFinancials,
  setAutoCareSharingFinancials,
}: AutoCareFinancialsTypes) {
  return (
    <div className={`${className}`}>
      <LastClosedPeriod
        autoCareLastClosedPeriod={autoCareLastClosedPeriod}
        setAutoCareLastClosedPeriod={setAutoCareLastClosedPeriod}
        lastClosedPeriodErrors={financialsErrors}
      />
      <SharingFinancials
        autoCareSharingFinancials={autoCareSharingFinancials}
        setAutoCareSharingFinancials={setAutoCareSharingFinancials}
      />
    </div>
  );
}

export default AutoCareFinancials;

const LastClosedPeriod = ({
  autoCareLastClosedPeriod,
  setAutoCareLastClosedPeriod,
  lastClosedPeriodErrors,
}: LastClosedPeriodTypes) => {
  const classes = useStyles();

  const handleLastClosedPeriodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareLastClosedPeriod((prev: LastClosedPeriodFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Last Closed Period<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="lastClosedPeriodComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareLastClosedPeriod?.lastClosedPeriodComments}
                error={!!lastClosedPeriodErrors?.lastClosedPeriodComments}
                helperText={lastClosedPeriodErrors?.lastClosedPeriodComments}
                onChange={handleLastClosedPeriodChange}
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
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="lastClosedPeriodStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareLastClosedPeriod?.lastClosedPeriodStatus}
                error={!!lastClosedPeriodErrors?.lastClosedPeriodStatus}
                helperText={lastClosedPeriodErrors?.lastClosedPeriodStatus}
                onChange={handleLastClosedPeriodChange}
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
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="lastClosedPeriodDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareLastClosedPeriod?.lastClosedPeriodDetails}
                error={!!lastClosedPeriodErrors?.lastClosedPeriodDetails}
                helperText={lastClosedPeriodErrors?.lastClosedPeriodDetails}
                onChange={handleLastClosedPeriodChange}
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
                Action Name - PABS
              </label>
              <TextField
                name="lastClosedPeriodActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareLastClosedPeriod?.lastClosedPeriodActionName}
                error={!!lastClosedPeriodErrors?.lastClosedPeriodActionName}
                helperText={lastClosedPeriodErrors?.lastClosedPeriodActionName}
                onChange={handleLastClosedPeriodChange}
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
                Action Items - Client
              </label>
              <TextField
                name="lastClosedPeriodActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareLastClosedPeriod?.lastClosedPeriodActionItems}
                error={!!lastClosedPeriodErrors?.lastClosedPeriodActionItems}
                helperText={lastClosedPeriodErrors?.lastClosedPeriodActionItems}
                onChange={handleLastClosedPeriodChange}
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
    </>
  );
};

const SharingFinancials = ({
  autoCareSharingFinancials,
  setAutoCareSharingFinancials,
}: SharingFinancialsTypes) => {
  const classes = useStyles();

  const handleSharingFinancialsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareSharingFinancials((prev: SharingFinancialsFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Sharing the Financials (POC)
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="sharingFinancialsComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareSharingFinancials?.sharingFinancialsComments}
                onChange={handleSharingFinancialsChange}
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
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="sharingFinancialsStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareSharingFinancials?.sharingFinancialsStatus}
                onChange={handleSharingFinancialsChange}
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
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="sharingFinancialsDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareSharingFinancials?.sharingFinancialsDetails}
                onChange={handleSharingFinancialsChange}
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
                Action Name - PABS
              </label>
              <TextField
                name="sharingFinancialsActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareSharingFinancials?.sharingFinancialsActionName}
                onChange={handleSharingFinancialsChange}
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
                Action Items - Client
              </label>
              <TextField
                name="sharingFinancialsActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareSharingFinancials?.sharingFinancialsActionItems}
                onChange={handleSharingFinancialsChange}
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
    </>
  );
};
