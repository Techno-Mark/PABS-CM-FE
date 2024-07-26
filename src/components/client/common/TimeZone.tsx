import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { getTimezoneUrl } from "@/static/apiUrl";
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
import { useEffect, useState } from "react";

const TimeZone = ({
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

  const fetchTimezoneOptions = async () => {
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
    await callAPIwithHeaders(getTimezoneUrl, "post", callback, {
      countryId: countryId,
    });
  };

  useEffect(() => {
    fetchTimezoneOptions();
  }, [countryId]);

  const handleTimezoneChange = (e: SelectChangeEvent<string>) => {
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
        Time Zone{required && <span className="text-[#DC3545]">*</span>}
      </InputLabel>
      <FormControl
        variant="standard"
        size="small"
        error={!!error}
        disabled={disabled}
      >
        <Select
          name="Timezone"
          value={value}
          onChange={handleTimezoneChange}
          inputProps={{
            className: classes.textSize,
          }}
          displayEmpty
          renderValue={(selected) => {
            if (selected === "") {
              return (
                <span className="text-[12px] text-[#A3A3A3]">
                  Please Select Time Zone
                </span>
              );
            }
            return selected;
          }}
        >
          <MenuItem value="" disabled>
            <span>Please Select Time Zone</span>
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

export default TimeZone;
