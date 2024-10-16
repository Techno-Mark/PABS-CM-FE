import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField, InputAdornment } from "@mui/material";
// Types import
import { BusinessList, StatusOption, StringOption } from "@/models/userManage";
import { ClientModalProps } from "@/models/clientManage";
// Icons imports
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Static imports
import { checklistStatusOption, statusOption } from "@/static/usermanage";
// Components imports
import Filter from "@/components/admin/common/Filter";
// Utlis imports
import { hasMatchingBooleanValue, hasMatchingStringValue, hasMatchingValue } from "@/utils/commonFunction";
import DropDownArrow from "@/assets/Icons/dropdownarrow";

function ClientFilter({
  isOpen,
  setIsOpen,
  businessList,
  sendFilterData,
  clientListParams,
}: ClientModalProps) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [businessType, setBusinessType] = useState<BusinessList[]>([]);
  const [status, setStatus] = useState<StatusOption[]>([]);
  const [checklistStatus, setChecklistStatus] = useState<StringOption[]>([]);

  useEffect(() => {
    const selectedBusinesses =
      clientListParams.businessTypeId.length > 0
        ? businessList.filter((b: BusinessList) =>
            clientListParams.businessTypeId.includes(b.BusinessId)
          )
        : [];
    setBusinessType(selectedBusinesses);
    const selectedStatuses =
      clientListParams.status.length > 0
        ? statusOption.filter((s: StatusOption) =>
            clientListParams.status.includes(s.value)
          )
        : [];
    setStatus(selectedStatuses);
    const selectedChecklistStatus =
      clientListParams.checkListStatus.length > 0
        ? checklistStatusOption.filter((c: StringOption) =>
            clientListParams.checkListStatus.includes(c.value)
          )
        : [];
    setChecklistStatus(selectedChecklistStatus);
  }, [clientListParams, businessList]);

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

  const handleChecklistStatusChange = (
    event: React.ChangeEvent<{}>,
    newValues: StringOption[]
  ) => {
    setChecklistStatus(newValues);
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const handleSubmit = () => {
    const businessId =
      businessType.length > 0
        ? businessType.map((b: BusinessList) => b.BusinessId)
        : [];
    const statusId =
      status.length > 0 ? status.map((s: StatusOption) => s.value) : [];
    const checklistStatusId =
      checklistStatus.length > 0
        ? checklistStatus.map((c: StringOption) => c.value)
        : [];
    sendFilterData(businessId, statusId, checklistStatusId, true);
    handleClose();
  };

  const handleResetSubmit = () => {
    setLoading(false);
    setChecklistStatus([]);
    setStatus([]);
    setBusinessType([]);
    sendFilterData([], [], [], false);
    handleClose();
  };

  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown state

  const handleDropdownToggle = (dropdownName: any) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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
          checklistStatus.length !== clientListParams.checkListStatus.length ||
          businessType.length !== clientListParams.businessTypeId.length ||
          status.length !== clientListParams.status.length ||
          hasMatchingStringValue(clientListParams.checkListStatus, checklistStatus) ||
          hasMatchingValue(
            clientListParams.businessTypeId,
            businessType.map((b: BusinessList) => ({
              label: b.BussinessName,
              value: b.BusinessId,
            }))
          ) ||
          hasMatchingBooleanValue(clientListParams.status, status)
        )
      }
      isResetDisabled={!clientListParams.saveClicked}
    >
      <div className="p-8 h-[calc(100%-143px)] flex items-center gap-5">
        <div className="text-[12px] flex flex-col w-[260px]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">
            Department Type
          </label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={businessList}
            value={businessType}
            onChange={handleBusinessTypeChange}
            onOpen={() => handleDropdownToggle("department")}
            onClose={() => handleDropdownToggle(null)}
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
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <DropDownArrow
                        fillColor="#333"
                        style={{
                          transform: openDropdown === "department" ? "rotate(180deg)" : "rotate(0deg)",
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
        <div className="text-[12px] flex flex-col w-[260px]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">Status</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={statusOption}
            value={status}
            onChange={handleStatusChange}
            onOpen={() => handleDropdownToggle("Status")}
            onClose={() => handleDropdownToggle(null)}
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
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <DropDownArrow
                        fillColor="#333"
                        style={{
                          transform: openDropdown === "Status" ? "rotate(180deg)" : "rotate(0deg)",
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
        <div className="text-[12px] flex flex-col w-[260px]">
          <label className="text-[#6C6C6C] text-[12px] tracking-[0.24px]">
            Checklist Status
          </label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={checklistStatusOption}
            value={checklistStatus}
            disableCloseOnSelect
            onChange={handleChecklistStatusChange}
            onOpen={() => handleDropdownToggle("checklist")}
            onClose={() => handleDropdownToggle(null)}
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
                placeholder={checklistStatus.length <= 0 ? "Please Select" : ""}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <DropDownArrow
                        fillColor="#333"
                        style={{
                          transform: openDropdown === "checklist" ? "rotate(180deg)" : "rotate(0deg)",
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

export default ClientFilter;
