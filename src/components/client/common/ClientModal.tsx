import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import { ClientModalProps } from "@/models/clientModal";
import { clientModalstyle, style } from "@/utils/modalStyle";
import {
  Box,
  CssBaseline,
  Modal,
  AppBar as MuiAppBar,
  styled,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import ClientSidebar from "@/components/client/common/ClientSidebar";
// Types imports
import { AppBarProps } from "@/models/adminHeader";
// MUI imports
import DownloadIcon from "@/assets/Icons/client/forms/DownloadIcon";
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import { drawerWidth } from "@/static/commonVariables";
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";
import LoginInfoAutoCare from "@/components/client/common/LoginInfoAutoCare";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth : 0,
  width: `calc(100% - ${open ? drawerWidth : 0}px)`,
}));

function ClientModal({
  isOpen,
  setIsOpenModal,
  handleClose,
}: ClientModalProps) {
  const [perCountBasicDetails, setPerCountBasicDetails] = useState<number>(0);
  const [perCountChecklist, setPerCountChecklist] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(1);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="flex justify-center outline-none"
    >
      <Box sx={clientModalstyle}>
        <div className="max-h-screen flex flex-col overflow-hidden">
          <Box
            sx={{
              height: "100vh",
              display: "flex",
            }}
          >
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                zIndex: 1,
                backgroundColor: "white !important",
                borderRadius: "5px",
                borderBottom: "0.5px solid lightgrey !important",
                boxShadow: "none !important",
                height: "50.5px !important",
                width: {
                  sm: `calc(100% - 281px)`,
                },
                ml: { sm: `65px` },
              }}
            >
              <Toolbar>
                <div className="flex flex-row w-full justify-between items-center mb-3">
                  <div className="!text-[#000000]">
                    <span className="!font-semibold text-[15px]">
                      SF00123 &nbsp;|&nbsp; Technomark &nbsp;|&nbsp; White Label
                    </span>
                  </div>
                  <div className="relative flex gap-5">
                    <Tooltip title="Download" placement="bottom" arrow>
                      <span
                        className="flex items-center cursor-pointer"
                        onClick={() => {}}
                      >
                        <DownloadIcon />
                      </span>
                    </Tooltip>
                    <Tooltip title="Close" placement="bottom" arrow>
                      <span
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsOpenModal(false)}
                      >
                        <CloseIcon />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </Toolbar>
            </AppBar>
            <ClientSidebar
              perCountChecklist={perCountChecklist}
              perCountBasicDetails={perCountBasicDetails}
              sidebarModule={formSubmit}
            />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                backgroundColor: "#F9FBFF",
                width: { sm: `calc(100% - 280px)` },
                height: "calc(100% - 64px)",
              }}
            >
              {formSubmit === 1 ? (
                <BasicDetailsAutoCare
                  setBasicDetailsFormSubmit={(value: number) =>
                    setFormSubmit(value)
                  }
                  setBasicDetailCount={(value: number) =>
                    setPerCountBasicDetails(value)
                  }
                />
              ) : formSubmit === 2 ? (
                <ChecklistAutoCare
                  setChecklistFormSubmit={(value: number) =>
                    setFormSubmit(value)
                  }
                  setChecklistCount={(value: number) =>
                    setPerCountChecklist(value)
                  }
                  formDetails={[]}
                  getFormDetials={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              ) : (
                <LoginInfoAutoCare
                  setLoginInfoFormSubmit={(value: number) =>
                    setFormSubmit(value)
                  }
                  setLoginInfoCount={(value: number) => {}}
                />
              )}
            </Box>
          </Box>
        </div>
      </Box>
    </Modal>
  );
}

export default ClientModal;
