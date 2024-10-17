import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField , InputAdornment} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
// Types import
import { UserModalProps, Option } from "@/models/userManage";
// Components imports
import Filter from "@/components/admin/common/Filter";
import { GetUserAllListResponse } from "@/models/auditlog";
import { useStyles } from "@/utils/useStyles";
import Calendarcustomicon from "@/assets/Icons/calendarcustomicon";
import DropDownArrow from "@/assets/Icons/dropdownarrow";

function AuditFilter({
  isOpen,
  setIsOpen,
  moduleList,
  userList,
  sendFilterData,
  auditListParams,
}: any) {
  const classes = useStyles();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);
  const [module, setModule] = useState<Option[]>([]);
  const [users, setUsers] = useState<GetUserAllListResponse[]>([]);

  useEffect(() => {
    setFromDate(
      auditListParams.fromDate
        ? formatDateForInput(auditListParams.fromDate)
        : null
    );
    setToDate(
      auditListParams.toDate ? formatDateForInput(auditListParams.toDate) : null
    );

    const selectedModules =
      auditListParams.moduleNames.length > 0
        ? moduleList.filter((m: Option) =>
            auditListParams.moduleNames.includes(m.label)
          )
        : [];
    setModule(selectedModules);

    const selectedUsers =
      auditListParams.userNames.length > 0
        ? userList.filter((u: GetUserAllListResponse) =>
            auditListParams.userNames.includes(u.UserName)
          )
        : [];
    setUsers(selectedUsers);
  }, [auditListParams, moduleList, userList]);

  const handleModuleChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
  ) => {
    setModule(newValues);
  };

  const handleClientUserChange = (
    event: React.ChangeEvent<{}>,
    newValues: GetUserAllListResponse[]
  ) => {
    setUsers(newValues);
  };

  const handleSubmit = () => {
    const formattedFromDate = formatDateWithTime(fromDate);
    const formattedToDate = formatDateWithTime(toDate);

    const moduleNames =
      module.length > 0 ? module.map((m: Option) => m.label) : [];
    const userNames =
      users.length > 0
        ? users.map((u: GetUserAllListResponse) => u.UserName)
        : [];
    sendFilterData(
      formattedFromDate,
      formattedToDate,
      moduleNames,
      userNames,
      true
    );
    setIsOpen(false);
  };

  const handleResetSubmit = () => {
    setLoading(false);
    setFromDate(null);
    setToDate(null);
    setModule([]);
    setUsers([]);
    sendFilterData(null, null, [], [], false);
    setIsOpen(false);
  };

  const formatDateWithTime = (date: string | null) => {
    if (!date) return null;

    const d = dayjs(date);
    return d.format("YYYY-MM-DD HH:mm:ss");
  };

  const formatDateForInput = (date: string) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown state

  const handleDropdownToggle = (dropdownName: any) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <Filter
      isLoading={isLoading}
      handleClose={() => setIsOpen(false)}
      isOpen={isOpen}
      setIsOpenModal={(value) => setIsOpen(value)}
      handleSubmit={handleSubmit}
      handleResetSubmit={handleResetSubmit}
      isSaveDisabled={!(fromDate || toDate || module.length || users.length)}
      isResetDisabled={!auditListParams.saveClicked}
    >
      <div className="p-5 h-[calc(100%-143px)] flex items-center justify-center flex-wrap gap-5">
        <div className="text-[12px] flex flex-col w-[48%]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">From Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={fromDate ? dayjs(fromDate) : null}
              onChange={(value) =>
                setFromDate(value ? value.format("YYYY-MM-DD") : null)
              }
              maxDate={dayjs()}
              format="MM/DD/YYYY"
              slotProps={{
                textField: {
                  variant: "standard",
                  className: classes.date,
                  readOnly: true,
                } as Record<string, any>,
              }}
              slots={{
                openPickerIcon: Calendarcustomicon, 
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="text-[12px] flex flex-col w-[48%]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">To Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={toDate ? dayjs(toDate) : null}
              onChange={(value) =>
                setToDate(value ? value.format("YYYY-MM-DD") : null)
              }
              maxDate={dayjs()}
              format="MM/DD/YYYY"
              slotProps={{
                textField: {
                  variant: "standard",
                  className: classes.date,
                  readOnly: true,
                } as Record<string, any>,
              }}
              slots={{
                openPickerIcon: Calendarcustomicon, 
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="text-[12px] flex flex-col w-[48%]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">Select Module</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={moduleList}
            value={module}
            onChange={handleModuleChange}
            onOpen={() => handleDropdownToggle("module")}
            onClose={() => handleDropdownToggle(null)}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={module.length <= 0 ? "Please Select Module" : ""}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <DropDownArrow
                        fillColor="#333"
                        style={{
                          transform: openDropdown === "module" ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col w-[48%]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">Select Username</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={userList}
            value={users}
            onChange={handleClientUserChange}
            onOpen={() => handleDropdownToggle("user")}
            onClose={() => handleDropdownToggle(null)}
            disableCloseOnSelect
            getOptionLabel={(option: GetUserAllListResponse) => option.UserName}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.UserName}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={users.length <= 0 ? "Please Select Username" : ""}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <DropDownArrow
                        fillColor="#333"
                        style={{
                          transform: openDropdown === "user" ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default AuditFilter;
