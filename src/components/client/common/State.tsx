import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { getStateUrl } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { useStyles } from "@/utils/useStyles";
import { Autocomplete, InputLabel, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const State = ({
  value,
  onChange,
  error,
  helperText,
  disabled,
  countryId,
  required,
}: any) => {
  const classes = useStyles();
  const [options, setOptions] = useState<Array<{ id: number; name: string }>>(
    []
  );

  const fetchStateOptions = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: Array<{ id: number; name: string }>
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
    await callAPIwithHeaders(getStateUrl, "post", callback, {
      countryId: countryId,
    });
  };

  useEffect(() => {
    fetchStateOptions();
  }, [countryId]);

  const handleStateChange = (
    event: any,
    newValue: { id: number; name: string } | null
  ) => {
    if (newValue) {
      onChange({
        id: newValue.id,
        name: newValue.name,
      });
    } else {
      onChange({ id: 0, name: "" });
    }
  };

  return (
    <div className="text-[12px] flex flex-col">
      <InputLabel className="text-[#6E6D7A] text-[12px] pb-[0.5px]">
        State
        {required && <span className="text-[#DC3545]">*</span>}
      </InputLabel>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name}
        value={options.find((option) => option.name === value) || null}
        onChange={handleStateChange}
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
                width: "calc(100% - 52px)",
              },
            }}
            placeholder="Please Select State"
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

export default State;
