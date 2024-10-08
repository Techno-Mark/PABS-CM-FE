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
        <div className="p-4 top-0 flex justify-between items-center">
          <span className="font-bold text-[18px]">Filter</span>
          <div className="flex gap-4 items-center">
            <Button
              // disabled={isResetDisabled}
              onClick={handleResetSubmit}
              // className={`${ !isResetDisabled && "!bg-[#023963]"} text-white !h-[36px] !!rounded !w-[90px] `}
              // variant="contained"
              className={`!bg-transparent hover:!bg-[#F8D7DA] !text-[#DC3545] !h-[36px] !!rounded`}
            >
              <span className="font-normal text-[16px] capitalize">Reset All</span>
            </Button>
            {/* <Tooltip title="Close" placement="bottom" arrow>
              <span
                className="flex items-center cursor-pointer"
                onClick={() => setIsOpenModal(false)}
              >
                <CloseIcon />
              </span>
            </Tooltip> */}
          </div>
        </div>
        <Divider />
        {children}
        <Divider />
        <div className="flex py-5 px-4 gap-5 w-full justify-end !items-end right-0 bottom-0">
          {/* <Button
            disabled={isResetDisabled}
            onClick={handleResetSubmit}
            className={`${
              !isResetDisabled && "!bg-[#023963]"
            } text-white !h-[36px] !!rounded !w-[90px] `}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[16px] capitalize">Reset</span>
          </Button> */}
          <Button
            disabled={isSaveDisabled}
            onClick={handleSubmit}
            className={`${
              !isSaveDisabled && "!bg-[#023963]"
            } text-white !h-[36px] !!rounded !w-[71px]`}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{color: "white !important"}}/>
            ) : (
              <span className="uppercase font-semibold text-[16px] capitalize">Save</span>
            )}
          </Button>
          <Button
            onClick={() => setIsOpenModal(false)}
            className={`!border-[#0078C8] !bg-[#FFFFFF] hover:!border-[#023963] !text-[#0078C8] hover:!text-[#023963] h-[36px] !rounded !w-[90px] font-normal text-[16px] capitalize`}
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default Filter;
