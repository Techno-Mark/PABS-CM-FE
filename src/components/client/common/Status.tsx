import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { getChecklistStatusUrl } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { useStyles } from "@/utils/useStyles";
import Cookies from "js-cookie";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DropDownArrow from "@/assets/Icons/dropdownarrow";

const Status = ({ value, onChange, error, helperText, disabled }: any) => {
  const roleId = Cookies.get("roleId");
  const classes = useStyles();
  const [options, setOptions] = useState<Array<{ id: number; name: string }>>(
    []
  );
  const [open, setOpen] = useState(false);
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
          let filteredOptions = ResponseData;
          if (roleId === "4") {
            filteredOptions = ResponseData.filter(
              (option) => option.id === 1 || option.id === 2
            );
          }
          setOptions(filteredOptions);
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
          value={value}
          onChange={handleStatusChange}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          inputProps={{
            className: classes.textSize,
          }}
          className={classes.select}
          style={{ position: 'relative', zIndex: 1 }}
          IconComponent={() => (
            <DropDownArrow
              fillColor="#333"
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                zIndex: "-1",
                position: "absolute",
                right: "0"
              }}
            />
          )}
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
