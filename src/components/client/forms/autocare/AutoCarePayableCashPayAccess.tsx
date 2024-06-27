import React from "react";
// Model import
import {
  ApThresholdLimitFormTypes,
  ApThresholdLimitTypes,
  BillPayAccessFormTypes,
  BillPayAccessTypes,
  TradeAccountFormTypes,
  TradeAccountTypes,
  VendorPortalAccessFormTypes,
  VendorPortalAccessTypes,
  autoCarePayableCashPayAccessTypes,
} from "@/models/autoCareChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

function AutoCarePayableCashPayAccess({
  className,
  payableCashPayAccessError,
  autoCareVendorPortalAccess,
  setAutoCareVendorPortalAccess,
  autoCareTradeAccount,
  setAutoCareTradeAccount,
  autoCareBillPayAccess,
  setAutoCareBillPayAccess,
  autoCareApThresholdLimit,
  setAutoCareApThresholdLimit,
  checkAllFieldsAutoCarePayableCashPayAccess,
}: autoCarePayableCashPayAccessTypes) {
  return (
    <div className={`${className}`}>
      <VendorPortalAccess
        checkAllFieldsVendorPortalAccess={
          checkAllFieldsAutoCarePayableCashPayAccess
        }
        autoCareVendorPortalAccess={autoCareVendorPortalAccess}
        setAutoCareVendorPortalAccess={setAutoCareVendorPortalAccess}
        vendorPortalAccessErrors={payableCashPayAccessError}
      />
      <TradeAccount
        checkAllFieldsTradeAccount={
          checkAllFieldsAutoCarePayableCashPayAccess
        }
        autoCareTradeAccount={autoCareTradeAccount}
        setAutoCareTradeAccount={setAutoCareTradeAccount}
      />
      <BillPayAccess
        checkAllFieldsBillPayAccess={
          checkAllFieldsAutoCarePayableCashPayAccess
        }
        autoCareBillPayAccess={autoCareBillPayAccess}
        setAutoCareBillPayAccess={setAutoCareBillPayAccess}
        billPayAccessErrors={payableCashPayAccessError}
      />
      <APThresholdLimit
        checkAllFieldsAPThresholdLimit={
          checkAllFieldsAutoCarePayableCashPayAccess
        }
        autoCareApThresholdLimit={autoCareApThresholdLimit}
        setAutoCareApThresholdLimit={setAutoCareApThresholdLimit}
      />
    </div>
  );
}

export default AutoCarePayableCashPayAccess;

const VendorPortalAccess = ({
  autoCareVendorPortalAccess,
  setAutoCareVendorPortalAccess,
  vendorPortalAccessErrors,
  checkAllFieldsVendorPortalAccess
}: VendorPortalAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleVendorPortalAccessChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareVendorPortalAccess((prev: VendorPortalAccessFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Vendor Portal Access<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="vendorPortalAccessComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareVendorPortalAccess?.vendorPortalAccessComments}
                error={!!vendorPortalAccessErrors?.vendorPortalAccessComments}
                helperText={
                  vendorPortalAccessErrors?.vendorPortalAccessComments
                }
                onChange={handleVendorPortalAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsVendorPortalAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="vendorPortalAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareVendorPortalAccess?.vendorPortalAccessStatus}
                error={!!vendorPortalAccessErrors?.vendorPortalAccessStatus}
                helperText={vendorPortalAccessErrors?.vendorPortalAccessStatus}
                onChange={handleVendorPortalAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsVendorPortalAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="vendorPortalAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareVendorPortalAccess?.vendorPortalAccessDetails}
                error={!!vendorPortalAccessErrors?.vendorPortalAccessDetails}
                helperText={vendorPortalAccessErrors?.vendorPortalAccessDetails}
                onChange={handleVendorPortalAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsVendorPortalAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="vendorPortalAccessActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareVendorPortalAccess?.vendorPortalAccessActionName}
                error={!!vendorPortalAccessErrors?.vendorPortalAccessActionName}
                helperText={
                  vendorPortalAccessErrors?.vendorPortalAccessActionName
                }
                onChange={handleVendorPortalAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsVendorPortalAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="vendorPortalAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  autoCareVendorPortalAccess?.vendorPortalAccessActionItems
                }
                error={
                  !!vendorPortalAccessErrors?.vendorPortalAccessActionItems
                }
                helperText={
                  vendorPortalAccessErrors?.vendorPortalAccessActionItems
                }
                onChange={handleVendorPortalAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsVendorPortalAccess}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const TradeAccount = ({
  autoCareTradeAccount,
  setAutoCareTradeAccount,
  checkAllFieldsTradeAccount
}: TradeAccountTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleTradeAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareTradeAccount((prev: TradeAccountFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Trade Account
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="tradeAccountComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareTradeAccount?.tradeAccountComments}
                onChange={handleTradeAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTradeAccount}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="tradeAccountStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareTradeAccount?.tradeAccountStatus}
                onChange={handleTradeAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTradeAccount}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="tradeAccountDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareTradeAccount?.tradeAccountDetails}
                onChange={handleTradeAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTradeAccount}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="tradeAccountActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareTradeAccount?.tradeAccountActionName}
                onChange={handleTradeAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTradeAccount}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="tradeAccountActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareTradeAccount?.tradeAccountActionItems}
                onChange={handleTradeAccountChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsTradeAccount}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const BillPayAccess = ({
  autoCareBillPayAccess,
  setAutoCareBillPayAccess,
  billPayAccessErrors,
  checkAllFieldsBillPayAccess
}: BillPayAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleBillPayAccessChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareBillPayAccess((prev: BillPayAccessFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Bill Pay Access<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="billPayAccessComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareBillPayAccess?.billPayAccessComments}
                error={!!billPayAccessErrors?.billPayAccessComments}
                helperText={billPayAccessErrors?.billPayAccessComments}
                onChange={handleBillPayAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsBillPayAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="billPayAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareBillPayAccess?.billPayAccessStatus}
                error={!!billPayAccessErrors?.billPayAccessStatus}
                helperText={billPayAccessErrors?.billPayAccessStatus}
                onChange={handleBillPayAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsBillPayAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="billPayAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareBillPayAccess?.billPayAccessDetails}
                error={!!billPayAccessErrors?.billPayAccessDetails}
                helperText={billPayAccessErrors?.billPayAccessDetails}
                onChange={handleBillPayAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsBillPayAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="billPayAccessActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareBillPayAccess?.billPayAccessActionName}
                error={!!billPayAccessErrors?.billPayAccessActionName}
                helperText={billPayAccessErrors?.billPayAccessActionName}
                onChange={handleBillPayAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsBillPayAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="billPayAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareBillPayAccess?.billPayAccessActionItems}
                error={!!billPayAccessErrors?.billPayAccessActionItems}
                helperText={billPayAccessErrors?.billPayAccessActionItems}
                onChange={handleBillPayAccessChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsBillPayAccess}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const APThresholdLimit = ({
  autoCareApThresholdLimit,
  setAutoCareApThresholdLimit,
  checkAllFieldsAPThresholdLimit
}: ApThresholdLimitTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleApThresholdLimitChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareApThresholdLimit((prev: ApThresholdLimitFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        AP Threshold Limit
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="apThresholdLimitComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareApThresholdLimit?.apThresholdLimitComments}
                onChange={handleApThresholdLimitChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAPThresholdLimit}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="apThresholdLimitStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareApThresholdLimit?.apThresholdLimitStatus}
                onChange={handleApThresholdLimitChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAPThresholdLimit}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="apThresholdLimitDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareApThresholdLimit?.apThresholdLimitDetails}
                onChange={handleApThresholdLimitChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAPThresholdLimit}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="apThresholdLimitActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={autoCareApThresholdLimit?.apThresholdLimitActionName}
                onChange={handleApThresholdLimitChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAPThresholdLimit}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="apThresholdLimitActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={autoCareApThresholdLimit?.apThresholdLimitActionItems}
                onChange={handleApThresholdLimitChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAPThresholdLimit}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
