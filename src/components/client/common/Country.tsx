import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { CountryOption } from "@/models/common";
import { getCountryUrl } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { useStyles } from "@/utils/useStyles";
import { Autocomplete, InputLabel, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Country = ({
  value,
  onChange,
  error,
  helperText,
  disabled,
  required,
  inputmaxwidth,
}: any) => {
  const classes = useStyles();
  const [options, setOptions] = useState<CountryOption[]>([]);

  const fetchCountryOptions = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: CountryOption[]
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setOptions(ResponseData);
          return;
      }
    };
    await callAPIwithHeaders(getCountryUrl, "get", callback, {});
  };

  useEffect(() => {
    fetchCountryOptions();
  }, []);

  const handleCountryChange = (event: any, newValue: CountryOption | null) => {
    if (newValue) {
      onChange({
        id: newValue.id,
        name: newValue.name,
        timezones: newValue.timezones,
      });
    } else {
      onChange({ id: 0, name: "", timezones: "" });
    }
  };

  return (
    <div className="text-[12px] flex flex-col">
      <InputLabel className="text-[#6E6D7A] text-[12px] pb-0.5">
        Country
        {required && <span className="text-[#DC3545]">*</span>}
      </InputLabel>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name}
        value={options.find((option) => option.name === value) || null}
        onChange={handleCountryChange}
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            size="small"
            error={!!error}
            helperText={error ? helperText : ""}
            inputProps={{
              ...params.inputProps,
              className: classes.textSize,
              style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                maxWidth: `${inputmaxwidth}`,
              },
            }}
            placeholder="Please Select Country"
          />
        )}
        renderOption={(props, option) => (
          <li {...props}>
            <Typography
              sx={{
                fontSize: "14px",
                padding: "8px 16px",
                color: "#495057",
                '&[aria-selected="true"]': {
                  backgroundColor: "#80bdff",
                  color: "#fff",
                },
                "&:hover": {
                  backgroundColor: "#e9ecef",
                },
              }}
            >
              {option.name}
            </Typography>
          </li>
        )}
      />
    </div>
  );
};

export default Country;
