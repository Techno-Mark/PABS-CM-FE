import {
  LastTaxReturnFiledYearFormTypes,
  LastTaxReturnFiledYearTypes,
  SalesTaxAccessWorkPaperFormTypes,
  SalesTaxAccessWorkPaperTypes,
  TireTaxFormTypes,
  TireTaxTypes,
  UseTaxFormTypes,
  UseTaxTypes,
} from "@/models/autoCarChecklist";
import {
  initialAutoCareLastTaxReturnFiledYear,
  initialAutoCareSalesTaxAccessWorkPaper,
  initialAutoCareTireTax,
  initialAutoCareUseTax,
} from "@/static/autoCareChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareCompliances({ className }: any) {
  const [autoCareSalesTaxAccessWorkPaper, setAutoCareSalesTaxAccessWorkPaper] =
    useState<SalesTaxAccessWorkPaperFormTypes>(
      initialAutoCareSalesTaxAccessWorkPaper
    );
  const [autoCareUseTax, setAutoCareUseTax] = useState<UseTaxFormTypes>(
    initialAutoCareUseTax
  );
  const [autoCareTireTax, setAutoCareTireTax] = useState<TireTaxFormTypes>(
    initialAutoCareTireTax
  );
  const [autoCareLastTaxReturnFiledYear, setAutoCareLastTaxReturnFiledYear] =
    useState<LastTaxReturnFiledYearFormTypes>(
      initialAutoCareLastTaxReturnFiledYear
    );
  return (
    <div className={`${className}`}>
      <SalesTaxAccessWorkPaper
        autoCareSalesTaxAccessWorkPaper={autoCareSalesTaxAccessWorkPaper}
        setAutoCareSalesTaxAccessWorkPaper={setAutoCareSalesTaxAccessWorkPaper}
      />
      <UseTax
        autoCareUseTax={autoCareUseTax}
        setAutoCareUseTax={setAutoCareUseTax}
      />
      <TireTax
        autoCareTireTax={autoCareTireTax}
        setAutoCareTireTax={setAutoCareTireTax}
      />
      <LastTaxReturnFiledYear
        autoCareLastTaxReturnFiledYear={autoCareLastTaxReturnFiledYear}
        setAutoCareLastTaxReturnFiledYear={setAutoCareLastTaxReturnFiledYear}
      />
    </div>
  );
}

export default AutoCareCompliances;

const SalesTaxAccessWorkPaper = ({
  autoCareSalesTaxAccessWorkPaper,
  setAutoCareSalesTaxAccessWorkPaper,
}: SalesTaxAccessWorkPaperTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                onChange={handleSalesTaxAccessWorkPaperChange}
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
                name="salesTaxAccessWorkPaperStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperStatus
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
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
                name="salesTaxAccessWorkPaperDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperDetails
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
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
                name="salesTaxAccessWorkPaperActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperActionName
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
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
                name="salesTaxAccessWorkPaperActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareSalesTaxAccessWorkPaper?.salesTaxAccessWorkPaperActionItems
                }
                onChange={handleSalesTaxAccessWorkPaperChange}
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

const UseTax = ({ autoCareUseTax, setAutoCareUseTax }: UseTaxTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                onChange={handleUseTaxChange}
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
                name="useTaxStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareUseTax?.useTaxStatus}
                onChange={handleUseTaxChange}
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
                name="useTaxDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareUseTax?.useTaxDetails}
                onChange={handleUseTaxChange}
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
                name="useTaxActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareUseTax?.useTaxActionName}
                onChange={handleUseTaxChange}
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
                name="useTaxActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareUseTax?.useTaxActionItems}
                onChange={handleUseTaxChange}
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

const TireTax = ({ autoCareTireTax, setAutoCareTireTax }: TireTaxTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                onChange={handleTireTaxChange}
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
                name="tireTaxStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareTireTax?.tireTaxStatus}
                onChange={handleTireTaxChange}
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
                name="tireTaxDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareTireTax?.tireTaxDetails}
                onChange={handleTireTaxChange}
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
                name="tireTaxActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareTireTax?.tireTaxActionName}
                onChange={handleTireTaxChange}
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
                name="tireTaxActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareTireTax?.tireTaxActionItems}
                onChange={handleTireTaxChange}
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

const LastTaxReturnFiledYear = ({
  autoCareLastTaxReturnFiledYear,
  setAutoCareLastTaxReturnFiledYear,
}: LastTaxReturnFiledYearTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                onChange={handleLastTaxReturnFiledYearChange}
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
                name="lastTaxReturnFiledYearStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearStatus
                }
                onChange={handleLastTaxReturnFiledYearChange}
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
                name="lastTaxReturnFiledYearDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearDetails
                }
                onChange={handleLastTaxReturnFiledYearChange}
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
                name="lastTaxReturnFiledYearActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearActionName
                }
                onChange={handleLastTaxReturnFiledYearChange}
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
                name="lastTaxReturnFiledYearActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareLastTaxReturnFiledYear?.lastTaxReturnFiledYearActionItems
                }
                onChange={handleLastTaxReturnFiledYearChange}
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
