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
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

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
  checkAllFieldsSmbExistingFinancialsChecklist,
  isFormLocked,
}: ExistingFinancialsChecklistType) {
  return (
    <div className={`${className}`}>
      <LiveDate
        checkAllFieldsLiveDate={checkAllFieldsSmbExistingFinancialsChecklist}
        smbLiveDate={smbLiveDate}
        setSmbLiveDate={setSmbLiveDate}
        smbLiveDateErrors={smbExistingFinancialsChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <AccountingMethod
        checkAllFieldsAccountingMethod={
          checkAllFieldsSmbExistingFinancialsChecklist
        }
        smbAccountingMethod={smbAccountingMethod}
        setSmbAccountingMethod={setSmbAccountingMethod}
        isFormLocked={isFormLocked}
      />
      <FEIN
        smbFEIN={smbFEIN}
        setSmbFEIN={setSmbFEIN}
        checkAllFieldsFEIN={checkAllFieldsSmbExistingFinancialsChecklist}
        isFormLocked={isFormLocked}
      />
      <FiscalYearEnd
        checkAllFieldsFiscalYearEnd={
          checkAllFieldsSmbExistingFinancialsChecklist
        }
        smbFiscalYearEnd={smbFiscalYearEnd}
        setSmbFiscalYearEnd={setSmbFiscalYearEnd}
        isFormLocked={isFormLocked}
      />
      <LastClosedMonth
        checkAllFieldsLastClosedMonth={
          checkAllFieldsSmbExistingFinancialsChecklist
        }
        smbLastClosedMonth={smbLastClosedMonth}
        setSmbLastClosedMonth={setSmbLastClosedMonth}
        smbLastClosedMonthErrors={smbExistingFinancialsChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <ContactOfCpa
        checkAllFieldsContactOfCpa={
          checkAllFieldsSmbExistingFinancialsChecklist
        }
        smbContactOfCpa={smbContactOfCpa}
        setSmbContactOfCpa={setSmbContactOfCpa}
        isFormLocked={isFormLocked}
      />
      <TaxReturn
        checkAllFieldsTaxReturn={checkAllFieldsSmbExistingFinancialsChecklist}
        smbTaxReturn={smbTaxReturn}
        setSmbTaxReturn={setSmbTaxReturn}
        smbTaxReturnErrors={smbExistingFinancialsChecklistErrors}
        isFormLocked={isFormLocked}
      />
      <DistributionList
        checkAllFieldsDistributionList={
          checkAllFieldsSmbExistingFinancialsChecklist
        }
        smbDistributionList={smbDistributionList}
        setSmbDistributionList={setSmbDistributionList}
        smbDistributionListErrors={smbExistingFinancialsChecklistErrors}
        isFormLocked={isFormLocked}
      />
    </div>
  );
}

export default SmbExistingFinancialsChecklist;

const LiveDate = ({
  smbLiveDate,
  setSmbLiveDate,
  smbLiveDateErrors,
  checkAllFieldsLiveDate,
  isFormLocked,
}: LiveDateTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbLiveDate?.LiveDateStatus}
              onChange={(value: string) =>
                setSmbLiveDate((prev: LiveDateFormTypes) => ({
                  ...prev,
                  LiveDateStatus: value,
                }))
              }
              error={smbLiveDateErrors?.LiveDateStatus}
              helperText={smbLiveDateErrors?.LiveDateStatus}
              disabled={
                (roleId === "4" && checkAllFieldsLiveDate) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="LiveDateDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsLiveDate) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsLiveDate) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
  checkAllFieldsAccountingMethod,
  isFormLocked,
}: AccountingMethodTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleAccountingMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbAccountingMethod((prev: AccountingMethodFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Method of Accounting
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbAccountingMethod?.AccountingMethodStatus}
              onChange={(value: string) =>
                setSmbAccountingMethod((prev: AccountingMethodFormTypes) => ({
                  ...prev,
                  AccountingMethodStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsAccountingMethod) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="AccountingMethodDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbAccountingMethod?.AccountingMethodDetails}
                onChange={handleAccountingMethodChange}
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
                  (roleId === "4" && checkAllFieldsAccountingMethod) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbAccountingMethod?.AccountingMethodActionItems}
                onChange={handleAccountingMethodChange}
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
                  (roleId === "4" && checkAllFieldsAccountingMethod) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const FEIN = ({
  smbFEIN,
  setSmbFEIN,
  checkAllFieldsFEIN,
  isFormLocked,
}: FEINTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbFEIN?.FEINStatus}
              onChange={(value: string) =>
                setSmbFEIN((prev: FEINFormTypes) => ({
                  ...prev,
                  FEINStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsFEIN) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="FEINDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbFEIN?.FEINDetails}
                onChange={handlFeinChange}
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
                  (roleId === "4" && checkAllFieldsFEIN) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbFEIN?.FEINActionItems}
                onChange={handlFeinChange}
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
                  (roleId === "4" && checkAllFieldsFEIN) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
  checkAllFieldsFiscalYearEnd,
  isFormLocked,
}: FiscalYearEndTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleFiscalYearEndChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbFiscalYearEnd((prev: FiscalYearEndFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Fiscal Year End
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbFiscalYearEnd?.FiscalYearEndStatus}
              onChange={(value: string) =>
                setSmbFiscalYearEnd((prev: FiscalYearEndFormTypes) => ({
                  ...prev,
                  FiscalYearEndStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsFiscalYearEnd) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="FiscalYearEndDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbFiscalYearEnd?.FiscalYearEndDetails}
                onChange={handleFiscalYearEndChange}
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
                  (roleId === "4" && checkAllFieldsFiscalYearEnd) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbFiscalYearEnd?.FiscalYearEndActionItems}
                onChange={handleFiscalYearEndChange}
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
                  (roleId === "4" && checkAllFieldsFiscalYearEnd) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
  smbLastClosedMonthErrors,
  checkAllFieldsLastClosedMonth,
  isFormLocked,
}: LastClosedMonthTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleLastClosedMonthChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbLastClosedMonth((prev: LastClosedMonthFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Last Closed Month in Accounting Software
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbLastClosedMonth?.LastClosedMonthStatus}
              onChange={(value: string) =>
                setSmbLastClosedMonth((prev: LastClosedMonthFormTypes) => ({
                  ...prev,
                  LastClosedMonthStatus: value,
                }))
              }
              error={smbLastClosedMonthErrors?.LastClosedMonthStatus}
              helperText={smbLastClosedMonthErrors?.LastClosedMonthStatus}
              disabled={
                (roleId === "4" && checkAllFieldsLastClosedMonth) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="LastClosedMonthDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsLastClosedMonth) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbLastClosedMonth?.LastClosedMonthActionItems}
                error={!!smbLastClosedMonthErrors?.LastClosedMonthActionItems}
                helperText={
                  smbLastClosedMonthErrors?.LastClosedMonthActionItems
                }
                onChange={handleLastClosedMonthChange}
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
                  (roleId === "4" && checkAllFieldsLastClosedMonth) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
  checkAllFieldsContactOfCpa,
  isFormLocked,
}: ContactOfCpaTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbContactOfCpa?.ContactOfCpaStatus}
              onChange={(value: string) =>
                setSmbContactOfCpa((prev: ContactOfCpaFormTypes) => ({
                  ...prev,
                  ContactOfCpaStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsContactOfCpa) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ContactOfCpaDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbContactOfCpa?.ContactOfCpaDetails}
                onChange={handleContactOfCpaChange}
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
                  (roleId === "4" && checkAllFieldsContactOfCpa) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbContactOfCpa?.ContactOfCpaActionItems}
                onChange={handleContactOfCpaChange}
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
                  (roleId === "4" && checkAllFieldsContactOfCpa) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const TaxReturn = ({
  smbTaxReturn,
  setSmbTaxReturn,
  smbTaxReturnErrors,
  checkAllFieldsTaxReturn,
  isFormLocked,
}: TaxReturnTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

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
        Last Year Tax Return 990<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbTaxReturn?.TaxReturnStatus}
              onChange={(value: string) =>
                setSmbTaxReturn((prev: TaxReturnFormTypes) => ({
                  ...prev,
                  TaxReturnStatus: value,
                }))
              }
              error={smbTaxReturnErrors?.TaxReturnStatus}
              helperText={smbTaxReturnErrors?.TaxReturnStatus}
              disabled={
                (roleId === "4" && checkAllFieldsTaxReturn) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="TaxReturnDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsTaxReturn) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsTaxReturn) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
  smbDistributionListErrors,
  checkAllFieldsDistributionList,
  isFormLocked,
}: DistributionListTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleDistributionListChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbDistributionList((prev: DistributionListFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Monthly Financials Distribution List
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbDistributionList?.DistributionListStatus}
              onChange={(value: string) =>
                setSmbDistributionList((prev: DistributionListFormTypes) => ({
                  ...prev,
                  DistributionListStatus: value,
                }))
              }
              error={smbDistributionListErrors?.DistributionListStatus}
              helperText={smbDistributionListErrors?.DistributionListStatus}
              disabled={
                (roleId === "4" && checkAllFieldsDistributionList) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>

          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="DistributionListDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
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
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={
                  (roleId === "4" && checkAllFieldsDistributionList) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
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
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbDistributionList?.DistributionListActionItems}
                error={!!smbDistributionListErrors?.DistributionListActionItems}
                helperText={
                  smbDistributionListErrors?.DistributionListActionItems
                }
                onChange={handleDistributionListChange}
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
                  (roleId === "4" && checkAllFieldsDistributionList) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
