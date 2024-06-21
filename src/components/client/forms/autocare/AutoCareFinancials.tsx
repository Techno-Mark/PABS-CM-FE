import React from "react";
// Models import
import {
  AutoCareFinancialsTypes,
  GP_GMNP_NMFormTypes,
  GP_GMNP_NMTypes,
  LastClosedPeriodFormTypes,
  LastClosedPeriodTypes,
  SharingFinancialsFormTypes,
  SharingFinancialsTypes,
} from "@/models/autoCareChecklist";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

function AutoCareFinancials({
  className,
  financialsErrors,
  autoCareLastClosedPeriod,
  setAutoCareLastClosedPeriod,
  autoCareSharingFinancials,
  setAutoCareSharingFinancials,
  autoCaregp_gmnp_nm,
  setAutoCaregp_gmnp_nm,
  checkAllFieldsAutoCareFinancials,
}: AutoCareFinancialsTypes) {
  return (
    <div className={`${className}`}>
      <LastClosedPeriod
        checkAllFieldsLastClosedPeriod={checkAllFieldsAutoCareFinancials}
        autoCareLastClosedPeriod={autoCareLastClosedPeriod}
        setAutoCareLastClosedPeriod={setAutoCareLastClosedPeriod}
        lastClosedPeriodErrors={financialsErrors}
      />
      <SharingFinancials
        checkAllFieldsSharingFinancials={checkAllFieldsAutoCareFinancials}
        autoCareSharingFinancials={autoCareSharingFinancials}
        setAutoCareSharingFinancials={setAutoCareSharingFinancials}
      />
      <GP_GMNP_NM
        checkAllFieldsGP_GMNP_NM={checkAllFieldsAutoCareFinancials}
        autoCaregp_gmnp_nm={autoCaregp_gmnp_nm}
        setAutoCaregp_gmnp_nm={setAutoCaregp_gmnp_nm}
      />
    </div>
  );
}

export default AutoCareFinancials;

const LastClosedPeriod = ({
  autoCareLastClosedPeriod,
  setAutoCareLastClosedPeriod,
  lastClosedPeriodErrors,
  checkAllFieldsLastClosedPeriod
}: LastClosedPeriodTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
      <div className="py-3 flex flex-col gap-4">
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
                disabled={roleId === '4' && checkAllFieldsLastClosedPeriod}
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
                disabled={roleId === '4' && checkAllFieldsLastClosedPeriod}
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
                disabled={roleId === '4' && checkAllFieldsLastClosedPeriod}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="lastClosedPeriodActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
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
                disabled={roleId === '4' && checkAllFieldsLastClosedPeriod}
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
                disabled={roleId === '4' && checkAllFieldsLastClosedPeriod}
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
  checkAllFieldsSharingFinancials
}: SharingFinancialsTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
      <div className="py-3 flex flex-col gap-4">
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
                disabled={roleId === '4' && checkAllFieldsSharingFinancials}
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
                disabled={roleId === '4' && checkAllFieldsSharingFinancials}
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
                disabled={roleId === '4' && checkAllFieldsSharingFinancials}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="sharingFinancialsActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
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
                disabled={roleId === '4' && checkAllFieldsSharingFinancials}
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
                disabled={roleId === '4' && checkAllFieldsSharingFinancials}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const GP_GMNP_NM = ({
  autoCaregp_gmnp_nm,
  setAutoCaregp_gmnp_nm,
  checkAllFieldsGP_GMNP_NM
}: GP_GMNP_NMTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleSharingFinancialsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCaregp_gmnp_nm((prev: GP_GMNP_NMFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        GP/GM NP/NM
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="gp_gmnp_nmComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCaregp_gmnp_nm?.gp_gmnp_nmComments}
                onChange={handleSharingFinancialsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsGP_GMNP_NM}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="gp_gmnp_nmStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCaregp_gmnp_nm?.gp_gmnp_nmStatus}
                onChange={handleSharingFinancialsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsGP_GMNP_NM}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="gp_gmnp_nmDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCaregp_gmnp_nm?.gp_gmnp_nmDetails}
                onChange={handleSharingFinancialsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsGP_GMNP_NM}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="gp_gmnp_nmActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCaregp_gmnp_nm?.gp_gmnp_nmActionName}
                onChange={handleSharingFinancialsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsGP_GMNP_NM}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="gp_gmnp_nmActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCaregp_gmnp_nm?.gp_gmnp_nmActionItems}
                onChange={handleSharingFinancialsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsGP_GMNP_NM}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
