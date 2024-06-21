import React from "react";
// Models import
import {
  AccessComputerFormTypes,
  AccessComputerMethodTypes,
  AccountingSoftwareFormTypes,
  AccountingSoftwareTypes,
  CloudDocumentManagementFormTypes,
  CloudDocumentManagementTypes,
  EstimatingSoftwareFormTypes,
  EstimatingSoftwareTypes,
  ITStructureReviewFormTypes,
  ITStructureReviewTypes,
  PosSoftwareFormTypes,
  PosSoftwareTypes,
  ScannerFormTypes,
  ScannerTypes,
  autoCareSystemLocationChecklistTypes,
} from "@/models/autoCareChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

function AutoCareSystemLocationChecklist({
  className,
  systemSoftwareLocationErrors,
  autoCareITStructureReview,
  setAutoCareITStructureReview,
  autoCareAccessComputerMethod,
  setAutoCareAccessComputerMethod,
  autoCarePosSoftware,
  setAutoCarePosSoftware,
  autoCareEstimatingSoftware,
  setAutoCareEstimatingSoftware,
  autoCareAccountingSoftware,
  setAutoCareAccountingSoftware,
  autoCareCloudDocumentManagement,
  setAutoCareCloudDocumentManagement,
  autoCareScanner,
  setAutoCareScanner,
  checkAllFieldsAutoCareSystemLocation,
}: autoCareSystemLocationChecklistTypes) {
  return (
    <div className={`${className}`}>
      <ITStructureReview
        checkAllFieldsITStructureReview={checkAllFieldsAutoCareSystemLocation}
        autoCareITStructureReview={autoCareITStructureReview}
        setAutoCareITStructureReview={setAutoCareITStructureReview}
      />
      <AccessComputerMethod
        checkAllFieldsAccessComputerMethod={
          checkAllFieldsAutoCareSystemLocation
        }
        autoCareAccessComputerMethod={autoCareAccessComputerMethod}
        setAutoCareAccessComputerMethod={setAutoCareAccessComputerMethod}
      />
      <PosSoftware
        checkAllFieldsPosSoftware={checkAllFieldsAutoCareSystemLocation}
        autoCarePosSoftware={autoCarePosSoftware}
        setAutoCarePosSoftware={setAutoCarePosSoftware}
        posErrors={systemSoftwareLocationErrors}
      />
      <AccountingSoftware
        checkAllFieldsAccountingSoftware={checkAllFieldsAutoCareSystemLocation}
        autoCareAccountingSoftware={autoCareAccountingSoftware}
        setAutoCareAccountingSoftware={setAutoCareAccountingSoftware}
        accountingSoftwareErrors={systemSoftwareLocationErrors}
      />
      <CloudDocumentManagement
        checkAllFieldsCloudDocumentManagement={
          checkAllFieldsAutoCareSystemLocation
        }
        autoCareCloudDocumentManagement={autoCareCloudDocumentManagement}
        setAutoCareCloudDocumentManagement={setAutoCareCloudDocumentManagement}
      />
      <Scanner
        checkAllFieldsScanner={checkAllFieldsAutoCareSystemLocation}
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
  checkAllFieldsITStructureReview,
}: ITStructureReviewTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleItStructureReviewChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareITStructureReview((prev: ITStructureReviewFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        IT Structure Review
      </div>
      <div className="py-3 flex flex-col gap-4">
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
                onChange={handleItStructureReviewChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsITStructureReview}
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
                onChange={handleItStructureReviewChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsITStructureReview}
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
                onChange={handleItStructureReviewChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsITStructureReview}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="itStructureActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareITStructureReview?.itStructureActionName}
                onChange={handleItStructureReviewChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsITStructureReview}
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
                onChange={handleItStructureReviewChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsITStructureReview}
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
  checkAllFieldsAccessComputerMethod,
}: AccessComputerMethodTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleAccessComputerMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setAutoCareAccessComputerMethod((prev: AccessComputerFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Access Computer Method (Dedicated)
      </div>
      <div className="py-3 flex flex-col gap-4">
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
                onChange={handleAccessComputerMethodChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessComputerMethod}
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
                onChange={handleAccessComputerMethodChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessComputerMethod}
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
                onChange={handleAccessComputerMethodChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessComputerMethod}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="accessComputerActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareAccessComputerMethod?.accessComputerActionName}
                onChange={handleAccessComputerMethodChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessComputerMethod}
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
                onChange={handleAccessComputerMethodChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccessComputerMethod}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PosSoftware = ({
  autoCarePosSoftware,
  setAutoCarePosSoftware,
  posErrors,
  checkAllFieldsPosSoftware,
}: PosSoftwareTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handlePosSoftwareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAutoCarePosSoftware((prev: PosSoftwareFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        POS System<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="posSoftwareComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={autoCarePosSoftware?.posSoftwareComments}
                error={!!posErrors?.posSoftwareComments}
                helperText={posErrors?.posSoftwareComments}
                onChange={handlePosSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPosSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="posSoftwareStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={autoCarePosSoftware?.posSoftwareStatus}
                error={!!posErrors?.posSoftwareStatus}
                helperText={posErrors?.posSoftwareStatus}
                onChange={handlePosSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPosSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Details</label>
              <TextField
                name="posSoftwareDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Details"
                value={autoCarePosSoftware?.posSoftwareDetails}
                error={!!posErrors?.posSoftwareDetails}
                helperText={posErrors?.posSoftwareDetails}
                onChange={handlePosSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPosSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="posSoftwareActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCarePosSoftware?.posSoftwareActionName}
                error={!!posErrors?.posSoftwareActionName}
                helperText={posErrors?.posSoftwareActionName}
                onChange={handlePosSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPosSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="posSoftwareActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCarePosSoftware?.posSoftwareActionItems}
                error={!!posErrors?.posSoftwareActionItems}
                helperText={posErrors?.posSoftwareActionItems}
                onChange={handlePosSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsPosSoftware}
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
  accountingSoftwareErrors,
  checkAllFieldsAccountingSoftware,
}: AccountingSoftwareTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleAccountingSoftwareChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                error={!!accountingSoftwareErrors?.accountingSoftwareComments}
                helperText={
                  accountingSoftwareErrors?.accountingSoftwareComments
                }
                onChange={handleAccountingSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccountingSoftware}
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
                error={!!accountingSoftwareErrors?.accountingSoftwareStatus}
                helperText={accountingSoftwareErrors?.accountingSoftwareStatus}
                onChange={handleAccountingSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccountingSoftware}
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
                error={!!accountingSoftwareErrors?.accountingSoftwareDetails}
                helperText={accountingSoftwareErrors?.accountingSoftwareDetails}
                onChange={handleAccountingSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccountingSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="accountingSoftwareActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareAccountingSoftware?.accountingSoftwareActionName}
                error={!!accountingSoftwareErrors?.accountingSoftwareActionName}
                helperText={
                  accountingSoftwareErrors?.accountingSoftwareActionName
                }
                onChange={handleAccountingSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccountingSoftware}
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
                error={
                  !!accountingSoftwareErrors?.accountingSoftwareActionItems
                }
                helperText={
                  accountingSoftwareErrors?.accountingSoftwareActionItems
                }
                onChange={handleAccountingSoftwareChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsAccountingSoftware}
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
  checkAllFieldsCloudDocumentManagement,
}: CloudDocumentManagementTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleCloudDocumentManagementChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                onChange={handleCloudDocumentManagementChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsCloudDocumentManagement
                }
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
                onChange={handleCloudDocumentManagementChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsCloudDocumentManagement
                }
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
                onChange={handleCloudDocumentManagementChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsCloudDocumentManagement
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
                name="cloudDocumentManagementActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementActionName
                }
                onChange={handleCloudDocumentManagementChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsCloudDocumentManagement
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
                name="cloudDocumentManagementActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  autoCareCloudDocumentManagement?.cloudDocumentManagementActionItems
                }
                onChange={handleCloudDocumentManagementChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={
                  roleId === "4" && checkAllFieldsCloudDocumentManagement
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Scanner = ({
  autoCareScanner,
  setAutoCareScanner,
  checkAllFieldsScanner,
}: ScannerTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleScannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="py-3 flex flex-col gap-4">
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
                onChange={handleScannerChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsScanner}
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
                onChange={handleScannerChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsScanner}
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
                onChange={handleScannerChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsScanner}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="scannerActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={autoCareScanner?.scannerActionName}
                onChange={handleScannerChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsScanner}
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
                onChange={handleScannerChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsScanner}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
