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
import { useStyles } from "@/utils/useStyles";

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
  const classes = useStyles();
  const safeSetUserId = setId || (() => {});
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="h-[100vh] flex justify-center"
    >
      <Box sx={style}>
        <div className="p-5 top-0 flex justify-between border-[#D8D8D8]">
          <span className="font-bold text-[18px]"> {title}</span>
          <Tooltip title="Close" placement="bottom" 
          classes={{
            tooltip: classes.tooltipStyle,
            arrow: classes.arrowStyle,
          }}
          arrow>
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
        <div className="flex py-5 px-4 gap-5 w-full justify-end !items-end right-0 bottom-0 border-[#D8D8D8]">
          <Button
            onClick={() => {
              setIsOpen(false);
              safeSetUserId();
            }}
            className={`border-[#6C6C6C] bg-[#FFFFFF] text-[#6C6C6C] hover:border-[#023963] hover:text-[#023963] !h-[36px] !rounded font-normal text-[16px] capitalize`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleModalSubmit}
            className={`bg-[#DC3545] px-4 hover:bg-[#AF2633] text-white !h-[36px] !rounded`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{color: "white !important"}}/>
            ) : (
              <span className="capitalize font-normal text-[16px]">Delete</span>
            )}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default ConfirmModal;
