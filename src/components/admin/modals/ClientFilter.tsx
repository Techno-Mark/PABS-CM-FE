import React, { useEffect, useState } from "react";
// MUI imports
import { Autocomplete, Checkbox, TextField } from "@mui/material";
// Types import
import { BusinessList, Option } from "@/models/userManage";
// Icons imports
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Static imports
import { checklistStatusOption, statusOption } from "@/static/usermanage";
// Components imports
import Filter from "@/components/admin/common/Filter";
import { ClientModalProps } from "@/models/clientManage";

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
  const [status, setStatus] = useState<Option[]>([]);
  const [checklistStatus, setChecklistStatus] = useState<Option[]>([]);

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
        ? statusOption.filter((s: Option) =>
            clientListParams.status.includes(s.value)
          )
        : [];
    setStatus(selectedStatuses);
    const selectedChecklistStatus =
      clientListParams.checkListStatus.length > 0
        ? checklistStatusOption.filter((c: Option) =>
            clientListParams.checkListStatus
              .map((str: string) => parseInt(str, 10))
              .includes(c.value)
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
    newValues: Option[]
  ) => {
    setStatus(newValues);
  };

  const handleChecklistStatusChange = (
    event: React.ChangeEvent<{}>,
    newValues: Option[]
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
      status.length > 0 ? status.map((s: Option) => s.value) : [];
    const checklistStatusId =
      checklistStatus.length > 0
        ? checklistStatus.map((c: Option) => c.value.toString())
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
          status.length !== clientListParams.status.length
        )
      }
      isResetDisabled={!clientListParams.saveClicked}
    >
      <div className="p-5 h-[calc(100%-143px)]">
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
                placeholder={businessType.length <= 0 ? "Please Select" : ""}
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
                placeholder={status.length <= 0 ? "Please Select" : ""}
              />
            )}
          />
        </div>
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">
            Select Checklist Status
          </label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={checklistStatusOption}
            value={checklistStatus}
            disableCloseOnSelect
            onChange={handleChecklistStatusChange}
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
              />
            )}
          />
        </div>
      </div>
    </Filter>
  );
}

export default ClientFilter;
