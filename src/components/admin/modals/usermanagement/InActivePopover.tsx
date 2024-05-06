import React, { useState } from "react";
// MUI imports
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Modal,
  Tooltip,
} from "@mui/material";
// Types imports
import { InActiveProps } from "@/models/UserManage";
// Icons imports
import CloseIcon from "@/assets/Icons/admin/CloseIcon";

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

function InActivePopover({ isOpen, setIsOpen, handleApply }: InActiveProps) {
  const handleClose = () => setIsOpen(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="h-[100vh] flex justify-center"
    >
      <Box sx={style}>
        <div className="p-5 top-0 flex justify-between">
          <span className="font-bold text-[18px]"> Inactive</span>
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
          <span className="flex items-center justify-center">
            Are you sure you want to inactive the user?
          </span>
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
            onClick={handleApply}
            className={`!bg-[#023963] text-white !h-[36px] !rounded-full !w-[90px]`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="uppercase font-semibold text-[16px]">
                Save
              </span>
            )}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default InActivePopover;
