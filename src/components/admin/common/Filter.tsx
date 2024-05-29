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
// Style import
import { style } from "@/utils/modalStyle";
// Type import
import { FilterProps } from "@/models/common";
// Icons import
import CloseIcon from "@/assets/Icons/admin/CloseIcon";

function Filter({
  children,
  isOpen,
  setIsOpenModal,
  isLoading,
  handleClose,
  handleSubmit,
  handleResetSubmit,
  isSaveDisabled,
  isResetDisabled,
}: FilterProps) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="h-[100vh] flex justify-center outline-none"
    >
      <Box sx={style}>
        <div className="p-5 top-0 flex justify-between outline-none">
          <span className="font-bold text-[18px]"> Filter</span>
          <Tooltip title="Close" placement="bottom" arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setIsOpenModal(false)}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <Divider />
        {children}
        <div className="flex py-5 px-4 gap-5 w-full justify-end !items-end right-0 bottom-0">
          <Button
            onClick={() => setIsOpenModal(false)}
            className={`!border-[#023963] !bg-[#FFFFFF] text-[#023963] !h-[36px] !rounded-full !w-[90px] font-semibold text-[16px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            disabled={isResetDisabled}
            onClick={handleResetSubmit}
            className={`${
              !isResetDisabled && "!bg-[#023963]"
            } text-white !h-[36px] !rounded-full !w-[90px]`}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[16px]">Reset</span>
          </Button>
          <Button
            disabled={isSaveDisabled}
            onClick={handleSubmit}
            className={`${
              !isSaveDisabled && "!bg-[#023963]"
            } text-white !h-[36px] !rounded-full !w-[71px]`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{color: "white !important"}}/>
            ) : (
              <span className="uppercase font-semibold text-[16px]">Save</span>
            )}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default Filter;
