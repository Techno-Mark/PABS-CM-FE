import React, { useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
// Types import
import { ModalProps, Option } from "@/models/userManage";
// Icons imports
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Static imports
import {
  businessTypeOption,
  statusOption,
  userRoles,
} from "@/static/usermanage";
// Components imports
import Filter from "@/components/admin/common/Filter";

function UserFilter({ isOpen, setIsOpen }: ModalProps) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState<Option[]>([]);
  const [businessType, setBusinessType] = useState<Option[]>([]);
  const [status, setStatus] = useState<Option[]>([]);

  const handleRoleChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
  ) => {
    setRole(newValues);
  };

  const handleBusinessTypeChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
  ) => {
    setBusinessType(newValues);
  };

  const handleStatusChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
  ) => {
    setStatus(newValues);
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setIsOpen(false);
      
      setLoading(false);
    }, 2000);
  };

  const handleResetSubmit = () => {

  };

  return (
    <Filter
      isLoading={isLoading}
      handleClose={handleClose}
      isOpen={isOpen}
      setIsOpenModal={(value) => setIsOpen(value)}
      handleSubmit={handleSubmit}
      handleResetSubmit={handleResetSubmit}
    >
      <div className="p-5 h-[calc(100%-143px)]">
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">Select Role</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={userRoles}
            value={role}
            disableCloseOnSelect
            onChange={handleRoleChange}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
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
                placeholder="Please Select"
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col py-5">
          <label className="text-[#6E6D7A] text-[12px]">Select Status</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={statusOption}
            value={status}
            onChange={handleStatusChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
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
                placeholder="Please Select"
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">
            Select Business Type
          </label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={businessTypeOption}
            value={businessType}
            onChange={handleBusinessTypeChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
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
                placeholder="Please Select"
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default UserFilter;
