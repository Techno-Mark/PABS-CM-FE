import React from "react";
// Models import
import {
  LastTaxReturnFiledYearFormTypes,
  LastTaxReturnFiledYearTypes,
  SalesTaxAccessWorkPaperFormTypes,
  SalesTaxAccessWorkPaperTypes,
  TireTaxFormTypes,
  TireTaxTypes,
  UseTaxFormTypes,
  UseTaxTypes,
  autoCareCompliancesTypes,
} from "@/models/autoCareChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

function AutoCareCompliances({
  className,
  compliancesErrors,
  autoCareSalesTaxAccessWorkPaper,
  setAutoCareSalesTaxAccessWorkPaper,
  autoCareUseTax,
  setAutoCareUseTax,
  autoCareTireTax,
  setAutoCareTireTax,
  autoCareLastTaxReturnFiledYear,
  setAutoCareLastTaxReturnFiledYear,
  checkAllFieldsAutoCareCompliances,
}: autoCareCompliancesTypes) {
  return (
    <div className={`${className}`}>
      <SalesTaxAccessWorkPaper
        checkAllFieldsSalesTaxAccessWorkPaper={
          checkAllFieldsAutoCareCompliances
        }
        autoCareSalesTaxAccessWorkPaper={autoCareSalesTaxAccessWorkPaper}
        setAutoCareSalesTaxAccessWorkPaper={setAutoCareSalesTaxAccessWorkPaper}
        salesTaxAccessWorkPaperErrors={compliancesErrors}
      />
      <UseTax
        checkAllFieldsUseTax={checkAllFieldsAutoCareCompliances}
        autoCareUseTax={autoCareUseTax}
        setAutoCareUseTax={setAutoCareUseTax}
        useTaxErrors={compliancesErrors}
      />
      <TireTax
        checkAllFieldsTireTax={checkAllFieldsAutoCareCompliances}
        autoCareTireTax={autoCareTireTax}
        setAutoCareTireTax={setAutoCareTireTax}
        tireTaxErrors={compliancesErrors}
      />
      <LastTaxReturnFiledYear
        checkAllFieldsLastTaxReturnFiledYear={checkAllFieldsAutoCareCompliances}
        autoCareLastTaxReturnFiledYear={autoCareLastTaxReturnFiledYear}
        setAutoCareLastTaxReturnFiledYear={setAutoCareLastTaxReturnFiledYear}
        lastTaxReturnFiledYearErrors={compliancesErrors}
      />
    </div>
  );
}

export default AutoCareCompliances;

const SalesTaxAccessWorkPaper = ({
  autoCareSalesTaxAccessWorkPaper,
  setAutoCareSalesTaxAccessWorkPaper,
  salesTaxAccessWorkPaperErrors,
  checkAllFieldsSalesTaxAccessWorkPaper,
}: SalesTaxAccessWorkPaperTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleSalesTaxAccessWorkPaperChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareSalesTaxAccessWorkPaper(
      (prev: SalesTaxAccessWorkPaperFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Sales Tax Access & Work Papers<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="salesTaxAccessWorkPaperComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperComments
                }
                error={
                  !!salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperComments
                }
                helperText={
                  salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperComments
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsSalesTaxAccessWorkPaper
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
          <Status
            value={autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperStatus}
            onChange={(value: string) =>
              setAutoCareSalesTaxAccessWorkPaper(
                (prev: SalesTaxAccessWorkPaperFormTypes) => ({
                  ...prev,
                  salesTaxAccessWorkPaperStatus: value,
                }))
              }
            error={salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperStatus}
            helperText={salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperStatus}
            disabled={roleId === "4" && checkAllFieldsSalesTaxAccessWorkPaper}
          />
        </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="salesTaxAccessWorkPaperDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperDetails
                }
                error={
                  !!salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperDetails
                }
                helperText={
                  salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperDetails
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsSalesTaxAccessWorkPaper
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="salesTaxAccessWorkPaperActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperActionName
                }
                error={
                  !!salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperActionName
                }
                helperText={
                  salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperActionName
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsSalesTaxAccessWorkPaper
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="salesTaxAccessWorkPaperActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperActionItems
                }
                error={
                  !!salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperActionItems
                }
                helperText={
                  salesTaxAccessWorkPaperErrors?.salesTaxAccessWorkPaperActionItems
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsSalesTaxAccessWorkPaper
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const UseTax = ({
  autoCareUseTax,
  setAutoCareUseTax,
  useTaxErrors,
  checkAllFieldsUseTax,
}: UseTaxTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleUseTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareUseTax((prev: UseTaxFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Use Tax<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="useTaxComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareUseTax?.useTaxComments}
                error={!!useTaxErrors?.useTaxComments}
                helperText={useTaxErrors?.useTaxComments}
                onChange={handleUseTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsUseTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
          <Status
            value={autoCareUseTax?.useTaxStatus}
            onChange={(value: string) =>
              setAutoCareUseTax((prev: UseTaxFormTypes) => ({
                  ...prev,
                  useTaxStatus: value,
                }))
              }
            error={useTaxErrors?.useTaxStatus}
            helperText={useTaxErrors?.useTaxStatus}
            disabled={roleId === "4" && checkAllFieldsUseTax}
          />
        </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="useTaxDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareUseTax?.useTaxDetails}
                error={!!useTaxErrors?.useTaxDetails}
                helperText={useTaxErrors?.useTaxDetails}
                onChange={handleUseTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsUseTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="useTaxActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareUseTax?.useTaxActionName}
                error={!!useTaxErrors?.useTaxActionName}
                helperText={useTaxErrors?.useTaxActionName}
                onChange={handleUseTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsUseTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="useTaxActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareUseTax?.useTaxActionItems}
                error={!!useTaxErrors?.useTaxActionItems}
                helperText={useTaxErrors?.useTaxActionItems}
                onChange={handleUseTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsUseTax}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const TireTax = ({
  autoCareTireTax,
  setAutoCareTireTax,
  tireTaxErrors,
  checkAllFieldsTireTax,
}: TireTaxTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleTireTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareTireTax((prev: TireTaxFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Tire Tax<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="tireTaxComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareTireTax?.tireTaxComments}
                error={!!tireTaxErrors?.tireTaxComments}
                helperText={tireTaxErrors?.tireTaxComments}
                onChange={handleTireTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTireTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
          <Status
            value={autoCareTireTax?.tireTaxStatus}
            onChange={(value: string) =>
              setAutoCareTireTax((prev: TireTaxFormTypes) => ({
                  ...prev,
                  tireTaxStatus: value,
                }))
              }
            error={tireTaxErrors?.tireTaxStatus}
            helperText={tireTaxErrors?.tireTaxStatus}
            disabled={roleId === "4" && checkAllFieldsTireTax}
          />
        </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="tireTaxDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareTireTax?.tireTaxDetails}
                error={!!tireTaxErrors?.tireTaxDetails}
                helperText={tireTaxErrors?.tireTaxDetails}
                onChange={handleTireTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTireTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="tireTaxActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareTireTax?.tireTaxActionName}
                error={!!tireTaxErrors?.tireTaxActionName}
                helperText={tireTaxErrors?.tireTaxActionName}
                onChange={handleTireTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTireTax}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="tireTaxActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareTireTax?.tireTaxActionItems}
                error={!!tireTaxErrors?.tireTaxActionItems}
                helperText={tireTaxErrors?.tireTaxActionItems}
                onChange={handleTireTaxChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTireTax}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const LastTaxReturnFiledYear = ({
  autoCareLastTaxReturnFiledYear,
  setAutoCareLastTaxReturnFiledYear,
  lastTaxReturnFiledYearErrors,
  checkAllFieldsLastTaxReturnFiledYear,
}: LastTaxReturnFiledYearTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleLastTaxReturnFiledYearChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareLastTaxReturnFiledYear(
      (prev: LastTaxReturnFiledYearFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Last Tax Return Filed Year (990)
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="lastTaxReturnFiledYearComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearComments
                }
                error={
                  !!lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearComments
                }
                helperText={
                  lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearComments
                }
                onChange={handleLastTaxReturnFiledYearChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsLastTaxReturnFiledYear}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
          <Status
            value={autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearStatus}
            onChange={(value: string) =>
              setAutoCareLastTaxReturnFiledYear(
                (prev: LastTaxReturnFiledYearFormTypes) => ({
                  ...prev,
                  lastTaxReturnFiledYearStatus: value,
                }))
              }
            error={lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearStatus}
            helperText={lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearStatus}
            disabled={roleId === "4" && checkAllFieldsLastTaxReturnFiledYear}
          />
        </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="lastTaxReturnFiledYearDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearDetails
                }
                error={
                  !!lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearDetails
                }
                helperText={
                  lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearDetails
                }
                onChange={handleLastTaxReturnFiledYearChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsLastTaxReturnFiledYear}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="lastTaxReturnFiledYearActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearActionName
                }
                error={
                  !!lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearActionName
                }
                helperText={
                  lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearActionName
                }
                onChange={handleLastTaxReturnFiledYearChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsLastTaxReturnFiledYear}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="lastTaxReturnFiledYearActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearActionItems
                }
                error={
                  !!lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearActionItems
                }
                helperText={
                  lastTaxReturnFiledYearErrors?.lastTaxReturnFiledYearActionItems
                }
                onChange={handleLastTaxReturnFiledYearChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsLastTaxReturnFiledYear}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
