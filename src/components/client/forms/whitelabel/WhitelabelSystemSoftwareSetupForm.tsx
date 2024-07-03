import React from "react";
// Models import
import {
  AccountingSoftwareTypes,
  AccountingSoftwareWhiteLabelFormTypes,
  CloudDocumentTypes,
  CloudDocumentWhiteLabelFormTypes,
  ITHelpTypes,
  ITStructureTypes,
  ItHelpWhiteLabelFormTypes,
  ItStructureWhiteLabelFormTypes,
  MessengerTypes,
  MessengerWhiteLabelFormTypes,
  OtherInfoTypes,
  OtherInfoWhiteLabelFormTypes,
  RemoteSetupTypes,
  RemoteSetupWhiteLabelFormTypes,
  SystemAccessTypes,
  SystemAccessWhiteLabelFormTypes,
  WhiteLabelSystemSoftwareSetupFormType,
  WhitelabelFormTypes,
} from "@/models/whitelabelChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";

const WhitelabelSystemSoftwareSetupForm = ({
  className,
  whitelabelSystemSoftwareErrors,
  whitelabelITStructure,
  setWhitelabelITStructure,
  whitelabelRemoteSetup,
  setWhitelabelRemoteSetup,
  whitelabelITHelp,
  setWhitelabelITHelp,
  whitelabelAccountingSoftware,
  setWhitelabelAccountingSoftware,
  whitelabelCloudDocument,
  setWhitelabelCloudDocument,
  whitelabelMessenger,
  setWhitelabelMessenger,
  whitelabelSystemAccess,
  setWhitelabelSystemAccess,
  whitelabelOtherInfo,
  setWhitelabelOtherInfo,
  checkAllFieldsWhiteLabelSystemSoftwareList,
}: WhiteLabelSystemSoftwareSetupFormType) => {
  return (
    <div className={`${className}`}>
      <ITStructure
        whitelabelITStructure={whitelabelITStructure}
        setWhitelabelITStructure={setWhitelabelITStructure}
        checkAllItStructure={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <RemoteSetup
        whitelabelRemoteSetup={whitelabelRemoteSetup}
        setWhitelabelRemoteSetup={setWhitelabelRemoteSetup}
        checkAllRemoteSetup={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <ITHelp
        whitelabelITHelp={whitelabelITHelp}
        setWhitelabelITHelp={setWhitelabelITHelp}
        checkAllITHelp={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <AccountingSoftware
        whitelabelAccountingSoftware={whitelabelAccountingSoftware}
        setWhitelabelAccountingSoftware={setWhitelabelAccountingSoftware}
        whitelabelAccountingSoftwareErrors={whitelabelSystemSoftwareErrors}
        checkAllAccountingSoftware={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <CloudDocument
        whitelabelCloudDocument={whitelabelCloudDocument}
        setWhitelabelCloudDocument={setWhitelabelCloudDocument}
        whitelabelCloudDocumentErrors={whitelabelSystemSoftwareErrors}
        checkAllCloudDocument={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <Messenger
        whitelabelMessenger={whitelabelMessenger}
        setWhitelabelMessenger={setWhitelabelMessenger}
        whitelabelMessengerErrors={whitelabelSystemSoftwareErrors}
        checkAllMessenger={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <SystemAccess
        whitelabelSystemAccess={whitelabelSystemAccess}
        setWhitelabelSystemAccess={setWhitelabelSystemAccess}
        whitelabelSystemAccessErrors={whitelabelSystemSoftwareErrors}
        checkAllSystemAccess={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
      <OtherInfo
        whitelabelOtherInfo={whitelabelOtherInfo}
        setWhitelabelOtherInfo={setWhitelabelOtherInfo}
        checkAllOtherInfo={checkAllFieldsWhiteLabelSystemSoftwareList}
      />
    </div>
  );
};

export default WhitelabelSystemSoftwareSetupForm;

const ITStructure = ({
  whitelabelITStructure,
  setWhitelabelITStructure,
  checkAllItStructure,
}: ITStructureTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelITStructure((prev: ItStructureWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        IT Structure Knowledge
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="itStructureWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelITStructure?.itStructureWhiteLabelComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllItStructure}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="itStructureWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelITStructure?.itStructureWhiteLabelStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllItStructure}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="itStructureWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelITStructure?.itStructureWhiteLabelActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllItStructure}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="itStructureWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelITStructure?.itStructureWhiteLabelActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllItStructure}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const RemoteSetup = ({
  whitelabelRemoteSetup,
  setWhitelabelRemoteSetup,
  checkAllRemoteSetup,
}: RemoteSetupTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelRemoteSetup((prev: RemoteSetupWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        If Remote Set Up - Access Computer Method (Dedicated)
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="remoteSetupWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelRemoteSetup?.remoteSetupWhiteLabelComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllRemoteSetup}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="remoteSetupWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelRemoteSetup?.remoteSetupWhiteLabelStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllRemoteSetup}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="remoteSetupWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelRemoteSetup?.remoteSetupWhiteLabelActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllRemoteSetup}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="remoteSetupWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelRemoteSetup?.remoteSetupWhiteLabelActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllRemoteSetup}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const ITHelp = ({
  whitelabelITHelp,
  setWhitelabelITHelp,
  checkAllITHelp,
}: ITHelpTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelITHelp((prev: ItHelpWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Need Your IT Teams Help?
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="itHelpWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelITHelp?.itHelpWhiteLabelComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllITHelp}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="itHelpWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelITHelp?.itHelpWhiteLabelStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllITHelp}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="itHelpWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelITHelp?.itHelpWhiteLabelActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllITHelp}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="itHelpWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelITHelp?.itHelpWhiteLabelActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllITHelp}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const AccountingSoftware = ({
  whitelabelAccountingSoftware,
  setWhitelabelAccountingSoftware,
  whitelabelAccountingSoftwareErrors,
  checkAllAccountingSoftware,
}: AccountingSoftwareTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelAccountingSoftware(
      (prev: AccountingSoftwareWhiteLabelFormTypes) => ({
        ...prev,
        [name]: value,
      })
    );
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
                name="accountingSoftwareWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={
                  whitelabelAccountingSoftware?.accountingSoftwareWhiteLabelComments
                }
                error={
                  !!whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelComments
                }
                helperText={
                  whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelComments
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccountingSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="accountingSoftwareWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={
                  whitelabelAccountingSoftware?.accountingSoftwareWhiteLabelStatus
                }
                error={
                  !!whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelStatus
                }
                helperText={
                  whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccountingSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="accountingSoftwareWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  whitelabelAccountingSoftware?.accountingSoftwareWhiteLabelActionPABS
                }
                error={
                  !!whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelActionPABS
                }
                helperText={
                  whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelActionPABS
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccountingSoftware}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="accountingSoftwareWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  whitelabelAccountingSoftware?.accountingSoftwareWhiteLabelActionClient
                }
                error={
                  !!whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelActionClient
                }
                helperText={
                  whitelabelAccountingSoftwareErrors?.accountingSoftwareWhiteLabelActionClient
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllAccountingSoftware}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const CloudDocument = ({
  whitelabelCloudDocument,
  setWhitelabelCloudDocument,
  whitelabelCloudDocumentErrors,
  checkAllCloudDocument,
}: CloudDocumentTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelCloudDocument((prev: CloudDocumentWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Cloud Document Management Software
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="cloudDocumentWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelCloudDocument?.cloudDocumentWhiteLabelComments}
                error={
                  !!whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelComments
                }
                helperText={
                  whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelComments
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength: 250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllCloudDocument}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="cloudDocumentWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelCloudDocument?.cloudDocumentWhiteLabelStatus}
                error={
                  !!whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelStatus
                }
                helperText={
                  whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllCloudDocument}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="cloudDocumentWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={
                  whitelabelCloudDocument?.cloudDocumentWhiteLabelActionPABS
                }
                error={
                  !!whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelActionPABS
                }
                helperText={
                  whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelActionPABS
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllCloudDocument}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="cloudDocumentWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  whitelabelCloudDocument?.cloudDocumentWhiteLabelActionClient
                }
                error={
                  !!whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelActionClient
                }
                helperText={
                  whitelabelCloudDocumentErrors?.cloudDocumentWhiteLabelActionClient
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllCloudDocument}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const Messenger = ({
  whitelabelMessenger,
  setWhitelabelMessenger,
  whitelabelMessengerErrors,
  checkAllMessenger,
}: MessengerTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelMessenger((prev: MessengerWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Team/Clickup/Slack/ Other Messenger Tool Set Up
        <span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="messengerWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelMessenger?.messengerWhiteLabelComments}
                error={!!whitelabelMessengerErrors?.messengerWhiteLabelComments}
                helperText={
                  whitelabelMessengerErrors?.messengerWhiteLabelComments
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllMessenger}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="messengerWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelMessenger?.messengerWhiteLabelStatus}
                error={!!whitelabelMessengerErrors?.messengerWhiteLabelStatus}
                helperText={
                  whitelabelMessengerErrors?.messengerWhiteLabelStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllMessenger}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="messengerWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelMessenger?.messengerWhiteLabelActionPABS}
                error={
                  !!whitelabelMessengerErrors?.messengerWhiteLabelActionPABS
                }
                helperText={
                  whitelabelMessengerErrors?.messengerWhiteLabelActionPABS
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllMessenger}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="messengerWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelMessenger?.messengerWhiteLabelActionClient}
                error={
                  !!whitelabelMessengerErrors?.messengerWhiteLabelActionClient
                }
                helperText={
                  whitelabelMessengerErrors?.messengerWhiteLabelActionClient
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllMessenger}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const SystemAccess = ({
  whitelabelSystemAccess,
  setWhitelabelSystemAccess,
  whitelabelSystemAccessErrors,
  checkAllSystemAccess,
}: SystemAccessTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelSystemAccess((prev: SystemAccessWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Any Other System Access<span className="text-[#DC3545]">*</span>
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="systemAccessWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelSystemAccess?.systemAccessWhiteLabelComments}
                error={
                  !!whitelabelSystemAccessErrors?.systemAccessWhiteLabelComments
                }
                helperText={
                  whitelabelSystemAccessErrors?.systemAccessWhiteLabelComments
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllSystemAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="systemAccessWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelSystemAccess?.systemAccessWhiteLabelStatus}
                error={
                  !!whitelabelSystemAccessErrors?.systemAccessWhiteLabelStatus
                }
                helperText={
                  whitelabelSystemAccessErrors?.systemAccessWhiteLabelStatus
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllSystemAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="systemAccessWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelSystemAccess?.systemAccessWhiteLabelActionPABS}
                error={
                  !!whitelabelSystemAccessErrors?.systemAccessWhiteLabelActionPABS
                }
                helperText={
                  whitelabelSystemAccessErrors?.systemAccessWhiteLabelActionPABS
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllSystemAccess}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="systemAccessWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={
                  whitelabelSystemAccess?.systemAccessWhiteLabelActionClient
                }
                error={
                  !!whitelabelSystemAccessErrors?.systemAccessWhiteLabelActionClient
                }
                helperText={
                  whitelabelSystemAccessErrors?.systemAccessWhiteLabelActionClient
                }
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllSystemAccess}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const OtherInfo = ({
  whitelabelOtherInfo,
  setWhitelabelOtherInfo,
  checkAllOtherInfo,
}: OtherInfoTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelOtherInfo((prev: OtherInfoWhiteLabelFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Other Information
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="otherInfoWhiteLabelComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelOtherInfo?.otherInfoWhiteLabelComments}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllOtherInfo}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="otherInfoWhiteLabelStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelOtherInfo?.otherInfoWhiteLabelStatus}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllOtherInfo}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="otherInfoWhiteLabelActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelOtherInfo?.otherInfoWhiteLabelActionPABS}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllOtherInfo}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="otherInfoWhiteLabelActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelOtherInfo?.otherInfoWhiteLabelActionClient}
                onChange={handleChange}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                  },
                }}
                inputProps={{
                  maxLength:250,
                  className: classes.textSize,
                }}
                disabled={roleId === "4" && checkAllOtherInfo}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
