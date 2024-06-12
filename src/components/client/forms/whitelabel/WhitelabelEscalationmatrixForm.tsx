import {
  BdmFormTypes,
  BdmTypes,
  ClientFormTypes,
  ClientTypes,
  PabsFormTypes,
  PabsTypes,
} from "@/models/whitelabel/whitelabelChecklist";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React from "react";

const WhitelabelEscalationmatrixForm = ({
  className,
  whitelabelClient,
  setWhitelabelClient,
  whitelabelPABS,
  setWhitelabelPABS,
  whitelabelBDM,
  setWhitelabelBDM,
}: any) => {
  return (
    <div className={`${className}`}>
      <Client
        whitelabelClient={whitelabelClient}
        setWhitelabelClient={setWhitelabelClient}
      />
      <PABS
        whitelabelPABS={whitelabelPABS}
        setWhitelabelPABS={setWhitelabelPABS}
      />
      <BDM whitelabelBDM={whitelabelBDM} setWhitelabelBDM={setWhitelabelBDM} />
    </div>
  );
};

export default WhitelabelEscalationmatrixForm;

const Client = ({ whitelabelClient, setWhitelabelClient }: ClientTypes) => {
  const classes = useStyles();

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
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="clientStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelClient?.clientStatus}
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
                name="clientActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelClient?.clientActionItems}
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
                name="clientActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelClient?.clientActionName}
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

const PABS = ({ whitelabelPABS, setWhitelabelPABS }: PabsTypes) => {
  const classes = useStyles();

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
        Convenient day
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="pabsStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelPABS?.pabsStatus}
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
                name="pabsActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelPABS?.pabsActionItems}
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
                name="pabsActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelPABS?.pabsActionName}
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

const BDM = ({ whitelabelBDM, setWhitelabelBDM }: BdmTypes) => {
  const classes = useStyles();

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
        Time slot availability
      </div>
      <div className="py-3 px-2 flex flex-col gap-4">
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
                  className: classes.textSize,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-[12px] flex flex-col">
              <label className="text-[#6E6D7A] text-[12px]">Status</label>
              <TextField
                name="bdmStatus"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Status"
                value={whitelabelBDM?.bdmStatus}
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
                name="bdmActionItems"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelBDM?.bdmActionItems}
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
                name="bdmActionName"
                id="outlined-basic"
                variant="standard"
                size="small"
                placeholder="Please Enter Action Items"
                value={whitelabelBDM?.bdmActionName}
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
