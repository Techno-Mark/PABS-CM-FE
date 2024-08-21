import React, { useEffect } from "react";
// Models import
import {
  AddressFormTypes,
  AddressTypes,
  BusinessNatureFormTypes,
  BusinessNatureTypes,
  ClientNameFormTypes,
  ClientNameTypes,
  ClientWebsiteFormTypes,
  ClientWebsiteTypes,
  ContactNumberFormTypes,
  ContactNumberTypes,
  DepartmentFormTypes,
  DepartmentTypes,
  DimensionsFormTypes,
  DimensionsTypes,
  EmailFormTypes,
  EmailTypes,
  OnboardingPocFormTypes,
  OnboardingPocTypes,
  OperationsPocFormTypes,
  OperationsPocTypes,
  PocFormTypes,
  PocTypes,
  smbPeopleBusinessTypes,
  TypeOfEntityFormTypes,
  TypeOfEntityTypes,
} from "@/models/smbChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Status from "@/components/client/common/Status";
import { updateStatus } from "@/utils/statusChangeFunction";
import Cookies from "js-cookie";

function SmbPeopleBusinessChecklist({
  className,
  smbPeopleBusinessErrors,
  smbClientName,
  setSmbClientName,
  smbClientWebsite,
  setSmbClientWebsite,
  smbDepartment,
  setSmbDepartment,
  smbOperationsPoc,
  setSmbOperationsPoc,
  smbOnboardingPoc,
  setSmbOnboardingPoc,
  smbTypeOfEntity,
  setSmbTypeOfEntity,
  smbBusinessNature,
  setSmbBusinessNature,
  smbDimensions,
  setSmbDimensions,
  smbPoc,
  setSmbPoc,
  smbEmail,
  setSmbEmail,
  smbContactNumber,
  setSmbContactNumber,
  smbAddress,
  setSmbAddress,
  checkAllFieldsSmbPeopleBusinessChecklist,
  isFormLocked,
}: smbPeopleBusinessTypes) {


  useEffect(() => {
    updateStatus(
      smbClientName.ClientNameDetails,
      setSmbClientName,
      "ClientNameStatus"
    );

    updateStatus(
      smbTypeOfEntity.TypeOfEntityDetails,
      setSmbTypeOfEntity,
      "TypeOfEntityStatus"
    );

    updateStatus(
      smbBusinessNature.BusinessNatureDetails,
      setSmbBusinessNature,
      "BusinessNatureStatus"
    );

    updateStatus(
      smbDimensions.DimensionsDetails,
      setSmbDimensions,
      "DimensionsStatus"
    );

    updateStatus(smbPoc.PocDetails, setSmbPoc, "PocStatus");

    updateStatus(smbEmail.EmailDetails, setSmbEmail, "EmailStatus");

    updateStatus(
      smbContactNumber.ContactNumberDetails,
      setSmbContactNumber,
      "ContactNumberStatus"
    );

    updateStatus(smbAddress.AddressDetails, setSmbAddress, "AddressStatus");

    updateStatus(
      smbClientWebsite.ClientWebsiteDetails,
      setSmbClientWebsite,
      "ClientWebsiteStatus"
    );

    updateStatus(
      smbDepartment.DepartmentDetails,
      setSmbDepartment,
      "DepartmentStatus"
    );

    updateStatus(
      smbOnboardingPoc.OnboardingPocDetails,
      setSmbOnboardingPoc,
      "OnboardingPocStatus"
    );

    updateStatus(
      smbOperationsPoc.OperationsPocDetails,
      setSmbOperationsPoc,
      "OperationsPocStatus"
    );
  }, [
    smbClientName.ClientNameDetails,
    setSmbClientName,
    smbTypeOfEntity.TypeOfEntityDetails,
    setSmbTypeOfEntity,
    smbBusinessNature.BusinessNatureDetails,
    setSmbBusinessNature,
    smbDimensions.DimensionsDetails,
    setSmbDimensions,
    smbPoc.PocDetails,
    setSmbPoc,
    smbEmail.EmailDetails,
    setSmbEmail,
    smbContactNumber.ContactNumberDetails,
    setSmbContactNumber,
    smbAddress.AddressDetails,
    setSmbAddress,
    smbClientWebsite.ClientWebsiteDetails,
    setSmbClientWebsite,
    smbDepartment.DepartmentDetails,
    setSmbDepartment,
    smbOnboardingPoc.OnboardingPocDetails,
    setSmbOnboardingPoc,
    smbOperationsPoc.OperationsPocDetails,
    setSmbOperationsPoc,
  ]);

  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">General</div>
      <ClientName
        checkAllFieldsClientName={checkAllFieldsSmbPeopleBusinessChecklist}
        smbClientName={smbClientName}
        setSmbClientName={setSmbClientName}
        smbClientNameErrors={smbPeopleBusinessErrors}
        isFormLocked={isFormLocked}
      />
      <TypeOfEntity
        checkAllFieldsTypeOfEntity={checkAllFieldsSmbPeopleBusinessChecklist}
        smbTypeOfEntity={smbTypeOfEntity}
        setSmbTypeOfEntity={setSmbTypeOfEntity}
        isFormLocked={isFormLocked}
      />
      <BusinessNature
        checkAllFieldsBusinessNature={checkAllFieldsSmbPeopleBusinessChecklist}
        smbBusinessNature={smbBusinessNature}
        setSmbBusinessNature={setSmbBusinessNature}
        isFormLocked={isFormLocked}
      />
      <Dimensions
        checkAllFieldsDimensions={checkAllFieldsSmbPeopleBusinessChecklist}
        smbDimensions={smbDimensions}
        setSmbDimensions={setSmbDimensions}
        isFormLocked={isFormLocked}
      />
      <Poc
        checkAllFieldsPoc={checkAllFieldsSmbPeopleBusinessChecklist}
        smbPoc={smbPoc}
        setSmbPoc={setSmbPoc}
        smbPocErrors={smbPeopleBusinessErrors}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">Contact Details</div>
      <Email
        checkAllFieldsEmail={checkAllFieldsSmbPeopleBusinessChecklist}
        smbEmail={smbEmail}
        setSmbEmail={setSmbEmail}
        smbEmailErrors={smbPeopleBusinessErrors}
        isFormLocked={isFormLocked}
      />
      <ContactNumber
        checkAllFieldsContactNumber={checkAllFieldsSmbPeopleBusinessChecklist}
        smbContactNumber={smbContactNumber}
        setSmbContactNumber={setSmbContactNumber}
        smbContactNumberErrors={smbPeopleBusinessErrors}
        isFormLocked={isFormLocked}
      />
      <Address
        checkAllFieldsAddress={checkAllFieldsSmbPeopleBusinessChecklist}
        smbAddress={smbAddress}
        setSmbAddress={setSmbAddress}
        smbAddressErrors={smbPeopleBusinessErrors}
        isFormLocked={isFormLocked}
      />
      <ClientWebsite
        checkAllFieldsClientWebsite={checkAllFieldsSmbPeopleBusinessChecklist}
        smbClientWebsite={smbClientWebsite}
        setSmbClientWebsite={setSmbClientWebsite}
        smbClientWebsiteErrors={smbPeopleBusinessErrors}
        isFormLocked={isFormLocked}
      />
      <div className="text-[18px] font-medium py-2 w-full">POC Details</div>
      <Department
        checkAllFieldsDepartment={checkAllFieldsSmbPeopleBusinessChecklist}
        smbDepartment={smbDepartment}
        setSmbDepartment={setSmbDepartment}
        isFormLocked={isFormLocked}
      />
      <OnboardingPoc
        checkAllFieldsOnboardingPoc={checkAllFieldsSmbPeopleBusinessChecklist}
        smbOnboardingPoc={smbOnboardingPoc}
        setSmbOnboardingPoc={setSmbOnboardingPoc}
        isFormLocked={isFormLocked}
      />
      <OperationsPoc
        checkAllFieldsOperationsPoc={checkAllFieldsSmbPeopleBusinessChecklist}
        smbOperationsPoc={smbOperationsPoc}
        setSmbOperationsPoc={setSmbOperationsPoc}
        isFormLocked={isFormLocked}
      />
    </div>
  );
}

export default SmbPeopleBusinessChecklist;

const ClientName = ({
  smbClientName,
  setSmbClientName,
  smbClientNameErrors,
  checkAllFieldsClientName,
  isFormLocked,
}: ClientNameTypes) => {
  console.log("🚀 ~ smbClientName:", smbClientName);
  const classes = useStyles();
  const roleId = Cookies.get("roleId");
  const handleClientNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbClientName((prev: ClientNameFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Client Name<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbClientName?.ClientNameStatus}
              onChange={(value: string) =>
                setSmbClientName((prev: ClientNameFormTypes) => ({
                  ...prev,
                  ClientNameStatus: value,
                }))
              }
              error={smbClientNameErrors?.ClientNameStatus}
              helperText={smbClientNameErrors?.ClientNameStatus}
              disabled={
                (roleId === "4" && checkAllFieldsClientName) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ClientNameDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbClientName?.ClientNameDetails}
                error={!!smbClientNameErrors?.ClientNameDetails}
                helperText={smbClientNameErrors?.ClientNameDetails}
                onChange={handleClientNameChange}
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
                  (roleId === "4" && checkAllFieldsClientName) ||
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
                name="ClientNameActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbClientName?.ClientNameActionItems}
                error={!!smbClientNameErrors?.ClientNameActionItems}
                helperText={smbClientNameErrors?.ClientNameActionItems}
                onChange={handleClientNameChange}
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
                  (roleId === "4" && checkAllFieldsClientName) ||
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

const TypeOfEntity = ({
  smbTypeOfEntity,
  setSmbTypeOfEntity,
  checkAllFieldsTypeOfEntity,
  isFormLocked,
}: TypeOfEntityTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleTypeOfEntityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbTypeOfEntity((prev: TypeOfEntityFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Type of Entity
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbTypeOfEntity?.TypeOfEntityStatus}
              onChange={(value: string) =>
                setSmbTypeOfEntity((prev: TypeOfEntityFormTypes) => ({
                  ...prev,
                  TypeOfEntityStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsTypeOfEntity) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="TypeOfEntityDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbTypeOfEntity?.TypeOfEntityDetails}
                onChange={handleTypeOfEntityChange}
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
                  (roleId === "4" && checkAllFieldsTypeOfEntity) ||
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
                name="TypeOfEntityActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbTypeOfEntity?.TypeOfEntityActionItems}
                onChange={handleTypeOfEntityChange}
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
                  (roleId === "4" && checkAllFieldsTypeOfEntity) ||
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

const BusinessNature = ({
  smbBusinessNature,
  setSmbBusinessNature,
  checkAllFieldsBusinessNature,
  isFormLocked,
}: BusinessNatureTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleBusinessNatureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbBusinessNature((prev: BusinessNatureFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Nature of Business
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbBusinessNature?.BusinessNatureStatus}
              onChange={(value: string) =>
                setSmbBusinessNature((prev: BusinessNatureFormTypes) => ({
                  ...prev,
                  BusinessNatureStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsBusinessNature) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="BusinessNatureDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbBusinessNature?.BusinessNatureDetails}
                onChange={handleBusinessNatureChange}
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
                  (roleId === "4" && checkAllFieldsBusinessNature) ||
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
                name="BusinessNatureActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbBusinessNature?.BusinessNatureActionItems}
                onChange={handleBusinessNatureChange}
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
                  (roleId === "4" && checkAllFieldsBusinessNature) ||
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

const Dimensions = ({
  smbDimensions,
  setSmbDimensions,
  checkAllFieldsDimensions,
  isFormLocked,
}: DimensionsTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleDimenionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbDimensions((prev: DimensionsFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Any Other Subsidiary/Locations
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbDimensions?.DimensionsStatus}
              onChange={(value: string) =>
                setSmbDimensions((prev: DimensionsFormTypes) => ({
                  ...prev,
                  DimensionsStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsDimensions) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="DimensionsDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbDimensions?.DimensionsDetails}
                onChange={handleDimenionsChange}
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
                  (roleId === "4" && checkAllFieldsDimensions) ||
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
                name="DimensionsActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbDimensions?.DimensionsActionItems}
                onChange={handleDimenionsChange}
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
                  (roleId === "4" && checkAllFieldsDimensions) ||
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

const Poc = ({
  smbPoc,
  setSmbPoc,
  smbPocErrors,
  checkAllFieldsPoc,
  isFormLocked,
}: PocTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handlePocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbPoc((prev: PocFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        POC (Point of Contact)<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbPoc?.PocStatus}
              onChange={(value: string) =>
                setSmbPoc((prev: PocFormTypes) => ({
                  ...prev,
                  PocStatus: value,
                }))
              }
              error={smbPocErrors?.PocStatus}
              helperText={smbPocErrors?.PocStatus}
              disabled={
                (roleId === "4" && checkAllFieldsPoc) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="PocDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbPoc?.PocDetails}
                error={!!smbPocErrors?.PocDetails}
                helperText={smbPocErrors?.PocDetails}
                onChange={handlePocChange}
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
                  (roleId === "4" && checkAllFieldsPoc) ||
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
                name="PocActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbPoc?.PocActionItems}
                error={!!smbPocErrors?.PocActionItems}
                helperText={smbPocErrors?.PocActionItems}
                onChange={handlePocChange}
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
                  (roleId === "4" && checkAllFieldsPoc) ||
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

const Email = ({
  smbEmail,
  setSmbEmail,
  smbEmailErrors,
  checkAllFieldsEmail,
  isFormLocked,
}: EmailTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbEmail((prev: EmailFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Email<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbEmail?.EmailStatus}
              onChange={(value: string) =>
                setSmbEmail((prev: EmailFormTypes) => ({
                  ...prev,
                  EmailStatus: value,
                }))
              }
              error={smbEmailErrors?.EmailStatus}
              helperText={smbEmailErrors?.EmailStatus}
              disabled={
                (roleId === "4" && checkAllFieldsEmail) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="EmailDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbEmail?.EmailDetails}
                error={!!smbEmailErrors?.EmailDetails}
                helperText={smbEmailErrors?.EmailDetails}
                onChange={handleEmailChange}
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
                  (roleId === "4" && checkAllFieldsEmail) ||
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
                name="EmailActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbEmail?.EmailActionItems}
                error={!!smbEmailErrors?.EmailActionItems}
                helperText={smbEmailErrors?.EmailActionItems}
                onChange={handleEmailChange}
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
                  (roleId === "4" && checkAllFieldsEmail) ||
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

const ContactNumber = ({
  smbContactNumber,
  setSmbContactNumber,
  smbContactNumberErrors,
  checkAllFieldsContactNumber,
  isFormLocked,
}: ContactNumberTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbContactNumber((prev: ContactNumberFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Contact Number<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbContactNumber?.ContactNumberStatus}
              onChange={(value: string) =>
                setSmbContactNumber((prev: ContactNumberFormTypes) => ({
                  ...prev,
                  ContactNumberStatus: value,
                }))
              }
              error={smbContactNumberErrors?.ContactNumberStatus}
              helperText={smbContactNumberErrors?.ContactNumberStatus}
              disabled={
                (roleId === "4" && checkAllFieldsContactNumber) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ContactNumberDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbContactNumber?.ContactNumberDetails}
                error={!!smbContactNumberErrors?.ContactNumberDetails}
                helperText={smbContactNumberErrors?.ContactNumberDetails}
                onChange={handleContactNumberChange}
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
                  (roleId === "4" && checkAllFieldsContactNumber) ||
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
                name="ContactNumberActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbContactNumber?.ContactNumberActionItems}
                error={!!smbContactNumberErrors?.ContactNumberActionItems}
                helperText={smbContactNumberErrors?.ContactNumberActionItems}
                onChange={handleContactNumberChange}
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
                  (roleId === "4" && checkAllFieldsContactNumber) ||
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

const Address = ({
  smbAddress,
  setSmbAddress,
  smbAddressErrors,
  checkAllFieldsAddress,
  isFormLocked,
}: AddressTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbAddress((prev: AddressFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Address<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbAddress?.AddressStatus}
              onChange={(value: string) =>
                setSmbAddress((prev: AddressFormTypes) => ({
                  ...prev,
                  AddressStatus: value,
                }))
              }
              error={smbAddressErrors?.AddressStatus}
              helperText={smbAddressErrors?.AddressStatus}
              disabled={
                (roleId === "4" && checkAllFieldsAddress) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="AddressDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbAddress?.AddressDetails}
                error={!!smbAddressErrors?.AddressDetails}
                helperText={smbAddressErrors?.AddressDetails}
                onChange={handleAddressChange}
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
                  (roleId === "4" && checkAllFieldsAddress) ||
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
                name="AddressActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbAddress?.AddressActionItems}
                error={!!smbAddressErrors?.AddressActionItems}
                helperText={smbAddressErrors?.AddressActionItems}
                onChange={handleAddressChange}
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
                  (roleId === "4" && checkAllFieldsAddress) ||
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

const ClientWebsite = ({
  smbClientWebsite,
  setSmbClientWebsite,
  smbClientWebsiteErrors,
  checkAllFieldsClientWebsite,
  isFormLocked,
}: ClientWebsiteTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleClientWebsiteChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbClientWebsite((prev: ClientWebsiteFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Client Website<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbClientWebsite?.ClientWebsiteStatus}
              onChange={(value: string) =>
                setSmbClientWebsite((prev: ClientWebsiteFormTypes) => ({
                  ...prev,
                  ClientWebsiteStatus: value,
                }))
              }
              error={smbClientWebsiteErrors?.ClientWebsiteStatus}
              helperText={smbClientWebsiteErrors?.checkAllFieldsClientWebsite}
              disabled={
                (roleId === "4" && checkAllFieldsClientWebsite) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="ClientWebsiteDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbClientWebsite?.ClientWebsiteDetails}
                error={!!smbClientWebsiteErrors?.ClientWebsiteDetails}
                helperText={smbClientWebsiteErrors?.ClientWebsiteDetails}
                onChange={handleClientWebsiteChange}
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
                  (roleId === "4" && checkAllFieldsClientWebsite) ||
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
                name="ClientWebsiteActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbClientWebsite?.ClientWebsiteActionItems}
                error={!!smbClientWebsiteErrors?.ClientWebsiteActionItems}
                helperText={smbClientWebsiteErrors?.ClientWebsiteActionItems}
                onChange={handleClientWebsiteChange}
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
                  (roleId === "4" && checkAllFieldsClientWebsite) ||
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

const Department = ({
  smbDepartment,
  setSmbDepartment,
  checkAllFieldsDepartment,
  isFormLocked,
}: DepartmentTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSmbDepartment((prev: DepartmentFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Department Head
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbDepartment?.DepartmentStatus}
              onChange={(value: string) =>
                setSmbDepartment((prev: DepartmentFormTypes) => ({
                  ...prev,
                  DepartmentStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsDepartment) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="DepartmentDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbDepartment?.DepartmentDetails}
                onChange={handleDepartmentChange}
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
                  (roleId === "4" && checkAllFieldsDepartment) ||
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
                name="DepartmentActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbDepartment?.DepartmentActionItems}
                onChange={handleDepartmentChange}
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
                  (roleId === "4" && checkAllFieldsDepartment) ||
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

const OperationsPoc = ({
  smbOperationsPoc,
  setSmbOperationsPoc,
  checkAllFieldsOperationsPoc,
  isFormLocked,
}: OperationsPocTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleOperationsPocChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbOperationsPoc((prev: OperationsPocFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Operations POC
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbOperationsPoc?.OperationsPocStatus}
              onChange={(value: string) =>
                setSmbOperationsPoc((prev: OperationsPocFormTypes) => ({
                  ...prev,
                  OperationsPocStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsOperationsPoc) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="OperationsPocDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbOperationsPoc?.OperationsPocDetails}
                onChange={handleOperationsPocChange}
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
                  (roleId === "4" && checkAllFieldsOperationsPoc) ||
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
                name="OperationsPocActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbOperationsPoc?.OperationsPocActionItems}
                onChange={handleOperationsPocChange}
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
                  (roleId === "4" && checkAllFieldsOperationsPoc) ||
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

const OnboardingPoc = ({
  smbOnboardingPoc,
  setSmbOnboardingPoc,
  checkAllFieldsOnboardingPoc,
  isFormLocked,
}: OnboardingPocTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleOnboardingPocChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSmbOnboardingPoc((prev: OnboardingPocFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Onboarding POC
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Status
              value={smbOnboardingPoc?.OnboardingPocStatus}
              onChange={(value: string) =>
                setSmbOnboardingPoc((prev: OnboardingPocFormTypes) => ({
                  ...prev,
                  OnboardingPocStatus: value,
                }))
              }
              disabled={
                (roleId === "4" && checkAllFieldsOnboardingPoc) ||
                (isFormLocked && (roleId == "3" || roleId == "4"))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">Information</label>
              <TextField
                name="OnboardingPocDetails"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Information"
                value={smbOnboardingPoc?.OnboardingPocDetails}
                onChange={handleOnboardingPocChange}
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
                  (roleId === "4" && checkAllFieldsOnboardingPoc) ||
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
                name="OnboardingPocActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS/Client"
                value={smbOnboardingPoc?.OnboardingPocActionItems}
                onChange={handleOnboardingPocChange}
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
                  (roleId === "4" && checkAllFieldsOnboardingPoc) ||
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
