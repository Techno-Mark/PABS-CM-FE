import {
  ApThresholdLimitFormTypes,
  ApThresholdLimitTypes,
  BillPayAccessFormTypes,
  BillPayAccessTypes,
  TradeAccountFormTypes,
  TradeAccountTypes,
  VendorPortalAccessFormTypes,
  VendorPortalAccessTypes,
} from "@/models/autoCarChecklist";
import {
  initialAutoCareApThresholdLimit,
  initialAutoCareBillPayAccess,
  initialAutoCareTradeAccount,
  initialAutoCareVendorPortalAccess,
} from "@/static/autoCareChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCarePayableCashPayAccess({ className }: any) {
  const [autoCareVendorPortalAccess, setAutoCareVendorPortalAccess] =
    useState<VendorPortalAccessFormTypes>(initialAutoCareVendorPortalAccess);
  const [autoCareTradeAccount, setAutoCareTradeAccount] =
    useState<TradeAccountFormTypes>(initialAutoCareTradeAccount);
  const [autoCareBillPayAccess, setAutoCareBillPayAccess] =
    useState<BillPayAccessFormTypes>(initialAutoCareBillPayAccess);
  const [autoCareApThresholdLimit, setAutoCareApThresholdLimit] =
    useState<ApThresholdLimitFormTypes>(initialAutoCareApThresholdLimit);
  return (
    <div className={`${className}`}>
      <VendorPortalAccess
        autoCareVendorPortalAccess={autoCareVendorPortalAccess}
        setAutoCareVendorPortalAccess={setAutoCareVendorPortalAccess}
      />
      <TradeAccount
        autoCareTradeAccount={autoCareTradeAccount}
        setAutoCareTradeAccount={setAutoCareTradeAccount}
      />
      <BillPayAccess
        autoCareBillPayAccess={autoCareBillPayAccess}
        setAutoCareBillPayAccess={setAutoCareBillPayAccess}
      />
      <APThresholdLimit
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
}: VendorPortalAccessTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                onChange={handleVendorPortalAccessChange}
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
                name="vendorPortalAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareVendorPortalAccess?.vendorPortalAccessStatus}
                onChange={handleVendorPortalAccessChange}
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
                name="vendorPortalAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareVendorPortalAccess?.vendorPortalAccessDetails}
                onChange={handleVendorPortalAccessChange}
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
                name="vendorPortalAccessActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareVendorPortalAccess?.vendorPortalAccessActionName}
                onChange={handleVendorPortalAccessChange}
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
                name="vendorPortalAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareVendorPortalAccess?.vendorPortalAccessActionItems
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
}: TradeAccountTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="tradeAccountActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
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
                placeholder="Please Enter Action Items"
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
}: BillPayAccessTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                onChange={handleBillPayAccessChange}
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
                name="billPayAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareBillPayAccess?.billPayAccessStatus}
                onChange={handleBillPayAccessChange}
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
                name="billPayAccessDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareBillPayAccess?.billPayAccessDetails}
                onChange={handleBillPayAccessChange}
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
                name="billPayAccessActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareBillPayAccess?.billPayAccessActionName}
                onChange={handleBillPayAccessChange}
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
                name="billPayAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareBillPayAccess?.billPayAccessActionItems}
                onChange={handleBillPayAccessChange}
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

const APThresholdLimit = ({
  autoCareApThresholdLimit,
  setAutoCareApThresholdLimit,
}: ApThresholdLimitTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Name - PABS
              </label>
              <TextField
                name="apThresholdLimitActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
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
                placeholder="Please Enter Action Items"
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
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
