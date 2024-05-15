import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
// Types import
import {
  BusinessList,
  UserModalProps,
  Option,
  RoleList,
} from "@/models/userManage";
// Icons imports
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Static imports
import { statusOption } from "@/static/usermanage";
// Components imports
import Filter from "@/components/admin/common/Filter";

function UserFilter({
  isOpen,
  setIsOpen,
  roleList,
  businessList,
  sendFilterData,
  userListParams,
}: UserModalProps) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState<RoleList[]>([]);
  const [businessType, setBusinessType] = useState<BusinessList[]>([]);
  const [status, setStatus] = useState<Option[]>([]);

  useEffect(() => {
    const selectedRoles =
      userListParams.roleId.length > 0
        ? roleList.filter((r: RoleList) =>
            userListParams.roleId.includes(r.RoleId)
          )
        : [];
    setRole(selectedRoles);
    const selectedBusinesses =
      userListParams.roleId.length > 0
        ? businessList.filter((b: BusinessList) =>
            userListParams.businessTypeId.includes(b.BusinessId)
          )
        : [];
    setBusinessType(selectedBusinesses);
    const selectedStatuses =
      userListParams.roleId.length > 0
        ? statusOption.filter((s: Option) =>
            userListParams.userStatus.includes(s.value)
          )
        : [];
    setStatus(selectedStatuses);
  }, [userListParams, roleList, businessList]);

  const handleRoleChange = (
    event: React.ChangeEvent<{}>,
    newValues: RoleList[]
  ) => {
    setRole(newValues);
  };

  const handleBusinessTypeChange = (
    event: React.ChangeEvent<{}>,
    newValues: BusinessList[]
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
    const roleId = role.length > 0 ? role.map((r: RoleList) => r.RoleId) : [];
    const statusId =
      status.length > 0 ? status.map((s: Option) => s.value) : [];
    const businessId =
      businessType.length > 0
        ? businessType.map((b: BusinessList) => b.BusinessId)
        : [];
    sendFilterData(roleId, statusId, businessId);
    handleClose();
  };

  const handleResetSubmit = () => {
    setLoading(false);
    setRole([]);
    setStatus([]);
    setBusinessType([]);
    sendFilterData([], [], []);
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
            options={roleList}
            value={role}
            disableCloseOnSelect
            onChange={handleRoleChange}
            getOptionLabel={(option) => option.RoleName}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.RoleName}
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
            options={businessList}
            value={businessType}
            onChange={handleBusinessTypeChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.BussinessName}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.BussinessName}
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
