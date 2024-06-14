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
import React, { useEffect, useState } from "react";
import ClientSidebar from "@/components/client/common/ClientSidebar";
// Types imports
import { AppBarProps } from "@/models/adminHeader";
// Static import
import { drawerWidth } from "@/static/commonVariables";
import { ToastType } from "@/static/toastType";
// Icons imports
import DownloadIcon from "@/assets/Icons/client/forms/DownloadIcon";
// Components import
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";
import LoginInfoAutoCare from "@/components/client/common/LoginInfoAutoCare";
import SystemAccessForSmb from "@/components/client/common/SystemAccessForSmb";
import ChecklistSmb from "@/components/client/common/ChecklistSmb";
import { showToast } from "@/components/ToastContainer";
// Cookie import
import Cookies from "js-cookie";
import { callAPIwithHeaders } from "@/api/commonFunction";

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
  clientInfo,
  isOpen,
  setIsOpenModal,
  handleClose,
}: ClientModalProps) {
  const userID = Cookies.get("userId");
  const [perCountBasicDetails, setPerCountBasicDetails] = useState<number>(0);
  const [perCountChecklist, setPerCountChecklist] = useState<number>(0);
  const [formSubmitAutoCare, setFormSubmitAutoCare] = useState<number>(1);
  const [formSubmitSMB, setFormSubmitSMB] = useState<number>(1);
  const [formDetails, setFormDetails] = useState<any>(null);

  const getFormDetials = async () => {
    const callBack = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setFormDetails(ResponseData !== null ? ResponseData : null);
          return;
      }
    };

    const saveClientIndo = "/api/clients/getbyid-client-info";
    callAPIwithHeaders(saveClientIndo, "post", callBack, {
      userId: Number(userID),
    });
  };

  useEffect(() => {
    getFormDetials();
  }, []);

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
                      {clientInfo.SFID} &nbsp;|&nbsp; {clientInfo.clientName}{" "}
                      &nbsp;|&nbsp; {clientInfo.DepartmentType}
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
              clientInfo={clientInfo}
              perCountChecklist={perCountChecklist}
              perCountBasicDetails={perCountBasicDetails}
              sidebarModule={formSubmitAutoCare}
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
              {clientInfo.DepartmentId === 3 ? (
                <>
                  {formSubmitAutoCare === 1 ? (
                    <BasicDetailsAutoCare
                      clientInfo={clientInfo}
                      setBasicDetailsFormSubmit={(value: number) =>
                        setFormSubmitAutoCare(value)
                      }
                      setBasicDetailCount={(value: number) =>
                        setPerCountBasicDetails(value)
                      }
                    />
                  ) : formSubmitAutoCare === 2 ? (
                    <ChecklistAutoCare
                      clientInfo={clientInfo}
                      setChecklistFormSubmit={(value: number) =>
                        setFormSubmitAutoCare(value)
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
                      clientInfo={clientInfo}
                      setLoginInfoFormSubmit={(value: number) =>
                        setFormSubmitAutoCare(value)
                      }
                      setLoginInfoCount={(value: number) => {}}
                    />
                  )}
                </>
              ) : clientInfo.DepartmentId === 2 ? (
                <>
                  {formSubmitSMB === 1 ? (
                    <ChecklistSmb
                      clientInfo={{}}
                      setChecklistFormSubmit={(value: number) =>
                        setFormSubmitSMB(value)
                      }
                      setChecklistCount={(value: number) => {}}
                      formDetails={
                        formDetails !== null ? formDetails?.checkList : false
                      }
                      getFormDetials={getFormDetials}
                    />
                  ) : formSubmitSMB === 2 ? (
                    <SystemAccessForSmb
                      clientInfo={{}}
                      setChecklistFormSubmit={(value: number) =>
                        setFormSubmitSMB(value)
                      }
                      setChecklistCount={(value: number) => {}}
                      formDetails={
                        formDetails !== null
                          ? formDetails?.systemAccessDetails
                          : false
                      }
                      getFormDetials={getFormDetials}
                    />
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </div>
      </Box>
    </Modal>
  );
}

export default ClientModal;
