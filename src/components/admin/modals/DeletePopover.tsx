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
import { ModalProps } from "@/models/UserManage";
// Icons imports
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
// utlis imports
import { style } from "@/utils/modalStyle";

function DeletePopover({ isOpen, setIsOpen }: ModalProps) {
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
          <span className="font-bold text-[18px]"> Delete</span>
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
            Are you sure you want to delete this user?
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
            onClick={() => setIsOpen(false)}
            className={`!bg-[#023963] text-white !h-[36px] !rounded-full !w-[90px]`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="uppercase font-semibold text-[16px]">
                Delete
              </span>
            )}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default DeletePopover;
