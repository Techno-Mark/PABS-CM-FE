import {
  AccountingSoftwareFormTypes,
  AccountingSoftwareTypes,
  CloudDocumentFormTypes,
  CloudDocumentTypes,
  ITHelpFormTypes,
  ITHelpTypes,
  ITStructureFormTypes,
  ITStructureTypes,
  MessengerFormTypes,
  MessengerTypes,
  OtherInfoFormTypes,
  OtherInfoTypes,
  RemoteSetupFormTypes,
  RemoteSetupTypes,
  SystemAccessFormTypes,
  SystemAccessTypes,
} from "@/models/whitelabel/whitelabelChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React from "react";

const WhitelabelSystemSoftwareSetupForm = ({
  className,
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
}: any) => {
  return (
    <div className={`${className}`}>
      <ITStructure
        whitelabelITStructure={whitelabelITStructure}
        setWhitelabelITStructure={setWhitelabelITStructure}
      />
      <RemoteSetup
        whitelabelRemoteSetup={whitelabelRemoteSetup}
        setWhitelabelRemoteSetup={setWhitelabelRemoteSetup}
      />
      <ITHelp
        whitelabelITHelp={whitelabelITHelp}
        setWhitelabelITHelp={setWhitelabelITHelp}
      />
      <AccountingSoftware
        whitelabelAccountingSoftware={whitelabelAccountingSoftware}
        setWhitelabelAccountingSoftware={setWhitelabelAccountingSoftware}
      />
      <CloudDocument
        whitelabelCloudDocument={whitelabelCloudDocument}
        setWhitelabelCloudDocument={setWhitelabelCloudDocument}
      />
      <Messenger
        whitelabelMessenger={whitelabelMessenger}
        setWhitelabelMessenger={setWhitelabelMessenger}
      />
      <SystemAccess
        whitelabelSystemAccess={whitelabelSystemAccess}
        setWhitelabelSystemAccess={setWhitelabelSystemAccess}
      />
      <OtherInfo
        whitelabelOtherInfo={whitelabelOtherInfo}
        setWhitelabelOtherInfo={setWhitelabelOtherInfo}
      />
    </div>
  );
};

export default WhitelabelSystemSoftwareSetupForm;

const ITStructure = ({
  whitelabelITStructure,
  setWhitelabelITStructure,
}: ITStructureTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelITStructure((prev: ITStructureFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        IT Structure Knowledge
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
                value={whitelabelITStructure?.itStructureComments}
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
                value={whitelabelITStructure?.itStructureStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="itStructureActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelITStructure?.itStructureActionItems}
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
                name="itStructureActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelITStructure?.itStructureActionName}
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

const RemoteSetup = ({
  whitelabelRemoteSetup,
  setWhitelabelRemoteSetup,
}: RemoteSetupTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelRemoteSetup((prev: RemoteSetupFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        If Remote Set up - Access Computer method (dedicated)
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="remoteSetupComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelRemoteSetup?.remoteSetupComments}
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
                name="remoteSetupStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelRemoteSetup?.remoteSetupStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="remoteSetupActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelRemoteSetup?.remoteSetupActionItems}
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
                name="remoteSetupActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelRemoteSetup?.remoteSetupActionName}
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

const ITHelp = ({ whitelabelITHelp, setWhitelabelITHelp }: ITHelpTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelITHelp((prev: ITHelpFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Need your IT teams help?
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="itHelpComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelITHelp?.itHelpComments}
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
                name="itHelpStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelITHelp?.itHelpStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="itHelpActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelITHelp?.itHelpActionItems}
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
                name="itHelpActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelITHelp?.itHelpActionName}
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
  whitelabelAccountingSoftware,
  setWhitelabelAccountingSoftware,
}: AccountingSoftwareTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelAccountingSoftware((prev: AccountingSoftwareFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Accounting Software
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
                value={whitelabelAccountingSoftware?.accountingSoftwareComments}
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
                value={whitelabelAccountingSoftware?.accountingSoftwareStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="accountingSoftwareActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  whitelabelAccountingSoftware?.accountingSoftwareActionItems
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
                name="accountingSoftwareActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={
                  whitelabelAccountingSoftware?.accountingSoftwareActionName
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

const CloudDocument = ({
  whitelabelCloudDocument,
  setWhitelabelCloudDocument,
}: CloudDocumentTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelCloudDocument((prev: CloudDocumentFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Cloud Document Management Software
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="cloudDocumentComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelCloudDocument?.cloudDocumentComments}
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
                name="cloudDocumentStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelCloudDocument?.cloudDocumentStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="cloudDocumentActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelCloudDocument?.cloudDocumentActionItems}
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
                name="cloudDocumentActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelCloudDocument?.cloudDocumentActionName}
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

const Messenger = ({
  whitelabelMessenger,
  setWhitelabelMessenger,
}: MessengerTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelMessenger((prev: MessengerFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Team/Clickup/Slack/ Other Messenger tool set up
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="messengerComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelMessenger?.messengerComments}
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
                name="messengerStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelMessenger?.messengerStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="messengerActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelMessenger?.messengerActionItems}
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
                name="messengerActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelMessenger?.messengerActionName}
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

const SystemAccess = ({
  whitelabelSystemAccess,
  setWhitelabelSystemAccess,
}: SystemAccessTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelSystemAccess((prev: SystemAccessFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Any Other System access
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="systemAccessComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelSystemAccess?.systemAccessComments}
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
                name="systemAccessStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelSystemAccess?.systemAccessStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="systemAccessActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelSystemAccess?.systemAccessActionItems}
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
                name="systemAccessActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelSystemAccess?.systemAccessActionName}
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

const OtherInfo = ({
  whitelabelOtherInfo,
  setWhitelabelOtherInfo,
}: OtherInfoTypes) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelOtherInfo((prev: OtherInfoFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Other information
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="otherInfoComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelOtherInfo?.otherInfoComments}
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
                name="otherInfoStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelOtherInfo?.otherInfoStatus}
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
                Action Items - PABS
              </label>
              <TextField
                name="otherInfoActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelOtherInfo?.otherInfoActionItems}
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
                name="otherInfoActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelOtherInfo?.otherInfoActionName}
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
