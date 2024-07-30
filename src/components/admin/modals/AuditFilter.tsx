import React, { useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
// Types import
import { UserModalProps, Option } from "@/models/userManage";
// Components imports
import Filter from "@/components/admin/common/Filter";

function AuditFilter({
  isOpen,
  setIsOpen,
  moduleList,
  clientUserList,
  sendFilterData,
  auditListParams,
}: any) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);
  const [module, setModule] = useState<Option[]>([]);
  const [clientUser, setClientUser] = useState<Option[]>([]);

  const handleModuleChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
  ) => {
    setModule(newValues);
  };

  const handleClientUserChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
  ) => {
    setClientUser(newValues);
  };

  const handleSubmit = () => {
    const moduleId = module.length > 0 ? module.map((m: Option) => m.value) : [];
    const clientUserId =
      clientUser.length > 0 ? clientUser.map((c: Option) => c.value) : [];
    sendFilterData(fromDate, toDate, moduleId, clientUserId, true);
    handleClose();
  };

  const handleResetSubmit = () => {
    setLoading(false);
    setFromDate(null);
    setToDate(null);
    setModule([]);
    setClientUser([]);
    sendFilterData(null, null, [], [], false);
    handleClose();
  };

  return (
    <Filter
      isLoading={isLoading}
      handleClose={handleClose}
      isOpen={isOpen}
      setIsOpenModal={(value) => setIsOpen(value)}
      handleSubmit={handleSubmit}
      handleResetSubmit={handleResetSubmit}
      isSaveDisabled={
        !(fromDate || toDate || module.length || clientUser.length)
      }
      isResetDisabled={!auditListParams.saveClicked}
    >
      <div className="p-5 h-[calc(100%-143px)]">
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">From Date</label>
          <TextField
            type="date"
            value={fromDate || ""}
            onChange={(e) => setFromDate(e.target.value)}
            variant="standard"
          />
        </div>
        <div className="text-[12px] flex flex-col py-5">
          <label className="text-[#6E6D7A] text-[12px]">To Date</label>
          <TextField
            type="date"
            value={toDate || ""}
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
                <Checkbox
                  // icon={icon}
                  // checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
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
          <label className="text-[#6E6D7A] text-[12px]">Select Client User</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={clientUserList}
            value={clientUser}
            onChange={handleClientUserChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  // icon={icon}
                  // checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={clientUser.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default AuditFilter;
