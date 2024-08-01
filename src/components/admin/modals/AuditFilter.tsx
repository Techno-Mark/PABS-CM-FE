import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
// Types import
import { UserModalProps, Option } from "@/models/userManage";
// Components imports
import Filter from "@/components/admin/common/Filter";
import { GetUserAllListResponse } from "@/models/auditlog";

function AuditFilter({
  isOpen,
  setIsOpen,
  moduleList,
  userList,
  sendFilterData,
  auditListParams,
}: any) {
  const handleClose = () => setIsOpen(false);
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
    handleClose();
  };

  const handleResetSubmit = () => {
    setLoading(false);
    setFromDate(null);
    setToDate(null);
    setModule([]);
    setUsers([]);
    sendFilterData(null, null, [], [], false);
    handleClose();
  };

  const formatDateWithTime = (date: any) => {
    if (!date) return null;

    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const formatDateForInput = (date: string) => {
    return date.split(" ")[0];
  };

  return (
    <Filter
      isLoading={isLoading}
      handleClose={handleClose}
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
          <TextField
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            variant="standard"
          />
        </div>
        <div className="text-[12px] flex flex-col py-5">
          <label className="text-[#6E6D7A] text-[12px]">To Date</label>
          <TextField
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            variant="standard"
          />
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
                placeholder={module.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col py-5">
          <label className="text-[#6E6D7A] text-[12px]">
            Select Client User
          </label>
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
                placeholder={users.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default AuditFilter;
