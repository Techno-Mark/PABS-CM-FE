import React, { useState } from "react";
// MUI imports
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
// Types imports
import { ModalProps, Option } from "@/models/UserManage";
// Icons imports
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// Static data imports
import {
  businessTypeOption,
  statusOption,
  userRoles,
} from "@/static/usermanage";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 418,
  border: "1px solid #023963",
  bgcolor: "background.paper",
  boxShadow: 24,
};

function FilterPopover({ isOpen, setIsOpen }: ModalProps) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState<Option[]>([]);
  const [businessType, setBusinessType] = useState<Option[]>([]);
  const [status, setStatus] = useState<Option[]>([]);

  const handleRoleChange = (event: React.ChangeEvent<{}>, newValues: Option[]) => {
    setRole(newValues);
  };

 const handleBusinessTypeChange = (event: React.ChangeEvent<{}>, newValues: Option[]) => {
    setBusinessType(newValues);
  };

  const handleStatusChange = (event: React.ChangeEvent<{}>, newValues: Option[]) => {
    setStatus(newValues);
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="h-[100vh] flex justify-center"
    >
      <Box sx={style}>
        <div className="p-5 top-0 flex justify-between">
          <span className="font-bold text-[18px]"> Filter</span>
          <Tooltip title="Close" placement="bottom" arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <Divider />
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
        <Divider />
        <div className="flex py-5 px-4 gap-5 w-full justify-end !items-end right-0 bottom-0">
          <Button
            onClick={() => setIsOpen(false)}
            className={`!border-[#023963] text-[#023963] !h-[36px] !rounded-full !w-[90px] font-semibold text-[16px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className={`!bg-[#023963] text-white !h-[36px] !rounded-full !w-[71px]`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="uppercase font-semibold text-[16px]">Save</span>
            )}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default FilterPopover;
