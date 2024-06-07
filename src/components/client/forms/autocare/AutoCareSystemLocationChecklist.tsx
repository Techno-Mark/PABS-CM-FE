import FormBox from "@/components/client/common/FormBox";
import {
  AccessComputerFormTypes,
  AccessComputerMethodTypes,
  AccountingSoftwareFormTypes,
  AccountingSoftwareTypes,
  CloudDocumentManagementFormTypes,
  CloudDocumentManagementTypes,
  ITStructureReviewFormTypes,
  ITStructureReviewTypes,
  PosSystemFormTypes,
  PosSystemTypes,
  ScannerFormTypes,
  ScannerTypes,
} from "@/models/autoCarChecklist";
import {
  initialAutoCareAccessComputerMethod,
  initialAutoCareAccountingSoftware,
  initialAutoCareCloudDocumentManagement,
  initialAutoCareITStructureReview,
  initialAutoCarePosSystem,
  initialAutoCareScanner,
} from "@/static/autoCareChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareSystemLocationChecklist({ className }: any) {
  const [autoCareITStructureReview, setAutoCareITStructureReview] =
    useState<ITStructureReviewFormTypes>(initialAutoCareITStructureReview);
  const [autoCareAccessComputerMethod, setAutoCareAccessComputerMethod] =
    useState<AccessComputerFormTypes>(initialAutoCareAccessComputerMethod);
  const [autoCarePosSystem, setAutoCarePosSystem] =
    useState<PosSystemFormTypes>(initialAutoCarePosSystem);
  const [autoCareAccountingSoftware, setAutoCareAccountingSoftware] =
    useState<AccountingSoftwareFormTypes>(initialAutoCareAccountingSoftware);
  const [autoCareCloudDocumentManagement, setAutoCareCloudDocumentManagement] =
    useState<CloudDocumentManagementFormTypes>(
      initialAutoCareCloudDocumentManagement
    );
    const [autoCareScanner, setAutoCareScanner] =
    useState<ScannerFormTypes>(
      initialAutoCareScanner
    );

  return (
    <div className={`${className}`}>
      <ITStructureReview
        autoCareITStructureReview={autoCareITStructureReview}
        setAutoCareITStructureReview={setAutoCareITStructureReview}
      />
      <AccessComputerMethod
        autoCareAccessComputerMethod={autoCareAccessComputerMethod}
        setAutoCareAccessComputerMethod={setAutoCareAccessComputerMethod}
      />
      <POSSystem
        autoCarePosSystem={autoCarePosSystem}
        setAutoCarePosSystem={setAutoCarePosSystem}
      />
      <AccountingSoftware
        autoCareAccountingSoftware={autoCareAccountingSoftware}
        setAutoCareAccountingSoftware={setAutoCareAccountingSoftware}
      />
      <CloudDocumentManagement
        autoCareCloudDocumentManagement={autoCareCloudDocumentManagement}
        setAutoCareCloudDocumentManagement={setAutoCareCloudDocumentManagement}
      />
      <Scanner
        autoCareScanner={autoCareScanner}
        setAutoCareScanner={setAutoCareScanner}
      />
    </div>
  );
}

export default AutoCareSystemLocationChecklist;

const ITStructureReview = ({
  autoCareITStructureReview,
  setAutoCareITStructureReview,
}: ITStructureReviewTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareITStructureReview((prev: ITStructureReviewFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        It Structure Review
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="itStructureComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareITStructureReview?.itStructureComments}
                onChange={handleChange}
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
                name="itStructureStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareITStructureReview?.itStructureStatus}
                onChange={handleChange}
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
                name="itStructureDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareITStructureReview?.itStructureDetails}
                onChange={handleChange}
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
                name="itStructureActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareITStructureReview?.itStructureActionName}
                onChange={handleChange}
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
                name="itStructureActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareITStructureReview?.itStructureActionItems}
                onChange={handleChange}
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

const AccessComputerMethod = ({
  autoCareAccessComputerMethod,
  setAutoCareAccessComputerMethod,
}: AccessComputerMethodTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareAccessComputerMethod((prev: AccessComputerFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Access Computer Method (dedicated)
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="accessComputerComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareAccessComputerMethod?.accessComputerComments}
                onChange={handleChange}
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
                name="accessComputerStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareAccessComputerMethod?.accessComputerStatus}
                onChange={handleChange}
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
                name="accessComputerDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareAccessComputerMethod?.accessComputerDetails}
                onChange={handleChange}
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
                name="accessComputerActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareAccessComputerMethod?.accessComputerActionName}
                onChange={handleChange}
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
                name="accessComputerActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareAccessComputerMethod?.accessComputerActionItems}
                onChange={handleChange}
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

const POSSystem = ({
  autoCarePosSystem,
  setAutoCarePosSystem,
}: PosSystemTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCarePosSystem((prev: PosSystemFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        POS System<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="posSystemComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCarePosSystem?.posSystemComments}
                onChange={handleChange}
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
                name="posSystemStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCarePosSystem?.posSystemStatus}
                onChange={handleChange}
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
                name="posSystemDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCarePosSystem?.posSystemDetails}
                onChange={handleChange}
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
                name="posSystemActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCarePosSystem?.posSystemActionName}
                onChange={handleChange}
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
                name="posSystemActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCarePosSystem?.posSystemActionItems}
                onChange={handleChange}
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

const AccountingSoftware = ({
  autoCareAccountingSoftware,
  setAutoCareAccountingSoftware,
}: AccountingSoftwareTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareAccountingSoftware((prev: AccountingSoftwareFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Accounting Software<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="accountingSoftwareComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareAccountingSoftware?.accountingSoftwareComments}
                onChange={handleChange}
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
                name="accountingSoftwareStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareAccountingSoftware?.accountingSoftwareStatus}
                onChange={handleChange}
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
                name="accountingSoftwareDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareAccountingSoftware?.accountingSoftwareDetails}
                onChange={handleChange}
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
                name="accountingSoftwareActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareAccountingSoftware?.accountingSoftwareActionName}
                onChange={handleChange}
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
                name="accountingSoftwareActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareAccountingSoftware?.accountingSoftwareActionItems
                }
                onChange={handleChange}
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

const CloudDocumentManagement = ({
  autoCareCloudDocumentManagement,
  setAutoCareCloudDocumentManagement,
}: CloudDocumentManagementTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareCloudDocumentManagement(
      (prev: CloudDocumentManagementFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Cloud Document Management
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="cloudDocumentManagementComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementComments
                }
                onChange={handleChange}
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
                name="cloudDocumentManagementStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementStatus
                }
                onChange={handleChange}
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
                name="cloudDocumentManagementDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementDetails
                }
                onChange={handleChange}
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
                name="cloudDocumentManagementActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementActionName
                }
                onChange={handleChange}
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
                name="cloudDocumentManagementActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementActionItems
                }
                onChange={handleChange}
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

const Scanner = ({ autoCareScanner, setAutoCareScanner }: ScannerTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCareScanner((prev: ScannerFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Scanner (If Any)
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="scannerComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCareScanner?.scannerComments}
                onChange={handleChange}
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
                name="scannerStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCareScanner?.scannerStatus}
                onChange={handleChange}
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
                name="scannerDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCareScanner?.scannerDetails}
                onChange={handleChange}
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
                name="scannerActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Name"
                value={autoCareScanner?.scannerActionName}
                onChange={handleChange}
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
                name="scannerActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareScanner?.scannerActionItems}
                onChange={handleChange}
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
