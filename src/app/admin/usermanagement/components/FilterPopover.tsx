import React, { useState } from "react";
// MUI imports
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  MenuItem,
  Modal,
  Select,
  Tooltip,
} from "@mui/material";
// Types imports
import { FilterProps } from "@/models/UserManage";
// Icons imports
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
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

function FilterPopover({ isOpen, setIsOpen }: FilterProps) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState<string>("-1");
  const [businessType, setBusinessType] = useState<string>("-1");
  const [status, setStatus] = useState<string>("-1");

  const handleRoleChange = (e: { target: { value: string } }) => {
    setRole(e.target.value);
  };

  const handleBusinessTypeChange = (e: { target: { value: string } }) => {
    setBusinessType(e.target.value);
  };

  const handleStatusChange = (e: { target: { value: string } }) => {
    setStatus(e.target.value);
  };

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
            <label className="text-[#6E6D7A] text-[12px]">
              Select Role<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  role === "-1" ? "!text-[12px] text-[#6E6D7A]" : "!text-[14px]"
                }`}
                value={role}
                onChange={handleRoleChange}
              >
                {userRoles.map((role) => (
                  <MenuItem
                    key={role.value}
                    value={role.value}
                    disabled={role.value === "-1"}
                  >
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="text-[12px] flex flex-col py-5">
            <label className="text-[#6E6D7A] text-[12px]">
              Select Status<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  status === "-1"
                    ? "!text-[12px] text-[#6E6D7A]"
                    : "!text-[14px]"
                }`}
                value={status}
                onChange={handleStatusChange}
              >
                {statusOption.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Select Business Type<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  businessType === "-1"
                    ? "!text-[12px] text-[#6E6D7A]"
                    : "!text-[14px]"
                }`}
                value={businessType}
                onChange={handleBusinessTypeChange}
              >
                {businessTypeOption.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
