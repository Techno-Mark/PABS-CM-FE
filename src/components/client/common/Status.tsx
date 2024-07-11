import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { getChecklistStatusUrl } from "@/static/apiUrl";
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

const Status = ({ value, onChange, error, helperText, disabled }: any) => {
  const classes = useStyles();
  const [options, setOptions] = useState<Array<{ id: number; name: string }>>(
    []
  );

  const fetchCheckListStatusOptions = async () => {
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
          const pendingOption = ResponseData.find(
            (option) => option.name === "Pending"
          );
          if (pendingOption && !value) {
            onChange(pendingOption.name);
          }
          return;
      }
    };
    await callAPIwithHeaders(getChecklistStatusUrl, "get", callback, {});
  };

  useEffect(() => {
    fetchCheckListStatusOptions();
  }, []);

  const handleStatusChange = (e: SelectChangeEvent<string>) => {
    const selectedValue = e.target.value as string;
    onChange(selectedValue);
  };

  return (
    <div className="text-[12px] flex flex-col">
      <InputLabel className="text-[#6E6D7A] text-[12px]">Status</InputLabel>
      <FormControl
        variant="standard"
        size="small"
        error={!!error}
        disabled={disabled}
      >
        <Select
          name="Status"
          value={value || ""}
          onChange={handleStatusChange}
          inputProps={{
            className: classes.textSize,
          }}
        >
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

export default Status;
