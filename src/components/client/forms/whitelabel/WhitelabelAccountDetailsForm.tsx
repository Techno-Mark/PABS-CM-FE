import { ChangeEvent, useState } from "react";
// Component import
import FormBox from "@/components/client/common/FormBox";
// MUI imports
import { Grid, TextField } from "@mui/material";
// utlis import
import {
  WhitelabelAccountDetailsFormErrors,
  WhitelabelAccountDetailsFormTypes,
  WhitelabelAccountDetailsTypes,
} from "@/models/whitelabelBasicDetails";
import { useStyles } from "@/utils/useStyles";
import { validateNumber } from "@/utils/validate";
// cookies import
import City from "@/components/client/common/City";
import Country from "@/components/client/common/Country";
import State from "@/components/client/common/State";
import Cookies from "js-cookie";

const WhitelabelAccountDetailsForm = ({
  className,
  whitelabelAccountDetailsCheckStatus,
  handleAccountDetailsSwitch,
  whitelabelAccountDetails,
  setWhitelabelAccountDetails,
  whitelabelAccountDetailsErrors,
  setWhitelabelAccountDetailsErrors,
  checkAllFieldsWhiteLabelAccountDetailsForm,
  isFormLocked,
}: WhitelabelAccountDetailsTypes) => {
  const classes = useStyles();
  const roleId = Cookies.get("roleId");
  const [countryId, setCountryId] = useState(-1);
  const [stateId, setStateId] = useState(-1);
  const [cityId, setCityId] = useState(-1);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    switch (name) {
      case "ownerPhone":
        if (validateNumber(value)) {
          const validValue = value.slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? "Owner Phone must be exactly 10 characters"
              : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 10);
          const errorMessage =
            validValue.length < 10
              ? "Owner Phone must be exactly 10 characters"
              : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        }
        break;

      case "ownerContact":
        // Allow any text but enforce length validation
        const validContactValue = value.slice(0, 10);
        const contactErrorMessage =
          validContactValue.length < 10
            ? "Owner Contact must be exactly 10 characters"
            : "";

        setWhitelabelAccountDetails(
          (prev: WhitelabelAccountDetailsFormTypes) => ({
            ...prev,
            [name]: validContactValue,
          })
        );
        setWhitelabelAccountDetailsErrors(
          (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
            ...prevErrors,
            [name]: contactErrorMessage,
          })
        );
        break;

      case "zip":
        if (validateNumber(value)) {
          const validValue = value.slice(0, 6);
          const errorMessage =
            validValue.length < 6 ? `Zip must be exactly ${6} characters` : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        } else {
          const validValue = value.replace(/[^0-9]/g, "").slice(0, 6);
          const errorMessage =
            validValue.length < 6 ? `Zip must be exactly ${6} characters` : "";

          setWhitelabelAccountDetails(
            (prev: WhitelabelAccountDetailsFormTypes) => ({
              ...prev,
              [name]: validValue,
            })
          );
          setWhitelabelAccountDetailsErrors(
            (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
              ...prevErrors,
              [name]: errorMessage,
            })
          );
        }
        break;
      case "ownerEmail":
        const errorMessage = !regex.test(value)
          ? `Please provide valid email`
          : "";

        setWhitelabelAccountDetails(
          (prev: WhitelabelAccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        setWhitelabelAccountDetailsErrors(
          (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          })
        );
        break;
      default:
        setWhitelabelAccountDetailsErrors(
          (prevErrors: WhitelabelAccountDetailsFormErrors) => ({
            ...prevErrors,
            [name]: "",
          })
        );
        setWhitelabelAccountDetails(
          (prev: WhitelabelAccountDetailsFormTypes) => ({
            ...prev,
            [name]: value,
          })
        );
        break;
    }
  };

  const handleLocationChange = (
    type: "country" | "state" | "city",
    selected: { id: number; name: string }
  ) => {
    setWhitelabelAccountDetails((prev: any) => ({
      ...prev,
      [type]: selected.name,
    }));

    if (type === "country") {
      setCountryId(selected.id);
      setWhitelabelAccountDetails((prev: any) => ({
        ...prev,
        state: "",
        city: "",
        zip: "",
      }));
    } else if (type === "state") {
      setStateId(selected.id);
      setWhitelabelAccountDetails((prev: any) => ({
        ...prev,
        city: "",
        zip: "",
      }));
    } else if (type === "city") {
      setCityId(selected.id);
      setWhitelabelAccountDetails((prev: any) => ({
        ...prev,
        zip: "",
      }));
    }
  };

  return (
    <div className={`${className}`}>
      <FormBox
        title="Account Details"
        checkStatus={whitelabelAccountDetailsCheckStatus}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleAccountDetailsSwitch(e)
        }
        switchDisabled={checkAllFieldsWhiteLabelAccountDetailsForm}
        isFormLocked={isFormLocked}
      >
        <div className="py-3 px-2 flex flex-col gap-4">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  CPA Name<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="cpaName"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter CPA Name"
                  value={whitelabelAccountDetails?.cpaName}
                  error={!!whitelabelAccountDetailsErrors.cpaName}
                  helperText={whitelabelAccountDetailsErrors.cpaName}
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
                  disabled={
                    (roleId === "4" &&
                      checkAllFieldsWhiteLabelAccountDetailsForm) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Contact<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerContact"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Contact"
                  value={whitelabelAccountDetails.ownerContact}
                  error={!!whitelabelAccountDetailsErrors.ownerContact}
                  helperText={whitelabelAccountDetailsErrors.ownerContact}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" &&
                      checkAllFieldsWhiteLabelAccountDetailsForm) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">
                  Corporate Address<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="corporateAddress"
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="standard"
                  placeholder="Please Enter Corporate Address"
                  value={whitelabelAccountDetails.corporateAddress}
                  error={!!whitelabelAccountDetailsErrors.corporateAddress}
                  helperText={whitelabelAccountDetailsErrors.corporateAddress}
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
                  disabled={
                    (roleId === "4" &&
                      checkAllFieldsWhiteLabelAccountDetailsForm) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-[12px] flex flex-col pt-1">
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Email<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="ownerEmail"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Email"
                  value={whitelabelAccountDetails.ownerEmail}
                  error={!!whitelabelAccountDetailsErrors.ownerEmail}
                  helperText={whitelabelAccountDetailsErrors.ownerEmail}
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
                  disabled={
                    (roleId === "4" &&
                      checkAllFieldsWhiteLabelAccountDetailsForm) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
              <div
                className={`text-[12px] flex flex-col ${
                  whitelabelAccountDetailsErrors.ownerEmail
                    ? "pt-[3px]"
                    : "pt-[26px]"
                }`}
              >
                <label className="text-[#6E6D7A] text-[12px]">
                  Owner Phone
                </label>
                <TextField
                  name="ownerPhone"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Owner Phone"
                  value={whitelabelAccountDetails.ownerPhone}
                  error={!!whitelabelAccountDetailsErrors.ownerPhone}
                  helperText={whitelabelAccountDetailsErrors.ownerPhone}
                  onChange={handleChange}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                  disabled={
                    (roleId === "4" &&
                      checkAllFieldsWhiteLabelAccountDetailsForm) ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <Country
                value={whitelabelAccountDetails?.country}
                onChange={(selected: { id: number; name: string }) =>
                  handleLocationChange("country", selected)
                }
                error={whitelabelAccountDetailsErrors.country}
                helperText={whitelabelAccountDetailsErrors.country}
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsWhiteLabelAccountDetailsForm) ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
                required
              />
            </Grid>
            <Grid item xs={3}>
              <State
                value={whitelabelAccountDetails?.state}
                onChange={(selected: { id: number; name: string }) =>
                  handleLocationChange("state", selected)
                }
                countryId={countryId}
                error={whitelabelAccountDetailsErrors.state}
                helperText={whitelabelAccountDetailsErrors.state}
                required
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsWhiteLabelAccountDetailsForm) ||
                  countryId === -1 ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </Grid>
            <Grid item xs={3}>
              <City
                value={whitelabelAccountDetails?.city}
                onChange={(selected: { id: number; name: string }) =>
                  handleLocationChange("city", selected)
                }
                stateId={stateId}
                error={whitelabelAccountDetailsErrors.city}
                helperText={whitelabelAccountDetailsErrors.city}
                required
                disabled={
                  (roleId === "4" &&
                    checkAllFieldsWhiteLabelAccountDetailsForm) ||
                  stateId === -1 ||
                  (isFormLocked && (roleId == "3" || roleId == "4"))
                }
              />
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col w-full">
                <label className="text-[#6E6D7A] text-[12px]">
                  Zip<span className="text-[#DC3545]">*</span>
                </label>
                <TextField
                  name="zip"
                  id="outlined-basic"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Zip Code"
                  value={whitelabelAccountDetails.zip}
                  error={!!whitelabelAccountDetailsErrors.zip}
                  helperText={whitelabelAccountDetailsErrors.zip}
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
                  disabled={
                    (roleId === "4" &&
                      checkAllFieldsWhiteLabelAccountDetailsForm) ||
                    cityId === -1 ||
                    (isFormLocked && (roleId == "3" || roleId == "4"))
                  }
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </FormBox>
    </div>
  );
};

export default WhitelabelAccountDetailsForm;
