import React from "react";
// MUI imports
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Modal,
  Tooltip,
} from "@mui/material";
// Icons import
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
// Utlis import
import { style } from "@/utils/modalStyle";
// Types import
import { ConfirmModalProps } from "@/models/userManage";

function ConfirmModal({
  isOpen,
  message,
  title,
  isLoading,
  setIsOpen,
  handleClose,
  handleModalSubmit,
  setId,
}: ConfirmModalProps) {
  const safeSetUserId = setId || (() => {});
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="h-[100vh] flex justify-center"
    >
      <Box sx={style}>
        <div className="p-5 top-0 flex justify-between">
          <span className="font-bold text-[18px]"> {title}</span>
          <Tooltip title="Close" placement="bottom" arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                safeSetUserId();
              }}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <Divider />
        <div className="p-5 h-[calc(100%-143px)]">{message}</div>
        <Divider />
        <div className="flex py-5 px-4 gap-5 w-full justify-end !items-end right-0 bottom-0">
          <Button
            onClick={() => {
              setIsOpen(false);
              safeSetUserId();
            }}
            className={`!border-[#023963] !bg-[#FFFFFF] text-[#023963] !h-[36px] !rounded-full !w-[60px] font-semibold text-[16px]`}
            variant="outlined"
          >
            No
          </Button>
          <Button
            onClick={handleModalSubmit}
            className={`!bg-[#023963] text-white !h-[36px] !rounded-full !w-[60px]`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="uppercase font-semibold text-[16px]">Yes</span>
            )}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default ConfirmModal;
