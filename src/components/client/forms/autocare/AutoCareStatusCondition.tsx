import {
  GP_GMNP_NMFormTypes,
  GP_GMNP_NMTypes,
  LastClosedPeriodFormTypes,
  LastClosedPeriodTypes,
  SharingFinancialsFormTypes,
  SharingFinancialsTypes,
} from "@/models/autoCarChecklist";
import {
  initialAutoCareGP_GMNP_NM,
  initialAutoCareLastClosedPeriod,
  initialAutoCareSharingFinancials,
} from "@/static/autoCareChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareStatusCondition({ className }: any) {
  const [autoCareLastClosedPeriod, setAutoCareLastClosedPeriod] =
    useState<LastClosedPeriodFormTypes>(initialAutoCareLastClosedPeriod);
  const [autoCareSharingFinancials, setAutoCareSharingFinancials] =
    useState<SharingFinancialsFormTypes>(initialAutoCareSharingFinancials);
  const [autoCareGP_GMNP_NM, setAutoCareGP_GMNP_NM] =
    useState<GP_GMNP_NMFormTypes>(initialAutoCareGP_GMNP_NM);
  return (
    <div className={`${className}`}>
      <LastClosedPeriod
        autoCareLastClosedPeriod={autoCareLastClosedPeriod}
        setAutoCareLastClosedPeriod={setAutoCareLastClosedPeriod}
      />
      <SharingFinancials
        autoCareSharingFinancials={autoCareSharingFinancials}
        setAutoCareSharingFinancials={setAutoCareSharingFinancials}
      />
      <GP_GMNP_NM
        autoCareGP_GMNP_NM={autoCareGP_GMNP_NM}
        setAutoCareGP_GMNP_NM={setAutoCareGP_GMNP_NM}
      />
    </div>
  );
}

export default AutoCareStatusCondition;

const LastClosedPeriod = ({
  autoCareLastClosedPeriod,
  setAutoCareLastClosedPeriod,
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

const GP_GMNP_NM = ({
  autoCareGP_GMNP_NM,
  setAutoCareGP_GMNP_NM,
}: GP_GMNP_NMTypes) => {
  const classes = useStyles();

  const handleGP_GMNP_NMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareGP_GMNP_NM((prev: GP_GMNP_NMFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        GP/GM NP/NM
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="gpGmnpNmComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareGP_GMNP_NM?.gpGmnpNmComments}
                onChange={handleGP_GMNP_NMChange}
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
                name="gpGmnpNmStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareGP_GMNP_NM?.gpGmnpNmStatus}
                onChange={handleGP_GMNP_NMChange}
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
                name="gpGmnpNmDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareGP_GMNP_NM?.gpGmnpNmDetails}
                onChange={handleGP_GMNP_NMChange}
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
                name="gpGmnpNmActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareGP_GMNP_NM?.gpGmnpNmActionName}
                onChange={handleGP_GMNP_NMChange}
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
                name="gpGmnpNmActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareGP_GMNP_NM?.gpGmnpNmActionItems}
                onChange={handleGP_GMNP_NMChange}
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
