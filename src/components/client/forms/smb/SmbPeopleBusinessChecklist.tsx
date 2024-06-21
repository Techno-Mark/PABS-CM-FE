import React from "react";
// Models import
import {
  TypeOfEntityFormTypes,
  TypeOfEntityTypes,
  ContactNumberFormTypes,
  ContactNumberTypes,
  AddressFormTypes,
  AddressTypes,
  EmailFormTypes,
  EmailTypes,
  ClientWebsiteFormTypes,
  ClientWebsiteTypes,
  DepartmentFormTypes,
  DepartmentTypes,
  ClientNameFormTypes,
  ClientNameTypes,
  PocFormTypes,
  PocTypes,
  DimensionsFormTypes,
  DimensionsTypes,
  BusinessNatureTypes,
  BusinessNatureFormTypes,
  OperationsPocTypes,
  OperationsPocFormTypes,
  OnboardingPocFormTypes,
  OnboardingPocTypes,
  smbPeopleBusinessTypes,
} from "@/models/smbChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
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
}: smbPeopleBusinessTypes) {
  return (
    <div className={`${className}`}>
      <div className="text-[18px] font-medium py-2 w-full">General</div>
      <ClientName
        checkAllFieldsClientName={checkAllFieldsSmbPeopleBusinessChecklist}
        smbClientName={smbClientName}
        setSmbClientName={setSmbClientName}
        smbClientNameErrors={smbPeopleBusinessErrors}
      />
      <TypeOfEntity
        checkAllFieldsTypeOfEntity={checkAllFieldsSmbPeopleBusinessChecklist}
        smbTypeOfEntity={smbTypeOfEntity}
        setSmbTypeOfEntity={setSmbTypeOfEntity}
      />
      <BusinessNature
        checkAllFieldsBusinessNature={checkAllFieldsSmbPeopleBusinessChecklist}
        smbBusinessNature={smbBusinessNature}
        setSmbBusinessNature={setSmbBusinessNature}
      />
      <Dimensions
        checkAllFieldsDimensions={checkAllFieldsSmbPeopleBusinessChecklist}
        smbDimensions={smbDimensions}
        setSmbDimensions={setSmbDimensions}
      />
      <Poc
        checkAllFieldsPoc={checkAllFieldsSmbPeopleBusinessChecklist}
        smbPoc={smbPoc}
        setSmbPoc={setSmbPoc}
        smbPocErrors={smbPeopleBusinessErrors}
      />
      <div className="text-[18px] font-medium py-2 w-full">Contact Details</div>
      <Email
        checkAllFieldsEmail={checkAllFieldsSmbPeopleBusinessChecklist}
        smbEmail={smbEmail}
        setSmbEmail={setSmbEmail}
        smbEmailErrors={smbPeopleBusinessErrors}
      />
      <ContactNumber
        checkAllFieldsContactNumber={checkAllFieldsSmbPeopleBusinessChecklist}
        smbContactNumber={smbContactNumber}
        setSmbContactNumber={setSmbContactNumber}
        smbContactNumberErrors={smbPeopleBusinessErrors}
      />
      <Address
        checkAllFieldsAddress={checkAllFieldsSmbPeopleBusinessChecklist}
        smbAddress={smbAddress}
        setSmbAddress={setSmbAddress}
        smbAddressErrors={smbPeopleBusinessErrors}
      />
      <ClientWebsite
        checkAllFieldsClientWebsite={checkAllFieldsSmbPeopleBusinessChecklist}
        smbClientWebsite={smbClientWebsite}
        setSmbClientWebsite={setSmbClientWebsite}
        smbClientWebsiteErrors={smbPeopleBusinessErrors}
      />
      <div className="text-[18px] font-medium py-2 w-full">POC Details</div>
      <Department
        checkAllFieldsDepartment={checkAllFieldsSmbPeopleBusinessChecklist}
        smbDepartment={smbDepartment}
        setSmbDepartment={setSmbDepartment}
      />
      <OnboardingPoc
        checkAllFieldsOnboardingPoc={checkAllFieldsSmbPeopleBusinessChecklist}
        smbOnboardingPoc={smbOnboardingPoc}
        setSmbOnboardingPoc={setSmbOnboardingPoc}
      />
      <OperationsPoc
        checkAllFieldsOperationsPoc={checkAllFieldsSmbPeopleBusinessChecklist}
        smbOperationsPoc={smbOperationsPoc}
        setSmbOperationsPoc={setSmbOperationsPoc}
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
}: ClientNameTypes) => {
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ClientNameStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbClientName?.ClientNameStatus}
                error={!!smbClientNameErrors?.ClientNameStatus}
                helperText={smbClientNameErrors?.ClientNameStatus}
                onChange={handleClientNameChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsClientName}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsClientName}
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
                placeholder="Please Enter Action Items"
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsClientName}
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
        Type of entity
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="TypeOfEntityStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbTypeOfEntity?.TypeOfEntityStatus}
                onChange={handleTypeOfEntityChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsTypeOfEntity}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsTypeOfEntity}
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
                placeholder="Please Enter Action Items"
                value={smbTypeOfEntity?.TypeOfEntityActionItems}
                onChange={handleTypeOfEntityChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsTypeOfEntity}
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
        Nature of business
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="BusinessNatureStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbBusinessNature?.BusinessNatureStatus}
                onChange={handleBusinessNatureChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsBusinessNature}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsBusinessNature}
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
                placeholder="Please Enter Action Items"
                value={smbBusinessNature?.BusinessNatureActionItems}
                onChange={handleBusinessNatureChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsBusinessNature}
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
        Any other subsidiary/Locations
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="DimensionsStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbDimensions?.DimensionsStatus}
                onChange={handleDimenionsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsDimensions}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsDimensions}
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
                placeholder="Please Enter Action Items"
                value={smbDimensions?.DimensionsActionItems}
                onChange={handleDimenionsChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllFieldsDimensions}
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
        POC (Point Of Contact)<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="PocStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbPoc?.PocStatus}
                error={!!smbPocErrors?.PocStatus}
                helperText={smbPocErrors?.PocStatus}
                onChange={handlePocChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPoc}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPoc}
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
                placeholder="Please Enter Action Items"
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsPoc}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="EmailStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbEmail?.EmailStatus}
                error={!!smbEmailErrors?.EmailStatus}
                helperText={smbEmailErrors?.EmailStatus}
                onChange={handleEmailChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsEmail}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsEmail}
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
                placeholder="Please Enter Action Items"
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsEmail}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ContactNumberStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbContactNumber?.ContactNumberStatus}
                error={!!smbContactNumberErrors?.ContactNumberStatus}
                helperText={smbContactNumberErrors?.ContactNumberStatus}
                onChange={handleContactNumberChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsContactNumber}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsContactNumber}
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
                placeholder="Please Enter Action Items"
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsContactNumber}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="AddressStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbAddress?.AddressStatus}
                error={!!smbAddressErrors?.AddressStatus}
                helperText={smbAddressErrors?.AddressStatus}
                onChange={handleAddressChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAddress}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAddress}
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
                placeholder="Please Enter Action Items"
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsAddress}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="ClientWebsiteStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbClientWebsite?.ClientWebsiteStatus}
                error={!!smbClientWebsiteErrors?.ClientWebsiteStatus}
                helperText={smbClientWebsiteErrors?.ClientWebsiteStatus}
                onChange={handleClientWebsiteChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsClientWebsite}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsClientWebsite}
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
                placeholder="Please Enter Action Items"
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsClientWebsite}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="DepartmentStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbDepartment?.DepartmentStatus}
                onChange={handleDepartmentChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsDepartment}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsDepartment}
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
                placeholder="Please Enter Action Items"
                value={smbDepartment?.DepartmentActionItems}
                onChange={handleDepartmentChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsDepartment}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="OperationsPocStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbOperationsPoc?.OperationsPocStatus}
                onChange={handleOperationsPocChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsOperationsPoc}
              />
            </div>
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsOperationsPoc}
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
                placeholder="Please Enter Action Items"
                value={smbOperationsPoc?.OperationsPocActionItems}
                onChange={handleOperationsPocChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsOperationsPoc}
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
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="OnboardingPocStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={smbOnboardingPoc?.OnboardingPocStatus}
                onChange={handleOnboardingPocChange}
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
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsOnboardingPoc}
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
                placeholder="Please Enter Action Items"
                value={smbOnboardingPoc?.OnboardingPocActionItems}
                onChange={handleOnboardingPocChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  className: classes.textSize,
                }}
                disabled={roleId === '4' && checkAllFieldsOnboardingPoc}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
