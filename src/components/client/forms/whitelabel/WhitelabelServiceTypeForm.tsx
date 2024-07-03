import React from "react";
// Models import
import {
  AccountingFormTypes,
  AccountingTypes,
  FTEFormTypes,
  FTETypes,
  IndustryFormTypes,
  IndustryTypes,
  TaxFormTypes,
  TaxTypes,
  WeeklyFormTypes,
  WeeklyTypes,
  WhitelabelFormTypes,
  whiteLabelServiceType,
} from "@/models/whitelabelChecklist";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

const WhitelabelServiceTypeForm = ({
  className,
  whitelabelServiceErrors,
  whitelabelFTE,
  setWhitelabelFTE,
  whitelabelAccounting,
  setWhitelabelAccounting,
  whitelabelTax,
  setWhitelabelTax,
  whitelabelWeekly,
  setWhitelabelWeekly,
  whitelabelIndustry,
  setWhitelabelIndustry,
  checkAllFieldsWhiteLabelServiceTypeList,
}: whiteLabelServiceType) => {
  return (
    <div className={`${className}`}>
      <FTE
        whitelabelFTE={whitelabelFTE}
        setWhitelabelFTE={setWhitelabelFTE}
        whitelabelFTEErrors={whitelabelServiceErrors}
        checkAllFTE={checkAllFieldsWhiteLabelServiceTypeList}
      />
      <Accounting
        whitelabelAccounting={whitelabelAccounting}
        setWhitelabelAccounting={setWhitelabelAccounting}
        whitelabelAccountingErrors={whitelabelServiceErrors}
        checkAllAccounting={checkAllFieldsWhiteLabelServiceTypeList}
      />
      <Tax
        whitelabelTax={whitelabelTax}
        setWhitelabelTax={setWhitelabelTax}
        whitelabelTaxErrors={whitelabelServiceErrors}
        checkAllTax={checkAllFieldsWhiteLabelServiceTypeList}
      />
      <Weekly
        whitelabelWeekly={whitelabelWeekly}
        setWhitelabelWeekly={setWhitelabelWeekly}
        checkAllWeekly={checkAllFieldsWhiteLabelServiceTypeList}
      />
      <Industry
        whitelabelIndustry={whitelabelIndustry}
        setWhitelabelIndustry={setWhitelabelIndustry}
        checkAllIndustry={checkAllFieldsWhiteLabelServiceTypeList}
      />
    </div>
  );
};

export default WhitelabelServiceTypeForm;

const FTE = ({
  whitelabelFTE,
  setWhitelabelFTE,
  whitelabelFTEErrors,
  checkAllFTE,
}: FTETypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelFTE((prev: FTEFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        FTE<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="FTEComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelFTE?.FTEComments}
                error={!!whitelabelFTEErrors?.FTEComments}
                helperText={whitelabelFTEErrors?.FTEComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFTE}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="FTEStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelFTE?.FTEStatus}
                error={!!whitelabelFTEErrors?.FTEStatus}
                helperText={whitelabelFTEErrors?.FTEStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFTE}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="FTEActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelFTE?.FTEActionPABS}
                error={!!whitelabelFTEErrors?.FTEActionPABS}
                helperText={whitelabelFTEErrors?.FTEActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFTE}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="FTEActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelFTE?.FTEActionClient}
                error={!!whitelabelFTEErrors?.FTEActionClient}
                helperText={whitelabelFTEErrors?.FTEActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFTE}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Accounting = ({
  whitelabelAccounting,
  setWhitelabelAccounting,
  whitelabelAccountingErrors,
  checkAllAccounting,
}: AccountingTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelAccounting((prev: AccountingFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Accounting<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="accountingComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelAccounting?.accountingComments}
                error={!!whitelabelAccountingErrors?.accountingComments}
                helperText={whitelabelAccountingErrors?.accountingComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccounting}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="accountingStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelAccounting?.accountingStatus}
                error={!!whitelabelAccountingErrors?.accountingStatus}
                helperText={whitelabelAccountingErrors?.accountingStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccounting}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="accountingActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelAccounting?.accountingActionPABS}
                error={!!whitelabelAccountingErrors?.accountingActionPABS}
                helperText={whitelabelAccountingErrors?.accountingActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccounting}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="accountingActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelAccounting?.accountingActionClient}
                error={!!whitelabelAccountingErrors?.accountingActionClient}
                helperText={whitelabelAccountingErrors?.accountingActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccounting}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Tax = ({
  whitelabelTax,
  setWhitelabelTax,
  whitelabelTaxErrors,
  checkAllTax,
}: TaxTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelTax((prev: TaxFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Tax<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="taxComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelTax?.taxComments}
                error={!!whitelabelTaxErrors?.taxComments}
                helperText={whitelabelTaxErrors?.taxComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="taxStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelTax?.taxStatus}
                error={!!whitelabelTaxErrors?.taxStatus}
                helperText={whitelabelTaxErrors?.taxStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="taxActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelTax?.taxActionPABS}
                error={!!whitelabelTaxErrors?.taxActionPABS}
                helperText={whitelabelTaxErrors?.taxActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="taxActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelTax?.taxActionClient}
                error={!!whitelabelTaxErrors?.taxActionClient}
                helperText={whitelabelTaxErrors?.taxActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllTax}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Weekly = ({
  whitelabelWeekly,
  setWhitelabelWeekly,
  checkAllWeekly,
}: WeeklyTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelWeekly((prev: WeeklyFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Biweekly Hours Reporting Update
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="weeklyComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelWeekly?.weeklyComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllWeekly}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="weeklyStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelWeekly?.weeklyStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllWeekly}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="weeklyActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelWeekly?.weeklyActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllWeekly}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="weeklyActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelWeekly?.weeklyActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllWeekly}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Industry = ({
  whitelabelIndustry,
  setWhitelabelIndustry,
  checkAllIndustry,
}: IndustryTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelIndustry((prev: IndustryFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Industry Type
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="industryComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelIndustry?.industryComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIndustry}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="industryStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelIndustry?.industryStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIndustry}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="industryActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelIndustry?.industryActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIndustry}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="industryActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelIndustry?.industryActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllIndustry}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
