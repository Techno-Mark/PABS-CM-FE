import {
  AccountingMethodFormTypes,
  AccountingMethodTypes,
  ContactOfCpaFormTypes,
  ContactOfCpaTypes,
  DistributionListFormTypes,
  DistributionListTypes,
  ExistingFinancialsChecklistType,
  FEINFormTypes,
  FEINTypes,
  FiscalYearEndFormTypes,
  FiscalYearEndTypes,
  LastClosedMonthFormTypes,
  LastClosedMonthTypes,
  LiveDateFormTypes,
  LiveDateTypes,
  TaxReturnFormTypes,
  TaxReturnTypes,
} from "@/models/smbChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React from "react";

function SmbExistingFinancialsChecklist({
  className,
  smbExistingFinancialsChecklistErrors,
  smbLiveDate,
  setSmbLiveDate,
  smbAccountingMethod,
  setSmbAccountingMethod,
  smbFEIN,
  setSmbFEIN,
  smbFiscalYearEnd,
  setSmbFiscalYearEnd,
  smbLastClosedMonth,
  setSmbLastClosedMonth,
  smbContactOfCpa,
  setSmbContactOfCpa,
  smbTaxReturn,
  setSmbTaxReturn,
  smbDistributionList,
  setSmbDistributionList,
}: ExistingFinancialsChecklistType) {
  return (
    <div className={`${className}`}>
      <LiveDate smbLiveDate={smbLiveDate} setSmbLiveDate={setSmbLiveDate} smbLiveDateErrors={smbExistingFinancialsChecklistErrors} />
      <AccountingMethod
        smbAccountingMethod={smbAccountingMethod}
        setSmbAccountingMethod={setSmbAccountingMethod}
      />
      <FEIN smbFEIN={smbFEIN} setSmbFEIN={setSmbFEIN} />
      <FiscalYearEnd
        smbFiscalYearEnd={smbFiscalYearEnd}
        setSmbFiscalYearEnd={setSmbFiscalYearEnd}
      />
      <LastClosedMonth
        smbLastClosedMonth={smbLastClosedMonth}
        setSmbLastClosedMonth={setSmbLastClosedMonth}
        smbLastClosedMonthErrors={smbExistingFinancialsChecklistErrors}
      />
      <ContactOfCpa
        smbContactOfCpa={smbContactOfCpa}
        setSmbContactOfCpa={setSmbContactOfCpa}
      />
      <TaxReturn
        smbTaxReturn={smbTaxReturn}
        setSmbTaxReturn={setSmbTaxReturn}
        smbTaxReturnErrors={smbExistingFinancialsChecklistErrors}
      />
      <DistributionList
        smbDistributionList={smbDistributionList}
        setSmbDistributionList={setSmbDistributionList}
        smbDistributionListErrors={smbExistingFinancialsChecklistErrors}
      />
    </div>
  );
}

export default SmbExistingFinancialsChecklist;

const LiveDate = ({ smbLiveDate, setSmbLiveDate, smbLiveDateErrors }: LiveDateTypes) => {
  const classes = useStyles();

  const handleLiveDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbLiveDate((prev: LiveDateFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Go Live Date<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="LiveDateStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbLiveDate?.LiveDateStatus}
                error={!!smbLiveDateErrors?.LiveDateStatus}
                helperText={smbLiveDateErrors?.LiveDateStatus}
                onChange={handleLiveDateChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="LiveDateDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbLiveDate?.LiveDateDetails}
                error={!!smbLiveDateErrors?.LiveDateDetails}
                helperText={smbLiveDateErrors?.LiveDateDetails}
                onChange={handleLiveDateChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="LiveDateActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbLiveDate?.LiveDateActionItems}
                error={!!smbLiveDateErrors?.LiveDateActionItems}
                helperText={smbLiveDateErrors?.LiveDateActionItems}
                onChange={handleLiveDateChange}
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

const AccountingMethod = ({
  smbAccountingMethod,
  setSmbAccountingMethod,
}: AccountingMethodTypes) => {
  const classes = useStyles();

  const handleAccountingMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbAccountingMethod((prev: AccountingMethodFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Method of accounting
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AccountingMethodStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbAccountingMethod?.AccountingMethodStatus}
                onChange={handleAccountingMethodChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="AccountingMethodDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbAccountingMethod?.AccountingMethodDetails}
                onChange={handleAccountingMethodChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="AccountingMethodActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbAccountingMethod?.AccountingMethodActionItems}
                onChange={handleAccountingMethodChange}
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

const FEIN = ({ smbFEIN, setSmbFEIN }: FEINTypes) => {
  const classes = useStyles();

  const handlFeinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbFEIN((prev: FEINFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        FEIN
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="FEINStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbFEIN?.FEINStatus}
                onChange={handlFeinChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="FEINDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbFEIN?.FEINDetails}
                onChange={handlFeinChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="FEINActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbFEIN?.FEINActionItems}
                onChange={handlFeinChange}
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

const FiscalYearEnd = ({
  smbFiscalYearEnd,
  setSmbFiscalYearEnd,
}: FiscalYearEndTypes) => {
  const classes = useStyles();

  const handleFiscalYearEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbFiscalYearEnd((prev: FiscalYearEndFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Fiscal Year end
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="FiscalYearEndStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbFiscalYearEnd?.FiscalYearEndStatus}
                onChange={handleFiscalYearEndChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="FiscalYearEndDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbFiscalYearEnd?.FiscalYearEndDetails}
                onChange={handleFiscalYearEndChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="FiscalYearEndActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbFiscalYearEnd?.FiscalYearEndActionItems}
                onChange={handleFiscalYearEndChange}
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

const LastClosedMonth = ({
  smbLastClosedMonth,
  setSmbLastClosedMonth,
  smbLastClosedMonthErrors
}: LastClosedMonthTypes) => {
  const classes = useStyles();

  const handleLastClosedMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbLastClosedMonth((prev: LastClosedMonthFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Last Closed month in Accounting Software<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="LastClosedMonthStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbLastClosedMonth?.LastClosedMonthStatus}
                error={!!smbLastClosedMonthErrors?.LastClosedMonthStatus}
                helperText={smbLastClosedMonthErrors?.LastClosedMonthStatus}
                onChange={handleLastClosedMonthChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="LastClosedMonthDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbLastClosedMonth?.LastClosedMonthDetails}
                error={!!smbLastClosedMonthErrors?.LastClosedMonthDetails}
                helperText={smbLastClosedMonthErrors?.LastClosedMonthDetails}
                onChange={handleLastClosedMonthChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="LastClosedMonthActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbLastClosedMonth?.LastClosedMonthActionItems}
                error={!!smbLastClosedMonthErrors?.LastClosedMonthActionItems}
                helperText={smbLastClosedMonthErrors?.LastClosedMonthActionItems}
                onChange={handleLastClosedMonthChange}
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

const ContactOfCpa = ({
  smbContactOfCpa,
  setSmbContactOfCpa,
}: ContactOfCpaTypes) => {
  const classes = useStyles();

  const handleContactOfCpaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbContactOfCpa((prev: ContactOfCpaFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Name and Contact of CPA
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ContactOfCpaStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbContactOfCpa?.ContactOfCpaStatus}
                onChange={handleContactOfCpaChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="ContactOfCpaDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbContactOfCpa?.ContactOfCpaDetails}
                onChange={handleContactOfCpaChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="ContactOfCpaActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbContactOfCpa?.ContactOfCpaActionItems}
                onChange={handleContactOfCpaChange}
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

const TaxReturn = ({ smbTaxReturn, setSmbTaxReturn, smbTaxReturnErrors }: TaxReturnTypes) => {
  const classes = useStyles();

  const handleTaxReturnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbTaxReturn((prev: TaxReturnFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Last year Tax Return 990<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="TaxReturnStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbTaxReturn?.TaxReturnStatus}
                error={!!smbTaxReturnErrors?.TaxReturnStatus}
                helperText={smbTaxReturnErrors?.TaxReturnStatus}
                onChange={handleTaxReturnChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="TaxReturnDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbTaxReturn?.TaxReturnDetails}
                error={!!smbTaxReturnErrors?.TaxReturnDetails}
                helperText={smbTaxReturnErrors?.TaxReturnDetails}
                onChange={handleTaxReturnChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="TaxReturnActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbTaxReturn?.TaxReturnActionItems}
                error={!!smbTaxReturnErrors?.TaxReturnActionItems}
                helperText={smbTaxReturnErrors?.TaxReturnActionItems}
                onChange={handleTaxReturnChange}
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

const DistributionList = ({
  smbDistributionList,
  setSmbDistributionList,
  smbDistributionListErrors
}: DistributionListTypes) => {
  const classes = useStyles();

  const handleDistributionListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbDistributionList((prev: DistributionListFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Monthly Financials distribution list<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="DistributionListStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbDistributionList?.DistributionListStatus}
                error={!!smbDistributionListErrors?.DistributionListStatus}
                helperText={smbDistributionListErrors?.DistributionListStatus}
                onChange={handleDistributionListChange}
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
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="DistributionListDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={smbDistributionList?.DistributionListDetails}
                error={!!smbDistributionListErrors?.DistributionListDetails}
                helperText={smbDistributionListErrors?.DistributionListDetails}
                onChange={handleDistributionListChange}
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
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS/Client
              </label>
              <TextField
                name="DistributionListActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={smbDistributionList?.DistributionListActionItems}
                error={!!smbDistributionListErrors?.DistributionListActionItems}
                helperText={smbDistributionListErrors?.DistributionListActionItems}
                onChange={handleDistributionListChange}
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
