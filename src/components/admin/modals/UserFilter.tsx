import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
// Types import
import {
  BusinessList,
  UserModalProps,
  Option,
  RoleList,
  StatusOption,
} from "@/models/userManage";
// Icons imports
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Static imports
import { statusOption } from "@/static/usermanage";
// Components imports
import Filter from "@/components/admin/common/Filter";
// Utlis import
import { hasMatchingBooleanValue, hasMatchingValue } from "@/utils/commonFunction";

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
  const [status, setStatus] = useState<StatusOption[]>([]);

  useEffect(() => {
    const selectedRoles =
      userListParams.roleId.length > 0
        ? roleList.filter((r: RoleList) =>
            userListParams.roleId.includes(r.RoleId)
          )
        : [];
    setRole(selectedRoles);
    const selectedBusinesses =
      userListParams.businessTypeId.length > 0
        ? businessList.filter((b: BusinessList) =>
            userListParams.businessTypeId.includes(b.BusinessId)
          )
        : [];
    setBusinessType(selectedBusinesses);
    const selectedStatuses =
      userListParams.userStatus.length > 0
        ? statusOption.filter((s: StatusOption) =>
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
    newValues: StatusOption[]
  ) => {
    setStatus(newValues);
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const handleSubmit = () => {
    const roleId = role.length > 0 ? role.map((r: RoleList) => r.RoleId) : [];
    const statusId =
      status.length > 0 ? status.map((s: StatusOption) => s.value) : [];
    const businessId =
      businessType.length > 0
        ? businessType.map((b: BusinessList) => b.BusinessId)
        : [];
    sendFilterData(roleId, statusId, businessId, true);
    handleClose();
  };

  const handleResetSubmit = () => {
    setLoading(false);
    setRole([]);
    setStatus([]);
    setBusinessType([]);
    sendFilterData([], [], [], false);
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
        !(
          role.length !== userListParams.roleId.length ||
          businessType.length !== userListParams.businessTypeId.length ||
          status.length !== userListParams.userStatus.length ||
          hasMatchingValue(
            userListParams.roleId,
            role.map((r: RoleList) => ({
              label: r.RoleName,
              value: r.RoleId,
            }))
          ) ||
          hasMatchingValue(
            userListParams.businessTypeId,
            businessType.map((b: BusinessList) => ({
              label: b.BussinessName,
              value: b.BusinessId,
            }))
          ) ||
          hasMatchingBooleanValue(userListParams.userStatus, status)
        )
      }
      isResetDisabled={!userListParams.saveClicked}
    >
      <div className="p-5 h-[calc(100%-143px)] flex items-center gap-5">
        <div className="text-[12px] flex flex-col w-[260px]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">Select Role</label>
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
                placeholder={role.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col w-[260px]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">Select Status</label>
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
                placeholder={status.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col w-[260px]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">
            Select Department Type
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
                placeholder={businessType.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default UserFilter;
