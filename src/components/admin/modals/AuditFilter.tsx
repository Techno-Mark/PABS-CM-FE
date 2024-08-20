import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
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
      <div className="p-5 h-[calc(100%-143px)]">
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">From Date</label>
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
            />
          </LocalizationProvider>
        </div>
        <div className="text-[12px] flex flex-col py-5">
          <label className="text-[#6E6D7A] text-[12px]">To Date</label>
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
            />
          </LocalizationProvider>
        </div>
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">Select Module</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={moduleList}
            value={module}
            onChange={handleModuleChange}
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
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col py-5">
          <label className="text-[#6E6D7A] text-[12px]">Select Username</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={userList}
            value={users}
            onChange={handleClientUserChange}
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
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default AuditFilter;
