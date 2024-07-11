import React from "react";
// Models import
import {
  BdmFormTypes,
  BdmTypes,
  ClientFormTypes,
  ClientTypes,
  PabsFormTypes,
  PabsTypes,
  whitelabelEscalationmatrixFormType,
} from "@/models/whitelabelChecklist";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
import Status from "@/components/client/common/Status";

const WhitelabelEscalationmatrixForm = ({
  className,
  whitelabelClient,
  setWhitelabelClient,
  whitelabelPABS,
  setWhitelabelPABS,
  whitelabelBDM,
  setWhitelabelBDM,
  checkAllFieldsWhiteLabelEscalationMatrixList,
}: whitelabelEscalationmatrixFormType) => {
  return (
    <div className={`${className}`}>
      <Client
        whitelabelClient={whitelabelClient}
        setWhitelabelClient={setWhitelabelClient}
        checkAllClient={checkAllFieldsWhiteLabelEscalationMatrixList}
      />
      <PABS
        whitelabelPABS={whitelabelPABS}
        setWhitelabelPABS={setWhitelabelPABS}
        checkAllPABS={checkAllFieldsWhiteLabelEscalationMatrixList}
      />
      <BDM
        whitelabelBDM={whitelabelBDM}
        setWhitelabelBDM={setWhitelabelBDM}
        checkAllBDM={checkAllFieldsWhiteLabelEscalationMatrixList}
      />
    </div>
  );
};

export default WhitelabelEscalationmatrixForm;

const Client = ({
  whitelabelClient,
  setWhitelabelClient,
  checkAllClient,
}: ClientTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelClient((prev: ClientFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        Client
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="clientComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelClient?.clientComments}
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
                disabled={roleId === "4" && checkAllClient}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelClient?.clientStatus}
              onChange={(value: string) =>
                setWhitelabelClient((prev: ClientFormTypes) => ({
                  ...prev,
                  clientStatus: value,
                }))
              }
              disabled={roleId === "4" && checkAllClient}
            />
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="clientActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelClient?.clientActionPABS}
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
                disabled={roleId === "4" && checkAllClient}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="clientActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelClient?.clientActionClient}
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
                disabled={roleId === "4" && checkAllClient}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const PABS = ({
  whitelabelPABS,
  setWhitelabelPABS,
  checkAllPABS,
}: PabsTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelPABS((prev: PabsFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        PABS
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="pabsComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelPABS?.pabsComments}
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
                disabled={roleId === "4" && checkAllPABS}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelPABS?.pabsStatus}
              onChange={(value: string) =>
                setWhitelabelPABS((prev: PabsFormTypes) => ({
                  ...prev,
                  pabsStatus: value,
                }))
              }
              disabled={roleId === "4" && checkAllPABS}
            />
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="pabsActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelPABS?.pabsActionPABS}
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
                disabled={roleId === "4" && checkAllPABS}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="pabsActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelPABS?.pabsActionClient}
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
                disabled={roleId === "4" && checkAllPABS}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const BDM = ({ whitelabelBDM, setWhitelabelBDM, checkAllBDM }: BdmTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setWhitelabelBDM((prev: BdmFormTypes) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="text-[15px] font-medium py-2 border-b border-[#D8D8D8] w-full">
        BDM
      </div>
      <div className="py-3 flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Comments</label>
              <TextField
                name="bdmComments"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Comments"
                value={whitelabelBDM?.bdmComments}
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
                disabled={roleId === "4" && checkAllBDM}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Status
              value={whitelabelBDM?.bdmStatus}
              onChange={(value: string) =>
                setWhitelabelBDM((prev: BdmFormTypes) => ({
                  ...prev,
                  bdmStatus: value,
                }))
              }
              disabled={roleId === "4" && checkAllBDM}
            />
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - PABS
              </label>
              <TextField
                name="bdmActionPABS"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - PABS"
                value={whitelabelBDM?.bdmActionPABS}
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
                disabled={roleId === "4" && checkAllBDM}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col w-full">
              <label className="text-[#6E6D7A] text-[12px]">
                Action Items - Client
              </label>
              <TextField
                name="bdmActionClient"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items - Client"
                value={whitelabelBDM?.bdmActionClient}
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
                disabled={roleId === "4" && checkAllBDM}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
