import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { getCityUrl } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { useStyles } from "@/utils/useStyles";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const City = ({
  value,
  onChange,
  error,
  helperText,
  disabled,
  stateId,
  required,
}: any) => {
  const classes = useStyles();
  const [options, setOptions] = useState<Array<{ id: number; name: string }>>(
    []
  );

  const fetchCityOptions = async () => {
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
    await callAPIwithHeaders(getCityUrl, "post", callback, {
      stateId: stateId,
    });
  };

  useEffect(() => {
    fetchCityOptions();
  }, [stateId]);

  const handleCityChange = (e: SelectChangeEvent<string>) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (option) => option.name === selectedValue
    );
    onChange(
      selectedOption
        ? { id: selectedOption.id, name: selectedOption.name }
        : { id: 0, name: "" }
    );
  };

  return (
    <div className="text-[12px] flex flex-col">
      <InputLabel className="text-[#6E6D7A] text-[12px]">
        City{required && <span className="text-[#DC3545]">*</span>}
      </InputLabel>
      <FormControl
        variant="standard"
        size="small"
        error={!!error}
        disabled={disabled}
      >
        <Select
          name="State"
          value={value}
          onChange={handleCityChange}
          inputProps={{
            className: classes.textSize,
          }}
          displayEmpty
          renderValue={(selected) => {
            if (selected === "") {
              return (
                <span className="text-[12px] text-[#A3A3A3]">
                  Please Select City
                </span>
              );
            }
            return selected;
          }}
        >
          <MenuItem value="" disabled>
            <span>Please Select City</span>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default City;
